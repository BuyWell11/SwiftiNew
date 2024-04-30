class FunctionUtils {
    static debounce(func: (...args: any[]) => any, interval: number) {
        let timer: NodeJS.Timeout | null = null;

        return function debounced(this: any, ...args: any[]) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => func.apply(this, args), interval);
        };
    }

}

export default FunctionUtils;