import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

import firstPhoto from '../styles/jpg/1.jpg';
import secondPhoto from '../styles/jpg/2.jpg';
import thirdPhoto from '../styles/jpg/3.jpg';
import fourthPhoto from '../styles/jpg/4.jpg';
import fifthPhoto from '../styles/jpg/5.jpg';
import sixthPhoto from '../styles/jpg/6.jpg';
import firstPhotot from '../styles/jpg/1t.jpg';
import secondPhotot from '../styles/jpg/2t.jpg';
import thirdPhotot from '../styles/jpg/3t.jpg';
import fourthPhotot from '../styles/jpg/4t.jpg';
import fifthPhotot from '../styles/jpg/5t.jpg';
import sixthPhotot from '../styles/jpg/6t.jpg';

const photos = [
  {
    original: firstPhoto,
    thumbnail: firstPhotot,
    originalAlt: 'lavender summer'
  },
  {
    original: secondPhoto,
    thumbnail: secondPhotot,
    originalAlt: 'lavender summer'
  },
  {
    original: thirdPhoto,
    thumbnail: thirdPhotot,
    originalAlt: 'lavender summer'
  },
  {
    original: fourthPhoto,
    thumbnail: fourthPhotot,
    originalAlt: 'lavender flowers'
  },
  {
    original: fifthPhoto,
    thumbnail: fifthPhotot,
    originalAlt: 'lavender field'
  },
  {
    original: sixthPhoto,
    thumbnail: sixthPhotot,
    originalAlt: 'rainbow above lavender'
  }
];

export default class Slider extends Component {
  render() {
    return (
      <div className="gallery" id="gallery">
        <h2>Galeria</h2>
        <ImageGallery
          items={photos}
          infinite={true}
          showNav={true}
          showThumbnails={true}
          thumbnailPosition="bottom"
          showFullscreenButton={true}
          isRTL={true}
          showBullets={true}
          slideDuration={450}
          slideInterval={2000}
          showPlayButton={false}
          disableSwipe={true}
        />
      </div>
    );
  }
}