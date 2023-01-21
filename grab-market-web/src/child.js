function ChildComponent(props){  //Props - 부모 컴포넌트에서 자식 컴포넌트로 값을 넘겨줘야할 때 props로 값전달 가능
    const {name, age} = props;  //distructring방식 사용
    return <div>
        <p>이름은 {name}이며 {age}살 입니다.</p>
        </div>
}

export default ChildComponent;