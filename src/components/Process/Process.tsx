import { FC } from "react";
import "./Process.scss";

export const Process: FC = () => {
  return (
    <div className="Process">
      <div className="Process__header">
        <h1>Our Process</h1>
        <span>How we work</span>
        <p>
          We love the web and we love helping people improve their online
          profile! Tidal Sites offers a variety of services to get you noticed
          online.
        </p>
      </div>
      <div className="Process__content">
        <div className="Process__stage">
          <h2>Design</h2>
          <div className="Process__stage__content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              vitae veritatis sunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius
              laborum vel nobis reprehenderit exercitationem magnam dolor saepe
              molestiae aut.
            </p>
          </div>
        </div>
        <div className="Process__stage">
          <h2>Develop</h2>
          <div className="Process__stage__content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              vitae veritatis sunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius
              laborum vel nobis reprehenderit exercitationem magnam dolor saepe
              molestiae aut.
            </p>
          </div>
        </div>
        <div className="Process__stage">
          <h2>Deploy</h2>
          <div className="Process__stage__content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              vitae veritatis sunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius
              laborum vel nobis reprehenderit exercitationem magnam dolor saepe
              molestiae aut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
