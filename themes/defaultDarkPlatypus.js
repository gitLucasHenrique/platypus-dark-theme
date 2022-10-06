const fs = require('fs')
const filesPath = require('../assets/assetsPath')

const imageBase64 = fs.readFileSync(filesPath.platypusBackground,'base64')

const defaultPlatypusDarkTheme = {
    name: 'Default',
    displayName: 'Default Platypus Theme',
    theme: {
        rawCss: `
        .request-pane.theme--pane.pane .pane__body.theme--pane__body.react-tabs {
            background-image: url(data:image/png;base64,${imageBase64});
            background-blend-mode: luminosity;
            background-size: 50%;
            background-position-x: right;
            background-position-y: 95.5%;
            background-repeat: no-repeat;
        }
        `,
        foreground: {
            default: 'rgb(204, 255, 204)',
        },
        background: {
            default: 'rgb(28, 38, 38)',
            success: 'rgb(0, 255, 0, 0.8)',
            notice: 'rgb(255, 255, 102)',
            warning: '#f9ac2a',
            danger: '#ff505c',
            surprise: 'rgb(204, 128, 255)',
            info: 'rgba(4, 165, 143, 1)',
        },
        highlight: {
            default: 'rgb(255, 255, 255, 0.4)',
            xxs: 'rgb(0, 255, 255, 0.2)',
            xs: 'rgb(204, 255, 204, 0.2)',
            sm: 'rgb(0, 204, 0, 0.1)',
            md: 'rgb(0, 204, 0, 0.1)',
            lg: 'rgb(204, 255, 204, 0.7)',
            xl: 'rgb(204, 255, 204)',
        },
        styles: {
            transparentOverlay: {
                background: {
                    default: 'rgb(28, 38, 38, 0.3)'
                }
            },
            sidebar: {
                background: {
                    default: 'rgb(24, 27, 24)',
                },
                foreground: {
                    default: 'rgb(255, 255, 255, 0.9)',
                },
                highlight: {
                    default: 'rgb(255, 255, 255, 0.4)'
                },
            },
        }
    },
}

module.exports = defaultPlatypusDarkTheme