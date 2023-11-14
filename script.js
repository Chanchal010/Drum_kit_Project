function playSound(key) {
    if (key === 'w') {
      new Audio('sounds/tom-1.mp3').play();
    } else if (key === 'a') {
      new Audio('sounds/tom-2.mp3').play();
    } else if (key === 's') {
      new Audio('sounds/tom-3.mp3').play();
    } else if (key === 'd') {
      new Audio('sounds/tom-4.mp3').play();
    } else if (key === 'j') {
      new Audio('sounds/snare.mp3').play();
    } else if (key === 'k') {
      new Audio('sounds/crash.mp3').play();
    } else if (key === 'l') {
      new Audio('sounds/kick-bass.mp3').play();
    } else {
      console.log('Invalid key');
    }
  }
  

  const drumBtn = document.querySelectorAll('.drum');
  drumBtn.forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.textContent;
      playSound(key);
    });
  });
  
  document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (['w', 'a', 's', 'd', 'j', 'k', 'l'].includes(key)) {
      playSound(key);
    }
  });

  