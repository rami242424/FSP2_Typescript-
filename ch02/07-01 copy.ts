
(()=>{
    interface IQueue<T> {
      data: T[];
      push(item: T): void; 
      pop(): T | undefined; 
    }
    class MyQueue<T> implements IQueue<T>{
      data:T[] = [];
      push(item: T) {
        this.data.push(item);
      }
      pop(): T | undefined {
        return this.data.shift();
      }
    }
  
    const sq = new MyQueue<string>();
    sq.push('hello');
    sq.push('typescript');
    sq.push('world');
  
    const s1 = sq.pop();
    const s2 = sq.pop();
    const s3 = sq.pop();
  
    console.log(s1, s2?.toUpperCase(), s3);
  
  // --------------------
  
    const nq = new MyQueue<number>();
    nq.push(10);
    nq.push(20.12345);
    nq.push(300);
    const n1 = nq.pop();
    const n2 = nq.pop();
    const n3 = nq.pop();
    console.log(n1, n2?.toFixed(2), n3);
  
  })();