현재 가장 대중적으로 사용되고 있는 javascript 문법.

- 변수 선언 : `let`, `const`
- 비동기 처리 : `Promise`

`Babel` - 브라우저를 위해 옛날 버전의 javascript로 변환 시켜주는 작업할때 사용하는 transpiling도구

<br>
<br>

- **Template Literal (템플릿 리터널)**

일반적으로 string 자료형을 조합할 때 **+** 연산자를 사용.

하지만 문자열 더하는 과정이 많아지면 가독성이 떨어지고 번거로워진다. 이때 템플릿 리터널 사용

```js
const hello ="안녕";
const introduce = "내이름은 달, 학생이죠"
const grade = 1;

// 기존 방식
const text = hello + "! " + introduce + " 그리고 "+ grade +"학년이죠."

// Template Literal 방식
const newText = `${hello}! ${introudce} 그리고 ${grade}학년이죠.`
```

<br>
<br>

- **Desturcturing (구조 분해 할당)**

객체와 배열에 들어있는 값을 가져올 때 손쉽게 값을 뽑기 위함.

```js
const grab = {
	name : '달',
	age : 25
};
const people = ['달','디디']

// 기존
var name = grab.name;
var age = grab.age;
var minsoo = people[0];
var chulsoo = people[1];

// Destructuring 방식
var {name, age} = grab;
console.log(name); //달 출력

const [moon, didi] = people;
```

<br>
<br>

- **map, forEach**

ES5에서 나온 문법

map, forEach는 배열에서 기본으로 제공해주는 메소드, 배열을 가공할 때 많이 사용.

`for` 과 비슷한 기능.

```js
var products = [{
	name : '농구공',
	price : 50000
},{
	name : '축구공',
	price : 50000
}]

// 기존 방식
for(var i=0; i < products.length;i++){
	var name = products[i].name;
	console.log('제품 이름 : ' + name);
}

// Array Method 방식
// 콜백 함수에는 첫번째인자 - 배열에서 조회하는 값, 두번째 인자 - 순서(index)들어감.

// forEach 메소드 - 배열 조회, 별다른 return 없음
//첫번째 파라미터에는 값, 두번째 파라미터에는 순서(index)가 들어감
products.forEach(function (product, index) { 
         console.log((index + 1) + '번째 호출');
         console.log(product);
})

// map 메소드 - 배열 조회, 새로운 배열 반환
//동일하게 조회합니다.
products.map(function(product, index){ 
         console.log((index + 1) + '번째 호출');
         console.log(product);
});

//productNames는 각 product의 name이 들어간 배열.
var productNames = products.map((product, index) => { 
     return product.name;
});
```

이 외의 배열 메소드 - `filter`, `reduce` 등의 배열 전용 메소드

<br>
<br>

- **Lambda Function (람다 함수)**

function을 표현하는 새로운 방식 - `Lambda 식`은 `() ⇒ {}` 형식

`arrow function` 이라고도 많이 부름

<br>

[ 장점 ]

- 함수 축약 → 코드 깔끔
- return구문 생략 가능

```js
// 기본 방식
// 함수 선언식
function getName(name){
	return `${name} 입니다`
}

// 함수 표현식
const getName  = function(){
	...
}

// 람다 함수 방식
const getName = () => {
	
}

//람다식의 return 문을 생략할 수도 있습니다.
const getName = (name) => `${name} 입니다`
```

Lambda식과 기존함수랑  `this`라는 개녕을 사용할 때 다르게 동작

<br>
<br>

- **conditional ternary operator(3항 연산자)**

3항 연산자는 if 조건문을 단축 형태로 사용.

`condition ? exprIfTrue : exprIfFalse` 구문

→ condition이 true라면 exprtIfTrue가 실행되고 아니라면 exprtIfFalse가 실행.

```js
const language = 'javascript';

// 기본 방식
if(language === 'javascript'){
	console.log('재밌다')
}else{
	console.log('재미없다')
}

// 3항 연산자 방식
language === 'javascript' ? console.log('재밌다') : console.log('어렵다')

const isJavascript = language === 'javascript'? true : false 
//result에 true가 들어옴.
```

<br>
<br>

- **export, import**

자바스크립트 파일 (라이브러리) 불러오기

html - `<script>`태그를 활용 

ES6 - `import` 를 사용

```js
// 기존 방식
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

//hello.js를 불러오기
<script src="./hello.js"></script>


// import 방식
import axios from 'axios'; //다운받은 axios 라이브러리를 불러오기
import App from './App.js' //hello.js 파일을 불러오기
import Potato from "./main" //import를 할때 모듈명은 자유롭게 설정이 가능

// App.js 파일
function App(){
	return <h1>hello</h1>
}

// App 함수를 외부에서 사용할 수 있도록 export 하는 것
// 기본적으로 import하기위해 export가 있어야한다.
export default App;
```

<br>

- **여러 객체 export & import 하기**

위 코드에서 export 옆에 붙은 `default` 는 한가지 객체만 import하겠다는 것을 의미

하나의 파일에 여러개의 객체를 export할 수도 있음.
```js
function funcA(){
	//...
}
function funcB(){
	//...
}
const varC = 'hello';
export {
		a : funcA,
	b : funcB,
	c : varC
}

// import 할 때 {}사용
import {a, b, c} from './App.js'
```
