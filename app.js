// Event listener that fires when a user clicks a button.
document.getElementById("myBtn").addEventListener("click", function(){
  computeChange();
});

function computeChange(){
  // Get the change from user.
  var fiveCents = 0.05 * parseInt(document.getElementById('fiveCents').value);
  var tenCents = 0.10 * parseInt(document.getElementById('tenCents').value);
  var twentyfiveCents = 0.25 * parseInt(document.getElementById('twentyfiveCents').value);
  var fiftyCents = 0.50 * parseInt(document.getElementById('fiftyCents').value);

  // Calculate the total chanage.
  var totalChange = fiveCents + tenCents + twentyfiveCents + fiftyCents;

  // Display the total change, with
  // the output rounded to cents.
  document.getElementById('outTotalChange').innerHTML = "Total Change:  $" + totalChange.toFixed(2);
}
