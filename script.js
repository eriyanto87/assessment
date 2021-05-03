  //declare variables
  let desktopMenuContent = document.getElementById('desktop-menu');
  let solutions = document.getElementById('solutions');
  let contentTwo = document.getElementById('content-2');
  let solutionsMenu = document.getElementById('hidden');
  let header = document.getElementById('header');
  let content = document.getElementsById('content');

//menu pop up for desktop view
function desktopMenuPopUp() {
    desktopMenuContent.classList.toggle('active');
    desktopMenuContent.classList.toggle('content');
    contentTwo.classList.toggle('content-two-active');
    solutions.classList.toggle('red');
    solutions.classList.toggle('solutions-active');
    solutionsMenu.classList.toggle('hidden');
    header.classList.toggle('header');
}   


