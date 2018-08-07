mocha.run();

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list li');
  var currentAmount;
  
  for(var i = 0; i < lis.length; i++){
    currentAmount = parseInt(lis[i].innerText);
    currentAmount = currentAmount;
    lis[i].innerHTML = parseInt(currentAmount);
  }
  return lis;
}

function deepestChild() {
  
}