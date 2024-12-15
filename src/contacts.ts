import emailjs from "emailjs-com";

type GetInToughtMessage = {
  name: string;
  email: string;
  message: string;
};

const contactForm = document.querySelector(".contact-form") as HTMLFormElement;

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const message = (document.getElementById("message") as HTMLTextAreaElement)
    .value;

  const messageParams = {
    name,
    email,
    message,
  };

  console.log(messageParams);
});
