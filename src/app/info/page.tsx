"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useFeedbackUiContext } from "@/context";

const YourInfo = () => {
  const router = useRouter();

  const { money, restaurantData, setRestaurantData }: any =
    useFeedbackUiContext();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRestaurantData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextClick = () => {
    router.push("checkinout");
    console.log("data ", restaurantData);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="row sidesAuto">
            <div className="col-xl-5 col-lg-6 col-md-7 col-sm-12">
              <div className="Qleft">
                <h3>Questionnaire</h3>
              </div>

              <div className="Qright">
                <a onClick={() => router.back()}>
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
                <h5>What is your name?</h5>
              </div>

              <input
                type="text"
                className="custom-text-field"
                placeholder="Enter your full name..."
                name="fullName"
                value={restaurantData.fullName}
                onChange={handleChange}
              />

              <div className="col-sm-12 col-md-7 col-lg-6 col-xl-4 deepBlackp">
                <h5>Your email</h5>
              </div>

              <input
                type="text"
                className="custom-text-field"
                placeholder="Enter your email..."
                name="email"
                value={restaurantData.email}
                onChange={handleChange}
              />

              <div className="col-sm-12 col-md-7 col-lg-6 col-xl-4 deepBlackp">
                <h5>Your phone number</h5>
              </div>

              <input
                type="text"
                className="custom-text-field"
                placeholder="Enter your phone number..."
                name="mobile"
                value={restaurantData.mobile}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <a>
              <button
                className="custom-buttonNew custom-buttonBlack custom-buttonnext"
                type="button"
                name="button"
                onClick={handleNextClick}
              >
                Next
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourInfo;
