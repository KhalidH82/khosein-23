"use client";
import React from "react";
import AnimatedElement from "../components/AnimatedElement";
import { prompt, josefin } from "../app/fonts";

const Clients = ({ client }) => {
  return (
    <div className="py-24">
      {client.map((c) => (
        <>
          <p className={`uppercase text-right mb-5 ${josefin.className}`}>
            Client
          </p>
          <div className="card bg-ship-cove-200 p-5 drop-shadow-2xl">
            <a
              href={c.link}
              className="flex items-center justify-end underline lg:no-underline"
            >
              <button className="hidden lg:block">
                <img
                  src="/images/arrow-left.svg"
                  className="w-24 h-24 object-contain px-5"
                />
              </button>
              <div className="flex flex-col relative top-3">
                <h2 className={`font-bold leading-[1.3] ${prompt.className}`}>
                  {c.name}
                </h2>
                <p className={`uppercase text-right ${josefin.className}`}>
                  {c.date}
                </p>
              </div>
            </a>
            <div className="mt-5">
              <p className={`text-xl leading-1 ${josefin.className}`}>
                {c.description}
              </p>
            </div>
            <div className="mt-5">
              {c.testimonials.map((testimonial) => (
                <div className="flex">
                  <div className="avatar online h-20 mt-2">
                    <div className="hover:ring-4 relative">
                      <img
                        className="rounded-full"
                        src={c.icon}
                        alt="Khalid Hosein"
                      />
                    </div>
                  </div>
                  <div className="chat chat-start">
                    <div className="chat-bubble bg-ship-cove-500">
                      <p
                        className={`text-base leading-1 p-2 text-ship-cove-100 ${josefin.className}`}
                      >
                        {testimonial}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Clients;
