const Button = ({ children, title, className, onClick }) => {
  return (
    <button className={className ?? null} onClick={onClick ?? null}>
      {title && <span>{title}</span>}
      {children ?? null}
    </button>
  );
};

export default Button;
