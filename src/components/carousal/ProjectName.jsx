import React from "react";

const ProjectName = () => {
  return (
    <div>
      <div className="">
        {/* <input
          type="text"
          className="project_name"
        /> */}
        <input
          placeholder="Project Name"
          type="text"
          className="search_input1"
          // onChange={handleSearch}
          // value={searchText}
        />
      </div>
    </div>
  );
};

export default ProjectName;
