# Hikari Connection Pool 파헤치기

**Hikari Connectino Pool 동작 원리 및 옵션 설정 이해하기**
<!--more-->
 [CP(Connection Pool) 라이브러리 성능 검증](/connection_pool_benchmark) 을 통해 Hikari 성능이 좋다는 것은 확인하였고, 어떠한 동작 방식으로 성능이 이렇게 좋아질 수 있었는지를 확인하고자 동작 방식과 hikari에서 사용되는 옵션들에 대해 이해할 기회를 가져볼까 한다.
 JDBC Connection을 맺는 과정에서의 리소스 비용 부담이 되기 때문에 


## 1 Description
 기존 사용되던 tomcat-dbcp, dbcp, bonecp 보다 더 빠르고, 가벼운 Connection Pool로 'zero-overhead'라고 할 정도의 경량화 된 라이브러리

* hikari cp가 빠른 이유
  * 코드 디자인 및 최적화를 통해 스레드 간의 잠금 경쟁이 크게 감소
  * JDK 및 cglib의 동적 프록시와 비교하여 javaassist(java 바이트 코드를 조작하는 수단을 제공하는 라이브러리)를 통해 클래스 파일을 직접 수정하여 생성된 프록시 클래스는 작동 속도가 빠름
  * FastList 및 사용자 정의 컬렉션 클래스 도입하여 세부 로직을 최적화하여 제공

## 2 Architecture
 다른 DBCP들과 아키텍쳐들은 유사하며, 아키텍쳐의 차이에 의한 성능차이가 아닌 pool(ConcurrentBag) 구조 및 관리 방법에 의한 것임을 확인 할 수 있습니다. 

{{< mermaid >}}
classDiagram
	HikarConfigMXBean <|.. HikariConfig
	HikarPoolMXBean <|.. PoolBase
	HikariConfig --|> HikariDataSource
	PoolBase <|-- HikariPool
	IBagStateListener <|.. HikariPool
	ConcurrentBag --* HikariPool

	HikariDataSource --|> Closeable
	HikariDataSource --|> DataSource
	HikariDataSource *-- HikariPool
	PoolBase *-- HikariConfig
	class HikariConfig
	class HikariPool
	class ConcurrentBag
	class HikarConfigMXBean{<<interface>>}
	class HikarPoolMXBean{<<interface>>}
	class IBagStateListener{<<interface>>}
	class Closeable{<<interface>>}
	class DataSource{<<interface>>}
	class HikariDataSource
	class PoolBase{<<abstract>>}
{{< /mermaid >}}

| GROUP  | Modules | Description |
| ------ | ----------- | ----------- |
| JMX   | HikariCOnfigMXBean, HikariPoolMXBean | 데이터 수집을 통한 모니터링 제공 |
| 설정정보| HikariConfig | 옵션  |
| Connection Pool| PoolBase, IBagStateListner, HikiarPool, ConcurrentBag | Connection 관리|
| DataSource | DataSource, HikariDataSource, Closeable | Connection Pool을 지원하기 위한 인터페이스 |


