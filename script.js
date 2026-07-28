document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const spans = menuToggle.querySelectorAll("span");
      if (navLinks.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(6px, 6px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }

  // Populate Enquiry Form Product Dropdowns
  const productDropdowns = document.querySelectorAll(".product-select");
  if (productDropdowns.length > 0 && typeof productsData !== "undefined") {
    productDropdowns.forEach(dropdown => {
      // Clear existing options except the placeholder
      dropdown.innerHTML = '<option value="">-- Select a Product / Machine --</option>';
      
      // Group products by category label for clean dropdown presentation
      const categories = {};
      productsData.forEach(p => {
        if (!categories[p.categoryLabel]) {
          categories[p.categoryLabel] = [];
        }
        categories[p.categoryLabel].push(p);
      });

      for (const catLabel in categories) {
        const optgroup = document.createElement("optgroup");
        optgroup.label = catLabel;
        categories[catLabel].forEach(p => {
          const option = document.createElement("option");
          option.value = p.name;
          option.textContent = `${p.name} (${p.model})`;
          optgroup.appendChild(option);
        });
        dropdown.appendChild(optgroup);
      });
    });
  }

  // Find Equipment by Application (Pixel-Perfect Widget Handler)
  const appWidgetNav = document.getElementById("app-widget-nav");
  const appWidgetCardsGrid = document.getElementById("app-widget-cards-grid");

  if (appWidgetNav && appWidgetCardsGrid && typeof productsData !== "undefined") {
    const applications = [
      { name: "Hair Removal", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>` },
      { name: "Hair Growth", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22v-8M12 14c2.5-2.5 4.5-2.5 7-5 2.5 2.5 2.5 4.5 0 7M12 14c-2.5-2.5-4.5-2.5-7-5-2.5 2.5-2.5 4.5 0 7"/></svg>` },
      { name: "Pigmentation & Tattoo Removal", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>` },
      { name: "Skin Rejuvenation & Resurfacing", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M18 8l2 2 4-4"/></svg>` },
      { name: "Skin Tightening & Lifting", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>` },
      { name: "Scar, Wrinkle & Skin-Texture Applications", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3zm0 6h18M3 15h18M9 3v18M15 3v18"/></svg>` },
      { name: "HydraFacial, Hydration & Deep Cleansing", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>` },
      { name: "Skin Analysis", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>` },
      { name: "Fat Reduction & Cellulite Applications", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 0-5 5v10a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z"/></svg>` },
      { name: "Hemorrhoids, Fistulas & Sinus Pilonidalis", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>` }
    ];

    const appMetadata = {
      "Hair Removal": {
        desc: "High-power diode and Alexandrite laser systems offering targeted, pain-free hair reduction across all skin phototypes with integrated contact cooling.",
        sub: "Permanent hair reduction",
        products: [
          { name: "Diode Laser System 808nm", id: "diode-laser-808", image: "assests/image.png" },
          { name: "Triple Wavelength Diode Laser", id: "diode-laser-808", image: "assests/image.png" },
          { name: "IPL & SHR Hair Removal Workstation", id: "diode-laser-808", image: "assests/image.png" },
          { name: "Long Pulse Nd:YAG Laser System", id: "diode-laser-808", image: "assests/image.png" }
        ]
      },
      "Hair Growth": {
        desc: "Low-level laser therapy (LLLT) and specialized scalp stimulation devices engineered to reactivate follicles and support hair restoration.",
        sub: "Scalp therapy & hair regeneration",
        products: [
          { name: "LLLT Hair Growth Laser System", id: "lllt-hair-growth", image: "assests/image.png" },
          { name: "Hair Restoring Meso Cocktail", id: "meso-hair-growth", image: "assests/image.png" },
          { name: "Scalp Micro-Needling & Serum Injector", id: "lllt-hair-growth", image: "assests/image.png" },
          { name: "Photodynamic Scalp Therapy Canopy", id: "lllt-hair-growth", image: "assests/image.png" }
        ]
      },
      "Pigmentation & Tattoo Removal": {
        desc: "Ultra-short pulse Q-Switched and Picosecond laser systems for precise breakdown of benign pigmented lesions, epidermal spots, and multi-color tattoo inks.",
        sub: "Pigment & tattoo clearance",
        products: [
          { name: "Q-Switched Nd:YAG Laser", id: "q-switch-nd-yag", image: "assests/image.png" },
          { name: "1927nm Thulium Laser System", id: "thulium-laser-1927", image: "assests/image.png" },
          { name: "Vitamin C Glowing Serum", id: "glowing-serum", image: "assests/image.png" },
          { name: "TCA Peel Formulation", id: "tca-peel", image: "assests/image.png" }
        ]
      },
      "Skin Rejuvenation & Resurfacing": {
        desc: "Advanced laser technologies that rejuvenate skin, improve texture, reduce fine lines, and restore a more youthful, radiant appearance.",
        sub: "Rejuvenation & resurfacing",
        products: [
          { name: "1550nm Erbium Glass Fiber Laser", id: "erbium-glass-1550", image: "assests/image.png" },
          { name: "Fractional CO2 Laser Machine", id: "fractional-co2-laser", image: "assests/image.png" },
          { name: "1927nm Thulium Laser System", id: "thulium-laser-1927", image: "assests/image.png" },
          { name: "1550nm 10600nm Laser Machine", id: "laser-machine-dual", image: "assests/image.png" }
        ]
      },
      "Skin Tightening & Lifting": {
        desc: "High-Intensity Focused Ultrasound (HIFU) and multipolar radiofrequency platforms designed to stimulate deep collagen remodeling and face-lifting.",
        sub: "Non-surgical skin lifting",
        products: [
          { name: "HIFU Lifting System 4D", id: "hifu-system", image: "assests/image.png" },
          { name: "Fractional RF System", id: "fractional-rf", image: "assests/image.png" },
          { name: "Monopolar RF Skin Tightening Platform", id: "fractional-rf", image: "assests/image.png" },
          { name: "Thermal Ultrasound Contouring Device", id: "hifu-system", image: "assests/image.png" }
        ]
      },
      "Scar, Wrinkle & Skin-Texture Applications": {
        desc: "Targeted fractional resurfacing and sub-dermal remodeling devices for acne scar correction, deep wrinkle smoothing, and overall skin refinement.",
        sub: "Scar & wrinkle remodeling",
        products: [
          { name: "Fractional CO2 Laser Machine", id: "fractional-co2-laser", image: "assests/image.png" },
          { name: "Fractional RF Matrix System", id: "fractional-rf", image: "assests/image.png" },
          { name: "Scar & Stretch Mark Repair Meso Cocktail", id: "meso-scar-stretch", image: "assests/image.png" },
          { name: "Glycolic Acid Peel Formulation", id: "glycolic-peel", image: "assests/image.png" }
        ]
      },
      "HydraFacial, Hydration & Deep Cleansing": {
        desc: "Multi-functional hydro-dermabrasion platforms combining vortex extraction, chemical exfoliation, and deep hyaluronic infusion for clinical facial hydration.",
        sub: "Hydro-cleansing & infusion",
        products: [
          { name: "Super Bubble Max", id: "alice-super-bubble", image: "assests/image.png" },
          { name: "HydraFacial PDT Therapy Station", id: "pdt-hydrafacial", image: "assests/image.png" },
          { name: "Hydra Cleansing & Facial System", id: "hydra-cleansing", image: "assests/image.png" },
          { name: "Gentle Hydrating Face Wash", id: "hydrating-facewash", image: "assests/image.png" }
        ]
      },
      "Skin Analysis": {
        desc: "High-definition 3D multi-spectral facial diagnostic systems that analyze sub-surface pigmentation, pore depth, UV damage, and moisture balance.",
        sub: "Digital diagnostic imaging",
        products: [
          { name: "3D Diagnostic Skin Analyzer", id: "skin-analyzer-3d", image: "assests/image.png" },
          { name: "AI Skin Scanner & Moisture Analyzer", id: "skin-analyzer-3d", image: "assests/image.png" },
          { name: "Digital Dermatoscope Imaging System", id: "skin-analyzer-3d", image: "assests/image.png" },
          { name: "High-Res UV Facial Camera Station", id: "skin-analyzer-3d", image: "assests/image.png" }
        ]
      },
      "Fat Reduction & Cellulite Applications": {
        desc: "Non-invasive body contouring platforms utilizing ultrasonic cavitation, multi-polar radiofrequency, and cryolipolysis to sculpt targeted fat deposits.",
        sub: "Body sculpting & cellulite",
        products: [
          { name: "Ultrasonic Cavitation & RF System", id: "cavitation-rf-body", image: "assests/image.png" },
          { name: "Lipolysis Contouring Meso Solution", id: "meso-lipolysis", image: "assests/image.png" },
          { name: "360 Cryolipolysis Fat Freezing System", id: "cavitation-rf-body", image: "assests/image.png" },
          { name: "EMS Muscle Stimulator & Sculptor", id: "cavitation-rf-body", image: "assests/image.png" }
        ]
      },
      "Hemorrhoids, Fistulas & Sinus Pilonidalis": {
        desc: "Precision 980nm/1470nm surgical diode laser platforms providing minimally invasive, bloodless proctological and vascular treatments.",
        sub: "Proctology surgical lasers",
        products: [
          { name: "Surgical Laser System", id: "surgical-laser-pro", image: "assests/image.png" },
          { name: "Dual 980nm + 1470nm Surgical Laser", id: "surgical-laser-pro", image: "assests/image.png" },
          { name: "Fiber-Guided Micro-Laser Probe Kit", id: "surgical-laser-pro", image: "assests/image.png" },
          { name: "Precision Surgical Laser Generator", id: "surgical-laser-pro", image: "assests/image.png" }
        ]
      }
    };

    const cleanStr = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '');

    const renderNav = () => {
      appWidgetNav.innerHTML = "";
      applications.forEach((app, idx) => {
        const item = document.createElement("a");
        item.href = "javascript:void(0);";
        const isActive = (app.name === "Skin Rejuvenation & Resurfacing");
        item.className = `app-nav-item ${isActive ? "active" : ""}`;
        item.setAttribute("data-app-name", app.name);

        const arrowContent = isActive 
          ? `<span class="app-nav-arrow-active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>`
          : `<span class="app-nav-arrow">&gt;</span>`;

        item.innerHTML = `
          <div class="app-nav-item-left">
            <span class="app-nav-icon">${app.icon}</span>
            <span>${app.name}</span>
          </div>
          ${arrowContent}
        `;

        item.addEventListener("click", () => {
          document.querySelectorAll(".app-nav-item").forEach(el => {
            el.classList.remove("active");
            const arr = el.querySelector(".app-nav-arrow-active") || el.querySelector(".app-nav-arrow");
            if (arr) {
              arr.outerHTML = `<span class="app-nav-arrow">&gt;</span>`;
            }
          });

          item.classList.add("active");
          const rightArrow = item.querySelector(".app-nav-arrow");
          if (rightArrow) {
            rightArrow.outerHTML = `<span class="app-nav-arrow-active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>`;
          }

          loadWidgetContent(app.name);
        });

        appWidgetNav.appendChild(item);
      });
    };

    const loadWidgetContent = (appName) => {
      const titleEl = document.getElementById("app-main-title");
      const descEl = document.getElementById("app-main-desc");
      const iconEl = document.getElementById("app-main-icon");

      const appObj = applications.find(a => a.name === appName) || applications[3];
      const meta = appMetadata[appName] || {
        desc: "Advanced clinical solutions engineered to deliver targeted treatment protocols and optimal patient outcomes.",
        sub: appName.toLowerCase(),
        products: []
      };

      if (titleEl) titleEl.textContent = appName;
      if (descEl) descEl.textContent = meta.desc;
      if (iconEl) iconEl.innerHTML = appObj.icon;

      appWidgetCardsGrid.innerHTML = "";

      // Find matching products from productsData or fallback to metadata
      let matches = productsData.filter(p => p.applications.some(appStr => cleanStr(appStr) === cleanStr(appName))).slice(0, 4);

      if (matches.length === 0 && meta.products.length > 0) {
        matches = meta.products;
      }

      if (matches.length === 0) {
        // Fallback: take first 4 machines
        matches = productsData.filter(p => p.category === 'machines').slice(0, 4);
      }

      matches.forEach(p => {
        const card = document.createElement("a");
        card.href = `product-detail.html?id=${p.id || 'jmfr2'}`;
        card.className = "app-product-card";

        const subText = meta.sub || (p.primaryApplication ? p.primaryApplication.toLowerCase() : "clinical application");

        card.innerHTML = `
          <div class="app-product-img-wrapper">
            <img src="${p.image || 'assests/image.png'}" alt="${p.name}">
          </div>
          <div class="app-product-card-info">
            <h4 class="app-product-card-title">${p.name}</h4>
            <div class="app-product-card-dash"></div>
            <p class="app-product-card-subtitle">${subText.charAt(0).toUpperCase() + subText.slice(1)}</p>
          </div>
          <div class="app-product-circle-arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        `;

        appWidgetCardsGrid.appendChild(card);
      });
    };

    renderNav();
    loadWidgetContent("Skin Rejuvenation & Resurfacing");
  }

  // Complete Product Range Preview (Home / Catalog Tabs)
  const rangeTabsContainer = document.querySelector(".range-tabs");
  const rangePreviewGrid = document.querySelector(".range-preview-grid");

  if (rangeTabsContainer && rangePreviewGrid && typeof productsData !== "undefined") {
    const tabs = ["all", "machines", "skincare", "meso", "peels"];
    
    // Function to render tab buttons
    const renderTabs = () => {
      rangeTabsContainer.innerHTML = "";
      tabs.forEach(tab => {
        const btn = document.createElement("button");
        btn.className = `tab-btn ${tab === "all" ? "active" : ""}`;
        btn.setAttribute("data-tab", tab);
        btn.textContent = tab === "peels" ? "Chemical Peels" : tab;
        
        btn.addEventListener("click", () => {
          document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          filterRangePreview(tab);
        });
        rangeTabsContainer.appendChild(btn);
      });
    };

    // Function to filter and display product list
    const filterRangePreview = (category) => {
      rangePreviewGrid.innerHTML = "";
      const filtered = category === "all" 
        ? productsData 
        : productsData.filter(p => p.category === category);

      filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <div class="product-img-wrapper">
            <span class="product-category-tag">${p.categoryLabel}</span>
            <img src="${p.image}" alt="${p.name}">
          </div>
          <div class="product-info">
            <span class="product-model">Model: ${p.model}</span>
            <h4 class="product-name">${p.name}</h4>
            <p class="product-app-line">${p.primaryApplication}</p>
            <a href="product-detail.html?id=${p.id}" class="card-btn">View Product →</a>
          </div>
        `;
        rangePreviewGrid.appendChild(card);
      });
    };

    renderTabs();
    filterRangePreview("all");
  }

  // Dynamic Product Detail Page Handler
  const detailContainer = document.getElementById("product-detail-view");
  if (detailContainer && typeof productsData !== "undefined") {
    // Extract ID from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const product = productsData.find(p => p.id === productId);

    if (product) {
      // Document title update
      document.title = `${product.name} - JM Medicose`;
      
      // Inject details
      detailContainer.innerHTML = `
        <div class="detail-grid">
          <div class="detail-img-container">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="detail-info">
            <span class="detail-category">${product.categoryLabel}</span>
            <h1 class="detail-title">${product.name}</h1>
            <span class="detail-model">Model Reference: ${product.model}</span>
            
            <div class="detail-section-title">Primary Indication / Application</div>
            <p style="color: #555; margin-bottom: 20px; font-size: 15px;">${product.primaryApplication}</p>
            
            <div class="detail-section-title">Description</div>
            <p style="color: #555; margin-bottom: 20px; font-size: 15px; line-height: 1.6;">${product.description}</p>
            
            <div class="detail-section-title">Product Characteristics</div>
            <ul class="detail-features">
              ${product.features.map(f => `<li>${f}</li>`).join("")}
            </ul>
            
            <div class="detail-actions">
              <a href="#enquire-now" class="btn-primary select-enquiry-product" data-product="${product.name}">
                Send Enquiry for ${product.name}
              </a>
              <a href="products.html" class="btn-secondary">Back to Catalog</a>
            </div>
          </div>
        </div>
      `;

      // Set drop down option if user clicks Enquiry on the detail page
      const enquiryBtn = document.querySelector(".select-enquiry-product");
      if (enquiryBtn) {
        enquiryBtn.addEventListener("click", (e) => {
          const selectElement = document.querySelector(".product-select");
          if (selectElement) {
            selectElement.value = product.name;
          }
        });
      }
    } else {
      detailContainer.innerHTML = `
        <div style="text-align: center; padding: 50px 20px;">
          <h2 style="color: var(--primary-dark); margin-bottom: 15px;">Product Not Found</h2>
          <p style="color: #666; margin-bottom: 30px;">We were unable to locate the requested product catalog entry.</p>
          <a href="products.html" class="btn-primary" style="display: inline-block;">Return to Catalog</a>
        </div>
      `;
    }
  }

  // Handle Enquiry submission feedback safely
  const enquiryForms = document.querySelectorAll(".enquiry-form");
  enquiryForms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector("button[type='submit']");
      const prevText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      setTimeout(() => {
        // Clear inputs safely
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = prevText;
        alert("Thank you. Your enquiry details have been recorded. Our team will contact you shortly.");
      }, 1000);
    });
  });

  // Products Page (Explore Products 3-Column Grid Renderer)
  const productsGrid3Col = document.getElementById("products-cards-grid-3col");
  if (productsGrid3Col && typeof productsData !== "undefined") {
    const specIconsMap = {
      wave: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 6-7 6 14 12 7"/></svg>`,
      zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      sliders: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/></svg>`,
      ruler: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0z"/><path d="M14.5 12.5l-2-2"/><path d="M11.5 9.5l-2-2"/><path d="M8.5 6.5l-2-2"/></svg>`,
      layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
      grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
      droplet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
      sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v3m0 12v3M3 12h3m12 0h3m-4.5-7.5l-2 2m-7 7l-2 2m0-11l2 2m7 7l2 2"/></svg>`,
      user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
      flask: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.5M14 2v7.5M8.5 2h7M14 9.5a5.5 5.5 0 1 1-4 0"/></svg>`,
      activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
      percent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
      thermometer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
      sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
      shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
    };

    let activeCategory = "all";
    let searchQuery = "";

    const renderCatalogGrid = () => {
      productsGrid3Col.innerHTML = "";
      
      let filtered = productsData;
      if (activeCategory !== "all") {
        filtered = filtered.filter(p => p.category === activeCategory);
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(q) || 
          p.model.toLowerCase().includes(q) || 
          p.description.toLowerCase().includes(q)
        );
      }

      const countText = document.getElementById("catalog-count-text");
      if (countText) {
        countText.innerHTML = `Showing <strong>${filtered.length} Products</strong>`;
      }

      if (filtered.length === 0) {
        productsGrid3Col.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #64748b;">
            <h3 style="font-size: 20px; font-weight: 700; color: #0f294a; margin-bottom: 8px;">No Products Found</h3>
            <p>Try refining your search or selecting a different category.</p>
          </div>
        `;
        return;
      }

      filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "mock-product-card";

        const categoryClass = p.category; // machines, skincare, meso, peels
        const specsHTML = (p.specs || []).map(s => `
          <div class="spec-item-col">
            <div class="spec-icon-box">${specIconsMap[s.icon] || specIconsMap.sliders}</div>
            <span class="spec-label">${s.label}</span>
            <span class="spec-val">${s.val}</span>
          </div>
        `).join("");

        card.innerHTML = `
          <div class="card-top-image-box">
            <button class="card-wishlist-btn" aria-label="Favorite">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
            <img src="${p.image}" alt="${p.name}">
          </div>

          <div class="card-info-content">
            <span class="card-category-badge ${categoryClass}">${p.categoryLabel}</span>
            <div class="card-model-code">${p.model}</div>
            <h3 class="card-product-title">${p.name}</h3>
            <p class="card-product-desc">${p.description}</p>

            <div class="card-specs-row">
              ${specsHTML}
            </div>

            <div class="card-action-buttons">
              <a href="product-detail.html?id=${p.id}" class="btn-card-details">
                View Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="contact.html?product=${encodeURIComponent(p.name)}" class="btn-card-enquire">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Enquire
              </a>
            </div>
          </div>
        `;

        productsGrid3Col.appendChild(card);
      });
    };

    // Category Pill Buttons Handler
    const pillBtns = document.querySelectorAll(".cat-pill-btn");
    pillBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        pillBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.getAttribute("data-cat");
        renderCatalogGrid();
      });
    });

    // Global Search Input Handler
    const searchInput = document.getElementById("global-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderCatalogGrid();
      });
    }

    // Sidebar Clear All Handler
    const clearBtn = document.getElementById("btn-clear-filters");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        activeCategory = "all";
        searchQuery = "";
        if (searchInput) searchInput.value = "";
        pillBtns.forEach(b => {
          if (b.getAttribute("data-cat") === "all") b.classList.add("active");
          else b.classList.remove("active");
        });
        document.querySelectorAll(".filter-cat-chk, .filter-app-chk, .filter-model-chk").forEach(chk => {
          chk.checked = (chk.value === "all");
        });
        renderCatalogGrid();
      });
    }

    renderCatalogGrid();
  }

  // Interactive Application Switcher Handler for Section 3
  const appSwitcherBtns = document.querySelectorAll(".app-switcher-btn");
  const appHeroTitle = document.getElementById("app-hero-title");
  const appHeroDesc = document.getElementById("app-hero-desc");
  const appCardsStack = document.getElementById("app-cards-stack");

  if (appSwitcherBtns.length > 0 && appHeroTitle && appHeroDesc && appCardsStack) {
    const appDataMap = {
      skin: {
        title: `Skin Rejuvenation<br>& Resurfacing`,
        desc: `Advanced laser technologies that rejuvenate skin, improve texture, reduce fine lines, and restore a more youthful, radiant appearance.`,
        cards: [
          { tag: "CO₂ LASER", spec: "JMCO-11", title: "Fractional CO₂ Laser — V2", desc: "Precision fractional resurfacing for dramatic skin renewal, texture refinement and collagen stimulation.", img: "assests/products/fractional-co2-v2-1.png", link: "product-detail.html?id=fractional-co2-v2" },
          { tag: "HIFU SYSTEM", spec: "JMHF-3", title: "HIFU-12D Machine", desc: "Non-invasive high-intensity focused ultrasound for skin tightening, SMAS lifting, and contouring.", img: "assests/products/hifu-12d-1.png", link: "product-detail.html?id=hifu-12d" },
          { tag: "DIODE LASER", spec: "JMMD-9", title: "Diode Laser Machine", desc: "Advanced triple wavelength broad-spectrum system for deep skin treatment and laser hair removal.", img: "assests/products/diode-laser-1.png", link: "product-detail.html?id=diode-laser" }
        ]
      },
      hair: {
        title: `Painless Laser<br>Hair Removal`,
        desc: `Next-generation diode and alexandrite lasers providing fast, painless, and permanent hair reduction across all skin tones.`,
        cards: [
          { tag: "DIODE LASER", spec: "JMMD-9", title: "Diode Laser Machine", desc: "High-speed diode laser with contact cooling sapphire tip for comfortable hair reduction.", img: "assests/products/diode-laser-1.png", link: "product-detail.html?id=diode-laser" },
          { tag: "PICO LASER", spec: "JMPS1", title: "350PS TruePico Picosecond Laser", desc: "Multi-wavelength combination technology targeting fine, medium, and deep skin follicles.", img: "assests/products/pico-laser-1.png", link: "product-detail.html?id=truepico-laser" },
          { tag: "PICO LASER V2", spec: "JMPS1-V2", title: "Picosecond Laser — V2", desc: "High-power picosecond laser engineered for rapid pigmentation and tattoo removal.", img: "assests/products/pico-laser-v2-1.png", link: "product-detail.html?id=picosecond-v2" }
        ]
      },
      body: {
        title: `Body Contouring<br>& Fat Reduction`,
        desc: `Targeted non-surgical body sculpting equipment that reduces localized stubborn fat and tightens body contours efficiently.`,
        cards: [
          { tag: "HIFU SYSTEM", spec: "JMHF-3", title: "HIFU-12D Machine", desc: "Focused ultrasound targeting deep subcutaneous layers for targeted fat reduction and tightening.", img: "assests/products/hifu-12d-1.png", link: "product-detail.html?id=hifu-12d" },
          { tag: "EMS FACE LIFT", spec: "JMHM-17", title: "Pulse Lift EMS Face Lift", desc: "EMS muscle stimulation and roller applicator for firming and contouring.", img: "assests/products/ems-roller-1.png", link: "product-detail.html?id=pulse-lift-ems" },
          { tag: "O₂ HYDRAFACIAL", spec: "JMAL-7", title: "O₂ HydraFacial", desc: "Hydro-dermabrasion and oxygen spray infusion for tissue rejuvenation.", img: "assests/products/o2-hydrafacial-1.png", link: "product-detail.html?id=o2-hydrafacial" }
        ]
      },
      peels: {
        title: `Professional Medical<br>Facial Systems`,
        desc: `Dermatologist-grade multi-step facial workstations engineered for controlled exfoliation and photodynamic therapy.`,
        cards: [
          { tag: "PDT HYDRAFACIAL", spec: "JMPD-14", title: "PDT HydraFacial", desc: "Multi-step facial system combining HydraFacial functions with photodynamic LED therapy.", img: "assests/products/pdt-hydrafacial-1.png", link: "product-detail.html?id=pdt-hydrafacial" },
          { tag: "O₂ HYDRAFACIAL", spec: "JMAL-7", title: "O₂ HydraFacial", desc: "Multi-function hydro-dermabrasion and oxygen infusion system.", img: "assests/products/o2-hydrafacial-1.png", link: "product-detail.html?id=o2-hydrafacial" },
          { tag: "EMS FACE LIFT", spec: "JMHM-17", title: "Pulse Lift EMS Face Lift", desc: "EMS-based facial stimulation and roller-assisted rejuvenation.", img: "assests/products/ems-roller-1.png", link: "product-detail.html?id=pulse-lift-ems" }
        ]
      }
    };

    appSwitcherBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        appSwitcherBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const key = btn.getAttribute("data-app");
        const data = appDataMap[key];

        if (data) {
          appHeroTitle.innerHTML = data.title;
          appHeroDesc.textContent = data.desc;

          appCardsStack.innerHTML = data.cards.map(c => `
            <div class="app-equip-card">
              <div class="equip-orange-bar"></div>
              <div class="equip-card-info">
                <div class="equip-tags-row">
                  <span class="equip-cat-tag">${c.tag}</span>
                  <span class="equip-spec-pill">${c.spec}</span>
                </div>
                <h4 class="equip-title">${c.title}</h4>
                <p class="equip-desc">${c.desc}</p>
                <a href="${c.link || 'products.html'}" class="equip-link">
                  View details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
              <div class="equip-card-img-box">
                <img src="${c.img}" alt="${c.title}">
              </div>
              <div class="equip-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#015699" stroke-width="2"><path d="M12 3v3m0 12v3M3 12h3m12 0h3m-4.5-7.5l-2 2m-7 7l-2 2m0-11l2 2m7 7l2 2"/></svg>
              </div>
            </div>
          `).join('');
        }
      });
    });
  }

  // Contact Form URL Pre-population Handler
  const urlParams = new URLSearchParams(window.location.search);
  const paramProduct = urlParams.get('product');
  const paramCategory = urlParams.get('category');
  const formCatSelect = document.getElementById('form-cat');
  const formProductSelect = document.getElementById('form-product');

  if (paramCategory && formCatSelect) {
    formCatSelect.value = paramCategory;
  }

  if (paramProduct && formProductSelect) {
    setTimeout(() => {
      for (let i = 0; i < formProductSelect.options.length; i++) {
        if (formProductSelect.options[i].value.toLowerCase().includes(paramProduct.toLowerCase())) {
          formProductSelect.selectedIndex = i;
          break;
        }
      }
    }, 150);
  }

  // Contact Page Form Submission Handler
  const contactForm = document.getElementById('contact-page-form');
  const feedbackMsg = document.getElementById('form-feedback-msg');
  const submitBtn = document.getElementById('form-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Enquiry...';
      }
      setTimeout(() => {
        if (feedbackMsg) {
          feedbackMsg.style.display = 'block';
          feedbackMsg.style.color = '#15803d';
          feedbackMsg.textContent = 'Thank you! Your enquiry has been received successfully. We will get back to you shortly.';
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Enquiry';
        }
        contactForm.reset();
      }, 1200);
    });
  }
});

