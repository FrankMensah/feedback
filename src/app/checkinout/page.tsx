"use client";
import { useFeedbackUiContext } from "@/context";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  const { money, restaurantData, setRestaurantData }: any =
    useFeedbackUiContext();

  const handleCheckInChange = (event: any) => {
    setRestaurantData({ ...restaurantData, checkInDate: event.target.value });
  };

  const handleCheckOutChange = (event: any) => {
    setRestaurantData({ ...restaurantData, checkOutDate: event.target.value });
  };

  const handleNextClick = () => {
    router.push("hearAbout");
    console.log("data data2", restaurantData);
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
              <a href="yourInfo.html">
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
              <h5>Check in date</h5>
            </div>

            <div className="col-12"></div>

            <div className="col-xl-4 col-lg-5 col-md-7 col-sm-12">
              <div className="col-sm-12">
                <p>Select check in date</p>
              </div>
            </div>

            <input
              type="date"
              id="custom-date-field-in"
              name="checkInDate"
              value={restaurantData.checkInDate}
              onChange={handleCheckInChange}
            />

            <div className="col-sm-12 col-md-7 col-lg-6 col-xl-4 deepBlackp">
              <h5>Check Out date</h5>
            </div>
            <div className="col-12"></div>

            <div className="col-xl-4 col-lg-5 col-md-7 col-sm-12">
              <div className="col-sm-12">
                <p>Select check out date</p>
              </div>
            </div>

            <input
              type="date"
              id="custom-date-field-out"
              name="checkOutDate"
              value={restaurantData.checkOutDate}
              onChange={handleCheckOutChange}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <a onClick={handleNextClick}>
            <button
              className="custom-buttonNew custom-buttonBlack custom-buttonnextn"
              type="button"
              name="button"
            >
              Next
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
