import emailjs from "@emailjs/browser";

const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAIL_JS_USER_ID;

const sendEmail = async (name, email, message, onSuccess, onError) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      { name, email, message },
      userId
    );

    if (response.status === 200) {
      console.log("Successfully sent message.");
      typeof onSuccess === "function" && onSuccess();
    }
  } catch (error) {
    console.error("Failed to send email. Error: ", error);
    typeof onError === "function" && onError();
  }
};

export default sendEmail;
