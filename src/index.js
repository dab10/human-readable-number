module.exports = function toReadable (number) {
  const nZero = 'zero';
  const nOne = 'one';
  const nTwo = 'two';
  const nThree = 'three';
  const nFour = 'four';
  const nFive = 'five';
  const nSix = 'six';
  const nSeven = 'seven';
  const nEight = 'eight';
  const nNine = 'nine';
  const nTen = 'ten';
  const nEleven = 'eleven';
  const nTwelve = 'twelve';
  const nThirteen = 'thirteen';
  const nFourteen = 'fourteen';
  const nFifteen = 'fifteen';
  const nSixteen = 'sixteen';
  const nSeventeen = 'seventeen';
  const nEighteen = 'eighteen';
  const nNineteen = 'nineteen';
  const nTwenty = 'twenty';
  const nThirty = 'thirty';
  const nForty = 'forty';
  const nFifty = 'fifty';
  const nSixty = 'sixty';
  const nSeventy = 'seventy';
  const nEighty = 'eighty';
  const nNinety = 'ninety';
  const nOneHundred = 'one hundred';
  const nTwoHundred = 'two hundred';
  const nThreeHundred = 'three hundred';
  const nFourHundred = 'four hundred';
  const nFiveHundred = 'five hundred';
  const nSixHundred = 'six hundred';
  const nSevenHundred = 'seven hundred';
  const nEightHundred = 'eight hundred';
  const nNineHundred = 'nine hundred';
  const nHundred = 'hundred';

const toReadable1_9 = (numb1_9) => {
  //if (numb1_19 === 0) {return '';}
  if (numb1_9 === 1) {return nOne;}
  if (numb1_9 === 2) {return nTwo;}
  if (numb1_9 === 3) {return nThree;}
  if (numb1_9 === 4) {return nFour;}
  if (numb1_9 === 5) {return nFive;}
  if (numb1_9 === 6) {return nSix;}
  if (numb1_9 === 7) {return nSeven;}
  if (numb1_9 === 8) {return nEight;}
  if (numb1_9 === 9) {return nNine;}
}

const toReadable11_19 = (numb11_19) => {
  //if (numb11_19 === 10) {return nTen;}
  if (numb11_19 === 11) {return nEleven;}
  if (numb11_19 === 12) {return nTwelve;}
  if (numb11_19 === 13) {return nThirteen;}
  if (numb11_19 === 14) {return nFourteen;}
  if (numb11_19 === 15) {return nFifteen;}
  if (numb11_19 === 16) {return nSixteen;}
  if (numb11_19 === 17) {return nSeventeen;}
  if (numb11_19 === 18) {return nEighteen;}
  if (numb11_19 === 19) {return nNineteen;}
}



const toReadable10_90 = (numb10_90) => {
    if (numb10_90 === 10) {return nTen;}
    if (numb10_90 === 20) {return nTwenty;}
    if (numb10_90 === 30) {return nThirty;}
    if (numb10_90 === 40) {return nForty;}
    if (numb10_90 === 50) {return nFifty;}
    if (numb10_90 === 60) {return nSixty;}
    if (numb10_90 === 70) {return nSeventy;}
    if (numb10_90 === 80) {return nEighty;}
    if (numb10_90 === 90) {return nNinety;}
  }

const toReadable100_900 = (numb100_900) => {
    if (numb100_900 === 100) {return nOneHundred;}
    if (numb100_900 === 200) {return nTwoHundred;}
    if (numb100_900 === 300) {return nThreeHundred;}
    if (numb100_900 === 400) {return nFourHundred;}
    if (numb100_900 === 500) {return nFiveHundred;}
    if (numb100_900 === 600) {return nSixHundred;}
    if (numb100_900 === 700) {return nSevenHundred;}
    if (numb100_900 === 800) {return nEightHundred;}
    if (numb100_900 === 900) {return nNineHundred;}
  }


  if (number === 0) {return nZero;}

  if (number > 0 && number < 10) {return toReadable1_9(number);}
  //if (number === 0) {return toReadable1_9(number);}
 // if (number === 1) {return toReadable1_9(number);}
 // if (number === 2) {return toReadable1_9(number);}
 // if (number === 3) {return toReadable1_9(number);}
 // if (number === 4) {return toReadable1_9(number);}
 // if (number === 5) {return toReadable1_9(number);}
 // if (number === 6) {return toReadable1_9(number);}
 // if (number === 7) {return toReadable1_9(number);}
 // if (number === 8) {return toReadable1_9(number);}
 // if (number === 9) {return toReadable1_9(number);}
 
 if (number > 10 && number < 20) {return toReadable11_19(number);}
  
  //if (number === 10) {return toReadable10_19(number);}
 // if (number === 11) {return toReadable10_19(number);}
 // if (number === 12) {return toReadable10_19(number);}
 // if (number === 13) {return toReadable10_19(number);}
 // if (number === 14) {return toReadable10_19(number);}
 // if (number === 15) {return toReadable10_19(number);}
 // if (number === 16) {return toReadable10_19(number);}
//  if (number === 17) {return toReadable10_19(number);}
 // if (number === 18) {return toReadable10_19(number);}
 // if (number === 19) {return toReadable10_19(number);}
  
  if (number === 10) {return toReadable10_90(number);}
  if (number === 20) {return toReadable10_90(number);}
  if (number === 30) {return toReadable10_90(number);}
  if (number === 40) {return toReadable10_90(number);}
  if (number === 50) {return toReadable10_90(number);}
  if (number === 60) {return toReadable10_90(number);}
  if (number === 70) {return toReadable10_90(number);}
  if (number === 80) {return toReadable10_90(number);}
  if (number === 90) {return toReadable10_90(number);}

  if (number === 100) {return toReadable100_900(number);}
  if (number === 200) {return toReadable100_900(number);}
  if (number === 300) {return toReadable100_900(number);}
  if (number === 400) {return toReadable100_900(number);}
  if (number === 500) {return toReadable100_900(number);}
  if (number === 600) {return toReadable100_900(number);}
  if (number === 700) {return toReadable100_900(number);}
  if (number === 800) {return toReadable100_900(number);}
  if (number === 900) {return toReadable100_900(number);}

  // from 20 (not include) to 100 (not include);
  if ((number > 20) && (number < 100))  {return `${toReadable10_90(Math.floor(number / 10) * 10)} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`;}
                                                                    //tens                                      //digits 1-9
  
  // 110, 120, ... , 980, 990;
  if ((number > 100) && (number % 10 === 0) && (number % 100 !== 0)) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable10_90(number - Math.floor(number / 100) * 100)}`;}
                                                                                                    //hundreds                              //tens
// 101-109, 201-209, ... , 901-909;
  if ((number > (Math.floor(number / 100) * 100)) && (number < (Math.floor(number / 100) * 100) + 10)) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable1_9(number - Math.floor(number / 100) * 100)}`;}
                        //hundreds                                  //hundreds + 10                                              //hundreds                                                      //digits 1-9                               
