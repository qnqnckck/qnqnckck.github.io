# [Node+React] Chapter1 시작하기

**Node+React 1강**
<!--more-->
## 1 공부를 시작하며...
 서버 개발자가 된 이후부터는 Spring 이외 다른 언어 및 프레임워크를 다뤄 볼 기회가 없었다. 회사 프로젝트도 리팩토링도 해보고 개발 관련 책들도 접하지만 토이 프로젝트를 진행하지 않다보니, 학습 후에도 머리에 남아 있지 않았다. 
  개발에 있어 최근 Node와 React를 많이 사용기에 위 2개를 사용하여 학습하며 토이 프로젝트를 진행해보려고 합니다. 목표는 Admin 사이트(로그인, 통계 대시보드등) 개발하기~!


## 2 환경 설정
### 2.1 개발 환경 
* OS : MAC
* Development Tool : [Visual Studio Code](https://code.visualstudio.com/)
* Framework : [NodeJs v16.4.0](https://nodejs.org/ko/)
* PackageManager : yarn v1.22.10
  * npm도 가능 자신이 익숙한걸로~! - [NPM? Yarn? , 본인에게 편한게 최고!](https://dark0946.tistory.com/419)
  * 설치 방법
```console
~$ brew install yarn
or
~$ npm install -g yarn
```
### 2.2 VSCode(Visual Studio Code) 설정
 VSCode/Yarn/NodeJs 전부 설치를 했다면 VSCode에서 사용하기 좋은 확장 플러그인 및 아래 기능을 설정하도록 하자. 

* Prettier : Code Formater로 협업 시 코드 규격을 자동 적용해 준다. 
  * [VSCode Formater 인 Prettier 완벽 적용하기](https://uxgjs.tistory.com/150)
* [VSCode 쉘에서 code 명령어로 visual studio code 열기](https://torbjorn.tistory.com/642)



## 3 시작하기
```console
~$ mkdir test
~$ cd test
test$ yarn init  
test$ code .
```
 프로젝트 폴더를 생성하고, yarn init을 통해 프로젝트 초기화를 통해 [pakcage.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)을 생성하고 VSCode를 실행한다. 그리고 TypeScript를 사용할 예정이다.


<br>

[TypeScript](https://www.typescriptlang.org/)는 자바스크립트를 사용함에 있어, 높은 가독성과 코드 품질을 제공하기 위한 것으로 컴파일 환경에서 에러를 잡아 낼 수도 있다.
 * [한눈에 보는 타입스크립트](https://heropy.blog/2020/01/27/typescript/)

<br>

node에서 많은 기능을 제공하는 라이브러리인 [lodash](https://lodash.com/)와 TypeScript를 transpiling(compile이라고도 명명 하지만 typescript에서 javascript로 변환하는 것)과 실행을 함께 하기 위해 사용되는 ts-node를 설치한다. 그 이후 테스트 코드를 생성해보자.

```shell
test$ yarn tsc --init //컴파일러 옵션을 정의된 tsconfig.js 생성
test$ yarn add lodash
test$ yarn add ts-node --dev
```

 <br> 

```typescript 
/*(src/test.ts)*/
import _ from "lodash";

var foo = [4, 2, 8, 6];

console.log(_.min(foo));
```
<br>

```js
/*(src/test.js)*/
var _ = require("lodash");

var foo = [4, 2, 8, 6];

console.log(_.min(foo));
```
<br>

```shell
test$ ts-node src/test.js
2
test$ node src/test.js
2
/* 동일 결과가 나왔다면 끝 */
```

## 4 회고
우선 첫 날이라 Warm-up 수준으로 진행하였다, 육아로 인해 밤 11시부터 시작하였는데 강의 진행해주신 JHW님 감사합니다.
