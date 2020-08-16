function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? "좋아요 취소" : "좋아요";
    return <button onClick={() => setLiked(!liked)}>{text}</button>;
  }
  
  function Container() {
    const [count, setCount] = React.useState(0);
    return ( 
    <div>
      <LikeButton />
      <div style={{marginTop: 20}}>
        <span>현재 카운트: </span>
        <span style={{marginRight: 10, color: 'blue'}}>{count}</span>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </div>
    </div>
    )
  }
  
  const domContainer = document.getElementById('root');
  ReactDOM.render(React.createElement(Container), domContainer);

// npx babel --watch src --out-dir . --presets @babel/preset-react
// babel을 실행하여 브라우저가 jsx를 알아볼 수 있게 바꿔주는 것
// watch를 쓰면, 파일이 수정될때마다 자동으로 바벨 시작
// src안에 있는 파일을 현재 리덱토리에 생성
  