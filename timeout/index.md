# Timeout에 대한 정리

**HTTP 통신에 TIMEOUT 설정 한방에 한번에 이해하자.**
<!--more-->
 처음 포스팅 때 DB Connection Pool 사용을 위해 DBCP 라이브러리 뒤적뒤적 하면서 성능비교를 했었다. 근데 이번에는 Http Connection Library 로 okhttp 사용하였는데 timeout 설정을 각 서버별로 다르게 적용해야 했는데 매번 헷갈린거 같아, 설명 및 그림으로 나타내어 리마인드한다.


| Timeout | 설명 |
| ------ | ----------- |
| Connection | **요청부터 TCP Handshake가 완료되기까지의 지속시간**을 나타낸다. (default 10s, unlimit 0s)|
| Read  | **서버에 요청 이후 응답의 패킷 사이에 전송시간**으로 두 데이터 패킷 사이의 최대 비활성 시간을 정의한다. (default 10s, unlimit 0s)| 
| Write | **서버로 전송하기 위한 패킷 사이에 전송시간**으로 두 데이터 패킷 사이의 최대 비활성 시간을 정의한다. (default 10s, unlimit 0s)|
| Call  | **호출 시작부터 완료까지의 시간제한**으로 DNS 확인, 연결, 요청 본문 작성, 서버처리 및 응답 본문 읽기를 포함한다. (default 0s, unlimit 0s)|



 

