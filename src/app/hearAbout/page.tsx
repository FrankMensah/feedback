"use client";

import { useFeedbackUiContext } from "@/context";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);

  const { money, restaurantData, setRestaurantData }: any =
    useFeedbackUiContext();

  const handleHearAboutChange = (event: any) => {
    setRestaurantData({
      ...restaurantData,
      hearAbout: event.target.value,
    });
  };

  const handleClickNext = async () => {
    setIsLoading(true);
    const response = await axios.post(
      "https://moha.pythonanywhere.com/guest/feedback/",
      {
        ...restaurantData,
        comment: 1,
        guest: 1,
      }
    );

    // router.push("feedback");
    console.log("data3", response);
    if (response.statusText == "Created") {
      setIsLoading(false);
      router.push(`/feedback?id=${response.data.guest}`);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="row sidesAuto">
          <div className="col-xl-5 col-lg-6 col-md-7 col-sm-12">
            <div className="Qleft">
              <h3>Questionnaire</h3>
            </div>

            <div className="Qright">
              <a href="CheckInOut.html">
                <i className="fa-solid fa-arrow-left"></i>
              </a>
            </div>
          </div>

          <div className="col-12"></div>

          <div className="col-xl-4 col-lg-5 col-md-7 col-sm-12 text-center">
            <div className="col-sm-12">
              <h4>Restaurant</h4>
            </div>

            <div className="rectangle">
              <div className="rectangleProgress"></div>
            </div>
          </div>
        </div>

        <div className="containerAlign">
          <div className="col-sm-12 col-md-7 col-lg-6 col-xl-4">
            <p className="textCo">
              Please answer the question to your best understanding to help us
              upgrade our service to you
            </p>
          </div>
          <div className="container-fluid">
            <div className="col-sm-12 col-md-7 col-lg-6 col-xl-4 deepBlackp">
              <h5>How did you hear about us?</h5>
            </div>

            <div className="col-12"></div>

            <div className="col-xl-4 col-lg-5 col-md-7 col-sm-12">
              <div className="col-sm-12">
                <p>Select how you heard about us</p>
              </div>
            </div>

            <div className="col-12">
              <div className="col-sm-12 col-md-7 col-lg-6 col-xl-4">
                <select
                  id="dropdown-menu"
                  value={restaurantData.hearAbout}
                  onChange={handleHearAboutChange}
                >
                  <option value="Friends / Families">Friends / Families</option>
                  <option value="Facebook">Facebook</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Twitter / x">Twitter / X</option>
                  <option value="Youtube">Youtube</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <a onClick={handleClickNext}>
            <button
              className="custom-buttonNew custom-buttonBlack custom-buttonnexthear"
              type="button"
              name="button"
            >
              {loading ? "loadin...." : "Next"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
