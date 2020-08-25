# 가상 돔 & 실제 돔

크롬 개발자도구

`1`
자식 요소가 돔 요소라면,
실제 돔에서 삭제되고 다시 추가될 것임

따라서 자식 요소가 많은 곳의 태그를 변경하면 바뀔 때(렌더될 때) 끊기는 느낌이 들 수 있음

`2`
요소의 속성만 변경했을 경우, 전체가 아니라 해당 요소만 삭제되고 다시 생성됨

자식 컴포넌트도 영향이 없음

`3`: 파인애플 추가
실제 돔에서는 파인애플만 추가하거나 삭제함

리액트는 중간 요소가 바뀌면 그 뒤에 요소가 같다 하더라도 알지 못함
바나나가 달라지지 않았다고 하는 것을 리액트가 알려면 모든 값을 비교해야 하는데, 연산량이 꽤 커지게 됨
리액트는 순차적으로 코드를 읽기 때문에 이렇게 되는 것

`4`: key

key 속성 값으로 리액트에게 어떤 요소가 추가/삭제 되는지 알려줄 수 있음

`5`: 배열

배열도 index가 아니라 따로 id값을 적어주는 것이 좋음. 만약 index로 key를 적을 경우, 맨 뒤에서 추가하는 것 말고는 리액트에게 달라진 것을 알려줄 수 없기 때문

`6`