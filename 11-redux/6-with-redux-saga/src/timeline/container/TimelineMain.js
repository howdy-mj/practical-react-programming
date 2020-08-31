import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNextTimeLine } from '../../common/mockData';
import { actions } from '../state';
import TimeLineList from '../component/TimelineList';

export default function TimelineMain() {
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);

  function onAdd() {
    const timeline = getNextTimeLine(); // 데이터를 가져와서 추가
    dispatch(actions.addTimeline(timeline));
  }

  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find((item) => item.id === id);
    dispatch(actions.requestLike(timeline));
  }

  console.log('TimelineMain render');

  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimeLineList timelines={timelines} onLike={onLike} />
      {isLoading && <p>전송 중...</p>}
    </div>
  );
}
