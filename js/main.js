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
  