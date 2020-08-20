// 리액트 내부에 있는 코드를 수도 코드로 알아보면

let hooks = null;

export function useHook() {
  // ...
  hooks.push(hookData);
  // push로 넣기 때문에 순서에 맞게 쌓임
}

// 어떤 컴포넌트를 렌더링하는 함수
function process_a_component_rendering(component) {
  hooks = [];
  component();
  // 훅을 만들어서 제일 위의 hooks에 넣어주는 것
  let hooksForThisComponent = hooks;
  hooks = null;
  // ...
}

// 이렇듯 리액트는 각 훅이 사용된 위치 정보를 기반으로 훅 데이터를 관리
