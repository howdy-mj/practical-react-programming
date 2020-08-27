import { useSelector, shallowEqual } from 'react-redux';

// 미리 커스텀 훅을 만들어서
function useMySelector(selector) {
  return useSelector(selector, shallowEqual);
  // 갖고 있는 모든 속성값을 비교
}

function MyComponent() {
  // 값만 입력하면 되도록
  const [value1, value2] = useMySelector((state) => [
    state.value1,
    state.value2,
  ]);

  const value3 = useMySelector((state) => state.value3);
  // 다만 배열이 아닌 값에 사용하면, 참조값만 비교하면 될 것을 속성값까지 모두 비교하기 때문에
  // 약간 불필요

  const [value4] = useMySelector((state) => [state.value4]);
  // 따라서 value3처럼 배열이 아니더라도, 배열로 만들어서 반환하는 것이 좋음
}
