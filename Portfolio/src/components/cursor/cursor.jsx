import React from "react";
import useMeasure from "react-use-measure";
import { useTrail, animated } from "@react-spring/web";
import styles from "../cursor/cursor.module.css"; // Asegúrate de que la ruta sea correcta

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 5, tension: 100, friction: 30 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function Cursor() {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));
  const [ref, { left, top }] = useMeasure();

  // Manejo de evento de mouse
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    api.start({ xy: [clientX - left, clientY - top] });
  };

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div ref={ref} className={styles.hooksMain}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
        ))}
      </div>
    </div>
  );
}
