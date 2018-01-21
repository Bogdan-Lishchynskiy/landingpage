var el = document.querySelectorAll('.maincheck');

// console.log(el);
for (var i = 0; i < el.length; i++) {
    let curEl = el[i];
    el[i].addEventListener('click', function () {
        hideFunc(curEl);
    })
}



function hideFunc(el) {
    var parentDiv = el.closest(".components");
    //console.log(parentDiv);

    var hiddenEl = parentDiv.getElementsByClassName('hide');
    // console.log(hiddenEl);
    // var attributeStage = el.hasAttribute("checked");
    // console.log(attributeStage);
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




// if (el.checked === true ) {
//     hiddenEl.visibility = "hidden";
//  }
// else {
//     hiddenEl.style.visibility = "";    }



















// console.log(hiddenEl);

// for (var i = 0; i < hiddenEl.length; i++) {

// console.log(hiddenEl[i]);
// // }

// // else  {
// //     console.log('rd');
// // }


//  function hideFunc() {
//     console.log(gg);
//  }

// var getClosest = function () {
//     for ( ; el && el !== document; el = el.parentNode ) {
//         if ( el.matches( '.components' ) ) return el;
//         console.log(el);
//     }
//     return null;
// };







// if (event.target.checked === true) {
//     var inpt = document.getElementById('hid').hidden = true;
//   } else  {
//     inpt = document.getElementById('hid').hidden = false;
//   }



















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