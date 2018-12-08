const helper = (() => {
    const getAgencyAssets = agency => {
        const { brandingColors, logo: image = '' } = agency || {}
        const { primary: color = '#e4002b' } = brandingColors || {}
        return {
            color,
            image
        }
    }

    return {
        getAgencyAssets
    }
})()

export default helper
