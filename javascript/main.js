document.addEventListener("DOMContentLoaded", function() {

  var calculatorEl = document.querySelector("[data-js='calculator']");
  var resultEl = document.querySelector("[data-js='result']");


  calculatorEl.addEventListener("click", function(e){
    var targetClicked = e.target.textContent
    if(targetClicked === "C"){
      resultEl.innerHTML = "";
    } else if(targetClicked === "=") {
      resultEl.innerHTML = eval(resultEl.textContent)
    } else {
      resultEl.innerHTML += targetClicked;
    }
  });
});
