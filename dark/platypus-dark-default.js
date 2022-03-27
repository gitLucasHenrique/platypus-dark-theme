exports.original = {
    name: 'platypus-custom-dark-theme',
    displayName: 'Platypus Dark Theme',
    theme: {
        foreground: {
            default: 'rgb(204, 255, 204, 1)',
            success: '',
            notice: 'rgb(255, 0, 0, 0.8)',
            warning: 'rgb(255, 0, 0, 0.8)',
            danger: '',
            surprise: 'rgb(255, 255, 255, 1)',
            info: '',
        },
        background: {
            default: 'rgb(28, 38, 38, 1)',
            success: 'rgb(0, 255, 0, 0.8)',
            notice: 'rgb(255, 255, 102, 1)',
            warning: 'rgb(249, 172, 42, 1)',
            danger: 'rgb(255, 80, 92, 1)',
            surprise: 'rgb(204, 128, 255, 0.9)',
            info: 'rgb(255, 255, 255, 1)',
        },
        highlight: {
            default: 'rgb(255, 255, 255, 0.4)',
            xxs: 'rgb(0, 255, 255, 0.2)',
            xs: 'rgb(204, 255, 204, 0.2)',
            sm: 'rgb(0, 204, 0, 0.2)',
            md: 'rgb(0, 204, 0, 0.1)',
            lg: 'rgb(204, 255, 204, 0.7)',
            xl: 'rgb(204, 255, 204, 1)',
        },
        styles: {
            transparentOverlay: {
                background: {
                    default: 'rgb(28, 38, 38, 0.3)'
                }
            },
            sidebar: {
                background: {
                    default: 'rgb(24, 27, 24, 1)',
                },
                foreground: {
                    default: 'rgb(255, 255, 255, 0.9)',
                },
                highlight: {
                    default: 'rgb(255, 255, 255, 0.4)'
                },
            },
            appHeader: {
                background: {
                    default: 'rgb(28, 38, 38, 0.3)'
                },
                foreground: {
                    default: 'rgb(204, 255, 204, 0.9)'
                },
            },
        }
    },
}