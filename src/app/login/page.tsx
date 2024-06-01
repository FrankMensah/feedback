"use client";

import { useFeedbackUiContext } from "@/context";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BeatLoader } from "react-spinners";

const page = () => {
  const { loginData, setLoginData, userToken, setUserToken }: any =
    useFeedbackUiContext();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLoginData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    setLoading(true);
    const response = await axios.post(
      "https://moha.pythonanywhere.com/account/login/",
      { ...loginData }
    );
    if (response?.data?.token?.access && response?.data?.token?.refresh) {
      setLoading(false);
      localStorage.setItem("token", response.data.token.access);
      setUserToken(response.data.token.access);
      router.push(`/admin?token=${response?.data?.token?.access}`);
    }

    console.log("dooooo", response);
  };

  return (
    <>
      <section>
        <div>
          <div>
            <div>
              <img
                src="/rectangle1412015-ysxc-600w.png"
                alt="Rectangle1412015"
                className="mac-book-pro164-rectangle141"
              />

              <div className="login-backg">
                <img
                  src="/image12015-dchs-200h.png"
                  alt="image12015"
                  className="mac-book-pro164-image1"
                />
                <p className="admin-text">Admin Page</p>

                <input
                  type="text"
                  className="email-in"
                  placeholder="Email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  className="password-in"
                  placeholder="Password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                />

                <div className="button-wrapper">
                  <button className="login-btn" onClick={handleLogin}>
                    {loading ? <BeatLoader color="snow" size={9} /> : "Login"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
