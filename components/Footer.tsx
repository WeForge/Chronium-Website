"use client";

import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../assets/botStatus.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Run animation only once
    });
  }, []);

  return (
    <div>
      <footer>
        <div className="footer-sec1" data-aos="fade-up" data-aos-duration="1500">
          <div className="footer-header">
            <ul>
              <li>
                <Link href="/" className="h-color">
                  Chronium
                </Link>
                <span
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  Bot is online!
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <p
              className="text-xxs text-white text-center py-1 px-4 bg-purple-600 rounded-full w-fit border-1 border-purple-500 md:m-auto font-mono md:font-sans"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <i className="ri-heart-line"></i> Chronium Is Made By The WeForge Team!
            </p>
          </div>
        </div>
        <div className="footer-sec2" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500">
          <hr />
          <div>
            <p className="p-color" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
              Head Developer{" "}
              <Link
                href="https://github.com/Zack-911"
                className="h-color no-decoration"
                target="_blank"
              >
                Zack-911
              </Link>
            </p>
            <p className="p-color" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">
              {year} &copy; All rights reserved!
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        footer {
          background-color: #1111128b;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          display: flex;
          padding: 1.8rem 2rem;
          border-radius: 3px;
          flex-wrap: wrap;
          margin: 1.4rem;
          justify-content: space-between;
          flex-direction: row;
          width: auto;
          background-color: #2e2b2d52;
          backdrop-filter: blur(6px);
          border-radius: 15px;
        }

        .footer-header a {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .footer-header ul {
          list-style: none;
          flex-wrap: wrap;
          display: flex;
          flex-direction: column;
        }

        .footer-header ul li {
          padding: 0.6rem;
        }

        .footer-header ul li a {
          font-size: 0.9rem;
          text-decoration: none;
          transition: 0.3s all ease-in-out;
        }

        .footer-header ul li a:hover {
          color: #e7e7e7;
        }

        .mt-2 {
          margin-top: 0.5rem;
        }

        .text-xxs {
          font-size: 0.7rem;
        }

        .text-white {
          color: #fff;
        }

        .text-center {
          text-align: center;
        }

        .py-1 {
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }

        .px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .bg-purple-600 {
          background-color: #6b46c1;
        }

        .rounded-full {
          border-radius: 9999px;
        }

        .w-fit {
          width: fit-content;
        }

        .border-1 {
          border-width: 1px;
        }

        .border-purple-500 {
          border-color: #805ad5;
        }

        .md\:m-auto {
          margin: auto;
        }

        .font-mono {
          font-family: "Courier New", monospace;
        }

        .md\:font-sans {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        }

        .text-gray-300 {
          color: #e2e8f0;
        }

        .footer-sec2 hr {
          margin: 1rem 0;
          width: 20%;
          opacity: 20%;
        }

        .footer-sec2 p {
          font-size: 0.9rem;
          margin: 0.5rem 0;
        }

        .footer-sec2-link a {
          font-size: 0.9rem;
          padding: 0.6rem;
        }

        .footer-sec2-link {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default Footer;
