'use client'
import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="container px-4 mx-auto py-16">
      <h2 className="text-center">Contact me</h2>
      <div className="h-full">
        <div></div>
        <div>
          <InlineWidget
            url="https://calendly.com/khalid-hosein/get-to-know-me"
            styles={{
              height: "1000px", // Adjust the height to prevent content overflow
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
