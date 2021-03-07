import React from 'react'

export type ImageProps = {
  url: string
  width: number
  height: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  return (
    <>
      <h1>{place.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
      {place.gallery.map((image, index) => (
        <img key={`photo-${index}`} src={image.url} alt={place.name} />
      ))}
    </>
  )
}

export default PlaceTemplate
