// code your solution here
function saturdayFun(activity = "roller-skate"){
  return "This Saturday, I want to " + activity + "!";
}
console.log(saturdayFun("go swimming"));


function mondayWork (activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}
mondayWork("work from home")


function wrapAdjective (wrap = "*"){
  return function (special = "a hard worker"){
        console.log(`You are ${wrap}${special}${wrap}!`);
  }

}
wrapAdjective()();



