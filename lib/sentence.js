'use strict';

var countSentences = function(sentences){
  var regex, sentences, split, count;
  regex = /\. |\? |! /g;
  if (regex.test(sentences) === true) {
    split = sentences.split(regex);
    count = split.length;
  } else {
    count = 0;
  }
  return count;
};