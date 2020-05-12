import Vue from 'vue';

function fromMdtoHtml(markdownTxt) {
  let regexBold = /\_\_(\S(.*?\S)?)\_\_/gm;
  let regexItalic = /\_(\S(.*?\S)?)\_/gm;

  markdownTxt = markdownTxt.replace(regexBold, '<strong>$1</strong>');
  markdownTxt = markdownTxt.replace(regexItalic, '<i>$1</i>');
  return markdownTxt;
}

Vue.filter('fromMdtoHtml', val => fromMdtoHtml(val));