// 111-119, 211-219, ... , 911-919; 
  if ((number > (Math.floor(number / 100) * 100) + 10) && (number < (Math.floor(number / 100) * 100) + 20)) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable11_19(number - Math.floor(number / 100) * 100)}`;}
                        //hundreds +10                                          //hundreds + 20                                                         //hundreds                              //digits 11-19
// 121-129, 131-139, ... , 981-989, 991-999;
  if ((number > (Math.floor(number / 100) * 100) + 20) && (number < (Math.floor(number / 100) * 100) + 100)) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable10_90(Math.floor(number / 10) * 10 - Math.floor(number / 100) * 100)} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`;}
                        //hundreds + 30                                         //hundreds + 100                                                        //hundreds                                                   //tens                                                  //digits 1-9

  //if ((number > 110) && (number < 120)) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable11_19(number - Math.floor(number / 100) * 100)}`;}
  //if (number === 120) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable20_90(Math.floor(number / 10) * 10 - Math.floor(number / 100) * 100)}`;}
  
 // if ((number > 100) && (number % 10 === 0) && (number % 100 !== 0)) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable10_90(Math.floor(number / 10) * 10 - Math.floor(number / 100) * 100)}`;}
  
 // if ((number > 200) && (number < 210)) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable1_9(number - Math.floor(number / 100) * 100)}`;}
 // if ((number > 210) && (number < 220)) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable11_19(number - Math.floor(number / 100) * 100)}`;}
  //if (number === 220) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable20_90(Math.floor(number / 10) * 10 - Math.floor(number / 100) * 100)}`;}
  
 // if ((number > 220) && (number < 230)) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable10_90(Math.floor(number / 10) * 10 - Math.floor(number / 100) * 100)} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`;}
 
  // if (number === 230) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable20_90(Math.floor(number / 10) * 10 - Math.floor(number / 100) * 100)}`;}
 
 // if ((number > 230) && (number < 240)) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable10_90(Math.floor(number / 10) * 10 - Math.floor(number / 100) * 100)} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`;}


  // if ((number >= 210) && (number < 220)) {return `${toReadable100_900(Math.floor(number / 100) * 100)} ${toReadable10_19(number - Math.floor(number / 100) * 100)}`;}
  //  if (number > (Math.floor(number / 10) * 10) && number < (Math.ceil(number / 10) * 10)) {return `${toReadable10_90(Math.floor(number / 10) * 10)} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`}
  
 // if (number === 100) {return `${nOne} ${nHundred}`;}
  //if (number > (Math.floor(number / 100) * 100) && number < (Math.ceil(number / 100) * 100)) {return `${toReadable1_9(Math.floor(number / 100))} ${nHundred} ${toReadable10_90(Math.floor(number / 10) * 10) - Math.floor(number / 100) * 100} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`}
  //if (number > 100 && number < 200) {return `${toReadable1_9(Math.floor(number / 100))} ${nHundred} ${toReadable10_90(Math.floor(number / 10) * 10) - Math.floor(number / 100) * 100} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`}
  
  
  
  
  //if (number > 30 && number < 40) {return `${nThirty} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`}
  //if (number > 40 && number < 50) {return `${nForty} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`}
  //if (number > 50 && number < 60) {return `${nFifty} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`}
  //if (number > 60 && number < 70) {return `${nSixty} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`}
  //if (number > 70 && number < 80) {return `${nSeventy} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`}
 // if (number > 80 && number < 90) {return `${nEighty} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`}
 // if (number > 90 && number < 100) {return `${nNinety} ${toReadable1_9(number - Math.floor(number / 10) * 10)}`}

}
