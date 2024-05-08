import { Hono } from 'hono'
import getAvailablePort from './utils/ports'

import logger from './utils/logger'
logger()

const app = new Hono()
const port = process.env.PORT || await getAvailablePort()

app.get('/', (c) => {
    return c.text('Hello, World!')
})

export default {
    port, fetch: app.fetch
}

console.log(`listening on http://127.0.0.1:${port}`)