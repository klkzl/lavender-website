import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

import firstPhotoB from '../styles/jpg/1b.jpg';
import secondPhotoB from '../styles/jpg/2b.jpg';
import thirdPhotoB from '../styles/jpg/3b.jpg';
import fourthPhotoB from '../styles/jpg/4b.jpg';
import fifthPhotoB from '../styles/jpg/5b.jpg';
import sixthPhotoB from '../styles/jpg/6b.jpg';
import seventhPhotoB from '../styles/jpg/7b.jpg';
import firstPhotoT from '../styles/jpg/1t.jpg';
import secondPhotoT from '../styles/jpg/2t.jpg';
import thirdPhotoT from '../styles/jpg/3t.jpg';
import fourthPhotoT from '../styles/jpg/4t.jpg';
import fifthPhotoT from '../styles/jpg/5t.jpg';
import sixthPhotoT from '../styles/jpg/6t.jpg';
import seventhPhotoT from '../styles/jpg/7t.jpg';

const photos = [
  {
    original: firstPhotoB,
    thumbnail: firstPhotoT,
    originalAlt: 'lavender summer'
  },
  {
    original: secondPhotoB,
    thumbnail: secondPhotoT,
    originalAlt: 'lavender summer'
  },
  {
    original: thirdPhotoB,
    thumbnail: thirdPhotoT,
    originalAlt: 'lavender summer'
  },
  {
    original: fourthPhotoB,
    thumbnail: fourthPhotoT,
    originalAlt: 'lavender flowers'
  },
  {
    original: fifthPhotoB,
    thumbnail: fifthPhotoT,
    originalAlt: 'lavender field'
  },
  {
    original: sixthPhotoB,
    thumbnail: sixthPhotoT,
    originalAlt: 'rainbow above lavender'
  },
  {
    original: seventhPhotoB,
    thumbnail: seventhPhotoT,
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