const navHeart = document.getElementById("nav-heart");
const cardHearts = document.querySelectorAll(".card-heart");
var copycount = 0;


let count = 0;

cardHearts.forEach((btn) => {
  btn.addEventListener("click", () => {
    count++;
    navHeart.innerText = count;
  });
});



const cardCallBtns = document.querySelectorAll(".card-call-btn");
const callCredits = document.querySelectorAll(".callCredit");
const cardTitles = document.querySelectorAll(".card-title");
const cardNums = document.querySelectorAll(".card-num");

cardCallBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let callCreditCoin = parseInt(callCredits[0].innerText);

    const cardTitle = cardTitles[index].innerText;
    const cardNum = cardNums[index].innerText;

    if (callCreditCoin >= 20) {
      alert(`${cardTitle}\n📞 Calling ${cardTitle} (${cardNum})...`);
      history(cardTitle,cardNum);
      callCreditCoin -= 20;
      callCredits[0].innerText = callCreditCoin;
    } else {
      alert("You don't have sufficient coin. Minimum 20 coins need.");
    }
  });
});


document.getElementById('clearbtn').addEventListener('click', function(){

  document.getElementById('historyItem').innerHTML = '';

});


function history(title,number){

  const historyField = document.getElementById('historyItem');

   const now = new Date();

    const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
});


  const TEMPLATES = `<div class="flex rounded-lg items-center py-3 px-3 justify-between bg-gray-100">
            <div>
              <h1 class="font-bold text-sm">${ title }</h1>
              <p class="text-sm">${ number }</p>
            </div>
            <div>
              <p class="text-sm">${ time }</p>
            </div>
          </div>`

  const div = document.createElement('div');

  div.innerHTML = TEMPLATES;
  historyField.appendChild(div);


}


document.querySelectorAll('#copy-btn-card').forEach(function(btn, index){
  btn.addEventListener('click', function(){
    
    copycount++;
    document.getElementById('copy-field').innerText = copycount;
    const cardTitle = cardTitles[index].innerText;
    const cardNum = cardNums[index].innerText;
    alert(`Copied ${cardTitle} Hotline Number:${cardNum}`);
    navigator.clipboard.writeText(cardNum);
  });
});
