const Link = (props) => {
  return (
    <a href={props.to} className="hover:text-sky-400" target="_blank">
      {props.children}
    </a>
  );
};

export default Link;
