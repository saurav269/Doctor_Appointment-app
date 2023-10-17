import React from "react";

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
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
