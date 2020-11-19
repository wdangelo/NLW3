import Image from '../models/Images'

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://localhost:8282/uploads/${image.path}`

        }
    },

    renderMany(images: Image[]) {

        return images.map(image => this.render(image))

    }
}