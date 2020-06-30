# Hikari Connection Pool 파헤치기

**Hikari Connectino Pool 동작 원리 및 옵션 설정 이해하기**
<!--more-->
 [CP(Connection Pool) 라이브러리 성능 검증](/connection_pool_benchmark) 을 통해 Hikari 성능이 좋다는 것은 확인하였고, 어떠한 동작 방식으로 성능이 이렇게 좋아질 수 있었는지를 확인하고자 동작 방식과 hikari에서 사용되는 옵션들에 대해 이해할 기회를 가져볼까 한다.
 JDBC Connection을 맺는 과정에서의 리소스 비용 부담이 되기 때문에 


## 1 등장 배경
 기존 사용되던 tomcat-dbcp, dbcp, bonecp 보다 더 빠르고, 가벼운 Connection Pool로 'zero-overhead'라고 할 정도의 경량화 된 라이브러리

* hikari cp가 빠른 이유
* 코드 디자인 및 최적화를 통해 스레드 간의 잠금 경쟁이 크게 감소
* JDK 및 cglib의 동적 프록시와 비교하여 javaassist(java 바이트 코드를 조작하는 수단을 제공하는 라이브러리)를 통해 클래스 파일을 직접 수정하여 생성된 프록시 클래스는 작동 속도가 빠름
* FastList 및 사용자 정의 컬렉션 클래스 도입으로 세부 사항을 최적화하여 제공

## 2 동작 원리
### 2.1 구조 및 관리

### 2.2 Connection 요청시 동작 순서

HikariCP Architecture
{{< mermaid >}}
classDiagram
	PoolBase <|-- HikariPool
	Closeable <|-- HikariDataSource
	IBagStateListener <|.. HikariPool
	DataSource <|-- HikariDataSource
	HikariPool *-- ConcurrentBag
	HikariConfig <|-- HikariDataSource
	HikarPoolMXBean <|.. PoolBase
	HikarConfigMXBean <|.. HikariConfig
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

```java
 public class HikariDataSource extends HikariConfig implements DataSource, Closeable
{
   private final HikariPool fastPathPool;
   private volatile HikariPool pool;
}
```


배치정보
연결풀
데이터소스


(1) ThreadLocalList
(2) SharedList
(3) 
(1) fastPathPool에 Connection 줘요~!

(2) fastPathPool에 없으면 Pool에다가 Connection 줘요

(3) pool에 없으면 생성해서 주세요

(4) 이미 max 설정까지 다 되어서 못준다면, queue에서 대기하세요~!


2.3. 참고사항




옵션 설정 TIP

| Option | Description |
| ------ | ----------- |
| dataSourceClassName   | path to data files to supply the data that will be passed into templates. |
| jdbcUrl | engine to be used for processing templates. Handlebars is the default. |
| username  | extension to be used for dest files. |
	
* 
* 
* password

* autoCommit
* connectionTimeout
* idleTimeout
* maxLifetime
* connectionTestQuery
* minimumIdle
* metricRegistry
* healthCheckRegistry
* poolName

* initializationFailTimeout
* isolateInternalQueries
* allowPoolSuspension
* readOnly
* registerMbeans
* catalog
* connectionInitSql
* driverClassName
* transactionIsolation
* validationTimeout
* leakDetectionThreshold
* dataSource
* schema
* threadFactory
* scheduledExecutor
