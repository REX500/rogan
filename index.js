'use strict';

const getQuote = async () => {
  // const random = Math.floor(Math.random() * 10); 
  const random = Math.floor(Math.random() * 20) + 1;

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
      quote = 'Chimps are dangerous!';
      break;
    case 5:
      quote = 'Jamie, see if you can pull that up..';
      break;
    case 6:
      quote = 'Hmm... interesting...';
      break;
    case 7:
      quote = 'If I got a hold of your tie, I would choke the shit out of you!';
      break;
    case 8:
      quote = '___ is no joke!';
      break;
    case 9:
      quote = 'Im high as fuck right now.';
      break;
    case 10:
      quote = 'Hello, freak bitches!';
      break;
    case 11:
      quote = 'What do you got there Jamie?';
      break;
    case 12:
      quote = 'I see your point...';
      break;
    case 13:
      quote = '*Talks about elk meat*';
      break;
    case 14:
      quote = '*Talks about bow hunting*';
      break;
    case 15:
      quote = 'I feed my kids elk, they love it.';
      break;
    case 16:
      quote = 'Train by day, Joe Rogan podcast by night, all day!';
      break;
    case 17:
      quote = 'Have you considered doing a podcast?';
      break;
    case 18:
      quote = '... HERE WE GO!';
      break;
    case 19:
      quote = '... AND ITS ALL OVER!!!';
      break;
    case 20:
      quote = 'Cash app';
      break;
    default:
      break;
  }

  return quote;
};

getQuote().then((result) => console.log(result));

module.exports = {
  getQuote
};