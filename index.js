mocha.run();

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  var currentAmount;
  
  for(var i = 0; i < lis.length; i++){
    currentAmount = parseInt(lis[i].innerText);
    currentAmount = currentAmount + n;
    lis[i].innerText = currentAmount.toString();
  }
  return lis;
}

function deepestChild() {
  
}