class FunctionUtils {
  static debounce(func, interval) {
    let timer = null;

    return function debounced(...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => func.apply(this, args), interval);
    };
  }

}

export default FunctionUtils;