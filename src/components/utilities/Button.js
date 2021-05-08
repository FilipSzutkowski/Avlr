const Button = ({
  children,
  title,
  className,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <button
      className={className ?? null}
      onClick={onClick ?? null}
      disabled={disabled ?? null}
      title={title}
      {...props}
    >
      {children ?? null}
    </button>
  );
};

export default Button;
