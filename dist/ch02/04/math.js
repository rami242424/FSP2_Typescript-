// 03/math.js 복사
// Named export
export function sum(data) {
    return data.a + data.b;
}
//
export function substract(data) {
    return data.a - data.b;
}
export function divide(data) {
    return data.a / data.b;
}
// export default
export default { sum, divide };
