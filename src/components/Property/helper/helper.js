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

    const getSavedItems = savedProperty => {
        return Object.keys(savedProperty).map(id => {
            return savedProperty[id]
        }).sort((a, b) => (a.time - b.time))
    }

    return {
        getAgencyAssets,
        getIsSaved,
        getSavedItems
    }
})()

export default helper
