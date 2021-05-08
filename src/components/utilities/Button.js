const Button = ({ children, title, className, onClick, disabled }) => {
  return (
    <button
      className={className ?? null}
      onClick={onClick ?? null}
      disabled={disabled ?? null}
      title={title}
    >
      {children ?? null}
    </button>
  );
};

export default Button;
