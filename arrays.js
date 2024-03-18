let item = "laptop";

const myArray = ["computer",item,8,true];
const anotherArray = ["one","two","three","four","five","six"];
//console.log(anotherArray.join("-"));
// anotherArray.push("seven","eight","nine");
//  anotherArray.unshift("seven","eight","nine");
//  anotherArray.push("seven","eight","nine");
// anotherArray.pop();

//  anotherArray.forEach(function(item){
    // item = `<li>${item}</li>`;
    // console.log(item);
// })

 anotherArray.forEach(function(item){
    if(item.length<=3){
   item = `<li>${item}</li>`
   console.log(item);
}
 })

// console.log(anotherArray);