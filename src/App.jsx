import React from "react";
import "./index.css";


import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const projects = [
  {
    title: "Brand Identity Design",
    image: process.env.PUBLIC_URL + "/images/project1.jpg",
    description:
      "Complete brand identity for a boutique fashion label including logo, color palette, and typography.",
  },
  {
    title: "UI/UX for Mobile App",
    image: process.env.PUBLIC_URL + "/images/project2.jpg",
    description:
      "Designed user-friendly and modern UI for a fitness tracking app.",
  },
  {
    title: "Marketing Campaign Graphics",
    image: process.env.PUBLIC_URL + "/images/project3.jpg",
    description:
      "Crafted graphics for a social media campaign that increased engagement by 30%.",
  },
  {
    title: "E-commerce Product Design",
    image: process.env.PUBLIC_URL + "/images/project4.jpg",
    description: "Created product showcase visuals for an e-commerce store.",
  },
  {
    title: "Infographic Design",
    image: process.env.PUBLIC_URL + "/images/project5.jpg",
    description:
      "Designed informative and visually appealing infographics for a tech blog.",
  },
];

export default function Portfolio() {
  return (
    <div className="font-sans w-full">
      {/* Home Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 to-purple-200 text-center p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
          Alex Carter
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-700">
          I’m Alex Carter, a passionate graphic designer with a keen eye for
          detail and a flair for visual storytelling. With over five years of
          experience, I’ve helped brands create memorable visual identities,
          from logos and packaging to full-scale marketing campaigns. My work
          blends creativity with strategy, ensuring each design not only looks
          great but also delivers results. When I’m not designing, you’ll find
          me exploring typography trends or sketching new ideas. Let’s create
          something stunning together.
        </p>
      </section>

      {/* Projects Section */}
     <section className="pt-16 pb-24 px-6 bg-white w-full" id="projects">
  <h2 className="text-4xl font-bold text-center mb-12 text-black">Projects</h2>

  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000 }}
    className="max-w-5xl mx-auto"
  >
    {projects.map((project, index) => (
      <SwiperSlide key={index}>
        <div className="relative overflow-hidden rounded-xl shadow-md w-full" style={{ aspectRatio: '16 / 9' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-white text-lg md:text-2xl font-semibold mb-2 drop-shadow">
              {project.title}
            </h3>
            <p className="text-white text-sm md:text-xl drop-shadow">
              {project.description}
            </p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-100 text-center" id="contact">
        <h2 className="text-3xl font-bold mb-8 text-black">Contact</h2>
        <p className="mb-4 text-gray-700">
          Want to work together or have a question? Reach out!
        </p>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-xl bg-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-xl bg-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-xl bg-white h-32 resize-none"
            rows={4}
          ></textarea>
          <button className="w-full bg-purple-500 text-white hover:bg-purple-600 rounded-xl py-3 ">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
