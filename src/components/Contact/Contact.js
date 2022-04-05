import { Typography, Card, TextField, Button, Box, Alert } from "@mui/material";
import React from "react";
import sendEmail from "../../requests/sendEmail";
import DownArrow from "../DownArrow";
import "./contact.scss";
import Anchor from "../Anchor";
import Logo from "../Logo/Logo";
import { socialLogos } from "../../data";

const FeedbackEnum = {
  Success: "success",
  Error: "error",
  None: "none",
};

export default function Contact() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [feedback, setFeedback] = React.useState(FeedbackEnum.None);

  const onChange = (e, setState) => {
    setState(e.target.value);
  };

  const onSuccess = () => {
    setEmail("");
    setName("");
    setMessage("");
    setFeedback(FeedbackEnum.Success);
  };

  const onError = () => {
    setFeedback(FeedbackEnum.Error);
  };

  const resetFeedback = () => {
    setFeedback(FeedbackEnum.None);
  };

  const getFeedback = () => {
    switch (feedback) {
      case FeedbackEnum.Success:
        return (
          <Alert onClose={resetFeedback} severity="success">
            Message Sent!
          </Alert>
        );
      case FeedbackEnum.Error:
        return (
          <Alert onClose={resetFeedback} severity="error">
            There was an error with your request.
          </Alert>
        );
      default:
        return <React.Fragment />;
    }
  };

  return (
    <section id="contact" className="contact">
      <DownArrow />
      <div className="inner-container">
        <Typography variant="h1" mb={1.5}>
          Contact
        </Typography>
        <Card className="contact-form">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            autoComplete="off"
          >
            <TextField
              className="form-field"
              id="standard-basic"
              label="Full Name"
              variant="standard"
              onChange={(e) => onChange(e, setName)}
              value={name}
            />
            <TextField
              className="form-field"
              id="standard-basic"
              label="Email"
              variant="standard"
              value={email}
              onChange={(e) => onChange(e, setEmail)}
            />
            <TextField
              className="form-field"
              multiline
              maxRows={4}
              value={message}
              id="standard-basic"
              label="Message"
              variant="standard"
              onChange={(e) => onChange(e, setMessage)}
            />
            {getFeedback()}
            <div className="send-btn-container">
              <Button
                variant="outlined"
                disabled={!email || !message || !name}
                onClick={(e) => {
                  e.preventDefault();
                  sendEmail(name, email, message, onSuccess, onError);
                }}
              >
                Send
              </Button>
            </div>
          </Box>
        </Card>
        <div className="social-icons">
          <Anchor
            href="https://github.com/allyjarjour"
            ariaLabel="See my GitHub profile"
          >
            <Logo data={socialLogos.github} />
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/allyjarjour/"
            ariaLabel="See my LinkedIn Profile"
          >
            <Logo data={socialLogos.linkedIn} />
          </Anchor>
        </div>
      </div>
    </section>
  );
}
