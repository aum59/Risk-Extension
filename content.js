console.log('Risk-Extension');

var textProp = 'textContent' in document ? 'textContent' : 'innerText';
[].slice.call(document.querySelectorAll('p'), 0).forEach(function(aEl) {
  if (aEl[textProp].indexOf('STEM') > -1) {
    // aEl.style.color = '#099700';
    var begin = aEl[textProp].substring(0,aEl[textProp].indexOf('STEM'));
    var word = aEl[textProp].substring(aEl[textProp].indexOf('STEM') ,aEl[textProp].indexOf('STEM')+4);
    var end = aEl[textProp].substring(aEl[textProp].indexOf('STEM')+4);
    aEl.innerHTML = begin + "<b style='color:#099700;''>" + word  + "</b>" + end;
  }
});
