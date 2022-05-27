let counter = 0;

self.oninstall = event => {
  console.log("SW::Install")
}

self.onactivate = event => {
  console.log("SW::Activate")
  evetn.waitUntil(self.clients.claim())
}

self.onfetch = event => {
  console.log("fetch", event.request.url)

  if(event.request.url.endsWith("/data.json")) {
    counter++;
    event.respondWith(new Response(JSON.stringify({counter}), {headers: {'Content-Type': 'application/json'}}))
    return;
  }
  event.respondWith(fetch(event.request))
}

