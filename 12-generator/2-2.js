/*
다음 조건을 만족하는 객체는 반복자(iterator)이다. 
- next 메서드를 갖고 있음
- next 메서드는 value와 done 속성값을 가진 객체를 반환
- done 속성값은 작업이 끝났을 때 참이 됨

다음 조건을 만족하면 반복 가능(iterable)한 객체이다. 
- Symbol.iterator 속성값으로 함수를 갖고 있음
- 해당 함수를 호출하면 반복자(iterator)를 반환


*/
