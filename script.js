
let blogsection = document.querySelector('.blogSection');
let blogSectionTitle = document.querySelector('#blogSectionTitle');
let blogSectionContent = document.querySelector('#blogSectionContent');
let main = document.querySelector('main');
let heroImg = document.querySelector('.heroImg');
let hero = document.querySelector('.hero');

function blog (entry) {
    blogsection.style.display = 'block';
    main.style.display = 'none';
    heroImg.src = blogContent[entry]['image'];
    hero.style.maxHeight = '70vh';
    blogSectionTitle.innerText = blogContent[entry]['title'];
    blogSectionContent.innerHTML = blogContent[entry]['content'];
}

function menu () {
    blogsection.style.display = 'none';
    main.style.display = 'block';
    heroImg.src = 'img/hero.jpg';
    hero.style.maxHeight = '100vh';
}

