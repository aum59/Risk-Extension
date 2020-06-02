console.log('Risk-Extension');

// // https://docs.microsoft.com
setTimeout(() => {
    var textProp = 'textContent' in document ? 'textContent' : 'innerText';
        [].slice.call(document.querySelectorAll('p'), 0).forEach(function(aEl) {
        if (aEl[textProp].indexOf('convince a user') > -1) {
            var begin = aEl[textProp].substring(0,aEl[textProp].indexOf('convince a user'));
            var word = aEl[textProp].substring(aEl[textProp].indexOf('convince a user') ,aEl[textProp].indexOf('convince a user')+15);
            var end = aEl[textProp].substring(aEl[textProp].indexOf('convince a user')+15);
            aEl.innerHTML = begin + "<b style='color:#099700;''>" + word  + "</b>" + end;
        }
        });
}, 2000);

// Test on https://docs.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-022
// Test on https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2017-0022
