// 디버깅할 때 조금 더 편리함

import { useState, useDebugValue } from 'react';

export default function useChangeAppState() {
  const [state, setState] = useState(STATE_START);

  const next = () => setState(state === STATE_STOP ? STATE_START : state + 1);

  // react developer tools의 component 탭을 클릭해보면 나오는데,
  // 한눈에 알아보기 힘들었던 state값 위에 여기서 정의해 놓은 문자값이 뜸
  useDebugValue(
    state === STATE_START
      ? 'start'
      : state === STATE_RUNNING
      ? 'running'
      : 'stop'
  );
  return [state, next];
}

export const STATE_START = 0;
export const STATE_RUNNING = 1;
export const STATE_STOP = 2;
