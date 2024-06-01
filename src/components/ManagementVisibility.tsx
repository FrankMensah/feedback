"use client";

import { useFeedbackUiContext } from "@/context";
import React, { useState } from "react";

const ManagementVisibility = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const { restaurantQuestion, setRestaurantQuestions }: any =
    useFeedbackUiContext();

  const handleItemClick = (value: any) => {
    setSelectedValue(value);
    setRestaurantQuestions((prevData: any) => ({
      ...prevData,
      managementVisibility: value,
    }));
  };

  return (
    <div className="container-fluid">
      <div className="col-sm-12 col-md-7 col-lg-6 col-xl-3 deepBlackp">
        <h5>Management Visibility</h5>
      </div>

      <div className="col-12"></div>

      <div className="col-xl-4 col-lg-5 col-md-7 col-sm-12">
        <div className="col-sm-12">
          <p>Select your rating of our Service</p>
        </div>
      </div>

      <div className="col-12">
        <div className="col-sm-12 col-md-7 col-lg-6 col-xl-4">
          <div
            className={`text-center custom-button-feed ${
              selectedValue === "Excellent" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("Excellent")}
          >
            <i
              className={`fa-solid fa-circle mov ${
                selectedValue === "Excellent" ? "selected" : ""
              }`}
            ></i>
            Excellent
          </div>

          <div
            className={`text-center custom-button-feed ${
              selectedValue === "Good" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("Good")}
          >
            <i
              className={`fa-solid fa-circle mov ${
                selectedValue === "Good" ? "selected" : ""
              }`}
            ></i>
            Good
          </div>
          <div
            className={`text-center custom-button-feed ${
              selectedValue === "Fair" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("Fair")}
          >
            <i
              className={`fa-solid fa-circle mov ${
                selectedValue === "Fair" ? "selected" : ""
              }`}
            ></i>
            Fair
          </div>
          <div
            className={`text-center custom-button-feed ${
              selectedValue === "Poor" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("Poor")}
          >
            <i
              className={`fa-solid fa-circle mov ${
                selectedValue === "Poor" ? "selected" : ""
              }`}
            ></i>
            Poor
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementVisibility;
