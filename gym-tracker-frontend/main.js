<script>
  // 1. Dynamic Greeting Based on Time of Day
  window.addEventListener("DOMContentLoaded", () => {
    const greetingEl = document.querySelector(".profile h2");
    const hour = new Date().getHours();

    let greeting = "Hello Champ!";
    if (hour < 12) {
      greeting = "Good Morning Champ!";
    } else if (hour < 18) {
      greeting = "Good Afternoon Champ!";
    } else {
      greeting = "Good Evening Champ!";
    }

    greetingEl.textContent = greeting;
  });

  // 2. Responsive Navigation Toggle (if you add a hamburger for mobile)
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
  }

  // 3. Auto Draw Progress Circles (if using --progress CSS variable)
  document.querySelectorAll(".progresscircle").forEach(circle => {
    const svgCircle = circle.querySelector("circle");
    const progress = parseInt(getComputedStyle(circle).getPropertyValue("--progress")) || 0;
    const radius = svgCircle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    svgCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    svgCircle.style.strokeDashoffset = circumference;

    const offset = circumference - (progress / 100) * circumference;
    svgCircle.style.strokeDashoffset = offset;
  });

  // 4. Optional: Log Window Resize for debugging layout responsiveness
  window.addEventListener("resize", () => {
    console.log(`Window resized: ${window.innerWidth}px x ${window.innerHeight}px`);
  });
</script>
