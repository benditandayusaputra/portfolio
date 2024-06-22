const Anchor = ({ target = "_self", ...props }) => {
  return (
    <a href={props.to} className="hover:opacity-70" target={props.target}>
      {props.children}
    </a>
  );
};

export default Anchor;
