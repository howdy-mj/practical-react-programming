import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

function Container() {
    return React.createContext(
        'div',
        null,
        React.createElement('p', null, '버튼을 클릭해주세요'),
        React.createElement(Button, { label: '좋아요'}),
        React.createElement(Button, { label: '싫어요'}),
    )
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);

// $ npx webpack 
// dist 폴더에 main.js가 생성됨