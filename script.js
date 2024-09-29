const book = document.getElementById('book');
const bookTitle = document.getElementById('book-title');
const bookImage = document.getElementById('book-image');
const bookDescription = document.getElementById('book-description');

document.querySelectorAll('.open-book-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.parentElement;
        const title = card.querySelector('h2').innerText;

        bookTitle.innerText = title;
        bookImage.src = card.getAttribute('data-image'); 
        bookDescription.innerText = card.getAttribute('data-description'); 

        book.classList.add('open');
        book.style.display = 'block';
    });
});

document.getElementById('close-book-btn').addEventListener('click', function() {
    book.classList.remove('open');
    setTimeout(() => {
        book.style.display = 'none'; 
    }, 600); 
});
