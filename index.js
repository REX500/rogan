'use strict';

const getQuote = async () => {
  const quotes = [
    'You should start a podcast!',
    'Thats cool man... Have you ever done DMT?',
    '___ will mess you up!',
    'Im telling you, chimps are dangerous!',
    'Jamie! See if you can pull that up..',
    'Hmm... interesting...',
    'If I got a hold of your tie, I would choke the shit out of you!',
    '___ is no joke!',
    'Im high as fuck right now.',
    'Hello, freak bitches!',
    'What do you got there Jamie?',
    'I see your point...',
    '*Talks about elk meat*',
    '*Talks about bow hunting*',
    'I feed my kids elk, they love it.',
    'Train by day, Joe Rogan podcast by night, all day!',
    'Have you considered doing a podcast?',
    '... HERE WE GO!',
    '... AND ITS ALL OVER!!!',
    'Cash app',
    'The mother fucking Cash App!',
    'This episode of the podcast if brought to you by: __'
  ];


  return quotes[Math.floor(Math.random() * quotes.length)];
};

module.exports = {
  getQuote
};