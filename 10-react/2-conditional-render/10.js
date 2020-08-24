// undefined가 가능하기 때문에,
// 가능하다면 기본값으로 undefined가 아니라 빈 배열을 넣어주는 것이 좋음
<div>{students && students.map(/**/)}</div>;

// 빈 배열로 저장했다면 아래처럼 작성 가능
<div>{students.map(/**/)}</div>;
