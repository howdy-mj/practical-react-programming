관심사의 분리가 필요함

프로그래밍에서 관심사의 분리란 복잡한 코드를 비슷한 기능을 하는 코드끼리 모아서 별도로 관리하는 것을 말함
UI를 처리하는 코드나 서버 api를 호출하는 코드 또는 DB를 관리하는 코드 같은 것을 같은 파일 안에서 관리하면 복잡해짐, 따라서 파일을 분리해서 관리하는 것이 좋음

페이지 별로 폴더를 만들어서 관리할 수 있음
하지만 프로젝트의 규모가 커지면 문제가 생김
상탯값이 흩어져 관리되고, 중복값이 발생할 수 있음

`1`: 자식 컴포넌트에서 데이터를 변경하면 부모 데이터와 정합이 맞지 않은 문제가 발생

`2`: 컴포넌트가 비즈니스 로직이나 상탯값을 갖고 있으면 재사용하기 힘듦

- 비즈니스 로직 유무
- 상탯값
  이 두가지로 컴포넌트 분리를 추천

---

재사용성이 좋은 컴포넌트란,

1. 비즈니스 로직이 없다.
2. 상탯값이 없다. 단, 마우스 오버(mouse over)와 같은 UI 효과를 위한 상탯값 제외

---

`2.js` 리팩토링

component: 재사용성이 좋은 것
container: 비즈니스 로직이 있는 것
