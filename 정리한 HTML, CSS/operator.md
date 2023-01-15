종류 - 기본 연산자(덧셈 뺄셈), 비교 연산자(값들 비교), 논리 연산자(논리적 순서 제공

<br>
<br>

- **기본 연산자**

종류 - +, -, *, /

```javascript
var num1 = 1;
var num2 = 2;
var char1 = "보름";
var char2 = "달";

var num3 = num1 + num2; //숫자 + 숫자, 결과: 3
var char3 = char + " " + char2; //문자열 + 공백 + 문자열, 결과: 보름 달
var Mix = char2 + num1; //문자열 + 숫자, 결과: 달1
```
<br>
<br>

- **비교 연산자**

종류 - >, <, ≥, ≤, ===, !==

```javascript
// 비교 연산자는 boolean 값을 반환.
var name = '달';
var isFool = true;
var num = 50;

console.log(num < 5); //결과: false
console.log(name === '달') //결과: true
console.log(name !== '디디') //결과: true
```

<br>
<br>

- **부정 연산자**

종류 - !

```javascript
var nope = false;
var yes = !nope //true
```
<br>
<br>

- **논리 연산자**

종류 - ||, &&
```javascript
var name = "달"
var number = 88;

console.log(name === '달' && number > 50); //결과: true

//앞이 true라면 뒤 연산 수행X
console.log(name === '달' || number > 50); //결과: true
//앞이 false라면 뒤 연산 수행
console.log(name !== '달' || number > 50); //결과: true
```