const element = (
  <a key="key1" style={{ width: 100 }} href="http://google.com">
    click here
  </a>
);

console.log(element); 
// 위 element를 콘솔로 출력한 결과
const consoleLogResult = {
  type: 'a',
  key: 'key1',
  ref: null,
  props: {
    href: 'http://google.com',
    style: {
      width: 100,
    },
    children: 'click here'
  },
  // ...
}