document.getElementById('donate-now-btn-1').addEventListener('click', function(e){
    e.preventDefault();

    const inputValue = getInputValueById('input-deposit-noakhali');
    console.log(inputValue);
    

    if(isNaN(inputValue) || inputValue <=0 ){
        alert('invalid Amount');
        return;

    };

    const balanceInNavbar = getTextValueById('nav-amount');

    if(inputValue > balanceInNavbar){
        alert('Donation Unsuccessful thats too much');
        return;
    }
    const n_Collection = getTextValueById('noakhali-donate-collection');
    const newBalanceForN = inputValue + n_Collection;

    document.getElementById('noakhali-donate-collection').innerText = newBalanceForN;

    const newBalanceForNavbar = balanceInNavbar - inputValue;
    document.getElementById('nav-amount').innerText = newBalanceForNavbar; 

    // Add to history
    const div = document.createElement('div');
    
    div.innerHTML = `
    <div class="border p-4 rounded-lg m-5">
    <h3>${inputValue} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</h3>
    <p>Date :${new Date().toLocaleDateString()} GMT - ${new Date().toLocaleTimeString('en-GB')}</p>
    </div>
    `
    document.getElementById('history-section').appendChild(div);
});
