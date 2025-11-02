const PrimaryButton = ({ title, onClick, href }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="dofollow"
        className="inline-block py-5 px-6 rounded-3xl ease-in-out duration-150 bg-primary text-white hover:bg-primary hover:scale-105 transform"
      >
        {title}
      </a>
    );
  }

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
