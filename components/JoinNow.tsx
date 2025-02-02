"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const JoinNow: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animation only once
    });
  }, []);

  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          margin: "7rem 0",
          backgroundColor: "#2b2b2e52",
          backdropFilter: "blur(6px)",
          borderRadius: "15px",
        }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.9rem",
            margin: "1rem",
            color: "#eee",
          }}
          data-aos="slide-left"
          data-aos-duration="1200"
        >
          <h3>Join us now!</h3>
        </div>
        <div
          style={{
            marginBottom: "2rem",
            fontSize: "0.9rem",
            color: "#ddd",
          }}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          Invite Chronium to your Discord server!
        </div>
        <button
          style={{
            padding: "0.8rem 2rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#6b46c1",
            color: "#fff",
            fontSize: "1rem",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#805ad5")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#6b46c1")
          }
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <Link
            href="https://discord.com/oauth2/authorize?client_id=1288827343581872259&permissions=8&integration_type=0&scope=bot+applications.commands"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Invite now!
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
