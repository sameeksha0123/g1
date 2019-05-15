
// function capturingEvent(e){
//     var x=e.key;
//     document.getElementById('key-display').innerHTML="KEY PRESSED" + x;
// }


//removing box 
function remove(ID){

}
//adding box on keypress
function addBox(ID){
    var randomDiv=document.getElementById(ID);
    console.log(randomDiv);
    //append class to created element
    var divBox=document.createElement('div');
    // 1.by adding classList.add() method
    //divBox.classList.add("box");
    //2.by setAttribute method attribute n property in key:value pair
    divBox.setAttribute("class","box");
    console.log(divBox);
    //****************** to get html line in js prefer id
    // console.log(document.body)
    //at time of appending the child + className of new Appended element
    // randomDiv.appendChild(divBox).className="box";
    randomDiv.appendChild(divBox).innerHTML=`
                                                <p style='text-align:right;margin:0;'>o</p>
                                                <p style='text-align:right;margin:0;'>o</p>
                                                `;
}
// var myFunction=function (e) {
    function myFunction(e){
    console.log(e);console.log(document.getElementById('demo'))
  var x = e.key;
  document.getElementById("demo").innerHTML = "The pressed key was: " + x;
  //check which key is pressed
//   checkKey(e);
  //onSTART  press any key to get started with
console.log(window.load);
    //   range of div 1-25
    y=25;
    x=1;
    //   console.log(Math.floor(Math.random()*((y-x)+1)+ x))
    
    var randomStartCount=Math.floor(Math.random()*((y-x)+1)+ x);
    console.log(randomStartCount);
    var idName= 'item'+randomStartCount;
    addBox(idName);

}
function checkKey(eventCapture){
switch(eventCapture.keyCode){
    case 37:{
        console.log("left arrow");

        break;
    }
    case 38:{
        console.log("up arrow");
        break;
    }
    case 39:{
        console.log("right arrow");
        break;
    }
    case 40:{
        console.log("down arrow");
        break;
    }
    default:{
        alert("use only arrow keys")
    }
}
}
const keyCodes = {
    37: 'left arrow',
    38: 'up arrow',
    39: 'right arrow',
    40: 'down arrow',
}

// var playground=document.getElementById('')