import { createServer } from 'net'

async function getAvailablePort() {
    return new Promise((res, rej) => {
        const srv = createServer()

        srv.unref()
        srv.once('error', rej)

        srv.listen(0, () => {
            const port = (srv.address() as any).port
            srv.close(() => {
                srv.removeAllListeners('error')
                res(port)
            })
        })
    }) as any as number
}

export default getAvailablePort