console.log("Worker::Start")

self.onmessage = msg => {
  console.log("Worker::Received", msg.data)

  postMessage('message sent from worker')
}

console.log("Worker::End")
