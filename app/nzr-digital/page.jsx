"use client";
import React, { useState } from "react";
import Image from "next/image";

import ClientForm from '../../components/ClientForm'

import { prompt, josefin } from "../../app/fonts";

const page = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleAccordionClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  const services = [
    {
      name: "1",
      title: "Website/Template Design",
      content:
        "Your website is often the first interaction a potential customer has with your business. We specialize in creating visually stunning and user-friendly websites that not only capture attention but also provide an intuitive and seamless user experience. Whether you're looking for a custom design or prefer to start with a pre-made template, our goal is to ensure your online presence reflects the unique identity and values of your business.",
      icon: "/images/webdev.png",
    },
    {
      name: "2",
      title: "Content Creation",
      content:
        "Compelling and relevant content is the heartbeat of any successful online presence. Our content creation services aim to tell your brand story effectively. From engaging website copy to captivating blog posts, we ensure that every piece of content resonates with your target audience, driving connection and conversions.",
      icon: "/images/content.png",
    },
    {
      name: "3",
      title: "Content Management Systems (CMS/Wordpress/Shopify)",
      content:
        "Managing and updating your website content should be a hassle-free experience. We specialize in implementing Content Management Systems (CMS) like WordPress and Shopify, empowering you to take control of your content without the need for technical expertise. Easily update text, images, and more, keeping your website fresh and up-to-date.",
      icon: "/images/cms.png",
    },
    {
      name: "4",
      title: "SEO (Search Engine Optimization)",
      content:
        "Being visible on search engines is crucial for attracting organic traffic. Our SEO services are tailored to improve your website's search engine ranking, making it easier for potential customers to find you. We employ proven strategies to optimize your content, meta tags, and other elements, ensuring your business stands out in search results",
      icon: "/images/webdev.png",
    },
    {
      name: "5",
      title: "E-commerce",
      content:
        "For businesses looking to establish or enhance their online storefront, we offer seamless e-commerce solutions. From user-friendly product catalogs to secure payment gateways, our goal is to create a smooth and secure shopping experience for your customers, ultimately boosting your online sales.",
      icon: "/images/ecomm.png",
    },
    {
      name: "6",
      title: "Email and Social Media Marketing",
      content:
        "Harness the power of targeted marketing with our email and social media services. We create and execute effective campaigns to engage your audience, drive conversions, and build a strong online community. From crafting compelling email newsletters to managing social media profiles, we help you stay connected with your audience.",
      icon: "/images/marketing.png",
    },
    {
      name: "7",
      title: "Technical Requirements and Direction",
      content:
        "Navigating the technical aspects of web development can be complex. Leave it to us to handle the intricacies of technical requirements and direction. From choosing the right hosting solution to ensuring optimal website performance and security, we provide the technical expertise needed to keep your online presence running smoothly.",
      icon: "/images/microservices.png",
    },
  ];

  return (
    <div className="container px-4 md:px-6 lg:px-8 xl:px-12 mx-auto py-10">
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
        <p className={`mt-16 mb-8 ${prompt.className}`}>
          I’m excited to work with you and express my enthusiasm for the
          opportunity to collaborate on the development of your company's online
          presence. As a seasoned freelance web developer, I bring a wealth of
          experience and a commitment to delivering high-quality, tailored
          solutions that align with your unique business objectives.
        </p>
        <div>
          <h2
            className={`font-bold leading-none mt-8 mb-3 ${prompt.className}`}
          >
            Our Services
          </h2>
          <p className={`mb-8 ${prompt.className}`}>
            At NZR Digital, we specialize in a range of services designed to
            elevate your online presence and drive tangible results. Here's a
            brief overview of what we can offer:
          </p>
        </div>

        <div className="join join-vertical w-full py-4">
          {services.map((item, index) => (
            <div
              key={item.name}
              className={`collapse collapse-arrow join-item ${
                index === selectedItem ? "open" : ""
              }`}
            >
              <input
                type="radio"
                name={item.name}
                checked={index === selectedItem}
                onClick={() => handleAccordionClick(index)}
              />
              <div
                className="collapse-title text-xl font-medium bg-ship-cove-900 text-white flex items-center justify-between"
                onClick={() => handleAccordionClick(index)}
              >
                <h3 className={`uppercase ${josefin.className}`}>
                  {item.title}
                </h3>
                <Image src={item.icon} width={50} height={50} alt="" />
              </div>
              <div className="collapse-content bg-ship-cove-100">
                <p className={`py-10 ${prompt.className}`}>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2
            className={`font-bold leading-none mt-8 mb-3 ${prompt.className}`}
          >
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

        <div>
          <h2
            className={`font-bold leading-none mt-8 mb-3 ${prompt.className}`}
          >
            Initial Requirements
          </h2>
          <p className={`mb-8 ${prompt.className}`}>
            As we embark on this exciting journey to create a tailored online
            presence for your company, it is imperative that we gather
            comprehensive insights to ensure our collaboration is rooted in a
            deep understanding of your unique needs and aspirations. To ensure
            that our collaboration aligns seamlessly with your vision, we kindly
            request your input on some initial requirements. Your insights will
            play a pivotal role in shaping a website that not only meets but
            exceeds your expectations.
          </p>
        </div>
        <div>
          <ClientForm />
        </div>
      </div>
    </div>
  );
};

export default page;
