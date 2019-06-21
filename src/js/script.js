window.onload = function() {
  data = [210, 100, 180, 200, 250, 240, 200, 130, 100, 100, 180, 280];
  labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  renderChart(data, labels);
  dataDoughnut = [210, 100, 180, 200, 250, 240];
  labelsDoughnut = ["", "Feb", "Mar", "Apr", "May", "Jun"];
  renderDoughnut(dataDoughnut, labelsDoughnut);
};
function float2dollar(value) {
  return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

function renderChart(data, labels) {
  var ctx = document.getElementById("ChartPoint").getContext("2d");
  let fillPatternPoli = ctx.createLinearGradient(0, 0, 200, 0);
  fillPatternPoli.addColorStop(0, "#FBF3EDe6"); // 'rgba(0, 0, 0, 0.1)'
  fillPatternPoli.addColorStop(1, "#FCE9E9e6");
  let fillPatternLine = ctx.createLinearGradient(0, 0, 200, 0);
  fillPatternLine.addColorStop(0, "#F6860D"); // 'rgba(0, 0, 0, 0.1)'
  fillPatternLine.addColorStop(1, "#FF3A4C");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: false,
          data: data,
          borderColor: fillPatternLine,
          backgroundColor: fillPatternPoli,
          hitRadius: 10,
          borderWidth: 3,
          pointRadius: 0.4,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 3,
          pointBackgroundColor: "rgba(255, 255, 255, 0)",
          pointHoverBackgroundColor: "rgba(255, 255, 255, 1)"
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          title: function(tooltipItem, data) {
            return ""; //data['labels'][tooltipItem[0]['index']];
          },
          label: function(tooltipItem, data) {
            return data["datasets"][0]["data"][tooltipItem["index"]];
          }
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 14,
        displayColors: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              callback: function(value, index, values) {
                return value;
              }
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            }
          }
        ]
      }
    }
  });
}

function renderDoughnut(data, labels) {
  var ctx = document.getElementById("ChartDoughnut").getContext("2d");

  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labels,

      datasets: [
        {
          // label: false,
          data: data,
          borderColor: ["#FF6384", "#63FF84", "#84FF63", "#8463FF", "#6384FF"],
          backgroundColor: [
            "#FF6384",
            "#63FF84",
            "#84FF63",
            "#8463FF",
            "#6384FF"
          ],

          // hitRadius: 10,
          // borderWidth: 3,
          // pointRadius: 0.4,
          pointHoverRadius: 100
          // pointHoverBorderWidth: 3,
          // pointBackgroundColor: 'rgba(255, 255, 255, 0)',
          // pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
        }
      ]
    },
    options: {
      rotation: 85,
      cutoutPercentage: 90,
      legend: {
        display: false
      },
      tooltips: {
        mode: "x-axis",
        callbacks: {
          title: function(tooltipItem, data) {
            return ""; //data['labels'][tooltipItem[0]['index']];
          },
          label: function(tooltipItem, data) {
            return data["datasets"][0]["data"][tooltipItem["index"]];
          }
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 14,
        displayColors: false
      }
    }
  });
}
