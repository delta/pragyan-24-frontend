const AboutCard = () => {
  const content = `Pragyan, the international techno-managerial organisation of NIT Trichy,
  which came into being in 2005, achieves just that by providing a
  platform for a multitude of students to showcase their technical
  ingenuity and prowess. Pragyan has come a long way since its inception,
  propelling the fields of science and technology toward greater heights.`;

  return (
    <div className="AboutCard h-fit sm:w-[85%] sm:h-[70%] md:w-[70%] md:h-[60%] lg:w-[60%] lg:h-[70%] xl:w-[45%] xl:h-[55%] flex justify-center items-center p-10 ">
      <p className="pt-3 max-lg:text-base">{content}</p>
    </div>
  );
};

export default AboutCard;
