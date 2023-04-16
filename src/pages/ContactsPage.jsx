import React from "react";
import ContactUS from "../assets/contact-us-c-e1633582018980.png";
import Navbar from "../components/Navbar";

const ContactsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 my-[2.5rem]">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <img className="w-full h-full lg:object-cover lg:object-center xl:object-fill" src={ContactUS} alt="ContactUSImg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-mono">Contact Us</h2>
            <p className="text-gray-800 my-5 text-lg">
              We'd love to hear from you! Whether you have a question about our
              restaurant or grocery store, want to share feedback about your
              experience, or just want to say hello, there are several ways you
              can reach us.
            </p>
            <p className="text-gray-800 my-5 text-lg">Phone: (555) 123-4567</p>
            <p className="text-gray-800 my-5 text-lg">Email: <span className="font-bold underline">info@restaurantgrocerystore.com</span></p>
            <p className="text-gray-800 my-5 text-lg">Address: 123 Main Street, Anytown USA 12345</p>
            <p className="text-gray-800 my-5 text-lg">
              Social Media: Follow us on Facebook, Twitter, and Instagram for
              updates, specials, and more!
            </p>
            <p className="text-gray-800 my-5 text-lg">
              We are committed to providing our customers with exceptional
              service and will do our best to respond to your inquiry as soon as
              possible. Thank you for choosing our restaurant grocery store and
              we look forward to hearing from you soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
