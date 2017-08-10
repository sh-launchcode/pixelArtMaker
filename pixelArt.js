let box = document.createElement("div");
box.setAttribute("style", "border:3px solid #000000; width:448px; height:455px;");
document.body.appendChild(box);
let divs = document.createElement("div");
divs.setAttribute("style", "margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px; display:inline-block; border:2px solid #000000;position:relative; width:10px; height:10px;");
let amtPixels = 800;
let currentColor = "white";
let colorList = ["white","blue","red","yellow","green","purple","pink","orange","brown","gray","black"]


for(let counter = 0; counter < amtPixels; counter +=1){
    let newDiv = divs.cloneNode();
    newDiv.id = counter;
    newDiv.setAttribute("onclick", "turnColor(this.id), getColor()");
    box.appendChild(newDiv);
}
document.write("<br>");
let colors = document.createElement("div");

for(let counter = 0; counter < colorList.length; counter +=1){
    let color = colors.cloneNode();
    color.id = colorList[counter]
    color.setAttribute("style", "background-color:"+ color.id +"; display:inline-block; border:2px solid #000000; width:30px; height:30px;");
    color.setAttribute("onclick", "setColor(this.id)");
    document.body.appendChild(color);
}
document.write("<br>Current Color ->  ");
let CC = colors.cloneNode();
CC.setAttribute("style", "background-color:" + currentColor + "; display:inline-block; border:2px solid #000000; width:16px; height:16px;");
document.body.appendChild(CC);


function turnColor(id){
    let xd = document.getElementById(id);
    xd.setAttribute("style", "background-color:" + currentColor + "; display:inline-block; border:2px solid #000000; width:10px; height:10px;");
}

function setColor(id = "white"){
    currentColor = id;
    CC.setAttribute("style", "background-color:" + currentColor + "; display:inline-block; border:2px solid #000000; width:16px; height:16px;");
}
function getColor(){
    return currentColor;
}
