const woPlatypus = {
    name: 'No Platypus',
    displayName: `No Platypus ='(`,
    theme: {
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

module.exports = woPlatypus