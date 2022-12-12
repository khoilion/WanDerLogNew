import React from "react";
import "./security.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Security = () => {
  return (
    <>
      <div className="container security navbar-offset">
        <h1>Security and vulnerabilities</h1>
        <p>
          <strong>
            Have you found a vulnerability or security issue with our site?
            You've come to the right place.
          </strong>
        </p>
        <p className="ps-16">
          Fill out this form, including a detailed report of how we can
          reproduce the issue we're having (e.g., what account it's happening
          on), and we'll get back to you within 1 business day (or less if it's
          a particularly urgent issue.)
        </p>
        <p>
          Alternatively, feel free to send an email to{" "}
          <Link to="/" className="contact__email">
            security@wanderlog.com
          </Link>
          , and we'll get back to you all the same.
        </p>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email address" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Report</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Details about what you've found, including steps to reproduce it"
              />
            </Form.Group>
          </Form>
          <button className="btn btn-primary" type="submit">
            Contact the Wanderlog team
          </button>
        </div>
        <hr />
        <h2 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          Our security reporting policy
        </h2>
        <h3 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          Disclosure
        </h3>
        <ul>
          <li>
            <strong>Tell us early:</strong>
            Let us know as soon as you've discovered a possible issue. If you're
            still figuring it out, feel free to send us a preliminary report
            sooner rather than later.
          </li>
          <li>
            <strong>Responsible disclosure:</strong>
            We want to protect our users and fix issues before more people know
            about them. Give us some time to reply (usually 1 business day) and
            resolve your issue before posting about it to other public forums or
            contacting a third-party.
          </li>
          <li>
            <strong>Respect other users:</strong>
            Try in good faith to not make any other user's experience worse.
            Don't destroy data, violate people's privacy, or make our service
            unusable. If at all possible, test with your own accounts.
          </li>
        </ul>
        <h3 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          Exclusions
        </h3>
        <p>While researching, we'd like to ask you to refrain from:</p>
        <ul>
          <li>Denial of service</li>
          <li>Spamming</li>
          <li>Social engineering/phishing</li>
          <li>Social engineering/phishing</li>
        </ul>
        <h3 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          Safe harbor
        </h3>
        <p>
          Any activities conducted in a manner consistent with this policy will
          be considered authorized conduct and we will not initiate legal action
          against you. If legal action is initiated by a third party against you
          in connection with activities conducted under this policy, we will
          take steps to make it known that your actions were conducted in
          compliance with this policy.
        </p>
      </div>
    </>
  );
};

export default Security;
