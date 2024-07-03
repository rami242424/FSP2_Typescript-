// 03/app.js 복사
import { DataType } from "./math.js";

const data: DataType = { a: 10, b: 20 };

// named export를 불러 올떄는 구조분해할당 사용
// import { sum, substract } from "./math.js";
// console.log(1, sum(data), substract(data));

// import MyMath from "./math.js";
// console.log(2, MyMath.sum(data), MyMath.divide(data));

import MyMath, {sum as total, substract} from "./math.js";
console.log(2, MyMath.sum(data), substract(data), MyMath.divide(data)), total(data);