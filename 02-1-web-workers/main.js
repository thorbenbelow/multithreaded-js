console.log("Main::Start")

const worker = new Worker("worker.js")

worker.onmessage = msg => void console.log(`Main::Received ${msg.data}`)


worker.postMessage("Hello from main to worker")

console.log("Main::End")
