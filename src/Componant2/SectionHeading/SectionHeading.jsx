const SectionHeading = ({ title, isCenter }) => {
  return (
    <div className="w-fit group">
      <p className="text-base sm:text-lg leading-[30px] text-Manrope font-normal font-Lobster">
        {title}
      </p>
      <div
        className={`w-10 group-hover:w-full transition-all duration-500 ease h-[3px] bg-aquamarine mt-[6px] ${
          isCenter ? "mx-auto" : ""
        }`}
      ></div>
    </div>
  );
};

export default SectionHeading;
