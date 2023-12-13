// let turn= 1; //starts with player 1
// let running= true; //whether game is runing or not

// //add click event listener to exit button
// document.getElementById("btnExit").addEventListener("click",function(){
//     running= false; //game stops
// });


// //rest parameter> function to accepts arguments as an array
// //function takes behaviour() as arguments> pass any number into array h&&lers> sets click h&&lers to the buttons (dynamic)
// function setClickHandlers(...myColorArray){ //array dynamically created
//    myColorArray.forEach((behaviour, i)=>{  //forEach loops over each behaviour() in the array
        
//         //adds event list to btn (used a template string) > gets button ids based on index 
//         document.getElementById(`S${i +1}`).addEventListener("click", function(){ //template literal btn id starts at 1 so +=1 e.g S0 becomes S1>S2

//             if (turn ==1){ //player 1 condition
//                 behaviour("red"); //calls function (xdivs) with red
//                 alert("player1");
//                 turn =2;  //sets for player 2s turn   
//                 forEach(behaviour, i => {alert(behaviour)})
//             }
//             else { //player 2 condition
//                 alert("player2"); //debugging
//                 behaviour("blue");
//                 turn =1; //sets turn for player one again
//                 forEach(behaviour, i => {alert(behaviour)})
//             }
//         });
//     });
// }


// //function that changes the background colour of the buttons
// function handleColor(id, color){
//     document.getElementById(id).style.backgroundColor= color;
// }

// var div1= null;
// //call h&&leColor with the parameters> behaviour(gives color)
// // const div2=(color)=>{h&&leColor("S2", color);} //traditional way to write functions
// // const div3 = (color)=>{h&&leColor("S3", color);}
// // const div4 = (color)=>{h&&leColor("S4", color);}
// // const div5 = (color)=>{h&&leColor("S5", color);}
// // const div6 = (color)=>{h&&leColor("S6", color);}
// // const div7 = (color)=>{h&&leColor("S7", color);}
// // const div8 = (color)=>{h&&leColor("S8", color);}
// // const div9 = (color)=>{h&&leColor("S9", color);}

// //calls>passes>click h&&lers for buttons
// setClickHandlers(div1, div2, div3, div4, div5, div6, div7, div8, div9);


//if div 1 div2 div3 behaviour = blue...> let score p2 ++;

// document.getElementById("S1").addEventListener("click", function() {

var row_1 = ["", "", ""];
var row_2 = ["", "", ""];
var row_3 = ["", "", ""];

var player = 1;
var [div1, div2, div3, div4, div5, div6, div7, div8, div9] = [false, false, false, false, false, false, false, false, false];

function B1() {
    if (div1 == false) {
        if (player == 1) {
            row_1[0] = 'x';
            document.getElementById("S1").style.backgroundColor = "blue";
        }
        if (player == 2) {
            row_1[0] = 'o';
            document.getElementById("S1").style.backgroundColor = "red";
        }
        checking()
    }
    else {
        alert('Square already been picked.')
    } 
    // alert(div1)
    div1 = true;
}

function B2() {
    if (div2 == false) {
        if (player == 1) {
            row_1[1] = 'x';
            document.getElementById("S2").style.backgroundColor = "blue";
        }
        if (player == 2) {
            row_1[1] = 'o';
            document.getElementById("S2").style.backgroundColor = "red";
        }
        checking()
    }
    else {
        alert('Square already been picked.')
    } 
    // alert(div2)
    div2 = true;
}

function B3() {
    if (div3 == false) {
        if (player == 1) {
            row_1[2] = 'x';
            document.getElementById("S3").style.backgroundColor = "blue";
        }
        if (player == 2) {
            row_1[2] = 'o';
            document.getElementById("S3").style.backgroundColor = "red";
        }
        checking()
    }
    else {
        alert('Square already been picked.')
    } 
    // alert(div3)
    div3 = true;
}

function B4() {
    if (div4 == false) {
        if (player == 1) {
            row_2[0] = 'x';
            document.getElementById("S4").style.backgroundColor = "blue";
        }
        if (player == 2) {
            row_2[0] = 'o';
            document.getElementById("S4").style.backgroundColor = "red";
        }
        checking()
    }
    else {
        alert('Square already been picked.')
    } 
    // alert(div4)
    div4 = true;
}

