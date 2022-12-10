const fs = require('fs')
const filesPath = require('../assets/assetsPath')


let imageBase64 = fs.readFileSync(filesPath.charizard,'base64')
let imageSize = '70%'
let imagePosX = '120%'
let imagePosY = '80%'
const randEvo = Math.floor(Math.random() * 3)

switch (randEvo) {
    case 1:
        imageBase64 = fs.readFileSync(filesPath.charmeleon,'base64')
        imageSize = '40%'
        imagePosX = '95%'
        imagePosY = '90%'
        break;
    case 2:
        imageBase64 = fs.readFileSync(filesPath.charizard,'base64')
        imageSize = '70%'
        imagePosX = '120%'
        imagePosY = '80%'
        break;
    default:
        imageBase64 = fs.readFileSync(filesPath.charmander,'base64')
        imageSize = '30%'
        imagePosX = '95%'
        imagePosY = '90%'
        break;
}

const charFamily = {
    name: 'char-family',
    displayName: 'Char Evo Line',
    theme: {
        rawCss: `
        .request-pane.theme--pane.pane .pane__body.theme--pane__body.react-tabs {
            background-image: url(data:image/png;base64,${imageBase64});
            background-size: ${imageSize};
            background-position-x: ${imagePosX};
            background-position-y: ${imagePosY};
            background-repeat: no-repeat;
        }
        `,
        foreground: {
            default: 'rgb(242, 150, 0)',
            success: undefined,
            notice: undefined,
            warning: undefined,
            danger: undefined,
            surprise: undefined,
            info: undefined,
        },
        background: {
            default: 'rgb(86, 48, 32, 1)',
            success: 'rgb(0, 255, 0, 0.8)',
            notice: 'rgb(255, 255, 102)',
            warning: 'rgb(249, 172, 42)',
            danger: 'rgb(242, 10, 0, 0.7)',
            surprise: 'rgb(145, 0, 163, 0.85)',
            info: 'rgb(4, 165, 143, 1)',
        },
        highlight: {
            default: 'rgb(255, 255, 255, 0.4)',
            xxs: 'rgb(242, 10, 0, 0.3)',
            xs: 'rgb(242, 10, 0, 0.3)',
            sm: 'rgb(242, 150, 0, 0.5)',
            md: 'rgb(242, 150, 0, 0.3)',
            lg: 'rgb(242, 150, 0, 0.9)',
            xl: 'rgb(242, 150, 0, 0.4)',
        },
        styles: {
            transparentOverlay: {
                background: {
                    default: 'rgb(242, 150, 0, 0.7)'
                }
            },
            sidebar: {
                background: {
                    default: 'rgb(242, 150, 0, 0.1)',
                },
                foreground: {
                    default: 'rgb(242, 150, 0, 1)',
                },
                highlight: {
                    default: 'rgb(242, 150, 0, 0.8)'
                },
            },
            sidebarList: {
                background: {
                    default: 'rgb(222, 150, 0, 0.8)',
                },
                foreground: {
                    default: 'rgb(222, 150, 0, 0.8)',
                },
                highlight: {
                    default: 'rgb(222, 150, 0, 0.8)'
                },
            }
        }
    },
}

module.exports = charFamily