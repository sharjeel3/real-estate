const helper = (() => {
    const getAgencyAssets = agency => {
        const { brandingColors, logo: image = '' } = agency || {}
        const { primary: color = '#e4002b' } = brandingColors || {}
        return {
            color,
            image
        }
    }

    const getIsSaved = (id, savedProperty) => {
        return Object.keys(savedProperty).indexOf(id) !== -1
    }

    return {
        getAgencyAssets,
        getIsSaved
    }
})()

export default helper
