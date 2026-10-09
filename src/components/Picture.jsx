import { imageSrc, imageSrcSet } from '../data/site'

// <img> responsivo con ancho/alto (evita saltos de diseño) y carga diferida salvo en la imagen principal.
export default function Picture({ image, sizes, priority = false, className = '' }) {
  return (
    <img
      src={imageSrc(image)}
      srcSet={imageSrcSet(image)}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      className={className}
    />
  )
}
