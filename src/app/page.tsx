"use client";

import Link from "next/link";
import styles from "./home.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("info");
  };

  return (
    <main className={styles.main}>
      <section>
        <div className="row">
          <div className="row sidesAuto">
            <div className="col-xl-5 col-lg-6 col-md-7 col-sm-12">
              <h3>Welcome</h3>
            </div>

            <div className="col-12"></div>

            <div className="col-xl-4 col-lg-5 col-md-7 col-sm-12">
              <div className="col-sm-12">
                <p>
                  Please give us your service back on our
                  <br />
                  services to you. Thank you
                </p>
              </div>
            </div>

            <div className="containerAlign">
              <div className="col-sm-6 col-md-6 col-lg-4 text-center">
                <a
                  onClick={handleNavigation}
                  // href="yourInfo.html"
                  id="restaurantLink"
                  className="custom-button"
                >
                  <i className="fa-solid fa-utensils movOutlet movO"></i>{" "}
                  Restaurant
                </a>

                <a href="#" id="receptionLink" className="custom-button">
                  {" "}
                  <i className="fa-solid fa-handshake-angle movOutlet movT"></i>
                  Reception / Front
                </a>

                <a href="#" id="roomLink" className="custom-button">
                  {" "}
                  <i className="fa-solid fa-building movOutlet movTh"></i>Rooms
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <button
                className="custom-buttonNew custom-buttonexit"
                type="button"
                name="button"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