function B5() {
    if (div5 == false) {
        if (player == 1) {
            row_2[1] = 'x';
            document.getElementById("S5").style.backgroundColor = "blue";
        }
        if (player == 2) {
            row_2[1] = 'o';
            document.getElementById("S5").style.backgroundColor = "red";
        }
        checking()
    }
    else {
        alert('Square already been picked.')
    } 
    // alert(div5)
    div5 = true;
}

function B6() {
    if (div6 == false) {
        if (player == 1) {
            row_2[2] = 'x';
            document.getElementById("S6").style.backgroundColor = x;
        }
        if (player == 2) {
            row_2[2] = 'o';
            document.getElementById("S6").style.backgroundColor = o;
        }
        checking()
    }
    else {
        alert('Square already been picked.')
    } 
    // alert(div6)
    div6 = true;
}

function B7() {
    if (div7 == false) {
        if (player == 1) {
            row_3[0] = 'x';
            document.getElementById("S7").style.backgroundColor = "blue";
        }
        if (player == 2) {
            row_3[0] = 'o';
            document.getElementById("S7").style.backgroundColor = "red";
        }
        checking()
    }
    else {
        alert('Square already been picked.')
    } 
    // alert(div7)
    div7 = true;
}

function B8() {
    if (div8 == false) {
        if (player == 1) {
            row_3[1] = 'x';
            document.getElementById("S8").style.backgroundColor = "blue";
        }
        if (player == 2) {
            row_3[1] = 'o';
            document.getElementById("S8").style.backgroundColor = "red";
        }
    }
    else {
        alert('Square already been picked.')
    } 
    // alert(div8)
    div8 = true;
    checking()
}

function B9() {
    if (div9 == false) {
        if (player == 1) {
            row_3[2] = 'x';
            document.getElementById("S9").style.backgroundColor = "blue";
        }
        if (player == 2) {
            row_3[2] = 'o';
            document.getElementById("S9").style.backgroundColor = "red";
        }
    }
    else {
        alert('Square already been picked.')
    } 
    // alert(div9)
    div9 = true;
    checking()
}

