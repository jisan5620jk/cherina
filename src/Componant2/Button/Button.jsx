/* eslint-disable react/prop-types */
const Button = ({
  bgColor,
  hoverBgColor,
  textColor,
  hoverTextColor,
  children,
}) => {
  return (
    <button
      className={`${textColor ? textColor : "text-white"} ${
        hoverTextColor ? "hover:text-white" : ""
      } font-Manrope text-base ${bgColor} px-10 py-4  rounded-full overflow-hidden relative group`}
    >
      <span
        className={`absolute w-44 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 ${hoverBgColor} top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out`}
      ></span>
      <span className="relative  ease flex items-center">{children}</span>
    </button>
  );
};

export default Button;
// new swipe button

export const ButtonSwipe = ({
  bgColor,
  beforeBgColor,
  textColor,
  hoverTextColor,
  children,
}) => {
  return (
    <button
      className={`font-Manrope ${bgColor} font-medium ${textColor} inline-block relative z-[1] overflow-hidden px-[34px] py-4 rounded-[30px] before:absolute before:content-[""] before:h-full before:w-0 ${beforeBgColor} before:transition-all before:duration-500 before:z-[-1] before:rounded-[30px] before:right-0 before:top-0 hover:${hoverTextColor} hover:before:w-full hover:before:left-0 group before:ease-in-out`}
    >
      <span className="flex items-center transition-all duration-500">
        {children}
      </span>
    </button>
  );
};
