particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#35577D" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#35577D",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    },
    retina_detect: true
  });