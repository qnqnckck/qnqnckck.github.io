# Connection Pool 성능테스트 : hikari, tomcat-dbcp, bee, vibur

**Connectino Pool 라이브러리 tomcat-dbcp/vibur/bee/hikari 최신 라이브러리 적용한 성능 검증 분석**
<!--more-->

 회사에서 스프링 프레임워크 업그레이드를 진행하면서 의존성 있는 라이브러리의 목록을 업데이트하는 업무를 진행하게 되었다. 사용하는 라이브러리 중에서 CP(Connection Pool)는 tomcat-dbcp를 사용하고 있었고, 스프링부트 2.0에서 디폴트로 적용된 Hikari CP에 대해 검토하게 되었다. [Hikari CP Repository](https://github.com/brettwooldridge/HikariCP)에 성능 비교는 2-3년 전에 진행되었기 때문에 최신 버전과 새로운 CP 라이브러리를 추가하여 성능검증을 진행하였다.


 ## 1 성능검증 
 ### 1.1 테스트 환경

| 항목 | SPEC |
| ------ | ----------- | 
| OS | CentOS 7.7.1908(x86_64) |  
| CPU | Intel(R) Xeon(R) CPU E5-2660 v2 @2.20GHz,GenuineIntel |
| RAM | 8GB |
| JDK | openjdk 1.8 |

### 1.2 테스트 대상 라이브러리
| 라이브러리명 | 버전 | RELEASE 일자 | 비고 |
| ------ | ----------- | ----- | -----|
| tomcat-dbcp | 8.0.53 | 2018.01.29. | dbcp2에 개선 버전이기에 dbcp2를 따로 테스트 항목에 추가하지 않음 |
| hikari | 3.4.5 | 2020.05.08. | |
| bee | 2.4.2 | 2020.05.30. | |
| vibur | 25.0 | 2019.11.30. | |

### 1.3 CP 설정 및 실행 조건
 Contended benchmark 테스트로 진행 

| 항목 | 설정 값 |
| ------ | ----------- |
| 쓰레드 수 | 32 |
| 초기 커넥션 수 | 20 |
| 최대 커넥션 수 | 20 |

### 1.4 기타 
기존 성능 테스트를 위해 구현되었던 [HikariCP-benchmark 프로젝트](https://github.com/brettwooldridge/HikariCP-benchmark)를 기반으로 코드를 재작성하였다. 
* Repository : https://github.com/qnqnckck/ConnectionPoolBenchmark


## 2 결과
 Cycle Connection과 Cycle Statement 2가지 테스트를 진행한다.
 * Cycle Connection : DataSource.getConnection(), Connection.close()
 * Cycle Statement : Connecdtion.prepareStatement(), Statement.execute(), Statement.close()
 
### 2.1 Stub Driver 사용
#### 2.1.1 Cycle Connection

| | tomcat-dbcp | hikari | bee | vibur |
| ------ | ----------- | ----| ----| ---|
| ms당 수행횟수(ops/ms) | 1921.732 | 27429.626 | 45446.493 | 2930.534 |

{{< echarts >}}
title:
    text: Cycle Connection(ops/ms)
    top: 2%
    left: center
tooltip:
    trigger: axis
legend:
    top: 10%
grid:
    left: 5%
    right: 5%
    bottom: 5%
    top: 20%
    containLabel: true
toolbox:
    feature:
        saveAsImage:
            title: Save as Image
xAxis:
    type: category
    boundaryGap: true
    data:
        - tomcat-dbcp
        - hikari
        - bee
        - vibur
yAxis:
    type: value
series:
      type: bar
      stack: Total
      data:
          - 1921.732
          - 27429.626
          - 45446.493
          - 2930.534
{{< /echarts >}}

#### 2.1.2 Cycle Statement
| | tomcat-dbcp | hikari | bee | vibur |
| ------ | ----------- | ----| ----| ---|
| ms당 수행횟수(ops/ms) | 20316.572 | 28529.254 | 75904.932 | 20487.692 |

{{< echarts >}}
title:
    text: Cycle Statement(ops/ms)
    top: 2%
    left: center
tooltip:
    trigger: axis
legend:
    top: 10%
grid:
    left: 5%
    right: 5%
    bottom: 5%
    top: 20%
    containLabel: true
toolbox:
    feature:
        saveAsImage:
            title: Save as Image
xAxis:
    type: category
    boundaryGap: true
    data:
        - tomcat-dbcp
        - hikari
        - bee
        - vibur
yAxis:
    type: value
series:
      type: bar
      stack: Total
      data:
          - 20316.572
          - 28529.254
          - 75904.932
          - 20487.692
{{< /echarts >}}

### 2.2 MySql Driver 사용
#### 2.2.1 Cycle Connection

| | tomcat-dbcp | hikari | bee | vibur |
| ------ | ----------- | ----| ----| ---|
| ms당 수행횟수(ops/ms) | 12.961 | 31431.702 | 58562.068 | 3033.819 |

{{< echarts >}}
title:
    text: Cycle Connection(ops/ms)
    top: 2%
    left: center
tooltip:
    trigger: axis
legend:
    top: 10%
grid:
    left: 5%
    right: 5%
    bottom: 5%
    top: 20%
    containLabel: true
toolbox:
    feature:
        saveAsImage:
            title: Save as Image
xAxis:
    type: category
    boundaryGap: true
    data:
        - tomcat-dbcp
        - hikari
        - bee
        - vibur
yAxis:
    type: value
series:
      type: bar
      stack: Total
      data:
          - 12.961
          - 31431.702
          - 58562.068 
          - 3033.819
{{< /echarts >}}


#### 2.2.2 Cycle Statement
| | tomcat-dbcp | hikari | bee | vibur |
| ------ | ----------- | ----| ----| ---|
| ms당 수행횟수(ops/ms) | 12.341 | 12.228 | 12.455 | 12.298 |

 {{< echarts >}}
title:
    text: Cycle Statement(ops/ms)
    top: 2%
    left: center
tooltip:
    trigger: axis
legend:
    top: 10%
grid:
    left: 5%
    right: 5%
    bottom: 5%
    top: 20%
    containLabel: true
toolbox:
    feature:
        saveAsImage:
            title: Save as Image
xAxis:
    type: category
    boundaryGap: true
    data:
        - tomcat-dbcp
        - hikari
        - bee
        - vibur
yAxis:
    type: value
series:
      type: bar
      stack: Total
      data:
          - 12.341
          - 12.228 
          - 12.455
          - 12.298 
{{< /echarts >}}

## 3 분석
 Stub 드라이버의 경우 DB 서버 실제 질의를 날리지 않기 때문에 순수 라이브러리의 성능지표이며, 결과만 보면 압도적으로 hikari와 bee 라이브러리가 가장 좋은 성능을 보여주었다. mysql 드라이버의 경우 private 회사망에 분리되어 있는 DB 서버에 접속하여 테스트를 진행하였으며 실제 질의 후 응답까지에 네트워크 시간을 포함한 소요시간이 가장 큰 영향을 끼치기 때문에 거의 유사하 결과를 확인 할 수 있었다.

 그렇다면 응답 속도도 동일하면 성능적으로 차이가 없는 것인가? 그렇지 않다. 각각의 라이브러리의 장점들이 있을텐데 hikari의 경우에는 connection을 fastPathPool을 통해 동일 쓰레드 요청에 대 이전에 사용된 connection을 전달해 준다. 이부분에 대해서 성능은 실제 얼마나 응답속도 부분에 대해 기여할지는 추후에 테스트하게 되면 공유 하도록 하겠다. 
