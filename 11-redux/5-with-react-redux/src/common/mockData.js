const friends = [
  { name: '쯔위', age: 15 },
  { name: '아이유', age: 20 },
  { name: '수지', age: 25 },
  { name: '손나은', age: 30 },
];

const timelines = [
  { desc: '점심 맛있었음', likes: 0 },
  { desc: '멋짐', likes: 10 },
  { desc: '호텔에 놀러감', likes: 20 },
  { desc: '휴대폰 바꿈', likes: 30 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextTimeLine() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeLine = makeDataGenerator(timelines);
