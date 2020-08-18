import React from 'react';
import Style from './Box.module.css';
import cn from 'classnames';

export default function Box({size}) {
  // if (size === 'big') {
  //   return <div className={cn(Style.box, Style.big)}>큰 박스</div>
  // } else {
  //   return <div className={cn(Style.box, Style.small)}>작은 박스</div>
  // }

  const isBig = size === 'big';

  return (
  <button 
    className={cn(Style.box, {
      [Style.big]: isBig, 
      [Style.small]: !isBig
    })}
    // big일 때 big인 css가 적용이 되고, big이 아닐 때 small css가 적용
  >
    {isBig ? '큰 박스' : '작은 박스'}
  </button>
  )
};