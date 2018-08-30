// const photos = [
//   {
//     src: firstPhoto,
//     alt: 'lavender summer'
//   },
//   {
//     src: secondPhoto,
//     alt: 'lavender summer'
//   },
//   {
//     src: thirdPhoto,
//     alt: 'lavender summer'
//   },
//   {
//     src: fourthPhoto,
//     alt: 'lavender flowers'
//   },
//   {
//     src: fifthPhoto,
//     alt: 'lavender field'
//   },
//   {
//     src: sixthPhoto,
//     alt: 'rainbow above lavender'
//   }
// ];

// const Gallery = ({ title }) => (
//   <div className="gallery" id="gallery">
//     <h2>{title}</h2>
//     <div className="gallery-items">
//       {photos.map ((el, index) => (
//         <div key={index} className="gallery-item">
//           <img
//             src={el.src}
//             alt={el.alt}
//           />
//           <a href="#" className="gallery-item__link">
//             <p>W trakcie opracowania</p>
//           </a>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// Gallery.defaultProps = {
//   title: 'Galeria'
// }

// export default Gallery;