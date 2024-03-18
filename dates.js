let today = new Date()
let m = today.getMinutes();
let s = today.getSeconds();
let d = today.getDay();
let h = today.getHours();

let prepend = h>=12?"PM":"AM";
h = (h>=12)?h-12:h;
let days;
let day = ["Sunday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

console.log("Day is: "+day[d]);
console.log("Current Time is: "+ `${h} ${prepend}:${m}:${s}`);

const body = document.body;

const btn = document.createElement("button");
const container = document.createElement("div");
const container2 = document.createElement("div");
const txt = document.createElement("p");
txt.innerHTML=`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta dolore sequi maiores sunt tempore eveniet, ipsam minus quam minima, tempora magni ipsum adipisci cupiditate aspernatur ut nihil iusto obcaecati. Error.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta dolore sequi maiores sunt tempore eveniet, ipsam minus quam minima, tempora magni ipsum adipisci cupiditate aspernatur ut nihil iusto obcaecati. Error.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta dolore sequi maiores sunt tempore eveniet, ipsam minus quam minima, tempora magni ipsum adipisci cupiditate aspernatur ut nihil iusto obcaecati. Error.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta dolore sequi maiores sunt tempore eveniet, ipsam minus quam minima, tempora magni ipsum adipisci cupiditate aspernatur ut nihil iusto obcaecati. Error.
`;

txt.style.textAlign="left";
txt.style.padding="25px";
txt.style.fontSize="Large";
container.append(txt);
container.style.height="100vh";
container.style.width="1150px";
container.style.backgroundColor="lightgrey";
body.append(container);
body.append(container2);
container.append(container2);
container2.style.width="1000px";
container.style.margin="auto";
container.style.textAlign="center";
container2.append(btn); 
btn.innerHTML="Print";
btn.style.padding="10px";
btn.style.backgroundColor="orange";
btn.style.color="white";
btn.style.borderRadius="5px";
btn.addEventListener("mouseover",()=>{btn.style.backgroundColor="black";btn.style.color="white"});
btn.addEventListener("mouseleave",()=>{btn.style.backgroundColor="orange";btn.style.color="white"});
btn.addEventListener("click",()=>{window.print()});





