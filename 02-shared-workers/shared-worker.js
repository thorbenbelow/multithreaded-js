const ID = Math.floor(Math.random() * 999999)
console.log("SharedWorker::Start", ID)

const ports = new Set()

self.onconnect = event => {
  const port = event.ports[0]
  ports.add(port)
  console.log("SharedWorker::Connection", ID, ports.size);
  port.onmessage = msg => {
    console.log("SharedWorker::Message", ID, msg.data)
    for (const p of ports) p.postMessage([ID, msg.data])
  }
}
