import React from 'react';
import firstPhoto from '../styles/jpg/1small.jpg';
import secondPhoto from '../styles/jpg/2small.jpg';
import thirdPhoto from '../styles/jpg/3small.jpg';
import fourthPhoto from '../styles/jpg/4small.jpg';
import fifthPhoto from '../styles/jpg/5small.jpg';
import sixthPhoto from '../styles/jpg/6small.jpg';

const photos = [
  {
    src: firstPhoto,
    alt: 'lavender summer'
  },
  {
    src: secondPhoto,
    alt: 'lavender summer'
  },
  {
    src: thirdPhoto,
    alt: 'lavender summer'
  },
  {
    src: fourthPhoto,
    alt: 'lavender flowers'
  },
  {
    src: fifthPhoto,
    alt: 'lavender field'
  },
  {
    src: sixthPhoto,
    alt: 'rainbow above lavender'
  }
];

const Gallery = ({ title }) => (
  <div className="gallery" id="gallery">
    <h2>{title}</h2>
    <div className="gallery-items">
      {photos.map ((el, index) => (
        <div key={index} className="gallery-item">
          <img
            src={el.src}
            alt={el.alt}
          />
          <a href="#" className="gallery-item__link">
            <p>W trakcie opracowania</p>
          </a>
        </div>
      ))}
    </div>
  </div>
);

Gallery.defaultProps = {
  title: 'Galeria'
}

export default Gallery;