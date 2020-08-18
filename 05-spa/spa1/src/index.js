import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [pageName, setPageName] = useState('');

  useEffect( () => {
  // 클릭 했을 때는 콘솔이 뜨지 않지만, 뒤로 가기를 눌렀을 때는 뜸
      window.onpopstate = function (event) {
        // console.log(`location: ${document.location}, state: ${event.state}`);
        setPageName(event.state)
      };
  }, []);

  function onClick1() {
    const pageName = 'page1';
    window.history.pushState(pageName, '', '/page1');
    setPageName(pageName);
  }

  function onClick2() {
    const pageName = 'page2';
    window.history.pushState(pageName, '', '/page2');
    setPageName(pageName);
  }

  return (
    <div>
      <button onClick={onClick1}>page1</button>
      <button onClick={onClick2}>page2</button>

      {!pageName && <Home />}
      {pageName === 'page1' && <Page1 />}
      {pageName === 'page2' && <Page2 />}
    </div>
  );
}

function Home() {
  return <h2>홈페이지</h2>
}

function Page1() {
  return <h2>Page1</h2>
}

function Page2() {
  return <h2>Page2</h2>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);