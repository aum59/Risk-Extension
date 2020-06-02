console.log('Risk-Extension');

// // https://www.tenable.com/
var textProp = 'textContent' in document ? 'textContent' : 'innerText';
[].slice.call(document.querySelectorAll('span'), 0).forEach(function(aEl) {
  if (aEl[textProp].indexOf('Adobe Flash Player') > -1) {
    // aEl.style.color = '#099700';
    var begin = aEl[textProp].substring(0,aEl[textProp].indexOf('Adobe Flash Player'));
    var word = aEl[textProp].substring(aEl[textProp].indexOf('Adobe Flash Player') ,aEl[textProp].indexOf('Adobe Flash Player')+18);
    var end = aEl[textProp].substring(aEl[textProp].indexOf('Adobe Flash Player')+18);
    aEl.innerHTML = begin + "<b style='color:#099700;''>" + word  + "</b>" + end;
  }
});
// Test on https://www.tenable.com/plugins/nessus/72383
