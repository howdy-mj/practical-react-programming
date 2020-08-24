import React from 'react';
import User from './User';

function App() {
  return (
    <div className="App">
      <p>1-file의 3-2-propTypes</p>
      {/* 안에 다른 타입을 입력하면 콘솔에 에러메세지가 뜸 */}
      <User onChangeTitle={() => {}} male={true} type={'test'} age={25} />
    </div>
  );
}

export default App;
