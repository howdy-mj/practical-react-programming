import React, { useEffect, useReducer } from 'react';
import store from '../../common/store';
import { getNextTimeLine } from '../../common/mockData';
import { addTimeline } from '../state';
import TimeLineList from '../component/TimelineList';

export default function TimelineMain() {
  // 상태값이 변경될 때마다 렌더링 하기 위해 만듦
  const [, forceUpdate] = useReducer((v) => v + 1, 0);
  useEffect(() => {
    let prevTimelines = store.getState().timeline.timelines;
    const unsubscribe = store.subscribe(() => {
      const timelines = store.getState().timeline.timelines;
      if (prevTimelines !== timelines) {
        forceUpdate();
      }
      prevTimelines = timelines;
    });
    return () => unsubscribe();
  }, []);

  function onAdd() {
    const timeline = getNextTimeLine(); // 데이터를 가져와서 추가
    store.dispatch(addTimeline(timeline));
  }
  console.log('TimelineMain render');
  const timelines = store.getState().timeline.timelines; // 리덕스에서 타임라인 데이터를 가져와 렌더링
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimeLineList timelines={timelines} />
    </div>
  );
}
