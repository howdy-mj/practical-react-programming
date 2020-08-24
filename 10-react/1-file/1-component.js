// 1. 타입 정의
// 컴포넌트를 사용하는 입장에서 속성값을 입력해야 하는데,
// 올바른 값을 입력하려면 타입을 알아야 함
// 그래서 가장 상단에 있는 것이 좋음
// 타입스크립트도 역시 상단에 타입을 정의하면 됨
MyComponent.propTypes = {
  // ...
};

// 함수에 이름을 부여하는 것이 좋음
// 리액트 개발자 도구에서 디버깅하기 힘듦 (Anonymous로 뜸)
// 매개변수는 props 대신, 밑에처럼 {prop1, props}처럼 명명된 매개변수를 작성하는 것이 좋음
export default function MyComponent({ prop1, prop1 }) {
  // 그렇지 않으면 props.prop1, props.prop2로 적어야 함
  // ...
}

// 컴포넌트 바깥에 있는 변수와 함수는 파일의 가장 밑에 정의하는 것이 좋음
// 중요도에서 타입과 컴포넌트 코드보다는 밀리기 때문에
// 변수명은 대문자로 작성하는 것이 좋음
// 그래야 다른 코드랑 섞여 있을 때 상수인걸 알 수 있음
// 다소 커다란 크기의 변수는 외부에서 할당하고 사용하는 것이 성능, 가독성 면에서 좋음
const COLUMNES = [
  { id: 1, name: 'phoneNumber', width: 200, color: 'white' },
  { id: 1, name: 'city', width: 100, color: 'gray' },
  // ...
];

const URL_PRODUCT_LIST = '/api/products';
function getTotalPrice({ price, totla }) {
  // ...
}
