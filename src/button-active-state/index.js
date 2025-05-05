// Ripple effect
const rippleButtons = document.querySelectorAll('.ripple');
rippleButtons.forEach((button) => {
  button.addEventListener('mousedown', function (e) {
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    ripple.style.width = '100px';
    ripple.style.height = '100px';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Tilt effect
const tiltButtons = document.querySelectorAll('.tilt');
tiltButtons.forEach((button) => {
  button.addEventListener('mousedown', function (e) {
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const x = e.offsetX;
    const y = e.offsetY;

    const xPercent = (x / buttonWidth) * 2 - 1;
    const yPercent = (y / buttonHeight) * 2 - 1;

    button.style.setProperty('--x', xPercent);
    button.style.setProperty('--y', yPercent);
  });
});
