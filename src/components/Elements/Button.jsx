const Button = ({
  onClick = () => {},
  outline = false,
  borderColor = "light",
  textColor = "light",
  children,
}) => {
  const className = `${
    outline ? "bg-transparent border" : "bg-black"
  } border-${borderColor} text-${textColor} px-6 py-2 rounded hover:opacity-70`;

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
