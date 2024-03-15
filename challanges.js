// Coding Challenge #1

// test data 1
let heightOfJohn, weightOfJohn, heightOfMark, weightOfMark, _JohnBMI, _MarkBMI;
heightOfJohn = 1.95;
weightOfJohn = 92;
heightOfMark = 1.69;
weightOfMark = 78;
_JohnBMI = weightOfJohn / (heightOfJohn ** 2);
_MarkBMI = weightOfMark / (heightOfMark ** 2);
_MarkHigherBMI = Boolean(_MarkBMI > _JohnBMI);
console.log(_MarkHigherBMI);
 
// test data 2
heightOfJohn = 1.76;
weightOfJohn = 85;
heightOfMark = 1.88;
weightOfMark = 95;
console.log(_MarkHigherBMI);


// Coding Challenge #2

if (_MarkHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

console.log(`Mark's BMI ${_MarkBMI} is higher than John's ${_JohnBMI}!`);

// Coding Challenge #3

let _DolphinsScore1, _DolphinsScore2, _DolphinsScore3, _DolphinsAverage, _KoalasScore1, _KoalasScore2, _KoalasScore3, _KoalasAversge
 
_DolphinsScore1 = 96;
_DolphinsScore2 = 108;
_DolphinsScore3 = 89;
_DolphinsAverage = (_DolphinsScore1 + _DolphinsScore2 + _DolphinsScore3) / 3;
_KoalasScore1  = 88;
_KoalasScore2  = 91;
_KoalasScore3  = 110;
_KoalasAversge = (_KoalasScore1 + _KoalasScore2 + _KoalasScore3) / 3;

console.log(_DolphinsAverage);
console.log(_KoalasAversge);

if ((_KoalasAversge > _DolphinsAverage) && (_KoalasAversge >= 100)) {
    console.log('Dolphins win');
} else if ((_KoalasAversge < _DolphinsAverage) && (_DolphinsAverage >= 100)) {
    console.log('Koalas win');
} else if ((_KoalasAversge === _DolphinsAverage) || ((_KoalasAversge < _DolphinsAverage) && (_DolphinsAverage <= 100)) ||   ((_KoalasAversge > _DolphinsAverage) && (_KoalasAversge <= 100))) {
    console.log('they are draw');
}