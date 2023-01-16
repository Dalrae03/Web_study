괄호(())안이 true일 때 로직 수행

false 혹은 null, 0 “”, undefined일 때 로직 수행 X

```javascript
var name = '달';
var age = 27;

if (name === '디디'){
	console.log('자물쇠 딛')
}
else if (name === '달' && age < 20){
	console.log('10대 달')
}
else {
	console.log('성인 달')
}


var empty = ""
if (empty) {
	console.log('수행된다') //empty가 빈값으로 수행되지 않는다.
}
```