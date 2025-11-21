// Model Viewer Section
(() => {
  // I selected all hotspot buttons inside the model
  const hotspots = document.querySelectorAll(".Hotspot");
  console.log("I found total hotspots:", hotspots.length);

  // I’m checking the screen size so I can limit hover events to tablet or desktop
  const isTabletOrDesktop = window.matchMedia("(min-width: 768px)").matches;

  // I created my data array for hotspot information
  const infoBoxes = [
    {
      icon: "fa-solid fa-ear-listen",
      title: "All-Day Comfort",
      text: "Soft rubber tips adapt to you — sealing in sound, keeping fatigue out.",
    },
    {
      icon: "fa-solid fa-feather-pointed",
      title: "Signature Grace",
      text: "The Swan emblem — a mark of balance, purity, and effortless design.",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Instant Control",
      text: "Every press responds instantly — your music, your rhythm, your way.",
    },
    {
      icon: "fa-brands fa-bluetooth-b",
      title: "Pure Connection",
      text: "Engineered antenna ring ensures stable Bluetooth and crystal-clear sound.",
    },
    {
      icon: "fa-solid fa-battery-full",
      title: "Power That Lasts",
      text: "Magnetic gold nodes charge fast and keep you connected through every beat.",
    },
  ];

  // I wrote this function to generate the hotspot icons and info boxes dynamically
  function loadHotspotInfo() {
    console.log("I’m loading hotspot data now...");
    infoBoxes.forEach((infoBox, index) => {
      const hotspot = document.querySelector(`.Hotspot[data-index="${index + 1}"]`);
      if (!hotspot) {
        console.log("I couldn’t find hotspot at index:", index + 1);
        return;
      }

      // I created the icon for each hotspot
      const icon = document.createElement("i");
      icon.className = infoBox.icon;

      // I created the title and text content
      const title = document.createElement("h2");
      title.textContent = infoBox.title;

      const text = document.createElement("p");
      text.textContent = infoBox.text;

      // I wrapped title and text into a single div
      const box = document.createElement("div");
      box.classList.add("HotspotInfo");
      box.appendChild(title);
      box.appendChild(text);

      // I attached icon and info box to the hotspot element
      hotspot.appendChild(icon);
      hotspot.appendChild(box);

      // I used GSAP to hide the info box at start
      gsap.set(box, { autoAlpha: 0 });
    });
    console.log("I finished loading hotspot info.");
  }

  loadHotspotInfo();

  // I show info when the user hovers or clicks a hotspot
  function handleShowInfo() {
    const box = this.querySelector(".HotspotInfo");
    const icon = this.querySelector("i");
    console.log("I’m showing info for:", box.querySelector("h2").textContent);

    gsap.to(box, { duration: 0.3, autoAlpha: 1 });
    icon.style.backgroundColor = "#573A4C";
    icon.style.color = "#fff";
    icon.style.boxShadow = "0 0 10px rgba(87,58,76,0.6)";
  }

  // I hide info when mouse leaves or touch ends
  function handleHideInfo() {
    const box = this.querySelector(".HotspotInfo");
    const icon = this.querySelector("i");
    console.log("I’m hiding info for:", box.querySelector("h2").textContent);

    gsap.to(box, { duration: 0.2, autoAlpha: 0 });
    icon.style.backgroundColor = "rgba(255,255,255,0.95)";
    icon.style.color = "#573A4C";
    icon.style.boxShadow = "none";
  }

  // I used this function to toggle hotspot visibility based on camera angle
  function updateHotspotVisibility() {
    hotspots.forEach((hotspot) => {
      const isVisible = hotspot.hasAttribute("data-visible");
      hotspot.style.opacity = isVisible ? "1" : "0";
      hotspot.style.pointerEvents = isVisible ? "auto" : "none";
    });
    console.log("I updated which hotspots are visible.");
  }

  // I connected this to model-viewer’s events
  const modelViewer = document.querySelector("model-viewer");
  if (modelViewer) {
    modelViewer.addEventListener("camera-change", updateHotspotVisibility);
    modelViewer.addEventListener("load", updateHotspotVisibility);
    console.log("I connected model-viewer events successfully.");
  } else {
    console.log("No model-viewer found in DOM.");
  }

  // I added all hover/click events for desktop and tablet only
  if (isTabletOrDesktop) {
    hotspots.forEach((hotspot) => {
      hotspot.addEventListener("mouseenter", handleShowInfo);
      hotspot.addEventListener("mouseleave", handleHideInfo);
      hotspot.addEventListener("mousedown", handleShowInfo);
      hotspot.addEventListener("mouseup", handleHideInfo);
      hotspot.addEventListener("touchstart", handleShowInfo, { passive: true });
      hotspot.addEventListener("touchend", handleHideInfo, { passive: true });
    });
    console.log("I added event listeners for desktop/tablet interactions.");
  }
})();


