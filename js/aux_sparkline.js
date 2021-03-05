function findClosest(target, tagName) {
  if (target.tagName === tagName) {
    return target;
  }

  while ((target = target.parentNode)) {
    if (target.tagName === tagName) {
      break;
    }
  }

  return target;
};

var btc = [
  {name: "Bitcoin", date: "2017-01-01", value: 967.6},
  {name: "Bitcoin", date: "2017-02-01", value: 957.02},
  {name: "Bitcoin", date: "2017-03-01", value: 1190.78},
  {name: "Bitcoin", date: "2017-04-01", value: 1071.48},
  {name: "Bitcoin", date: "2017-05-01", value: 1354.21},
  {name: "Bitcoin", date: "2017-06-01", value: 2308.08},
  {name: "Bitcoin", date: "2017-07-01", value: 2483.5},
  {name: "Bitcoin", date: "2017-08-01", value: 2839.18},
  {name: "Bitcoin", date: "2017-09-01", value: 4744.69},
  {name: "Bitcoin", date: "2017-10-01", value: 4348.09},
  {name: "Bitcoin", date: "2017-11-01", value: 6404.92},
];



var options = {
  onmousemove(event, datapoint) {
    var svg = findClosest(event.target, "svg");
    var tooltip = svg.nextElementSibling;
    var date = (new Date(datapoint.date)).toUTCString().replace(/^.*?, (.*?) \d{2}:\d{2}:\d{2}.*?$/, "$1");


    tooltip.hidden = false;
    tooltip.textContent = `${date}: $${datapoint.value.toFixed(2)} USD`;
    tooltip.style.top = `${event.offsetY}px`;
    tooltip.style.left = `${event.offsetX + 20}px`;
  },

  onmouseout() {
    var svg = findClosest(event.target, "svg");
    var tooltip = svg.nextElementSibling;

    tooltip.hidden = true;
  }
};



