function countingSundays(firstYear, lastYear) {
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let startYearIndex =  12*(firstYear-1901)
  let firstSunday = init()[startYearIndex]
  let sundays = [firstSunday]
  generate(firstYear, lastYear)

  function calcSundays(daysInMonth, sundayInPrevMonth){
      let daysLeft = daysInMonth - sundayInPrevMonth
      let daysIntoNext = daysLeft%7
      let firstSundayNextMonth = 7-daysIntoNext
      return firstSundayNextMonth 
  }

  function init(){
      let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      let sundays = [6]
      for (let i = 1901; i <= 2000; i++){
        if (i % 4 === 0 || i % 100 === 0 && i % 400 === 0){
          daysInMonth[1] = 29
        } else {
          daysInMonth[1] = 28
        }
        for (let j = 0; j < 12; j++){
            sundays.push(calcSundays(daysInMonth[j], sundays[sundays.length-1]))
          }
        }
        return sundays
    }

  function generate(firstYear, lastYear){
    for (let i = firstYear; i <= lastYear; i++){
        if (i % 4 === 0 || i % 100 === 0 && i % 400 === 0){
          daysInMonth[1] = 29
        } else {
          daysInMonth[1] = 28
        }
        for (let j = 0; j < 12; j++){
            sundays.push(calcSundays(daysInMonth[j], sundays[sundays.length-1]))
          }
        }
  }
  
    return sundays.filter((x)=>x===1).length

}

console.log(countingSundays(1901, 2000));