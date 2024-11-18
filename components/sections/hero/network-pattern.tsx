"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

// Define the structure of each point in the network
interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string; // Added color property for customization
  lifespan?: number; // Optional property to track lifespan for points added via click
}

export const NetworkPattern = () => {
  // Reference to the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Motion values for smooth mouse interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 110, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 110, damping: 30 });

  // Access the current theme (light or dark)
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Type Assertions to eliminate TypeScript errors
    const safeCanvas = canvas as HTMLCanvasElement;
    const safeCtx = ctx as CanvasRenderingContext2D;

    // Configuration Constants
    const MIN_DISTANCE = 25; // Minimum distance between points
    const CORNER_AREA = 200; // Area near each corner to place points
    const SPREAD = 60; // Spread within this range from corner
    const SAFE_ZONE_SIZE = 25; // Reduced size of the central square for proximity
    const BASE_POINTS_PER_CORNER = 22; // Increased points per corner
    const BASE_EXTRA_POINTS = 11; // Increased extra points

    const points: Point[] = []; // Array to hold all points

    /**
     * Calculates the Euclidean distance between two points.
     */
    const getDistance = (x1: number, y1: number, x2: number, y2: number): number => {
      const dx = x1 - x2;
      const dy = y1 - y2;
      return Math.sqrt(dx * dx + dy * dy);
    };

    /**
     * Checks if a new point is valid by ensuring it maintains the minimum distance from existing points.
     */
    const isValidPoint = (x: number, y: number): boolean => {
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const distance = getDistance(x, y, point.x, point.y);
        if (distance < MIN_DISTANCE) {
          return false;
        }
      }
      return true;
    };

    /**
     * Generates points around the corners and edges, ensuring minimum spacing.
     * Avoids the central safe zone to keep the Hero content clear.
     */
    function generatePoints() {
      points.length = 0; // Clear existing points

      // Define the four corners
      const corners = [
        { x: 0, y: 0 }, // Top-Left
        { x: window.innerWidth, y: 0 }, // Top-Right
        { x: 0, y: window.innerHeight }, // Bottom-Left
        { x: window.innerWidth, y: window.innerHeight }, // Bottom-Right
      ];

      // Define safe zone boundaries in the center
      const safeZoneLeft = (window.innerWidth - SAFE_ZONE_SIZE) / 2;
      const safeZoneRight = safeZoneLeft + SAFE_ZONE_SIZE;
      const safeZoneTop = (window.innerHeight - SAFE_ZONE_SIZE) / 2;
      const safeZoneBottom = safeZoneTop + SAFE_ZONE_SIZE;

      // Generate points near the corners
      corners.forEach((corner) => {
        let attempts = 0;
        const maxAttempts = BASE_POINTS_PER_CORNER * 5; // Limit attempts to prevent infinite loops

        while (
          points.filter(
            (p) =>
              Math.round(p.x) === Math.round(corner.x) &&
              Math.round(p.y) === Math.round(corner.y)
          ).length < BASE_POINTS_PER_CORNER &&
          attempts < maxAttempts
        ) {
          let x: number;
          let y: number;

          // Randomly offset points within the spread from the corner
          if (corner.x === 0) {
            x = corner.x + Math.random() * SPREAD;
          } else {
            x = corner.x - Math.random() * SPREAD;
          }

          if (corner.y === 0) {
            y = corner.y + Math.random() * SPREAD;
          } else {
            y = corner.y - Math.random() * SPREAD;
          }

          // Ensure points are not within the safe zone
          if (
            x > safeZoneLeft &&
            x < safeZoneRight &&
            y > safeZoneTop &&
            y < safeZoneBottom
          ) {
            attempts++;
            continue; // Skip adding this point
          }

          // Check for minimum distance
          if (!isValidPoint(x, y)) {
            attempts++;
            continue;
          }

          // Determine color based on theme
          const pointColor = theme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.25)";

          // Add the point with a slightly larger radius for better visibility
          points.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.5, // Slower velocity for smoother movement
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2.0 + 0.5, // Radius between 1.0 and 2.5
            color: pointColor,
          });

          attempts++;
        }
      });

      // Optionally, add some extra points near edges to fill gaps
      let extraAttempts = 0;
      const maxExtraAttempts = BASE_EXTRA_POINTS * 5; // Limit attempts to prevent infinite loops

      while (
        points.length < BASE_POINTS_PER_CORNER * 4 + BASE_EXTRA_POINTS &&
        extraAttempts < maxExtraAttempts
      ) {
        const edge = Math.floor(Math.random() * 4);
        let x: number, y: number;

        switch (edge) {
          case 0: // Top edge
            x = Math.random() * window.innerWidth;
            y = Math.random() * CORNER_AREA;
            break;
          case 1: // Bottom edge
            x = Math.random() * window.innerWidth;
            y = window.innerHeight - Math.random() * CORNER_AREA;
            break;
          case 2: // Left edge
            x = Math.random() * CORNER_AREA;
            y = Math.random() * window.innerHeight;
            break;
          case 3: // Right edge
            x = window.innerWidth - Math.random() * CORNER_AREA;
            y = Math.random() * window.innerHeight;
            break;
          default:
            // Fallback in case of unexpected edge value
            x = Math.random() * window.innerWidth;
            y = Math.random() * window.innerHeight;
            break;
        }

        // Ensure not in the safe zone
        if (
          x > safeZoneLeft &&
          x < safeZoneRight &&
          y > safeZoneTop &&
          y < safeZoneBottom
        ) {
          extraAttempts++;
          continue;
        }

        // Check for minimum distance
        if (!isValidPoint(x, y)) {
          extraAttempts++;
          continue;
        }

        // Determine color based on theme
        const pointColor = theme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.25)";

        // Add the extra point with a slightly larger radius
        points.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.5, // Slower velocity for smoother movement
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2.0 + 0.5, // Radius between 1.0 and 2.5
          color: pointColor,
        });

        extraAttempts++;
      }
    }

    /**
     * Resizes the canvas based on the device pixel ratio and window dimensions.
     * Regenerates points to fit the new dimensions.
     */
    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      safeCanvas.width = window.innerWidth * dpr;
      safeCanvas.height = window.innerHeight * dpr;
      safeCtx.scale(dpr, dpr);
      generatePoints(); // Regenerate points on resize to fit new dimensions
    }

    /**
     * Animates the network pattern by updating point positions and rendering them.
     * Continuously called using requestAnimationFrame for smooth animations.
     */
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      safeCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Set colors based on the current theme
      const baseColor = theme === "dark" ? "255, 255, 255" : "0, 0, 0";

      // Update and draw each point
      points.forEach((point, index) => {
        // Apply mouse influence
        const dx = springX.get() - point.x;
        const dy = springY.get() - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 160) { // Reduced interaction radius for subtler effect
          const force = (1 - dist / 160) * 0.3; // Reduced force for slower reaction
          point.vx -= (dx / dist) * force;
          point.vy -= (dy / dist) * force;
        }

        // Update position
        point.x += point.vx * (deltaTime / 16);
        point.y += point.vy * (deltaTime / 16);

        // Wrap around edges for seamless animation
        if (point.x < 0) point.x = window.innerWidth;
        if (point.x > window.innerWidth) point.x = 0;
        if (point.y < 0) point.y = window.innerHeight;
        if (point.y > window.innerHeight) point.y = 0;

        // Apply friction for smoother slowdown
        point.vx *= 0.98; // Increased friction for slower movement
        point.vy *= 0.98;

        // Draw the point
        safeCtx.beginPath();
        safeCtx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        safeCtx.fillStyle = point.color; // Use point-specific color
        safeCtx.fill();
      });

      // Draw connections between points
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[j].x - points[i].x;
          const dy = points[j].y - points[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) { // Reduced connection distance for less clutter
            safeCtx.beginPath();
            safeCtx.moveTo(points[i].x, points[i].y);
            safeCtx.lineTo(points[j].x, points[j].y);
            // Determine opacity based on distance
            const opacity = 0.05 * (1 - dist / 120); // Lower opacity for subtler connections
            safeCtx.strokeStyle = theme === "dark"
              ? `rgba(255, 255, 255, ${opacity})`
              : `rgba(0, 0, 0, ${opacity})`;
            safeCtx.stroke();
          }
        }
      }

      // Continue the animation loop
      animationFrameId = requestAnimationFrame(animate);
    };

    /**
     * Handles mouse movement by updating the motion values.
     * @param e - The mouse move event
     */
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    /**
     * Handles mouse clicks by adding new points with reduced opacity and slower movement.
     * @param e - The mouse click event
     */
    const handleMouseClick = (e: MouseEvent) => {
      // Define properties for the new point
      const newPoint: Point = {
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 0.2, // Much slower movement
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.0 + 0.5, // Smaller radius
        color: theme === "dark" ? "rgba(255, 255, 255, 0.085)" : "rgba(0, 0, 0, 0.085)", // Lower opacity
        lifespan: 300, // Lifespan in frames for the new point
      };
      points.push(newPoint);
    };

    // Event listeners for mouse movement, clicks, and window resize
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);
    window.addEventListener("resize", resizeCanvas);

    // Initial canvas setup and point generation
    resizeCanvas();
    generatePoints();

    // Start the animation loop
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup function to remove event listeners and cancel animation frames on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, springX, springY]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};


































































































































































































































































































 

