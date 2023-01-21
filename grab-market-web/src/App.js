import logo from './logo.svg';
import './App.css';
import ChildComponent from './child';
import TimerComponent from './timer';

function App() {
  const text = "강의 꾸준히 듣기";
  const sayHello = function(){
    return <h3>파이썬 공부도 하기</h3>
  }
  const sayHello2 = function(){
    alert('안녕하세요');  // 작은 팝업창을 띄우는 함수같음
  }
  return (
    <div>
      <h1>방학동안 해야할 것</h1>
      <h2>{text}</h2>
      {sayHello()}
      <div onClick={sayHello2}>클릭해주세요</div>
      <TimerComponent />
      <ChildComponent name="달" age={24}/>
      <ChildComponent name="민수" age={25}/>
      <ChildComponent name="철수" age={30}/>
      <ChildComponent name="슬기" age={28}/>
    </div>
  );
}

export default App;