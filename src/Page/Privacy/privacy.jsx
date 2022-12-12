import React from "react";
import "./privacy.css";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div id="privacy">
      <div className="container navbar-offset">
        <h1>Privacy Policy for Wanderlog</h1>
        <p>
          At Wanderlog, your privacy is a priority. Our Privacy Policy details
          what information we collect and how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us through email at{" "}
          <Link to="/">admin@wanderlog.com</Link>
        </p>
        <h2 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          1. General Data Protection Regulation (GDPR)
        </h2>
        <p>
          We are a Data Controller of your information under the terms of the
          European General Data Protection Regulation. To better understand your
          rights under the GDPR, see this{" "}
          <Link to="/">
            resource provided by the UK Information Commissioner's Office.
          </Link>
        </p>
        <p>
          Travelchime Inc. (hereafter "Wanderlog", "we" or "us") legal basis for
          collecting and using the personal information described in this
          Privacy Policy depends on the Personal Information we collect and the
          specific context in which we collect the information:
        </p>
        <ul>
          <li>We needs to perform a contract with you</li>
          <li>You have given us permission to do so</li>
          <li>
            Processing your personal information is in our legitimate interests
          </li>
          <li>We needs to comply with the law</li>
        </ul>
        <p>
          Travelchime Inc. will retain your personal information only for as
          long as is necessary for the purposes set out in this Privacy Policy.
          We will retain and use your information to the extent necessary to
          comply with our legal obligations, resolve disputes, and enforce our
          policies.
        </p>
        <p>
          If you are a resident of the European Economic Area (EEA), you have
          certain data protection rights. If you wish to be informed what
          Personal Information we hold about you and if you want it to be
          removed from our systems, please contact us.
        </p>
        <p>
          In certain circumstances, you have the following data protection
          rights:
        </p>
        <ul>
          <li>
            The right to access, update or to delete the information we have on
            you.
          </li>
          <li>The right of rectification.</li>
          <li>The right to object.</li>
          <li>The right of restriction.</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent</li>
        </ul>
        <h2 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          2. Log Files
        </h2>
        <p>
          Wanderlog follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          and a part of hosting services' analytics. The information collected
          by log files include internet protocol (IP) addresses, browser type,
          Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the
          information is for analyzing trends, administering the site, tracking
          users' movement on the website, and gathering demographic information.
        </p>
        <h2 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          3. Cookies and Web Beacons
        </h2>
        <p>
          Like any other website, Wanderlog uses 'cookies'. These cookies are
          used to store information including visitors' preferences, and the
          pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information.
        </p>
        <h2 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          4. User-provided Information
        </h2>
        <p>
          To run Wanderlog, we collect and process the following kinds of
          information.
        </p>
        <h3 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          Google data
        </h3>
        <h4>Gmail data</h4>
        <p>
          If you choose to connect your Gmail account to Wanderlog, we will use
          access to your Gmail account to solely parse travel receipts.
          Specifically:
        </p>
        <ul>
          <li>
            We will receive a notification from Gmail when you receive a new
            email
          </li>
          <li>
            We will parse the email with the help of AwardWallet to identify
            whether it is a travel receipts (for hotels, flights, and other
            bookings)
          </li>
          <li>
            Only if the receipt is for travel will we create a document on
            Wanderlog with the confirmation and store the receipt on our
            servers.
          </li>
          <li>
            We will not store or process any emails other than as outlined
            above.
          </li>
        </ul>
        <p>Wanderlog will never:</p>
        <ul>
          <li>Use Gmail data for ad targeting or serving.</li>
          <li>
            Allow any employees to read Gmail data unless we either 1) obtained
            your consent in writing; 2) need it for security purposes (bug
            investigation and abuse monitoring); or 3) are required to disclose
            it for legal purposes.
          </li>
        </ul>
        <p>
          All internal uses not mentioned in item 2 above will be only of
          aggregated, anonymized Gmail data.
        </p>
        <p>
          All uses of this data will also comply with the{" "}
          <Link to="/">Google API Services: User Data Policy.</Link>
        </p>
        <h3 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          User profile data
        </h3>
        <p>className="font-weight-bold mb-3 line-height-1 letter-spacing-03"</p>
        <p>
          Once signed into Wanderlog, you may set a username, display name, and
          home base location to display on your profile. This information will
          be used as a part of your public profile on Wanderlog for readers to
          get to know you, and is associated with your posts.
        </p>
        <h3 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          Trip plan data
        </h3>
        <p>
          When using Wanderlog, you may select places, write comments, Like
          specific places, and paste images/maps into your trip logs. This data
          will be stored and shown when someone views a trip log that you have
          authored.
        </p>
        <h3>Deleting your data</h3>
        <p>
          To delete your account and associated user data, you may sign in and
          visit <Link to="/">our settings page</Link>, which includes a "Delete
          account" button. Our system will fully delete your account within two
          weeks of receiving the request.
        </p>
        <h2 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          5. Third Party Advertisers
        </h2>
        <p>
          Third-party ad servers or ad networks use technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Wanderlog, which are sent
          directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </p>
        <p>
          Note that Wanderlog has no access to or control over these cookies
          that are used by third-party advertisers.
        </p>
        <h2 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          6. Third Party Privacy Policies
        </h2>
        <p>
          Wanderlog's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.
        </p>
        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites.
        </p>
        <h2 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          7. Children's Information
        </h2>
        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>
        <p>
          Wanderlog does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>
        <h2 className="font-weight-bold mb-3 line-height-1 letter-spacing-03">
          8. Consent
        </h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
