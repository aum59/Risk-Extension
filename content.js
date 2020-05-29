console.log('Risk-Extension');

// // ==> Some Web must be delay time to fetch data
// setTimeout(() => { 
//     let paragraphs = document.getElementsByTagName('p');
//     for (elt of paragraphs) {
//         elt.style['background-color'] = '#FF00FF';
//     }
// }, 1000);

// // ==> 1. find Element content word "..."
// [].slice.call(document.querySelectorAll("p"))
//    .filter(p => p.textContent.match("convince"))
//    .forEach(p => console.log(p.textContent));

//  // ==> 2. find Element content word "..." and Highlight the Element.
// var textProp = 'textContent' in document ? 'textContent' : 'innerText';
// [].slice.call(document.querySelectorAll('p'), 0).forEach(function(aEl) {
//   if (aEl[textProp].indexOf('Adobe Flash Player') > -1) {
//     aEl.style.color = '#099700';
//   }
// });

// // ==> 3. find Element content word '...' and Highlight the Element
// // ==>    and replace Elements in pattern ( *** 'find word' *** )
var textProp = 'textContent' in document ? 'textContent' : 'innerText';
[].slice.call(document.querySelectorAll('p'), 0).forEach(function(aEl) {
  if (aEl[textProp].indexOf('STEM') > -1) {
    aEl.style.color = '#099700';
    let begin = aEl[textProp].substring(0,aEl[textProp].indexOf('STEM'));
    let word = '*********'
         + aEl[textProp].substring(
        aEl[textProp].indexOf('STEM') ,
        aEl[textProp].indexOf('STEM')+4)
         + '*********';
    let end = aEl[textProp].substring(aEl[textProp].indexOf('STEM')+18,);
    aEl[textProp] = begin + word + end;
  }
});
