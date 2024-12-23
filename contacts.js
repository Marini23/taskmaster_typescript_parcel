import emailjs from "@emailjs/browser";
import * as dotenv from "dotenv";
import { Notify } from "notiflix/build/notiflix-notify-aio";
dotenv.config();
const publicKey = process.env.PUBLIC_KEY;
const serviceId = process.env.SERVICE_ID;
const templateId = process.env.TEMPLATE_ID;
emailjs.init(publicKey);
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message")
        .value;
    const messageParams = {
        name,
        email,
        message,
    };
    emailjs
        .send(serviceId, templateId, messageParams)
        .then((response) => {
        Notify.success("Email sent successfully!", {
            position: "center-center",
            timeout: 1000,
        });
    })
        .catch((error) => {
        Notify.failure("Failed to send email. Please try again later.", {
            position: "center-center",
            timeout: 1000,
        });
    });
});
//# sourceMappingURL=contacts.js.map