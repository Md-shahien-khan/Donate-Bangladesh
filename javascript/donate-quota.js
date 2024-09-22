document.getElementById('btn-donate-quota').addEventListener('click', function(e){
    e.preventDefault();

    const inputValueQ = getInputValueById('input-quota');


    if(isNaN(inputValueQ) || inputValueQ <=0){
        alert('invalid Amount');
        return;
    };

    const balanceInNavbar = getTextValueById('nav-amount');

    if(inputValueQ > balanceInNavbar){
        alert('Donation Unsuccessful');
        return;
    }



    const q_Collection = getTextValueById('quota-donate-collection');
    const newBalanceForQ = inputValueQ + q_Collection;
    
    alert('Donation Successful');
    
    document.getElementById('quota-donate-collection').innerText = newBalanceForQ;


    const newBalanceForNavbar = balanceInNavbar - inputValueQ;
    document.getElementById('nav-amount').innerText = newBalanceForNavbar;



    // Add to history
    const div = document.createElement('div');
    
    div.innerHTML = `
    <div class="border p-4 rounded-lg m-5">
    <h3>${inputValueQ} Taka is Donated for Aid for Injured in the Quota Movement</h3>
    <p>Date :${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString('en-GB')}</p>
    </div>
    `
    document.getElementById('history-section').appendChild(div);

});