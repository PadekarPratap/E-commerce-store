import React from "react";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-5 my-[2.5rem]">
        <div>
          <div className='max-w-[700px] max-h-[500px] mx-auto'>
            <img
              src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="teams"
            />
          </div>
          <div className="max-w-[1000px] mx-auto">
            <p className="text-lg font-serif my-5">
              Welcome to our online about page for our restaurant grocery store!
              We are thrilled to share our story with you and give you a glimpse
              into what makes our establishment so special.
            </p>
            <p className="text-lg font-serif my-5">
              Our journey began with a passion for both food and community. We
              saw a need in our area for a place where people could come
              together to enjoy delicious meals made from high-quality
              ingredients and also stock up on those same ingredients to use in
              their own cooking at home. And so, our restaurant grocery store
              was born.
            </p>
            <p className="text-lg font-serif my-5">
              We believe that good food should be accessible to everyone, and
              that's why we work hard to source the best ingredients from local
              farms and suppliers. From organic produce to sustainably-raised
              meats and fresh seafood, we strive to bring you the freshest and
              most flavorful products possible.
            </p>
            <p className="text-lg font-serif my-5">
              Our restaurant serves up a variety of dishes inspired by cuisines
              from all around the world. Whether you're in the mood for a
              classic burger and fries or want to try something new like our
              Korean-style bibimbap, we have something for everyone. And if
              you're looking for a quick and healthy lunch option, we offer a
              variety of salads and grain bowls made with fresh, seasonal
              ingredients.
            </p>
            <p className="text-lg font-serif my-5">
              In addition to our restaurant, our grocery store is stocked with
              all the ingredients you need to create your own culinary
              masterpieces at home. From pantry staples like flour and sugar to
              specialty items like truffle oil and artisanal cheeses, we have
              everything you need to take your cooking to the next level.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 max-w-[1000px] mx-auto gap-8">
          <img
            className="h-full"
            src="https://cdn.pixabay.com/photo/2018/05/12/11/37/team-3393037_960_720.jpg"
            alt="teamsImage2"
          />
          <div>
            <p className="text-lg font-serif my-5">
              We also offer cooking classes and workshops where you can learn
              new skills and techniques from our experienced chefs. Whether
              you're a beginner or a seasoned home cook, our classes are
              designed to help you expand your knowledge and explore new
              flavors.
            </p>
            <p className="text-lg font-serif my-5">
              At our restaurant grocery store, we are committed to providing our
              customers with exceptional service and a welcoming, inclusive
              atmosphere. Whether you're coming in for a quick bite or to stock
              up on groceries for the week, we're here to help you find exactly
              what you need and make your experience as enjoyable as possible.
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto">
          <p className="text-lg font-serif my-5">
            Thank you for taking the time to learn more about our restaurant
            grocery store. We look forward to serving you soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
