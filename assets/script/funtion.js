
$('#btn0').on('click', () => {
    let currentTxt = $('#text').text();
    $('#text').text(currentTxt+'0');
});


$('#tzero').on('click', () => {
    let currentTxt = $('#text').text();
    $('#text').text(currentTxt+'00');
});


$('#btn1').on('click', () => {
    let currentTxt = $('#text').text();
    $('#text').text(currentTxt+'1');
});


$('#btn2').on('click', () => {
    let currentTxt = $('#text').text();
    $('#text').text(currentTxt+'2');
});


$('#btn3').on('click', () => {
    let currentTxt = $('#text').text();
    $('#text').text(currentTxt+'3');
});


$('#btn4').on('click', () => {
    let currentTxt = $('#text').text();
    $('#text').text(currentTxt+'4');
});


$('#btn5').on('click', () => {
    let currentTxt = $('#text').text();
    $('#text').text(currentTxt+'5');
});


$('#btn6').on('click', () => {
    let currentTxt = $('#text').text();
    $('#text').text(currentTxt+'6');
});

$('#btnDot').on('click', () => {
    let currentTxt = $('#text').text();
    $('#text').text(currentTxt+'.');
});


$('#btn7').on('click', () => {
    let currentTxt = $('#text').text();
    $('#text').text(currentTxt+'7');
});


$('#btn8').on('click', () => {
    let currentTxt = $('#text').text();
    $('#text').text(currentTxt+'8');
});


$('#btn9').on('click', () => {
    let currentTxt = $('#text').text();
    $('#text').text(currentTxt+'9');

});

/* for erase*/
/*
$('#btnClear').on('click',()=>{
    let currentTxt = $('#text').text();
    let eraser = currentTxt.slice(currentTxt,-1);
     $('#text').html(eraser);
})
*/

let currentTxt = [];
$("#btnClear").on({
    click: function () {
        let currentText = $('#text').text();

        if (currentText.length > 0) {
            currentText = currentText.slice(0, -1);
            $('#text').text(currentText);
        }
    },
    dblclick: function () {
        $('#text').text('');
    }
});


/*operations*/
let numArray = [];

$('#btnPlus').on('click', () => {
    let num = $('#text').text();
    numArray.push(num);
    numArray.push('+');
    $('#text').text('');
});


$('#btnMin').on('click', () => {
    let num = $('#text').text();
    numArray.push(num);
    numArray.push('-');
    $('#text').text('');
});


$('#btnDiv').on('click', () => {
    let num = $('#text').text();
    numArray.push(num);
    numArray.push('/');
    $('#text').text('');
});

$('#btnMulti').on('click', () => {
    let num = $('#text').text();
    numArray.push(num);
    numArray.push('*');
    $('#text').text('');
});



$('#btnEquel').on('click', () => {
    let secondNum = $('#text').text();
    numArray.push(secondNum);


    let result = parseFloat(numArray[0]);

    for (let i = 1; i < numArray.length; i++) {
        let operator = numArray[i];

        let nextNum = parseFloat(numArray[i+1]);
        console.log("nxt"+""+nextNum)

        if (operator === '+') {
            result += nextNum;
            console.log("r"+result)
        }

         else if (operator === '-'){
            result -= nextNum;
            console.log("r"+result)
        }

        else if (operator === '/'){
            result /= nextNum;
            console.log("r"+result)
        }
        else if (operator === '*'){
            result *= nextNum;
            console.log("r"+result)
        }

    }

    $('#text').text(result);
    numArray = [];
});