import { test, expect } from 'bun:test'

import getAvailablePort from '../utils/ports'

test('get available port', async () => {
    const port = await getAvailablePort()
    expect(port).toBeGreaterThan(0)
})