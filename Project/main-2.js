var count=0;
var randomNumber;
var score=0;
window.onload= this.randomGenerator();
function randomGenerator(){
    var y=25,x=1;
    randomNumber= Math.floor(Math.random()*((y-x)+1)+ x);
}
console.log(randomNumber);

//display score
function scoredisplay(){
    console.log('score',score);
   document.getElementById('score-display').textContent =score;
}

//add blue score
function addBlue(){
    var y=25,x=1; 
    var randomBlue=Math.floor(Math.random()*((y-x)+1)+ x);
    console.log('item'+randomBlue);
    addRandomBlue='item'+randomBlue;
    randomDiv=document.getElementById(addRandomBlue);
    divBox=document.createElement('div');
    divBox.setAttribute('class','blue');
    randomDiv.appendChild(divBox);
}
//remove Blue 
function removeBlue(ID){
    var removeDiv=document.getElementById(ID).getElementsByClassName('blue')[0];
    console.log("remove it from grid-item div",removeDiv);
    removeDiv.remove();
    addBlue();
}
//remove function
function removeBox(ID){
    var show=document.getElementById(ID).getElementsByClassName('box');
    console.log(show);
    var removeDiv=document.getElementById(ID).getElementsByClassName('box')[0];
    console.log("remove it to move",removeDiv);
    removeDiv.remove();
   
}
//addBOX function
function addBox(ID){
    // var checkdiv=document.getElementById(ID).getElementsByClassName('grid-item');
    // console.log('checkcollection',checkdiv);
    var randomDiv=document.getElementById(ID);
    var Divcheck=document.getElementById(ID).getElementsByTagName('div');
    console.log("html collection to check whether to add div or not===",Divcheck);
    console.log('random div while adding div',randomDiv);
    console.log('check length of HTML collection',Divcheck.length);
    if(Divcheck.length === 1){
        score += 1; console.log('score---------------------------------',score);
        removeBlue(ID);

    }
    scoredisplay();
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
 function eventCapture(e){
     count++;
     console.log(randomNumber);
     var h=e.key;
     document.getElementById("demo").innerHTML = "The pressed key was: " + h;
     
     var idName= 'item'+randomNumber;
    console.log(idName);
    if(count === 1){
        addBox(idName);
        addBlue();
    }

    else{
        checkKey(e,idName);
    }
 }

 function checkKey(eventCapture,ID){
     var ID;
    switch(eventCapture.keyCode){
        case 37:{
            console.log("left arrow==",ID);
            removeBox(ID);
            console.log(randomNumber);
            // ID=ID-1;
            if(randomNumber === 1 || 
                randomNumber === 6 || 
                randomNumber === 11 || 
                randomNumber === 16 || 
                randomNumber === 21 ){
                   
                    randomNumber= randomNumber + 4;
                }
                else{
                    randomNumber=randomNumber - 1;
                }
            
            console.log(randomNumber);
            addBox("item"+randomNumber);
            break;
        }
        case 38:{
            console.log("up arrow",ID);
            removeBox(ID);
            console.log(randomNumber);
            // ID=ID-5;
            if(randomNumber>=1 && randomNumber<=5){
                randomNumber=randomNumber+20;
            }else{
                randomNumber=randomNumber-5;
            }
            console.log(randomNumber);
            addBox("item"+randomNumber);
            break;
        }
        case 39:{
            console.log("right arrow",ID);
            removeBox(ID);
            console.log(randomNumber);
            if(randomNumber === 5 || 
            randomNumber === 10 || 
            randomNumber === 15 || 
            randomNumber === 20 || 
            randomNumber === 25 ){
                randomNumber= randomNumber -4;
            }
            else{
                randomNumber=randomNumber+1;
            }
            console.log(randomNumber);
            addBox("item"+randomNumber);
            break;
        }
        case 40:{
            console.log("down arrow",ID);
            removeBox(ID);
            console.log(randomNumber);
            // ID=ID+5;
            if(randomNumber>=21 && randomNumber<=25){
                randomNumber=randomNumber-20;
            }else{
                randomNumber=randomNumber+5;
            }
            
            console.log(randomNumber);
            addBox("item"+randomNumber);
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