// // components/sections/hero/network-pattern.tsx
// "use client";

// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { useTheme } from "next-themes";
// import { useEffect, useRef } from "react";

// // Define the structure of each point in the network
// interface Point {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   radius: number;
// }

// export const NetworkPattern = () => {
//   // Reference to the canvas element
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Motion values for smooth mouse interaction
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
//   const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

//   // Access the current theme (light or dark)
//   const { theme } = useTheme();

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Type Assertions to eliminate TypeScript errors
//     const safeCanvas = canvas as HTMLCanvasElement;
//     const safeCtx = ctx as CanvasRenderingContext2D;

//     // Configuration Constants
//     const MIN_DISTANCE = 30; // Minimum distance between points
//     const CORNER_AREA = 300; // Area near each corner to place points
//     const SPREAD = 60; // Spread within this range from corner
//     const SAFE_ZONE_SIZE = 50; // Reduced size of the central square for proximity
//     const BASE_POINTS_PER_CORNER = 23;
//     const BASE_EXTRA_POINTS = 12;

//     // Increase points by ~10%
//     const POINTS_PER_CORNER = Math.floor(BASE_POINTS_PER_CORNER * 1.10); // 23 * 1.10 ≈ 25
//     const EXTRA_POINTS = Math.floor(BASE_EXTRA_POINTS * 1.10); // 12 * 1.10 ≈ 13

