document.addEventListener("DOMContentLoaded", function() {

  var calculatorEl = document.querySelectorAll("[data-js='calculatorButton']");
  var resultEl = document.querySelector("[data-js='result']");

  calculatorEl.forEach(function(button){
    button.addEventListener("click", function(e){
      var targetClicked = e.target.textContent
      if(targetClicked === "C"){
        resultEl.innerHTML = "";
      } else if(targetClicked === "=") {
        resultEl.innerHTML = eval(resultEl.textContent)
      } else {
        resultEl.innerHTML += targetClicked;
      }
    });
  })
});
