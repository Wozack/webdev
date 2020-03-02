//  function printHello(texty) {
//      console.log(texty + 10);                                                               
//  }


// let printy = function(texty ){
//     console.log(texty);
// }
//  printy("hi");
//  printy(3400);

// printy(printy);

// let dog = () => {
//     {
//         var name = "chewbarker";
//     }
// console.log(name);
// }

// dog();



// let dogs = () =>{
//     let name = "boba fetch";
//     let printy = () => {
//         console.log(name);
//     }
// printy();

// }

// dogs();

// let person = {
//     name:"Patrick Bateman",
//     Buisness_card: "Bone, flat lettering, silian rail",
//     axe : function(foe){
//         console.log(foe + " is killed.");
//         console.log("It's hip to be square!");
//         return "red"
//     }
// }

// console.log(person);
// console.log(person.name);
// person.axe("Jarred Leto");

// let cards = ["Van Patten", 42, "Patrick Bateman" ];

// console.log(cards[2]);
// console.log(person.Buisness_card);

// let jedi = {
//     name: "mace windu"
// }

// jedi.lightsaber="purple";
// console.log(person);

// let nums = [2,5,8]

// for(let num in nums){
//     console.log(num);
// }

// let person = { 
//     name : "chris",
//     job : "trainer",
// }

// for(let att in person) {
//     console.log(person[att]);
// }

let body = document.body;

// body.addEventListener("mousemove",(e) => {
//     // console.log("X:" + e.clientX);
//     // console.log("Y:"+e.clientY);
// });

// let image = document.createElement("img");
// image.src = "helper.jpg"; 
// image.alt= "helper";
// image.style.position = "absolute";
// image.style.top = "30px";
// image.style.left = "30px";
// body.append (image);
// body.addEventListener("mousemove", (e)=>{
//     image.style.top=e.clientY+"px";
//     image.style.left=e.clientX+"px";

// });

function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

let getData = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8081/note/");
    request.send();
    request.onload = () => {
        let data = JSON.parse(request.response);
        let list = document.getElementById("tasks");
        list.innerText = "";
        for(let task of data) {
            let listItem = document.createElement("li");
            let div = document.createElement("div");
            let para = document.createElement("p");
            para.innerText = task.text;
            let button = document.createElement("button");
            button.className = "btn btn-danger";
            button.innerText = "Delete"
            button.addEventListener("click", () => {
                deleteData(task.id);
            })
            div.appendChild(para);
            div.appendChild(button);
            listItem.appendChild(div);
            list.appendChild(listItem);
        }
    }
}

let postData = (event) => {
    event.preventDefault();
    let form = event.target;
    let obj ={};
    let inputs = form.getElementsByTagName("input");
    for( let input of inputs){
        console.log(input);
        if(input.name){
            obj[input.name] = input.value;
        }
    }
    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8081/note/");
    request.setRequestHeader("Content-Type", "application/json")
    
    let body = JSON.stringify(obj);
    console.log(body);
    request.send(body);
    
    request.onload = () => {
        getData();
    }
}
let deleteData = (id) => {
    console.log(id);
}
getData();