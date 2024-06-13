let boxes = document.querySelectorAll(".box");
let butn = document.querySelector("#restart");
let msg = document.querySelector(".msg");
let turnO = true;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => 
{ 
    box.addEventListener("click", () => 
    {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });  
});

const disabledboxes = () =>
    {
        for(let box of boxes){
            box.disabled = true;
        }
    };
const enableboxes = () =>
    {
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
    };
const restart = () => {
    turnO = true;
    enableboxes();
    msg.innerText = "winner";
};

const showwiner = (winner) => {
    msg.innerText = `Congratulation ${winner} Is Winner`;
    disabledboxes();
};

const checkwinner = () => {
    for(let patterns of winpattern){
        let posval1 = boxes[patterns[0]].innerText;
        let posval2 = boxes[patterns[1]].innerText;
        let posval3 = boxes[patterns[2]].innerText;
    
        if (posval1 != "" && posval2 != "" && posval3){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("winner", posval1);
                showwiner(posval1);
            }
            else if(posval1 !== posval2 && posval2 !== posval3){
                msg.innerText = "game is Dreaw";
            }
        }
    }

};
butn.addEventListener("click", restart);