"use client";

import { createContext, useContext, useMemo, useState } from "react";

const FeedbackUiContext = createContext({});

export const FeedbackUiLayoutProvider = ({ children }: any) => {
  const [restaurantData, setRestaurantData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    checkInDate: "",
    checkOutDate: "",
    hearAbout: "",
    welcomeOnArrival: "",
  });

  // 0597463174

  const [restaurantQuestion, setRestaurantQuestions] = useState({
    welcome: "",
    waiterService: "",
    beverageVariety: "",
    foodQuality: "",
    foodVariety: "",
    ambiance: "",
    billPresentation: "",
    managementVisibility: "",
    overallExperience: "",
    commendStaff: "",
    comments: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [money, setMoney] = useState(100);
  const [userToken, setUserToken] = useState(null);

  const memoValues = useMemo(
    () => ({
      restaurantData,
      setRestaurantData,
      restaurantQuestion,
      setRestaurantQuestions,
      money,
      setMoney,
      loginData,
      setLoginData,
      userToken,
      setUserToken,
    }),
    [
      restaurantData,
      setRestaurantData,
      money,
      restaurantQuestion,
      setRestaurantQuestions,
      loginData,
      setLoginData,
      userToken,
      setUserToken,
    ]
  );

  return (
    <FeedbackUiContext.Provider value={memoValues}>
      <div>{children}</div>
    </FeedbackUiContext.Provider>
  );
};

export function useFeedbackUiContext() {
  return useContext(FeedbackUiContext);
}
