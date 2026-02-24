function () {
  const newButton = document.createElement("button");


  newButton.textContent = "Dynamically Created Button";


  newButton.addEventListener("click", function() {
    console.log("Dynamically created button clicked!");
  });

  document.body.appendChild(newButton);

};

function setPosition(x_pos, y_pos) {
  var element = document.getElementById("button");

  // 2. Ensure the position property is set to absolute (or another non-static value)
  element.style.position = "absolute";

  // 3. Set the top and left properties with units (e.g., "px")
  element.style.left = x_pos + "px";
  element.style.top = y_pos + "px";
};
