# script 명령어

HTTPS로 실행시키고 싶다면,

```
# mac 명령어
$ HTTPS=true npm start
```

## build

build로 정적 파일 생성

```
$ npm run build
```

로컬에서 정적 페이지를 작동시키기 위해서 serve 패키지 사용

```
$ npx serve -s build
```

`build` 폴더를 보면,
css는 두개가 하나로 합쳐진 것을 볼 수 있고,
동적 import를 사용한 것은, `js` 폴더에 별도의 js파일로 만들어져 있는 것을 확인할 수 있음
`media`에는 이미지 파일이 있는데, 이미지 파일 크기에 따라 동작이 약간 다름; 큰 이미지는 별도의 파일로 빌드 되지만, 작은 것은 자바스크립트 안에 내재됨
(내껀 둘다 커서 별도의 파일로 됨...)
작은 이미지 파일을 js파일에 넣는 이유 중 하나는, HTTP 요청 횟수를 줄이기 위해(단, 2.0 부터는 요청 횟수가 성능에 큰 영향을 미치지 않음), 빠르게 이미지를 보여줄 수 있기 때문임.

## test

```
$ npm test
```

`App.test.js`를 `App.spec.js`로 이름을 바꾸어도 테스트 파일로 인식
`__tests__` 폴더를 만들어 그 안에 넣는 것은 모두 test 실행.
해당 강사는 폴더보다는 각 파일에 맞는 테스트 파일을 만들어서 관리하기 용이하게 하는 것을 선호.

## eject

cra 기반으로 개발환경을 구축하고 싶을 때 사용,
수출을 하면 수동으로 설정파일을 관리해야 함.
꼭 필요하지 않으면 손 대는 것을 추천하지 않음.

---

# polyfill

모든 브라우저에서 사용가능하게 만들어주는 것
보통 `core-js`를 많이 사용함
cra는 기본으로 core-js가 내장되어 있어 그냥 import만 해서 사용하면 됨

---

# 환경 변수

개발 테스트 또는 환경별로 다른 값을 이용할 때 사용함

```
# process.env.{변수 이름}
process.env.NODE_ENV
```

`NODE_ENV`는 npm start는 development, npm test는 test, npm run build는 production이라는 값을 가짐

```
console.log(process.env.NODE_ENV)
```

후, npm start를 하면 development라고 찍힘

이 외, 실행할 때 확인하려면

```
$ REACT_APP_API_URL=api.myapp.com npm start
```

환경 변수가 많아지면, root폴더에서 환경변수 파일별로 관리하는 것이 좋음
ex. `.env.development`로 만들어서
