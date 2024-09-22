document.getElementById('btn-donate-feni').addEventListener('click', function(e){
    e.preventDefault();

    const inputValueF = getInputValueById('input-feni');
    const f_Collection = getTextValueById('feni-donate-collection');
    const newBalanceForF = inputValueF + f_Collection;
    // console.log(newBalanceForN);
    
    document.getElementById('feni-donate-collection').innerText = newBalanceForF;

    const balanceInNavbar = getTextValueById('nav-amount');
    const newBalanceForNavbar = balanceInNavbar - inputValueF;
    document.getElementById('nav-amount').innerText = newBalanceForNavbar;
});