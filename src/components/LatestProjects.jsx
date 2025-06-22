import React from 'react'
import styles from "../styles/latestProjects.module.css"

import LP1 from "../assets/LatestProjects/lp-1.jpg"
import LP2 from "../assets/LatestProjects/lp-2.jpg"
import LP3 from "../assets/LatestProjects/lp-3.jpg"
import LP4 from "../assets/LatestProjects/lp-4.jpg"
import badge from "../assets/LatestProjects/badge.svg"

function LatestProjects() {
  return (
    <div className={styles.latestProjects}>
      <img src={badge} alt="" className={styles.badge} />
      <img src={LP1} alt="" className={styles.lpImg} />
      <img src={LP2} alt="" className={styles.lpImg} />
      <img src={LP3} alt="" className={styles.lpImg} />
      <img src={LP4} alt="" className={styles.lpImg} />
    </div>
  )
}

export default LatestProjects
