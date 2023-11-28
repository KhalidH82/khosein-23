"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

import emailjs from "@emailjs/browser";

const ClientForm = () => {
  const form = useRef(null);
  const router = useRouter();
  const [clientInfo, setClientInfo] = useState({
    firstName: "",
    lastName: "",
    primaryContactEmail: "",
    primaryContactPhone: "",
    companyName: "",
    companyLogo: "",
    companyType: "",
    servicesOffered: "",
    primaryColor: "#ffffff",
    secondaryColor: "#ffffff",
    typeOfUsers: [],
    contactInformation: "",
    siteDomain: "",
    specificFeatures: "",
    admiredWebsites: "",
    otherRequirements: "",
  });

  const industryOptions = [
    "Agriculture & Forestry/Wildlife Extermination/Pest Control",
    "Business & Information Consultant",
    "Construction/Utilities/Contracting",
    "Education",
    "Finance & Insurance",
    "Food & Hospitality",
    "Gaming",
    "Health Services",
    "Motor Vehicle",
    "Natural Resources/Environmental",
    "Other",
    "Personal Services",
    "Real Estate & Housing",
    "Safety/Security & Legal",
    "Transportation",
  ];

  const businessTypeOptions = {
    "Agriculture & Forestry/Wildlife Extermination/Pest Control": [
      "Farming(Animal Production)",
      "Farming(Crop Production)",
      "Fishing/Hunting",
      "Landscape Services",
      "Lawn care Services",
      "Other (Agriculture & Forestry/Wildlife)",
    ],
    "Business & Information Consultant": [
      "Employment Office",
      "Fundraisers",
      "Going out of Business Sales",
      "Marketing/Advertising",
      "Non Profit Organization",
      "Notary Public",
      "Online Business",
      "Other (Business & Information)",
      "Publishing Services",
      "Record Business",
      "Retail Sales",
      "Technology Services",
      "Telemarketing",
      "Travel Agency",
      "Video Production",
    ],
  };

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
    setBusinessType(""); // Reset business type when industry changes
  };

  const handleBusinessTypeChange = (event) => {
    setBusinessType(event.target.value);
  };

  const handleChange = (field, value) => {
    setClientInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (field, value) => {
    setClientInfo((prevInfo) => {
      const updatedArray = prevInfo[field].includes(value)
        ? prevInfo[field].filter((item) => item !== value)
        : [...prevInfo[field], value];

      return {
        ...prevInfo,
        [field]: updatedArray,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => router.push("/"))
      .catch((error) => alert(error));

    sendEmail();
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.EMAIL_JS_SERVICE_ID,
        process.env.EMAIL_JS_TEMPLATE_ID,
        "#form",
        process.env.EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-bg p-10 w-full h-full">
      <form
        id="form"
        name="nzrDigital"
        method="POST"
        data-netlify="true"
        enctype="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="nzrDigital" />

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
          <div>
            <label className="label">First Name</label>
            <input
              name="firstName"
              type="text"
              value={clientInfo.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="input w-full bg-ship-cove-100"
              required
            />
          </div>

          <div>
            <label className="label">Last Name</label>
            <input
              name="lastName"
              type="text"
              value={clientInfo.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="input w-full bg-ship-cove-100"
              required
            />
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
          <div>
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              value={clientInfo.primaryContactEmail}
              onChange={(e) =>
                handleChange("primaryContactEmail", e.target.value)
              }
              className="input w-full bg-ship-cove-100"
              required
            />
          </div>

          <div>
            <label className="label">Phone</label>
            <input
              name="phone"
              type="tel"
              value={clientInfo.primaryContactPhone}
              onChange={(e) =>
                handleChange("primaryContactPhone", e.target.value)
              }
              className="input w-full bg-ship-cove-100"
              required
            />
          </div>
        </div>

        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-5">
          <div>
            <label className="label">Company Name</label>
            <input
              name="company-name"
              type="text"
              value={clientInfo.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              className="input w-full bg-ship-cove-100"
              required
            />
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
            <div>
              <label className="label">Company Logo</label>
              <input
                name="company-logo"
                type="file"
                value={clientInfo.companyLogo}
                accept=".jpg,.png,.jpeg"
                className="file-input file- w-full max-w-xs bg-ship-cove-100"
                onChange={(e) => handleChange("companyLogo", e.target.value)}
              />
            </div>
            <div>
              <label className="label">Company/Brand Colors</label>
              <div className="flex gap-2 items-center">
                <div className="w-1/2">
                  <input
                    name="primary-color"
                    type="color"
                    value={clientInfo.primaryColor}
                    className="w-full"
                    onChange={(e) =>
                      handleChange("primaryColor", e.target.value)
                    }
                  />
                  <label className="label pt-0">Primary Color</label>
                </div>
                <div className="w-1/2">
                  <input
                    name="secondary-color"
                    type="color"
                    value={clientInfo.secondaryColor}
                    className="w-full"
                    onChange={(e) =>
                      handleChange("secondaryColor", e.target.value)
                    }
                  />
                  <label className="label pt-0">Secondary Color</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
          <div>
            <label className="label">Services Offered</label>
            <textarea
              name="services"
              class="textarea  h-24 w-full bg-ship-cove-100"
              placeholder="What services does your business offer to your clients?"
              value={clientInfo.servicesOffered}
              onChange={(e) => handleChange("servicesOffered", e.target.value)}
            ></textarea>
          </div>

          <div>
            <label className="label">
              Any specific features or functionalities required on the website?
            </label>
            <textarea
              name="features"
              class="textarea h-24 w-full bg-ship-cove-100"
              placeholder=""
              value={clientInfo.specificFeatures}
              onChange={(e) => handleChange("specificFeatures", e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
          <div>
            <label className="label">
              Are there any specific competitors or websites that we can take
              inspiration from?
            </label>
            <textarea
              name="competitors"
              class="textarea h-24 w-full bg-ship-cove-100"
              placeholder=""
              value={clientInfo.admiredWebsites}
              onChange={(e) => handleChange("admiredWebsites", e.target.value)}
            ></textarea>
          </div>

          <div>
            <label className="label">
              Any other specific requirements or preferences for the website?
            </label>
            <textarea
              name="requirements"
              class="textarea h-24 w-full bg-ship-cove-100"
              placeholder=""
              value={clientInfo.otherRequirements}
              onChange={(e) =>
                handleChange("otherRequirements", e.target.value)
              }
            ></textarea>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="btn border-none bg-ship-cove-500 text-white w-36 mt-5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
