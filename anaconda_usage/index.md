# ANACONDA 사용법

**Anaconda를 사용하여 독립적인 가상환경을 구성하기**
<!--more-->
새로운 툴을 사용할 때에는 설명과 이름에 대한 유래를 항상 살펴본다. 아나콘다는 패키지 관리와 디플로이를 단순하게
할 목적으로 데이터 사이언스를 위해 파이썬과 R 프로그래밍 언어를 지원한다. 아나콘다라는 이름의 유래를 보면 파이썬이 뱀이다보니 패키지나 관련 프로젝트들도 뱀의 이름으로부터 생성되었다고 한다. 
<br>
<br>
아마 모든 개발자들 겪는 어려움 중 하나가 환경셋팅일 것이다. 그래서 Docker 같은 툴의 필요성 및 그에 따른 활용이 대두되는 거 같다. Conda를 사용함으로써, 버전 호환성, 라이브러리 충돌 및 관리의 문제들을 해결해준다.
(virtualEnv도 많이 사용)
<br>
<br>
## 1 설치하기
 각 OS별로 아래 사이트에서 다운로드 해서 Next는 누르면 완료
* https://www.anaconda.com/products/individual

[MiniConda](https://docs.conda.io/en/latest/miniconda.html) MAC 한번에 설치하기
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh
chmod -R 755 Miniconda3-latest-Linux-x86_64.sh
./Miniconda3-latest-Linux-x86_64.sh
```
<br>

## 2 사용법
## 2.1 기본 명령어
| 기능 | 명령어 |
| ------ | ----------- |
| 패키지 삭제 | conda clean | 
| 설정 조회/수정 | conda config
| 새로운 가상환경 생성 |  conda create -n {env_name} python=3.6 |
| 설치된 아나콘다 정보 조회 | conda info |
| 패키지 설치 | conda install -n {env_name} {package_name} |
| 설치된 패키지 정보 | conda list |
| 설치된 패키지 삭제 | conda remove -n {env_name} {package_name} |
| 설치된 패키지 조회 | conda search -n {env_name} {package_name} |
| 환경 삭제 | conda uninstall |
| 설치된 패키지 업데이트 | conda update -n {env_name} |

## 2.2 기타 필요 명령어 
| 기능 | 명령어 |
| ------ | ----------- |
| 가상 환경 적용 | source activate {env_name} |
| 가상 환경 종료 | source deactivate |
| 가상 환경 복제 | conda create -n {src_env_name} --clone {new_env_name} |
| Export | conda env export > {filename}.yaml |
| Import | conda env create -f {filename}.yaml |


## 3. 회고
 직접 써 보니깐 확실히 편리하다. 로컬 셋팅되었던 환경의 정보를 전달해줄 수 있기 때문에, 프로젝트 공유하여 셋업시에 문제를 최소화 할 수 있다. 파이썬을 쓴다면 필수적으로 사용해야 한다. 





