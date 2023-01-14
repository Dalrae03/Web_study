* **기본 로그 함수**

브라우저 개발자 도구 → Console창에서 로그 확인가능

```javascript
console.log('자바스크립트 공부 시작')
```

→ 코드 한 줄을 작성할 때, 맨 마지막에 ‘;’ 붙인다 (안붙여도 되지만 코드를 마무리한다는 암시)

<br>
<br>

- **변수**

→ 데이터를 담는 공간. 웹에서 보는 상품정보, 이미지, ID입력창 등은 전부 데이터를 바탕으로 보여지는 결과물. 이때 데이터를 담는 변수

<br>

-선언, 정의-

종류 - wnvar, let, const

변수 정의 - 선언된 변수에 값을 넣는 것

```javascript
// var - 같은 이름의 변수를 다시 선언해서 사용 가능. 요새 잘 안씀.
var name;
name = "이름";
var name = "이름"; //합쳐서도 사용가능
var name = "달"; //사용가능

// let - 한번 선언된 변수에 다시 새롭게 선언 불가
let num1 = 20;
let num1 = "달"; //에러
num1 = "달"; //가능

// const - 선언된 변수에 새로운 값 정의 불가. 변수값 변경 불가.
const num2 = 30;
num2 = "달"; //에러
```

변수명은 영문+숫자로 지어야 한다. 띄어쓰기, 특수문자 불가, 숫자로 시작 불가.

<br>
<br>

- **기본 자료형(Primitive Type, 데이터 형식)**

종류 - string(문자), number(숫자), boolean(참/거짓 여부), null(값이 없을 때), undefined(변수 선언만 하고 정의하지 않은 상태일 때)

```javascript
var name; //undefined
name = "달" //string(문자)
var age = 20; //number(숫자)
var Fact = true; //boolean(true/false)
var zero = null; //null
```

typeof - 변수의 자료형을 확인하는 문법

<br>
<br>

- **array(배열, 파이썬의 리스트같은 느낌)**

→ 배열, 리스트(list)라고 불림. 데이터를 순차적으로 담음

대괄호([])사용

array는 object(객체)의 종류 중 하나, object자료형

```javascript
var member = ['디디', '달']; //array 자료형
// array안에 모든 자료형 넣기 가능.
// array안에array도 가능

var length = member.length; //array 길이 구하기

var firstValue = member[0]; //array 1번째 인자 값

// 새 값 추가
member[2] = '빵'; //인덱스로 추가. 별로 선호하지 않는 방법
member.push('빵'); //push함수로 추가
```

<br>
<br>

- **object(객체, 파이썬의 딕셔너리 같은느낌)**

→ 자료들을 key, value형태로 저장하는 자료형

중괄호({})사용

```javascript
var profile = {
		name: '달',
		hight: 160,
		"age": 30 //key값, 큰따옴표도 가능
}

var profilename = profile['name']; //이때 key값은 따옴표(문자열)이어야함
var profilehight = profile.hight //객체.key

//object에 새로운 값 추가, 변경
profile['name'] = '디디'; //값 변경1
profile.name = '디디'; //값 변경2
profile['country'] = '한국'; //값 추가1
profile.country = '한국'; //값 추가2