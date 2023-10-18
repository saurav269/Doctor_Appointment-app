import React from "react";
import aboutImg from "../../assets/images/D33.png";
import aboutCard from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ================About img=================== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img style={{ borderRadius: "5%" }} src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCard} alt="" />
            </div>
          </div>
          {/* =========================ABOUT CONTENT=========================== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              recusandae officiis pariatur asperiores corporis maiores non iusto
              commodi enim eaque laboriosam perspiciatis architecto
              reprehenderit et quam deleniti, est, distinctio dolorum.
            </p>

            <p className="text__para mt-[30px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.Minus
              adipisci, sequi illo non rem totam, maxime excepturi provident
              libero consectetur repellendus vel? Sapiente quod velit tempora
              enim repellat, architecto corporis!
            </p>

            <Link to='/'>
                <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
