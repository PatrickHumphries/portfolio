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
            NOTE: The app is currently down, and I am working to resolve this
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
      <hr></hr>
      <div className="budget-buddy">
        <h2>Budget Buddy</h2>
        <p>
          My first ever functional website, used for setting monthly budgets,
          and tracking all expenses by sorting them into categories. The user is
          able to then see the breakdown of their spending in each category, as
          well as their total amount spent for that month. Users can also set
          warnings to indicate when only a certain percentage of their budget
          remains. The project was pair-programmed in a team of two. Available
          here:
          <span>
            {" "}
            <a
              href="https://patrickhumphries.github.io/gc-js-project/"
              target="_blank"
            >
              Budget Buddy
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Work;
