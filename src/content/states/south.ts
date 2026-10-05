import type { State } from "../types";

const U = "2026-10-05";

// South (Census): South Atlantic, East South Central, West South Central, plus DC.
export const south: State[] = [
  {
    slug: "delaware", name: "Delaware", abbr: "DE", region: "South", status: "PUBLISHED",
    risks: ["hurricane", "wind", "snow"], neighbors: ["maryland", "pennsylvania", "new-jersey"],
    intro: "Delaware roofs cover a lot of ground in a small state: older homes and rowhouses in Wilmington, suburbs across New Castle County, and beach towns in Sussex County exposed to Atlantic storms. Nor'easters, tropical storm remnants and humid summers are the main stresses.",
    details: [
      { heading: "Beach-town wind and salt", body: "Rehoboth, Lewes, Bethany and the other shore towns face coastal storms and salt air. Wind-rated installation and corrosion-resistant metals extend roof life near the water." },
      { heading: "Suburban roofs reaching replacement", body: "Many New Castle County homes built in the 1950s through 1990s are on their second or third roof, where tear-off often reveals ventilation and decking issues." },
      { heading: "Winter freeze-thaw", body: "Northern Delaware sees enough snow and freeze-thaw to cause ice dams on poorly insulated homes." },
    ],
    rules: "Delaware requires contractors to hold a state business license. Building permits are issued by counties and municipalities, so confirm requirements locally.",
    faqs: [
      { q: "What should I check before hiring a roofer in Delaware?", a: "Confirm the contractor's Delaware business license, proof of insurance and who will obtain the building permit." },
      { q: "Do Delaware beach homes need special roofing?", a: "They benefit from high-wind installation, secure edges and corrosion-resistant flashing and fasteners." },
    ],
    updated: U,
  },
  {
    slug: "district-of-columbia", name: "Washington, D.C.", abbr: "DC", region: "South", status: "PUBLISHED",
    risks: ["wind", "rain", "snow"], neighbors: ["maryland", "virginia"],
    intro: "Washington, D.C. is a city of rowhouses, many with flat or low-slope roofs behind decorative fronts, plus detached homes in upper Northwest and across the river. Summer thunderstorms, heavy rain and occasional snowstorms are the main roofing stresses, and many neighborhoods are historic districts.",
    details: [
      { heading: "Rowhouse flat roofs", body: "Capitol Hill, Shaw, Columbia Heights and Petworth rowhouses usually have flat roofs shared along party walls. Membrane seams, parapet flashing and rear drainage are frequent leak sources." },
      { heading: "Historic districts", body: "Many D.C. neighborhoods are historic districts, where changes visible from the street can require review. Roof decks and visible materials are worth checking before planning work." },
      { heading: "Heavy summer storms", body: "Intense thunderstorms dump a lot of water quickly, overwhelming clogged drains and scuppers on flat roofs." },
    ],
    rules: "D.C. requires home improvement contractors to hold a license from the Department of Licensing and Consumer Protection. Building permits come from the Department of Buildings, and historic preservation review applies in historic districts.",
    faqs: [
      { q: "Do D.C. roofers need a license?", a: "Yes. Contractors doing home improvement work in D.C. need a Home Improvement Contractor license from the Department of Licensing and Consumer Protection." },
      { q: "Can I add a roof deck to my D.C. rowhouse?", a: "Often, but it needs permits and may need historic review. The roof membrane must be detailed around the deck supports to stay watertight." },
    ],
    updated: U,
  },
  {
    slug: "florida", name: "Florida", abbr: "FL", region: "South", status: "PUBLISHED",
    risks: ["hurricane", "wind", "heat", "rain"], neighbors: ["georgia", "alabama"],
    intro: "Florida has the strictest roofing environment in the country. Hurricanes, intense sun, heavy summer rain and an insurance market focused on roof age and condition shape every decision. Shingle, tile and metal roofs are all common, and Florida's building code sets detailed wind requirements.",
    details: [
      { heading: "Hurricane wind requirements", body: "The Florida Building Code sets wind design requirements statewide, with the strictest rules in the High-Velocity Hurricane Zone of Miami-Dade and Broward counties, where roofing products need specific approvals." },
      { heading: "Insurance and roof age", body: "Insurers closely examine roof age and condition, and a wind mitigation inspection documenting features such as roof-to-wall connections and secondary water barriers can lower premiums." },
      { heading: "Tile, metal and sun", body: "Concrete and clay tile is common in South and Central Florida; its underlayment usually wears out first. Intense UV ages shingles faster than in northern states." },
    ],
    rules: "Florida requires roofing contractors to be licensed as a certified or registered roofing contractor through the Department of Business and Professional Regulation. Re-roofs need permits from the local building department and follow the Florida Building Code.",
    faqs: [
      { q: "How do I verify a Florida roofing contractor?", a: "Look up the license on the DBPR website. Florida roofers must hold a certified or registered roofing contractor license." },
      { q: "What is a wind mitigation inspection?", a: "An inspection that documents your home's wind-resistant features, such as roof deck attachment and roof-to-wall connections. Insurers use it to apply premium discounts." },
    ],
    updated: U,
  },
  {
    slug: "georgia", name: "Georgia", abbr: "GA", region: "South", status: "PUBLISHED",
    risks: ["wind", "hail", "hurricane", "heat"], neighbors: ["florida", "alabama", "tennessee", "north-carolina", "south-carolina"],
    intro: "Georgia roofs see hot, humid summers, spring hail and severe thunderstorms around metro Atlanta, and hurricane exposure along Savannah and the coast. Atlanta's tree canopy means falling limbs are a frequent cause of roof damage, and algae streaks are common on shaded roofs.",
    details: [
      { heading: "Trees and storms in metro Atlanta", body: "Atlanta's heavy tree cover shades roofs and drops limbs in storms. Trimming branches back and clearing debris from valleys prevents much of the damage." },
      { heading: "Hail in the metro area", body: "Spring storms bring hail to Atlanta and north Georgia often enough that insurance-funded replacements are common." },
      { heading: "Coastal hurricanes", body: "Savannah, Brunswick and the Golden Isles face tropical storm winds and rain, where wind-rated installation and secure edges matter." },
    ],
    rules: "Georgia licenses residential and general contractors through the State Licensing Board for Residential and General Contractors; roofing-only work is generally handled at the local level, so check your city or county's business license and permit requirements.",
    faqs: [
      { q: "Do Georgia roofers need a license?", a: "Licensing for roofing-only contractors is mainly local. Check your city or county requirements, and ask for proof of insurance and a written contract." },
      { q: "Why do Atlanta roofs get black streaks?", a: "Algae thrives on shaded, humid roofs. Soft washing removes it, and algae-resistant shingles slow its return." },
    ],
    updated: U,
  },
  {
    slug: "maryland", name: "Maryland", abbr: "MD", region: "South", status: "PUBLISHED",
    risks: ["wind", "hurricane", "snow", "rain"], neighbors: ["pennsylvania", "delaware", "virginia", "west-virginia", "district-of-columbia"],
    intro: "Maryland roofs range from Baltimore rowhouses with flat roofs to suburban homes in Montgomery, Prince George's and Anne Arundel counties and waterfront houses along the Chesapeake Bay. Summer storms, tropical remnants, nor'easters and occasional heavy snow all play a role.",
    details: [
      { heading: "Baltimore rowhouses", body: "Flat and low-slope roofs on Baltimore rowhouses need sound membranes, working drains and good parapet flashing." },
      { heading: "Chesapeake Bay exposure", body: "Annapolis and other bayfront areas face wind, salt air and tropical storm remnants. Corrosion-resistant metals and wind-rated installation help." },
      { heading: "Suburban replacement cycle", body: "Many homes in the D.C. and Baltimore suburbs were built from the 1960s through the 1990s and are on their second or later roof." },
    ],
    rules: "Maryland requires home improvement contractors to be licensed by the Maryland Home Improvement Commission. Building permits come from the county or city, and some counties have additional requirements.",
    faqs: [
      { q: "How do I check a Maryland roofer's license?", a: "Search the Maryland Home Improvement Commission license lookup. Contractors doing residential home improvement work must hold an MHIC license." },
      { q: "What roof works best on a Baltimore rowhouse?", a: "Most use modified bitumen, EPDM or TPO membranes with properly flashed parapets and clear drainage." },
    ],
    updated: U,
  },
  {
    slug: "north-carolina", name: "North Carolina", abbr: "NC", region: "South", status: "PUBLISHED",
    risks: ["hurricane", "wind", "hail", "snow"], neighbors: ["virginia", "tennessee", "georgia", "south-carolina"],
    intro: "North Carolina stretches from the Outer Banks, one of the most hurricane-exposed coasts in the country, through the fast-growing Charlotte, Raleigh-Durham and Triad metros to the mountains, where snow and ice are real factors. Roofing needs shift with every region.",
    details: [
      { heading: "Coastal hurricanes", body: "The Outer Banks and coastal plain see hurricanes regularly, with storms such as Florence causing widespread wind and rain damage. Wind-rated installation and secure edges are essential near the coast." },
      { heading: "Piedmont storms and hail", body: "Charlotte, Raleigh and Greensboro see severe thunderstorms with wind and hail. Many suburban roofs from the 1990s and 2000s are due for replacement." },
      { heading: "Mountain snow and ice", body: "Asheville and the higher elevations see snow and ice that cause ice dams and stress gutters. Hurricane Helene in 2024 showed the mountains can also take severe wind and flood damage." },
    ],
    rules: "North Carolina does not have a separate roofing license; a general contractor license from the Licensing Board for General Contractors is required for projects at or above the state's dollar threshold. Permits come from the city or county.",
    faqs: [
      { q: "Do North Carolina roofers need a license?", a: "There's no roofing-specific license. A general contractor license is required above the state's project-value threshold, and local permits apply." },
      { q: "How should coastal North Carolina homes prepare for hurricanes?", a: "Have the roof inspected before the season, secure loose edges and flashing, and consider wind-rated shingles or metal at replacement." },
    ],
    updated: U,
  },
  {
    slug: "south-carolina", name: "South Carolina", abbr: "SC", region: "South", status: "PUBLISHED",
    risks: ["hurricane", "wind", "heat", "hail"], neighbors: ["north-carolina", "georgia"],
    intro: "South Carolina roofs face hurricanes along Charleston, Myrtle Beach and Hilton Head, hot and humid summers inland, and severe thunderstorms across Columbia and the Upstate. Fast growth around Greenville, Charleston and Myrtle Beach has added many newer homes with builder-grade roofs.",
    details: [
      { heading: "Coastal hurricanes", body: "The Lowcountry and Grand Strand see hurricanes and tropical storms. High-wind installation, secure ridge caps and corrosion-resistant metals matter near the coast." },
      { heading: "Heat and humidity", body: "Long, hot summers age shingles and drive attic temperatures up. Balanced ventilation and algae-resistant shingles help." },
      { heading: "Upstate storms", body: "Greenville and Spartanburg see severe storms with hail and wind." },
    ],
    rules: "South Carolina requires residential specialty contractors, including roofers, to be registered or licensed with the Residential Builders Commission for work above set dollar amounts. Permits come from the local building department.",
    faqs: [
      { q: "How do I check a South Carolina roofer?", a: "Look up the contractor with the South Carolina Residential Builders Commission, and confirm insurance." },
      { q: "When should Charleston homeowners inspect their roofs?", a: "Before hurricane season begins on June 1 and after any significant storm." },
    ],
    updated: U,
  },
  {
    slug: "virginia", name: "Virginia", abbr: "VA", region: "South", status: "PUBLISHED",
    risks: ["hurricane", "wind", "snow", "hail"], neighbors: ["maryland", "district-of-columbia", "west-virginia", "kentucky", "tennessee", "north-carolina"],
    intro: "Virginia roofs range from Hampton Roads homes exposed to hurricanes and nor'easters, to Northern Virginia suburbs and Richmond neighborhoods with older housing, to the Shenandoah Valley and southwest mountains with real winter weather.",
    details: [
      { heading: "Hampton Roads coastal storms", body: "Norfolk, Virginia Beach and the Eastern Shore face tropical storms and nor'easters. Wind-rated installation and corrosion-resistant metals are important near the water." },
      { heading: "Northern Virginia suburbs", body: "Many homes in Fairfax, Loudoun and Prince William counties were built from the 1970s through the 2000s and are on their second or third roof." },
      { heading: "Mountain winters", body: "Roanoke and western Virginia see snow and ice that cause ice dams on poorly insulated homes." },
    ],
    rules: "Virginia requires contractors to be licensed by the Department of Professional and Occupational Regulation's Board for Contractors, with roofing as a specialty classification. Permits come from the local building department.",
    faqs: [
      { q: "How do I verify a Virginia roofer?", a: "Look up the contractor's license on the DPOR website and confirm it includes the roofing specialty and the right license class for your job size." },
      { q: "Do Virginia roofs need ice barrier?", a: "In colder parts of the state where ice dams form, building codes require ice barrier at the eaves, and it's a good idea elsewhere." },
    ],
    updated: U,
  },
  {
    slug: "west-virginia", name: "West Virginia", abbr: "WV", region: "South", status: "PUBLISHED",
    risks: ["snow", "rain", "wind"], neighbors: ["pennsylvania", "maryland", "virginia", "kentucky", "ohio"],
    intro: "West Virginia's mountains mean steep lots, heavy rain, snow and ice. Older homes in Charleston, Huntington, Morgantown and small towns often have steep roofs, metal roofing and masonry chimneys, and freeze-thaw cycles are hard on flashing and gutters.",
    details: [
      { heading: "Snow and ice", body: "Winter weather in the mountains causes ice dams and snow-load concerns, especially on older homes with limited insulation." },
      { heading: "Heavy rain and runoff", body: "Steep terrain and intense storms send a lot of water across roofs and gutters. Valleys, flashing and drainage need to be in good condition." },
      { heading: "Metal roofing tradition", body: "Metal roofs are common on older homes and rural buildings, where they shed snow and rain well when maintained." },
    ],
    rules: "West Virginia requires contractors to be licensed by the Division of Labor for work above a set dollar amount. Permits depend on whether your city or county has adopted a building code.",
    faqs: [
      { q: "Do West Virginia roofers need a license?", a: "Yes, a West Virginia contractor license from the Division of Labor is required above the state's job-value threshold." },
      { q: "Is metal roofing a good choice in West Virginia?", a: "Often. It sheds snow and rain well and lasts a long time; make sure fasteners and seams are maintained." },
    ],
    updated: U,
  },
  {
    slug: "alabama", name: "Alabama", abbr: "AL", region: "South", status: "PUBLISHED",
    risks: ["hurricane", "wind", "hail", "heat"], neighbors: ["mississippi", "tennessee", "georgia", "florida"],
    intro: "Alabama roofs face hurricanes along Mobile and Baldwin counties, tornadoes and severe storms across Birmingham, Huntsville and Montgomery, and long, humid summers. Alabama has been a national leader in FORTIFIED roofs, a stronger construction standard for wind.",
    details: [
      { heading: "Gulf Coast hurricanes", body: "Mobile and Baldwin counties see hurricanes such as Ivan and Sally. FORTIFIED roofs, with sealed roof decks and enhanced nailing, are increasingly common there." },
      { heading: "Tornadoes and severe storms", body: "Central and northern Alabama sit in an active tornado and severe-storm area. Wind-rated installation and post-storm inspections limit damage." },
      { heading: "Heat and humidity", body: "Long summers age shingles and feed algae. Ventilation and algae-resistant shingles help roofs last." },
    ],
    rules: "Alabama requires residential roofers to be licensed by the Alabama Home Builders Licensure Board for jobs above a set amount. The Strengthen Alabama Homes program has offered grants toward FORTIFIED roofs, and state law requires insurers to offer discounts for them.",
    faqs: [
      { q: "What is a FORTIFIED roof in Alabama?", a: "A roof built to the IBHS FORTIFIED standard, with a sealed deck, stronger attachment and enhanced edges. Alabama insurers must offer discounts, and grants have been available through Strengthen Alabama Homes." },
      { q: "Do Alabama roofers need a license?", a: "Residential roofers working above the state threshold must be licensed by the Alabama Home Builders Licensure Board." },
    ],
    updated: U,
  },
  {
    slug: "kentucky", name: "Kentucky", abbr: "KY", region: "South", status: "PUBLISHED",
    risks: ["wind", "hail", "snow", "rain"], neighbors: ["ohio", "indiana", "illinois", "missouri", "tennessee", "virginia", "west-virginia"],
    intro: "Kentucky roofs see spring storms with hail and high wind, ice storms in winter and hot, humid summers. Louisville, Lexington and northern Kentucky's Cincinnati suburbs hold most of the state's housing, with plenty of older brick homes alongside newer subdivisions.",
    details: [
      { heading: "Severe storms and tornadoes", body: "Western and central Kentucky see tornadoes and severe storms, including the December 2021 tornado outbreak. Wind-rated installation and inspections after storms matter." },
      { heading: "Ice storms", body: "Winter ice storms load roofs and gutters and bring limbs down onto houses." },
      { heading: "Older brick homes", body: "Louisville's older neighborhoods have steep roofs, slate in places, and masonry chimneys that need careful flashing." },
    ],
    rules: "Kentucky does not license roofers statewide. Louisville and other cities set local licensing and permit requirements, so check with your local building department.",
    faqs: [
      { q: "Does Kentucky license roofers?", a: "Not at the state level. Check local requirements, and ask for proof of insurance and a written contract." },
      { q: "What should I do after an ice storm?", a: "From the ground, look for limbs on the roof, sagging gutters and missing shingles, then have the roof inspected once it's safe." },
    ],
    updated: U,
  },
  {
    slug: "mississippi", name: "Mississippi", abbr: "MS", region: "South", status: "PUBLISHED",
    risks: ["hurricane", "wind", "heat", "rain"], neighbors: ["louisiana", "arkansas", "tennessee", "alabama"],
    intro: "Mississippi roofs face hurricanes on the Gulf Coast, where Katrina's 2005 damage reshaped building practices, plus tornadoes and severe storms inland and long, humid summers. Jackson, Gulfport, Biloxi and the coastal counties account for much of the state's roofing demand.",
    details: [
      { heading: "Gulf Coast hurricanes", body: "Harrison, Hancock and Jackson counties face hurricane wind and surge. High-wind installation, sealed decks and strong edge details are worthwhile." },
      { heading: "Inland tornadoes", body: "Central and northern Mississippi see tornadoes and severe storms that strip shingles and drop trees." },
      { heading: "Heat, humidity and algae", body: "Hot, humid conditions age shingles and grow algae. Ventilation and algae-resistant shingles help." },
    ],
    rules: "Mississippi licenses residential contractors through the State Board of Contractors for work above set dollar amounts. Check the board's requirements for your project and confirm local permits.",
    faqs: [
      { q: "How do I verify a Mississippi roofer?", a: "Check the Mississippi State Board of Contractors' search for the contractor's license or registration, and confirm insurance." },
      { q: "What roofing holds up best on the Mississippi Gulf Coast?", a: "High-wind-rated shingles with enhanced nailing, FORTIFIED-style construction, or properly fastened metal roofing." },
    ],
    updated: U,
  },
  {
    slug: "tennessee", name: "Tennessee", abbr: "TN", region: "South", status: "PUBLISHED",
    risks: ["wind", "hail", "rain"], neighbors: ["kentucky", "virginia", "north-carolina", "georgia", "alabama", "mississippi", "arkansas", "missouri"],
    intro: "Tennessee roofs see tornadoes and severe storms, including the 2020 Nashville tornado, spring hail, heavy rain and hot summers. Nashville, Memphis, Knoxville and Chattanooga are growing fast, with many newer homes alongside older neighborhoods.",
    details: [
      { heading: "Tornadoes and wind", body: "Middle and West Tennessee are active severe-storm areas. Wind-rated installation and quick post-storm inspections reduce damage." },
      { heading: "Hail", body: "Spring hail damages roofs around Nashville and across the state, prompting many insurance-funded replacements." },
      { heading: "Rapid growth", body: "Newer subdivisions around Nashville and Knoxville have builder-grade roofs that benefit from inspection before warranties end." },
    ],
    rules: "Tennessee licenses contractors through the Board for Licensing Contractors for projects above set dollar amounts, and requires home improvement licensing in certain counties. Confirm requirements for your county and project size.",
    faqs: [
      { q: "Do Tennessee roofers need a license?", a: "It depends on project size and county. Check the Board for Licensing Contractors' requirements and your county's home improvement rules." },
      { q: "When is severe-weather season in Tennessee?", a: "Spring is the most active, but tornadoes and severe storms can occur in late fall and winter as well." },
    ],
    updated: U,
  },
  {
    slug: "arkansas", name: "Arkansas", abbr: "AR", region: "South", status: "PUBLISHED",
    risks: ["hail", "wind", "rain", "heat"], neighbors: ["missouri", "tennessee", "mississippi", "louisiana", "texas", "oklahoma"],
    intro: "Arkansas roofs see spring hail and tornadoes, heavy rain, ice storms and hot, humid summers. Little Rock and the fast-growing Northwest Arkansas cities of Fayetteville, Springdale, Rogers and Bentonville hold much of the state's newer housing.",
    details: [
      { heading: "Hail and severe storms", body: "Spring storms bring hail and damaging winds, especially in central and northwest Arkansas." },
      { heading: "Ice storms", body: "Winter ice storms load roofs and gutters and bring limbs down." },
      { heading: "Heat and humidity", body: "Long summers raise attic temperatures; balanced ventilation helps shingles last." },
    ],
    rules: "Arkansas licenses residential builders and home improvement contractors through the Arkansas Contractors Licensing Board for jobs above set dollar amounts. Confirm requirements for your project and local permits.",
    faqs: [
      { q: "How do I check an Arkansas roofer?", a: "Search the Arkansas Contractors Licensing Board for the contractor, and ask for proof of insurance." },
      { q: "Are Class 4 shingles worth it in Arkansas?", a: "In hail-prone areas, often yes. Ask your insurer about discounts." },
    ],
    updated: U,
  },
  {
    slug: "louisiana", name: "Louisiana", abbr: "LA", region: "South", status: "PUBLISHED",
    risks: ["hurricane", "wind", "rain", "heat"], neighbors: ["texas", "arkansas", "mississippi"],
    intro: "Louisiana roofs face some of the toughest hurricane exposure in the country, with Katrina, Laura and Ida all causing widespread roof damage. Heavy rain, heat and humidity add year-round stress, and the insurance market pays close attention to roof age and construction.",
    details: [
      { heading: "Hurricanes", body: "New Orleans, Lake Charles, Baton Rouge and coastal parishes face hurricane wind and rain. FORTIFIED construction, sealed roof decks and enhanced nailing improve resilience." },
      { heading: "Heavy rain", body: "Intense rainfall tests flashing, valleys and gutters. Drainage and flashing details matter as much as the shingles." },
      { heading: "Insurance pressure", body: "Insurers focus on roof age and condition, and Louisiana has offered grants for FORTIFIED roofs through its Fortify Homes Program." },
    ],
    rules: "Louisiana regulates residential contractors and home improvement work through the State Licensing Board for Contractors, with requirements based on job type and value. Confirm the contractor's registration or license and local permits.",
    faqs: [
      { q: "What is the Louisiana Fortify Homes Program?", a: "A state program that has offered grants toward roofs built to the IBHS FORTIFIED standard, which can also qualify for insurance discounts." },
      { q: "How do I verify a Louisiana roofer?", a: "Check the State Licensing Board for Contractors' search for the contractor's license or home improvement registration." },
    ],
    updated: U,
  },
  {
    slug: "oklahoma", name: "Oklahoma", abbr: "OK", region: "South", status: "PUBLISHED",
    risks: ["hail", "wind", "heat", "snow"], neighbors: ["kansas", "missouri", "arkansas", "texas", "new-mexico", "colorado"],
    intro: "Oklahoma is in the center of Tornado Alley and among the most hail-prone states. Oklahoma City, Tulsa, Norman and Edmond see frequent hail and high winds, and roof replacements after storms are routine. Ice storms and hot summers add wear.",
    details: [
      { heading: "Hail", body: "Large hail regularly damages roofs. Class 4 impact-resistant shingles are a popular upgrade, and many insurers offer discounts for them." },
      { heading: "Tornadoes and wind", body: "Severe storms bring damaging winds. Correct nailing, starter strips and secure ridge caps help roofs hold." },
      { heading: "Storm-chasing contractors", body: "Out-of-state crews arrive after big storms; Oklahoma's roofing registration helps homeowners verify contractors." },
    ],
    rules: "Oklahoma requires roofing contractors to register with the Construction Industries Board under the Roofing Contractor Registration Act. Cities issue building permits.",
    faqs: [
      { q: "How do I verify an Oklahoma roofer?", a: "Look up the contractor's roofing registration with the Oklahoma Construction Industries Board, and confirm insurance." },
      { q: "Do impact-resistant shingles lower insurance in Oklahoma?", a: "Many insurers offer discounts for Class 4 roofs. Ask your agent for the amount before choosing." },
    ],
    updated: U,
  },
  {
    slug: "texas", name: "Texas", abbr: "TX", region: "South", status: "PUBLISHED",
    risks: ["hail", "hurricane", "wind", "heat"], neighbors: ["oklahoma", "arkansas", "louisiana", "new-mexico"],
    intro: "Texas leads the country in hail claims and also faces hurricanes along the Gulf Coast. Dallas-Fort Worth, San Antonio and Austin see frequent spring hail; Houston and the coast deal with tropical storms and hurricanes; and long, hot summers age shingles everywhere. City pages cover Greater Houston, Dallas, Fort Worth, San Antonio and Austin.",
    details: [
      { heading: "Hail in North and Central Texas", body: "Dallas-Fort Worth is one of the most hail-damaged metros in the country, and San Antonio and Austin see frequent hail too. Many owners choose Class 4 shingles, and Texas insurers offer discounts for impact-resistant roofs." },
      { heading: "Gulf Coast hurricanes and windstorm rules", body: "Galveston, Brazoria, Chambers and other coastal counties, plus part of Harris County east of State Highway 146, are in the state's designated windstorm area, where roofing work is inspected for Texas Windstorm Insurance Association eligibility." },
      { heading: "Heat", body: "Long, hot summers drive attic temperatures well above outdoor air, so shingles often last 15 to 20 years rather than the figure on the package. Ventilation and reflective shingles help." },
    ],
    rules: "Texas does not license roofing contractors at the state level. State law prohibits contractors from paying or waiving an insurance deductible, and roofers can't act as your public adjuster. Cities set their own permit rules, and much of the state is unincorporated county land governed by HOAs.",
    faqs: [
      { q: "Does Texas license roofers?", a: "No. Ask for a certificate of liability insurance, a local address, references and any manufacturer or Roofing Contractors Association of Texas certification." },
      { q: "Which Texas homes need a windstorm inspection?", a: "Homes in the designated catastrophe area, including Galveston, Brazoria and Chambers counties and part of Harris County east of State Highway 146, if they want TWIA coverage." },
    ],
    updated: U,
  },
];
