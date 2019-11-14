  // menu
  function myFunction(x) {
    x.classList.toggle("change");
    showMenu()
  }
  
  function showMenu() {
    var doc = document;
    doc.querySelector('.header-container__menu').classList.toggle('active-menu')
  }
 