// 삼항연산자를 세번 썼고, UI 부분은 크게 두 부분으로 나눌 수 있음
// 한 눈에 파악하기 힘듦
function Greeting({ isEvent, isLogin, name, cash }) {
  return (
    <div>
      저희 사이트에 방문해 주셔서 감사합니다.
      {isEvent ? (
        <div>
          <p>오늘의 이벤트를 놓치지 마세요.</p>
          <button onClick={onClickEvent}>이벤트 참여하기</button>
        </div>
      ) : isLogin ? (
        cash <= 100000 ? (
          <div>
            <p>{name}님 안녕하세요.</p>
            <p>현재 보유하신 금액은 {cash}원 입니다. </p>
          </div>
        ) : null
      ) : null}
    </div>
  );
}
