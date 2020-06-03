import Vue from 'vue';

function fromMdtoHtml(markdownTxt) {
  let regexBold = /\_\_(\S(.*?\S)?)\_\_/gm;
  let regexItalic = /\_(\S(.*?\S)?)\_/gm;

  markdownTxt = markdownTxt.replace(regexBold, '<strong>$1</strong>');
  markdownTxt = markdownTxt.replace(regexItalic, '<i>$1</i>');
  return markdownTxt;
}

function formattedDate(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let time = new Date(date);
  return time.toLocaleDateString('nl-BE', options);
}

Vue.filter('fromMdtoHtml', (val) => fromMdtoHtml(val));
Vue.filter('formattedDate', (val) => formattedDate(val));
