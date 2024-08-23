let boxes=document.querySelectorAll(".btn");
let reset=document.querySelector("#reset");   
let result=document.querySelector('.result');

let true0 = true;

const Winnerpatt =
[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(true0)
        {
            box.innerText="X";
            true0=false;
        }
        else{
            box.innerText="O";
            true0=true;
        }

        box.disabled=true;
        checkwinner();
    })
});

 const checkwinner=()=>{
    for(let pattern of Winnerpatt)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                 result.innerText=`Congratualtions Player ${pos1} has Won the game `
            }
        }
    }
}

reset.addEventListener('click',()=>{
    boxes.forEach((box)=>{
       box.innerText="";
       box.disabled=false;
       result.innerText="";
       true0=true;
    })
})