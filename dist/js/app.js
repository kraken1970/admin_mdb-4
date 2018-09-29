new WOW().init();

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Reqd", "Rerd", "Rfed", "Redd", "Reed"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 14, 13, 5, 16, 5],
        backgroundColor: ["red", "green", "blue", "yellow", "grey", "navy"],
        borderColor: ["navy", "yellow", "grey", "green", "blue", "red"],
        borderWidth: 2
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

const ctxP = document.getElementById("pieChart").getContext("2d");
const myPieChart = new Chart(ctxP, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [350, 280, 320, 100, 40],
        backgroundColor: ["red", "green", "blue", "yellow", "grey"],
        hoverBackgroundColor: ["navy", "yellow", "grey", "green", "grey"]
      }
    ]
  },
  options: {
    responsive: true
  }
});

const ctxL = document.getElementById("lineChart").getContext("2d");
const myLineChart = new Chart(ctxL, {
  type: "line",
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "dataset",
        fillColor: "black",
        strokeColor: "red",
        pointColor: "green",
        poinStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "yellow",
        data: [65, 58, 80, 85, 55, 34, 40]
      },
      {
        label: "dataset 2",
        fillColor: "black",
        strokeColor: "red",
        pointColor: "green",
        poinStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "yellow",
        data: [40, 32, 40, 64, 44, 12, 14]
      }
    ]
  }
});

const ctxR = document.getElementById("radarChart").getContext("2d");
const myRadarChart = new Chart(ctxR, {
  type: "radar",
  data: {
    labels: ["First", "First", "First", "First", "First", "First"],
    datasets: [
      {
        label: "dataset",
        fillColor: "black",
        strokeColor: "red",
        pointColor: "green",
        poinStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "yellow",
        data: [65, 58, 80, 85, 55, 34, 40]
      },
      {
        label: "dataset 2",
        fillColor: "black",
        strokeColor: "red",
        pointColor: "green",
        poinStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "yellow",
        data: [40, 32, 40, 64, 44, 12, 14]
      }
    ]
  }
});

const ctxD = document.getElementById("doughnutChart").getContext("2d");

const myDoughnutChart = new Chart(ctxD, {
  type: "doughnut",
  data: {
    labels: ["First", "First", "First", "First", "First"],
    datasets: [
      {
        data: [300, 50, 100, 40, 130],
        backgroundColor: ["red", "green", "blue", "yellow", "black"],
        hoverBackgroundColor: ["havy", "grey", "red", "black", "lime"]
      }
    ]
  },
  options: {
    responsive: true
  }
});
