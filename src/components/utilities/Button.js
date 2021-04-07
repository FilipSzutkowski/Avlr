const Button = ({ children, title, className, onClick, disabled }) => {
  return (
    <button
      className={className ?? null}
      onClick={onClick ?? null}
      disabled={disabled ?? null}
    >
      {title && <span>{title}</span>}
      {children ?? null}
    </button>
  );
};

export default Button;
