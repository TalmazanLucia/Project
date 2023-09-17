import React from "react";
import { Navbar } from "../../../widgets/Navbar";
import "./Blog.scss";
import { Chenar } from "../../../entities/Chenar";
import blogCalendarImage from "../../../shared/assets/images/blogcalendar.jpg";
import blogBussinesImage from "../../../shared/assets/images/blogbussines.jpg";
import blogFreeTimeImage from "../../../shared/assets/images/blogfreetime.jpg";

const Blog = () => {
  return (
    <div className="blog-wrapper">
      <Navbar />
      <p className="titleblog">News </p>
      <div className="content-wrapper">
        <p className="titleblogg">
          Good news is rare these days,<p> and every glittering ounce of it</p>{" "}
          should be cherished and <p>hoarded and worshipped and fondled </p>like
          a priceless diamond.{" "}
        </p>
        <div className="column-wrapper">
          <div className="row-wrapper">
            <Chenar
              image={blogCalendarImage}
              title={"Calendar"}
              description={"he booking calendar within the software allows users to view the availability of rooms and resources, and schedule and manage events and meetings. You can even publish a public calendar of events to your organization's website."}
            />
            <Chenar
              image={blogBussinesImage}
              title={"Business"}
              description={"The fact is that Digital, Social, and Mobile technologies have dramatically changed the world we live in and the businesses we work for. But no function has been more disrupted more than marketing."}
            />
          </div>
          <Chenar
            className="big-chenar"
            image={blogFreeTimeImage}
            title={"Free Time"}
            description={"How you spend your free time says a lot about you. You might fall in love with a new book genre or take a crack at an intimidating hobby. This leisure time is an opportunity to try new things, get out of your comfort zone, and learn more about who you are."}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
