"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="row sidesAuto">
          <div className="thanksPush col-xl-3 col-lg-4 col-md-5 col-sm-6 text-center">
            <h4 className="bolden">Thank you for your time</h4>
          </div>
          <div className="col-12">
            <div className="col-xl-5 col-lg-6 col-md-7 col-sm-12">
              <img
                className="ThankSvg"
                src="/Thanks.svg"
                alt="Thank you for your Feedback image"
              />
              <div className="recSvg"></div>
            </div>
          </div>
        </div>
        <div className="containerNew col-xl-3 col-lg-4 col-md-5 col-sm-6">
          <h4>You're done</h4>
          <p className="textCo">We received your feedback</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <button
            className="custom-buttonNew custom-buttonBlack custom-buttonnextDone"
            type="button"
            name="button"
            onClick={() => router.push("/")}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
