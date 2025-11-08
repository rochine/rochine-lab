// Fake telemetry generator for a rover robot
const crypto = require('crypto')
const rand = (a,b)=> Math.random()*(b-a)+a
const pkt = {
  ts: new Date().toISOString(),
  gps: [rand(-7.0,-6.0).toFixed(6), rand(106.0,108.0).toFixed(6)],
  imu: { ax: rand(-1,1).toFixed(3), ay: rand(-1,1).toFixed(3), az: rand(-1,1).toFixed(3) },
  battery: Math.floor(rand(50,100))
}
pkt.hash = crypto.createHash('sha256').update(JSON.stringify(pkt)).digest('hex')
console.log(JSON.stringify(pkt, null, 2))
