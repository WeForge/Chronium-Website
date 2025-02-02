"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Showcase: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animation only once
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <main
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          height: "30rem",
          flexDirection: "column",
          margin: "0.5rem",
          backgroundColor: "#2e2b2d52",
          backdropFilter: "blur(6px)",
          borderRadius: "15px",
        }}
      >
        <header>
          <h1
            style={{
              fontWeight: 900,
              padding: "1rem",
              fontSize: "4.3rem",
              color: "#fff",
            }}
            data-aos="fade-up"
          >
            Chronium
          </h1>
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: "normal",
              marginTop: "1rem",
              marginBottom: "1rem",
              color: "#ddd",
            }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            One Discord Bot For Everything! 100% Free.
          </h2>
        </header>

        <section>
          <p
            style={{
              fontSize: "0.9rem",
              marginBottom: "1rem",
              color: "#ccc",
            }}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Chronium is a helpful, open-source Discord bot built to simplify tasks and bring a fun, interactive experience to your server.
          </p>
        </section>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <Link
            href="https://discord.com/oauth2/authorize?client_id=1288827343581872259&permissions=8&integration_type=0&scope=bot+applications.commands"
            target="_blank"
          >
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
              data-aos="slide-right"
            >
              Invite now!
            </button>
          </Link>

          <Link
            href="https://discord.gg/VEKEfzdyqh"
            target="_blank"
          >
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
              data-aos="slide-left"
            >
              Support Server
            </button>
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
