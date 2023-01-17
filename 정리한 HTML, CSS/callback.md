

- **콜백(callback)함수**

함수가 나중에 불린다. 함수의 인자에 함수를 넣는 방식.

```javascript
function sayHello(){
	console.log('안녕');
}

**f**unction getHuman(callback){ //getHuman 함수의 파라미터에는 함수가 들어감.
	callback(); //callback 파라미터는 함수이기에 실행가능.
}

getHuman(sayHello) //'안녕' 출력
```

모든 함수의 파라미터 이름은 자유롭게 설정가능.

<br>
<br>

- 익명 함수

→ 함수로 정의된 변수를 넣지않고 바로 함수를 넣는 것

```javascript
getHuman(function(){
	console.log('안녕')
})
```

자바스크립트에서 기본으로 제공해주는 많은 함수, 라이브러리들을 사용할 때 콜백 함수를 사용한다. 

```javascript
// 자바스크립트에 기본으로 탑재되어있는 함수
// setTimeout는 정해진 시간뒤에 실행
// setInterval는 정해진 시간 마다 실행

// 이 두 함수는 첫 번째 인자에 콜백 함수를 넣고 두번째에 ms 단위의 숫자를 넣는다.
setTimeout(function(){
	console.log('3초 뒤에 실행됩니다!');
}, 3000)

setInterval(function(){
	console.log('1초마다 출력됩니다')
},1000)
```

<br>
<br>

- 비동기

Code Interpreter(인터프리터, 브라우저 내부에 탑재)는 개발자가 짠 자바 스크립트 코드를 읽고 순차적으로 코드를 실행시킴. 

하지만 네트워크 통신이나 복잡한 계산을 실행하는 코드 등 결과를 얻기 까지 오랜 시간이 걸리는 코드를 실행시킨다면 아래 코드는 실행되지 않아 제대로 동작하지 않을 것.

따라서 비동기 처리를 시켜 코드를 실행시킨다.

비동기 처리가 적용된 코드의 경우 우선 실행이 되면 다음 코드가 실행.

결과를 얻게 되면 인터프리터가 다른 코드를 처리하다가 중간에 비동기 처리의 결과를 처리하게 되는 것.

+setTimeout함수도 비동기 처리를 지원한다.

<br>

- Promise 객체 - 비동기 처리를 지원하는 객체 중 하나.

Promise 객체는 정상적으로 실행이 끝난 후 실행되는 then함수와 에러가 났을 때 실행되는 catch함수를 가지고있다.

대표적으로 사용되는 promise 객체 → fetch 함수