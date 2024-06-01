"use client";

import Ambiance from "@/components/Ambiance";
import BeverageVariety from "@/components/BeverageVariety";
import BillPresentation from "@/components/BillPresentation";
import Comments from "@/components/Comments";
import FoodQuality from "@/components/FoodQuality";
import FoodVariety from "@/components/FoodVariety";
import ManagementVisibility from "@/components/ManagementVisibility";
import OverAllExperience from "@/components/OverAllExperience";
import RecommendStaff from "@/components/RecommendStaff";
import WaiterService from "@/components/WaiterService";
import WelcomeOnArrival from "@/components/WelcomeOnArrival";
import { useFeedbackUiContext } from "@/context";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();

  /*
WelcomeOnArrival
Comments
FoodQuality
Ambiance
OverAllExperience

*/

  const [currentStep, setCurrentStep] = useState(0);
  const { restaurantQuestion, restaurantData }: any = useFeedbackUiContext();
  const [loading, setIsLoading] = useState(false);

  const components = [
    <WelcomeOnArrival />,
    <WaiterService />,
    <BeverageVariety />,
    <FoodQuality />,
    <FoodVariety />,
    <Ambiance />,
    <BillPresentation />,
    <ManagementVisibility />,
    <OverAllExperience />,
    <RecommendStaff />,
    <Comments />,
  ];

  const handleNextClick = async () => {
    if (currentStep < components.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const data1 = {
        ...restaurantQuestion,
        ...restaurantData,
      };
      setIsLoading(true);
      const response = await axios.post(
        "https://moha.pythonanywhere.com/guest/feedback/",
        {
          ...restaurantQuestion,
          comment: 1,
          guest: 2,
        }
      );
      console.log("final ", restaurantQuestion);
      console.log("finalData", response);
      if (response.statusText == "Created") {
        setIsLoading(false);
        router.push("/thankyou");
      }
    }
  };

  const progressPercentage = ((currentStep + 1) / components.length) * 100;

  const handleBackClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="row sidesAuto">
            <div className="col-xl-5 col-lg-6 col-md-7 col-sm-12">
              <div className="Qleft">
                <h3>Questionnaire</h3>
              </div>

              <div className="Qright">
                <a onClick={handleBackClick}>
                  <i className="fa-solid fa-arrow-left"></i>
                </a>
              </div>
            </div>

            <div className="col-12"></div>

            <div className="col-xl-4 col-lg-5 col-md-7 col-sm-12 text-center">
              <div className="col-sm-12">
                <h4>Restaurant</h4>
              </div>

              {/* <div className="rectangle">
                <div className="rectangleProgress"></div>
              </div> */}

              <div
                className="rectangle"
                style={{
                  // backgroundColor: "#e0e0e0",
                  height: "16px",
                  borderRadius: "10px",
                  // overflow: "hidden",
                }}
              >
                <div
                  className="rectangleProgress"
                  style={{
                    width: `${progressPercentage}%`,
                    backgroundColor: "#f246a3",
                    height: "100%",
                    transition: "width 0.3s ease-in-out",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="containerAlign">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <p className="textCo">
                Please answer the question to your best understanding to help us
                upgrade our service to you
              </p>
            </div>
          </div>
        </div>

        {/* <WelcomeOnArrival /> */}
        {components[currentStep]}

        <div className="row">
          <div className="col-sm-12">
            <a onClick={handleNextClick}>
              <button
                className="custom-buttonNew custom-buttonBlack custom-buttonnextfeed"
                type="button"
                name="button"
              >
                {loading ? "Loading..." : "Next"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
