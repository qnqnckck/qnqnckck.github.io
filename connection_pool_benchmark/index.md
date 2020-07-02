# Connection Pool 성능테스트 : hikari, tomcat-dbcp, bee, vibur

**Connectino Pool 라이브러리 tomcat-dbcp/vibur/bee/hikari 최신 라이브러리 적용한 성능 검증 분석**
<!--more-->

 회사에서 스프링 프레임워크 업그레이드를 진행하면서 의존성 있는 라이브러리의 목록을 업데이트하는 업무를 진행하게 되었다. 사용하는 라이브러리 중에서 CP(Connection Pool)는 tomcat-dbcp를 사용하고 있었고, 스프링부트 2.0에서 디폴트로 적용된 Hikari CP에 대해 검토하게 되었다. [Hikari CP Repository](https://github.com/brettwooldridge/HikariCP)에 성능 비교는 2-3년 전에 진행되었기 때문에 최신 버전과 새로운 CP 라이브러리를 추가하여 성능검증을 진행하였다.

  

| Option | Description |
| ------ | ----------- |
