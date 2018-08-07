mocha.run();

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  
  for(var i = 0; i < lis.length; i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  var deepest = document.querySelector('div#grand-node');
  do {
    deepest = deepest.querySelector('*');
  } while (deepest.querySelector('*') !== null)
  
  return deepest;
}