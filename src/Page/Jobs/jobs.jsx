import React from "react";
import "./jobs.css";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <>
      <div id="jobs">
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <h1>
                <span>Jobs at Wanderlog</span>
              </h1>
              <p>
                Wanderlog is building tools to make leisure travel easier. We
                believe that travel makes us and the world better, and are
                trying to lower the bar to it. Our product so far is a Google
                Docs for planning travel and sharing recommendations.
              </p>
              <p>
                We’ve raised funding from <Link to="/">Y Combinator</Link>, an
                incubator that has funded travel startups such as AirBnB and
                Hipmunk.
              </p>
              <img
                className="w-100"
                src="img/2021-October-offsite-1-1536x851.jpg"
                alt=""
              />
              <figcaption className="text-center">
                The Wanderlog team in October, 2021
              </figcaption>
              <p>
                We love traveling. Whether it’s a short hop to Austin, Seattle,
                or New Orleans; or a longer jaunt to Australia, Hawaii, or Banff
                National Park (all places the team’s traveled to in the past
                year!), travel broadens our horizons, builds empathy, and
                challenges us to grow. We’re working to bring these experiences
                to more of the world.
              </p>
              <p>
                <strong>What’s it like to work at Wanderlog?</strong>
              </p>
              <p>
                We’re an engineering and product-heavy team. A typical week’s
                work involves talking to users, prioritizing tasks on a kanban,
                designing on Figma, and building and shipping continuously.
                Harry and I have worked at Stripe, McKinsey, and Google and
                studied Computer Science at Yale, and at Wanderlog, we try to
                take the best parts of each of the places we’ve been and bring
                them together.
              </p>
              <p>
                We believe in work-life balance. We work regular hours, take
                time off as a team to eat lunch together (and even cook!),
                exercise, and enjoy time with friends and family. We love travel
                and believe it rejuvenates us and makes us better people, and
                have semiannual offsites where the goal is to just enjoy
                visiting a new place and use the tools we’ve built.
              </p>
              <p>
                If you enjoy travel, and would love to make it easier for the
                rest of the world to do it, send us a note at{" "}
                <Link to="">founders@wanderlog.com</Link>! We’d love for you to
                join our team.
              </p>
              <p>– Harry and Peter, cofounders</p>
              <img src="img/avt-peter-and-harry-150x150.jpg" alt="" />
              <h2 className="mt-3">
                <strong>Who are we hiring?</strong>
              </h2>
              <ul>
                <li>
                  Unfortunately, we’ve filled all our roles right now. Check
                  back later!
                </li>
              </ul>
              <p>
                <strong>
                  Interested in applying? Get in touch at{" "}
                  <Link to="">founders@wanderlog.com</Link>
                </strong>
              </p>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
