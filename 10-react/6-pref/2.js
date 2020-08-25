const prevProps = {
  todos: [
    { title: 'fix bug', priority: 'high' },
    { title: 'meeting with A', priority: 'low' },
    // ...
  ],
  // ...
};

const nextProps = {
  todos: [
    { title: 'fix bug', priority: 'high' },
    { title: 'meeting with A', priority: 'high ' },
    // ...
  ],
  // ...
};

// 가장 무식한 방법은 전부다 비교하는 것
// 하지만 성능에 좋지 않음
// 이를 한 번의 비교로 알아낼 수 있는데, 변수를 불변객체로 관리하는 것
// 불변 객체로 관리하는 것은, 수정 사항을 이전 상태값에 추가하는게 아니라,
// 새로운 객체를 만들어 붙이는 것
// 따라서, 객체의 레퍼런스가 변경되는 것
