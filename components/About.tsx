"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animation only once
    });
  }, []);

  return (
    <>
      <style jsx>{`
        .about-section {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          background-color: #2b2b2e52; /* Add semi-transparent background similar to navbar */
          backdrop-filter: blur(6px); /* Apply the same blur effect */
          border-radius: 15px; /* Optional, to match navbar's rounded corners */
          padding: 2rem;
          margin: 2rem;
        }

        .about-section h3 {
          color: #eee;
          text-align: center;
          font-weight: bold;
          font-size: 1.9rem;
        }

        .about-container {
          padding: 2rem;
          flex-wrap: wrap;
          width: auto;
          margin: 2rem;
          background-color: #1111128b; /* Maintain semi-transparent background for containers */
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px); /* Maintain separate blur for containers */
          border-radius: 5px;
        }

        .about-card h4 {
          font-weight: normal;
          font-size: 1.2rem;
          padding: 0.3rem;
        }
        .about-card p {
          font-size: 0.8rem;
          padding: 0.3rem;
        }
        .about-card hr {
          width: 40%;
          margin: 0.7rem 0.3rem;
          opacity: 10%;
        }

        .about-stats {
          margin-top: 4rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .about-stats-card {
          margin: 1rem;
          padding: 1rem;
        }

        .about-stats-card h4 {
          font-size: 1.6rem;
        }
      `}</style>

      <section className="about-section" id="about-section">
        <div data-aos="fade-up">
          <h3>Why Use Chronium?</h3>
        </div>

        <div className="about-container">
          <div className="about-card">
            <div data-aos="fade-up">
              <h4>⚡ Commands</h4>
              <p>
                Bot is still in development. Will be shown here after initial
                development phase.
              </p>
              <hr />
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h4>✉️ 24/7 Support</h4>
              <p>
                Bot is still in development. Will be shown here after initial
                development phase.
              </p>
              <hr />
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <h4>✏️ Customization</h4>
              <p>
                Bot is still in development. Will be shown here after initial
                development phase.
              </p>
              <hr />
            </div>

            <div data-aos="fade-up" data-aos-delay="600">
              <h4>💰 Price</h4>
              <p>100% Free</p>
              <hr />
            </div>
          </div>
        </div>

        <p data-aos="fade-up" data-aos-delay="800">
          <Link href="/docs">Check out Commands &rarr;</Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card" data-aos="slide-right">
            <h4>2</h4>
            <p>Total Servers</p>
          </div>
          <div className="about-stats-card" data-aos="slide-up" data-aos-delay="200">
            <h4>60+</h4>
            <p>Total Users</p>
          </div>
          <div className="about-stats-card" data-aos="slide-left" data-aos-delay="400">
            <h4>20+</h4>
            <p>Total Commands</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
