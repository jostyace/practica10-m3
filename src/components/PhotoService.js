const images = [
    {
        itemImageSrc: '/imagenes/image-product-1.jpg',
        thumbnailImageSrc: '/imagenes/image-product-1-thumbnail.jpg',
        alt: 'Imagen de Producto 1',
        title: 'Titulo 1'
    },
    {
        itemImageSrc: '/imagenes/image-product-2.jpg',
        thumbnailImageSrc: '/imagenes/image-product-2-thumbnail.jpg',
        alt: 'Imagen de Producto 2',
        title: 'Titulo 2'
    },
    {
        itemImageSrc: '/imagenes/image-product-3.jpg',
        thumbnailImageSrc: '/imagenes/image-product-3-thumbnail.jpg',
        alt: 'Imagen de Producto 3',
        title: 'Titulo 3'
    },
    {
        itemImageSrc: '/imagenes/image-product-4.jpg',
        thumbnailImageSrc: '/imagenes/image-product-4-thumbnail.jpg',
        alt: 'Imagen de Producto 4',
        title: 'Titulo 4'
    },

];

export const PhotoService = {
    getImages: () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(images);
            }, 1000);
        });
    }
};