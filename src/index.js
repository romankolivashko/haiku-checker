import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Haiku from './js/haiku.js';


$(document).ready(function() {
  $('#haiku-input').submit(function(event) {
    event.preventDefault();
    
    let line1= $("#haiku-line1").val();
    let line2= $("#haiku-line2").val();
    let line3= $("#haiku-line3").val();
    let testHaiku = new Haiku(line1,line2,line3)

    if (testHaiku.haikuCheck() === true) {
      $('#response').text(`This is a haiku!`);
    } else {
      $('#response').text(`This is NOT a haiku!`);
    }
  });
});