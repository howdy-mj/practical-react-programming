# Context

## 1 ~ 4: 상위에서 하위로 내리는 것

`1-no-content`처럼 부모에서 자식 컴포넌트로 속성값을 계속 전달해주는 것이 비효율적임 (사용하지 않고 내려주는 컴포넌트 존재)

이때 context를 사용하면 간편하게 코드 작성이 가능

`2-context`: createContext로 초기값을 넣으면, Provider, Consumer 컴포넌트가 생성되는데, Provider에서 값을 넘겨주면 Consumer에서 처리할 수 있음. 만약 Consumer에서 Provider를 찾지 못하면 맨 처음에 createContext에서 설정한 초기값으로 할당됨

## 5: 하위에서 상위 값 변경

## 6: 주의사항

- 여러 개의 context를 변경할 때, 불필요한 렌더링을 하지 않도록 객체를 하나로 묶어주기
- Consumer가 Provider를 찾을 수 있도록 위치 주의하기
