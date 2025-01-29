const SearchIcon = document.getElementById('search-icon');
const SearchBox = document.querySelector('.l-header__search-box');

SearchIcon.addEventListener('click', ()=>{
SearchBox.classList.toggle('active');
})