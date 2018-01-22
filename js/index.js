var el = document.querySelectorAll('.maincheck');
for (var i = 0; i < el.length; i++) {
    let curEl = el[i];
    el[i].addEventListener('click', function () {
        hideFunc(curEl);
    })
}



function hideFunc(el) {
    var parentDiv = el.closest(".components");
    var hiddenEl = parentDiv.getElementsByClassName('hide');
    for (var i = 0; i < hiddenEl.length; i++) {
        if (el.checked === true) {
            hiddenEl[i].style.visibility = "";
        } else {
            hiddenEl[i].style.visibility = "hidden";
        }
    }

}


function hideElems(){
  var hiddenElements = document.querySelectorAll('.hide').forEach(function (el){
      el.style.visibility = "hidden";
  });
  
}






















// function func(){
//   var elem = document.getElementById('firstname');
//   elem.type= 'radio';

// }
// func();
// for (var i = 0; i < document.body.firstChild.length; i++) {
//     var inptSecondcheck = document.getElementById('secondcheck')
//     var inputs = inptSecondcheck.getElementsByTagName('input');
//     for(var i = 0; i< inputs.length; i++){
//         var inpt = inputs[i];
//         console.log(inpt.value)
//     }
//   console.log(inptSecondcheck)