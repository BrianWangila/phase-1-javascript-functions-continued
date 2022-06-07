// code your solution here
function saturdayFun(activity = "roller-skate"){
  return "This Saturday, I want to " + activity + "!";
}
console.log(saturdayFun("go swimming"));


function mondayWork (activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}
mondayWork("work from home")


function wrapAdjective (wrap){
  return function (special = "special"){
    let string = `You are ${special}!`
      return function (){
        console.log(`${string} *${wrap}*`);
      }
  }

}
console.log(wrapAdjective("a hard worker")()("%"));