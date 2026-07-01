let height = 1.67 ;
let weight = 90 ;

const bmi = weight / (height * height) ;
console.log(`Your bmi is : ${bmi.toFixed(3)}`) ;

if (bmi < 18.5) {
    console.log("underweight") ;
}
else if (bmi >= 18.5 && bmi <= 24.9){
    console.log("normal weight") ;
}
else if (bmi >= 25 && bmi <= 29.9){
    console.log("overweight") ;
}
else {
    console.log("sorry bro , you are obese") ;
}