import { useEffect } from "react";

import Hero from "../Components/About/AboutHero.jsx";
import MoreAbout from "../Components/About/AboutMore.jsx";
import Story from "../Components/About/AboutStory.jsx";
import Values from "../Components/About/AboutValues.jsx";
import Start from "../Components/About/AboutStart.jsx";


import bgImg1 from "../assets/about img1.webp"
import bgImg2 from "../assets/about gym2.webp"
import bgImg3 from "../assets/about gym3.webp"
import bgImg4 from "../assets/about gym4.jpeg"
import Last from "../assets/about last.jpeg"

import LastPic from "../assets/about last.png"

function About() {


    return (
        <>
            <Hero
                Tittle1="Stronger Today"
                Des="At The Gym Group, we believe fitness is more than just working out — it's about building a healthier lifestyle, boosting confidence, and becoming the best version of yourself."
                Button="Explore Classes"
            />

            <Story
                Tittle="Who We Are"
                Description1="Founded with the mission to make fitness accessible to everyone, The Gym Group has grown into one of the UK's most loved fitness communities."
                Description2="We pride ourselves on affordable memberships, top-quality equipment, and a welcoming environment for all fitness levels."
            />

            <Values />

            <MoreAbout
            ButtonText = "Explore Classes"
            bgImg1 = {bgImg1}
            bgImg2 = {bgImg2}
            bgImg3 = {bgImg3}
            bgImg4 = {bgImg4}
            />

            <Start
            Last={Last}
            Button2 = "Join Now" 
            AboutLast={LastPic}
            />
        </>
    );
}

export default About;