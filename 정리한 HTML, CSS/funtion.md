```javascript
// 첫 번째 방식 - 함수 선언식
function sayHello(){
	console.log("Hello");
}

// 두 번째 방식 - 함수 표현식
const sayHello = function(){
	console.log("Hello");
}

// 선언된 sayHello 함수를 사용
sayHello; //Hello 출력

// 함수의 인자명 - 문자+숫자 형태로 자유롭게 적기 가능
function calculate(x){
	var result = 3 * x + 5;
	console.log("결과 값은" +result+ '입니다');
}
var result = calculate(5); //결과 값은 20입니다.

var getAge = function(name, age){
	console.log(name + "은 " + age + "살입니다.");
}
getAge("달", 25); //달은 25살입니다.

// 함수 값 변환 return -> 모든 자료형(string, number, 배열, 객체), 함수 반환 가능
function calculate(x){
	var result = 3 * x + 5;
	return result;
}
var value = calculate(5); //calculate호출 -> 20의 결과값 반환
console.log(value); //20출력

function getProfile(profile_name, profile_age){
	return {
		name: profile_name,
		age: profile_age
	}
} //딕셔너리 반환
```
<br>

-주의할점-

1. 일반적으로 함수 안에 선언된 변수, 밖에서 사용 불가.
2. 함수 밖에서 선언된 변수, 함수 안에서 사용 가능.