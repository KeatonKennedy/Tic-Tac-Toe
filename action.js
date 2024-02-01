var row_1 = ["", "", ""];
var row_2 = ["", "", ""];
var row_3 = ["", "", ""];

x = "lightblue"
o = "#ED2939"
var player = 1;
var [div1, div2, div3, div4, div5, div6, div7, div8, div9] = [false, false, false, false, false, false, false, false, false];

function B1() {
    if (div1 == false) {
        if (player == 1) {
            row_1[0] = 'x';
            document.getElementById("S1").style.backgroundColor = x;
        }
        if (player == 2) {
            row_1[0] = 'o';
            document.getElementById("S1").style.backgroundColor = o;
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
            document.getElementById("S2").style.backgroundColor = x;
        }
        if (player == 2) {
            row_1[1] = 'o';
            document.getElementById("S2").style.backgroundColor = o;
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
            document.getElementById("S3").style.backgroundColor = x;
        }
        if (player == 2) {
            row_1[2] = 'o';
            document.getElementById("S3").style.backgroundColor = o;
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
            document.getElementById("S4").style.backgroundColor = x;
        }
        if (player == 2) {
            row_2[0] = 'o';
            document.getElementById("S4").style.backgroundColor = o;
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
            document.getElementById("S5").style.backgroundColor = x;
        }
        if (player == 2) {
            row_2[1] = 'o';
            document.getElementById("S5").style.backgroundColor = o;
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
            document.getElementById("S7").style.backgroundColor = x;
        }
        if (player == 2) {
            row_3[0] = 'o';
            document.getElementById("S7").style.backgroundColor = o;
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
            document.getElementById("S8").style.backgroundColor = x;
        }
        if (player == 2) {
            row_3[1] = 'o';
            document.getElementById("S8").style.backgroundColor = o;
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
            document.getElementById("S9").style.backgroundColor = x;
        }
        if (player == 2) {
            row_3[2] = 'o';
            document.getElementById("S9").style.backgroundColor = o;
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
        || (row_3[0]=='o' && row_3[1]== 'o' && row_3[2] == 'o') || (row_1[0]=='o' && row_2[0]=='o' && row_3[0]=='o') || 
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
