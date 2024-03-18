const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", e => {
    console.log("grandparent bubble");
})
parent.addEventListener("click", e => {
    
    console.log("parent bubble");
},{once:true})
child.addEventListener("click", e => {
    console.log("child bubble");
})
document.addEventListener("click", e =>{
    console.log("document bubble");
},{once:true})

// grandparent.addEventListener("click", e => {
//     console.log("grandparent bubble");
// },{capture: true})

// parent.addEventListener("click", e => {
//     e.stopPropagation();
//     console.log("parent bubble");
// },{capture: true})

// child.addEventListener("click", e => {
//     console.log("child bubble");
// },{capture: true})

// document.addEventListener("click", e =>{
//     console.log("document bubble");
// },{capture: true})