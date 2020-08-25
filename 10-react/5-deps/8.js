function MyComponent({ onClick }) {
  const onClickRef = useRef();
  onClickRef.current = onClick;
  // ...
}
