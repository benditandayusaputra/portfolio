const Skill = (props) => {
  return (
    <div
      className={`cursor-pointer flex flex-col items-center border border-light bg-transparent p-4 rounded-lg text-light hover:opacity-70 ${props.addClass}`}
      onClick={props.onClick}
    >
      <div
        className="h-12 mb-4 text-4xl flex flex-row justify-center items-center"
        data-aos="zoom-in-up"
      >
        {props.children}
      </div>
      <span className="text-center" data-aos="zoom-in-up">
        {props.name}
      </span>
    </div>
  );
};

export default Skill;
