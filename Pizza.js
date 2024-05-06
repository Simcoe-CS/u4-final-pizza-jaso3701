
function calc() {
    let option = document.getElementsByName("op");
    let size = document.getElementsByName("size");
    let Picture = document.getElementsByName("Pic");


    let total = 0;
    let sizeprice =0

if (size[0].checked) {
    sizeprice = 8.00;
}
if (size[1].checked) {
    sizeprice = 10.00;
}
if (size[2].checked) {
    sizeprice = 12.00;
}


    if (option[0].checked) {
        total = total + Number(option[0].value);
        Picture[0].style.opacity=1
    }
    if (option[1].checked) {
        total = total + Number(option[1].value);
        Picture[1].style.opacity=1
    }
    if (option[2].checked) {
        total = total + Number(option[2].value);
        Picture[2].style.opacity=1
    }
    if (option[3].checked) {
        total = total + Number(option[3].value);
        Picture[3].style.opacity=1
    }
    if (option[4].checked) {
        total = total + Number(option[4].value);
        Picture[4].style.opacity=1
    }
    let newtotal= (total+sizeprice)
    let tot= newtotal * 1.13
   out1.innerHTML = ("Your total is $") + (total + sizeprice);
   out2.innerHTML = ("Your total with tax is: $") + (tot).toFixed(2)


}



function calcule(){
    let t = document.getElementsByName("toppings");
    let s = document.getElementsByName("size");


    if (t[0].checked && s[0].checked) { 
        out1.innerHTML = "$1.00";
    }
    else if (t[0].checked && s[0].checked) { 
        out1.innerHTML = "$1.50 ";
    }
    else if (t[1].checked && s[0].checked) { 
        out1.innerHTML = "$1.50 ";
    }
    else if (t[1].checked && s[0].checked) { 
        out1.innerHTML = "$1.50 ";
    }
    else if (t[1].checked && s[0].checked) {
        out1.innerHTML = "$1.50 ";
    }
    else if (t[1].checked && s[0].checked) { 
        out1.innerHTML = "$1.50 ";
    }
    else { 
        out1.innerHTML = "$2.00 ";
    }
}