import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/ibrahim_code_Express_win.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Ibrahim</h4>
          <h6>Founder, CEO Of This Project</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          Hi, I’m Ibrahim JP, a dedicated software developer currently pursuing my BCA (Dual) at GLS University
          </p>
          <p>
          I have a strong foundation in full-stack web development with hands-on experience using the MERN stack. Over time, I’ve built several projects, including a hotel renting platform and an expense management system. These projects have helped me apply concepts like API development, database management using MongoDB, and crafting dynamic user experiences with React.js. I enjoy designing scalable solutions that solve real-world problems effectively.
          </p>
          <p>In addition to my development skills, I’m passionate about problem-solving. I’ve solved over 430 problems on LeetCode, consistently improving my understanding of data structures and algorithms. This has enhanced my logical thinking and ability to break down complex problems into simpler, manageable solutions.</p>
          <p>
            Connect on <a href="https://leetcode.com/u/Ebrahim7/">LeetCode</a> / <a href="https://www.linkedin.com/in/ibrahim-jp-b4433a306/">LinkedIn</a> /{" "}
            <a href="https://github.com/ibrahimjp">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
