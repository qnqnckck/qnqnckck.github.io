# 스프링에 의존성 주입 방법

**의존성 주입 방법 종류 및 특징**
<!--more-->

## 1 서론
  스프링 프레임워크를 사용하면서 컨트롤러에서 서비스 빈을 사용할 때에는 아래와 같이 필드 주입을 위해 @autowired 어노테이션을 사용하였다. 

```java
 @Controller
 public class TestController 
{
   @Autowired
   private TestService testService;

   ....
}
```

 legacy 코드들을 통해 학습하면서, 필드 주입으로 간단하고 명확하게 사용하는 가장 좋은 방법이라고 생각하였다. 그러나 스프링 관련 동영상을 보다가 생성자 주입(Constructor Injection)을 사용하는 습관이 좋다라는 이야기를 듣고 주입에 대한 개념과 사용방법을 다시 한번 살펴보았다.


## 2 주입 종류 및 예
### 2.1 생성자 주입(Constructor Injection)
 스프링 가이드에 권장 방식으로 생성자에 @Autowired를 통해 주입을 할 수 있다. 단일 생성자에는 생략이 가능하며 2개이상의 생성자를 가지는 경우 @autowired 어노테이션을 전부 붙여주어야 한다. 생성자 객체를 생성할 때 빈을 주입되기 때문에 생성전 필요한 빈들을 찾게 된다. 다른 주입 방식들과의 차이점이며, 이 특징은 순환 참조(Circular Depencies)등의 방지가 가능하다.

```java
@Component
public class TestComponent 
{
   private final TestService testService;

   // 단일 생성자인경우 @Autowired 생략이 가능
   public TestComponent(TestService testService){
   		this.testService = testService;
   } 
}
```

### 2.2 필드 주입(Field Injection)
 필드 주입은 가독성 및 사용하기 편리하다. 필드 주입의 경우 빈을 생성한 후에 어노테이션이 붙은 필드에 해당하는 빈을 주입하는 방식이다. 

```java
@Component
public class TestComponent 
{
   @Autowired
   private TestService testService;

   ...
}
```

### 2.3 수정자 주입(Setter Injection)
 수정자(Setter)를 사용한 방법으로 클래스의 캡슐화시 변수들을 getter/setter로 사용하는 방식과 동일하다. TestComponent 빈이 생성이 된 후 setTestService 메소드 호출을 통해 주입 되는 방식이며, 생성자 주입과 빈이 생성되는 순서가 다르기 때문에 final 사용은 불가능하다.

```java
@Component
public class TestComponent 
{
   private TestService testService;
	
   @Autowired
   private void setTestService(TestService testService){
   		this.testService = testService;
   }
}
```

## 3 생성자 주입 방법을 써야하는 이유 
### 3.1 순환 참조를 방지
```java
@Service
public class TestAService
{
   @Autowired
   private TestBService testBService;
	
   private void callTestB(){
   		testBService.callTestA();
   }
}
```

```java
@Service
public class TestBService
{
   @Autowired
   private TestAService testAService;
   
   private void callTestA(){
   		testAService.callTestB();
   }
}
```
위 2개의 클래스 TestAService, TestBService 필드 주입을 통해 상호 서비스간의 참조하고 메소드들도 서로 참조하여 메소드 실행시에 stackOverflow가 발생하는 예제의 코드이다. (상호 참조하지 않는다면 문제가 발생할만한 비즈니스 로직상에 순환참조도 없을것이다.) 위 2개의 클래스를 가지는 어플리케이션을 구동하게 되면 각 서비스들의 빈이 생성이 된 후, 각자 의존성이 있는 빈이 컨테이너에 존재하기 때문에 실행에는 아무런 오류가 발생하지 않는다.


```java
@Service
public class TestAService
{
   private final TestBService testBService;
	
   public TestAService(TestBService testBService){
   		this.testBService = testBservice;
   }

   private void callTestB(){
   		testBService.callTestA();
   }
}
```

```java
@Service
public class TestBService
{
   private final TestAService testAService;
  
   public TestBService(TestAService testAService){
   		this.testAService = testAservice;
   }

   private void callTestA(){
   		testAService.callTestB();
   }
}
```
이번에는 생성자 주입을 통해 코드를 구성하였다. 자신의 빈을 생성하기 전에 의존성 있는 빈들을 검색하기 때문에 2개의 서비스 모두 생성되지 않고, 계속 서로의 생성자를 호출하게 되며, 스프링에서는 이것을 순환참조로 감지하여 오류 메세지를 전달한다. 

어플리케이션을 동작시키면 다음과 같은 로그를 확인 할 수 있다. 

{{< admonition type=failure title="Log">}}
Description : 
The dependencies of some of the beans in the application context from a cycle
{{< /admonition >}}


## 4 회고
 요약하자면 생성자 주입을 사용하면 컴파일 타임에 NPE 방지하면서 객체를 생성하고, 순환참조 방지도 가능하며, immutabliliy하게 final을 사용할 수 있다. 생성자 주입을 사용하도록 하자~!

## 5 참조
* [스프링 - 생성자 주입을 사용해야 하는 이유, 필드인젝션이 좋지 않은 이유](https://yaboong.github.io/spring/2019/08/29/why-field-injection-is-bad/)
*  [순환 참조 해결하기](https://jobc.tistory.com/203)


 
