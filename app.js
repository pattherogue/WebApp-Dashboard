/* Alert Banner */
const alertBanner = document.getElementById("alert");
//html for the banner
alertBanner.innerHTML = 
`<div class="alert-banner">
    <p><strong>Alert:</strong> You have unread messages</p>
    <p class="alert-banner-close">&times;</p>
    </div>`

 alertBanner.addEventListener('click', e => {
     const element = e.target;
     if (element.classList.contains("alert-banner-close")) {
         alertBanner.style.display = "none"
     }
 });

 /*Traffic Data */
 let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(133, 126, 231, 0.3)',
    borderWidth: 2,
    fill: 'origin',
    tension: 0.4
     }]
  }
  
  let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
      duration: 0
    },
    scales: {
      y: { 
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };
  
  let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });
  

