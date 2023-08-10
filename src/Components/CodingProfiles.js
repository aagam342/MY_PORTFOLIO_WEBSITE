import React from "react";
import gfg from "../Images/GFG.jpg";
import leetcode from "../Images/leetcode.avif";
import codechef from "../Images/codechef.jpg";
import codingNinjas from "../Images/Coding-Ninjas.jpg";
import "../Styles/CodingProfiles.css";

const CodingProfiles = () => {
  const imgSrc = [leetcode, gfg, codechef, codingNinjas];
  const codingProfiles = [
    {
      platform: "LeetCode",
      link: "https://leetcode.com/aagam342/",
    },
    {
      platform: "GeeksforGeeks",
      link: "https://auth.geeksforgeeks.org/user/aagam342/profile",
    },
    {
      platform: "CodeChef",
      link: "https://www.codechef.com/users/aagam342",
    },
    {
      platform: "Coding-Ninjas",
      link: "https://www.codingninjas.com/studio/profile/aagam342",
    },
  ];

  return (
    <div>
      <h2 className="headings">Coding Profiles</h2>
      <div className="cards cards-section">
        {codingProfiles.map((profile, index) => (
          <div key={index}>
            <div className="card" style={{ width: 18 + "rem" }}>
              <img src={imgSrc[index]} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{profile.platform}</h5>
                
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Profile
                </a>
              </div>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