## 3 설명
### 3.1 특징
 1. hikari CP의 특이점이 있다면 아래 코드와 같이 DataSource에 2개의 pool이 존재한다는 것이다. fastPathPool은 전체 pool에서 요청전에 캐시 처럼 사용한다. [volatile](https://nesoy.github.io/articles/2018-06/Java-volatile)을 사용하는 경우 메인메모리에 read/write를 수행하여 일치되는 값을 공유하여 사용할 수 있지만 오버헤드가 있다.

```java
 public class HikariDataSource extends HikariConfig implements DataSource, Closeable
{
   private final HikariPool fastPathPool;
   private volatile HikariPool pool;
}
```

2. 다수의 connection이 동시에 연결/닫기 를 수행했을 때의 병목을 방지 하기 위해서 maxLifeTime의 2.5% 수준의 변화를 주어 timeout값을 설정하여 스케쥴에 등록한다. 

3. maxLifeTime 설정된 시간 만큼 connection 을 유지만 하고 갱신하지 않는다.(갱신에 따른 오버헤드 제거)

### 3.2 동작 순서
#### 3.2.1 Connection 가져오기

1. fastPathPool에서 대여 이력이 있는지를 확인을 통해 Connection 요청
2. fastPathPool에 없으면 Pool에서 Connection 요청
3. Pool에도 없다면 handoffQueue에서 대기
4. 일정 시간 이내 다른 thread에게 connection이 반납되지 않으면 Exception 발생 

#### 3.2.2 Connection 닫기
1. idel connection으로 변경(state를 STATE_NOT_IN_USE로 변경)
2. handOffQueue에서 대기 쓰레드가 있는지를 확인하여 connectino 전달 없다면 pool로 삽입
3. connection 대여 이력 추가


### 3.3 참고
* HikariCP는 test-while-idle Connection 갱신하여 사용하는 것을 권장하지 않는다.(강제 설정하는 것은 가능)
  * maxLifeTime만큼만 connection을 유지하고 새로운 connection을 생성하여 사용한다.(불필요한 Validation Query가 발생하지 않음)
  * maxLifeTime은 DB의 waitTimeout보다는 작은 값을 설정해야 한다.
  * [(참고) HikariCP는 test-while-idle과 같은 커넥션 갱신 기능이 없을까?](https://pkgonan.github.io/2018/04/HikariCP-test-while-idle)

*** 

## 4 옵션
### 4.1 Essentials

| Option | Description |
| ------ | ----------- |
| dataSourceClassName   | datasource JDBC 드라이버가 제공하는 클래스 이름 |
| jdbcUrl | db 접속 url  |
| username  | 사용자명 |
| password | 사용자 비밀번호 |

### 4.2 Optionals(Frequently used)

| Option | Description |
| ------ | ----------- |
| autoCommit | connection 반납시 commit 여부(default:true)|
| connectionTimeout | connection 연결시도시 타임아웃 값 (default:30000(30초)) |
| idleTimeout | connection pool에서 유휴 상태의 생명주기 (default:600000(10분)) |
| maxLifetime | connection 의 최대 생명주기 (default:1800000(30분)) |
| connectionTestQuery | 드라이버가 JDBC4를 지원하는 경우에는 설정하지 않음. legacy 드라이버를 위해 사용|
| minimumIdle | 최쇠 연결 유휴 connection 수 |
| metricRegistry | 모니터링용. metric을 기록하는데 사용할 Codahale/Dropwizard의 인스턴스를 지정|
| healthCheckRegistry | 모니터링용. health check 정보를 사용할 Codahale/Dropwizard의 인스턴스를 지정 |
| poolName | connection pool의 사용자 이름 정의|

### 4.3 Optionals(Infrequently used)

| Option | Description |
| ------ | ----------- |
| initializationFailTimeout | 초기 연결로 풀에 시드 connection으로 할 수 없을 경우 실패 여부를 제어 (default:1)|
| isolateInternalQueries | 서비스용이 아닌 테스트와 같은 내부 풀 쿼리를 분리 여부를 결정. autoCommit이 비활성화된 경우에만 적용 |
| allowPoolSuspension | JMX를 통해 pool을 일시 중단하고 재개할 수 있는지 여부를 제어. 특정 장애 조치 자동화 시나리오에 유용 (default:false) |
| readOnly | 읽기모드 전용. 데이터베이스 지원여부를 확인하고 사용 가능(default:false)|
| registerMbeans | JMX 관리 Bean의 등록 여부 제어 (default:false) |
| catalog | 카탈로그 개념을 지원하는 데이터베이스의 기본 카탈로그를 설정. 지정하지 않으면 JDBC 드라이버가 정의한 기본 카탈로그를 사용 |
| connectionInitSql | 신규 connection이 pool에 추가되기 전에 실행된 SQL 문 정의 |
| driverClassName | 특정 DriverManager를 실행하기 위해 지정하는 특정 Class를 지정 |
| transactionIsolation | java.sql.Connection에 지정된 Transaction Isolation 설정 (default:none)|
| validationTimeout | connection의 유효한지를 확인할 경우의 타이아웃 값 (default:5000) |
| leakDetectionThreshold | connection 이 pool에서 벗어나는 시간을 제어. 누수 여부를 검출시 사용 (default:0) |
| dataSource | hikariCP가 reflection을 통해 생성하지 않고 풀의 인스턴스를 바로 랩핑하는 겨우 설정 |
| schema | 스키마 개념을 지원하는 데이터베이스의 기본 스키마를 설정 (default:driver default) |
| threadFactory | 쓰레드 생성시에 사용할 인스턴스를 지정 |
| scheduledExecutor | java.util.concurrent.ScheduledExecutorService 내부적으로 예약 된 다양한 작업에 사용될 인스턴스를 설정 가능|

## 5 참조
* [HikariCP Dead lock에서 벗어나기 (이론편)](https://woowabros.github.io/experience/2020/02/06/hikaricp-avoid-dead-lock.html)
* [JDBC 커넥션 풀들의 리소스 관리 방식 이해하기](https://kakaocommerce.tistory.com/45)
* [Commons DBCP 이해하기](https://d2.naver.com/helloworld/5102792)
* [HikariCP 뜯어보기 1편](https://brunch.co.kr/@jehovah/24)
* [HikariCP 뜯어보기 2편](https://brunch.co.kr/@jehovah/25)


