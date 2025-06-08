function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  } else {
    console.error('Element not found:', target);
  }
}



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    }

    

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}


function scrollToElement(element) {
  if (element instanceof HTMLElement) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    console.error('Provided argument is not a valid HTML element:', element);
  }
}


smoothScrollTo('#section2');