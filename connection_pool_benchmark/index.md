# Connection Pool 성능테스트 : hikari, tomcat-dbcp, bee, vibur

Connectino Pool 라이브러리 tomcat-dbcp/vibur/bee/hikari 최신 라이브러리 적용한 성능 검증 분석
<!--more-->
 회사에서 스프링 프레임워크 업그레이드를 진행하면서 maven으로 사용하고 있는 라이브러리 목록을 정리하고, 업그레이드 가능한 목록을 확인할 업무가 생겼다. 그 중 CP(Connection Pool) 라이브러리는 tomcat-dbcp를 사용하고 있었는데 아마 스프링부트를 사용하고 있였다면 2.0이상의 버전 업그레이드시 default로 사용되는 hikari로 아무 생각없이 적용해서 사용했을 것이다. CP 라이브러리 변경을 위해서 합리적인 이유가 있어야 하기에 성능 검증을 진행했고, 관련 라이브러리로 tomcat-dbcp/vibur/bee/hikari 라이브러리의 성능 테스트를 진행해 보았다. 

