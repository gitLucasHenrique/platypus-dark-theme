const baseTheme = require('./defaultDarkPlatypus')

const woPlatypusTheme = {
    ...baseTheme.theme
}

const woPlatypus = {
    name: 'no-platypus',
    displayName: `No Platypus ='(`,
    theme: {
        ...woPlatypusTheme,
        rawCss: undefined,
    }
}

module.exports = woPlatypus