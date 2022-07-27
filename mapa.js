(function(){
  "use strict";
  document.addEventListener('DOMContentLoaded', function() {
      
      var map = L.map('mapa').setView([19.639967195355176, -99.32046503447823], 10);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([19.639967195355176, -99.32046503447823]).addTo(map)
      .bindPopup('Club Deportivo.<br> Dragon.')
      .openPopup();
  });
  })();