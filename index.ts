import { Hono } from 'hono'
import { openUrl } from './utils/shell'

import logger from './utils/logger'
import getAvailablePort from './utils/ports'

logger()

const app = new Hono()
const port = process.env.PORT || await getAvailablePort()

app.get('/', (c) => {
    return c.text('Hello, World!')
})

export default {
    port, fetch: app.fetch
}

//await openUrl(`http://127.0.0.1:${port}`)
console.log(`listening on http://127.0.0.1:${port}`)