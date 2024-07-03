import createImageBuilder from '@sanity/image-url'

const imageBuilder = createImageBuilder({
    projectId: 'uohbidfi',
    dataset: 'production'
})

export const imageUrl = (source) => {
    return imageBuilder?.image(source).auto('format').fit('max').url()
}