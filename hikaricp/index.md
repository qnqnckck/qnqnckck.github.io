# Hikari Connection Pool 파헤치기

Hikari Connectino Pool 동작 원리 및 옵션 설정 이해하기
<!--more-->
 CP(Connection Pool) 라이브러리 성능 검증을 통해 Hikari 성능이 좋다는 것은 확인하였고, 어떠한 동작 방식으로 성능이 이렇게 좋아질 수 있었는지를 확인하고자 동작 방식과 hikari에서 사용되는 옵션들에 대해 이해할 기회를 가져볼까 한다.
 JDBC Connection을 맺는 과정에서의 리소스 비용 부담이 되기 때문에 


1. 등장 배경
 기존 사용되던 tomcat-dbcp, dbcp, bonecp 보다 더 빠르고, 가벼운 Connection Pool로 'zero-overhead'를 위한 경량화 한 라이브러리

2. 동작 원리
2.1. 구조 및 관리

2.2. Connection 요청시 동작 순서

{{< mermaid >}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{< /mermaid >}}


(1) ThreadLocalList
(2) SharedList
(3) 
(1) fastPathPool에 Connection 줘요~!

(2) fastPathPool에 없으면 Pool에다가 Connection 줘요

(3) pool에 없으면 생성해서 주세요

(4) 이미 max 설정까지 다 되어서 못준다면, queue에서 대기하세요~!


2.3. 참고사항




옵션 설정 TIP
Required
* dataSourceClassName
* jdbcUrl
* username
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
