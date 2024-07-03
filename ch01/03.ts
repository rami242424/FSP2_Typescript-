// 함수에 타입 지정

(()=>{
    function getCount(count: number): string {
        return 'Count: ' + count;
    }

    const result = getCount(20); // 기본(정답)
    // const result = getCount('hello'); // 컴파일에러_아규먼트가 string으로 옴
    // const result = getCount(); // 컴파일에러_아규먼트가 없음
    // const result = getCount(10, 20); // 컴파일러에러_1개의 아규먼트만 와야하는데 2개 값이 나옴
    

    console.log(result);
    
})();