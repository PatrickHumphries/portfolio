import { directive } from "@babel/types";
import "./Work.css";

function Work() {
  return (
    <div className="Work">
      <div className="WTF">
        <h2>Where's The Food Trucks?</h2>
        <p>
          Where’s The Food Trucks? A full-stack, mobile-first, single page
          application developed using React, Express, and MongoDB. I took the
          role of front-end developer in our team of three, designing and
          crafting most of our React components. The project is hosted through
          firebase, and available here:
          <span>
            {" "}
            <a href="https://wtf-truck.web.app/">Where's The Food Trucks?</a>
          </span>
          <p>
            NOTE: The app is currently down, but I am working to resolve this
            issue. In the meantime, here is a video of the app in action, taken
            by one of my team members.
          </p>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6814165254348574720?compact=1"
            height="100%"
            width="100%"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </p>
      </div>
    </div>
  );
}

export default Work;
