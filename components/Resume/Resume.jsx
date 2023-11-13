import React from "react";
import { resumeData } from "./ResumeData";

const Resume = () => {
  return (
    <div className="section-box mt-4" id="resume">
      <div className="row">
        <div className="col-12 col-med-10 col-xl-8">
          <h6 className="title heading mb-3">{resumeData.mainData.title}</h6>
          <h1>{resumeData.mainData.title2}</h1>
          <p>{resumeData.mainData.description}</p>
        </div>
      </div>
      <div className="row g-4 g-lg-5 mt-0">
        <div className="col-12 col-xl-6">
          <div className="resume-wrapper">
            <div className="icon-2xl text-black mb-3">
              <i className="bi bi-mortarboard line-height-100"></i>
            </div>
            {resumeDataDara.education.map((item, index) => (
              <div key={index} className="resume-box">
                <span className="resume-date">{item.date}</span>
                <h5 className="fw-medium">{item.degree}</h5>
                <span>@ {item.university}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
