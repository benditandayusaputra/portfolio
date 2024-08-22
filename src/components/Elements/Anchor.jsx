const Anchor = ({ target = "_self", ...props }) => {
  return (
    <a href={props.to} className="hover:opacity-70" target={target}>
      {props.children}
    </a>
  );
};

export default Anchor;
