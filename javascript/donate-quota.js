document.getElementById('btn-donate-quota').addEventListener('click', function(e){
    e.preventDefault();

    const inputValueQ = getInputValueById('input-quota');
    const q_Collection = getTextValueById('quota-donate-collection');
    const newBalanceForQ = inputValueQ + q_Collection;
    // console.log(newBalanceForN);
    
    document.getElementById('quota-donate-collection').innerText = newBalanceForQ;

    const balanceInNavbar = getTextValueById('nav-amount');
    const newBalanceForNavbar = balanceInNavbar - inputValueQ;
    document.getElementById('nav-amount').innerText = newBalanceForNavbar;
});