// Named export
// 외부에서도 쓸 수 있게 하려면(접근) export를 함수 앞에 적어준다.
// 내부에서만 접근하려면 export 없이 쓴다.

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