import { $ } from 'bun'

async function openUrl(url: string) {
    switch (process.platform) {
        case 'win32':
            await $`cmd.exe /c start ${url}`
            break
        case 'darwin':
            await $`open ${url}`
            break
        case 'linux':
            await $`xdg-open ${url}`
            break
    }
}

export {
    openUrl
}