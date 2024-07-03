// 드롭다운 리스트 생성 - 자바스크립트

(()=>{
  const cityList = [
    { value: 'Seoul', selected: false },
    { value: 'busan' },
    { value: 'GwangJu', selected: true },
    // { value: 56789 },
  ];

  const zipcodeList = [
    { value: 12345, selected: false },
    { value: 34567, selected: true },
    { value: 56789 },
  ];

  // TODO: 아래와 같이 출력 되도록 함수 작성
  // 1. gpt
  // function createDropdownList(list) {
  //   return `
  //     <select>
  //       ${list.map(item => `
  //         <option${item.selected ? ' selected="selected"' : ''}>
  //           ${String(item.value).toLowerCase()}
  //         </option>`).join('')}
  //     </select>
  //   `.trim();
  // }

  // 2. gpt 참고
    // function createDropdownList(list) {
    //   return `
    //     <select>${list.map(item => `
    //     <option ${item.selected ? 'selected="selected"' : 'selected=""'}>${String(item.value).toLowerCase()}</option>`

    //     )}
    //     </select>
    //   `
    // }

    // 3. 수업 (강사님 강의 자료보기!!)
    function createDropdownList(list) {
      let value;
      const options = list.map(item => {
        value = item.value;
        return '<option selected="${ item.selected ? 'selected' : ''}"> ${ value }
        ${typeof value ==='string'}
        </option>'
      });
        return `<select>\n${ options.join('') }\n</select>`;
      
    }




  /* 출력 결과
  <select>
  <option selected="">seoul</option>
  <option selected="">busan</option>
  <option selected="selected">gwangju</option>
  </select>
  */
  console.log(createDropdownList(cityList));

  /*
  <select>
  <option selected="">12345</option>
  <option selected="selected">34567</option>
  <option selected="">56789</option>
  </select>
  */
  console.log(createDropdownList(zipcodeList));
})();
