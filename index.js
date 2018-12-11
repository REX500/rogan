'use strict';

const getQuote = async () => {
  const random = Math.floor(Math.random() * 10); 
  let quote;

  switch (random) {
    case 1:
      quote = 'You should start a podcast!';    
      break;
    case 2:
      quote = 'Have you ever done DMT?';
      break;
    case 3:
      quote = '___ will mess you up!';
      break;
    case 4:
      quote = 'Monkeys are dangerous!';
      break;
    case 5:
      quote = 'Jamie, see if you can pull that up!';
      break;
    case 6:
      quote = 'Hmm... insteresting...';
      break;
    case 7:
      quote = 'If I got a hold of your tie, I would choke the shit out of you!';
      breakl
    case 8:
      quote = '___ is no joke!';
      break;
    case 9:
      quote = 'Im high as fuck right now.';
      break;
    default:
      break;
  }

  return quote;
};

module.exports = {
  getQuote
};