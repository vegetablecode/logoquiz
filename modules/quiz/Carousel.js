const Carousel = ({ gallery }) => (
  <div className="carousel carousel-center p-4 space-x-4 rounded-box">
    {gallery.map((item) => (
      <div className="carousel-item">
        <img
          src={item}
          className="rounded-box h-[150px] w-[150px] sm:h-[205px] sm:w-[205px]"
        />
      </div>
    ))}
  </div>
);

export default Carousel;
