console.log("Blue::Start")

const worker = new SharedWorker("shared-worker.js")

worker.port.onmessage = msg => void console.log(`Blue::Received ${msg.data}`)

console.log("Blue::End")
