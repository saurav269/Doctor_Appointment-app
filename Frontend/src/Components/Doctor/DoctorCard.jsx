import React from "react";
import starIcon from '../../assets/images/Star.png'
const DoctorCard = ({ ele }) => {
  const {
    name,
    specialization,
    avgRating,
    totalRating,
    photo,
    totalPatients,
    hospital,
  } = ele;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img
          src={photo}
          alt=""
          className="w-full"
          style={{ borderRadius: "16px" }}
        />
      </div>

      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[600] mt-[3] lg:mg-5">
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
          {specialization}
        </span>

        <div className="flex items-center gap-[6px] text-[14px]">
            <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                <img src={starIcon} alt='t'/>{avgRating}
            </span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
