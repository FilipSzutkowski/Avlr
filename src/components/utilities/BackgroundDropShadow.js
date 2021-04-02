const BackgroundDropShadow = ({ onClick }) => {
  return (
    <div
      aria-hidden="true"
      className="absolute top-0 z-20 h-screen w-screen bg-black opacity-60"
      onClick={onClick}
    ></div>
  );
};

export default BackgroundDropShadow;
