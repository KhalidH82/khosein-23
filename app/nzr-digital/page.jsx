"use client";
import React, { useState } from "react";
import Image from "next/image";
import { prompt, josefin } from "../../app/fonts";
import { calcLength } from "framer-motion";

const page = () => {
    const [selectedRadio, setSelectedRadio] = useState("1");

    const handleRadioClick = (name) => {
      setSelectedRadio(name === selectedRadio ? null : name);
    };

  return (
    <div className="container px-52 mx-auto py-16">
      <div className="w-full flex justify-center">
        <a className="logo" href="/" target="_self">
          <Image
            src="/images/1.png"
            width={150}
            height={150}
            alt="Khalid Hosein"
          />
        </a>
      </div>
      <div>
        <p className={`my-16 ${prompt.className}`}>
          I’m excited to work with you and express my enthusiasm for the
          opportunity to collaborate on the development of your company's online
          presence. As a seasoned freelance web developer, I bring a wealth of
          experience and a commitment to delivering high-quality, tailored
          solutions that align with your unique business objectives.
        </p>
        <div>
          <h2 className={`font-bold leading-none my-8 ${prompt.className}`}>
            Our Services
          </h2>
          <p className={`mb-8 ${prompt.className}`}>
            At NZR Digital, we specialize in a range of services designed to
            elevate your online presence and drive tangible results. Here's a
            brief overview of what we can offer:
          </p>
        </div>

        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-ship-cove-100">
            <input
              type="radio"
              name="1"
              checked={selectedRadio === "1" ? "checked" : ""}
              onClick={() => handleRadioClick("1")}
            />
            <div className="collapse-title text-xl font-medium bg-ship-cove-800 text-white">
              <h3 className={`uppercase ${josefin.className}`}>
                Website/Template Design:
              </h3>
            </div>
            <div className="collapse-content">
              <p className={`pt-4 ${prompt.className}`}>
                Creating visually appealing and user-friendly websites that
                leave a lasting impression on your visitors.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input
              type="radio"
              name="2"
              checked={selectedRadio === "2" ? "checked" : ""}
              onClick={() => handleRadioClick("2")}
            />
            <div className="collapse-title text-xl font-medium bg-ship-cove-800 text-white">
              <h3 className={`uppercase ${josefin.className}`}>
                Content Creation
              </h3>
            </div>
            <div className="collapse-content">
              <p className={`pt-4 ${prompt.className}`}>
                Crafting compelling and relevant content is key to engaging your
                audience. We can develop content that not only showcases your
                brand but also resonates with your target audience.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input
              type="radio"
              name="3"
              checked={selectedRadio === "3" ? "checked" : ""}
              onClick={() => handleRadioClick("3")}
            />
            <div className="collapse-title text-xl font-medium bg-ship-cove-800 text-white">
              <h3 className={`uppercase ${josefin.className}`}>
                Content Management Systems (CMS/Wordpress/Shopify)
              </h3>
            </div>
            <div className="collapse-content">
              <p className={`pt-4 ${prompt.className}`}>
                We implement robust CMS solutions, empowering you to
                effortlessly manage and update your website content, ensuring it
                remains fresh and relevant.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input
              type="radio"
              name="4"
              checked={selectedRadio === "4" ? "checked" : ""}
              onClick={() => handleRadioClick("4")}
            />
            <div className="collapse-title text-xl font-medium bg-ship-cove-800 text-white">
              <h3 className={`uppercase ${josefin.className}`}>
                SEO (Search Engine Optimization)
              </h3>
            </div>
            <div className="collapse-content">
              <p className={`pt-4 ${prompt.className}`}>
                Achieving visibility on search engines is crucial in today's
                digital landscape. Our SEO strategies are tailored to improve
                your website's ranking, driving organic traffic and enhancing
                your online presence.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input
              type="radio"
              name="5"
              checked={selectedRadio === "5" ? "checked" : ""}
              onClick={() => handleRadioClick("5")}
            />
            <div className="collapse-title text-xl font-medium bg-ship-cove-800 text-white">
              <h3 className={`uppercase ${josefin.className}`}>E-commerce</h3>
            </div>
            <div className="collapse-content">
              <p className={`pt-4 ${prompt.className}`}>
                For businesses looking to establish or enhance their online
                storefront, we provide seamless e-commerce solutions that
                optimize user experience and streamline the purchasing process.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input
              type="radio"
              name="6"
              checked={selectedRadio === "6" ? "checked" : ""}
              onClick={() => handleRadioClick("6")}
            />
            <div className="collapse-title text-xl font-medium bg-ship-cove-800 text-white">
              <h3 className={`uppercase ${josefin.className}`}>
                Email and Social Media Marketing
              </h3>
            </div>
            <div className="collapse-content">
              <p className={`pt-4 ${prompt.className}`}>
                Harness the power of targeted marketing with our email and
                social media services. We can create and execute effective
                campaigns to engage your audience, drive conversions, and build
                a strong online community.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input
              type="radio"
              name="7"
              checked={selectedRadio === "7" ? "checked" : ""}
              onClick={() => handleRadioClick("7")}
            />
            <div className="collapse-title text-xl font-medium bg-ship-cove-800 text-white">
              <h3 className={`uppercase ${josefin.className}`}>
                Technical Requirements and Direction
              </h3>
            </div>
            <div className="collapse-content">
              <p className={`${prompt.className}`}>
                Navigating the technical landscape can be complex. Let us handle
                the intricacies of web development, ensuring your website meets
                the highest standards of functionality, security, and
                performance.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className={`font-bold leading-none my-8 ${prompt.className}`}>
            Our Approach
          </h2>
          <p className={`mb-8 ${prompt.className}`}>
            Our approach is rooted in collaboration. We work closely with our
            clients to understand their unique goals and challenges, allowing us
            to tailor our services to meet and exceed expectations. Your success
            is our priority, and we are committed to delivering a website that
            not only meets industry standards but also sets you apart from the
            competition.
          </p>
          <p className={`mb-8 ${prompt.className}`}>
            Thank you for considering NZR Digital as your web development
            partner. We look forward to the opportunity to discuss your project
            in more detail and explore how we can bring your vision to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
