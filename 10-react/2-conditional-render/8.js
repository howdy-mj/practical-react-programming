// 조건부 렌더링할때는 데이터 타입 주의

// cash가 0원일 때에는 false라 작동하지 않음
// 따라서 명확히 boolean 타입으로 작성해야 함

// memo가 비어있을 때 뒤에 false가 되어 작동하지 않음

/**
<div>
  {cash && <p>{cash}원 보유 중</p>}
  {memo && <p>{200 - memo.length}자 입력 가능</p>}
</div>;
 */

<div>
  {!!cash && <p>{cash}원 보유 중</p>}
  {memo && <p>{200 - memo.length}자 입력 가능</p>}
</div>;
