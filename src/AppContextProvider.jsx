import React, { useState } from "react";
import { AppContext } from "./AppContext";
import skinTan from "./assets/blogSpecificImages/skinTan.png";

const AppContextProvider = ({ children }) => {
  const [pageTheme, setPageTheme] = useState("rgb(238,195,176)");

  const myths = [
    {
      key: 1,
      title: "Skincare is a Part of Makeup ",
      explaination:
        "Skincare focuses on maintaining and improving the health of your skin, while makeup is used to enhance or alter your appearance. They serve different purposes.",
      image: "A makeup brush with a skincare bottle.",
    },
    {
      key: 2,
      title: "Lemon Juice is Good for Your Skin",
      explaination:
        "Lemon juice can irritate your skin and cause photosensitivity, leading to burns and pigmentation.",
      image: "A lemon slice with a red cross over it.",
    },
    {
      key: 3,
      title: " Natural Ingredients are Always Safe",
      explaination:
        "Natural ingredients can cause allergic reactions or irritation. Always patch test before using new products.",
      image: "A plant with a caution sign.",
    },
    {
      key: 4,
      title: "You Only Need Sunscreen on Sunny Days",
      explaination:
        "UV rays can penetrate clouds and windows, so it’s important to wear sunscreen every day, regardless of the weather.",
      image: " A sun with a cloud over it.",
    },
    {
      key: 5,
      title: "Drinking Water Hydrates Your Skin",
      explaination:
        "While staying hydrated is important for the body, tipical moisturizers are necessary to keep your skin hydrated and healthy.",
      image: "A glass of water with a skin icon",
    },
    {
      key: 6,
      title: "Expensive Products are Always Better",
      explaination:
        "The effectiveness of skincare products depends on their ingredients, not their price. Many affordable products work just as well as expensive ones.",
      image: "A jar of cream with dollar signs around it.",
    },
  ];

  const mustReadBlogs = [
    {
      key: 1,
      title: "Is skin tanning only caused by the sun ?",
      // Author: 'Dr. Meghna Gupta',
      description: `<p>When we think of skin tanning, the first thing that comes to mind is the sun. While it’s true that sun exposure is one of the <strong>most common</strong> causes of tanning, it’s <strong>not the only</strong> reason your skin can darken. In fact, there are several other factors that can lead to increased melanin production—the pigment responsible for tanning.</p>

    <h4>1. UV Rays from Artificial Sources</h4>
    <p>Tanning beds and sunlamps used in salons emit UV radiation similar to the sun. Prolonged exposure can lead to tanning, skin aging, and even increase the risk of skin cancer.</p>

    <h4>2. Heat Exposure</h4>
    <p>Even without direct sunlight, consistent exposure to <strong>high heat</strong> (like near stoves or during hot showers) can trigger melanin production, leading to localized tanning or dark patches.</p>

    <h4>3. Pollution & Environmental Damage</h4>
    <p>Air pollutants and toxins damage the skin barrier and trigger oxidative stress. As a defense mechanism, the skin may increase melanin production, causing dullness and uneven skin tone.</p>

    <h4>4. Hormonal Imbalances</h4>
    <p>Conditions like <strong>melasma</strong>, which often occur during pregnancy or due to birth control pills, can lead to dark patches—especially on the face. These are caused by hormonal changes, not sun exposure.</p>

    <h4>5. Certain Medications</h4>
    <p>Some medications like antibiotics, anti-inflammatory drugs, and chemotherapy treatments can make the skin photosensitive, resulting in pigmentation changes with even minimal light exposure.</p>

    <h4>6. Friction and Lifestyle Habits</h4>
    <p>Regular friction (from tight clothes or accessories) and habits like waxing or shaving can cause <strong>post-inflammatory hyperpigmentation</strong>, which looks similar to tanning.</p>

    <h4>🌿 Takeaway</h4>
    <p>While sunlight is a major contributor, tanning is a <strong>complex process</strong> affected by both internal and external factors. Protecting your skin involves more than just SPF—it requires a holistic approach, including hydration, gentle skincare, and awareness of environmental exposures.</p>

    <p>Embrace your natural skin tone, and take care of it with love and protection!</p>`,
      imageUrl: skinTan,
    },
    {
      key: 2,
      title: "Importance of Skin care",
      // Author: 'Dr. Meghna Gupta',
      description: `<>
  <p>
    In today's fast-paced world, skincare is no longer seen as a luxury—it’s a
    necessity. Our skin, being the body's largest organ, acts as a protective
    barrier against environmental stressors, UV radiation, pollution, and
    harmful microbes. Taking care of it isn’t just about looking good; it’s
    about feeling confident and staying healthy.
  </p>

  <p>
    <strong>1. Healthy Skin Is Happy Skin</strong> <br />
    A consistent skincare routine helps maintain your skin’s balance. It
    prevents dryness, breakouts, premature aging, and other common concerns.
    Just like you nourish your body with food, your skin also needs nourishment
    through moisturizers, serums, and SPF.
  </p>

  <p>
    <strong>2. Prevention Is Better Than Cure</strong> <br />
    Taking care of your skin from an early age can prevent many issues later
    on. Daily cleansing and sun protection can significantly reduce the risk of
    acne, dark spots, wrinkles, and even skin cancer.
  </p>

  <p>
    <strong>3. Boosts Confidence</strong> <br />
    When your skin looks good, you feel good. A glowing complexion boosts
    self-esteem and encourages a more positive self-image.
  </p>

  <p>
    <strong>4. Self-Care Ritual</strong> <br />
    Skincare isn’t just about products—it’s about the ritual. That 10-minute
    routine in the morning or at night can be a calming, meditative break from
    a hectic day.
  </p>

  <p>
    <strong>5. Adaptation with Age</strong> <br />
    As we age, our skin changes. It loses elasticity, moisture, and collagen. A
    proper skincare routine evolves with these changes, helping you age
    gracefully.
  </p>

  <p>
    <span role="img" aria-label="flower">
      🌸
    </span>{" "}
    <strong>Final Thoughts</strong> <br />
    Skincare is a form of self-respect. It teaches consistency, patience, and
    mindfulness. Whether you’re a minimalist with just 3 steps or a skincare
    enthusiast with a 10-step ritual, what matters is being kind to your skin
    and making it a priority.
  </p>
</>`,
      imageUrl: skinTan,
    },
    {
      key: 3,
      title: "Is skin tanning only caused by the sun ?",
      // Author: 'Dr. Meghna Gupta',
      description:
        "No, skin tanning is not only caused by the sun! 🌞❌ There are other ways your skin can darken due to increased melanin production. Here are some non-sun causes of skin tanning",
      imageUrl: skinTan,
    },
    {
      key: 4,
      title: "Is skin tanning only caused by the sun ?",
      // Author: 'Dr. Meghna Gupta',
      description:
        "No, skin tanning is not only caused by the sun! 🌞❌ There are other ways your skin can darken due to increased melanin production. Here are some non-sun causes of skin tanning",
      imageUrl: skinTan,
    },
    {
      key: 5,
      title: "Is skin tanning only caused by the sun ?",
      // Author: 'Dr. Meghna Gupta',
      description:
        "No, skin tanning is not only caused by the sun! 🌞❌ There are other ways your skin can darken due to increased melanin production. Here are some non-sun causes of skin tanning",
      imageUrl: skinTan,
    },
    {
      key: 6,
      title: "Is skin tanning only caused by the sun ?",
      // Author: 'Dr. Meghna Gupta',
      description:
        "No, skin tanning is not only caused by the sun! 🌞❌ There are other ways your skin can darken due to increased melanin production. Here are some non-sun causes of skin tanning",
      imageUrl: skinTan,
    },
    {
      key: 7,
      title: "Is skin tanning only caused by the sun ?",
      // Author: 'Dr. Meghna Gupta',
      description:
        "No, skin tanning is not only caused by the sun! 🌞❌ There are other ways your skin can darken due to increased melanin production. Here are some non-sun causes of skin tanning",
      imageUrl: skinTan,
    },
  ];

  return (
    <AppContext.Provider
      value={{ pageTheme, setPageTheme, myths, mustReadBlogs }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
