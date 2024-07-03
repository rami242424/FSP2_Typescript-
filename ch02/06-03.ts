// 드롭다운 리스트 생성 - 유니온 타입
// 06-02.ts 복사

(()=>{
    interface DropdownItem {
        value: string | number ;
        selected?: boolean;
    }

    const cityList: DropdownItem[] = [
      { value: 'Seoul', selected: false },
      { value: 'busan' },
      { value: 'GwangJu', selected: true },
      // { value: 56789 },
    ];
  
    const zipcodeList: DropdownItem[] = [
      { value: 12345, selected: false },
      { value: 34567, selected: true },
      { value: 56789 },
    ];
  
    function createDropdownList(list: DropdownItem [] ){
        let value;
        const options = list.map(item => {
          value = item.value;
          return `<option selected="${ item.selected ? 'selected' : '' }">${ typeof value === 'string' ? value.toLowerCase() : value }</option>`;
        });
        return `<select>\n${ options.join('\n') }\n</select>`;   
      }
  
  
 
    console.log(createDropdownList(cityList));
  

    console.log(createDropdownList(zipcodeList));
})();
