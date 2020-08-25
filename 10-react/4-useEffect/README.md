useEffect

의존성 배열을 거의 쓰지 않지만, 종종 써야할 때가 있음
그러나 이 의존성 배열 때문에 문제가 생기는 경우가 많음

만약 값이 절대 바뀌지 않을 것이란 걸 안다면, 따로 커스텀 훅으로 빼는 것이 좋음

`App.js`

```js
useOnMounted(() => fetchUser(userId).then((data) => setUser(data)));
```

`useOnMounted.js`

```js
export default function (useOnMounted(effect) {
  useEffect(effect, []);
}
```

---

`4`: 적어야할 변수를 적지 않았을 떼 발생하는 문제

`6`: 부수효과 함수를 async await로 만들면 문제

`7`: 부수효과 함수가 있는 것을 바깥에서 사용하려면
