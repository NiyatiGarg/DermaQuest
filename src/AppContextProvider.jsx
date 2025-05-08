import React, { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import skinTan from "./assets/blogSpecificImages/skinTan.png";
import sundayRitual from "./assets/blogSpecificImages/SundayRitual.png";
import importance from "./assets/blogSpecificImages/importance.png";
import Img4 from "./assets/blogSpecificImages/day-night.png";
import Img5 from "./assets/blogSpecificImages/layers.png";
import Img6 from "./assets/blogSpecificImages/chappedLips.png";
import Img7 from "./assets/blogSpecificImages/routine.png";
import Img8 from "./assets/blogSpecificImages/nutmeg.png";
import Img9 from "./assets/blogSpecificImages/aak.png";
import Img10 from "./assets/blogSpecificImages/multaniMitti.png";
import Img11 from "./assets/blogSpecificImages/phitkari.png";
import dieting from "./assets/blogSpecificImages/dieting.png";

import { ImportantDevices } from "@mui/icons-material";
import getAiResponse from "./config/gemini";

const AppContextProvider = ({ children }) => {
  const [pageTheme, setPageTheme] = useState("rgb(238,195,176)"); //main color
  const [contrastColor, setContrastColor] = useState("rgb(158, 77, 42)"); // contrasting color for sideNavBar/footer

  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false); // tracking small screen
  const [openSideNav, setOpenSideNav] = useState(false); // tracking side nav open or close

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

  const allBlogs = [
   
    {
      key: 11,
      title: "Layers of Skin and How Skincare Works on Them",
      Author: "DermaQuest Team",
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
      key: 12,
      title: "How to Prevent Dry and Chapped Lips",
      Author: "DermaQuest Team",
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
      key: 13,
      title: "Is skin tanning only caused by the sun ?",
      Author: "DermaQuest Team",
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
      key: 14,
      title: "Dieting for Healthy Skin: Not Just About Getting Slimmer",
      Author: "DermaQuest Team",
      description:`
    <p>When people hear the word "dieting," they often think of weight loss or slimming down. But dieting isn’t just about fitting into smaller clothes — it also plays a crucial role in improving skin health. What you eat directly affects how your skin looks, feels, and functions. A balanced diet can help manage and even prevent common skin issues like acne, dullness, dryness, and inflammation.</p>

    <h4>1. Reduces Acne and Breakouts</h4>
    <p>Consuming a diet low in refined sugars and processed foods can help reduce acne. High sugar levels can increase insulin, which may trigger excess oil production and clogged pores. Eating more whole grains, vegetables, and healthy fats helps balance hormones and reduce breakouts.</p>

    <h4>2. Fights Inflammation</h4>
    <p>Foods rich in antioxidants like berries, leafy greens, and nuts help fight inflammation. Chronic skin problems such as eczema, psoriasis, and redness can often be controlled by avoiding inflammatory foods like fried items and too much dairy or red meat.</p>

    <h4>3. Promotes Skin Hydration and Glow</h4>
    <p>Drinking enough water and including hydrating foods like cucumber, watermelon, and oranges in your diet keeps your skin supple and glowing. Omega-3 rich foods like flaxseeds, walnuts, and fish also help maintain the skin’s moisture barrier.</p>

    <h4>4. Slows Premature Aging</h4>
    <p>Antioxidants found in fruits and vegetables protect the skin from free radical damage, which causes early wrinkles and dullness. A diet rich in vitamins A, C, and E can help maintain firm and youthful-looking skin.</p>

    <h4>5. Improves Skin Texture</h4>
    <p>Protein-rich foods like lentils, eggs, and lean meats support collagen production, which keeps your skin smooth and firm. Zinc and biotin, found in nuts, seeds, and whole grains, help repair skin damage and promote even texture.</p>

    <h4>6. Helps Manage Skin Conditions</h4>
    <p>People with conditions like rosacea, eczema, or sensitive skin often benefit from eliminating trigger foods like spicy dishes, alcohol, or gluten. Personalized diet changes can reduce flare-ups and discomfort.</p>

    <h4>7. Tips for a Skin-Friendly Diet</h4>
    <ul>
      <li><strong>Eat the Rainbow:</strong> Include a variety of colorful fruits and vegetables daily for vitamins and antioxidants.</li>
      <li><strong>Cut Back on Sugar:</strong> Reduce sugary snacks and drinks to prevent hormonal spikes that cause acne.</li>
      <li><strong>Choose Healthy Fats:</strong> Include nuts, seeds, and avocado for skin-repairing fatty acids.</li>
      <li><strong>Stay Hydrated:</strong> Drink at least 2–3 liters of water daily for soft, hydrated skin.</li>
    </ul>

    <h4>8. Final Thoughts</h4>
    <p>Dieting should not only focus on appearance but also on overall wellness — and skin health is a big part of that. A nutrient-rich, well-balanced diet helps keep your skin clear, hydrated, and youthful from the inside out. By making smarter food choices, you’re not just supporting your body but also giving your skin the nourishment it needs to thrive.</p>
  `,
      imageUrl: dieting,
    },
    {
      key: 15,
      title: "The Correct Order to Apply Your Skincare Products",
      Author: "DermaQuest Team",
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
    {
      key: 16,
      title: "Jaiphal (Nutmeg): A Natural Remedy for Acne",
      Author: "DermaQuest Team",
      description: `
    <p>Jaiphal, also known as nutmeg, is a popular spice commonly found in Indian kitchens. But beyond its culinary use, nutmeg has long been valued in traditional medicine and skincare for its powerful antibacterial and anti-inflammatory properties. When used correctly, it can help treat acne, reduce blemishes, and promote clearer skin — making it a natural, affordable addition to your skincare routine.</p>

    <h4>1. What is Jaiphal (Nutmeg)?</h4>
    <p>Nutmeg is a seed derived from the fruit of the nutmeg tree (<em>Myristica fragrans</em>). It has a warm, spicy aroma and is used as a flavoring agent in many dishes. In Ayurveda and traditional skincare practices, nutmeg is known for its healing properties, particularly in treating skin issues like acne, inflammation, and scars.</p>

    <h4>2. How Does Nutmeg Help with Acne?</h4>
    <p>Nutmeg contains natural compounds that make it effective for acne treatment. Here's how it works:</p>
    <ul>
      <li><strong>Antibacterial:</strong> Nutmeg has antimicrobial properties that help fight acne-causing bacteria, preventing new breakouts.</li>
      <li><strong>Anti-inflammatory:</strong> Its anti-inflammatory effects help calm redness, swelling, and irritation associated with active acne.</li>
      <li><strong>Exfoliation:</strong> Nutmeg acts as a gentle exfoliant, helping to remove dead skin cells and unclog pores.</li>
      <li><strong>Scar Fading:</strong> Over time, nutmeg may help reduce the appearance of acne scars and pigmentation due to its ability to even out skin tone and promote healing.</li>
    </ul>

    <h4>3. How to Use Nutmeg for Acne</h4>
    <p>There are several simple and natural ways to use nutmeg in your skincare routine:</p>
    <ul>
      <li><strong>Nutmeg and Honey Spot Treatment:</strong> Mix a pinch of nutmeg powder with a few drops of raw honey. Apply this paste to pimples or affected areas. Leave it on for 15–20 minutes before rinsing off. Honey adds antibacterial and soothing benefits.</li>
      <li><strong>Nutmeg and Milk Face Pack:</strong> Mix nutmeg powder with raw milk to make a smooth paste. Apply it to the face, leave it on for 15 minutes, and then rinse. This helps cleanse the skin and reduce acne.</li>
      <li><strong>Nutmeg and Aloe Vera:</strong> Combine nutmeg with fresh aloe vera gel for a calming and healing face mask. This is especially helpful for sensitive or irritated skin.</li>
    </ul>

    <h4>4. Natural Nutrients in Nutmeg</h4>
    <p>Nutmeg is rich in essential oils and antioxidants that are beneficial to the skin:</p>
    <ul>
      <li><strong>Myristicin and Elemicin:</strong> Natural compounds that have antimicrobial and anti-inflammatory effects.</li>
      <li><strong>Antioxidants:</strong> Help fight free radicals and reduce signs of skin stress and aging.</li>
      <li><strong>Vitamin C:</strong> Supports skin repair and improves overall brightness and clarity.</li>
    </ul>

    <h4>5. Things to Keep in Mind</h4>
    <p>While nutmeg can be a great addition to a natural skincare routine, here are a few things to consider:</p>
    <ul>
      <li><strong>Patch Test:</strong> Always perform a patch test before using nutmeg on your face, as it may cause irritation for sensitive skin types.</li>
      <li><strong>Use in Small Quantities:</strong> Nutmeg is potent, so a small amount is enough. Overuse can lead to skin sensitivity.</li>
      <li><strong>Not for Daily Use:</strong> Limit use to 2–3 times a week to avoid over-exfoliation or irritation.</li>
      <li><strong>Avoid if Allergic:</strong> If you have a known allergy to spices or nutmeg, it’s best to avoid it.</li>
    </ul>

    <h4>6. Final Thoughts on Nutmeg for Skin</h4>
    <p>Jaiphal (nutmeg) is a natural and effective home remedy for acne-prone skin. With its antibacterial and anti-inflammatory properties, it can help treat active acne, soothe irritation, and support the healing of scars. When used properly and in moderation, nutmeg offers a gentle, affordable alternative to commercial acne treatments — helping you achieve healthier, clearer skin naturally.</p>
  `,
      imageUrl: Img8,
    },
    {
      key: 17,
      title: "Importance of Skin care",
      Author: "DermaQuest Team",
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
      key: 18,
      title: "Self-Care Sundays: How to Build a Weekly Skincare Ritual",
      Author: "DermaQuest Team",
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
      key: 19,
      title: "AM vs. PM Skincare: What’s the Difference and Why It Matters",
      Author: "DermaQuest Team",
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
      key: 20,
      title: "Multani Mitti (Fuller's Earth): A Classic Skincare Essential",
      Author: "DermaQuest Team",
      description: `
    <p>Multani Mitti, also known as Fuller's Earth, is a clay-like substance that has been used in skincare for centuries, especially in India. Rich in minerals, it is known for its oil-absorbing, cleansing, and cooling properties, making it a go-to remedy for oily and acne-prone skin types.</p>

    <h4>1. Deep Cleansing and Oil Control</h4>
    <p>Multani Mitti is excellent for deep cleansing the skin. It draws out excess oil, dirt, and impurities from pores, helping to prevent breakouts and blackheads. This makes it especially beneficial for people with oily or combination skin.</p>

    <h4>2. Soothes Acne and Pimples</h4>
    <p>Its natural cooling effect calms inflammation and reduces redness caused by pimples. Multani Mitti also helps dry out active acne and control further breakouts, thanks to its oil-balancing properties.</p>

    <h4>3. Improves Skin Tone</h4>
    <p>Regular use of Multani Mitti can enhance the complexion by removing dead skin cells and promoting a more even skin tone. It gently exfoliates the skin, revealing a fresher, brighter layer underneath.</p>

    <h4>4. Tightens and Refreshes Skin</h4>
    <p>Multani Mitti acts as a natural skin-tightening agent. It can help shrink pores and improve skin elasticity, giving the face a more youthful and refreshed appearance.</p>

    <h4>5. How to Use Multani Mitti for Skin</h4>
    <ul>
      <li><strong>For Oily Skin:</strong> Mix Multani Mitti with rose water to form a smooth paste. Apply on the face and wash off once dry. Helps absorb oil and clear pores.</li>
      <li><strong>For Acne:</strong> Combine with a few drops of tea tree oil or neem powder for antibacterial benefits. Use 2–3 times a week.</li>
      <li><strong>For Glowing Skin:</strong> Mix with milk, honey, or sandalwood powder for a nourishing and brightening face pack.</li>
    </ul>

    <h4>6. Precautions</h4>
    <ul>
      <li><strong>Not Ideal for Dry Skin:</strong> Multani Mitti can be drying, so it's not recommended for people with very dry or sensitive skin unless mixed with hydrating ingredients like milk or aloe vera.</li>
      <li><strong>Use 1–2 Times Weekly:</strong> Overuse can strip the skin of natural oils. Limit application to once or twice a week.</li>
      <li><strong>Patch Test:</strong> As with any new skincare ingredient, always do a patch test to rule out allergic reactions.</li>
    </ul>

    <h4>7. Final Thoughts</h4>
    <p>Multani Mitti is a natural and affordable solution for achieving clean, oil-free, and refreshed skin. With regular and proper use, it can be a powerful addition to your skincare routine—especially if you struggle with oily skin, pimples, or dullness. Always balance its use with hydration to keep your skin healthy and glowing.</p>
  `,
      imageUrl: Img10,
    },
    {
      key: 21,
      title: "Phitkari (Alum): A Traditional Skincare Healer",
      Author: "DermaQuest Team",
      description: `
    <p>Phitkari, also known as Alum, is a naturally occurring mineral compound that has been used for centuries in traditional medicine and skincare. Known for its antibacterial, astringent, and soothing properties, Phitkari is often used to treat minor cuts, pimples, and skin irritation. It’s a multi-purpose ingredient that offers gentle yet effective care for different skin concerns.</p>

    <h4>1. Antibacterial and Antiseptic Action</h4>
    <p>Phitkari is widely known for its ability to kill bacteria and reduce the risk of infections. When applied topically, it helps clean the skin and prevent acne-causing bacteria from multiplying, making it beneficial for acne-prone skin.</p>

    <h4>2. Tightens Pores and Reduces Oil</h4>
    <p>As a natural astringent, Phitkari helps shrink the appearance of pores and controls excess oil production. Regular use can leave the skin feeling firmer and less greasy, especially for people with oily or combination skin.</p>

    <h4>3. Reduces Pimples and Blemishes</h4>
    <p>Because of its antimicrobial and soothing effects, Phitkari helps dry out pimples and reduce swelling. Over time, it may also help fade blemishes and acne scars.</p>

    <h4>4. Treats Razor Cuts and Irritation</h4>
    <p>Phitkari is traditionally used as an aftershave due to its ability to stop minor bleeding, soothe irritation, and prevent infections. It is gentle on skin and reduces inflammation caused by shaving or minor skin abrasions.</p>

    <h4>5. How to Use Phitkari for Skin</h4>
    <ul>
      <li><strong>Phitkari Water Toner:</strong> Dissolve a small piece of alum in clean water and use it as a toner to tighten pores and reduce oiliness.</li>
      <li><strong>Spot Treatment:</strong> Wet a small piece of Phitkari and rub it gently over active pimples. Leave on for 10–15 minutes before rinsing.</li>
      <li><strong>Aftershave Block:</strong> Rub a wet alum block on shaved skin to prevent razor bumps and soothe irritation.</li>
    </ul>

    <h4>6. Precautions</h4>
    <ul>
      <li><strong>Do Not Overuse:</strong> Overuse can lead to dryness or sensitivity, especially on delicate skin. Use 2–3 times a week at most.</li>
      <li><strong>Avoid Eyes and Broken Skin:</strong> Do not apply near the eyes or on deep wounds or cuts.</li>
      <li><strong>Patch Test Recommended:</strong> Though natural, Phitkari can cause mild irritation in sensitive skin. Always test first.</li>
    </ul>

    <h4>7. Final Thoughts</h4>
    <p>Phitkari is a versatile and effective natural remedy for skincare. From tightening pores to treating pimples and soothing razor burns, its wide range of uses makes it a valuable addition to any skincare routine. Just remember to use it in moderation and follow up with a gentle moisturizer to keep your skin balanced and healthy.</p>
  `,
      imageUrl: Img11,
    },
    {
      key: 22,
      title: "Aak (Calotropis procera): A Traditional Herb for Skin",
      Author: "DermaQuest Team",
      description: `
      <p>Aak, also known as Calotropis procera or Madar, is a traditional medicinal plant often found in India and other tropical regions. While it's mostly known in Ayurveda for its use in treating various health conditions, it also offers several skin-related benefits when used carefully. Its flowers, leaves, and latex (milky sap) have antimicrobial, anti-inflammatory, and wound-healing properties.</p>
  
      <h4>1. Antibacterial and Antifungal Properties</h4>
      <p>Aak contains compounds that can help kill acne-causing bacteria and fungi that lead to skin infections. Its latex has traditionally been used on wounds, boils, and infected skin to promote healing.</p>
  
      <h4>2. Reduces Inflammation</h4>
      <p>The plant has strong anti-inflammatory properties. When applied topically in small amounts, Aak can help reduce swelling and redness, especially in conditions like eczema or minor rashes.</p>
  
      <h4>3. Helps with Wound Healing</h4>
      <p>The latex of Aak may help speed up the healing of cuts, sores, or insect bites. In traditional medicine, it is often used to clean and treat wounds due to its disinfecting qualities.</p>
  
      <h4>4. Natural Detoxifier</h4>
      <p>Aak is considered a detoxifying plant in Ayurveda. It may help cleanse the skin when applied in paste form or included in herbal treatments, aiding in the removal of toxins and impurities.</p>
  
      <h4>5. How to Use Aak for Skin</h4>
      <ul>
        <li><strong>Fresh Leaf Paste:</strong> Grind fresh Aak leaves into a paste and apply to the affected area for 10–15 minutes. Wash off thoroughly. Use with caution.</li>
        <li><strong>Latex Spot Treatment:</strong> The white latex can be applied directly on warts, acne, or insect bites. Use very little and avoid sensitive areas. Always wash your hands after use.</li>
        <li><strong>Infused Oil:</strong> Some herbal preparations use Aak-infused oils for massaging inflamed or painful areas of the skin. These are safer when pre-prepared and diluted properly.</li>
      </ul>
  
      <h4>6. Precautions</h4>
      <ul>
        <li><strong>Patch Test First:</strong> Aak latex can be strong and may cause skin irritation or burning in sensitive skin. Always test a small area first.</li>
        <li><strong>Avoid Around Eyes and Open Wounds:</strong> Do not use Aak near the eyes or deep cuts.</li>
        <li><strong>Not for Pregnant or Breastfeeding Women:</strong> The plant’s potency may pose risks during pregnancy or breastfeeding, so avoid using it without medical guidance.</li>
      </ul>
  
      <h4>7. Final Thoughts</h4>
      <p>Aak (Calotropis procera) is a powerful natural plant with potential skincare benefits, especially for treating acne, inflammation, and minor infections. However, due to its strong nature, it must be used with care and ideally under guidance. When used correctly, Aak can be an effective addition to natural skincare for those looking for traditional herbal solutions.</p>
    `,
      imageUrl: Img9,
    },
  ];

  const mustReadBlogs = [
    {
      key: 13,
      title: "Is skin tanning only caused by the sun ?",
      Author: "DermaQuest Team",
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
      key: 17,
      title: "Importance of Skin care",
      Author: "DermaQuest Team",
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
      key: 12,
      title: "How to Prevent Dry and Chapped Lips",
      Author: "DermaQuest Team",
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
      key: 15,
      title: "The Correct Order to Apply Your Skincare Products",
      Author: "DermaQuest Team",
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

  const ingredientBlogs = [
    {
      key: 101,
      title: "Hyaluronic Acid",
      Author: "DermaQuest Team",
      description: `
    <p>Hyaluronic Acid is a naturally occurring substance found in the human body — especially in the skin, eyes, and connective tissues. It acts like a moisture magnet, with the ability to hold up to 1000 times its weight in water. This makes it one of the most powerful ingredients for keeping skin hydrated and plump.</p>

    <h4>1. How It Works on the Skin</h4>
    <p>When applied topically, Hyaluronic Acid functions as a humectant — meaning it draws water from the environment into the top layers of the skin. This helps:</p>
    <ul>
      <li>Keep skin moisturized for longer</li>
      <li>Reduce the appearance of fine lines and wrinkles</li>
      <li>Improve skin texture and softness</li>
      <li>Support the skin’s natural barrier</li>
    </ul>
    <p>It’s suitable for all skin types and is especially beneficial for dry, dehydrated, or sensitive skin.</p>

    <h4>2. Natural Sources of Hyaluronic Acid</h4>
    <p>While topical products are most effective, some foods can support the body’s natural production of Hyaluronic Acid.</p>

    <h5>Fruits and Vegetables:</h5>
    <ul>
      <li><strong>Sweet potatoes</strong> – rich in magnesium, which helps produce HA</li>
      <li><strong>Leafy greens</strong> – like spinach and kale, full of antioxidants</li>
      <li><strong>Citrus fruits</strong> – oranges and lemons, high in vitamin C</li>
      <li><strong>Bell peppers</strong> – another vitamin C-rich food</li>
      <li><strong>Avocados</strong> – support overall skin health</li>
    </ul>

    <h5>Other Sources:</h5>
    <ul>
      <li><strong>Bone broth</strong> – naturally rich in hyaluronic acid</li>
      <li><strong>Soy-based foods</strong> – like tofu and edamame, which help maintain HA levels</li>
      <li><strong>Root vegetables</strong> – like carrots and beets</li>
    </ul>

    <h4>3. How to Use It in Your Skincare Routine</h4>
    <p>Apply Hyaluronic Acid on damp skin and seal it with a moisturizer or facial oil. This helps lock in moisture and prevents water loss.</p>
    <p>You can use it both in the morning and at night. It’s non-comedogenic and safe for all skin types, including acne-prone or sensitive skin.</p>

    <p>In summary, Hyaluronic Acid is a hydrating hero that helps keep your skin looking fresh, smooth, and healthy — both from the inside and out.</p>
  `,
      imageUrl: "",
    },
    {
      key: 102,
      title: "Niacinamide (Vitamin B3)",
      Author: "DermaQuest Team",
      description: `
      <p>Niacinamide, also known as Vitamin B3, is a powerful and versatile skincare ingredient that offers a wide range of benefits for all skin types. It has gained popularity for its ability to improve the skin’s overall appearance without causing irritation, making it ideal even for sensitive skin.</p>
  
      <h4>1. What Does Niacinamide Do for Your Skin?</h4>
      <p>Niacinamide helps in many ways, making it one of the most multi-functional ingredients available:</p>
      <ul>
        <li><strong>Reduces acne and inflammation</strong> – Calms irritated skin and helps reduce breakouts</li>
        <li><strong>Minimizes pores</strong> – Helps control oil production, leading to visibly smaller pores</li>
        <li><strong>Improves uneven skin tone</strong> – Fades dark spots and hyperpigmentation over time</li>
        <li><strong>Strengthens the skin barrier</strong> – Helps the skin retain moisture and defend against pollutants</li>
        <li><strong>Fights signs of aging</strong> – Reduces fine lines and dullness with regular use</li>
      </ul>
  
      <h4>2. Natural Sources of Niacinamide</h4>
      <p>While skincare products are the most direct way to apply niacinamide to your skin, eating foods rich in Vitamin B3 can also support skin health from within.</p>
  
      <h5>Fruits and Vegetables:</h5>
      <ul>
        <li><strong>Green peas</strong> – Contain a good amount of niacin (Vitamin B3)</li>
        <li><strong>Avocados</strong> – Rich in healthy fats and B vitamins</li>
        <li><strong>Sweet potatoes</strong> – Provide antioxidants and B vitamins</li>
        <li><strong>Mushrooms</strong> – Especially portobello and shiitake, which contain B3</li>
        <li><strong>Tomatoes</strong> – Contain B3 and support skin repair</li>
      </ul>
  
      <h5>Other Natural Sources:</h5>
      <ul>
        <li><strong>Whole grains</strong> – Like brown rice, oats, and wheat</li>
        <li><strong>Legumes</strong> – Beans, lentils, and peanuts</li>
        <li><strong>Seeds and nuts</strong> – Especially sunflower seeds and almonds</li>
      </ul>
  
      <h4>3. How to Use Niacinamide in Your Skincare Routine</h4>
      <p>Niacinamide is typically used in the form of a serum or moisturizer. It’s gentle enough to be used twice a day — morning and evening.</p>
      <p>It works well with other common ingredients like hyaluronic acid, zinc, and even retinol. For best results, apply it after cleansing and before heavier creams or oils.</p>
  
      <p>In conclusion, Niacinamide is a science-backed ingredient that helps with acne, aging, dullness, and more — all without irritating the skin. It's a great choice for anyone looking to improve skin health in a gentle, effective way.</p>
    `,
      imageUrl: "",
    },
    {
      key: 103,
      title: "Salicylic Acid (BHA)",
      Author: "DermaQuest Team",
      description: `
    <p>Salicylic Acid is a beta hydroxy acid (BHA) that is widely used in skincare for its deep-cleansing and exfoliating properties. Known for its ability to penetrate into the pores, salicylic acid is especially effective for treating oily and acne-prone skin.</p>

    <h4>1. What Does Salicylic Acid Do for Your Skin?</h4>
    <p>Salicylic acid is oil-soluble, which allows it to go deep into clogged pores and break down the debris that causes acne. Here’s how it benefits the skin:</p>
    <ul>
      <li><strong>Unclogs pores</strong> – Dissolves excess oil and dead skin cells that cause blackheads and pimples</li>
      <li><strong>Reduces inflammation</strong> – Calms redness and swelling often associated with acne</li>
      <li><strong>Prevents future breakouts</strong> – Keeps pores clean and reduces the chance of acne forming</li>
      <li><strong>Improves skin texture</strong> – Gently exfoliates the surface, making skin smoother over time</li>
    </ul>
    <p>Because of its ability to clear and shrink pores, salicylic acid is a key ingredient in many acne treatments, toners, face washes, and spot treatments.</p>

    <h4>2. Natural Sources of Salicylic Acid</h4>
    <p>Salicylic acid can be derived naturally from certain plants and foods, though skincare products usually contain a lab-made version for better stability and safety.</p>

    <h5>Fruits and Vegetables:</h5>
    <ul>
      <li><strong>White willow bark</strong> – A natural source of salicin, which is converted into salicylic acid</li>
      <li><strong>Berries</strong> – Especially strawberries, blueberries, and blackberries</li>
      <li><strong>Tomatoes</strong> – Contain small amounts of salicylic acid</li>
      <li><strong>Cucumbers</strong> – Known for their cooling effect and mild exfoliating properties</li>
      <li><strong>Apples</strong> – Especially the skins, which are rich in various acids including salicylic acid</li>
    </ul>

    <h5>Other Natural Sources:</h5>
    <ul>
      <li><strong>Licorice root</strong> – Contains skin-soothing and acne-fighting compounds</li>
      <li><strong>Almonds</strong> – Provide natural salicylates when consumed</li>
      <li><strong>Mint leaves</strong> – Contain salicylic acid and are often used in herbal treatments</li>
    </ul>

    <h4>3. How to Use Salicylic Acid in Your Skincare Routine</h4>
    <p>Salicylic acid is found in various forms such as cleansers, toners, serums, and spot treatments. Start with lower concentrations (0.5% to 2%) if you're new to it.</p>
    <p>It’s best used once a day, ideally in your evening routine. Follow it up with a moisturizer, and always use sunscreen during the day, as exfoliating acids can make your skin more sensitive to the sun.</p>

    <p>In summary, Salicylic Acid is a highly effective ingredient for keeping pores clear, treating breakouts, and refining skin texture. If you struggle with acne or clogged pores, it can be a game-changer in your routine.</p>
  `,
      imageUrl: "",
    },
    {
      key: 104,
      title: "Glycolic Acid (AHA)",
      Author: "DermaQuest Team",
      description: `
    <p>Glycolic Acid is a type of alpha hydroxy acid (AHA) that is widely used in skincare for its powerful exfoliating and skin-renewing properties. Derived from sugarcane, it has the smallest molecular size among AHAs, which allows it to penetrate the skin easily and work effectively on the surface layers.</p>

    <h4>1. What Does Glycolic Acid Do for Your Skin?</h4>
    <p>Glycolic Acid helps remove the layer of dead skin cells that can build up over time, leading to dullness, clogged pores, and rough texture. Here's what it can do:</p>
    <ul>
      <li><strong>Exfoliates dead skin cells</strong> – Reveals fresher, brighter skin underneath</li>
      <li><strong>Improves skin texture</strong> – Makes the skin feel smoother and more refined</li>
      <li><strong>Fades dark spots</strong> – Helps reduce hyperpigmentation and post-acne marks</li>
      <li><strong>Promotes cell turnover</strong> – Encourages the skin to renew itself faster</li>
      <li><strong>Minimizes fine lines</strong> – Over time, can reduce the appearance of early signs of aging</li>
    </ul>
    <p>It’s suitable for most skin types but should be used with care, especially for sensitive skin or beginners.</p>

    <h4>2. Natural Sources of Glycolic Acid</h4>
    <p>Glycolic Acid naturally occurs in some fruits and plant-based sources, although most skincare products use lab-formulated versions for stability and effectiveness.</p>

    <h5>Fruits and Plant-Based Sources:</h5>
    <ul>
      <li><strong>Sugarcane</strong> – The most common natural source of glycolic acid</li>
      <li><strong>Pineapple</strong> – Contains natural AHAs and enzymes that help exfoliate the skin</li>
      <li><strong>Unripe grapes</strong> – Naturally rich in glycolic acid and other fruit acids</li>
      <li><strong>Beets</strong> – Contain small amounts of glycolic and other organic acids</li>
    </ul>

    <h4>3. How to Use Glycolic Acid in Your Skincare Routine</h4>
    <p>Glycolic Acid is found in toners, serums, cleansers, and chemical peels. Beginners should start with a low concentration (5%–7%) and use it 1–2 times a week.</p>
    <p>Apply it at night after cleansing, and follow it with a moisturizer. Always use sunscreen during the day, as exfoliated skin becomes more sensitive to the sun.</p>

    <p>In conclusion, Glycolic Acid is a highly effective exfoliant that helps brighten skin, even out tone, and smooth texture. When used correctly, it can bring noticeable improvement to your skin's overall glow and health.</p>
  `,
      imageUrl: "",
    },
    {
      key: 105,
      title: "Vitamin C (Ascorbic Acid)",
      Author: "DermaQuest Team",
      description: `
      <p>Vitamin C, also known as Ascorbic Acid, is one of the most researched and recommended ingredients in skincare. It is a powerful antioxidant that helps protect the skin from damage, brighten the complexion, and improve overall skin health. Whether you're dealing with dullness, dark spots, or early signs of aging, Vitamin C can be a game-changer in your routine.</p>
  
      <h4>1. What Does Vitamin C Do for Your Skin?</h4>
      <p>Vitamin C works on multiple levels to support and protect the skin. Its main benefits include:</p>
      <ul>
        <li><strong>Brightens the skin</strong> – Fades dark spots and hyperpigmentation for a more even tone</li>
        <li><strong>Boosts collagen production</strong> – Helps reduce fine lines and firm the skin</li>
        <li><strong>Protects against sun damage</strong> – Neutralizes free radicals caused by UV exposure</li>
        <li><strong>Improves skin texture</strong> – Makes the skin feel smoother and more radiant</li>
        <li><strong>Reduces inflammation</strong> – Calms redness and helps with acne-prone skin</li>
      </ul>
      <p>It’s suitable for most skin types and pairs well with sunscreen for added daytime protection.</p>
  
      <h4>2. Natural Sources of Vitamin C</h4>
      <p>Vitamin C is naturally found in many fruits and vegetables, which also help support your skin from the inside out when included in your diet.</p>
  
      <h5>Fruits:</h5>
      <ul>
        <li><strong>Oranges</strong> – One of the most well-known sources</li>
        <li><strong>Lemons</strong> – High in vitamin C and antioxidants</li>
        <li><strong>Strawberries</strong> – Also rich in AHAs and other skin-loving nutrients</li>
        <li><strong>Kiwis</strong> – Contain more vitamin C than oranges</li>
        <li><strong>Pineapple</strong> – Offers exfoliating enzymes and vitamin C</li>
      </ul>
  
      <h5>Vegetables:</h5>
      <ul>
        <li><strong>Bell peppers</strong> – Especially the red ones, are packed with vitamin C</li>
        <li><strong>Broccoli</strong> – A great source of both vitamin C and fiber</li>
        <li><strong>Spinach and Kale</strong> – Dark leafy greens that boost skin health</li>
        <li><strong>Tomatoes</strong> – Contain vitamin C and lycopene for added skin protection</li>
      </ul>
  
      <h4>3. How to Use Vitamin C in Your Skincare Routine</h4>
      <p>Vitamin C is most commonly used in the form of a serum, applied after cleansing and before moisturizer. Look for stable forms like L-Ascorbic Acid or Sodium Ascorbyl Phosphate in concentrations around 10%–20% for best results.</p>
      <p>Use it in the morning for antioxidant protection throughout the day, followed by sunscreen. Avoid pairing it with strong exfoliants or niacinamide in the same routine unless your skin is used to it.</p>
  
      <p>In summary, Vitamin C is a must-have skincare ingredient that helps brighten, protect, and strengthen your skin. Regular use can lead to a more radiant and even complexion, while also defending your skin from daily environmental stress.</p>
    `,
      imageUrl: "",
    },
    {
      key: 106,
      title: "Retinol (Vitamin A derivative)",
      Author: "DermaQuest Team",
      description: `
    <p>Retinol is a derivative of Vitamin A and is widely recognized as one of the most effective ingredients in skincare. Known for its powerful anti-aging and acne-fighting properties, retinol helps improve skin texture, reduce fine lines, and keep pores clear. It is often called the “gold standard” in dermatology for its scientifically proven benefits.</p>

    <h4>1. What Does Retinol Do for Your Skin?</h4>
    <p>Retinol works by increasing cell turnover — the process by which your skin sheds old cells and produces new ones. This results in healthier, fresher skin. Here’s what it does:</p>
    <ul>
      <li><strong>Reduces fine lines and wrinkles</strong> – Boosts collagen production for firmer skin</li>
      <li><strong>Treats acne</strong> – Prevents clogged pores and reduces breakouts</li>
      <li><strong>Evens skin tone</strong> – Fades dark spots, scars, and hyperpigmentation</li>
      <li><strong>Improves skin texture</strong> – Smooths rough patches and refines pores</li>
      <li><strong>Speeds up cell renewal</strong> – Reveals brighter and younger-looking skin</li>
    </ul>
    <p>Retinol is suitable for most skin types but should be introduced slowly to avoid irritation.</p>

    <h4>2. Natural Sources of Vitamin A</h4>
    <p>Retinol itself is a synthetic form of Vitamin A used in skincare, but you can support your skin by consuming foods rich in Vitamin A and beta-carotene (a precursor to Vitamin A):</p>

    <h5>Fruits and Vegetables:</h5>
    <ul>
      <li><strong>Carrots</strong> – Rich in beta-carotene, which the body converts to Vitamin A</li>
      <li><strong>Sweet potatoes</strong> – Another excellent source of beta-carotene</li>
      <li><strong>Pumpkin</strong> – Loaded with skin-friendly vitamins, including A</li>
      <li><strong>Mangoes</strong> – Provide antioxidants and beta-carotene</li>
      <li><strong>Spinach and Kale</strong> – Dark leafy greens full of Vitamin A</li>
    </ul>

    <h5>Other Sources:</h5>
    <ul>
      <li><strong>Egg yolks</strong> – Naturally contain preformed Vitamin A (retinol)</li>
      <li><strong>Liver</strong> – Extremely rich in Vitamin A</li>
      <li><strong>Dairy products</strong> – Milk, cheese, and butter contain small amounts</li>
    </ul>

    <h4>3. How to Use Retinol in Your Skincare Routine</h4>
    <p>Start with a low concentration (like 0.25% or 0.5%) and apply it 2–3 times a week at night. As your skin builds tolerance, you can increase frequency and strength.</p>
    <p>Always follow with a moisturizer to reduce dryness and irritation. During the day, apply sunscreen, as retinol makes your skin more sensitive to UV rays.</p>

    <p>In conclusion, Retinol is a highly effective, science-backed ingredient for fighting signs of aging and managing acne. When used correctly and consistently, it can lead to clear, smooth, and younger-looking skin.</p>
  `,
      imageUrl: "",
    },
    {
      key: 107,
      title: "Ceramides",
      Author: "DermaQuest Team",
      description: `
    <p>Ceramides are naturally occurring lipids (fats) that make up over 50% of the skin’s outer layer. They are essential for maintaining a healthy skin barrier, locking in moisture, and protecting against environmental damage. Think of them as the "glue" that holds your skin cells together.</p>

    <h4>1. What Do Ceramides Do for Your Skin?</h4>
    <p>When your skin lacks ceramides, it can become dry, irritated, and more prone to sensitivity or damage. Here are the key benefits ceramides offer:</p>
    <ul>
      <li><strong>Restore and strengthen the skin barrier</strong> – Prevents moisture loss and protects against irritants</li>
      <li><strong>Hydrate the skin</strong> – Help retain water, keeping skin soft and plump</li>
      <li><strong>Reduce dryness and flakiness</strong> – Especially useful for dry or eczema-prone skin</li>
      <li><strong>Calm sensitive or irritated skin</strong> – Help soothe and heal damaged skin</li>
      <li><strong>Enhance skin resilience</strong> – Makes skin stronger and more resistant to external stress</li>
    </ul>
    <p>Ceramides are safe and beneficial for all skin types, including sensitive, acne-prone, and aging skin.</p>

    <h4>2. Natural Sources of Ceramides</h4>
    <p>While ceramides used in skincare are often lab-made (bioidentical), some natural sources can help support your skin's ceramide levels from within:</p>

    <h5>Foods Rich in Skin-Boosting Lipids:</h5>
    <ul>
      <li><strong>Sweet potatoes</strong> – Contain phytoceramides (plant-based ceramides)</li>
      <li><strong>Soybeans</strong> – Help support healthy skin and lipid production</li>
      <li><strong>Brown rice and wheat germ</strong> – Contain natural ceramides and support skin hydration</li>
      <li><strong>Beets and spinach</strong> – Rich in nutrients that help strengthen the skin barrier</li>
      <li><strong>Eggs and dairy</strong> – Contain healthy fats that support skin function</li>
    </ul>

    <h4>3. How to Use Ceramides in Your Skincare Routine</h4>
    <p>Ceramides are most commonly found in moisturizers, serums, and cleansers. Look for products labeled with ceramide types (like NP, AP, or EOP) or containing “phytoceramides.”</p>
    <p>Apply ceramide-rich products after cleansing and toning, ideally while your skin is still slightly damp to seal in hydration. They work well both in the morning and at night.</p>

    <p>In summary, Ceramides are crucial for maintaining healthy, hydrated skin. They help repair the barrier, soothe irritation, and protect against everyday damage. Adding them to your routine can make a noticeable difference, especially for dry or sensitive skin.</p>
  `,
      imageUrl: "",
    },
    {
      key: 108,
      title: "Zinc Oxide & Titanium Dioxide",
      Author: "DermaQuest Team",
      description: `
    <p>Zinc Oxide and Titanium Dioxide are two of the most common physical (mineral) sunscreen ingredients. They work as powerful physical blockers, providing broad-spectrum protection against both UVA and UVB rays. Unlike chemical sunscreens, which absorb UV radiation, these mineral ingredients sit on top of the skin and reflect or scatter the sun's rays.</p>

    <h4>1. What Are Zinc Oxide and Titanium Dioxide?</h4>
    <p>Both zinc oxide and titanium dioxide are naturally occurring minerals. They are finely ground and added to sunscreens and skincare products to protect the skin from harmful UV radiation.</p>

    <ul>
      <li><strong>Zinc Oxide</strong> – A white, non-toxic mineral that provides full-spectrum protection from UV radiation. It is known for being gentle on the skin, even for those with sensitive or acne-prone skin.</li>
      <li><strong>Titanium Dioxide</strong> – Another mineral that protects the skin from UV rays, though it primarily absorbs UVB rays, with some ability to scatter UVA rays. It’s commonly found in sunscreens for oily or acne-prone skin due to its light texture.</li>
    </ul>

    <h4>2. How Do Zinc Oxide and Titanium Dioxide Work?</h4>
    <p>Both ingredients are physical sunscreens that act as a physical barrier to block or reflect UV radiation. Here's how they protect the skin:</p>
    <ul>
      <li><strong>UV Protection:</strong> Zinc oxide offers broad-spectrum protection against both UVA and UVB rays, while titanium dioxide provides strong UVB protection and some UVA protection.</li>
      <li><strong>Non-chemical Protection:</strong> As physical blockers, these ingredients are not absorbed into the skin, making them ideal for sensitive or allergy-prone skin.</li>
      <li><strong>Skin-Friendly:</strong> They are less likely to irritate the skin compared to chemical sunscreens, making them ideal for people with rosacea, eczema, or sensitive skin.</li>
    </ul>

    <h4>3. Benefits of Zinc Oxide and Titanium Dioxide</h4>
    <p>These ingredients have many benefits beyond sun protection:</p>
    <ul>
      <li><strong>Gentle on the Skin:</strong> Suitable for sensitive skin types, including babies and those with skin conditions like eczema or rosacea.</li>
      <li><strong>Anti-Inflammatory Properties:</strong> Zinc oxide has natural anti-inflammatory properties, which help reduce skin irritation and redness.</li>
      <li><strong>Non-Comedogenic:</strong> Both ingredients are unlikely to clog pores, making them suitable for acne-prone skin.</li>
      <li><strong>Long-Lasting Protection:</strong> Zinc oxide and titanium dioxide provide physical, long-lasting protection and are not easily broken down by sunlight.</li>
    </ul>

    <h4>4. Natural Sources of Zinc Oxide and Titanium Dioxide</h4>
    <p>Although these minerals are most commonly found in skincare products, they can also be found naturally in certain foods that contribute to overall skin health:</p>

    <h5>Foods Rich in Zinc:</h5>
    <ul>
      <li><strong>Oysters</strong> – One of the best sources of zinc</li>
      <li><strong>Red meat</strong> – Beef and lamb are rich in zinc</li>
      <li><strong>Pumpkin seeds</strong> – A great plant-based source</li>
      <li><strong>Legumes</strong> – Beans, lentils, and chickpeas</li>
      <li><strong>Nuts and seeds</strong> – Almonds, cashews, and sunflower seeds</li>
    </ul>

    <h5>Foods Rich in Titanium (though not as directly absorbed for skin purposes):</h5>
    <ul>
      <li><strong>Whole grains</strong> – Brown rice, oats, and wheat are rich in essential minerals</li>
      <li><strong>Leafy greens</strong> – Spinach and kale contribute to healthy skin</li>
      <li><strong>Seafood</strong> – Fish and shellfish provide essential nutrients that support skin health</li>
    </ul>

    <h4>5. How to Use Sunscreens with Zinc Oxide and Titanium Dioxide</h4>
    <p>Products containing zinc oxide and titanium dioxide are commonly found in sunscreens, and they are best applied as part of a daily skincare routine. Here's how to use them:</p>
    <ul>
      <li><strong>Apply liberally:</strong> Use enough product to cover all exposed areas of your skin.</li>
      <li><strong>Reapply regularly:</strong> Reapply every two hours, especially after swimming or sweating.</li>
      <li><strong>Use daily:</strong> Even on cloudy days or indoors, UV rays can affect your skin, so daily protection is recommended.</li>
    </ul>

    <p>In conclusion, Zinc Oxide and Titanium Dioxide are effective, safe, and gentle options for sun protection. They are ideal for sensitive skin and provide long-lasting, broad-spectrum defense against harmful UV rays without causing irritation or clogging pores. Whether you're looking for a sunscreen for daily wear or special sun protection, these ingredients are a trusted choice for healthy skin.</p>
  `,
      imageUrl: "",
    },
    {
      key: 109,
      title: "Centella Asiatica (Cica)",
      Author: "DermaQuest Team",
      description: `
    <p>Centella Asiatica, also known as Cica or Gotu Kola, is a powerful herb widely used in skincare for its healing, soothing, and anti-aging properties. Traditionally used in Ayurvedic medicine, Cica has gained popularity in modern skincare due to its ability to promote skin repair, reduce inflammation, and improve overall skin health.</p>

    <h4>1. What is Centella Asiatica (Cica)?</h4>
    <p>Centella Asiatica is a small, green plant that grows in Asia, Australia, and South Africa. It has been used for centuries for its medicinal properties, particularly for treating wounds and burns. In skincare, Cica is known for its ability to accelerate healing and improve the skin’s barrier function.</p>
    
    <p>The plant contains active compounds, such as triterpenoids (madecassoside and madecassic acid), that help to repair and rejuvenate the skin. These compounds have powerful anti-inflammatory, antioxidant, and collagen-stimulating properties, making Cica an ideal ingredient for sensitive, acne-prone, or irritated skin.</p>

    <h4>2. How Does Centella Asiatica Work on the Skin?</h4>
    <p>Centella Asiatica works by providing several key benefits to the skin:</p>
    <ul>
      <li><strong>Promotes Healing:</strong> Cica helps stimulate collagen production, aiding in the repair of damaged skin and reducing the appearance of scars, particularly acne scars.</li>
      <li><strong>Soothes Inflammation:</strong> Cica has powerful anti-inflammatory properties, which make it ideal for calming redness, irritation, and swelling associated with conditions like acne, eczema, or rosacea.</li>
      <li><strong>Hydrates the Skin:</strong> Cica helps maintain the skin's natural moisture barrier, preventing dehydration and promoting long-lasting hydration.</li>
      <li><strong>Strengthens the Skin Barrier:</strong> It helps reinforce the skin’s outer layer, making it more resistant to environmental damage, pollutants, and irritants.</li>
      <li><strong>Antioxidant Protection:</strong> Cica is rich in antioxidants that help protect the skin from oxidative stress and free radical damage, which can lead to premature aging.</li>
    </ul>

    <h4>3. Benefits of Centella Asiatica for Different Skin Types</h4>
    <p>Centella Asiatica is suitable for a wide range of skin types due to its gentle, yet effective nature:</p>
    <ul>
      <li><strong>Sensitive Skin:</strong> Cica is perfect for those with sensitive skin as it calms irritation and reduces redness without causing further sensitivity.</li>
      <li><strong>Acne-Prone Skin:</strong> Due to its anti-inflammatory and healing properties, Cica is great for acne-prone skin. It helps reduce acne flare-ups, promotes faster healing, and can minimize scarring.</li>
      <li><strong>Dry Skin:</strong> By strengthening the skin barrier and preventing moisture loss, Cica keeps dry skin hydrated and balanced.</li>
      <li><strong>Aging Skin:</strong> The collagen-boosting effects of Cica make it beneficial for mature skin, reducing the appearance of fine lines and improving skin elasticity.</li>
    </ul>

    <h4>4. Natural Sources of Centella Asiatica</h4>
    <p>Centella Asiatica is primarily found in tropical and subtropical regions. Although it’s commonly used in skincare products, you can also find it in its natural form in some herbal teas and supplements. However, for skincare, it’s typically extracted and processed into oils, tinctures, or other formulations for easier application and effectiveness.</p>

    <h4>5. How to Use Centella Asiatica in Your Skincare Routine</h4>
    <p>Centella Asiatica is commonly found in a variety of skincare products, including serums, moisturizers, masks, and spot treatments. To incorporate it into your routine, follow these steps:</p>
    <ul>
      <li><strong>Cleanse:</strong> Begin with a gentle cleanser to remove dirt and oil.</li>
      <li><strong>Treat:</strong> Apply a Cica-infused serum or treatment to targeted areas of concern, such as acne or redness.</li>
      <li><strong>Moisturize:</strong> Use a moisturizer containing Centella Asiatica to hydrate and protect the skin barrier.</li>
      <li><strong>Spot Treatment:</strong> For inflamed spots or acne, consider using a targeted treatment with a higher concentration of Centella Asiatica.</li>
    </ul>

    <p>It is generally safe to use Centella Asiatica daily, both in the morning and night, to maintain calm, healthy skin.</p>

    <h4>6. Final Thoughts on Centella Asiatica (Cica)</h4>
    <p>Centella Asiatica, or Cica, is a powerhouse ingredient for skincare. Whether you're looking to soothe irritation, promote healing, reduce acne scars, or strengthen your skin barrier, Cica can be a game-changer. Its natural, gentle nature makes it suitable for almost all skin types, and it pairs well with other ingredients to create a balanced, effective skincare routine.</p>
  `,
      imageUrl: "",
    },
    {
      key: 110,
      title: "Aloe Vera",
      Author: "DermaQuest Team",
      description: `
    <p>Aloe Vera is a well-known plant celebrated for its natural healing properties, particularly in skincare. Used for centuries for its soothing and rejuvenating effects, Aloe Vera is a versatile ingredient found in numerous skincare products today. Whether it's used to hydrate, soothe irritation, or promote healing, Aloe Vera has earned its reputation as a gentle yet effective skincare ingredient.</p>

    <h4>1. What is Aloe Vera?</h4>
    <p>Aloe Vera is a succulent plant that is widely cultivated for its medicinal and cosmetic uses. The thick, fleshy leaves of the plant contain a gel-like substance that is rich in vitamins, minerals, amino acids, and antioxidants, making it highly beneficial for skin care. This gel is extracted and used in various skincare products such as lotions, creams, gels, and masks.</p>
    
    <h4>2. How Does Aloe Vera Work on the Skin?</h4>
    <p>Aloe Vera works in multiple ways to improve skin health:</p>
    <ul>
      <li><strong>Hydrates the Skin:</strong> Aloe Vera is well-known for its hydrating properties. It acts as a natural moisturizer, providing deep hydration to the skin without making it greasy. It helps restore moisture to dry, dull skin, making it soft and smooth.</li>
      <li><strong>Soothes Skin Irritations:</strong> Aloe Vera has anti-inflammatory properties, making it an excellent choice for calming redness, irritation, and inflammation. It is often used to treat sunburns, rashes, and allergic reactions.</li>
      <li><strong>Promotes Healing:</strong> Aloe Vera is known for accelerating the healing process. It is commonly used to treat minor cuts, burns, and wounds due to its ability to speed up tissue repair and reduce scarring.</li>
      <li><strong>Anti-aging Benefits:</strong> Aloe Vera contains antioxidants such as vitamins C and E, which help to combat free radicals and protect the skin from environmental stressors. This helps reduce the appearance of fine lines, wrinkles, and age spots.</li>
      <li><strong>Reduces Acne:</strong> Aloe Vera has antimicrobial properties that help fight acne-causing bacteria. It also reduces the inflammation caused by acne, helping to calm breakouts and prevent further irritation.</li>
    </ul>

    <h4>3. Benefits of Aloe Vera for Different Skin Types</h4>
    <p>Aloe Vera is suitable for a wide range of skin types, thanks to its gentle and non-irritating properties:</p>
    <ul>
      <li><strong>Sensitive Skin:</strong> Aloe Vera is gentle and soothing, making it perfect for sensitive skin that is prone to redness or irritation. It helps calm and restore balance.</li>
      <li><strong>Oily and Acne-Prone Skin:</strong> Aloe Vera’s anti-inflammatory and antimicrobial properties make it great for oily and acne-prone skin. It hydrates without clogging pores and helps reduce acne flare-ups.</li>
      <li><strong>Dry Skin:</strong> Aloe Vera provides deep hydration for dry skin, ensuring that it remains moisturized and nourished without feeling greasy.</li>
      <li><strong>Sunburned Skin:</strong> Aloe Vera is widely known for its ability to soothe sunburned skin. Its cooling effect reduces redness, irritation, and inflammation caused by excessive sun exposure.</li>
    </ul>

    <h4>4. Natural Sources of Aloe Vera</h4>
    <p>Aloe Vera is primarily grown in tropical and subtropical climates. The gel inside the leaves of the Aloe Vera plant is harvested for use in cosmetics, personal care products, and medicinal applications. While Aloe Vera can be cultivated at home, it's more commonly processed into products by extracting the gel and combining it with other beneficial ingredients.</p>

    <h4>5. How to Use Aloe Vera in Your Skincare Routine</h4>
    <p>Aloe Vera is versatile and can be used in a variety of ways in your daily skincare routine:</p>
    <ul>
      <li><strong>As a Moisturizer:</strong> Apply Aloe Vera gel directly to your skin after cleansing for a boost of hydration. It can be used on both your face and body.</li>
      <li><strong>For Sunburn Relief:</strong> Apply Aloe Vera gel generously to sunburned areas for soothing relief and to speed up the healing process.</li>
      <li><strong>As a Spot Treatment:</strong> For acne, apply Aloe Vera gel to affected areas to reduce inflammation and prevent scarring.</li>
      <li><strong>Face Mask:</strong> Aloe Vera can be used as a hydrating face mask. Mix it with other ingredients like honey or turmeric for added benefits.</li>
    </ul>

    <p>It’s generally safe to use Aloe Vera daily in your skincare routine. However, if you have sensitive skin, it’s a good idea to patch test before using it on larger areas of your skin to ensure that you don’t have an allergic reaction.</p>

    <h4>6. Final Thoughts on Aloe Vera</h4>
    <p>Aloe Vera is a natural skincare powerhouse that offers numerous benefits for the skin. Whether you’re looking to hydrate, soothe, heal, or reduce signs of aging, Aloe Vera is a versatile and safe ingredient to include in your skincare regimen. With its ability to address a wide range of skin concerns, Aloe Vera remains a staple in both traditional and modern skincare routines.</p>
  `,
      imageUrl: "",
    },
    {
      key: 111,
      title: "Lactic Acid (AHA)",
      Author: "DermaQuest Team",
      description: `
      <p>Lactic Acid, a type of Alpha Hydroxy Acid (AHA), is a gentle yet powerful exfoliant that has become a popular ingredient in skincare products. Derived from milk, Lactic Acid has been used for centuries for its exfoliating and skin-brightening benefits. It is particularly known for its ability to remove dead skin cells, promote cell turnover, and leave the skin looking radiant and smooth.</p>
  
      <h4>1. What is Lactic Acid?</h4>
      <p>Lactic Acid is an organic acid that naturally occurs in milk and fermented products like yogurt. It belongs to the group of AHAs, which are water-soluble acids commonly used in skincare for their exfoliating properties. Unlike physical exfoliants that scrub the skin's surface, Lactic Acid works by dissolving the bonds between dead skin cells, allowing them to shed more easily. This results in smoother, brighter skin with improved texture and tone.</p>
  
      <h4>2. How Does Lactic Acid Work on the Skin?</h4>
      <p>Lactic Acid works as an exfoliant by loosening the bonds between dead skin cells, which helps them slough off and reveals fresher, younger skin underneath. This exfoliation process helps to:</p>
      <ul>
        <li><strong>Improve Skin Texture:</strong> By removing dead skin cells, Lactic Acid helps to smooth out rough patches and improve the overall texture of the skin.</li>
        <li><strong>Even Out Skin Tone:</strong> Lactic Acid brightens the skin and helps reduce the appearance of dark spots, hyperpigmentation, and discoloration, promoting a more even skin tone.</li>
        <li><strong>Increase Cell Turnover:</strong> Regular use of Lactic Acid boosts skin cell turnover, allowing fresh, new skin cells to emerge more quickly, which contributes to healthier, youthful-looking skin.</li>
        <li><strong>Hydrate the Skin:</strong> Unlike other AHAs, Lactic Acid also has moisturizing properties. It attracts water molecules to the skin, ensuring that the skin stays hydrated and smooth after exfoliation.</li>
      </ul>
  
      <h4>3. Benefits of Lactic Acid for Different Skin Types</h4>
      <p>Lactic Acid is suitable for most skin types, but it is especially beneficial for individuals with dry, sensitive, or dull skin:</p>
      <ul>
        <li><strong>Sensitive Skin:</strong> Lactic Acid is one of the gentler AHAs, making it an excellent choice for sensitive skin. It exfoliates without causing irritation, unlike some harsher acids.</li>
        <li><strong>Dry Skin:</strong> In addition to exfoliating, Lactic Acid has hydrating properties, making it ideal for dry skin. It helps to keep the skin moist and soft while removing dead skin cells.</li>
        <li><strong>Oily and Acne-Prone Skin:</strong> Lactic Acid helps to reduce clogged pores by exfoliating the skin's surface, making it beneficial for those with acne-prone skin. It can also help fade acne scars over time.</li>
        <li><strong>Ageing Skin:</strong> Lactic Acid can help reduce the appearance of fine lines and wrinkles by encouraging the production of collagen and speeding up the turnover of skin cells, which helps in maintaining a youthful complexion.</li>
      </ul>
  
      <h4>4. Natural Sources of Lactic Acid</h4>
      <p>Lactic Acid is naturally found in milk and dairy products such as yogurt, buttermilk, and sour cream. It is also present in fermented foods like kefir. In skincare, Lactic Acid is synthetically derived for use in higher concentrations and is typically included in products like toners, serums, exfoliating masks, and moisturizers.</p>
  
      <h4>5. How to Use Lactic Acid in Your Skincare Routine</h4>
      <p>Lactic Acid can be easily incorporated into your skincare routine. Here are some practical ways to use it:</p>
      <ul>
        <li><strong>As a Toner:</strong> Apply a Lactic Acid-based toner after cleansing to exfoliate and prepare your skin for the next steps in your routine.</li>
        <li><strong>Exfoliating Mask:</strong> Use a Lactic Acid mask once or twice a week to deep exfoliate and brighten the skin.</li>
        <li><strong>In Serums and Creams:</strong> Look for Lactic Acid serums or moisturizers that can be applied directly to the skin to provide gentle exfoliation and hydration throughout the day or night.</li>
        <li><strong>Spot Treatment:</strong> For stubborn dark spots or hyperpigmentation, you can use a targeted Lactic Acid treatment to help lighten and even out your skin tone over time.</li>
      </ul>
  
      <h4>6. Things to Keep in Mind When Using Lactic Acid</h4>
      <p>While Lactic Acid is generally safe for most skin types, there are a few things to consider:</p>
      <ul>
        <li><strong>Sun Sensitivity:</strong> AHAs, including Lactic Acid, can make your skin more sensitive to the sun. Always apply sunscreen during the day when using Lactic Acid to protect your skin from UV damage.</li>
        <li><strong>Start Slowly:</strong> If you’re new to AHAs, start with products that contain a lower concentration of Lactic Acid and gradually increase use as your skin builds tolerance.</li>
        <li><strong>Patch Test:</strong> Before applying Lactic Acid products to your entire face, perform a patch test to ensure you don't experience any irritation or allergic reactions.</li>
      </ul>
  
      <h4>7. Final Thoughts on Lactic Acid</h4>
      <p>Lactic Acid is a fantastic skincare ingredient for anyone looking to brighten their complexion, improve skin texture, or reduce signs of aging. It is a gentle exfoliant that delivers noticeable results without harsh side effects, making it ideal for all skin types. Whether you're dealing with dry, sensitive, or acne-prone skin, Lactic Acid can help promote a healthy, glowing complexion.</p>
    `,
      imageUrl: "",
    },
    {
      key: 112,
      title: "Peptides",
      Author: "DermaQuest Team",
      description: `
    <p>Peptides are short chains of amino acids that are often referred to as the building blocks of proteins. In skincare, they are known for their ability to support the skin’s natural processes, including collagen production and skin repair. They are an increasingly popular ingredient in skincare products due to their ability to target a variety of skin concerns, from aging to skin barrier issues.</p>

    <h4>1. What Are Peptides?</h4>
    <p>Peptides are tiny fragments of proteins made up of amino acids. They are an essential component of various proteins in the body, including collagen, elastin, and keratin — all of which play vital roles in maintaining healthy, youthful skin. In skincare, peptides are used as a powerful ingredient in creams, serums, and treatments to support skin function and rejuvenate the complexion.</p>

    <h4>2. How Do Peptides Work on the Skin?</h4>
    <p>Peptides penetrate the skin and help promote the synthesis of collagen and elastin. Collagen is a protein responsible for giving the skin its structure and firmness, while elastin provides elasticity. As we age, the production of these proteins decreases, leading to wrinkles, sagging, and fine lines. Peptides encourage the skin to produce more of these proteins, helping to improve skin's strength, smoothness, and elasticity.</p>

    <ul>
      <li><strong>Boost Collagen Production:</strong> Peptides stimulate collagen production, which helps the skin remain firm, plump, and youthful-looking.</li>
      <li><strong>Improve Skin Repair:</strong> Peptides support the skin’s natural repair process, making them particularly useful for healing damaged or irritated skin.</li>
      <li><strong>Enhance Skin Barrier:</strong> By improving the skin's ability to hold onto moisture and protect itself from environmental damage, peptides play a key role in maintaining a healthy skin barrier.</li>
      <li><strong>Soften Fine Lines and Wrinkles:</strong> Regular use of peptides in skincare can help reduce the appearance of fine lines and wrinkles by improving skin elasticity and texture.</li>
    </ul>

    <h4>3. Types of Peptides Used in Skincare</h4>
    <p>There are several types of peptides used in skincare products, each with its own specific benefits:</p>
    <ul>
      <li><strong>Signal Peptides:</strong> These peptides send signals to the skin to trigger certain functions, such as boosting collagen production. They help promote skin regeneration and healing.</li>
      <li><strong>Carrier Peptides:</strong> These peptides deliver essential minerals and other nutrients to the skin to support the overall health and function of the skin.</li>
      <li><strong>Enzyme-Inhibitor Peptides:</strong> These peptides prevent the breakdown of collagen and elastin by inhibiting certain enzymes that break down proteins. This helps maintain the skin's structure and elasticity.</li>
      <li><strong>Neurotransmitter Peptides:</strong> These peptides work by blocking the release of neurotransmitters, which can help reduce the appearance of fine lines and wrinkles caused by muscle contraction.</li>
    </ul>

    <h4>4. Benefits of Peptides in Skincare</h4>
    <p>Peptides offer a range of benefits for all skin types. Here are some key reasons why peptides are valuable in a skincare routine:</p>
    <ul>
      <li><strong>Anti-Aging:</strong> By stimulating collagen and elastin production, peptides help reduce the visible signs of aging, such as fine lines, wrinkles, and sagging skin.</li>
      <li><strong>Hydrating:</strong> Peptides help the skin retain moisture, promoting a hydrated and healthy complexion.</li>
      <li><strong>Improved Skin Barrier:</strong> Peptides enhance the skin's natural barrier, helping to protect it from environmental stressors like pollution and UV rays.</li>
      <li><strong>Skin Repair:</strong> Peptides aid in the repair of damaged skin and accelerate the healing process, making them ideal for post-treatment skincare.</li>
      <li><strong>Brightening:</strong> By promoting healthier skin and improving texture, peptides can help to reduce the appearance of dark spots and uneven skin tone.</li>
    </ul>

    <h4>5. Natural Sources of Peptides</h4>
    <p>Peptides are naturally found in the body as well as in food sources. Foods rich in protein, such as fish, eggs, and dairy products, provide the amino acids necessary for peptide production. Bone broth is also a natural source of peptides due to its high collagen content. However, in skincare products, peptides are typically synthesized or extracted from natural sources for higher concentrations and effectiveness.</p>

    <h4>6. How to Use Peptides in Skincare</h4>
    <p>Peptides can be easily incorporated into your skincare routine. Here’s how to use them:</p>
    <ul>
      <li><strong>In Serums:</strong> Peptide-based serums are popular for targeting specific skin concerns like fine lines, wrinkles, and loss of elasticity. Apply after cleansing and before moisturizing.</li>
      <li><strong>Moisturizers:</strong> Many moisturizers contain peptides that help boost hydration and improve skin texture. Use as part of your daily skincare routine.</li>
      <li><strong>Eye Creams:</strong> Peptides are commonly found in eye creams that target puffiness, dark circles, and crow's feet.</li>
      <li><strong>Face Masks:</strong> Some face masks contain peptide-rich formulas that help restore the skin’s elasticity and promote a healthy glow.</li>
    </ul>

    <h4>7. Things to Keep in Mind When Using Peptides</h4>
    <p>Peptides are generally safe for most skin types, but here are a few things to consider:</p>
    <ul>
      <li><strong>Consistency is Key:</strong> For the best results, use peptide products consistently as part of your daily skincare routine.</li>
      <li><strong>Layering:</strong> Peptides work well when layered with other skincare ingredients like hyaluronic acid and retinol. However, avoid mixing them with ingredients that may cause irritation, such as vitamin C in some cases.</li>
      <li><strong>Patience:</strong> While peptides are effective, they don’t work overnight. It may take a few weeks of consistent use to see visible results.</li>
    </ul>

    <h4>8. Final Thoughts on Peptides</h4>
    <p>Peptides are a powerhouse ingredient in skincare that provides multiple benefits, including anti-aging, hydration, and skin repair. Whether you’re looking to smooth fine lines, restore firmness, or simply improve your overall skin texture, peptides are a fantastic addition to any skincare routine. Their ability to stimulate collagen production and enhance skin barrier function makes them an ideal choice for those looking to maintain youthful, healthy skin.</p>
  `,
      imageUrl: "",
    },
  ];

  // Detect screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };
    //initial check
    handleResize();

    //listen for resize events
    window.addEventListener("resize", handleResize);

    //cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        allBlogs,
        mustReadBlogs,
        ingredientBlogs,
        askQuery,
        aiResponse,
        setAiResponse,
        loading,
        setLoading,
        isSmallScreen,
        setIsSmallScreen,
        openSideNav,
        setOpenSideNav,
        contrastColor,
        setContrastColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
