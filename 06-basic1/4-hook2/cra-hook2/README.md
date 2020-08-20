커스텀 훅 만들기

1. Profile - useUser
2. WidthPrinter - useWindowWidth

마운트가 되었는지 확인하는 훅 useMounted

그 외, 현업에서 유용하게 쓸 수 있는 훅으로는

`useBlockIfNotLogin()`: 로그인 되지 않은 사용자일 때는, alert을 띄우던가 자동으로 로그인 페이지로 보내기

`useBlockUnsavedChange(desc)`: 사용자가 어떤 것을 작성하다 페이지를 나가려고 할 때, '저장되지 않은 정보가 있습니다' 라는 메세지를 보여줄 때 사용

`useEffectIfLoginUser(callback, deps)`: useEffect를 로그인 한 회원에게만 실행하고 싶을 때. 콜백을 호출하는 시점이 로그인 유저인 경우에만 호출을 한다

`useLocalStorage(key, initialValue) => [value, setValue]`: 로컬스토리지를 이용한 훅. key와 초기값을 입력하면, 현재 value와 setValue 함수를 반환 (쿠키도 같음)
