var sri=document.getElementById('sample');
sri.style.color = 'pink';

var a = Array.from(document.getElementByClassName('hello'));
console.log(a);
a.forEach(changecolor);
function changecolor(ele){
ele.style.color = 'blue';
}
  



