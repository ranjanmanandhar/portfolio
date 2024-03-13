import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";
import { School, Work } from "@mui/icons-material";
import Contact from "./Contact";

function Experience() {
  return (
    <>
    <div className="experience" id="experience">
      <h1>My Experience</h1>
      <VerticalTimeline layout="1-column-right">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer - Teksewa Services
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kathmandu, Nepal
          </h4>
          <p>Developed and Maintained infrastructure for US-based telecommunications.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2023"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer - Worldlink Communications
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kathmandu, Nepal
          </h4>
          <p>Developed and deployed multiple major projects working on both front and back end.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2023"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Nepal Engineering College, Bhaktapur, Nepal
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p> Computer Engineering </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2014"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Trinity International College, Kathmandu, Nepal
          </h3>
          <p> High School </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    <Contact></Contact>
    </>
  );
}

export default Experience;