// Colours Choosing Section
(() => {
  // I selected all color option buttons
  const colorButtons = document.querySelectorAll(".color-btn");

  // I selected the image and text to update when color changes
  const earbudImage = document.querySelector("#earbudImage");
  const earbudText = document.querySelector("#earbudText");

  // I created my color data object for both versions
  const colorData = {
    pearl: {
      img: "images/swan_pearl.png",
      text: `The embodiment of purity and calm.<br><br>
      Inspired by the serene glow of a swan gliding on still waters,
      Swan Pearl captures sophistication in its purest form.<br><br>
      Its soft white tone reflects balance, clarity, and quiet confidence —
      perfect for those who find power in simplicity.`,
    },
    noir: {
      img: "images/swan_noir.png",
      text: `The embodiment of mystery and strength.<br><br>
      Swan Noir mirrors the elegance of midnight waters, where beauty meets boldness.<br><br>
      Its deep tone represents power, confidence, and timeless allure.`,
    },
  };

  // I handle what happens when user clicks a color button
  function handleColorChange() {
    const color = this.dataset.color;
    console.log("I changed earbuds color to:", color);

    // I removed the active class from all first
    colorButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    // I updated the image and text dynamically
    earbudImage.src = colorData[color].img;
    earbudImage.alt = `${color} earbuds`;
    earbudText.innerHTML = colorData[color].text;
  }

  // I attached the click event for each button
  colorButtons.forEach((btn) => {
    btn.addEventListener("click", handleColorChange);
  });

  console.log("I set up color selection buttons.");
})();


// Scrolling Animation Section
(()=> {
  console.log("IIFE Called");

  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  canvas.width= 1920;
  canvas.height = 1080;

  //How many still frames do we have, you will need to adjust this
  const frameCount = 540; 

  //array to hold our images
  const images = [];

  //object will hold the current frame
  //we will use GreenSock to animate the frame property
  const buds = {
      frame: 0
  }

  //Run a for loop to populate images array
  for (let i=0; i<frameCount; i++) {
      const img = new Image();
      img.src = `images/explode_${(i+1).toString().padStart(4, '0')}.webp`;
      images.push(img);
  }
  console.log(images);

  gsap.to(buds, {
      frame: 538,
      snap: "frame",
      scrollTrigger: {
          trigger: "#explode-view",
          pin: true,
          scrub: 1,
          start: "top top",
          markers: false
      },
      onUpdate: render
  })

  images[0].addEventListener("load", render);

  function render() {
      //console.log(buds.frame);
      //console.log(images[buds.frame]);
      context.clearRect(0,0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);
  }

})();



//X-Ray Slider
(() => {

const divisor = document.querySelector("#divisor");
const slider = document.querySelector("#slider");

function moveDivisor() {
    // console.log(slider.value);
    divisor.style.width = `${slider.value}%`;
}

function resetSlider() {
    slider.value = 50;
}

slider.addEventListener("input", moveDivisor);
window.addEventListener("load", resetSlider);
})();

// Header Animation
(() => {
console.log("I started the header animation.");

const header = document.querySelector("#header");
const logo = document.querySelector(".header-logo img");
const hamburger = document.querySelector(".header-hamburger");
const navLinks = document.querySelectorAll(".header-nav ul li a");

function animateHeader() {
  // I animated the logo
  gsap.from(logo, {
    opacity: 0,
    y: -20,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
  });

  // I animated the hamburger icon
  gsap.from(hamburger, {
    opacity: 0,
    y: -20,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out"
  });

  // I staggered nav links on desktop
  gsap.from(navLinks, {
    opacity: 0,
    y: -15,
    duration: 0.7,
    delay: 0.35,
    stagger: 0.1,
    ease: "power2.out"
  });
}

animateHeader();
})();


