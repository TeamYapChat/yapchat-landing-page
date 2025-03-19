import "aos/dist/aos.css";


const FeatureSection = ({
  sideJustify,
  title,
  body,
  src,
}: {
  sideJustify: string;
  title: string;
  body: string;
  src: string;
}) => {
  if (sideJustify === "left") {
    return (
      <div data-aos="fade-right" className="chat chat-start flex w-full justify-start mb-50">
        <div className="chat-bubble flex w-screen items-center justify-around rounded-xl bg-white/35 p-8 backdrop-blur-xl">
          <div className="mr-8">
            <h2 className="text-5xl font-bold text-blue-900">{title}</h2>
            <p className="text-xl text-blue-900">{body}</p>
          </div>
          <img src={src} className="rounded-xl" />
        </div>
      </div>
    );
  } else if (sideJustify === "right") {
    return (
      <div data-aos="fade-left" className="chat chat-end flex w-full justify-end mb-50">
        <div className="chat-bubble flex w-screen items-center justify-around rounded-xl bg-white/35 p-8 backdrop-blur-xl">
          <img src={src} className="rounded-xl" />
          <div className="ml-8">
            <h2 className="text-5xl font-bold text-blue-900">{title}</h2>
            <p className="text-xl text-blue-900">{body}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default FeatureSection;
