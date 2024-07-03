// 인덱스 시그니처 - 배열

(()=>{
    const arr1: Array<string> = [];
    const arr2: number[] = [10, 20, 30];
    const arr3: (string | number)[] = ['hello', 100];

    console.log(arr1, arr2, arr3);

    // 방법1
    // interface MixedArray {
    //     0:string,
    //     1:number,
    //     2:number,
    //     3:string,
    // }

    //방법2 (위에처럼 일일이 나열하지 않아도 된다.)
    interface MixedArray{
        [heheh: number]: string | number,
    }

    const arr4: MixedArray = ['hello', 100, 200, 'world'];
    const arr5: MixedArray = [100, 'hello', 'world', 200, 'wow'];
    console.log(arr4, arr5);
    
})();