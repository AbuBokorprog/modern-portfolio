"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./Cursor.module.css";

const Cursor = () => {
  useEffect(() => {
    const bigBall = document.querySelector(`.${styles.cursor__ball__big}`);
    const smallBall = document.querySelector(`.${styles.cursor__ball__small}`);
    const hoverables = document.querySelectorAll(".hoverable");

    const onMouseMove = (e) => {
      gsap.to(bigBall, {
        duration: 0.4,
        x: e.clientX - 15,
        y: e.clientY - 15,
      });
      gsap.to(smallBall, {
        duration: 0.1,
        x: e.clientX - 5,
        y: e.clientY - 7,
      });
    };

    const onMouseHover = () => {
      gsap.to(bigBall, {
        duration: 0.3,
        scale: 4,
      });
    };

    const onMouseHoverOut = () => {
      gsap.to(bigBall, {
        duration: 0.3,
        scale: 1,
      });
    };

    document.body.addEventListener("mousemove", onMouseMove);
    hoverables.forEach((hoverable) => {
      hoverable.addEventListener("mouseenter", onMouseHover);
      hoverable.addEventListener("mouseleave", onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener("mouseenter", onMouseHover);
        hoverable.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className={styles.cursor}>
      <div className={`${styles.cursor__ball} ${styles.cursor__ball__big}`}>
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>
      <div className={`${styles.cursor__ball} ${styles.cursor__ball__small}`}>
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
