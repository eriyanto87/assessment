  //declare variables
  let desktopMenuContent = document.getElementById('desktop-menu');
  let solutions = document.getElementById('solutions');
  let contentTwo = document.getElementById('content-2');
  let solutionsMenu = document.getElementById('hidden');
  let a = document.getElementById('red');

//menu pop up
function desktopMenuPopUp() {
    desktopMenuContent.classList.toggle('active');
    contentTwo.classList.toggle('content-two-active');
    solutions.classList.toggle('solutions-active');
    solutionsMenu.classList.toggle('hidden');
    solutions.classList.toggle('red');
}   


