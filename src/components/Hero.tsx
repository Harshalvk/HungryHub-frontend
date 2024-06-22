//
import banana from "../assets/banana.svg";
import apple from "../assets/apple.svg";
import heroImages from "../assets/hero-section-food-images.svg";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="md:mt-16 max-w-7xl mx-auto flex p-7">
        <div className="max-w-screen-md">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-medium leading-relaxed">
            Preminum <span className="text-orange-400">quality</span>
            <br />
            Food for your{" "}
            <img src={banana} alt="banana" className="inline-block h-12" />{" "}
            <span className="text-orange-400">Healty </span>
            <img src={apple} alt="banana" className="inline-block h-12" />{" "}
            <span className="text-orange-400">& Daily Life</span>
          </h1>
          <div className="mt-4 space-y-4 md:to-50%">
            <p className="text-sm md:text-lg text-gray-400 text-justify">
              Elevate your dining experience! Discover culinary delights with
              our seamless food delivery app. From top-rated restaurants to your
              doorstep, indulge in a world of flavors. Say goodbye to hunger
              pangs and hello to satisfaction. Join the food revolution today!
            </p>
          </div>
        </div>
      </div>
      <img
        src={heroImages}
        alt="hero food images"
        className="hidden xl:block h-96 absolute top-14 -right-28"
      />
    </div>
  );
};

export default Hero;
