const Button = ({
  children,
  title,
  className,
  bgColor,
  textColor,
  onClick,
}) => {
  return (
    <button
      className={`flex items-center py-2 px-3 rounded-lg shadow-lg ${
        bgColor ?? 'bg-primaryGreen'
      } ${textColor ?? 'text-backgroundWhite'} ${className}`}
      onClick={onClick ?? null}
    >
      <span>{title}</span>
      {children ?? null}
    </button>
  );
};

export default Button;
