import React, { useState } from "react";
import Styles from "../../Styles/Components-Styles/TimeLine.module.scss";

// MUI Imports Start
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
// MUI Imports End

const TimelineAlternate = () => {
  const [position, setPosition] = useState("alternate");
  return (
    <div>
      <Timeline className={Styles.Timeline} position={position}>
        <TimelineItem className={Styles.Timeline_Item}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={Styles.Time_Card}>
            <p className={Styles.Year}>1990</p>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              obcaecati rerum enim suscipit eaque dolorum quidem impedit
              repudiandae architecto facilis!
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={Styles.Timeline_Item}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={Styles.Time_Card}>
            <p className={Styles.Year}>1990</p>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              obcaecati rerum enim suscipit eaque dolorum quidem impedit
              repudiandae architecto facilis!
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={Styles.Timeline_Item}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={Styles.Time_Card}>
            <p className={Styles.Year}>1990</p>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              obcaecati rerum enim suscipit eaque dolorum quidem impedit
              repudiandae architecto facilis!
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={Styles.Timeline_Item}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={Styles.Time_Card}>
            <p className={Styles.Year}>1990</p>
            <p className={Styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              obcaecati rerum enim suscipit eaque dolorum quidem impedit
              repudiandae architecto facilis!
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimelineAlternate;
