import React from 'react'
import Marquee from "react-fast-marquee"
import styles from "../styles/latestProjects.module.css"

import LP1 from "../assets/LatestProjects/lp-1.jpg"
import LP2 from "../assets/LatestProjects/lp-2.jpg"
import LP3 from "../assets/LatestProjects/lp-3.jpg"
import LP4 from "../assets/LatestProjects/lp-4.jpg"
import LP5 from "../assets/LatestProjects/project-img.avif"


import badge from "../assets/LatestProjects/badge.svg"

function LatestProjects() {
  const projects = [LP1, LP2, LP3, LP4, LP5];

  return (
    <div className={styles.latestProjects}>
      <img src={badge} alt="" className={styles.badge} />
      <Marquee
        speed={40}
        gradient={false}
        pauseOnHover={false}
        className={styles.marqueeContainer}
      >
        {projects.map((project, index) => (
          <img
            key={index}
            // src={project}
            src={LP5}
            alt={`Latest project ${index + 1}`}
            className={styles.lpImg}
          />
        ))}
      </Marquee>
    </div>
  )
}

export default LatestProjects
