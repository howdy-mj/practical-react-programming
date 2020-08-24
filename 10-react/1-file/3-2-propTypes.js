import PropTypes from 'prop-types';

User.propTypes = {
  male: PropTypes.bool.isRequired,
  age: PropTypes.number,
  type: PropTypes.oneOf(['gold', 'silver', 'bronze']),
  onChangeName: PropTypes.func, // (name: string) => void
  onChangeTitle: PropTypes.func.isRequired,
};

// prop-type 패키지로는 함수의 매개변수에 대한 타입은 정리할 수 없음
// 따라서 주석으로 타입을 적어주는 것이 좋음

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

function goMalePage() {}
function goFemalePage() {}
