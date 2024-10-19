const PrimaryButton = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-5 px-6 rounded-3xl ease-in-out duration-150 bg-primary text-white hover:bg-primary hover:scale-105 transform"
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
