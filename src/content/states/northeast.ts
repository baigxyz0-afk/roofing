import type { State } from "../types";

const U = "2026-10-05";

// Northeast: New England + Mid-Atlantic (Census). Facts kept to what we can stand behind; agencies named for verification.
export const northeast: State[] = [
  {
    slug: "connecticut", name: "Connecticut", abbr: "CT", region: "Northeast", status: "PUBLISHED",
    risks: ["snow", "hurricane", "wind"], neighbors: ["new-york", "massachusetts", "rhode-island"],
    intro: "Connecticut roofs deal with New England winters on one side and coastal storms on the other. Colonials, Capes and older multifamily homes from Hartford to New Haven and Fairfield County often carry steep roofs, masonry chimneys and decades of layered repairs, while shoreline homes face nor'easters and the occasional tropical storm.",
    details: [
      { heading: "Ice dams on older Capes and Colonials", body: "Finished half-story rooms in Cape Cods leak heat into short roof sections, a classic setup for ice dams. Air sealing, insulation and an eave ice barrier at the next re-roof are the usual fixes." },
      { heading: "Shoreline wind and storm surge exposure", body: "Towns along Long Island Sound took heavy damage in storms such as Irene and Sandy. Shoreline roofs benefit from high-wind shingle installation, secure ridge caps and corrosion-resistant flashing." },
      { heading: "Masonry chimneys", body: "Brick chimneys on older homes need counterflashing set into mortar joints, and freeze-thaw cycles crack crowns and mortar. Chimney flashing is one of the most common leak sources in the state." },
    ],
    rules: "Connecticut requires home improvement contractors, including roofers working on existing homes, to register with the Department of Consumer Protection. Building permits are issued by each town's building official.",
    faqs: [
      { q: "Do roofers need to be registered in Connecticut?", a: "Yes. Contractors doing residential home improvement work, including re-roofing, must hold a Home Improvement Contractor registration from the Department of Consumer Protection. You can look it up online before hiring." },
      { q: "When is the best time to re-roof in Connecticut?", a: "Late spring through early fall, when shingles seal properly in warm weather. Winter installs are possible but slower and need care with sealing." },
    ],
    updated: U,
  },
  {
    slug: "maine", name: "Maine", abbr: "ME", region: "Northeast", status: "PUBLISHED",
    risks: ["snow", "wind", "rain"], neighbors: ["new-hampshire"],
    intro: "Maine has long, snowy winters, a rugged coast exposed to nor'easters, and a housing stock full of older farmhouses, Capes and connected barns. Snow load, ice dams and salt air shape most roofing decisions, and metal roofing is common in rural and northern areas because it sheds snow.",
    details: [
      { heading: "Heavy snow and ice dams", body: "Deep snowpack on low-slope sections and complex rooflines leads to ice dams and, in heavy winters, structural stress. Roof rakes from the ground, steam removal for dams, and attic air sealing are standard winter advice." },
      { heading: "Coastal salt and wind", body: "Homes from Kittery to Down East face salt spray and strong storm winds. Corrosion-resistant fasteners and flashing, and careful edge detailing, extend roof life near the water." },
      { heading: "Metal roofs on rural homes", body: "Standing seam metal is popular across rural Maine because it sheds snow and lasts decades. Snow guards protect entries and decks from sliding snow." },
    ],
    rules: "Maine does not license roofing contractors at the state level. Larger home construction and repair contracts must be in writing under Maine's Home Construction Contracts Act. Permits are handled by the local code enforcement officer.",
    faqs: [
      { q: "Is a metal roof a good choice in Maine?", a: "Often. Metal sheds snow, resists wind and lasts a long time. Plan snow guards over doors and walkways, and make sure ventilation and insulation are handled to limit condensation." },
      { q: "How do I prevent ice dams in Maine?", a: "Stop heat from reaching the roof deck: air-seal and insulate the attic, keep soffit vents clear, and install an ice barrier at the eaves when you re-roof." },
    ],
    updated: U,
  },
  {
    slug: "massachusetts", name: "Massachusetts", abbr: "MA", region: "Northeast", status: "PUBLISHED",
    risks: ["snow", "hurricane", "wind"], neighbors: ["new-hampshire", "vermont", "new-york", "connecticut", "rhode-island"],
    intro: "Massachusetts roofs range from triple-deckers and Victorians in Boston, Worcester and Springfield to Capes and Colonials across the suburbs and shingled homes on the Cape and Islands. Snow, ice dams and nor'easters drive most repair calls, and many older homes have low-slope roofs or multiple layers of past re-roofs.",
    details: [
      { heading: "Triple-deckers and flat roofs", body: "Worcester, Somerville, Dorchester and other older urban neighborhoods have triple-deckers with low-slope or flat roofs that need membranes, good drainage and careful flashing at parapets." },
      { heading: "Ice dams", body: "Winters with repeated snow and thaw cycles produce widespread ice dams, especially on older homes with little attic insulation. Eave ice barrier and air sealing are the core fixes." },
      { heading: "Coastal exposure", body: "Cape Cod, the Islands and the North and South Shores face nor'easters and occasional hurricanes. Wind-rated installation and corrosion-resistant metals matter near the water." },
    ],
    rules: "Massachusetts requires a Construction Supervisor License for many structural projects and Home Improvement Contractor registration for residential work on existing owner-occupied homes. Roofing permits come from the local building department.",
    faqs: [
      { q: "What should I check before hiring a roofer in Massachusetts?", a: "Look up the contractor's Home Improvement Contractor registration and, where required, Construction Supervisor License, and confirm who will pull the building permit." },
      { q: "Do triple-deckers need special roofing?", a: "Their flat or low-slope roofs need membrane systems such as EPDM, TPO or modified bitumen, with clear drainage and properly flashed parapets." },
    ],
    updated: U,
  },
  {
    slug: "new-hampshire", name: "New Hampshire", abbr: "NH", region: "Northeast", status: "PUBLISHED",
    risks: ["snow", "wind"], neighbors: ["maine", "vermont", "massachusetts"],
    intro: "New Hampshire roofs carry real snow loads, especially in the Lakes Region and White Mountains, and southern cities such as Manchester and Nashua see repeated freeze-thaw cycles. Older mill-town housing, farmhouses and newer subdivisions all share the same winter priorities: shedding snow and preventing ice dams.",
    details: [
      { heading: "Snow load in the mountains", body: "Higher elevations collect heavy snow that stresses roof framing and slides off metal roofs. Ventilation, snow guards and periodic snow removal from the ground keep loads manageable." },
      { heading: "Ice dams in older homes", body: "Uninsulated attics in older homes melt snow from below. Air sealing, insulation and an eave ice barrier are the reliable fixes." },
      { heading: "Short installation season", body: "Shingles need warm weather to seal, so most re-roofs are scheduled from late spring to fall, and demand stacks up after storm seasons." },
    ],
    rules: "New Hampshire does not license roofing contractors statewide. Building permits and inspections are handled by each town or city, and some towns have no building department, so ask the contractor how code compliance is handled.",
    faqs: [
      { q: "Does New Hampshire license roofers?", a: "No state license exists for roofers. Ask for proof of liability and workers' compensation insurance, references, and a written contract." },
      { q: "Should I add snow guards to my roof?", a: "On metal roofs, and anywhere sliding snow could hit doors, decks, walkways or gutters, snow guards are a sensible addition." },
    ],
    updated: U,
  },
  {
    slug: "rhode-island", name: "Rhode Island", abbr: "RI", region: "Northeast", status: "PUBLISHED",
    risks: ["hurricane", "snow", "wind"], neighbors: ["connecticut", "massachusetts"],
    intro: "Rhode Island's roofs face Narragansett Bay and the open Atlantic. Providence and its neighbors are full of older multifamily homes and Victorians, while coastal towns from Westerly to Newport deal with salt air, nor'easters and a long history of hurricanes, including the 1938 storm and Hurricane Bob.",
    details: [
      { heading: "Coastal wind and salt", body: "Shoreline homes need wind-rated installation, secure edges and corrosion-resistant flashing and fasteners. Salt air shortens the life of plain steel components." },
      { heading: "Older multifamily roofs", body: "Providence, Pawtucket and Cranston have many two- and three-family homes with low-slope sections and aging flashing at dormers and chimneys." },
      { heading: "Winter freeze-thaw", body: "Snow and freeze-thaw cycles lead to ice dams on poorly insulated older homes, especially on north-facing eaves." },
    ],
    rules: "Rhode Island requires residential contractors to register with the Contractors' Registration and Licensing Board. Building permits are issued by each municipality.",
    faqs: [
      { q: "How can I check a Rhode Island roofer?", a: "Search the Contractors' Registration and Licensing Board's registration lookup, and ask for proof of insurance." },
      { q: "What roofing holds up best on the Rhode Island coast?", a: "High-wind-rated shingles installed with enhanced nailing, or standing seam metal with coastal-rated finishes, plus stainless or corrosion-resistant fasteners." },
    ],
    updated: U,
  },
  {
    slug: "vermont", name: "Vermont", abbr: "VT", region: "Northeast", status: "PUBLISHED",
    risks: ["snow", "rain"], neighbors: ["new-hampshire", "massachusetts", "new-york"],
    intro: "Vermont's roofs carry heavy snow for months, and many homes are older farmhouses, Capes and converted barns with complex rooflines. Metal roofing is a regional tradition because it sheds snow, and summer storms, including the 2023 floods, have shown how much water a roof and its drainage must handle.",
    details: [
      { heading: "Snow shedding", body: "Steep metal roofs are common for good reason. Snow guards above entries and careful placement of chimneys and vents keep sliding snow from causing damage." },
      { heading: "Ice dams on older homes", body: "Old farmhouses with little insulation lose heat to the roof deck. Air sealing and insulation upgrades prevent most ice-dam leaks." },
      { heading: "Heavy rain and drainage", body: "Intense summer storms test gutters, valleys and flashing. Clear drainage paths and properly sized gutters reduce overflow and fascia rot." },
    ],
    rules: "Vermont requires residential contractors doing work above a set contract value to register with the Office of Professional Regulation. Check the registry and confirm local permit requirements with your town.",
    faqs: [
      { q: "Do Vermont roofers need to register?", a: "Residential contractors above the state's contract threshold must register with the Office of Professional Regulation. Search the registry before hiring." },
      { q: "Why are metal roofs so common in Vermont?", a: "They shed heavy snow, resist ice dams and last for decades, which suits Vermont winters and rural buildings." },
    ],
    updated: U,
  },
  {
    slug: "new-jersey", name: "New Jersey", abbr: "NJ", region: "Northeast", status: "PUBLISHED",
    risks: ["hurricane", "snow", "wind"], neighbors: ["new-york", "pennsylvania", "delaware"],
    intro: "New Jersey packs dense older suburbs, Shore towns and fast-growing developments into a small state. North Jersey Colonials and split-levels, Shore homes raised after Superstorm Sandy, and twins and rowhomes in older cities all have different roofing needs, from nor'easter wind to ice dams and salt air.",
    details: [
      { heading: "Shore wind and salt", body: "Barrier-island and bayfront homes face coastal storms and salt corrosion. Wind-rated installation, secure edges and corrosion-resistant metals are standard near the water." },
      { heading: "Suburban roofs reaching replacement", body: "Many 1950s through 1980s suburban homes in Bergen, Middlesex, Monmouth and Morris counties are on their second or third roof, often with ventilation and decking problems to address at tear-off." },
      { heading: "Winter ice dams", body: "Snowy winters bring ice dams to homes with warm attics. Ice barrier along the eaves and attic air sealing are the main defenses." },
    ],
    rules: "New Jersey requires home improvement contractors to register with the Division of Consumer Affairs, and home improvement contracts over a set amount must be in writing. Construction permits are issued by the municipal construction official.",
    faqs: [
      { q: "How do I verify a New Jersey roofer?", a: "Check the contractor's Home Improvement Contractor registration with the Division of Consumer Affairs and ask for proof of liability insurance." },
      { q: "Do I need a permit to re-roof in New Jersey?", a: "Permit rules come from the Uniform Construction Code and your municipal construction office. Ask the contractor to confirm and handle any required permit." },
    ],
    updated: U,
  },
  {
    slug: "new-york", name: "New York", abbr: "NY", region: "Northeast", status: "PUBLISHED",
    risks: ["snow", "hurricane", "wind"], neighbors: ["new-jersey", "pennsylvania", "connecticut", "massachusetts", "vermont"],
    intro: "New York spans Long Island's coastal exposure, New York City's flat-roofed rowhouses and walk-ups, and upstate cities such as Buffalo, Rochester, Syracuse and Albany where lake-effect snow and long winters drive ice dams and snow-load concerns. Roofing needs change dramatically from one part of the state to the next.",
    details: [
      { heading: "Lake-effect snow upstate", body: "Areas downwind of Lakes Erie and Ontario can get several feet of snow in a single storm. Snow load, ice dams and attic ventilation are central concerns for roofs from Buffalo to Syracuse." },
      { heading: "Flat roofs in the city", body: "Brownstones, rowhouses and small multifamily buildings in the five boroughs often have flat roofs that need membranes, parapet flashing and working drains." },
      { heading: "Long Island coastal storms", body: "Long Island homes face nor'easters and hurricanes, as Sandy showed. Wind-rated installation and attention to edges and flashing matter near the shore." },
    ],
    rules: "New York State does not license roofers statewide, but New York City requires a Home Improvement Contractor license from the Department of Consumer and Worker Protection, and several counties, including Nassau, Suffolk and Westchester, have their own licensing. Building permits come from the local municipality.",
    faqs: [
      { q: "Do roofers need a license in New York?", a: "Not at the state level, but New York City and several counties, including Nassau, Suffolk and Westchester, require home improvement licenses. Check the rules where you live." },
      { q: "How should I protect my roof from lake-effect snow?", a: "Keep attic heat off the roof deck, clear snow from the lower roof with a roof rake from the ground, and have ice dams removed with steam rather than tools." },
    ],
    updated: U,
  },
  {
    slug: "pennsylvania", name: "Pennsylvania", abbr: "PA", region: "Northeast", status: "PUBLISHED",
    risks: ["snow", "wind", "rain"], neighbors: ["new-york", "new-jersey", "delaware", "maryland", "west-virginia", "ohio"],
    intro: "Pennsylvania's roofs include Philadelphia rowhouses with flat roofs, Pittsburgh's steep hillside homes, slate roofs on older houses across the state, and suburban homes from the postwar decades onward. Freeze-thaw winters, heavy rain and occasional remnants of tropical storms are the main stresses.",
    details: [
      { heading: "Rowhouse flat roofs", body: "Philadelphia and other older cities have blocks of rowhouses with flat or low-slope roofs that share party walls. Seams, parapets and drainage at the rear are frequent leak points." },
      { heading: "Slate roofs", body: "Pennsylvania has a long slate history, and many older homes still have slate. Slate can last a century, but flashing, broken slates and fasteners need repair by roofers experienced with it." },
      { heading: "Freeze-thaw and ice dams", body: "Winter cycles across the state cause ice dams, cracked chimney mortar and lifted flashing, especially on older homes with limited insulation." },
    ],
    rules: "Pennsylvania requires home improvement contractors to register with the Attorney General's office under the Home Improvement Consumer Protection Act. Permits follow the Uniform Construction Code as administered locally; Philadelphia and Pittsburgh have their own licensing and permit offices.",
    faqs: [
      { q: "How do I check a Pennsylvania roofer?", a: "Look up the contractor's Home Improvement Contractor registration number with the Attorney General's office, and confirm insurance." },
      { q: "Can a slate roof be repaired instead of replaced?", a: "Often, yes. Slate is long-lived; broken slates, flashing and fasteners can be repaired by a roofer experienced with slate." },
    ],
    updated: U,
  },
];