//     const points: Point[] = []; // Array to hold all points

//     /**
//      * Calculates the Euclidean distance between two points.
//      * @param x1 - X-coordinate of the first point
//      * @param y1 - Y-coordinate of the first point
//      * @param x2 - X-coordinate of the second point
//      * @param y2 - Y-coordinate of the second point
//      * @returns The distance between the two points
//      */
//     const getDistance = (
//       x1: number,
//       y1: number,
//       x2: number,
//       y2: number
//     ): number => {
//       const dx = x1 - x2;
//       const dy = y1 - y2;
//       return Math.sqrt(dx * dx + dy * dy);
//     };

//     /**
//      * Checks if a new point is valid by ensuring it maintains the minimum distance from existing points.
//      * @param x - X-coordinate of the new point
//      * @param y - Y-coordinate of the new point
//      * @returns True if the point is valid, false otherwise
//      */
//     const isValidPoint = (x: number, y: number): boolean => {
//       for (let i = 0; i < points.length; i++) {
//         const point = points[i];
//         const distance = getDistance(x, y, point.x, point.y);
//         if (distance < MIN_DISTANCE) {
//           return false;
//         }
//       }
//       return true;
//     };

//     /**
//      * Generates points around the corners and edges, ensuring minimum spacing.
//      * Avoids the central safe zone to keep the Hero content clear.
//      */
//     function generatePoints() {
//       points.length = 0; // Clear existing points

