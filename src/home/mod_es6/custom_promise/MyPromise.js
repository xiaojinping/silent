//  自定义 promise
function MyPromise (fn) {
    this.succseCallback = null;
    this.failedCallback = null;
    this.status = 'pending';
    this.value = null;
    fn(this.resolve.bind(this), this.reject.bind(this));
}
MyPromise.prototype = {
    constructor: MyPromise,
    resolve (value) {
        this.status = 'resolved';
        this.value = value;
        setTimeout(() => {
            this.succseCallback(value);
        }, 0);
    },
    reject (value) {
        this.status = 'rejected';
        this.value = value;
        setTimeout(() => {
            this.failedCallback(value);
        }, 0);
    },
    then (succse, failed) {
        this.succseCallback = succse;
        this.failedCallback = failed;
    },
    catch (fn) {
        this.failedCallback = fn;
    }
}

export default MyPromise;
