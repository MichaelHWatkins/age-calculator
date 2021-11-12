import Calculator from './age-calulator.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
$(document).ready(function() {
  $('#triangle-checker-form').submit(function(event) {
    event.preventDefault();
    const age = $('#age').val();
    const lifespan = $('#lifespan').val();
    const calculator = new Calculator(age, lifespan)
    const mercury = calculator.mercury();
    const venus = calculator.venus();
    const mars = calculator.mars();
    const jupiter = calculator.jupiter();
    const impendingDeath = calculator.impendingDeath();
    $('#response').append("<p>" + "Age on Mercury: " + mercury + ". Age on Venus: " + venus + ". Age on Mars: " + mars + ". Age on Jupiter: " + jupiter + "</p>");
    $('#output1').text(impendingDeath);
  });
});