function postComment() {
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    if (email && comment) {
        const commentsList = document.getElementById('comments-list');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        const author = document.createElement('p');
        author.classList.add('comment-author');
        author.innerText = email;

        const text = document.createElement('p');
        text.classList.add('comment-text');
        text.innerText = comment;

        newComment.appendChild(author);
        newComment.appendChild(text);
        commentsList.appendChild(newComment);

        document.getElementById('email').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Please enter both a Gmail account and a comment.');
    }
}


document.addEventListener('DOMContentLoaded', function() {
// Smooth scrolling when clicking on navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(navLink) {
navLink.addEventListener('click', function(e) {
e.preventDefault();
const targetId = navLink.getAttribute('href').substring(1);
const targetElement = document.getElementById(targetId);
if (targetElement) {
targetElement.scrollIntoView({ behavior: 'smooth' });
}
});
});

// Handling comment form submission
const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', function(e) {
e.preventDefault();
const commentTextarea = document.getElementById('comment');
const comment = commentTextarea.value.trim();

if (comment !== '') {
// Simulate posting comment (for demonstration purpose)
setTimeout(function() {
alert('Comment posted');
commentTextarea.value = ''; // Clear textarea after posting
}, 500); // Change delay as needed or replace with actual backend request
} else {
alert('Please enter a comment');
}
});
});