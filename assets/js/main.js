function notification(str, incident='usual', time=2000){
    let div = document.createElement('div');
    let incidents = ['success', 'error', 'notice', 'warning'];
    let classIncident = incident;
    if (incidents.indexOf(classIncident) == -1) {
      classIncident = 'usual';
    }
    div.classList.add(classIncident);
    div.id = "notification";
    let title = document.createElement("span");
    title.innerHTML = str;
    div.append(title);
    document.body.append(div);
    div.classList.add('active');
    setTimeout(function() {
      div.classList.add('darker');
    }, time);
    setTimeout(function() {
      div.className = '';
    div.remove();
    }, time+200);
}

function report(str, time=4000){
    let blockMas = document.getElementsByClassName('report');
    if (blockMas.length > 0){
      return;
    }
    let div = document.createElement('div');
    div.classList.add('report');
    div.id = "report";
    let title = document.createElement("span");
    title.innerHTML = str;
    div.append(title);
    document.body.append(div);
    div.classList.add('active');
    setTimeout(function() {
      div.classList.add('darker');
    }, time);
    setTimeout(function() {
      div.className = '';
    div.remove();
    }, time+200);
}

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("header-sticky", window.scrollY > 0);
}
);

function openMenu(){
  document.querySelector('.header__list').classList.toggle('header__list-active');
}

let html = document.querySelector('html');
html.addEventListener('click', function(event) {
 let target = event.target;
 let isHeaderNav = false;
 try {
   while (target.tagName != 'HTML'){
     if (target.getAttribute("class") == 'header__menu' || target.getAttribute("class") == 'header__list header__list-active'){
       isHeaderNav = true;
       break;
     }
     if (target.getAttribute("class") == 'header__links') {
       break;
     }
     target = target.parentNode;
   }
 } catch (e) {}
 if (!isHeaderNav){
   document.querySelector('.header__list').classList.remove('header__list-active');
 }
});
