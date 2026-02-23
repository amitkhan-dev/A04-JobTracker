let total= document.querySelectorAll('total');
console.log(total);
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allCardsSection = document.getElementById('allCards');
// console.log(allCardsSection.children.length);

function calculateTotalJob (){
  total.innerText = allCardsSection.children.length;
}
calculateTotalJob ()