"use client";

import { useRef, useState } from "react";
import { BsFillPersonFill, BsLinkedin } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import {
  MdOutgoingMail,
  MdOutlineAlternateEmail,
  MdOutlineFacebook,
  MdOutlineMail,
  MdOutlinePhone,
  MdPersonalInjury,
  MdShareLocation,
  MdTopic,
} from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTwitter } from "react-icons/fa";
import ContactIcon from "./ContactIcon"; // Import the ContactIcon component

const Contact = () => {
  const formRef = useRef();
  const [isDone, setIsDone] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1fjh2ko",
        "template_bz9zxmp",
        formRef.current,
        "cPffaiE6UITaalVHJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsDone(true);

          formRef.current.reset();

          // Display success toast message
          toast.success("Thanks, your message has been received", {
            position: toast.POSITION.TOP_CENTER,
          });

          window.location.href = "/";
        },
        (error) => {
          console.log(error.text);
          setIsError(true);

          // Display error toast message
          toast.error("An error occurred while sending the message", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
  };

  return (
    <div className="wrapper" id="contact">
      <h3 className="text-center">Contact Us</h3>

      {/* Form Section */}
      <div className="contact-us flex flex-col items-center justify-center md:flex-row gap-4">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full md:w-[50%]"
        >
          <label htmlFor="name" className="block text-sm font-medium">
            Name:
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BsFillPersonFill className="text-gray-400" />
            </span>
            <input
              type="text"
              id="name"
              name="user_name"
              className="focus:ring-indigo-500 focus:border-indigo-500  w-full pl-10 sm:text-sm border-gray-300 rounded-md h-10"
              placeholder="e.g Leo"
              required
              maxLength="15"
              minLength="5"
            />
          </div>

          <label htmlFor="email" className="block mt-4 text-sm font-medium ">
            Email:
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MdOutlineAlternateEmail className="text-gray-400" />
            </span>
            <input
              type="email"
              id="email"
              name="user_email"
              className="  focus:ring-indigo-500 focus:border-indigo-500 flex w-full pl-10 sm:text-sm border-gray-300 rounded-md h-10"
              placeholder="e.g leo2dworld@gmail.com"
            />
          </div>

          <label htmlFor="subject" className="block mt-4 text-sm font-medium ">
            Subject:
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MdTopic className="text-gray-400" />
            </span>
            <input
              type="text"
              id="subject"
              name="user_subject"
              className="focus:ring-indigo-500 focus:border-indigo-500 flex w-full pl-10 sm:text-sm border-gray-300 rounded-md h-10"
              placeholder="I need a portfolio website"
            />
          </div>

          <div className=" mb-4 mt-5">
            <label htmlFor="query">Message:</label>
            <textarea
              id="query"
              name="message"
              className="block w-full px-2 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
              required
              minLength="5"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <div className="mb-4 text-center">
            <button
              type="submit"
              className="w-[] px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Render ToastContainer */}
        <ToastContainer />
        <div className="flex flex-col gap-2 md:border-l-[1px] md:border-l-slate-600 py-10">
          {/* Address and Contact Info */}
          <ContactIcon icon={<MdPersonalInjury />} text="Emmanuel Ogunleye" />
          <ContactIcon
            icon={<MdShareLocation />}
            text="Bodija, Ibadan, Oyo State"
            link="https://www.google.com/maps?q=Bodija+Housing+Corporation+Estate,Opp.+Methodist+Church,Bodija,Ibadan,Oyo+State"
          />
          <div className="flex gap-3 text-3xl">
          <ContactIcon
            icon={<MdOutgoingMail />}
            // text="addjbleo@gmail.com"
            link="mailto:addjbleo@gmail.com"
          />
          <ContactIcon
            icon={<MdOutlinePhone />}
            // text="+2349060848004"
            link="tel:+2349060848004"
          />
          <ContactIcon
            icon={<MdOutlineFacebook />}
            // text="Leo Emmy"
            link="https://facebook.com/emmaenuel.pelumi"
          />
          <ContactIcon
            icon={<FaTwitter />}
            // text="Leo Emmy"
            link="https://twitter.com/king_leo4u"
          />
          <ContactIcon
            icon={<BsLinkedin />}
            // text="Emmanuel Ogunleye"
            link="https://linkedin.com/in/codingqsleo"
          />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
