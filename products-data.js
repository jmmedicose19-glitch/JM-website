const productsData = [
  // ==========================================
  // MACHINES (13 PRODUCTS FROM CATALOGUE)
  // ==========================================

  // 1. Pulse Lift EMS Face Lift (JMHM-17)
  {
    id: "pulse-lift-ems",
    name: "Pulse Lift EMS Face Lift",
    model: "JMHM-17",
    category: "machines",
    categoryLabel: "Facial Equipment",
    description: "A facial system using RF and HIFES for the forehead, eyebrows, cheeks and jawline.",
    images: [
      "assests/products/ems-roller-1.png",
      "assests/products/ems-roller-2.png",
      "assests/products/ems-roller-3.png"
    ],
    highlights: [
      "RF and HIFES technology",
      "Seven pads",
      "12.1-inch operating interface"
    ],
    overviewHeading: "RF & HIFES Facial Platform",
    overviewParagraph1: "The Pulse Lift EMS Face Lift is a facial system using synchronized RF and HIFES technologies for the forehead, eyebrows, cheeks and jawline as specified in the JM Medicose catalogue.",
    overviewParagraph2: "Equipped with seven dedicated pads and a 12.1-inch operating interface for precise treatment administration.",
    applications: [
      "Wrinkle removal",
      "Skin tightening",
      "Skin lifting",
      "Collagen boosting"
    ],
    features: [
      { title: "RF and HIFES Technology", text: "Delivers synchronized radiofrequency and high-intensity focused electrical stimulation." },
      { title: "Seven Treatment Pads", text: "Equipped with seven specialized pads configured for facial anatomical zones." },
      { title: "12.1-inch Operating Interface", text: "Large intuitive touch screen interface for parameter configuration." }
    ],
    techHeading: "Synchronized RF & HIFES Technology",
    techCopy: "Combines thermal radiofrequency with high-intensity focused electrical stimulation to target facial tissue layers.",
    systemItems: [
      "12.1-inch touchscreen interface",
      "Main console unit",
      "Seven facial treatment pads",
      "Connecting cable assembly",
      "Power module"
    ],
    infoTable: [
      { field: "Product Name", value: "Pulse Lift EMS Face Lift" },
      { field: "Product Category", value: "Facial Equipment" },
      { field: "Model Reference", value: "JMHM-17" },
      { field: "Technology Type", value: "RF & HIFES Technology" },
      { field: "Applicators", value: "Seven Pads" },
      { field: "User Interface", value: "12.1-inch operating interface" }
    ],
    relatedIds: ["hifu-12d", "alice-super-bubble-max", "pdt-hydrafacial"]
  },

  // 2. HIFU-12D Machine (JMHF-3)
  {
    id: "hifu-12d",
    name: "HIFU-12D Machine",
    model: "JMHF-3",
    category: "machines",
    categoryLabel: "HIFU System",
    description: "High-intensity focused ultrasound system listed for face, neck and body applications.",
    images: [
      "assests/products/hifu-12d-1.png",
      "assests/products/hifu-12d-2.png",
      "assests/products/hifu-12d-3.png"
    ],
    highlights: [
      "Focused ultrasound technology",
      "Multiple depth cartridges",
      "Touchscreen control interface"
    ],
    overviewHeading: "Focused Ultrasound System",
    overviewParagraph1: "The HIFU-12D Machine is a high-intensity focused ultrasound system listed for face, neck and body skin tightening, fat reduction and wrinkle removal applications.",
    overviewParagraph2: "Features multi-depth cartridges for targeted energy delivery across dermal and subdermal layers.",
    applications: [
      "Skin tightening",
      "Fat reduction",
      "Wrinkle removal",
      "Double-chin removal"
    ],
    features: [
      { title: "Focused Ultrasound", text: "Delivers non-invasive focused ultrasound energy to targeted tissue depths." },
      { title: "Multi-Depth Cartridges", text: "Includes dedicated cartridges for facial, neck, and body treatment protocols." },
      { title: "Touchscreen Interface", text: "Console interface for setting shot energy, line length, and spacing." }
    ],
    techHeading: "High-Intensity Focused Ultrasound",
    techCopy: "Focused ultrasound energy targets specified depth layers to induce thermal coagulation zones.",
    systemItems: [
      "Control display screen",
      "Mobile console body",
      "HIFU handpiece",
      "Depth cartridges set",
      "Foot pedal"
    ],
    infoTable: [
      { field: "Product Name", value: "HIFU-12D Machine" },
      { field: "Product Category", value: "HIFU System" },
      { field: "Model Reference", value: "JMHF-3" },
      { field: "Technology Type", value: "High-Intensity Focused Ultrasound" },
      { field: "Applications", value: "Skin tightening, fat reduction, wrinkle removal" }
    ],
    relatedIds: ["pulse-lift-ems", "fractional-co2-v2", "diode-laser"]
  },

  // 3. 1550nm Erbium Glass Fiber Laser (JMFR2)
  {
    id: "erbium-glass-1550",
    name: "1550nm Erbium Glass Fiber Laser",
    model: "JMFR2",
    category: "machines",
    categoryLabel: "Erbium Laser",
    description: "A 1550nm non-ablative erbium glass fiber laser system for skin resurfacing and scar treatment.",
    images: [
      "assests/products/fractional-co2-1.png",
      "assests/products/fractional-co2-2.png"
    ],
    highlights: [
      "1550nm Erbium Glass wavelength",
      "Non-ablative fractional resurfacing",
      "Fiber laser generator"
    ],
    overviewHeading: "1550nm Erbium Glass Fiber Laser Platform",
    overviewParagraph1: "The 1550nm Erbium Glass Fiber Laser (JMFR2) is a non-ablative fractional laser system listed in the catalogue for skin resurfacing, scar revision, and skin texture refinement.",
    overviewParagraph2: "Utilizes advanced fiber laser technology for stable 1550nm wavelength emission.",
    applications: [
      "Non-ablative skin resurfacing",
      "Acne scar revision",
      "Wrinkle reduction",
      "Skin texture refinement"
    ],
    features: [
      { title: "1550nm Fiber Laser", text: "High-stability 1550nm laser beam generation." },
      { title: "Fractional Scanner", text: "Precision micro-beam pattern scanner." },
      { title: "Digital Control Interface", text: "Integrated console screen for density and pulse energy control." }
    ],
    techHeading: "1550nm Non-Ablative Technology",
    techCopy: "Emits 1550nm laser light to create microscopic thermal zones while preserving the stratum corneum.",
    systemItems: [
      "Touchscreen console",
      "Fiber laser module",
      "Fractional scanner handpiece",
      "Foot switch"
    ],
    infoTable: [
      { field: "Product Name", value: "1550nm Erbium Glass Fiber Laser" },
      { field: "Model Reference", value: "JMFR2" },
      { field: "Wavelength", value: "1550nm" },
      { field: "Technology Type", value: "Erbium Glass Fiber Laser" }
    ],
    relatedIds: ["fractional-co2-v2", "thulium-laser-1927", "hifu-12d"]
  },

  // 4. Fractional CO₂ Laser — V2 (JMCO-11)
  {
    id: "fractional-co2-v2",
    name: "Fractional CO₂ Laser — V2",
    model: "JMCO-11",
    category: "machines",
    categoryLabel: "CO₂ Laser",
    description: "Fractional CO₂ laser system listed for skin rejuvenation, scarring and catalogue-stated applications.",
    images: [
      "assests/products/fractional-co2-v2-1.png",
      "assests/products/fractional-co2-v2-2.png",
      "assests/products/fractional-co2-v2-3.png"
    ],
    highlights: [
      "Fractional CO₂ laser delivery",
      "7-joint articulated optical arm",
      "Multiple scanner shapes"
    ],
    overviewHeading: "Fractional CO₂ Laser Platform",
    overviewParagraph1: "The Fractional CO₂ Laser — V2 (JMCO-11) is a 10600nm fractional laser system listed for skin resurfacing, scar treatment, and surgical coagulation.",
    overviewParagraph2: "Equipped with a 7-joint light guiding arm and multiple scanning pattern modes.",
    applications: [
      "Skin resurfacing",
      "Scar revision",
      "Surgical coagulation",
      "Skin texture refinement"
    ],
    features: [
      { title: "10600nm Wavelength", text: "Standard CO₂ laser output for micro-ablative thermal impact." },
      { title: "Articulated Light Arm", text: "7-joint light guiding arm for flexible handpiece maneuverability." },
      { title: "Multiple Scan Patterns", text: "Selectable scan shapes including square, circle, rectangle, and triangle." }
    ],
    techHeading: "10600nm Fractional CO₂ Technology",
    techCopy: "Fractional ablation creates microscopic columns of thermal injury to trigger tissue remodeling.",
    systemItems: [
      "Main laser console",
      "7-joint light guiding arm",
      "Fractional scanning handpiece",
      "Surgical cutting handpiece",
      "Foot switch"
    ],
    infoTable: [
      { field: "Product Name", value: "Fractional CO₂ Laser — V2" },
      { field: "Model Reference", value: "JMCO-11" },
      { field: "Wavelength", value: "10600nm" },
      { field: "Beam Delivery", value: "7-joint articulated arm" }
    ],
    relatedIds: ["erbium-glass-1550", "fractional-co2", "thulium-laser-1927"]
  },

  // 5. Fractional CO₂ Laser Machine (JMHF-4)
  {
    id: "fractional-co2",
    name: "Fractional CO₂ Laser Machine",
    model: "JMHF-4",
    category: "machines",
    categoryLabel: "CO₂ Laser",
    description: "A fractional CO₂ laser system listed for resurfacing, scarring and clinical coagulation.",
    images: [
      "assests/products/fractional-co2-3.png",
      "assests/products/fractional-co2-4.png"
    ],
    highlights: [
      "10600nm CO₂ laser",
      "Articulated optical arm",
      "Integrated control screen"
    ],
    overviewHeading: "10600nm CO₂ Laser Workstation",
    overviewParagraph1: "The Fractional CO₂ Laser Machine (JMHF-4) provides fractional micro-ablative laser delivery for skin resurfacing and scar treatment applications.",
    overviewParagraph2: "Console format with integrated touchscreen display and balanced optical arm.",
    applications: [
      "Skin resurfacing",
      "Scar treatment",
      "Surgical cutting & coagulation"
    ],
    features: [
      { title: "10600nm Laser Source", text: "CO₂ laser tube delivering consistent beam power." },
      { title: "Optical Delivery Arm", text: "Balanced light guiding arm for target precision." },
      { title: "Touchscreen Console", text: "Digital interface for adjusting pulse duration and energy." }
    ],
    techHeading: "Micro-Ablative Laser Technology",
    techCopy: "Micro-fractional beam arrays vaporize microscopic target spots while leaving surrounding skin intact.",
    systemItems: [
      "Laser workstation body",
      "Articulated arm assembly",
      "Scanner probe",
      "Foot switch"
    ],
    infoTable: [
      { field: "Product Name", value: "Fractional CO₂ Laser Machine" },
      { field: "Model Reference", value: "JMHF-4" },
      { field: "Wavelength", value: "10600nm" }
    ],
    relatedIds: ["fractional-co2-v2", "erbium-glass-1550", "diode-laser"]
  },

  // 6. Diode Laser Machine (JMMD-9)
  {
    id: "diode-laser",
    name: "Diode Laser Machine",
    model: "JMMD-9",
    category: "machines",
    categoryLabel: "Diode Laser",
    description: "A diode-laser system listed for hair removal and other catalogue-stated applications.",
    images: [
      "assests/products/diode-laser-1.png",
      "assests/products/diode-laser-2.png",
      "assests/products/diode-laser-3.png"
    ],
    highlights: [
      "Four wavelengths (755nm+808nm+940nm+1064nm)",
      "Contact cooling handpiece",
      "High power output"
    ],
    overviewHeading: "Four-Wavelength Diode Laser Platform",
    overviewParagraph1: "The Diode Laser Machine (JMMD-9) is a multi-wavelength diode laser system combining 755nm, 808nm, 940nm, and 1064nm outputs for hair removal across all skin types as listed in the catalogue.",
    overviewParagraph2: "Features integrated Sapphire contact cooling for patient comfort during treatment.",
    applications: [
      "Hair removal",
      "Catalogue-stated laser applications"
    ],
    features: [
      { title: "Four Wavelengths", text: "Integrates 755nm, 808nm, 940nm, and 1064nm laser emission." },
      { title: "Sapphire Cooling", text: "Continuous contact cooling tip to protect the epidermis." },
      { title: "Smart Touchscreen", text: "Presets for skin phototype and body area selection." }
    ],
    techHeading: "Selective Photothermolysis",
    techCopy: "Laser energy is absorbed by melanin in the hair follicle shaft to inhibit hair re-growth.",
    systemItems: [
      "Diode laser console",
      "Handpiece with Sapphire tip",
      "Touchscreen display",
      "Interlock key & foot pedal"
    ],
    infoTable: [
      { field: "Product Name", value: "Diode Laser Machine" },
      { field: "Model Reference", value: "JMMD-9" },
      { field: "Wavelengths", value: "755nm + 808nm + 940nm + 1064nm" },
      { field: "Application", value: "Hair removal" }
    ],
    relatedIds: ["alexandrite-dual-wave", "laser-hair-growth", "hifu-12d"]
  },

  // 7. Multifunctional Laser Hair Growth Machine (JMHG-5)
  {
    id: "laser-hair-growth",
    name: "Multifunctional Laser Hair Growth Machine",
    model: "JMHG-5",
    category: "machines",
    categoryLabel: "Scalp Equipment",
    description: "A multifunctional low-level laser therapy system listed for scalp stimulation and hair growth applications.",
    images: [
      "assests/products/1.png",
      "assests/products/2.png"
    ],
    highlights: [
      "Low-level laser therapy (LLLT)",
      "Scalp stimulation hood",
      "Multi-panel canopy"
    ],
    overviewHeading: "Laser Scalp Therapy System",
    overviewParagraph1: "The Multifunctional Laser Hair Growth Machine (JMHG-5) is a non-invasive scalp therapy system utilizing low-level diode laser panels for follicle stimulation as listed in the catalogue.",
    overviewParagraph2: "Features an adjustable multi-panel hood for complete scalp coverage.",
    applications: [
      "Hair growth stimulation",
      "Scalp therapy",
      "Follicle reactivation"
    ],
    features: [
      { title: "LLLT Diode Panels", text: "Low-level cold laser diodes for non-thermal scalp irradiation." },
      { title: "Adjustable Canopy Hood", text: "Positionable panel array conforming to head contours." },
      { title: "Console Control Interface", text: "Timer and power control screen." }
    ],
    techHeading: "Low-Level Laser Photobiomodulation",
    techCopy: "Non-thermal red laser diodes stimulate scalp micro-circulation and cellular metabolism.",
    systemItems: [
      "Main console trolley",
      "Laser canopy hood",
      "Control display screen"
    ],
    infoTable: [
      { field: "Product Name", value: "Multifunctional Laser Hair Growth Machine" },
      { field: "Model Reference", value: "JMHG-5" },
      { field: "Technology Type", value: "Low-Level Laser Therapy (LLLT)" }
    ],
    relatedIds: ["diode-laser", "hair-re-growth", "a5-intelligent-imager"]
  },

  // 8. Alexandrite Laser Dual Wave (JMAX-10)
  {
    id: "alexandrite-dual-wave",
    name: "Alexandrite Laser Dual Wave",
    model: "JMAX-10",
    category: "machines",
    categoryLabel: "Alexandrite Laser",
    description: "A dual-wavelength 755nm and 1064nm laser system for hair removal and vascular/pigment applications.",
    images: [
      "assests/products/3.png",
      "assests/products/4.png"
    ],
    highlights: [
      "Dual 755nm & 1064nm wavelength",
      "High peak power",
      "Integrated cooling delivery"
    ],
    overviewHeading: "755nm / 1064nm Dual-Wave Laser System",
    overviewParagraph1: "The Alexandrite Laser Dual Wave (JMAX-10) combines 755nm Alexandrite and 1064nm Nd:YAG laser sources for hair removal and epidermal pigmentation clearance.",
    overviewParagraph2: "High-performance pulse delivery with integrated epidermal cooling.",
    applications: [
      "Hair removal",
      "Pigmentation clearance",
      "Vascular applications"
    ],
    features: [
      { title: "755nm & 1064nm Laser", text: "Dual wavelength switching for light and dark skin phototypes." },
      { title: "High Peak Power", text: "Delivers short pulse widths for targeted melanosome destruction." },
      { title: "Cooling Delivery", text: "Integrated air or dynamic cooling system." }
    ],
    techHeading: "Alexandrite & Nd:YAG Technology",
    techCopy: "755nm targets superficial melanin efficiently, while 1064nm penetrates deeper for dark skin types.",
    systemItems: [
      "Console main body",
      "Fiber delivery cable",
      "Treatment handpiece",
      "Foot pedal"
    ],
    infoTable: [
      { field: "Product Name", value: "Alexandrite Laser Dual Wave" },
      { field: "Model Reference", value: "JMAX-10" },
      { field: "Wavelengths", value: "755nm + 1064nm" }
    ],
    relatedIds: ["diode-laser", "truepico-laser", "hifu-12d"]
  },

  // 9. A5 Intelligent Imager (JMSD-12)
  {
    id: "a5-intelligent-imager",
    name: "A5 Intelligent Imager",
    model: "JMSD-12",
    category: "machines",
    categoryLabel: "Skin Diagnostic",
    description: "An advanced multi-spectral skin analysis and diagnostic system for facial imaging.",
    images: [
      "assests/products/5.png",
      "assests/products/6.png"
    ],
    highlights: [
      "Multi-spectral facial imaging",
      "High-resolution camera sensor",
      "Skin diagnostic software"
    ],
    overviewHeading: "Skin Diagnostic & Analysis Platform",
    overviewParagraph1: "The A5 Intelligent Imager (JMSD-12) is a professional facial skin analysis system utilizing multi-spectral light modes to evaluate pores, spots, moisture, and UV damage.",
    overviewParagraph2: "Provides automated visual analysis reports for treatment planning.",
    applications: [
      "Facial skin analysis",
      "Pigment & pore assessment",
      "Treatment progress tracking"
    ],
    features: [
      { title: "Multi-Spectral Imaging", text: "Uses RGB, UV, and PL light spectrums to image deep epidermal layers." },
      { title: "High-Res Optics", text: "Precision optical lens capturing micro-details of skin texture." },
      { title: "Diagnostic Software", text: "Automated analysis comparing parameters against skin benchmarks." }
    ],
    techHeading: "Multi-Spectral Optical Analysis",
    techCopy: "Cross-polarized and UV illumination reveal sub-surface pigment, pore congestion, and vascularity.",
    systemItems: [
      "Imaging hood unit",
      "High-resolution camera sensor",
      "Analysis software",
      "Connecting cabling"
    ],
    infoTable: [
      { field: "Product Name", value: "A5 Intelligent Imager" },
      { field: "Model Reference", value: "JMSD-12" },
      { field: "Technology Type", value: "Multi-spectral optical imaging" }
    ],
    relatedIds: ["alice-super-bubble-max", "pdt-hydrafacial", "hifu-12d"]
  },

  // 10. 1927nm Thulium Laser (JMTH-13)
  {
    id: "thulium-laser-1927",
    name: "1927nm Thulium Laser",
    model: "JMTH-13",
    category: "machines",
    categoryLabel: "Thulium Laser",
    description: "A 1927nm sub-ablative thulium laser system for melasma, epidermal pigmentation and skin brightening.",
    images: [
      "assests/products/8.png",
      "assests/products/9.png"
    ],
    highlights: [
      "1927nm Thulium wavelength",
      "Sub-ablative epidermal resurfacing",
      "Melasma & pigmentation treatment"
    ],
    overviewHeading: "1927nm Thulium Fractional Laser",
    overviewParagraph1: "The 1927nm Thulium Laser (JMTH-13) is a sub-ablative fractional laser system listed for epidermal pigment removal, melasma reduction, and skin tone brightening.",
    overviewParagraph2: "High water absorption coefficient allows gentle epidermal renewal with minimal downtime.",
    applications: [
      "Melasma treatment",
      "Epidermal pigmentation clearance",
      "Skin brightening & tone refinement",
      "Sub-ablative resurfacing"
    ],
    features: [
      { title: "1927nm Wavelength", text: "Specific absorption wavelength targeting the dermo-epidermal junction." },
      { title: "Fractional Scanner", text: "Delivers uniform micro-beam patterns for smooth coverage." },
      { title: "Customizable Parameters", text: "Adjustable power, density, and scan width." }
    ],
    techHeading: "Sub-Ablative Thulium Technology",
    techCopy: "1927nm wavelength induces epidermal micro-coagulation to accelerate pigment turnover.",
    systemItems: [
      "Thulium laser console",
      "Fractional handpiece",
      "Touchscreen screen",
      "Foot switch"
    ],
    infoTable: [
      { field: "Product Name", value: "1927nm Thulium Laser" },
      { field: "Model Reference", value: "JMTH-13" },
      { field: "Wavelength", value: "1927nm" }
    ],
    relatedIds: ["erbium-glass-1550", "fractional-co2-v2", "truepico-laser"]
  },

  // 11. 350PS TruePico Picosecond Laser (JMPS1)
  {
    id: "truepico-laser",
    name: "350PS TruePico Picosecond Laser",
    model: "JMPS1",
    category: "machines",
    categoryLabel: "Picosecond Laser",
    description: "An ultra-short pulse picosecond laser for tattoo removal, pigmentation correction and skin rejuvenation.",
    images: [
      "assests/products/pico-laser-1.png",
      "assests/products/pico-laser-2.png",
      "assests/products/pico-laser-3.png"
    ],
    highlights: [
      "350PS picosecond pulse width",
      "Articulated optical arm",
      "Multi-wavelength tips"
    ],
    overviewHeading: "350PS Picosecond Laser Platform",
    overviewParagraph1: "The 350PS TruePico Picosecond Laser (JMPS1) uses ultra-short picosecond pulse delivery to fragment pigment particles into fine dust without thermal damage to surrounding tissue.",
    overviewParagraph2: "Ideal for multi-color tattoo removal, epidermal pigmentation, and photo-rejuvenation protocols.",
    applications: [
      "Tattoo removal",
      "Pigmentation correction",
      "Skin rejuvenation"
    ],
    features: [
      { title: "350PS Pulse Width", text: "Picosecond pulse output generating photo-acoustic pressure waves." },
      { title: "Articulated Arm", text: "Balanced 7-joint optical arm providing precise beam positioning." },
      { title: "Touchscreen Interface", text: "Smart touch screen for selecting spot size and energy density." }
    ],
    techHeading: "Picosecond Photo-Acoustic Impact",
    techCopy: "Ultra-short pulse duration shattering pigment via photo-acoustic mechanism.",
    systemItems: [
      "Touchscreen control display",
      "Picosecond laser generator unit",
      "Articulated light-guiding arm",
      "Treatment handpiece tips",
      "Foot pedal"
    ],
    infoTable: [
      { field: "Product Name", value: "350PS TruePico Picosecond Laser" },
      { field: "Model Reference", value: "JMPS1" },
      { field: "Pulse Width", value: "350 Picoseconds" }
    ],
    relatedIds: ["thulium-laser-1927", "alexandrite-dual-wave", "fractional-co2-v2"]
  },

  // 12. Alice Super Bubble Max (JMAL-7)
  {
    id: "alice-super-bubble-max",
    name: "Alice Super Bubble Max",
    model: "JMAL-7",
    category: "machines",
    categoryLabel: "Facial System",
    description: "A multi-function facial workstation listed for deep cleansing, exfoliation, hydration and skin rejuvenation.",
    images: [
      "assests/products/o2-hydrafacial-1.png",
      "assests/products/o2-hydrafacial-2.png",
      "assests/products/o2-hydrafacial-3.png"
    ],
    highlights: [
      "Super Bubble hydro-cleansing",
      "Multi-function facial applicators",
      "Solution container array"
    ],
    overviewHeading: "Alice Super Bubble Max Workstation",
    overviewParagraph1: "The Alice Super Bubble Max (JMAL-7) is a multi-function facial workstation listed for deep cleansing, exfoliation, hydration and skin rejuvenation as presented in the catalogue.",
    overviewParagraph2: "Equipped with hydro-dermabrasion, oxygen spray, and bio-lifting probes.",
    applications: [
      "Deep cleansing",
      "Exfoliation",
      "Hydration",
      "Skin rejuvenation"
    ],
    features: [
      { title: "Hydro-Cleansing System", text: "Water-vacuum suction wand for deep pore cleansing." },
      { title: "Oxygen Spray Wand", text: "Fine mist oxygen spray injector for topical serum delivery." },
      { title: "Multi-Container Rack", text: "Multiple solution bottles for quick cleansing solution selection." }
    ],
    techHeading: "Hydro-Bubble Cleansing Technology",
    techCopy: "Combines liquid vortex suction with micro-bubble exfoliation to clear follicular debris.",
    systemItems: [
      "Control display screen",
      "Main workstation console",
      "Hydro-wand applicator",
      "Oxygen spray injector",
      "Solution bottle rack"
    ],
    infoTable: [
      { field: "Product Name", value: "Alice Super Bubble Max" },
      { field: "Model Reference", value: "JMAL-7" },
      { field: "Technology Type", value: "Hydro-dermabrasion & Bubble cleansing" }
    ],
    relatedIds: ["pdt-hydrafacial", "pulse-lift-ems", "a5-intelligent-imager"]
  },

  // 13. PDT HydraFacial (JMPD-14)
  {
    id: "pdt-hydrafacial",
    name: "PDT HydraFacial",
    model: "JMPD-14",
    category: "machines",
    categoryLabel: "Facial System",
    description: "A multi-step facial system combining HydraFacial functions with photodynamic therapy for hydration and texture applications.",
    images: [
      "assests/products/pdt-hydrafacial-1.png",
      "assests/products/pdt-hydrafacial-2.png",
      "assests/products/pdt-hydrafacial-3.png"
    ],
    highlights: [
      "HydraFacial hydro-peel",
      "PDT light canopy",
      "Multi-probe facial suite"
    ],
    overviewHeading: "HydraFacial & PDT Combination Platform",
    overviewParagraph1: "The PDT HydraFacial (JMPD-14) integrates hydro-dermabrasion cleansing with multi-color photodynamic therapy (PDT) light canopy for hydration and skin-texture improvement.",
    overviewParagraph2: "Combines mechanical cleansing with optical LED light exposure.",
    applications: [
      "Hydration applications",
      "Skin-tone applications",
      "Skin-texture applications"
    ],
    features: [
      { title: "PDT LED Canopy", text: "Integrated light arch delivering red, blue, and green LED light therapy." },
      { title: "Hydro-Peel Wand", text: "Liquid vortex probe for exfoliation and extraction." },
      { title: "Digital Touch Screen", text: "Controls suction pressure and LED wavelength timing." }
    ],
    techHeading: "HydraFacial & PDT Synergy",
    techCopy: "Hydro-exfoliation primes the skin prior to photodynamic light exposure.",
    systemItems: [
      "Digital control panel",
      "Workstation chassis",
      "PDT light canopy",
      "Hydro-peel handpiece",
      "Solution bottle array"
    ],
    infoTable: [
      { field: "Product Name", value: "PDT HydraFacial" },
      { field: "Model Reference", value: "JMPD-14" },
      { field: "Technology Type", value: "HydraFacial & Photodynamic Light Therapy" }
    ],
    relatedIds: ["alice-super-bubble-max", "pulse-lift-ems", "a5-intelligent-imager"]
  },

  // ==========================================
  // MESO SOLUTIONS (6 PRODUCTS FROM CATALOGUE)
  // ==========================================

  // 1. Hair Re-Growth
  {
    id: "hair-re-growth",
    name: "Hair Re-Growth",
    category: "meso",
    categoryLabel: "MESO SOLUTION",
    description: "A hair re-growth meso cocktail used topically on the scalp with a nano roller for maximum penetration.",
    images: ["assests/cat-meso.png"],
    indication: "Hair Re-Growth Effect",
    overviewParagraph1: "Hair Re-Growth is a specialized meso solution cocktail formulated for topical scalp application using a nano roller to support hair re-growth and hair follicle nourishment.",
    detailNote: "Applied topically to the scalp with a micro/nano roller as instructed in the catalogue.",
    ingredients: [
      "Propylene Glycol",
      "Water",
      "Centella Asiatica Extract",
      "Polygonum Multiflorum Root Extract",
      "Angelica Sinensis Extract",
      "Niacinamide",
      "Panthenol",
      "Sodium Hyaluronate"
    ],
    relatedIds: ["glow-meso", "growth-factor-meso", "whitening-glutathion-meso"]
  },

  // 2. Glow Meso
  {
    id: "glow-meso",
    name: "Glow Meso",
    category: "meso",
    categoryLabel: "MESO SOLUTION",
    description: "A meso cocktail used topically with a nano roller for maximum penetration.",
    images: ["assests/cat-meso.png"],
    indication: "Glowing Effect / Lightening Effect",
    overviewParagraph1: "Glow Meso is a professional meso solution formulated for topical skin application with a nano roller to support skin radiance, glow, and tone brightening.",
    ingredients: [
      "Water",
      "Glutathione",
      "Ascorbic Acid (Vitamin C)",
      "Niacinamide",
      "Tranexamic Acid",
      "Sodium Hyaluronate",
      "Glycyrrhiza Glabra (Licorice) Root Extract",
      "Alpha-Arbutin"
    ],
    relatedIds: ["whitening-glutathion-meso", "hair-re-growth", "growth-factor-meso"]
  },

  // 3. Lipo Dissolve
  {
    id: "lipo-dissolve",
    name: "Lipo Dissolve",
    category: "meso",
    categoryLabel: "MESO SOLUTION",
    description: "A Deoxycholate + PPC PRO cocktail described for dissolving unwanted fat under the skin.",
    images: ["assests/cat-meso.png"],
    indication: "Double Chin, Love Handles, Inner Thighs and Underarms",
    overviewParagraph1: "Lipo Dissolve is a targeted meso formulation containing Deoxycholate and PPC PRO, listed in the catalogue for topical/localized application on unwanted fat under the skin.",
    ingredients: [
      "Water",
      "Phosphatidylcholine (PPC)",
      "Sodium Deoxycholate",
      "Carnitine",
      "Benzyl Alcohol",
      "Sodium Chloride",
      "Methylparaben"
    ],
    relatedIds: ["stretch-mark-and-scars-meso", "glow-meso", "growth-factor-meso"]
  },

  // 4. Whitening Glutathion Meso
  {
    id: "whitening-glutathion-meso",
    name: "Whitening Glutathion Meso",
    category: "meso",
    categoryLabel: "MESO SOLUTION",
    description: "A glutathion meso cocktail used topically with a nano roller on the desired area of the body.",
    images: ["assests/cat-meso.png"],
    indication: "Glowing Effect / Lightening Effect",
    overviewParagraph1: "Whitening Glutathion Meso is a concentrated glutathione meso cocktail intended for topical application with a nano roller to promote skin lightening and even complexion.",
    ingredients: [
      "Glutathione",
      "Ascorbic Acid",
      "Water",
      "Sodium Hyaluronate",
      "Kojic Acid",
      "Niacinamide"
    ],
    relatedIds: ["glow-meso", "hair-re-growth", "growth-factor-meso"]
  },

  // 5. Stretch Mark & Scars Meso
  {
    id: "stretch-mark-and-scars-meso",
    name: "Stretch Mark & Scars Meso",
    category: "meso",
    categoryLabel: "MESO SOLUTION",
    description: "A meso cocktail described for stretch-mark and scar-reduction applications and topical use with a nano roller.",
    images: ["assests/cat-meso.png"],
    indication: "Anti-Stretch Mark / Anti-Scar Effect",
    overviewParagraph1: "Stretch Mark & Scars Meso is a restorative meso formulation described in the catalogue for supporting skin repair, smoothing stretch marks, and reducing scar appearance.",
    ingredients: [
      "Water",
      "Organic Silicon",
      "Centella Asiatica Extract",
      "Soluble Collagen",
      "Elastin",
      "Panthenol",
      "Sodium Hyaluronate",
      "Allantoin"
    ],
    relatedIds: ["growth-factor-meso", "lipo-dissolve", "glow-meso"]
  },

  // 6. Growth Factor Meso
  {
    id: "growth-factor-meso",
    name: "Growth Factor Meso",
    category: "meso",
    categoryLabel: "MESO SOLUTION",
    description: "A growth-factor meso cocktail described for generating new cells and topical use on the skin and scalp.",
    images: ["assests/cat-meso.png"],
    indication: "Regenerating Effect",
    overviewParagraph1: "Growth Factor Meso is a regenerative meso cocktail containing synthetic epidermal and fibroblast growth factors, listed for cell regeneration on both facial skin and scalp.",
    ingredients: [
      "Water",
      "sh-Oligopeptide-1 (EGF)",
      "sh-Oligopeptide-2 (IGF-1)",
      "sh-Polypeptide-1 (bFGF)",
      "Copper Tripeptide-1",
      "Hyaluronic Acid",
      "Amino Acid Complex"
    ],
    relatedIds: ["hair-re-growth", "stretch-mark-and-scars-meso", "glow-meso"]
  },

  // ==========================================
  // CHEMICAL PEELS (10 PRODUCTS FROM CATALOGUE)
  // ==========================================

  // 1. Glycolic Peel
  {
    id: "glycolic-peel",
    name: "Glycolic Peel",
    category: "peels",
    categoryLabel: "CHEMICAL PEEL",
    description: "A water-soluble alpha hydroxy acid peel made from sugar cane.",
    images: ["assests/cat-peels.png"],
    variants: ["Glycolic 20%", "Glycolic 40%", "Glycolic 60%"],
    overviewParagraph1: "Glycolic Peel is a water-soluble alpha hydroxy acid (AHA) peel derived from sugar cane, listed in concentrations of 20%, 40%, and 60% for superficial-to-medium exfoliation.",
    directions: "Apply evenly to clean, dry skin using a brush. Leave on for specified protocol timing (2 to 5 minutes based on concentration), then neutralize thoroughly with water or neutralizer solution.",
    relatedIds: ["salicylic-peel", "tca-peel", "lactic-peel"]
  },

  // 2. TCA Peel
  {
    id: "tca-peel",
    name: "TCA Peel",
    category: "peels",
    categoryLabel: "CHEMICAL PEEL",
    description: "A medium-depth peel described for fine surface wrinkles, superficial blemishes and pigment problems.",
    images: ["assests/cat-peels.png"],
    variants: ["TCA 10%", "TCA 20%", "TCA 40%", "TCA 70%"],
    overviewParagraph1: "TCA (Trichloroacetic Acid) Peel is a medium-depth chemical peel formulation listed in concentrations of 10%, 20%, 40%, and 70% for surface wrinkles, blemishes, and hyperpigmentation.",
    directions: "For professional clinical application. Apply with gauze or applicator until desired frosting level is achieved. Monitor client feedback closely during application.",
    relatedIds: ["glycolic-peel", "phenol-5-percent-peel", "jessner-peel"]
  },

  // 3. Lactic Peel
  {
    id: "lactic-peel",
    name: "Lactic Peel",
    category: "peels",
    categoryLabel: "CHEMICAL PEEL",
    description: "A chemical peel described for improving and smoothing skin texture by removing damaged upper layers.",
    images: ["assests/cat-peels.png"],
    variants: ["Lactic 70%"],
    overviewParagraph1: "Lactic Peel (70%) is a hydrating alpha hydroxy acid peel formulated to smooth skin texture and enhance moisture retention while gently exfoliating damaged upper epidermal layers.",
    directions: "Apply evenly to cleansed skin. Leave on for 3 to 7 minutes depending on skin tolerance. Neutralize thoroughly.",
    relatedIds: ["glycolic-peel", "arginine-cocktail-peel", "dark-circle-peel"]
  },

  // 4. Salicylic Peel
  {
    id: "salicylic-peel",
    name: "Salicylic Peel",
    category: "peels",
    categoryLabel: "CHEMICAL PEEL",
    description: "A salicylic nanopeel described for mild-to-severe acne and skin-rejuvenation applications.",
    images: ["assests/cat-peels.png"],
    variants: ["Salicylic 10%", "Salicylic 20%", "Salicylic 30%"],
    overviewParagraph1: "Salicylic Peel is a lipid-soluble beta hydroxy acid (BHA) nanopeel listed in 10%, 20%, and 30% concentrations for comedonal acne, oily skin, and follicular congestion clearance.",
    directions: "Apply thinly over affected facial areas. Allow to self-neutralize or rinse after protocol duration per clinic instructions.",
    relatedIds: ["salicylic-mandelac-peel", "jessner-peel", "glycolic-peel"]
  },

  // 5. Jessner Peel
  {
    id: "jessner-peel",
    name: "Jessner Peel",
    category: "peels",
    categoryLabel: "CHEMICAL PEEL",
    description: "A peel that works by removing the top layers of skin to reveal smoother, more even-toned skin beneath.",
    images: ["assests/cat-peels.png"],
    overviewParagraph1: "Jessner Peel is a synergy combination peel of Salicylic Acid, Lactic Acid, and Resorcinol designed to exfoliate epidermal layers and improve tone uniformity.",
    directions: "Apply 1 to 3 layers with gauze until light frosting appears. Allow to dry between layers. Follow post-peel recovery care.",
    relatedIds: ["tca-peel", "salicylic-peel", "retinol-yellow-peel"]
  },

  // 6. Salicylic Mandelac Peel
  {
    id: "salicylic-mandelac-peel",
    name: "Salicylic Mandelac Peel",
    category: "peels",
    categoryLabel: "CHEMICAL PEEL",
    description: "A salicylic nanopeel described for mild-to-severe acne and skin-rejuvenation applications.",
    images: ["assests/cat-peels.png"],
    overviewParagraph1: "Salicylic Mandelac Peel combines Mandelic Acid (AHA) and Salicylic Acid (BHA) for gentle exfoliation on sensitive or hyperpigmentation-prone skin types.",
    directions: "Apply smoothly to clean skin. Monitor for 3 to 5 minutes before neutralizing.",
    relatedIds: ["salicylic-peel", "glycolic-peel", "arginine-cocktail-peel"]
  },

  // 7. Phenol 5% Peel
  {
    id: "phenol-5-percent-peel",
    name: "Phenol 5% Peel",
    category: "peels",
    categoryLabel: "CHEMICAL PEEL",
    description: "A deep peel described as penetrating further into the skin for substantial exfoliation.",
    images: ["assests/cat-peels.png"],
    overviewParagraph1: "Phenol 5% Peel is a specialized deep exfoliation formulation for deep wrinkles, severe photo-damage, and pronounced scar tissue reduction under professional supervision.",
    directions: "Strictly for clinical dermatological application under controlled conditions.",
    relatedIds: ["tca-peel", "jessner-peel", "retinol-yellow-peel"]
  },

  // 8. Dark Circle Peel
  {
    id: "dark-circle-peel",
    name: "Dark Circle Peel",
    category: "peels",
    categoryLabel: "CHEMICAL PEEL",
    description: "A chemical peel described for improving and smoothing skin texture by removing damaged upper layers.",
    images: ["assests/cat-peels.png"],
    overviewParagraph1: "Dark Circle Peel is a delicate peri-orbital chemical formulation designed to lighten infra-orbital hyperpigmentation and smooth fine periorbital lines.",
    directions: "Apply carefully to the infra-orbital region using a cotton swab. Avoid direct eye contact. Rinse thoroughly after 2 to 3 minutes.",
    relatedIds: ["arginine-cocktail-peel", "lactic-peel", "salicylic-mandelac-peel"]
  },

  // 9. Arginine Cocktail Peel
  {
    id: "arginine-cocktail-peel",
    name: "Arginine Cocktail Peel",
    category: "peels",
    categoryLabel: "CHEMICAL PEEL",
    description: "An arginine combination nanopeel formulated for under-eye dark circles, fine lines around the eyes and facial rejuvenation.",
    images: ["assests/cat-peels.png"],
    overviewParagraph1: "Arginine Cocktail Peel is a gentle amino-acid based nanopeel combining L-Arginine, Lactic Acid, and Allantoin for peri-ocular rejuvenation and sensitive facial skin brightening.",
    directions: "Apply gently to sensitive facial or eye-contour areas. Neutralize gently after protocol time.",
    relatedIds: ["dark-circle-peel", "lactic-peel", "salicylic-mandelac-peel"]
  },

  // 10. Retinol Yellow Peel
  {
    id: "retinol-yellow-peel",
    name: "Retinol Yellow Peel",
    category: "peels",
    categoryLabel: "CHEMICAL PEEL",
    description: "A retinol chemical peel described for exfoliating dead skin cells and improving skin texture.",
    images: ["assests/cat-peels.png"],
    overviewParagraph1: "Retinol Yellow Peel is a Vitamin A enriched leave-on chemical peel formulated to stimulate epidermal renewal, clear pore blockages, and smooth skin texture over 6-8 hours post-application.",
    directions: "Apply evenly to skin. Leave on skin for 6 to 8 hours as a professional leave-on peel before washing off thoroughly with water.",
    relatedIds: ["jessner-peel", "tca-peel", "glycolic-peel"]
  }
];
