// propType에는 함수도 적용할 수 있음

MyComponent.propTypes = {
  age: function (props, propName, componentName) {
    const value = props[propName];
    if (value < 10 || value > 20) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}.
        It must be 10 <= value <= 20.`
      );
    }
  },
};

/** 
 * User.propTypes = {
  male: PropTypes.bool.isRequired,
  age: function (props, propName, componentName) {
    const value = props[propName];
    if (value < 10 || value > 20) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}.
        It must be 10 <= value <= 20.`
      );
    }
  },
  type: PropTypes.oneOf(['gold', 'silver', 'bronze']),
  onChangeName: PropTypes.func, // (name: string) => void
  onChangeTitle: PropTypes.func.isRequired,
};
*/
