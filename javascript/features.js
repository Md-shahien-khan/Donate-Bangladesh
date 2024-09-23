document.getElementById('donation').addEventListener('click', function(){
    showSectionById('donate-section');

    // changing the button color 
    const donation_button = document.getElementById('donation');
    donation_button.classList.add('bg-bgg');

    const history_button = document.getElementById('history');
    history_button.classList.remove('bg-bgg');
    

});

document.getElementById('history').addEventListener('click', function(){
    showSectionById('history-section');
    

    // changing the button color 
    const history_button = document.getElementById('history');
    history_button.classList.add('bg-bgg');

    const donation_button = document.getElementById('donation');
    donation_button.classList.remove('bg-bgg');

});