// const grandparent = document.getElementById("grandparent-id");
// const grandparent = document.querySelector(".grandParent");
// const parent= Array.from(document.getElementsByClassName("parent"));
const grandparent = document.querySelector(".grandParent");
// parent.forEach(ele => {
//     changeColor(ele);
// });
// parent.forEach(prnt => {
//     changeColor(prnt);
// });
// changeColor(parent);
const parents = Array.from(grandparent.children);
parents.forEach(c => {
    changeColor(c);
});
function changeColor(element){
    element.style.backgroundColor = "yellow";
}