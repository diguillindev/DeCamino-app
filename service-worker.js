self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    // Puedes precachear archivos aquí si lo deseas
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  