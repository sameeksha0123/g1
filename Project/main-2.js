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
    divBox.setAttribute('id','blueBall')
    randomDiv.appendChild(divBox);
}
//remove Blue 
function removeBlue(ID){
    var removeDiv=document.getElementById(ID).getElementsByClassName('blue')[0];
    console.log("remove it from grid-item div",removeDiv);
    removeDiv.remove();
    addBlue();
}

//remove red
function removeRed(ID){
    var removeDiv=document.getElementById(ID).getElementsByClassName('red')[0];
    console.log("remove it from grid-item div",removeDiv);
    removeDiv.remove();
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
//redScorer timer bar
function progressBar(){
    divProgress=document.getElementById('Progress_Status');
    divBoxProgress=document.createElement('div');
    divBoxProgress.setAttribute('id','myprogressBar');
    // divBox.setAttribute('class','timer')
    divProgress.appendChild(divBoxProgress);
    console.log('////////////////////////////////////',divProgress)
}
//randomRed scorer
function redScore(){
    
    var checkdiv=document.getElementById('timer');

var checkExistance=document.body.contains(checkdiv)
   
    console.log('checkdiv------------------------------------------------->',checkExistance)
    //check if red score is present or not
    if(!checkExistance){
    y=25,x=1;
    var width=100;
    var randomRedID="item"+(Math.floor(Math.random()*((y-x)+1)+ x));
    console.log('value of random generator ==========================))))))))))))) ',(randomRedID));
    //check for other divs if present
    //
    var blue=document.getElementById('blueBall');
        var check=document.getElementById(randomRedID).contains(blue);
        //check if div have blue already or not
        if(!check){
    // var check=document.getElementById(randomRedID).getElementsByTagName('div').length;
    // console.log('11111111111111111111111111111111111111111111111',check);
    randomDiv=document.getElementById(randomRedID);
    divBox=document.createElement('div');
    divBox.setAttribute('class','redBall');
    divBox.setAttribute('id','timer')
    randomDiv.appendChild(divBox);
    console.log("PROGRESS TIMER=============",randomDiv);
    progressBar();
    var setTimer= setInterval(timer,100);
    

    //remove redScorer timer and redScore
    function timer(){
       
        var blue=document.getElementById('blueBall');
        var check=document.getElementById(randomRedID).contains(blue);
        // console.log()
        // if(check){clearInterval(setTimer)}
        // else{
            
        // }
        if(width<=0){
            clearInterval(setTimer);
            //remove progressbar and redScorer
            var removeTimer= document.getElementById('myprogressBar');
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa',removeTimer);
            var redBall=document.getElementById('timer');
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa',redBall);
            console.log('removeTimererere......................................',removeTimer);
            removeTimer.remove();
            redBall.remove();
        }
        else{
            width= width -1;
             var bar=document.getElementById('myprogressBar');
            if(width<30){
                bar.classList.add('red');
            }
            bar.style.width= width +'%';
        }
    }
   }
   else{
       clearInterval(redScorer);
   }
}//end for red existance
}

//capture event 
 function eventCapture(e){
     count++;
     console.log(randomNumber);
     var h=e.key;
     document.getElementById("demo").innerHTML = "The pressed key was: " + h;
     
     var idName= 'item'+randomNumber;
     var randomRedTime=Math.floor(Math.random()*((5-1)+1)+ 1);
     console.log("random time----------------------------------------------",randomRedTime)
    console.log(idName);
    if(count === 1){
        addBox(idName);
        
        var RedScorer=setInterval(redScore,5000);
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