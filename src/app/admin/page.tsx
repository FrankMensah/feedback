"use client";

import { useFeedbackUiContext } from "@/context";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const DashboardPage = () => {
  const { userToken }: any = useFeedbackUiContext();
  //   const searchParams = useSearchParams();
  //   const token = searchParams.get("token");
  const [loading, setLoading] = useState(false);
  const [feedbackData, setFeedbackData] = useState<any>({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "https://moha.pythonanywhere.com/guest/feedback-stats/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("stasssss", response);
    if (response?.data?.feedback_stats) {
      setLoading(false);
      setFeedbackData(response.data);
    }
  };

  return (
    <>
      {/* {JSON.stringify(feedbackData)} */}
      <Suspense>
        <div className="header-space">
          <p className="adm-fed-sys">Admin Feedback System</p>

          <p className="adm-user-top">Admin</p>

          <p className="adm-signout-top">SignOut</p>
        </div>

        <div className="left-side">
          <input className="inputSearch" type="text" />
          <p className="list-side">All</p>

          <p className="list-side">Restaurant</p>

          <p className="list-side">Reception / Front office</p>

          <p className="list-side">Room</p>
        </div>

        <div className="right-heading">
          <p>
            Welcome <span className="nameHuge">Admin</span>
          </p>
        </div>

        <div className="numberSection">
          <div className="box">
            <p>Total feedback</p>
            <h1>{feedbackData?.feedback_stats?.total_feedback_count || 0}</h1>
          </div>
          <div className="box1">
            <p>Feedback with Comments</p>
            <h1>
              {feedbackData?.comment_feedback_stats
                ?.feedback_with_comments_count || 0}
            </h1>
          </div>
          <div className="box2">
            <p>Total Guest Satisfaction</p>
            <h1>
              {feedbackData?.feedback_stats?.satisfaction_per_guest?.length ||
                0}
            </h1>
          </div>
          <div className="box3">
            <p>Total Comment</p>
            <h1>376</h1>
          </div>
        </div>

        <div className="right-up-heading">
          <li className="headi-up">Date posted</li>
          <li className="headi-up">Full Name</li>
          <li className="headi-up">Email</li>
          <li className="headi-up">Phone</li>
          <li className="headi-up">Check in</li>
          <li className="headi-up">Check out</li>
          <li className="headi-up">Feedback</li>
          <li className="headi-up">Excellent</li>
          <li className="headi-up">Good</li>
          <li className="headi-up">Fair</li>
          <li className="headi-up">Poor</li>
        </div>

        <div className="right-down-heading">
          <div>
            <li className="headi-down">August 16, 2024</li>
            <li className="headi-down">Mohammed</li>
            <li className="headi-down">mohammed@gmail.com</li>
            <li className="headi-down">+233</li>
            <li className="headi-down">Check in</li>
            <li className="headi-down">Check out</li>
            <li className="headi-down">Feedback</li>
            <li className="headi-down">
              <input type="checkbox" name="" id="" />
            </li>
            <li className="headi-down">
              <input type="checkbox" name="" id="" />
            </li>
            <li className="headi-down">
              <input type="checkbox" name="" id="" />
            </li>
            <li className="headi-down">
              <input type="checkbox" name="" id="" />
            </li>
          </div>
        </div>

        <div>Coming soon</div>
      </Suspense>
    </>
  );
};

export default DashboardPage;

/*


{
  "count": 63,
  "next": "https://moha.pythonanywhere.com/guest/feedback/?page=2",
  "previous": null,
  "results": [
    {
      "id": 63,
      "comment_obj": {
        "id": 1,
        "name": "Welcome on Arrival",
        "description": "Welcome on Arrival",
        "outlet": 3
      },
      "guest_obj": {
        "id": 2,
        "first_name": "Levels",
        "last_name": "Kent",
        "email": "levelskent@gmail.com",
        "phone": "6176387732",
        "address": "ANT 123",
        "company": "Student",
        "head_about_us": "facebook"
      },
      "attachments_obj": [],
      "excellent": false,
      "good": false,
      "fair": false,
      "poor": false,
      "staff_to_recommend": null,
      "comments": "Fair",
      "comment": 1,
      "guest": 2
    },
    {
      "id": 62,
      "comment_obj": {
        "id": 1,
        "name": "Welcome on Arrival",
        "description": "Welcome on Arrival",
        "outlet": 3
      },
      "guest_obj": {
        "id": 1,
        "first_name": "Emmanuel",
        "last_name": "Nartey",
        "email": "aggrey.en@gmail.com",
        "phone": "013131",
        "address": "k",
        "company": "212",
        "head_about_us": "facebook"
      },
      "attachments_obj": [],
      "excellent": false,
      "good": false,
      "fair": false,
      "poor": false,
      "staff_to_recommend": null,
      "comments": "",
      "comment": 1,
      "guest": 1
    },
    {
      "id": 61,
      "comment_obj": {
        "id": 1,
        "name": "Welcome on Arrival",
        "description": "Welcome on Arrival",
        "outlet": 3
      },
      "guest_obj": {
        "id": 2,
        "first_name": "Levels",
        "last_name": "Kent",
        "email": "levelskent@gmail.com",
        "phone": "6176387732",
        "address": "ANT 123",
        "company": "Student",
        "head_about_us": "facebook"
      },
      "attachments_obj": [],
      "excellent": false,
      "good": false,
      "fair": false,
      "poor": false,
      "staff_to_recommend": null,
      "comments": "Good",
      "comment": 1,
      "guest": 2
    },
    {
      "id": 60,
      "comment_obj": {
        "id": 1,
        "name": "Welcome on Arrival",
        "description": "Welcome on Arrival",
        "outlet": 3
      },
      "guest_obj": {
        "id": 1,
        "first_name": "Emmanuel",
        "last_name": "Nartey",
        "email": "aggrey.en@gmail.com",
        "phone": "013131",
        "address": "k",
        "company": "212",
        "head_about_us": "facebook"
      },
      "attachments_obj": [],
      "excellent": false,
      "good": false,
      "fair": false,
      "poor": false,
      "staff_to_recommend": null,
      "comments": "",
      "comment": 1,
      "guest": 1
    },
    {
      "id": 59,
      "comment_obj": {
        "id": 1,
        "name": "Welcome on Arrival",
        "description": "Welcome on Arrival",
        "outlet": 3
      },
      "guest_obj": {
        "id": 2,
        "first_name": "Levels",
        "last_name": "Kent",
        "email": "levelskent@gmail.com",
        "phone": "6176387732",
        "address": "ANT 123",
        "company": "Student",
        "head_about_us": "facebook"
      },
      "attachments_obj": [],
      "excellent": false,
      "good": false,
      "fair": false,
      "poor": false,
      "staff_to_recommend": null,
      "comments": "Fair",
      "comment": 1,
      "guest": 2
    },
    {
      "id": 58,
      "comment_obj": {
        "id": 1,
        "name": "Welcome on Arrival",
        "description": "Welcome on Arrival",
        "outlet": 3
      },
      "guest_obj": {
        "id": 1,
        "first_name": "Emmanuel",
        "last_name": "Nartey",
        "email": "aggrey.en@gmail.com",
        "phone": "013131",
        "address": "k",
        "company": "212",
        "head_about_us": "facebook"
      },
      "attachments_obj": [],
      "excellent": false,
      "good": false,
      "fair": false,
      "poor": false,
      "staff_to_recommend": null,
      "comments": "",
      "comment": 1,
      "guest": 1
    },
    {
      "id": 57,
      "comment_obj": {
        "id": 1,
        "name": "Welcome on Arrival",
        "description": "Welcome on Arrival",
        "outlet": 3
      },
      "guest_obj": {
        "id": 2,
        "first_name": "Levels",
        "last_name": "Kent",
        "email": "levelskent@gmail.com",
        "phone": "6176387732",
        "address": "ANT 123",
        "company": "Student",
        "head_about_us": "facebook"
      },
      "attachments_obj": [],
      "excellent": false,
      "good": false,
      "fair": false,
      "poor": false,
      "staff_to_recommend": null,
      "comments": "Fair",
      "comment": 1,
      "guest": 2
    },
    {
      "id": 56,
      "comment_obj": {
        "id": 1,
        "name": "Welcome on Arrival",
        "description": "Welcome on Arrival",
        "outlet": 3
      },
      "guest_obj": {
        "id": 2,
        "first_name": "Levels",
        "last_name": "Kent",
        "email": "levelskent@gmail.com",
        "phone": "6176387732",
        "address": "ANT 123",
        "company": "Student",
        "head_about_us": "facebook"
      },
      "attachments_obj": [],
      "excellent": false,
      "good": false,
      "fair": false,
      "poor": false,
      "staff_to_recommend": null,
      "comments": "Excellent",
      "comment": 1,
      "guest": 2
    },
    {
      "id": 55,
      "comment_obj": {
        "id": 1,
        "name": "Welcome on Arrival",
        "description": "Welcome on Arrival",
        "outlet": 3
      },
      "guest_obj": {
        "id": 1,
        "first_name": "Emmanuel",
        "last_name": "Nartey",
        "email": "aggrey.en@gmail.com",
        "phone": "013131",
        "address": "k",
        "company": "212",
        "head_about_us": "facebook"
      },
      "attachments_obj": [],
      "excellent": false,
      "good": false,
      "fair": false,
      "poor": false,
      "staff_to_recommend": null,
      "comments": "",
      "comment": 1,
      "guest": 1
    },
    {
      "id": 54,
      "comment_obj": {
        "id": 1,
        "name": "Welcome on Arrival",
        "description": "Welcome on Arrival",
        "outlet": 3
      },
      "guest_obj": {
        "id": 2,
        "first_name": "Levels",
        "last_name": "Kent",
        "email": "levelskent@gmail.com",
        "phone": "6176387732",
        "address": "ANT 123",
        "company": "Student",
        "head_about_us": "facebook"
      },
      "attachments_obj": [],
      "excellent": false,
      "good": false,
      "fair": false,
      "poor": false,
      "staff_to_recommend": null,
      "comments": "",
      "comment": 1,
      "guest": 2
    }
  ]
}


*/
