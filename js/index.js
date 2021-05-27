const navigation = document.querySelector('.navigation');
const links = document.querySelector('.links');
const links1 = document.querySelectorAll('.links li');

navigation.addEventListener('click', () => {
    links.classList.toggle("open");
});