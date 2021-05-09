/* Alert Banner */
const alertBanner = document.getElementById("alert");
const tasks = 0;

//html for the banner
alertBanner.innerHTML = 
`<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</srong> overdue tasks
 to complete</p>
 <p class="alert-banner-close">&times;</p>
 </div>`

 alertBanner.addEventListener('click', e => {
     const element = e.target;
     if (element.classList.contains("alert-banner-close")) {
         alertBanner.style.display = "none"
     }
 });