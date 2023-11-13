import React from "react";
import { projectData } from "./ProjectData";

const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const filteredProject =
    selectedFilter == ""
      ? projectData.projects
      : projectData.projects.filter((item) => item.category == selectedFilter);

  return (
    <div className="section-box mt-4" id="project">
      <div className="row">
        <div className="col-12 col-md-10 col-xl-8">
          <h6 className="title-heading mb-3">{projectData.mainData.title}</h6>
          <h1>{projectData.mainData.title}</h1>
          <p>{projectData.mainData.description}</p>
        </div>
      </div>
      <div className="filter mt-4 mt-lg-5 mb-3">
        <ul>
          <li
            onClick={() => setSelectedFilter("")}
            className={selectedFilter === "" ? "mixitup-contol-active" : ""}
          >
            Show All
          </li>
          {projectData.navigationList.map((listItem, index) => (
            <li
              key={index}
              onClick={() => setSelectedFilter(listItem.dataFilter.slice(1))}
              className={
                selectedFilter === listItem.dataFilter.slice(1)
                  ? "mixitup-control-active"
                  : ""
              }
            >
              {listItem.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
