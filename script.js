const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").innerHTML = `<p><span class='pink'>${Math.round(
    value * 10
  )}</span><br>Homes per Second<p>`;
}
 
setGaugeValue(gaugeElement, 1);