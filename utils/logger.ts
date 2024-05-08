function logger() {
    const log = console.log
    const prefix = 'riru.ui'

    const blue = (text: string) => `\x1b[34m${text}\x1b[0m`
    const grey = (text: string) => `\x1b[90m${text}\x1b[0m`

    console.log = (...args) => {
        log(blue(`${prefix}`), grey('::'), ...args)
    }
}

export default logger