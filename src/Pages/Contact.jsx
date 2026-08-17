import ContactCards from "../Components/Contact/ContactCards"
import ContactForm from "../Components/Contact/ContactForm"
import ContactHero from "../Components/Contact/ContactHero"
import ContactLoactions from "../Components/Contact/ContactLocations"
import Start from "../Components/Contact/ContactStart"

import Last from "../assets/about last.jpeg"
import Back from "../assets/about last.png"

function Contact () {

     


    return (

        <>

            <ContactHero/>

            <ContactCards/>

            <ContactForm/>

            <ContactLoactions/>

            <Start
            LastPic={Last}
            Button2= "Join Now"
            BackPic={Back}
            />
        </>

    )
}

export default Contact