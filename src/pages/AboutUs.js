import React, { useContext } from "react";

import { AppContext } from "../AppContext";
import Header from "./Header";
import Footer from "./Footer";

function AboutUs() {
  const { bgColor } = useContext(AppContext);

  return (
    <div style={{ backgroundColor: bgColor }}>
      <Header />
      <div className="d-flex justify-content-center flex-column responsive-margin blog-text">
        <h1 className="my-4 d-flex text-start">
          DermaQuest: Your Personalized Skincare Guide
        </h1>
        <p>
          DermaQuest is your ultimate destination for all things skincare. We
          empower you to make informed choices for your skin by offering
          personalized recommendations on the best ingredients and products from
          around the world. Whether you're dealing with dryness, acne, wrinkles,
          or just aiming for a healthy glow, DermaQuest is here to help.
        </p>
        <h2 style={{ fontSize: "1.5rem" }} className="my-4">
          Here's what you can find on DermaQuest
        </h2>
        <h6 className="fw-bold">Expert Advice</h6>
        <p>
          Our comprehensive blog features articles written by skincare
          professionals, providing insights and guidance on a wide range of
          topics. Whether you're looking for tips on managing acne,
          understanding anti-aging techniques, or finding the best moisturizers
          for dry skin, our experts have you covered. Each article is designed
          to address specific concerns, helping you make informed decisions
          about your skincare routine.
        </p>
        <h6 className="fw-bold">Ingredient Decoder</h6>
        <p>
          Understanding skincare ingredients can be overwhelming. Our Ingredient
          Decoder breaks down the science behind each ingredient, explaining
          their benefits and potential side effects. Learn how ingredients like
          hyaluronic acid, retinol, vitamin C, and more can impact your skin.
          This knowledge allows you to choose products that best suit your
          skin's needs, ensuring effective and safe skincare.
        </p>
        <h6 className="fw-bold">Skin Type Quiz</h6>
        <p>
          Discovering your skin type is crucial for effective skincare. Our
          interactive Skin Type Quiz helps you identify whether your skin is
          oily, dry, combination, sensitive, or normal. Based on your quiz
          results, we provide personalized product recommendations tailored to
          your skin type. This ensures that you're using products that work
          harmoniously with your skin, enhancing its health and appearance.
        </p>
        <h6 className="fw-bold">Global Product Suggestions</h6>
        <p>
          The world of skincare offers a vast array of products, each with
          unique formulations and benefits. DermaQuest curates product
          suggestions from around the globe, bringing you the best options for
          your specific skin concerns. Whether it's a hydrating serum from
          Korea, a gentle cleanser from France, or an innovative mask from
          Japan, we help you discover top products that cater to your skincare
          needs.
        </p>
        <h6 className="fw-bold">Live Data Integration</h6>
        <p>
          Staying updated with the latest skincare trends and information is
          essential for maintaining a healthy routine. Our Live Data Integration
          feature connects you with reliable sources, providing the most recent
          and relevant skincare information. From new ingredient discoveries to
          emerging skincare technologies, we ensure you're always in the know,
          allowing you to adapt and optimize your skincare regimen..
        </p>

        <p className="fw-bold my-4">
          At DermaQuest, we believe that knowledge is power. We're dedicated to
          equipping you with the information and recommendations you need to
          feel confident about your skincare routine. With our expert advice,
          detailed ingredient insights, personalized quizzes, global product
          suggestions, and up-to-date information, you can achieve healthy,
          radiant skin. Let DermaQuest be your trusted partner on your journey
          to optimal skincare.
        </p>
        <p></p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