//       // Define the four corners
//       const corners = [
//         { x: 0, y: 0 }, // Top-Left
//         { x: window.innerWidth, y: 0 }, // Top-Right
//         { x: 0, y: window.innerHeight }, // Bottom-Left
//         { x: window.innerWidth, y: window.innerHeight }, // Bottom-Right
//       ];

//       // Define safe zone boundaries in the center
//       const safeZoneLeft = (window.innerWidth - SAFE_ZONE_SIZE) / 2;
//       const safeZoneRight = safeZoneLeft + SAFE_ZONE_SIZE;
//       const safeZoneTop = (window.innerHeight - SAFE_ZONE_SIZE) / 2;
//       const safeZoneBottom = safeZoneTop + SAFE_ZONE_SIZE;

//       // Generate points near the corners
//       corners.forEach((corner) => {
//         let attempts = 0;
//         const maxAttempts = POINTS_PER_CORNER * 5; // Limit attempts to prevent infinite loops

//         while (
//           points.filter(
//             (p) =>
//               Math.round(p.x) === Math.round(corner.x) &&
//               Math.round(p.y) === Math.round(corner.y)
//           ).length < POINTS_PER_CORNER &&
//           attempts < maxAttempts
//         ) {
//           let x: number;
//           let y: number;

//           // Randomly offset points within the spread from the corner
//           if (corner.x === 0) {
//             x = corner.x + Math.random() * SPREAD;
//           } else {
//             x = corner.x - Math.random() * SPREAD;
//           }

//           if (corner.y === 0) {
//             y = corner.y + Math.random() * SPREAD;
//           } else {
//             y = corner.y - Math.random() * SPREAD;
//           }

//           // Ensure points are not within the safe zone
//           if (
//             x > safeZoneLeft &&
//             x < safeZoneRight &&
//             y > safeZoneTop &&
//             y < safeZoneBottom
//           ) {
//             attempts++;
//             continue; // Skip adding this point
//           }

//           // Check for minimum distance
//           if (!isValidPoint(x, y)) {
//             attempts++;
//             continue;
//           }

//           // Add the point with a 5% larger radius
//           points.push({
//             x,
//             y,
//             vx: (Math.random() - 0.5) * 1.5, // Slightly higher velocity for more active movement
//             vy: (Math.random() - 0.5) * 1.5,
//             radius: Math.random() * 1.60 + 1.80, // 1.58 to 2.115
//           });

//           attempts++;
//         }
//       });

//       // Optionally, add some extra points near edges to fill gaps
//       let extraAttempts = 0;
//       const maxExtraAttempts = EXTRA_POINTS * 5; // Limit attempts to prevent infinite loops

//       while (
//         points.length < POINTS_PER_CORNER * 4 + EXTRA_POINTS &&
//         extraAttempts < maxExtraAttempts
//       ) {
//         const edge = Math.floor(Math.random() * 4);
//         let x: number, y: number;

//         switch (edge) {
//           case 0: // Top edge
//             x = Math.random() * window.innerWidth;
//             y = Math.random() * CORNER_AREA;
//             break;
//           case 1: // Bottom edge
//             x = Math.random() * window.innerWidth;
//             y = window.innerHeight - Math.random() * CORNER_AREA;
//             break;
//           case 2: // Left edge
//             x = Math.random() * CORNER_AREA;
//             y = Math.random() * window.innerHeight;
//             break;
//           case 3: // Right edge
//             x = window.innerWidth - Math.random() * CORNER_AREA;
//             y = Math.random() * window.innerHeight;
//             break;
//           default:
//             // Fallback in case of unexpected edge value
//             x = Math.random() * window.innerWidth;
//             y = Math.random() * window.innerHeight;
//             break;
//         }

//         // Ensure not in the safe zone
//         if (
//           x > safeZoneLeft &&
//           x < safeZoneRight &&
//           y > safeZoneTop &&
//           y < safeZoneBottom
//         ) {
//           extraAttempts++;
//           continue;
//         }

