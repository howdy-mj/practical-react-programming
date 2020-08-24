// 때에 따라서 상대적으로 더 좋은 코드가 있음
// 조건부 렌더링을 사용하면 자칫 jsx 코드가 복잡해질 수 있음
// 따라서 항상 더 좋은 코드에 대해 끊임없이 고민해야 함
function GreetingA({ isLogin, name }) {
  if (isLogin) {
    return (
      <p className="greeting" onClick={showMenu}>
        {`${name}님 안녕하세요.`}
      </p>
    );
  } else {
    return (
      <p className="noAuth" onClick={goToLoginPage}>
        권한이 없습니다.
      </p>
    );
  }
}

// 삼항연산자 사용
function GreetingB({ isLogin, name }) {
  return (
    <p
      className={isLogin ? 'greeting' : 'noAuth'}
      onClick={isLogin ? showMenu : goToLoginPage}
    >
      {isLogin ? `${name}님 안녕하세요.` : '권한이 없습니다.'}
    </p>
  );
}
