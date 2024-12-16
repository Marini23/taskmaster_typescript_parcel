import emailjs from "@emailjs/browser";
import * as dotenv from "dotenv";

dotenv.config();

type GetInToughtMessage = {
  name: string;
  email: string;
  message: string;
};

const publicKey = process.env.PUBLIC_KEY;
const serviceId = process.env.SERVICE_ID;
console.log(publicKey);
console.log(serviceId);

// emailjs.init({
//   publicKey: process.env.PUBLIC_KEY,
// });

// const contactForm = document.querySelector(".contact-form") as HTMLFormElement;

// contactForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("submit");
//   const name = (document.getElementById("name") as HTMLInputElement).value;
//   const email = (document.getElementById("email") as HTMLInputElement).value;
//   const message = (document.getElementById("message") as HTMLTextAreaElement)
//     .value;

//   const messageParams: GetInToughtMessage = {
//     name,
//     email,
//     message,
//   };

//   console.log(messageParams);
//   emailjs
//     .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, messageParams)
//     .then((response) => {
//       console.log("SUCCESS!", response.status, response.text);
//       alert("Email sent successfully!");
//     })
//     .catch((error) => {
//       console.error("FAILED...", error);
//       alert("Failed to send email. Please try again later.");
//     });
// });
