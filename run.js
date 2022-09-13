const axios = require('axios')

const DEVICE_URL = 'http://localhost:9879/api/devices'

async function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
}

async function start() {
    const device_obj = {
        targetId: 'contoso-iot-hub-demo',
        deviceModelId: 'thermostat',
        deviceCount: 5000
    }

    for (i = 0; i < 100; i++) {
        await axios.post(DEVICE_URL, device_obj)
        await sleep(20000)
    }
}

start();
