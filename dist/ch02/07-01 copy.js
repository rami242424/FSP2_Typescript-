"use strict";
(() => {
    class MyQueue {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    const sq = new MyQueue();
    sq.push('hello');
    sq.push('typescript');
    sq.push('world');
    const s1 = sq.pop();
    const s2 = sq.pop();
    const s3 = sq.pop();
    console.log(s1, s2 === null || s2 === void 0 ? void 0 : s2.toUpperCase(), s3);
    // --------------------
    const nq = new MyQueue();
    nq.push(10);
    nq.push(20.12345);
    nq.push(300);
    const n1 = nq.pop();
    const n2 = nq.pop();
    const n3 = nq.pop();
    console.log(n1, n2 === null || n2 === void 0 ? void 0 : n2.toFixed(2), n3);
})();
