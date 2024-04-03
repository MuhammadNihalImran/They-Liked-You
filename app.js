
var users = [
  {
    profilePic: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 4,
    location: "karachi",
    name: "Nihal",
    age: 20,
    interests:[{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest:"music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest:"writing"
    }
],
    bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non debitis atque corporis nam, repellat deserunt.",
    isFriend:null,
  },
  {
    profilePic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 10,
    location: "Japan",
    name: "Hinata",
    age: 17,
    interests:[{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest:"music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest:"writing"
    }
],
    bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non debitis atque corporis nam, repellat deserunt.",
    isFriend:null,
  },
  {
    profilePic: "https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:"https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 6,
    location: "karachi",
    name: "Huzifa",
    age: 19,
    interests:[{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest:"music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest:"writing"
    }
],
    bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non debitis atque corporis nam, repellat deserunt.",
    isFriend:null,
  },
  {
    profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 20,
    location: "England",
    name: "victoria",
    age: 22,
    interests:[{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest:"music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest:"writing"
    }
],
    bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non debitis atque corporis nam, repellat deserunt.",
    isFriend:null,
  },
];

var curr = 0;
var  isAnimated = false;

function setData(index){
    select(".prflimg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-Child(1) ").textContent = users[index].name;
    select(".name h1:nth-Child(2) ").textContent = users[index].age;

    var clutter = "";
    users[index].interests.forEach(interest => {
        clutter += ` <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        ${interest.icon}
        <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
    </div>`
    });
    select(".tags").innerHTML = clutter; 
    
    select(".bio p").textContent = users[index].bio;
}
function select(elem){
    return document.querySelector(elem)
}
(function setInitial(){
      select(".maincard img").src = users[curr].displayPic;
      select(".incomingcard img").src = users[curr+1]?.displayPic;

     setData(curr)
      curr=2;
})();


function imageChange(){
    if(!isAnimated){
     isAnimated = true;
    
    let t1 = gsap.timeline({
        onComplete: function() {
            isAnimated = false;
            let main = document.querySelector(".maincard");
            let incoming = document.querySelector(".incomingcard");
    
            incoming.classList.remove("z-[2]");
            incoming.classList.add("z-[3]");
            incoming.classList.remove("incomingcard");
    
            main.classList.remove("z-[3]");
            main.classList.add("z-[2]");
            gsap.set(main, {
                scale: 1,
                opacity: 1
            });
            if(curr === users.length) curr = 0;
            select(".maincard img").src = users[curr].displayPic; 
            curr++
            main.classList.remove("maincard");
            incoming.classList.add("maincard");
            main.classList.add("incomingcard");
        }
    });
    
    t1.to(".maincard",{
        scale:1.1,
        opacity:0,
        ease:Circ,
        duration:.9,
    },"a")
    .from("incomingcard",{
        scale:.9,
        opacity:0,
        ease:Circ,
        duration:.9,
    },"a")
};

}

    let deny = select(".deny");
    let accept = select(".accept");
    deny.addEventListener("click",function() {
         imageChange();
         setData(curr-1);
         gsap.from(".details .element", {
            y: "100%",
            opacity: 0,
            stagger: .06,
            ease: Power4.easeInOut, // Corrected typo in ease value
            duration: 1.5,
        });
    })
    accept.addEventListener("click",function() {
         imageChange();
         setData(curr-1);
         gsap.from(".details .element", {
            y: "100%",
            opacity: 0,
            stagger: .06,
            ease: Power4.easeInOut, // Corrected typo in ease value
            duration: 1.5,
        });
    })


    (function containerCreator() {
        document.querySelectorAll(".element")
        .forEach(function (element){
            let div = document.createElement("div");
            div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
            div.appendChild(element);
            select(".details").appendChild(div);
        })
    })();
        
 
    
   
