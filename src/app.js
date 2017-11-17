document.addEventListener("DOMContentLoaded", function(event) {
  const content = document.querySelector('.content');
  if (content !== null) {
    const div = document.createElement(div);
    div.innerText = 'add demo here';
    content.appendChild(div);
  }
});