function checking() {
    while (true) {
        // alert(player)
        if (player == 1) {
            player = 2
        }
        else {
            player = 1
        }
        // alert(row_1)
        // alert(row_2)
        // alert(row_3)

        if ((row_1[0]=='x' && row_1[1]=='x' && row_1[2]=='x') || (row_2[0]=='x' && row_2[1]=='x' && row_2[2]=='x') 
        || (row_3[0]=='x' && row_3[1]=='x' && row_3[2]=='x') || (row_1[0]=='x' && row_2[0]=='x' && row_3[0]=='x') || 
        (row_1[1]=='x' && row_2[1]=='x' && row_3[1]=='x') || (row_1[2]=='x' && row_2[2]=='x' && row_3[2]=='x') || 
        (row_1[0]=='x' && row_2[1]=='x' && row_3[2]=='x') || (row_1[2]=='x' && row_2[1]=='x' && row_3[0]=='x')) {
            alert("Blue Won!");
            break;
        }
        if ((row_1[0]=='o' && row_1[1]=='o' && row_1[2]=='o') || (row_2[0]=='o' && row_2[1]=='o' && row_2[2]=='o') 
        || (row_3[0]=='o' && row_3[1] && row_3[2] == 'o') || (row_1[0]=='o' && row_2[0]=='o' && row_3[0]=='o') || 
        (row_1[1]=='o' && row_2[1]=='o' && row_3[1]=='o') || (row_1[2]=='o' && row_2[2]=='o' && row_3[2]=='o') || 
        (row_1[0]=='o' && row_2[1]=='o' && row_3[2]=='o') || (row_1[2]=='o' && row_2[1]=='o' && row_3[0]=='o')) {
            alert("Red Won!");
            break;
        }
        if (div1 == true && div2 == true && div3 == true && div4 == true && div5 == true 
        && div6 == true && div7 == true && div8 == true && div9 == true) {
            alert("Its a Tie!");
            break
        }
        else {
            break
        }
    }
}





    // let s2 = document.getElementById("S2").addEventListener("click", function(){
    //     if (div1 == false) {
    //         if (player == 1) {
    //             row_1[1] = 'x';
    //             player += 1;
    //         }
    //         if (player == 2) {
    //             row_1[1] = 'o';
    //             player -= 1;
    //         }
    //     }
    //     else {
    //         alert('Square already been picked.')
    //     }
    //     div2 = true;
    // })
    // let s3 = document.getElementById("S3").addEventListener("click", function(){
    //     if (div1 == false) {
    //         if (player == 1) {
    //             row_1[2] = 'x';
    //             player += 1;
    //         }
    //         if (player == 2) {
    //             row_1[2] = 'o';
    //             player -= 1;
    //         }
    //     }
    //     else {
    //         alert('Square already been picked.')
    //     }
    //     div3 = true;
    // })
    // let s4 = document.getElementById("S4").addEventListener("click", function(){
    //     if (div1 == false) {
    //         if (player == 1) {
    //             row_2[0] = 'x';
    //             player += 1;
    //         }
    //         if (player == 2) {
    //             row_2[0] = 'o';
    //             player -= 1;
    //         }
    //     }
    //     else {
    //         alert('Square already been picked.')
    //     }
    //     div4 = true;
    // })
    // let s5 = document.getElementById("S5").addEventListener("click", function(){
    //     if (div1 == false) {
    //         if (player == 1) {
    //             row_2[1] = 'x';
    //             player += 1;
    //         }
    //         if (player == 2) {
    //             row_2[1] = 'o';
    //             player -= 1;
    //         }
    //     }
    //     else {
    //         alert('Square already been picked.')
    //     }
    //     div5 = true;
    // })
    // let s6 = document.getElementById("S6").addEventListener("click", function(){
    //     if (div1 == false) {
    //         if (player == 1) {
    //             row_2[2] = 'x';
    //             player += 1;
    //         }
    //         if (player == 2) {
    //             row_2[2] = 'o';
    //             player -= 1;
    //         }
    //     }
    //     else {
    //         alert('Square already been picked.')
    //     }
    //     div6 = true;
    // })
    // let s7 = document.getElementById("S7").addEventListener("click", function(){
    //     if (div1 == false) {
    //         if (player == 1) {
    //             row_3[0] = 'x';
    //             player += 1;
    //         }
    //         if (player == 2) {
    //             row_3[0] = 'o';
    //             player -= 1;
    //         }
    //     }
    //     else {
    //         alert('Square already been picked.')
    //     }
    //     div7 = true;
    // })
    // let s8 = document.getElementById("S8").addEventListener("click", function(){
    //     if (div1 == false) {
    //         if (player == 1) {
    //             row_3[1] = 'x';
    //             player += 1;
    //         }
    //         if (player == 2) {
    //             row_3[1] = 'o';
    //             player -= 1;
    //         }
    //     }
    //     else {
    //         alert('Square already been picked.')
    //     }
    //     div8 = true;
    // })
    // let s9 = document.getElementById("S9").addEventListener("click", function(){
    //     if (div1 == false) {
    //         if (player == 1) {
    //             row_3[2] = 'x';
    //             player += 1;
    //         }
    //         if (player == 2) {
    //             row_3[2] = 'o';
    //             player -= 1;
    //         }
    //     }
    //     else {
    //         alert('Square already been picked.')
    //     }
    //     div9 = true;
    // })


//     while (player = 1) {
//         if (div1 == 'true') {
//             if (player = 1) {
//                 row_1[0] = 'x';
//             }
//         if (div2 == 'true') {
//             if (player = 1) {
//                 row_1[1] = 'x';
//             }
//         }
//         if (div3 == 'true') {
//             if (player = 1) {
//                 row_1[2] = 'x';
//             }
//         }
//         if (div4 == 'true') {
//             if (player = 1) {
//                 row_2[0] = 'x';
//             }
//         }
//         if (div5 == 'true') {
//             if (player = 1) {
//                 row_2[1] = 'x';
//             }
//         }
//         if (div6 == 'true') {
//             if (player = 1) {
//                 row_2[2] = 'x';
//             }
//         }
//         if (div7 == 'true') {
//             if (player = 1) {
//                 row_3[0] = 'x';
//             }
//         }
//         if (div8 == 'true') {
//             if (player = 1) {
//                 row_3[1] = 'x';
//             }
//         }
//         if (div9 == 'true') {
//             if (player = 1) {
//                 row_3[2] = 'x';
//             }
//         }
//     }
// }
