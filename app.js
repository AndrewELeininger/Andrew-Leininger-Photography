function menutoggle() {
    const menu = document.getElementById("menu");
    menu.classList.toggle('show');
};

function home() {
    const home = document.querySelector('.home');
    home.scrollIntoView({ behavior: 'smooth' });
};
function about() {
    const about = document.querySelector('.about');
    about.scrollIntoView({ behavior: 'smooth' });    
};
function contact() {
    const contact = document.querySelector('.contact');
    contact.scrollIntoView({ behavior: 'smooth' });
};

