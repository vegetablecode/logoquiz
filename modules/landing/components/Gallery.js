const gallery = [
  '/logos/dog-walking.png',
  '/logos/lawyer.png',
  '/logos/interior.png',
  '/logos/japanese.png',
  '/logos/arizona.png',
  '/logos/cafe.png',
  '/logos/cleaner.png',
  '/logos/cleaning.png',
  '/logos/dentist.png',
  '/logos/designer.png',
  '/logos/dog-walker.png',
  '/logos/photoluke.png',
  '/logos/dog-walking.png',
  '/logos/fitness.png',
  '/logos/insurances.png',
  '/logos/matcha.png',
  '/logos/photographer.png',
  '/logos/podcast.png',
  '/logos/insurances.png',
  '/logos/real-estate.png',
  '/logos/spanish.png',
  '/logos/tea.png',
  '/logos/security.png',
  '/logos/tiny-cafe.png',
  '/logos/taxi.png',
  '/logos/gym.png',
];

const Gallery = () => (
  <div className="pt-8 lg:pb-8 flex flex-col lg:space-y-16 items-center">
    <div className="cr-wrapper">
      <div className="cr">
        <div className="flex space-x-4 pt-4 pb-12">
          {gallery.map((item) => (
            <div key={item} className="cr-slide flex">
              <img
                src={item}
                alt="gallery"
                className="h-auto w-auto shadow-xl cursor-pointer rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
export default Gallery;
