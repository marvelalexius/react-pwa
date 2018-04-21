export default function registerSW() {
  if(!navigator.serviceWorker) return;
  
    navigator.serviceWorker.register('/sw.js')
      .then(function(reg) {
        console.info('SW is registered.', reg);
      })
      .catch(function(err) {
        console.error('Failed to register SW.' + err);
      });
    
    window.addEventListener('fetch', function(event) {
        event.respondWith(
          new Response('<h1>Hello Indonesia</h1>', {
            headers: {
              'Content-Type': 'text/html'
            }
          })
        )
    });
}