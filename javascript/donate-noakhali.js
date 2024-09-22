document.getElementById('btn-donate-noakhali').addEventListener('click', function(e){
    e.preventDefault();

    const inputValue = getInputValueById('input-noakhali');
    const n_Collection = getTextValueById('noakhali-donate-collection');
    const newBalanceForN = inputValue + n_Collection;
    // console.log(newBalanceForN);
    
    document.getElementById('noakhali-donate-collection').innerText = newBalanceForN;

    const balanceInNavbar = getTextValueById('nav-amount');
    const newBalanceForNavbar = balanceInNavbar - inputValue;
    document.getElementById('nav-amount').innerText = newBalanceForNavbar;
});
