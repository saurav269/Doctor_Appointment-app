import React from "react";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Saurav Mallik
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          debitis vitae nemo distinctio veritatis impedit provident quam!
          Recusandae voluptatum explicabo labore saepe quod. Repellendus ipsa
          voluptates doloremque soluta hic fuga sunt voluptate maiores sed
          debitis? Distinctio, delectus cupiditate rerum non saepe, minima
          mollitia nisi dolor ullam totam, iure ratione enim.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 md-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                23Oct 2023
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-5 font-medium text-textColor">
                Apollo Hospital, INDIA
              </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
