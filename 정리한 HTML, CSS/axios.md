자바스크립트에서 외부 라이브러리(자바스크립트 코드) 사용하기 위해선 아래와 같이 script 태그를 이용.

script 태그의 `src`는 본인이 만든 javascript 코드를 불러올 수도 있고 외부 javascript 링크를 적어도 된다.

```html
<!-- axios라이브러리 -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

axios는 fetch보다 네트워크 통신을 사용하기 쉽고 다양한 기능을 제공한다.

<br>

* axios는 기본적으로 비동기 처리를 하는 promise 객체를 반환

```js
//axios에서 get, post 사용하기
axios.get(url주소) 
axios.post(url주소,data 객체) 

//기본적으로 axios 메소드는 promise 객체를 return.
axios.get(url주소).then(function(result){
	//result 객체에는 status, data 등 다양한 코드가 들어감.
}).catch(function(error){
	
})
```