// Hero Animation
(() => {
console.log("I started the hero animation.");

const heroSection = document.querySelector("#hero");
const heroTitle = document.querySelector("#hero h3");
const heroSubtitle = document.querySelector("#hero p");
const heroButtons = document.querySelectorAll("#hero .btn");
const heroImage = document.querySelector("#hero img");

function animateHero() {
  gsap.from(heroTitle, {
    scrollTrigger: {
      trigger: heroSection,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(heroSubtitle, {
    scrollTrigger: {
      trigger: heroSection,
      start: "top 75%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    delay: 0.2
  });

  gsap.from(heroButtons, {
    scrollTrigger: {
      trigger: heroSection,
      start: "top 70%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    delay: 0.4
  });

  gsap.from(heroImage, {
    scrollTrigger: {
      trigger: heroSection,
      start: "top 60%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3
  });
}

animateHero();
})();


// Mission Section Animation
(() => {
console.log("I started the mission section animation.");

const missionHeading = document.querySelector(".mission-heading");
const missionText = document.querySelector(".mission-content");

gsap.from(missionHeading, {
  scrollTrigger: {
    trigger: "#mission",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out"
});

gsap.from(missionText, {
  scrollTrigger: {
    trigger: "#mission",
    start: "top 75%",
    toggleActions: "play reverse play reverse"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  delay: 0.2
});

console.log("Mission section animation initialized.");
})();


// Features Scroll Animation
(() => {
console.log("I started the features animation script.");

const cards = document.querySelectorAll(".feature-card");

function animateFeatures() {
  cards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      },
      opacity: 0,
      y: 50,
      duration: 0.9,
      delay: index * 0.15,
      ease: "power2.out"
    });
  });
}

animateFeatures();
})();

// Model Viewer Section Animation
(() => {
console.log("I started the model-viewer animation.");

const modelTitle = document.querySelector(".model-title");
const modelSubtitle = document.querySelector(".model-subtitle");
const modelViewer = document.querySelector("#model");
const hotspotCards = document.querySelectorAll(".hotspot-card");

function animateModelViewer() {

  // I animated the title from the left
  gsap.from(modelTitle, {
    scrollTrigger: {
      trigger: "#swan-model",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out"
  });

  // I animated the subtitle after the title
  gsap.from(modelSubtitle, {
    scrollTrigger: {
      trigger: "#swan-model",
      start: "top 75%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    x: -40,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
  });

  // I animated the model viewer rising up
  gsap.from(modelViewer, {
    scrollTrigger: {
      trigger: "#swan-model",
      start: "top 75%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 70,
    duration: 1.2,
    delay: 0.1,
    ease: "power3.out"
  });

  // I animated hotspot cards with stagger effect
  hotspotCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: index * 0.15,
      ease: "power2.out"
    });
  });
}

animateModelViewer();
})();

// X-Ray Section Animation
(() => {
console.log("I started the X-Ray animation.");

const xraySection = document.querySelector(".xray-section");
const xrayTitle = document.querySelector(".xray-title");
const xraySubtitle = document.querySelector(".xray-subtitle");
const xrayBox = document.querySelector("#xray");

function animateXray() {
  // I faded the title in
  gsap.from(xrayTitle, {
    scrollTrigger: {
      trigger: xraySection,
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out"
  });

  // I revealed the subtitle
  gsap.from(xraySubtitle, {
    scrollTrigger: {
      trigger: xraySection,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
  });

  // I animated the X-Ray slider container
  gsap.from(xrayBox, {
    scrollTrigger: {
      trigger: xraySection,
      start: "top 75%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    scale: 0.9,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });
}

animateXray();

})();

// Reflection Section Animation
(() => {
console.log("I started the reflection animations.");

const reflectionSection = document.querySelector("#reflection");
const colorButtons = document.querySelectorAll(".color-btn");
const reflectionImage = document.querySelector(".reflection-image img");
const reflectionText = document.querySelector(".reflection-description");

function animateReflection() {
  // Title fade-in
  gsap.from(".reflection-title", {
    scrollTrigger: {
      trigger: reflectionSection,
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out"
  });

  // Color buttons stagger
  gsap.from(colorButtons, {
    scrollTrigger: {
      trigger: reflectionSection,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Earbud image fade + rise
  gsap.from(reflectionImage, {
    scrollTrigger: {
      trigger: reflectionSection,
      start: "top 75%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 50,
    duration: 1.1,
    ease: "power3.out"
  });

  // Description fade + slide from right
  gsap.from(reflectionText, {
    scrollTrigger: {
      trigger: reflectionSection,
      start: "top 70%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    x: 60,
    duration: 1.1,
    delay: 0.2,
    ease: "power3.out"
  });
}

function crossfadeImage(newSrc) {
gsap.to("#earbudImage", {
  opacity: 0,
  duration: 0.3,
  onComplete: swapImage
});

function swapImage() {
  reflectionImage.src = newSrc;

  gsap.to("#earbudImage", {
    opacity: 1,
    duration: 0.4
  });
}
}

animateReflection();
})();

// Benefits Animation
(() => {
console.log("I started the benefits animation.");

const benefitItems = document.querySelectorAll(".benefit-item");

function animateBenefits() {
  benefitItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: index * 0.15,
      ease: "power2.out"
    });
  });
}

animateBenefits();
})();

// Footer Animation
(() => {
console.log("I started the footer animation.");

const footerSection = document.querySelector(".footer-section");
const footerColumns = document.querySelectorAll(".footer-col");
const footerLogo = document.querySelector(".footer-logo");
const footerBottom = document.querySelector(".footer-bottom");

// I revealed the footer logo
function animateFooterLogo() {
  gsap.from(footerLogo, {
    scrollTrigger: {
      trigger: footerSection,
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out"
  });
}

// I animated the footer columns
function animateFooterColumns() {
  gsap.from(footerColumns, {
    scrollTrigger: {
      trigger: footerSection,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 50,
    duration: 0.9,
    stagger: 0.15,
    ease: "power2.out"
  });
}

// I animated the bottom copyright text
function animateFooterBottom() {
  gsap.from(footerBottom, {
    scrollTrigger: {
      trigger: footerSection,
      start: "top 75%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
  });
}

animateFooterLogo();
animateFooterColumns();
animateFooterBottom();

})();





