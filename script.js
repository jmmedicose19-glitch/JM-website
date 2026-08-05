  // =========================================================================
  // SMART SCROLL NAVBAR — hide on scroll down, show on scroll up
  // =========================================================================
  (function () {
    const header = document.querySelector('header');
    if (!header) return;

    // Set body padding-top to exact header height so nothing gets hidden behind it
    function syncBodyPadding() {
      const headerHeight = header.getBoundingClientRect().height;
      document.body.style.paddingTop = headerHeight + 'px';
    }
    syncBodyPadding();
    window.addEventListener('resize', syncBodyPadding);

    let lastScrollY = window.scrollY;
    let ticking = false;

    function onScroll() {
      const currentScrollY = window.scrollY;

      // Always show navbar when within 60px of top
      if (currentScrollY <= 60) {
        header.classList.remove('nav-hidden');
      } else if (currentScrollY > lastScrollY) {
        // Scrolling DOWN — hide navbar
        header.classList.add('nav-hidden');
      } else {
        // Scrolling UP — show navbar
        header.classList.remove('nav-hidden');
      }

      lastScrollY = currentScrollY;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
  })();

  // Site-wide Image Protection: prevent drag and right-click context menu on images
  document.addEventListener("contextmenu", (e) => {
    if (e.target.tagName === "IMG" || e.target.closest("img")) {
      e.preventDefault();
    }
  });

  document.addEventListener("dragstart", (e) => {
    if (e.target.tagName === "IMG" || e.target.closest("img")) {
      e.preventDefault();
    }
  });

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
      }
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
          { name: "Diode Laser System 808nm", id: "diode-laser-808", image: "assests/products/diode laser (1).png" },
          { name: "Triple Wavelength Diode Laser", id: "diode-laser-808", image: "assests/products/diode laser (2).png" },
          { name: "IPL & SHR Hair Removal Workstation", id: "diode-laser-808", image: "assests/products/diode laser (3).png" },
          { name: "Long Pulse Nd:YAG Laser System", id: "diode-laser-808", image: "assests/products/diode laser (1).png" }
        ]
      },
      "Hair Growth": {
        desc: "Low-level laser therapy (LLLT) and specialized scalp stimulation devices engineered to reactivate follicles and support hair restoration.",
        sub: "Scalp therapy & hair regeneration",
        products: [
          { name: "LLLT Hair Growth Laser System", id: "lllt-hair-growth", image: "assests/products/LLLT laser (1).png" },
          { name: "Hair Restoring Meso Cocktail", id: "meso-hair-growth", image: "assests/products/ChatGPT Image Jul 29, 2026, 02_07_10 PM (1).png" },
          { name: "Scalp Micro-Needling & Serum Injector", id: "lllt-hair-growth", image: "assests/products/LLLT laser (2).png" },
          { name: "Photodynamic Scalp Therapy Canopy", id: "lllt-hair-growth", image: "assests/products/LLLT laser (3).png" }
        ]
      },
      "Pigmentation & Tattoo Removal": {
        desc: "Ultra-short pulse Q-Switched and Picosecond laser systems for precise breakdown of benign pigmented lesions, epidermal spots, and multi-color tattoo inks.",
        sub: "Pigment & tattoo clearance",
        products: [
          { name: "Q-Switched Nd:YAG Laser", id: "q-switch-nd-yag", image: "assests/products/Pico laser (1).png" },
          { name: "1927nm Thulium Laser System", id: "thulium-laser-1927", image: "assests/products/1927nm thulium laser (1).png" },
          { name: "Vitamin C Glowing Serum", id: "glowing-serum", image: "assests/products/ChatGPT Image Jul 29, 2026, 02_07_11 PM (2).png" },
          { name: "TCA Peel Formulation", id: "tca-peel", image: "assests/products/ChatGPT Image Jul 29, 2026, 03_44_34 PM (2).png" }
        ]
      },
      "Skin Rejuvenation & Resurfacing": {
        desc: "Advanced laser technologies that rejuvenate skin, improve texture, reduce fine lines, and restore a more youthful, radiant appearance.",
        sub: "Rejuvenation & resurfacing",
        products: [
          { name: "1550nm Erbium Glass Fiber Laser", id: "erbium-glass-1550", image: "assests/products/1550 nm (1).png" },
          { name: "Fractional CO2 Laser Machine", id: "fractional-co2-laser", image: "assests/products/Fractional co2 laser (1).png" },
          { name: "1927nm Thulium Laser System", id: "thulium-laser-1927", image: "assests/products/1927nm thulium laser (2).png" },
          { name: "1550nm 10600nm Laser Machine", id: "laser-machine-dual", image: "assests/products/1550 nm + 10600nm (1).png" }
        ]
      },
      "Skin-Tightening, Fat-Reduction & Double-Chin Applications": {
        desc: "High-intensity focused ultrasound (HIFU) platforms engineered for SMAS lifting, dermal collagen tightening, and localized subcutaneous fat layer reduction.",
        sub: "Non-surgical skin lifting",
        products: [
          { name: "HIFU Lifting System 4D", id: "hifu-system", image: "assests/new products img/High-Intensity-Focused-Ultrasound-HIFU-12D_JMHF-3.png" },
          { name: "Fractional RF System", id: "fractional-rf", image: "assests/new products img/Microneedling-RF-Machine-MNRF_JMMP-8.png" },
          { name: "Monopolar RF Skin Tightening Platform", id: "fractional-rf", image: "assests/new products img/High-Intensity-Focused-Ultrasound-HIFU-12D_JMHF-3.png" },
          { name: "Thermal Ultrasound Contouring Device", id: "hifu-system", image: "assests/new products img/High-Intensity-Focused-Ultrasound-HIFU-12D_JMHF-3.png" }
        ]
      },
      "Scar, Wrinkle & Skin-Texture Applications": {
        desc: "Targeted fractional resurfacing and sub-dermal remodeling devices for acne scar correction, deep wrinkle smoothing, and overall skin refinement.",
        sub: "Scar & wrinkle remodeling",
        products: [
          { name: "Fractional CO2 Laser Machine", id: "fractional-co2-laser", image: "assests/new products img/Fractional-CO2-Laser-Machine-60W_JMCO-11.png" },
          { name: "Fractional RF Matrix System", id: "fractional-rf", image: "assests/new products img/Fractional-CO2-Laser_JMHF-4.png" },
          { name: "Scar & Stretch Mark Repair Meso Cocktail", id: "meso-scar-stretch", image: "assests/products/ChatGPT Image Jul 29, 2026, 02_07_11 PM (5).png" },
          { name: "Glycolic Acid Peel Formulation", id: "glycolic-peel", image: "assests/products/Glycolic 25% Pure Peel_nobg.png" }
        ]
      },
      "HydraFacial, Hydration & Deep Cleansing": {
        desc: "Multi-functional hydro-dermabrasion platforms combining vortex extraction, chemical exfoliation, and deep hyaluronic infusion for clinical facial hydration.",
        sub: "Hydro-cleansing & infusion",
        products: [
          { name: "HydraFacial PDT Therapy Station", id: "pdt-hydrafacial", image: "assests/products/Pdt + hydra facial (1).png" },
          { name: "Hydra Cleansing & Facial System", id: "hydra-cleansing", image: "assests/products/Pdt + hydra facial (2).png" },
          { name: "Gentle Hydrating Face Wash", id: "hydrating-facewash", image: "assests/products/ChatGPT Image Jul 29, 2026, 02_07_11 PM (1).png" }
        ]
      },
      "Skin Analysis": {
        desc: "High-definition 3D multi-spectral facial diagnostic systems that analyze sub-surface pigmentation, pore depth, UV damage, and moisture balance.",
        sub: "Digital diagnostic imaging",
        products: [
          { name: "3D Diagnostic Skin Analyzer", id: "skin-analyzer-3d", image: "assests/products/skin analyzer (1).png" },
          { name: "AI Skin Scanner & Moisture Analyzer", id: "skin-analyzer-3d", image: "assests/products/skin analyzer (2).png" },
          { name: "Digital Dermatoscope Imaging System", id: "skin-analyzer-3d", image: "assests/products/skin analyzer (3).png" },
          { name: "High-Res UV Facial Camera Station", id: "skin-analyzer-3d", image: "assests/products/skin analyzer (1).png" }
        ]
      },
      "Fat Reduction & Cellulite Applications": {
        desc: "Non-invasive body contouring platforms utilizing ultrasonic cavitation, multi-polar radiofrequency, and cryolipolysis to sculpt targeted fat deposits.",
        sub: "Body sculpting & cellulite",
        products: [
          { name: "Ultrasonic Cavitation & RF System", id: "cavitation-rf-body", image: "assests/products/Ems + roller (2).png" },
          { name: "Lipolysis Contouring Meso Solution", id: "meso-lipolysis", image: "assests/products/ChatGPT Image Jul 29, 2026, 02_07_11 PM (3).png" },
          { name: "360 Cryolipolysis Fat Freezing System", id: "cavitation-rf-body", image: "assests/products/Ems + roller (3).png" },
          { name: "EMS Muscle Stimulator & Sculptor", id: "cavitation-rf-body", image: "assests/products/Ems + roller (1).png" }
        ]
      },
      "Hemorrhoids, Fistulas & Sinus Pilonidalis": {
        desc: "Precision 980nm/1470nm surgical diode laser platforms providing minimally invasive, bloodless proctological and vascular treatments.",
        sub: "Proctology surgical lasers",
        products: [
          { name: "Surgical Laser System", id: "surgical-laser-pro", image: "assests/products/surgical laser (1).png" },
          { name: "Dual 980nm + 1470nm Surgical Laser", id: "surgical-laser-pro", image: "assests/products/surgical laser (2).png" },
          { name: "Fiber-Guided Micro-Laser Probe Kit", id: "surgical-laser-pro", image: "assests/products/surgical laser (3).png" },
          { name: "Precision Surgical Laser Generator", id: "surgical-laser-pro", image: "assests/products/surgical laser (1).png" }
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
        card.href = `product-detail.html?id=${p.id}`;
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
            <img src="${(p.images && p.images.length > 0) ? p.images[0] : (p.image || 'assests/cat-machines.png')}" alt="${p.name}">
          </div>
          <div class="product-info">
            <span class="product-model">Model: ${p.model}</span>
            <h4 class="product-name">${p.name}</h4>
            <p class="product-app-line">${p.primaryApplication || p.description || ''}</p>
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

  // Handle Enquiry Form — Real Web3Forms submission with validation
  const mainEnquiryForm = document.getElementById('main-enquiry-form');
  if (mainEnquiryForm) {

    // Pre-fill product from URL query string (?product=...)
    const urlParams = new URLSearchParams(window.location.search);
    const preProduct = urlParams.get('product');
    if (preProduct) {
      // Wait for dropdown to be populated, then select
      const tryPreFill = () => {
        const sel = document.getElementById('form-product');
        if (!sel) return;
        const opt = Array.from(sel.options).find(o => o.value === preProduct || o.textContent.startsWith(preProduct));
        if (opt) {
          sel.value = opt.value;
        } else {
          // Option not yet rendered — try again after a tick
          setTimeout(tryPreFill, 100);
        }
      };
      tryPreFill();
    }

    // Also handle legacy .select-enquiry-product links that set a data attribute
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.select-enquiry-product');
      if (btn) {
        const productName = btn.getAttribute('data-product');
        const sel = document.getElementById('form-product');
        if (sel && productName) sel.value = productName;
      }
    });

    const showFieldError = (fieldId, msg) => {
      const span = mainEnquiryForm.querySelector(`[data-for="${fieldId}"]`);
      if (span) span.textContent = msg;
      const field = document.getElementById(fieldId);
      if (field) field.classList.add('field-invalid');
    };

    const clearFieldError = (fieldId) => {
      const span = mainEnquiryForm.querySelector(`[data-for="${fieldId}"]`);
      if (span) span.textContent = '';
      const field = document.getElementById(fieldId);
      if (field) field.classList.remove('field-invalid');
    };

    const validateForm = () => {
      let valid = true;
      const required = [
        { id: 'form-product',  label: 'Product of Interest' },
        { id: 'form-name',     label: 'Full Name' },
        { id: 'form-phone',    label: 'Phone Number' },
        { id: 'form-email',    label: 'Email Address' },
        { id: 'form-clinic',   label: 'Clinic / Company' },
        { id: 'form-city',     label: 'City' }
      ];
      required.forEach(({ id, label }) => {
        const el = document.getElementById(id);
        if (!el || !el.value.trim()) {
          showFieldError(id, `${label} is required.`);
          valid = false;
        } else {
          clearFieldError(id);
        }
      });
      // Email format check
      const emailEl = document.getElementById('form-email');
      if (emailEl && emailEl.value.trim()) {
        const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim());
        if (!emailOK) {
          showFieldError('form-email', 'Please enter a valid email address.');
          valid = false;
        }
      }
      return valid;
    };

    // Clear error on blur/input
    ['form-product','form-name','form-phone','form-email','form-clinic','form-city'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', () => clearFieldError(id));
    });

    mainEnquiryForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Honeypot check
      const botField = mainEnquiryForm.querySelector('[name="botcheck"]');
      if (botField && botField.value) return; // Silently drop spam

      if (!validateForm()) return;

      const submitBtn = document.getElementById('enquiry-submit-btn');
      const btnLabel  = submitBtn.querySelector('.btn-label');
      const btnSpinner = submitBtn.querySelector('.btn-spinner');
      const successMsg = document.getElementById('form-success-msg');
      const errorMsg   = document.getElementById('form-error-msg');

      // Loading state
      submitBtn.disabled = true;
      if (btnLabel)  btnLabel.style.display  = 'none';
      if (btnSpinner) btnSpinner.style.display = 'inline-flex';
      if (successMsg) successMsg.style.display = 'none';
      if (errorMsg)   errorMsg.style.display   = 'none';

      try {
        const formData = new FormData(mainEnquiryForm);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();

        if (result.success) {
          mainEnquiryForm.reset();
          if (successMsg) successMsg.style.display = 'flex';
        } else {
          if (errorMsg) errorMsg.style.display = 'flex';
        }
      } catch (err) {
        if (errorMsg) errorMsg.style.display = 'flex';
      } finally {
        submitBtn.disabled = false;
        if (btnLabel)  btnLabel.style.display  = 'inline';
        if (btnSpinner) btnSpinner.style.display = 'none';
      }
    });
  }

  // Legacy multi-form handler (for non-main-enquiry-form instances on other pages)
  const legacyForms = document.querySelectorAll('.enquiry-form:not(#main-enquiry-form)');
  legacyForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector("button[type='submit']");
      const prevText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending...'; }
      setTimeout(() => {
        form.reset();
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = prevText; }
        alert('Thank you. Your enquiry has been recorded. Our team will contact you shortly.');
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
            <img src="${(p.images && p.images.length > 0) ? p.images[0] : (p.image || 'assests/cat-machines.png')}" alt="${p.name}">
          </div>

          <div class="card-info-content">
            <span class="card-category-badge ${categoryClass}">${p.categoryLabel}</span>
            ${(categoryClass !== 'meso' && categoryClass !== 'peels') ? `<div class="card-model-code">${p.model}</div>` : ''}
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

  // Interactive Application Switcher Handler for Section 3 — 10 catalogue application groups
  const appSwitcherBtns = document.querySelectorAll(".app-switcher-btn");
  const appHeroTitle = document.getElementById("app-hero-title");
  const appHeroDesc  = document.getElementById("app-hero-desc");
  const appCardsStack = document.getElementById("app-cards-stack");

  if (appSwitcherBtns.length > 0 && appHeroTitle && appHeroDesc && appCardsStack) {

    const appDataMap = {
      skin: {
        title: `Skin Rejuvenation<br>&amp; Resurfacing`,
        desc:  `Equipment listed in the catalogue for skin rejuvenation and resurfacing applications.`,
        cards: [
          { tag: "CO₂ LASER",   spec: "JMCO-11",   title: "Fractional CO₂ Laser — V2",    desc: "A fractional CO₂ laser machine listed for skin resurfacing and related catalogue-stated applications.",       img: "assests/new%20products%20img/Fractional-CO2-Laser-Machine-60W_JMCO-11.png",  link: "product-detail.html?id=fractional-co2-v2" },
          { tag: "CO₂ LASER",   spec: "JMCO-10",   title: "Fractional CO₂ Laser",         desc: "A CO₂ fractional laser machine listed for resurfacing and catalogue-stated skin applications.",              img: "assests/new%20products%20img/Fractional-CO2-Laser_JMHF-4.png",     link: "product-detail.html?id=fractional-co2" },
          { tag: "PICO LASER",   spec: "JMPS1",     title: "350PS TruePico Laser",         desc: "A picosecond laser machine listed for catalogue-stated skin-rejuvenation applications.",                    img: "assests/new%20products%20img/350PS-TruePico-Picosecond-Laser_JMPS1.png",         link: "product-detail.html?id=truepico-laser" }
        ]
      },
      hair: {
        title: `Hair Removal`,
        desc:  `Equipment listed in the catalogue for hair removal applications.`,
        cards: [
          { tag: "DIODE LASER",  spec: "JMMD-9",    title: "Diode Laser Machine",          desc: "A diode-laser system listed for hair removal and other catalogue-stated applications.",                        img: "assests/new%20products%20img/Diode-Laser_JMMD-9.png",        link: "product-detail.html?id=diode-laser" },
          { tag: "PICO LASER",   spec: "JMPS1",     title: "350PS TruePico Laser",         desc: "A picosecond laser machine listed for catalogue-stated hair and pigment applications.",                        img: "assests/new%20products%20img/350PS-TruePico-Picosecond-Laser_JMPS1.png",         link: "product-detail.html?id=truepico-laser" }
        ]
      },
      body: {
        title: `Body Contouring<br>&amp; Fat Reduction`,
        desc:  `Equipment listed in the catalogue for body contouring and fat reduction applications.`,
        cards: [
          { tag: "HIFU SYSTEM",  spec: "JMHF-3",    title: "HIFU-12D Machine",             desc: "An ultrasound-based machine listed for body and catalogue-stated fat-reduction applications.",                img: "assests/new%20products%20img/High-Intensity-Focused-Ultrasound-HIFU-12D_JMHF-3.png",           link: "product-detail.html?id=hifu-12d" },
          { tag: "EMS FACE LIFT",spec: "JMHM-17",   title: "Pulse Lift EMS Face Lift",    desc: "An EMS-based machine with catalogue-stated body and facial contouring applications.",                       img: "assests/new%20products%20img/Pulse-Lift-EMS-Face-Lift_JMHM-17.png",         link: "product-detail.html?id=pulse-lift-ems" }
        ]
      },
      peels: {
        title: `Chemical Peels<br>&amp; Facial Workstations`,
        desc:  `Equipment listed in the catalogue for facial treatments and chemical peel workflows.`,
        cards: [
          { tag: "PDT HYDRAFACIAL",spec: "JMPD-14", title: "PDT HydraFacial",             desc: "A facial machine with PDT light therapy listed among catalogue-stated applications.",                          img: "assests/new%20products%20img/PDT-HydraFacial_JMPD-14.png",   link: "product-detail.html?id=pdt-hydrafacial" }
        ]
      }
    };

    const buildCard = (c) => `
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
      </div>`;

    appSwitcherBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        appSwitcherBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const key  = btn.getAttribute('data-app');
        const data = appDataMap[key];
        if (!data) return;
        appHeroTitle.innerHTML = data.title;
        appHeroDesc.textContent = data.desc;
        appCardsStack.innerHTML = data.cards.map(buildCard).join('');
      });
    });
  }

  // SYNCHRONIZED PRODUCT SHOWCASE HERO CAROUSEL
  const initHeroShowcase = () => {
    const heroSection = document.getElementById('hero-showcase');
    if (!heroSection) return;

    const bgActive = document.getElementById('hero-bg-active');
    const bgNext = document.getElementById('hero-bg-next');
    const eyebrowEl = document.getElementById('hero-eyebrow');
    const modelPillEl = document.getElementById('hero-model-pill');
    const titleEl = document.getElementById('hero-title');
    const subtitleEl = document.getElementById('hero-subtitle');
    const primaryLink = document.getElementById('hero-primary-link');
    const secondaryLink = document.getElementById('hero-secondary-link');
    const prevBtn = document.getElementById('hero-prev-btn');
    const nextBtn = document.getElementById('hero-next-btn');
    const progressFill = document.getElementById('hero-progress-fill');
    const counterActive = document.getElementById('hero-counter-active');
    const counterTotal = document.getElementById('hero-counter-total');
    const carouselWrapper = document.getElementById('hero-carousel-wrapper');
    const carouselEl = document.getElementById('hero-card-carousel');

    // Products covering all 3 categories (Machines, Meso Solutions, Chemical Peels)
    const heroSlides = [
      {
        id: "hair-re-growth",
        category: "MESO SOLUTION",
        eyebrow: "SCALP & HAIR REVITALIZATION",
        title: "HAIR RE-GROWTH MESO COCKTAIL",
        model: "JMM-01",
        subtitle: "Hair Re-Growth Meso Cocktail helps in hair re-growth in a few treatments. It is used topically on the scalp with a nano roller for maximum penetration.",
        image: "assests/products/ChatGPT%20Image%20Jul%2029,%202026,%2002_07_10%20PM%20(1).png",
        detailLink: "contact.html?product=Hair+Re-Growth",
        enquireLink: "contact.html?product=Hair+Re-Growth"
      },
      {
        id: "glycolic-peel",
        category: "CHEMICAL PEEL",
        eyebrow: "ALPHA HYDROXY ACID PEEL",
        title: "GLYCOLIC PEEL SOLUTION",
        model: "JMP-01",
        subtitle: "A water-soluble sugar cane alpha hydroxy acid peel available in 20%, 40%, and 60% concentrations for smooth skin renewal.",
        image: "assests/products/Glycolic%2025%25%20Pure%20Peel_nobg.png",
        detailLink: "contact.html?product=Glycolic+Peel",
        enquireLink: "contact.html?product=Glycolic+Peel"
      },
      {
        id: "fractional-co2-v2",
        category: "MACHINES",
        eyebrow: "FRACTIONAL LASER PLATFORM",
        title: "FRACTIONAL CO₂ LASER MACHINE",
        model: "JMCO-11",
        subtitle: "A professional fractional CO₂ laser system engineered for skin resurfacing, scar revision, and deep collagen remodeling.",
        image: "assests/new%20products%20img/Fractional-CO2-Laser-Machine-60W_JMCO-11.png",
        detailLink: "product-detail.html?id=fractional-co2-v2",
        enquireLink: "contact.html?product=Fractional+CO2+Laser+Machine"
      },
      {
        id: "tca-peel",
        category: "CHEMICAL PEEL",
        eyebrow: "MEDIUM-DEPTH TRICHLOROACETIC PEEL",
        title: "TCA PEEL SOLUTION",
        model: "JMP-02",
        subtitle: "A professional trichloroacetic acid peel for fine surface wrinkles, superficial blemishes, and targeted skin resurfacing.",
        image: "assests/products/TCA%2025%25%20Pure%20Peel_nobg.png",
        detailLink: "contact.html?product=TCA+Peel",
        enquireLink: "contact.html?product=TCA+Peel"
      },
      {
        id: "glow-meso",
        category: "MESO SOLUTION",
        eyebrow: "GLOWING & LIGHTENING MESO",
        title: "GLOW MESO SOLUTION",
        model: "JMM-02",
        subtitle: "Glow Meso Cocktail gives you glowing skin in a few treatments. It is used topically with a nano roller for maximum penetration.",
        image: "assests/products/Glow%20Meso_nobg.png",
        detailLink: "contact.html?product=Glow+Meso",
        enquireLink: "contact.html?product=Glow+Meso"
      }
    ];

    let currentIndex = 0;
    let autoPlayTimer = null;
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    // Render cards into horizontal slider with duplicate sets for infinite continuous looping
    const totalSlidesCount = heroSlides.length;
    const displaySlides = [...heroSlides, ...heroSlides, ...heroSlides];
    currentIndex = totalSlidesCount; // Start in middle set

    carouselEl.innerHTML = displaySlides.map((slide, index) => `
      <div class="hero-showcase-card ${index === currentIndex ? 'active' : ''}" data-index="${index % totalSlidesCount}" data-virtual="${index}">
        <div class="hero-card-img-wrapper">
          <img src="${slide.image}" alt="${slide.title}" class="hero-card-img" />
        </div>
        <div class="hero-card-overlay">
          <span class="hero-card-category-badge">${slide.category}</span>
          <span class="hero-card-model">${slide.model}</span>
          <h3 class="hero-card-name">${slide.title}</h3>
        </div>
      </div>
    `).join('');

    const cards = carouselEl.querySelectorAll('.hero-showcase-card');

    // Set initial background & counter
    if (bgActive) bgActive.style.backgroundImage = `url('${heroSlides[0].image}')`;
    if (counterTotal) counterTotal.textContent = String(totalSlidesCount).padStart(2, '0');

    const featuredImgEl = document.getElementById('hero-featured-img');

    let lastSlideTime = 0;
    const updateSlide = (nextVirtualIndex) => {
      const now = Date.now();
      if (now - lastSlideTime < 150) return;
      lastSlideTime = now;

      let targetIndex = nextVirtualIndex;
      const realIndex = (targetIndex % totalSlidesCount + totalSlidesCount) % totalSlidesCount;
      const nextSlide = heroSlides[realIndex];
      currentIndex = targetIndex;

      // 1. Instant & Direct Content Updates
      if (featuredImgEl) {
        featuredImgEl.src = nextSlide.image;
        featuredImgEl.alt = nextSlide.title;
      }

      if (bgActive) {
        bgActive.style.backgroundImage = `url('${nextSlide.image}')`;
      }

      if (eyebrowEl) eyebrowEl.textContent = `${nextSlide.category} • ${nextSlide.eyebrow}`;
      if (modelPillEl) modelPillEl.textContent = nextSlide.model;
      if (titleEl) titleEl.textContent = nextSlide.title;
      if (subtitleEl) subtitleEl.textContent = nextSlide.subtitle;
      if (primaryLink) primaryLink.href = nextSlide.detailLink;
      if (secondaryLink) secondaryLink.href = nextSlide.enquireLink;

      // 2. Update Counter & Progress Bar
      if (counterActive) counterActive.textContent = String(realIndex + 1).padStart(2, '0');
      if (progressFill) {
        const progressPercent = ((realIndex + 1) / totalSlidesCount) * 100;
        progressFill.style.width = `${progressPercent}%`;
      }

      // 3. Update Active Card Class & Horizontal Scroll Position
      cards.forEach((card, idx) => {
        if (idx === currentIndex) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });

      const activeCard = cards[currentIndex];
      if (activeCard) {
        const cardWidth = activeCard.offsetWidth + 16;
        currentTranslate = -(currentIndex * cardWidth);
        prevTranslate = currentTranslate;
        carouselEl.style.transform = `translateX(${currentTranslate}px)`;
      }

      // 4. Infinite Jump Normalization (seamless loop back to middle set)
      if (currentIndex >= totalSlidesCount * 2) {
        setTimeout(() => {
          carouselEl.style.transition = 'none';
          currentIndex = totalSlidesCount + realIndex;
          const resetCard = cards[currentIndex];
          if (resetCard) {
            const cardWidth = resetCard.offsetWidth + 16;
            currentTranslate = -(currentIndex * cardWidth);
            prevTranslate = currentTranslate;
            carouselEl.style.transform = `translateX(${currentTranslate}px)`;
          }
          cards.forEach((card, idx) => {
            if (idx === currentIndex) card.classList.add('active');
            else card.classList.remove('active');
          });
          carouselEl.offsetHeight;
          carouselEl.style.transition = '';
        }, 400);
      } else if (currentIndex < totalSlidesCount) {
        setTimeout(() => {
          carouselEl.style.transition = 'none';
          currentIndex = totalSlidesCount + realIndex;
          const resetCard = cards[currentIndex];
          if (resetCard) {
            const cardWidth = resetCard.offsetWidth + 16;
            currentTranslate = -(currentIndex * cardWidth);
            prevTranslate = currentTranslate;
            carouselEl.style.transform = `translateX(${currentTranslate}px)`;
          }
          cards.forEach((card, idx) => {
            if (idx === currentIndex) card.classList.add('active');
            else card.classList.remove('active');
          });
          carouselEl.offsetHeight;
          carouselEl.style.transition = '';
        }, 400);
      }
    };

    // Set initial position to middle set
    updateSlide(totalSlidesCount);

    // Card click events
    cards.forEach((card, vIdx) => {
      card.addEventListener('click', () => {
        updateSlide(vIdx);
        resetAutoPlay();
      });
    });

    // Expose Global Window Handlers for Single-Trigger Button Clicking
    window.slideHeroPrev = (e) => {
      if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
        e.stopPropagation();
      }
      updateSlide(currentIndex - 1);
      resetAutoPlay();
    };

    window.slideHeroNext = (e) => {
      if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
        e.stopPropagation();
      }
      updateSlide(currentIndex + 1);
      resetAutoPlay();
    };

    // Attach SINGLE clean click event to Prev / Next buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', window.slideHeroPrev);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', window.slideHeroNext);
    }

    // Touch & Mouse Dragging handlers for Desktop & Mobile
    if (carouselWrapper) {
      const getPositionX = (e) => e.type.includes('touch') ? e.touches[0].clientX : e.clientX;

      const touchStart = (e) => {
        isDragging = true;
        startX = getPositionX(e);
        if (autoPlayTimer) clearInterval(autoPlayTimer);
      };

      const touchMove = (e) => {
        if (!isDragging) return;
        const currentX = getPositionX(e);
        const diff = currentX - startX;
        carouselEl.style.transform = `translateX(${prevTranslate + diff}px)`;
      };

      const touchEnd = (e) => {
        if (!isDragging) return;
        isDragging = false;
        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -50) {
          updateSlide(currentIndex + 1);
        } else if (movedBy > 50) {
          updateSlide(currentIndex - 1);
        } else {
          updateSlide(currentIndex);
        }
        startAutoPlay();
      };

      carouselWrapper.addEventListener('touchstart', touchStart, { passive: true });
      carouselWrapper.addEventListener('touchmove', touchMove, { passive: true });
      carouselWrapper.addEventListener('touchend', touchEnd);

      carouselWrapper.addEventListener('mousedown', touchStart);
      carouselWrapper.addEventListener('mousemove', touchMove);
      carouselWrapper.addEventListener('mouseup', touchEnd);
      carouselWrapper.addEventListener('mouseleave', () => {
        if (isDragging) touchEnd();
      });
    }

    // Auto Play functionality (every 4.5 seconds)
    const startAutoPlay = () => {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
      autoPlayTimer = setInterval(() => {
        updateSlide(currentIndex + 1);
      }, 4500);
    };

    const resetAutoPlay = () => {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
      startAutoPlay();
    };

    heroSection.addEventListener('mouseenter', () => {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
    });

    heroSection.addEventListener('mouseleave', () => {
      startAutoPlay();
    });

    // Initialize initial progress & autoplay
    if (progressFill) progressFill.style.width = `${(1 / heroSlides.length) * 100}%`;
    startAutoPlay();
  };

  initHeroShowcase();

  /* =========================================================================
     TESTIMONIALS 2-CARD SLIDER
     ========================================================================= */
  const initTestimonialsSlider = () => {
    const testiTrack = document.getElementById("testimonials-track");
    const testiPrevBtn = document.getElementById("testi-prev-btn");
    const testiNextBtn = document.getElementById("testi-next-btn");
    const testiDots = document.querySelectorAll(".testi-dot");

    if (!testiTrack || testiDots.length === 0) return;

    let currentPage = 0;
    const totalPages = testiDots.length;
    let testiAutoTimer = null;

    const goToPage = (page) => {
      currentPage = (page + totalPages) % totalPages;
      testiTrack.style.transform = `translateX(-${currentPage * 100}%)`;
      testiDots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentPage);
      });
    };

    const startTestiAutoPlay = () => {
      if (testiAutoTimer) clearInterval(testiAutoTimer);
      testiAutoTimer = setInterval(() => {
        goToPage(currentPage + 1);
      }, 5500);
    };

    if (testiPrevBtn) {
      testiPrevBtn.addEventListener("click", () => {
        goToPage(currentPage - 1);
        startTestiAutoPlay();
      });
    }

    if (testiNextBtn) {
      testiNextBtn.addEventListener("click", () => {
        goToPage(currentPage + 1);
        startTestiAutoPlay();
      });
    }

    testiDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const page = parseInt(dot.getAttribute("data-page"), 10);
        goToPage(page);
        startTestiAutoPlay();
      });
    });

    startTestiAutoPlay();
  };

  initTestimonialsSlider();

  // Product Spotlight Interactive Sliding Orbital Carousel
  const initProductSpotlightSlider = () => {
    const track = document.getElementById("spotlight-track");
    let slides = document.querySelectorAll(".spotlight-slide-item");
    const prevBtn = document.getElementById("spotlight-prev");
    const nextBtn = document.getElementById("spotlight-next");
    const dots = document.querySelectorAll(".indicator-dot");

    if (!track || !slides.length) return;

    const originalCount = slides.length;

    // Clone first slide and append to the end for seamless infinite loop (1 -> 2 -> 3 -> 1...)
    const firstClone = slides[0].cloneNode(true);
    firstClone.classList.add("is-clone");
    track.appendChild(firstClone);

    let currentIndex = 0;
    let isTransitioning = false;
    let autoPlayTimer = null;

    const setTrackPosition = (index, animated = true) => {
      if (animated) {
        track.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
      } else {
        track.style.transition = "none";
      }
      track.style.transform = `translateX(-${index * 100}%)`;
    };

    const updateDots = (realIndex) => {
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === realIndex);
      });
    };

    const goToNext = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex++;
      setTrackPosition(currentIndex, true);
      updateDots(currentIndex % originalCount);
    };

    const goToPrev = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      if (currentIndex === 0) {
        // Jump to clone position instantly, then animate to last original slide
        setTrackPosition(originalCount, false);
        // Force reflow
        track.offsetHeight;
        currentIndex = originalCount - 1;
        setTrackPosition(currentIndex, true);
      } else {
        currentIndex--;
        setTrackPosition(currentIndex, true);
      }
      updateDots(currentIndex % originalCount);
    };

    track.addEventListener("transitionend", () => {
      isTransitioning = false;
      // If reached the clone after the last slide, snap back to first slide seamlessly
      if (currentIndex === originalCount) {
        setTrackPosition(0, false);
        currentIndex = 0;
      }
    });

    const startAutoPlay = () => {
      // Check prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (autoPlayTimer) clearInterval(autoPlayTimer);
      autoPlayTimer = setInterval(() => {
        goToNext();
      }, 6000);
    };

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        goToNext();
        startAutoPlay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        goToPrev();
        startAutoPlay();
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        if (isTransitioning) return;
        const slideIdx = parseInt(dot.getAttribute("data-slide"), 10);
        isTransitioning = true;
        currentIndex = slideIdx;
        setTrackPosition(currentIndex, true);
        updateDots(currentIndex);
        startAutoPlay();
      });
    });

    // Touch / Swipe Support
    const stage = document.querySelector(".spotlight-stage");
    if (stage) {
      let touchStartX = 0;
      let touchEndX = 0;

      stage.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      stage.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
          goToNext();
          startAutoPlay();
        } else if (touchEndX - touchStartX > 50) {
          goToPrev();
          startAutoPlay();
        }
      }, { passive: true });
    }

    startAutoPlay();
  };

  initProductSpotlightSlider();

  /* ==========================================================================
     A SIMPLER PRODUCT JOURNEY HORIZONTAL SCROLL & GLOW LINE LOGIC
     ========================================================================== */
  const initJourneyScroll = () => {
    const viewport = document.getElementById('journey-scroll-viewport');
    const glowLine = document.getElementById('journey-line-glow');
    const stepCards = document.querySelectorAll('.journey-step-card');

    if (!viewport || !glowLine) return;

    const updateGlowLine = () => {
      const scrollLeft = viewport.scrollLeft;
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const scrollPercent = maxScroll > 0 ? Math.min(Math.max(scrollLeft / maxScroll, 0), 1) : 0;

      // Update glowing line width & position proportional to scroll
      const minGlowWidth = 25; // Base percentage width
      const totalWidth = minGlowWidth + (scrollPercent * 70); // Up to 95% line fill
      const leftOffset = scrollPercent * 5;

      glowLine.style.width = `${totalWidth}%`;
      glowLine.style.left = `${leftOffset}%`;

      // Highlight step cards based on scroll position
      stepCards.forEach((card, idx) => {
        const threshold = idx / (stepCards.length - 1 || 1);
        if (scrollPercent >= threshold && idx > 0) {
          card.classList.add('active-step');
        } else {
          card.classList.remove('active-step');
        }
      });
    };

    // Listen to scroll events
    viewport.addEventListener('scroll', updateGlowLine, { passive: true });

    // Drag to scroll functionality
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    viewport.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - viewport.offsetLeft;
      scrollLeft = viewport.scrollLeft;
    });

    viewport.addEventListener('mouseleave', () => { isDown = false; });
    viewport.addEventListener('mouseup', () => { isDown = false; });

    viewport.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - viewport.offsetLeft;
      const walk = (x - startX) * 1.5;
      viewport.scrollLeft = scrollLeft - walk;
    });

    // Mobile Arrow Navigation Controls
    const prevBtn = document.getElementById('journey-prev-btn');
    const nextBtn = document.getElementById('journey-next-btn');
    const indicator = document.getElementById('journey-mobile-indicator');

    const updateMobileControls = () => {
      if (!stepCards.length) return;
      const cardWidth = stepCards[0].offsetWidth + 20; // card width + gap
      const currentStepIdx = Math.round(viewport.scrollLeft / cardWidth);

      if (indicator) {
        indicator.textContent = `Step ${currentStepIdx + 1} of ${stepCards.length}`;
      }
      if (prevBtn) {
        prevBtn.disabled = currentStepIdx <= 0;
      }
      if (nextBtn) {
        nextBtn.disabled = currentStepIdx >= stepCards.length - 1;
      }
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const cardWidth = stepCards[0].offsetWidth + 20;
        viewport.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const cardWidth = stepCards[0].offsetWidth + 20;
        viewport.scrollBy({ left: cardWidth, behavior: 'smooth' });
      });
    }

    viewport.addEventListener('scroll', updateMobileControls, { passive: true });
    updateMobileControls();

    // Initial trigger
    updateGlowLine();
  };

  initJourneyScroll();


