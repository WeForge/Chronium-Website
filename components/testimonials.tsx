"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Import the Next.js Image component

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Server Admin",
    content: "Kiko San has revolutionized how we manage time in our community. It's a game-changer!",
    avatar: "",
  },
  {
    name: "Sarah Lee",
    role: "Community Manager",
    content: "The timezone features are incredibly helpful for our global team. Highly recommended!",
    avatar: "",
  },
  {
    name: "Mike Brown",
    role: "Event Organizer",
    content: "Scheduling events has never been easier. Kiko San is now an essential tool for us.",
    avatar: "",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-purple-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12" data-aos="fade-up">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            // Extract initials from the name
            const initials = testimonial.name
              .split(" ")
              .map((part) => part.charAt(0).toUpperCase())
              .join("");

            return (
              <motion.div
                key={index}
                className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 mb-4">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 mr-3 rounded-full overflow-hidden">
                    {testimonial.avatar ? (
                      // If avatar is provided, show the image
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        width={40} // Set width
                        height={40} // Set height
                      />
                    ) : (
                      // If no avatar, show initials with a grey background
                      <div className="w-full h-full bg-gray-500 text-white flex items-center justify-center text-lg font-semibold">
                        {initials}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
