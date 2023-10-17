import React from "react";
import heroImg from '../assets/images/D22.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'

const Home = () => {
  return (
    <>
      {/* ========================HERO SECTION============================= */}
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* ======================HERO CONTENT================== */}

              <div>
                <div className="lg:w-[570px]">
                  <h2 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help Patients live a healthy, longer life.
                  </h2>
                  <p className="text_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                    laboriosam numquam. Rerum tempora animi iusto, voluptatem
                    vel qui dolore! Deleniti maiores mollitia soluta quia quos!
                    Assumenda quasi deserunt ipsa quae!
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>

                {/* ===================HERO COUNTER====================== */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      20+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] ">
                    </span>
                    <p className="text_para">Years of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      25+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] ">
                    </span>
                    <p className="text_para">Clinic Location</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] ">
                    </span>
                    <p className="text_para">Patients Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* ======================HERO CONTENT======================= */}
              <div className="flex gap-[30px] justify end">
                <div>
                  <img className="w-full" src={heroImg} alt='' />
                </div>
                <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt='' />
                <img className="w-full" src={heroImg03} alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
