// 컴포넌트에 propTypes로 타입을 입력할 수 있음
// 이때 porp-types 패키지를 이용해서 타입 정보 입력 가능
// prop-types 패키지는 속성값의 타입 정보를 정의할 때 사용하는 리액트 공식 패키지
User.propTypes = {...};

export default function User({ type, age, male, onChangeName, onChangeTitle }) {
  function onClick1() {
    const msg = `type: ${type}, age: ${age ? age : '알 수 없음'}`;
    log(msg, { color: type === 'gold' ? 'red' : 'black' });
    // ...
  }

  function onClick2(name, title) {
    if (onChangeName) {
      onChangeName(name);
    }
    onChangeTitle(title);
    male ? goMalePage() : goFemalePage();
    // ...
  }
  // ...
  return null;
}
