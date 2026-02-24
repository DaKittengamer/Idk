(function () {
  const newButton = document.createElement("button");


  newButton.textContent = "Dynamically Created Button";


  newButton.addEventListener("click", function() {
    console.log("Dynamically created button clicked!");
  });

  document.body.appendChild(newButton);

})();
