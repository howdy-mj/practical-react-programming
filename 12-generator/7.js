// 하나씩 실행을 멈출 수 있기 때문에 협력이 가능

// saga 함수
function* minsu() {
  const myMsgList = [
    '안녕 수지',
    '만나서 반갑',
    '내일 영화 볼래?',
    '시간 돼?',
    '내일 모레는?',
  ];

  for (const msg of myMsgList) {
    console.log('수지:', yield msg);
  }
}

// saga 미들웨어 역할
function suji() {
  const myMsgList = ['', '안녕 민수', '반갑', '...'];
  const gen = minsu();
  for (const msg of myMsgList) {
    console.log('민수: ', gen.next(msg).value);
    // next의 매개변수로 입력한 값은 yield의 반환 값이 됨
  }
}
suji();

/*
 suji()를 호출하면,
 빈 문자열과 '민수: '가 호출되어서, 
 '민수: 안녕 수지'가 실행되는 것
*/
