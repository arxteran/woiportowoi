import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("mjkvwoad");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12 text-gray-800">
          Contact Me
        </h2>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12 mb-12">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-2xl text-gray-700 mb-2"
            />
            <p className="text-xl font-medium text-gray-700">Email:</p>
            <p className="text-gray-600">trd.teranova@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-2xl text-gray-700 mb-2"
            />
            <p className="text-xl font-medium text-gray-700">Phone:</p>
            <p className="text-gray-600">+62 896 7536 0604</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-2xl text-gray-700 mb-2"
            />
            <p className="text-xl font-medium text-gray-700">Address:</p>
            <p className="text-gray-600">Terusan Leuwi Anyar 7 no.10</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <div className="space-y-6">
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-left font-medium text-lg text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full max-w-full md:max-w-2xl p-4 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block text-left font-medium text-lg text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full max-w-full md:max-w-2xl p-4 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className="block text-left font-medium text-lg text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full max-w-full md:max-w-2xl p-4 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 px-6 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition-all ease-in-out duration-300"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>

            {state.succeeded && (
              <p className="mt-6 text-green-500 text-lg font-medium">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
