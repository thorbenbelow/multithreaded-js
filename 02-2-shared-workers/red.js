console.log("Red::Start")

const worker = new SharedWorker("shared-worker.js")

worker.port.onmessage = msg => void console.log(`Red::Received ${msg.data}`)

console.log("Red::End")
