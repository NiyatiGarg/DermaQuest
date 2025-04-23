import React, { useState } from "react";
import { AppContext } from "./AppContext";
import skinTan from "./assets/blogSpecificImages/skinTan.png";
import sundayRitual from "./assets/blogSpecificImages/SundayRitual.png";
import importance from "./assets/blogSpecificImages/importance.png";
import Img4 from "./assets/blogSpecificImages/Img4.png";
import Img5 from "./assets/blogSpecificImages/Img5.png";
import Img6 from "./assets/blogSpecificImages/Img6.png";
import Img7 from "./assets/blogSpecificImages/Img7.png";

import { ImportantDevices } from "@mui/icons-material";
import getAiResponse from "./config/gemini";

const AppContextProvider = ({ children }) => {
  const [pageTheme, setPageTheme] = useState("rgb(238,195,176)");
  const [aiResponse, setAiResponse]= useState('');
  const [loading, setLoading]= useState(false);

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
      Author: 'DermaQuest Team',
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
      Author: 'DermaQuest Team',
      description: `<p>Skincare is a vital part of maintaining a healthy, youthful, and glowing complexion. The skin is the largest organ in the human body, and it is exposed to environmental elements like pollution, UV rays, and harsh weather conditions on a daily basis. Taking care of your skin not only improves its appearance but also contributes to overall health and well-being.</p>

    <h2>Why Skincare is Important</h2>
    <p>Skincare goes beyond simply applying products for cosmetic purposes. The importance of skincare lies in its role in protecting the skin, preventing damage, and maintaining a healthy, balanced complexion. Regular skincare routines can help address common skin issues, such as dryness, acne, and premature aging.</p>
    <ul>
        <li><strong>Protection:</strong> A good skincare routine helps protect the skin from harmful UV rays, pollution, and environmental stressors.</li>
        <li><strong>Prevention of Premature Aging:</strong> Using the right skincare products, such as sunscreen and moisturizers, can prevent the formation of fine lines, wrinkles, and age spots.</li>
        <li><strong>Boosting Skin Health:</strong> Skincare routines that include exfoliation, hydration, and nourishment help maintain the skin's health and vitality.</li>
        <li><strong>Confidence:</strong> Healthy, clear skin boosts confidence and promotes a positive self-image.</li>
    </ul>

    <h2>Common Skincare Concerns</h2>
    <p>Everyone's skin is unique, and certain skincare concerns may vary from person to person. However, some common skincare issues affect most individuals at some point in their lives. These concerns can include:</p>
    <ul>
        <li><strong>Acne:</strong> Caused by clogged pores, acne is a common issue among teenagers and adults alike.</li>
        <li><strong>Dry Skin:</strong> Dryness can lead to irritation, flakiness, and discomfort, especially in colder weather or with harsh products.</li>
        <li><strong>Hyperpigmentation:</strong> Dark spots or uneven skin tone can result from sun exposure, acne scars, or other factors.</li>
        <li><strong>Wrinkles and Fine Lines:</strong> Aging skin loses elasticity, and wrinkles can form as a natural result of the aging process.</li>
    </ul>

    <h2>Skincare Tips for Healthy Skin</h2>
    <p>To keep your skin in optimal condition, follow these essential skincare tips:</p>
    <ol>
        <li><strong>Cleanse Regularly:</strong> Cleanse your face twice a day to remove dirt, oil, and makeup.</li>
        <li><strong>Exfoliate:</strong> Gently exfoliate the skin once or twice a week to remove dead skin cells and promote cell turnover.</li>
        <li><strong>Moisturize:</strong> Keep your skin hydrated with a good moisturizer that suits your skin type.</li>
        <li><strong>Use Sunscreen:</strong> Protect your skin from harmful UV rays by using sunscreen daily, even on cloudy days.</li>
        <li><strong>Maintain a Healthy Diet:</strong> Eating a balanced diet rich in antioxidants and vitamins can improve skin health from the inside out.</li>
    </ol>

    <h2>Conclusion</h2>
    <p>Taking care of your skin is not just a luxury, but a necessity for overall health. By adopting a consistent skincare routine, you can protect your skin from damage, maintain its natural glow, and prevent common skin concerns. Healthy, well-cared-for skin will not only help you look your best but also feel confident and comfortable in your own skin.</p>
  `,
      imageUrl: importance,
    },
    {
      key: 3,
      title: "Self-Care Sundays: How to Build a Weekly Skincare Ritual",
      Author: 'DermaQuest Team',
      description: `
  <p>
    In a world where the grind never stops, especially for today’s business-driven boys, taking care of yourself often feels like a “luxury” you can’t afford. But here’s the truth—
    <strong>your skin is a reflection of how well you’re really doing.</strong> You’re killing it in meetings and money-making, but are you showing up for yourself?
  </p>

  <p>
    Welcome to <strong>Self-Care Sundays</strong>—not just a trend, but a reset button you deserve to hit every week.
  </p>

  <h2>💼 The Hustle is Real, But So is Burnout</h2>
  <p>
    Running a business, managing clients, closing deals—your brain is wired 24/7. And while you’re out there building your empire, your skin is quietly fighting pollution, stress, and blue light damage.
    <br />
    You wouldn’t run your startup without proper maintenance, right? So why skip it when it comes to <em>you</em>?
  </p>

  <h2>Why Self-Care Sundays?</h2>
  <p>
    Because it’s not about vanity, it’s about <strong>recharging</strong>. Setting aside just <strong>30–45 minutes every Sunday</strong> for a skin + soul reset can make a visible difference—both in the mirror and in your mindset.
  </p>

  <h2>📅 Your No-Nonsense Skincare Ritual for Sundays</h2>
  <p>Here’s a chill, easy-to-follow ritual—no 10-step K-beauty madness, just smart care:</p>

  <h3>1. Deep Cleanse Your Face</h3>
  <p>
    Start with a good face wash or gentle exfoliator to remove all the week’s grime, sweat, and pollution. <br />
    <strong>Pro tip:</strong> Use a clay-based cleanser or mild scrub.
  </p>

  <h3>2. Face Mask That Hustles with You</h3>
  <p>
    Clay masks detox. Hydrating masks calm. Choose what your skin needs most. <br />
    ⏱️ <strong>Time:</strong> 10-15 minutes = your chance to unplug.
  </p>

  <h3>3. Toner + Serum Combo</h3>
  <p>
    Toners refresh; serums repair. If you have dark spots or tired-looking skin, go for Vitamin C or Niacinamide. <br />
    ✨ It’s like a startup booster—just for your skin.
  </p>

  <h3>4. Moisturizer = Respect</h3>
  <p>
    Don’t skip it. It seals the deal, locks hydration, and keeps your skin from looking dull. <br />
    <strong>Bonus:</strong> Add an under-eye cream if your screen-time game is strong.
  </p>

  <h3>5. Chill Mode ON</h3>
  <p>
    Put on some calming music, journal for 10 mins, or just sit with your thoughts. <strong>Mental detox + skincare = boss move.</strong>
  </p>

  <h2>🧠 What You’ll Gain (Besides Clearer Skin)</h2>
  <ul>
    <li>Mental clarity before a new week</li>
    <li>More confidence in how you show up (Zoom calls, dates, parties)</li>
    <li>A routine that reminds you that <em>you matter too</em></li>
  </ul>

  <h2>🌟 Final Thoughts</h2>
  <p>
    To all the boys grinding day and night—remember this: <strong>Self-care is not soft. It’s smart.</strong><br />
    You invest in stocks, systems, and skills—now start investing in yourself.
  </p>
  <p>
    <strong>This Sunday, take a breather. Mask up. Glow up. Show up.</strong><br />
    Because the best CEOs don’t just lead—they <em>look</em> the part too.
  </p>

        `,
      imageUrl: sundayRitual,
    },
    {
      key: 4,
      title: "AM vs. PM Skincare: What’s the Difference and Why It Matters",
      Author: 'DermaQuest Team',
      description: `
  <h2>☀️ AM Skincare Routine – Protection Mode</h2>
  <p>Your morning skincare is all about <strong>protecting your skin</strong> from the day ahead—sun, pollution, and environmental stressors.</p>
  <ul>
    <li><strong>Cleanser:</strong> Removes sweat or leftover products from overnight.</li>
    <li><strong>Toner (optional):</strong> Balances pH and preps your skin.</li>
    <li><strong>Antioxidant Serum:</strong> Like Vitamin C to fight pollution & free radicals.</li>
    <li><strong>Moisturizer:</strong> Hydrates and locks in your serum.</li>
    <li><strong>Sunscreen (most important!):</strong> Shields from harmful UV rays.</li>
  </ul>
  <blockquote style="font-style: italic; color: gray;">Think of AM as your armor—it’s your skin’s defense against the outside world.</blockquote>

  <h2>🌙 PM Skincare Routine – Repair & Recovery Mode</h2>
  <p>Nighttime is when your skin is in <strong>recovery mode</strong>. Cleanse off the dirt and help it regenerate.</p>
  <ul>
    <li><strong>Makeup Remover / Oil Cleanser:</strong> If you wear makeup or SPF.</li>
    <li><strong>Gentle Cleanser:</strong> Deep cleanse to remove the day’s buildup.</li>
    <li><strong>Toner:</strong> Calms and refreshes your skin.</li>
    <li><strong>Treatment Serums:</strong> Retinol, AHA/BHA, or any actives for acne, wrinkles, etc.</li>
    <li><strong>Eye Cream:</strong> Targets dark circles or puffiness.</li>
    <li><strong>Moisturizer or Night Cream:</strong> Hydrates and locks in the treatment.</li>
    <li><strong>Facial Oil / Sleeping Mask (optional):</strong> Extra nourishment.</li>
  </ul>
  <blockquote style="font-style: italic; color: gray;">Think of PM as skincare therapy—it heals, treats, and resets your skin.</blockquote>

  <h2>🔄 Key Differences at a Glance</h2>
  <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
    <thead>
      <tr style="background-color: #f0f0f0;">
        <th>Aspect</th>
        <th>AM Routine</th>
        <th>PM Routine</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Goal</td>
        <td>Protection</td>
        <td>Repair & Treatment</td>
      </tr>
      <tr>
        <td>Star Product</td>
        <td>Sunscreen</td>
        <td>Retinol / Actives / Hydration Boost</td>
      </tr>
      <tr>
        <td>Texture Focus</td>
        <td>Lightweight, non-greasy</td>
        <td>Rich, nourishing</td>
      </tr>
      <tr>
        <td>Timing</td>
        <td>Before you step out</td>
        <td>Before bed</td>
      </tr>
    </tbody>
  </table>

        `,
      imageUrl: Img4,
    },
    {
      key: 5,
      title: "Layers of Skin and How Skincare Works on Them",
      Author: 'DermaQuest Team',
      description: `
<p>The skin is not just a surface layer we cleanse and moisturize—it is a complex organ made up of three main layers, each with its own unique structure and function. Understanding these layers helps us see how skincare truly works and why it's so important to care for our skin consistently.</p>

<h3>1. Epidermis – The Protective Shield</h3>
<p>The <strong>epidermis</strong> is the outermost layer of the skin and acts as the first line of defense against pollution, bacteria, and UV radiation. It is also responsible for producing new skin cells and giving skin its color through melanin.</p>
<p><strong>Skincare's role:</strong></p>
<ul>
  <li><strong>Cleansers</strong> remove dirt, oil, and dead skin cells from the surface of the epidermis.</li>
  <li><strong>Exfoliators</strong> help speed up the cell turnover process by sloughing off dead skin, allowing fresh, glowing skin to surface.</li>
  <li><strong>Sunscreen</strong> protects the epidermis from harmful UV rays, preventing sunburn, pigmentation, and premature aging.</li>
  <li><strong>Serums</strong> rich in antioxidants and actives (like Vitamin C or Niacinamide) penetrate the upper layers to even out skin tone and reduce dark spots.</li>
</ul>

<h3>2. Dermis – The Support Center</h3>
<p>The <strong>dermis</strong> lies beneath the epidermis and is much thicker. It contains collagen and elastin fibers, sweat glands, oil glands, blood vessels, and nerve endings. This layer provides structure, elasticity, and nourishment to the skin.</p>
<p><strong>Skincare's role:</strong></p>
<ul>
  <li><strong>Moisturizers</strong> with hydrating ingredients like hyaluronic acid penetrate into the dermis to help retain moisture and plump the skin.</li>
  <li><strong>Retinoids</strong> stimulate collagen production in the dermis, helping to reduce fine lines and wrinkles over time.</li>
  <li><strong>Anti-aging serums</strong> and peptides work at the dermal level to improve firmness and elasticity.</li>
</ul>

<h3>3. Hypodermis – The Cushioning Layer</h3>
<p>The <strong>hypodermis</strong>, or subcutaneous tissue, is the deepest layer of skin. It is composed mainly of fat and connective tissues that help insulate the body and protect muscles and bones from injury.</p>
<p><strong>Skincare's role:</strong></p>
<ul>
  <li>While most topical skincare products don’t reach the hypodermis directly, maintaining the health of the upper layers ensures that the hypodermis remains protected and stable.</li>
  <li>Professional treatments like microneedling or radiofrequency can reach this layer to promote fat metabolism and tighter skin over time.</li>
</ul>

<h3>Conclusion</h3>
<p>Each layer of the skin plays a vital role in maintaining its health, strength, and appearance. Skincare routines are most effective when they support all three layers—cleansing and protecting the epidermis, hydrating and repairing the dermis, and maintaining the overall resilience of the hypodermis. So next time you apply your favorite cream or serum, remember: you're not just treating the surface—you’re nourishing your skin from the outside in.</p>
`,
      imageUrl: Img5,
    },
    {
      key: 6,
      title: "How to Prevent Dry and Chapped Lips",
      Author: 'DermaQuest Team',
      description: `
      <p>Dry, chapped lips are not only uncomfortable but can also affect your confidence. Unlike the rest of your skin, your lips lack oil glands, which makes them more vulnerable to dryness, cracking, and peeling—especially in extreme weather conditions. But with the right care, you can keep your lips soft, smooth, and hydrated.</p>

<h3>1. Stay Hydrated</h3>
<p>The most important step is to <strong>drink enough water</strong> throughout the day. Dehydration can make your lips dry from the inside out. Aim for at least 8 glasses of water daily to keep your lips naturally moisturized.</p>

<h3>2. Use a Good Lip Balm</h3>
<p>Invest in a <strong>lip balm with hydrating ingredients</strong> like shea butter, beeswax, coconut oil, lanolin, or hyaluronic acid. Avoid balms with alcohol, menthol, or synthetic fragrances—they can worsen dryness.</p>

<h3>3. Exfoliate Gently</h3>
<p><strong>Gently exfoliate</strong> your lips once or twice a week using a lip scrub or a mix of honey and sugar. This helps remove dead skin cells and allows better absorption of moisturizers.</p>

<h3>4. Avoid Licking Your Lips</h3>
<p>It might feel soothing, but <strong>licking your lips</strong> can actually dry them out further. Saliva evaporates quickly, leaving lips drier than before.</p>

<h3>5. Protect from the Sun</h3>
<p>Just like your skin, your lips need <strong>sun protection</strong> too. Use a lip balm with SPF to shield them from UV damage and prevent pigmentation and dryness.</p>

<h3>6. Use a Humidifier</h3>
<p>If you're in a dry climate or using indoor heating, a <strong>humidifier</strong> can help add moisture to the air, keeping your lips (and skin) from drying out.</p>

<h3>7. Avoid Irritating Ingredients</h3>
<p>Be cautious with <strong>matte lipsticks, flavored balms, and harsh exfoliants</strong>. These can strip your lips of moisture or cause allergic reactions.</p>

<h3>8. Apply a Lip Mask Overnight</h3>
<p>For extra nourishment, apply a thick <strong>lip mask or a layer of petroleum jelly</strong> before bed. It locks in moisture and repairs damage while you sleep.</p>

<h3>Conclusion</h3>
<p>Preventing dry lips is all about <strong>hydration, protection, and gentle care</strong>. By incorporating these simple habits into your daily routine, you can enjoy soft, healthy lips all year round.</p>`,
      imageUrl: Img6,
    },
    {
      key: 7,
      title: "The Correct Order to Apply Your Skincare Products",
      Author: 'DermaQuest Team',
      description: `

<p>Applying your skincare products in the correct order ensures that each product performs its best. Layering your skincare the right way helps maximize absorption and results. Whether you're a skincare newbie or a routine junkie, here's the ideal step-by-step guide.</p>

<h3>1. Cleanser</h3>
<p>Start with a <strong>gentle cleanser</strong> to remove dirt, oil, makeup, and impurities from your skin. Clean skin sets the foundation for every product that follows.</p>

<h3>2. Toner</h3>
<p>Use a <strong>hydrating or exfoliating toner</strong> based on your skin’s needs. Toners prep your skin to absorb serums and moisturizers more effectively.</p>

<h3>3. Serum</h3>
<p>Serums are concentrated formulas designed to address specific skin concerns like acne, pigmentation, or fine lines. Apply your <strong>water-based serums</strong> before any creams or oils.</p>

<h3>4. Spot Treatment (if needed)</h3>
<p>If you're treating acne, dark spots, or blemishes, now’s the time to apply a <strong>spot treatment</strong>. This allows the treatment to penetrate directly to the affected area.</p>

<h3>5. Eye Cream</h3>
<p>Gently dab a <strong>small amount of eye cream</strong> around your orbital bone to hydrate and protect the delicate eye area.</p>

<h3>6. Moisturizer</h3>
<p>Your skin needs moisture, regardless of type. Use a <strong>light gel moisturizer</strong> for oily skin and a <strong>rich cream</strong> for dry skin to seal in hydration and previous layers.</p>

<h3>7. Face Oil (Optional)</h3>
<p>If your skin is feeling extra dry or you want that added glow, apply a few drops of a <strong>face oil</strong> to lock in moisture and add nourishment.</p>

<h3>8. Sunscreen (AM Only)</h3>
<p>Never skip this! Sunscreen is your shield against premature aging, dark spots, and skin cancer. Apply a broad-spectrum <strong>SPF 30 or higher</strong> as the final step of your morning routine.</p>

<h3>Bonus: Night Routine Adjustment</h3>
<p>At night, replace sunscreen with <strong>retinol or night creams</strong> to repair and renew skin while you sleep. Always use retinol after serum and before moisturizer.</p>

<h3>Conclusion</h3>
<p>Consistency and correct product layering are the keys to effective skincare. Remember to apply products from <strong>thinnest to thickest texture</strong>, and always listen to how your skin responds. Healthy skin is happy skin!</p>
`,
      imageUrl: Img7,
    },
  ];

  const askQuery = async (prompt) => {
    const response = await getAiResponse(prompt);
    setAiResponse(response);
    setLoading(false);
  };

  return (
    <AppContext.Provider
      value={{ 
        pageTheme, 
        setPageTheme, 
        myths, 
        mustReadBlogs,
        askQuery,
        aiResponse, setAiResponse,
        loading, setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
