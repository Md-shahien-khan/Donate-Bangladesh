document.getElementById('donate-now-btn-2').addEventListener('click', function(e){
    e.preventDefault();

    const inputValueF = getInputValueById('input-feni');
    console.log(inputValueF);
    if(isNaN(inputValueF) || inputValueF <=0){
        alert('invalid Amount');
        return;
    };

    const balanceInNavbar = getTextValueById('nav-amount');

    if(inputValueF > balanceInNavbar){
        alert('Donation Unsuccessful');
        return;
    }

    const f_Collection = getTextValueById('feni-donate-collection');
    const newBalanceForF = inputValueF + f_Collection;
    
    alert('Donation Successful');
    
    document.getElementById('feni-donate-collection').innerText = newBalanceForF;


    const newBalanceForNavbar = balanceInNavbar - inputValueF;
    document.getElementById('nav-amount').innerText = newBalanceForNavbar;


    // Add to history
    const div = document.createElement('div');
    
    div.innerHTML = `
    <div class="border p-4 rounded-lg m-5">
    <h3>${inputValueF} Taka is Donated for Donate for Flood Relief in Feni, Bangladesh</h3>
    <p>Date :${new Date().toLocaleDateString()} GMT - ${new Date().toLocaleTimeString('en-GB')}</p>
    </div>
    `
    document.getElementById('history-section').appendChild(div);
});