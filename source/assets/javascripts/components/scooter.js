import Typed from 'typed.js';

const loadScooter = () => {
  console.log("heyScooter");
  new Typed('#scooter', {
    strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    typeSpeed: 40
  });
}

export { loadScooter };