//         // Check for minimum distance
//         if (!isValidPoint(x, y)) {
//           extraAttempts++;
//           continue;
//         }

//         // Add the extra point with a 5% larger radius
//         points.push({
//           x,
//           y,
//           vx: (Math.random() - 0.5) * 1.5,
//           vy: (Math.random() - 0.5) * 1.5,
//           radius: Math.random() * 1.5 + 0.1535, // 1.58 to 2.115
//         });

//         extraAttempts++;
//       }
//     }

//     /**
//      * Resizes the canvas based on the device pixel ratio and window dimensions.
//      * Regenerates points to fit the new dimensions.
//      */
//     function resizeCanvas() {
//       const dpr = window.devicePixelRatio || 1;
//       safeCanvas.width = window.innerWidth * dpr;
//       safeCanvas.height = window.innerHeight * dpr;
//       safeCtx.scale(dpr, dpr);
//       generatePoints(); // Regenerate points on resize to fit new dimensions
//     }

//     /**
//      * Animates the network pattern by updating point positions and rendering them.
//      * Continuously called using requestAnimationFrame for smooth animations.
//      * @param currentTime - The current time provided by requestAnimationFrame
//      */
//     let animationFrameId: number;
//     let lastTime = performance.now();

//     const animate = (currentTime: number) => {
//       const deltaTime = currentTime - lastTime;
//       lastTime = currentTime;

//       safeCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

//       // Set colors based on the current theme
//       const color = theme === "dark" ? "255, 255, 255" : "0, 0, 0";

//       // Update and draw each point
//       points.forEach((point) => {
//         // Apply mouse influence
//         const dx = springX.get() - point.x;
//         const dy = springY.get() - point.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);

//         if (dist < 160) {
//           const force = (1 - dist / 160) * 0.8; // Increased force for more active movement
//           point.vx -= (dx / dist) * force;
//           point.vy -= (dy / dist) * force;
//         }

//         // Update position
//         point.x += point.vx * (deltaTime / 16);
//         point.y += point.vy * (deltaTime / 16);

//         // Wrap around edges for seamless animation
//         if (point.x < 0) point.x = window.innerWidth;
//         if (point.x > window.innerWidth) point.x = 0;
//         if (point.y < 0) point.y = window.innerHeight;
//         if (point.y > window.innerHeight) point.y = 0;

//         // Apply friction for smoother slowdown
//         point.vx *= 0.95;
//         point.vy *= 0.95;

//         // Draw the point
//         safeCtx.beginPath();
//         safeCtx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
//         safeCtx.fillStyle = `rgba(${color}, 0.1)`; // Slightly increased opacity for better visibility
//         safeCtx.fill();
//       });

//       // Draw connections between points
//       for (let i = 0; i < points.length; i++) {
//         for (let j = i + 1; j < points.length; j++) {
//           const dx = points[j].x - points[i].x;
//           const dy = points[j].y - points[i].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < 120) { // Increased connection distance for denser network
//             safeCtx.beginPath();
//             safeCtx.moveTo(points[i].x, points[i].y);
//             safeCtx.lineTo(points[j].x, points[j].y);
//             safeCtx.strokeStyle = `rgba(${color}, ${0.05 * (1 - dist / 120)})`; // Adjusted opacity based on distance
//             safeCtx.stroke();
//           }
//         }
//       }

//       // Continue the animation loop
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     /**
//      * Handles mouse movement by updating the motion values.
//      * @param e - The mouse move event
//      */
//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };

//     // Event listeners for mouse movement and window resize
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("resize", resizeCanvas);

//     // Initial canvas setup and point generation
//     resizeCanvas();
//     generatePoints();

//     // Start the animation loop
//     animationFrameId = requestAnimationFrame(animate);

//     // Cleanup function to remove event listeners and cancel animation frames on unmount
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [theme, springX, springY]);

//   return (
//     <motion.canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full pointer-events-none"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     />
//   );
// };



