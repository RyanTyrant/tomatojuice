const body = document.querySelector('body');
const cursor = document.createElement('div');
cursor.id = 'cursor';
cursor.classList.add('custom-cursor');
body.appendChild(cursor);

const updateCursor = (event) => {
  const cursorSize = cursor.clientWidth / 2;
  cursor.style.left = event.clientX - cursorSize + 'px';
  cursor.style.top = event.clientY - cursorSize + 'px';
  cursor.style.display = 'block';
};

window.addEventListener('mousemove', updateCursor);

document.addEventListener('mouseout', () => {
  cursor.style.display = 'none';
});
