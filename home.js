function boldText() {
    //function to make the text bold
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring+selectedText.bold()+lastSubString;
}
  
function italicText() {
    //function to make the text italic
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring+selectedText.italics()+lastSubString;
}
  
function changeFontStyle(size){
	//function to make the change text size
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring+selectedText.fontsize(size.value)+lastSubString;
}

function cutText() {
    //function to make the text capitalize
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	cutPaste = selectedText;
    document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring+lastSubString;
}

function copyText(){
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
	let selectedText = window.getSelection().toString();
	copyPaste = selectedText;
}

function pasteText(){
	if(cutPaste != undefined && cutPaste != null && cutPaste != ""){
		let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
		let cursorPosition = document.getSelection().baseOffset;
		let firstText = fullText.substring(0,cursorPosition);
		let lastText =  fullText.substring(cursorPosition);
		document.getElementsByClassName("textarea-replace")[0].innerHTML = firstText + cutPaste + lastText;
		cutPaste = "";
	}
	else if(copyPaste != undefined && copyPaste != null && copyPaste != ""){
		let fullText = document.getElementsByClassName("textarea-replace")[0].innerText;
		let cursorPosition = document.getSelection().baseOffset;
		let firstText = fullText.substring(0,cursorPosition);
		let lastText =  fullText.substring(cursorPosition);
		document.getElementsByClassName("textarea-replace")[0].innerText = firstText + copyPaste + lastText;
	}
}
  
function underlineText(){
		let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring + "<u>"+selectedText + "</u>" + lastSubString;
}

function changeColorStyle(color){
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring+selectedText.fontcolor(color.value)+lastSubString;
}

function leftAlignText() {
    //function to make the text alignment left
    document.getElementsByClassName("textarea-replace")[0].style.textAlign = "left";
}
  
function centerAlignText() {
    //function to make the text alignment center
    document.getElementsByClassName("textarea-replace")[0].style.textAlign = "center";
}
  
function rightAlignText() {
    //function to make the text alignment right
    document.getElementsByClassName("textarea-replace")[0].style.textAlign = "right";
}
  
function textIndent(){
	document.getElementsByClassName("textarea-replace")[0].style.textAlign = "20px";
}

function h1(){
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring+"<h1>"+selectedText+"</h1>"+lastSubString;
}
function h2(){
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring+"<h2>"+selectedText+"</h2>"+lastSubString;
}
function h3(){
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring+"<h3>"+selectedText+"</h3>"+lastSubString;
}
function h4(){
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring+"<h4>"+selectedText+"</h4>"+lastSubString;
}
function h5(){
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring+"<h5>"+selectedText+"</h5>"+lastSubString;
}
function h6(){
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerHTML;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring+"<h6>"+selectedText+"</h6>"+lastSubString;
}

function orderList(){
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerText;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	let selectedTextArray = selectedText.split(/\n/);
	var st = "";
	for(let i = 0; i < selectedTextArray.length;i++){
	  st = st + "<li>"+selectedTextArray[i]+"</li>";
	}
	document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring+"<ol>"+st+"</ol>"+lastSubString;
}

function unOrderList(){
	let fullText = document.getElementsByClassName("textarea-replace")[0].innerText;
	let selectedText = window.getSelection().toString();
	let firstVal = fullText.search(selectedText);
	let firstSubstring = fullText.substring(0, firstVal);
	let secondSubStringStart =  firstVal + selectedText.length;
	let lastSubString = fullText.substring(secondSubStringStart);
	let selectedTextArray = selectedText.split(/\n/);
	var st = "";
	for(let i = 0; i < selectedTextArray.length;i++){
	  st = st + "<div>"+selectedTextArray[i]+"</div>";
	}
	document.getElementsByClassName("textarea-replace")[0].innerHTML = firstSubstring+st+lastSubString;
}

$(document).ready(function() {
    var t = $(".textarea-replace"), // register placeholder
        p = t.attr("placeholder"); // get placeholder value
    
    /* when focus is set to the element - placeholder disappears */
    t.on("focus", function() {
        $(this).attr("placeholder", "")
    }),
    /* when element loses focus if there is no text - set placeholder again */
    t.on("focusout", function() {
        $(this).text().trim().length || $(this).attr("placeholder", p)
    })
});

var cutPaste;
var copyPaste;
