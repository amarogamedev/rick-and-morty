interface CustomTitleProps {
  text: string;
}

const CustomTitle = ({text} : CustomTitleProps) => {
  return (
    <span className="text-5xl text-[#00B5CC] font-creepster" style={{
      WebkitTextStroke: "1px #B2DF28",
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"
    }}>
      {text}
    </span>
  );
};

export default CustomTitle;