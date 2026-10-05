import type { State } from "../types";

const U = "2026-10-05";

// Midwest (Census): East North Central + West North Central.
export const midwest: State[] = [
  {
    slug: "illinois", name: "Illinois", abbr: "IL", region: "Midwest", status: "PUBLISHED",
    risks: ["snow", "hail", "wind"], neighbors: ["wisconsin", "indiana", "iowa", "missouri", "kentucky"],
    intro: "Illinois roofs handle Chicago-area snow and lake wind, central Illinois hail and tornado-season storms, and hot, humid summers. Chicago bungalows, two-flats and suburban homes from every decade make up most of the residential roofing in the state.",
    details: [
      { heading: "Chicago bungalows and two-flats", body: "Brick bungalows often have hip roofs with dormers, and two-flats frequently have flat rear sections. Dormer flashing, chimneys and flat-roof seams are common leak points." },
      { heading: "Spring hail and severe storms", body: "Central and northern Illinois see hail and damaging straight-line winds from spring and summer storms. Inspections after major storms catch damage before it leaks." },
      { heading: "Winter ice dams", body: "Freeze-thaw winters, especially in the Chicago area, produce ice dams on homes with warm attics. Ice barrier and attic air sealing prevent most leaks." },
    ],
    rules: "Illinois licenses roofing contractors through the Department of Financial and Professional Regulation under the Roofing Industry Licensing Act. Chicago and many municipalities also issue their own permits.",
    faqs: [
      { q: "Do roofers need a state license in Illinois?", a: "Yes. Roofing contractors must be licensed by the Illinois Department of Financial and Professional Regulation. You can verify a license online." },
      { q: "What causes most roof leaks in Chicago homes?", a: "Flashing at dormers and chimneys, flat-roof seams on rear additions, and ice dams in winter are the most common sources." },
    ],
    updated: U,
  },
  {
    slug: "indiana", name: "Indiana", abbr: "IN", region: "Midwest", status: "PUBLISHED",
    risks: ["wind", "hail", "snow"], neighbors: ["illinois", "michigan", "ohio", "kentucky"],
    intro: "Indiana roofs see tornado-season winds, spring hail, lake-effect snow near Lake Michigan and hot, humid summers. Indianapolis suburbs, older industrial cities such as Fort Wayne, South Bend and Gary, and small towns all deal with the same mix of storm and freeze-thaw wear.",
    details: [
      { heading: "Severe spring storms", body: "Straight-line winds and tornado-related storms tear off shingles and drop trees across the state each spring. Wind-rated installation and prompt post-storm inspection limit damage." },
      { heading: "Lake-effect snow in the north", body: "Northwest Indiana near Lake Michigan gets lake-effect snow, raising ice-dam and snow-load concerns for homes from Gary to South Bend." },
      { heading: "Suburban roofs aging out", body: "Fast-growing suburbs around Indianapolis built many homes in the 1990s and 2000s whose original roofs are reaching the end of their life." },
    ],
    rules: "Indiana does not license roofing contractors at the state level. Some cities and counties, including Indianapolis, require contractor licensing or registration and building permits, so check locally.",
    faqs: [
      { q: "Does Indiana require roofers to be licensed?", a: "Not statewide, but some local governments do. Ask for local licensing where required, proof of insurance and a written contract." },
      { q: "How often should Indiana roofs be inspected?", a: "Yearly and after major storms, ideally in spring before severe-weather season and in fall before winter." },
    ],
    updated: U,
  },
  {
    slug: "michigan", name: "Michigan", abbr: "MI", region: "Midwest", status: "PUBLISHED",
    risks: ["snow", "wind", "hail"], neighbors: ["ohio", "indiana", "wisconsin"],
    intro: "Michigan roofs carry lake-effect snow along the west side of the Lower Peninsula and across the Upper Peninsula, plus freeze-thaw winters in Detroit, Grand Rapids and Lansing. Older homes with limited insulation make ice dams one of the most common winter roofing problems in the state.",
    details: [
      { heading: "Lake-effect snow", body: "Western Michigan and the U.P. can see very heavy snowfall. Snow load and ice dams require good attic insulation, ventilation and an eave ice barrier." },
      { heading: "Older housing in Detroit and other cities", body: "Pre-war homes often have multiple shingle layers, plank decking and masonry chimneys, which a full tear-off exposes for repair." },
      { heading: "Summer storms", body: "Severe thunderstorms bring wind and hail damage, particularly in southern Michigan." },
    ],
    rules: "Michigan requires a residential builder or maintenance and alteration contractor license, issued by the Department of Licensing and Regulatory Affairs, for residential roofing work above a small dollar amount. Permits come from the local building department.",
    faqs: [
      { q: "Do roofers need a license in Michigan?", a: "Yes. Residential roofing contractors need a residential builder or maintenance and alteration license from LARA. You can verify it online." },
      { q: "How do I stop ice dams in Michigan?", a: "Air-seal and insulate the attic so heat doesn't reach the roof deck, keep ventilation clear, and install an ice barrier at the eaves when re-roofing." },
    ],
    updated: U,
  },
  {
    slug: "ohio", name: "Ohio", abbr: "OH", region: "Midwest", status: "PUBLISHED",
    risks: ["snow", "wind", "hail"], neighbors: ["michigan", "indiana", "kentucky", "west-virginia", "pennsylvania"],
    intro: "Ohio roofs see lake-effect snow in the northeast around Cleveland, freeze-thaw winters statewide, and spring and summer storms with wind and hail across Columbus, Cincinnati and Dayton. Much of the housing in older cities predates modern insulation, which makes ice dams common.",
    details: [
      { heading: "Snow belt in the northeast", body: "Areas east of Cleveland get some of the heaviest lake-effect snow in the Midwest. Ice dams and snow load are routine winter roofing issues there." },
      { heading: "Severe storms", body: "Spring and summer thunderstorms bring damaging wind and hail, especially in western and central Ohio." },
      { heading: "Older urban homes", body: "Cleveland, Cincinnati, Toledo and Akron have many pre-war homes with steep roofs, slate or multiple shingle layers, and masonry chimneys that need flashing work." },
    ],
    rules: "Ohio does not license residential roofers at the state level. Many cities require contractor registration and building permits, so confirm requirements with your city or county building department.",
    faqs: [
      { q: "Does Ohio license roofing contractors?", a: "No state license exists for residential roofers, but many cities require registration. Ask for local registration, insurance and a written contract." },
      { q: "Should I worry about ice dams in Ohio?", a: "Yes, especially in northeast Ohio's snow belt. Attic insulation, air sealing and an eave ice barrier are the best prevention." },
    ],
    updated: U,
  },
  {
    slug: "wisconsin", name: "Wisconsin", abbr: "WI", region: "Midwest", status: "PUBLISHED",
    risks: ["snow", "hail", "wind"], neighbors: ["minnesota", "michigan", "illinois", "iowa"],
    intro: "Wisconsin roofs face long, cold winters with deep snow, plus summer hail and wind. Milwaukee bungalows and duplexes, Madison's mix of older and newer homes, and rural farm buildings all need roofs built for ice dams and snow load.",
    details: [
      { heading: "Ice dams and snow load", body: "Cold winters with snow cover lasting for weeks make ice dams a top concern. Air sealing, insulation and eave ice barrier prevent most of them." },
      { heading: "Hail and summer storms", body: "Summer storms bring hail and straight-line winds, damaging shingles and metal farm roofs." },
      { heading: "Older city housing", body: "Milwaukee duplexes and bungalows often have dormers and chimneys that require careful flashing during re-roofs." },
    ],
    rules: "Wisconsin requires contractors who obtain building permits for one- and two-family dwellings to hold a Dwelling Contractor credential from the Department of Safety and Professional Services. Permits come from the local municipality.",
    faqs: [
      { q: "What credential should a Wisconsin roofer have?", a: "A Dwelling Contractor credential from the Department of Safety and Professional Services is required for contractors pulling permits on one- and two-family homes." },
      { q: "When should I re-roof in Wisconsin?", a: "Late spring through early fall, when temperatures let shingles seal properly." },
    ],
    updated: U,
  },
  {
    slug: "iowa", name: "Iowa", abbr: "IA", region: "Midwest", status: "PUBLISHED",
    risks: ["hail", "wind", "snow"], neighbors: ["minnesota", "wisconsin", "illinois", "missouri", "nebraska", "south-dakota"],
    intro: "Iowa sits in a busy corridor for hail and severe wind. The August 2020 derecho flattened trees and roofs across Cedar Rapids and central Iowa, and spring hail regularly prompts roof replacements from Des Moines to Sioux City. Cold winters add ice-dam risk.",
    details: [
      { heading: "Derechos and straight-line winds", body: "The 2020 derecho showed how much damage straight-line winds can do. Wind-rated shingles with enhanced nailing and secure edges help roofs hold up." },
      { heading: "Hail claims", body: "Hail is a frequent cause of roof replacement in Iowa. Class 4 impact-resistant shingles are worth considering at replacement time." },
      { heading: "Cold winters", body: "Snow and freeze-thaw cycles cause ice dams on homes with warm attics, especially older homes in Iowa's river towns." },
    ],
    rules: "Iowa requires contractors to register with the Iowa Division of Labor. Building permits are issued by cities and some counties; requirements vary by location.",
    faqs: [
      { q: "Do Iowa roofers need to be registered?", a: "Yes. Contractors must register with the Iowa Division of Labor. Ask for the registration number and proof of insurance." },
      { q: "Are impact-resistant shingles worth it in Iowa?", a: "Often, given how frequently hail hits the state. Ask your insurer about available discounts." },
    ],
    updated: U,
  },
  {
    slug: "kansas", name: "Kansas", abbr: "KS", region: "Midwest", status: "PUBLISHED",
    risks: ["hail", "wind", "snow"], neighbors: ["nebraska", "missouri", "oklahoma", "colorado"],
    intro: "Kansas is in the heart of Hail Alley and Tornado Alley. Wichita, Topeka and the Kansas City suburbs see frequent hail and high winds, and roof replacements after storms are a regular part of homeownership. Hot summers and cold, windy winters add stress.",
    details: [
      { heading: "Frequent hail", body: "Large hail regularly damages roofs across the state. Class 4 impact-resistant shingles and post-storm inspections are common practice." },
      { heading: "High winds", body: "Open terrain lets wind gather speed, lifting shingle edges and ridge caps. Correct nailing and starter strips matter." },
      { heading: "Storm-chasing contractors", body: "After big storms, out-of-state crews arrive. Kansas requires roofing contractor registration, which helps homeowners verify who they're hiring." },
    ],
    rules: "Kansas requires residential roofing contractors to register with the Attorney General's office under the Kansas Roofing Registration Act. Some cities and counties, such as in the Kansas City metro, add local licensing and permits.",
    faqs: [
      { q: "How do I verify a roofer in Kansas?", a: "Check the contractor's registration with the Kansas Attorney General's roofing registration, and confirm any local license and insurance." },
      { q: "Should I upgrade to Class 4 shingles in Kansas?", a: "Often yes. Hail is frequent, and many insurers offer discounts for impact-resistant roofs." },
    ],
    updated: U,
  },
  {
    slug: "minnesota", name: "Minnesota", abbr: "MN", region: "Midwest", status: "PUBLISHED",
    risks: ["snow", "hail", "wind"], neighbors: ["north-dakota", "south-dakota", "iowa", "wisconsin"],
    intro: "Minnesota roofs face long, very cold winters with persistent snow cover, plus summer hail that regularly hits the Twin Cities metro. Ice dams are a defining Minnesota roofing problem, and hail claims drive many replacements.",
    details: [
      { heading: "Ice dams", body: "Long cold spells with snow on the roof make ice dams common, especially on 1.5-story homes and older houses with little insulation. Air sealing and insulation are the lasting fix." },
      { heading: "Twin Cities hail", body: "Summer hailstorms frequently cross Minneapolis, Saint Paul and their suburbs. Impact-resistant shingles and prompt inspections are worthwhile." },
      { heading: "Short installation window", body: "Most re-roofing happens from spring to fall, when shingles can seal properly." },
    ],
    rules: "Minnesota requires residential roofers to be licensed by the Department of Labor and Industry, and state law prohibits contractors from offering to pay or rebate an insurance deductible. Permits come from the local building official.",
    faqs: [
      { q: "Do roofers need a license in Minnesota?", a: "Yes. Residential roofers must be licensed by the Department of Labor and Industry. Look up the license before hiring." },
      { q: "Can a Minnesota roofer cover my deductible?", a: "No. Minnesota law prohibits contractors from paying or rebating insurance deductibles." },
    ],
    updated: U,
  },
  {
    slug: "missouri", name: "Missouri", abbr: "MO", region: "Midwest", status: "PUBLISHED",
    risks: ["hail", "wind", "snow"], neighbors: ["iowa", "illinois", "kentucky", "tennessee", "arkansas", "oklahoma", "kansas", "nebraska"],
    intro: "Missouri roofs see spring hail and tornado-season winds, hot and humid summers and variable winters with ice storms. Kansas City, St. Louis and Springfield all have older housing alongside newer suburbs, and storm damage drives many roof replacements.",
    details: [
      { heading: "Severe spring storms", body: "Hail and high winds are frequent from March through June. Inspections after major storms catch damage before leaks start." },
      { heading: "Ice storms", body: "Winter ice storms load roofs and gutters and bring down limbs onto houses. Tree trimming near roofs reduces risk." },
      { heading: "Older brick homes in St. Louis", body: "Many St. Louis homes are brick with steep roofs, slate or tile, and masonry chimneys that need experienced flashing work." },
    ],
    rules: "Missouri does not license roofers statewide. Cities and counties, including Kansas City and St. Louis, set their own licensing and permit requirements.",
    faqs: [
      { q: "Does Missouri license roofing contractors?", a: "Not at the state level. Check your city or county's licensing and permit rules, and ask for proof of insurance." },
      { q: "What should I do after a hailstorm in Missouri?", a: "Check gutters, vents and AC units for dents, photograph damage from the ground, and get a roof inspection before filing a claim." },
    ],
    updated: U,
  },
  {
    slug: "nebraska", name: "Nebraska", abbr: "NE", region: "Midwest", status: "PUBLISHED",
    risks: ["hail", "wind", "snow"], neighbors: ["south-dakota", "iowa", "missouri", "kansas", "colorado", "wyoming"],
    intro: "Nebraska is one of the most hail-prone states in the country. Omaha and Lincoln see damaging hail and high winds most springs and summers, and the open Plains bring strong winter winds and snow. Roof replacements after hail are common.",
    details: [
      { heading: "Hail", body: "Large hail regularly damages shingles, gutters and siding. Many homeowners choose Class 4 impact-resistant shingles at replacement time." },
      { heading: "Wind", body: "Open terrain means strong winds that lift shingle edges. Enhanced nailing and secure ridge caps help." },
      { heading: "Winter conditions", body: "Cold winters with blowing snow cause ice dams on poorly insulated homes and stress roof edges." },
    ],
    rules: "Nebraska requires contractors to register with the Nebraska Department of Labor. Omaha, Lincoln and other cities issue their own building permits.",
    faqs: [
      { q: "Do Nebraska roofers need to be registered?", a: "Yes. Contractors must register with the Nebraska Department of Labor. Ask for the registration and proof of insurance." },
      { q: "Is hail damage common in Omaha?", a: "Yes. Omaha and eastern Nebraska see frequent damaging hail, so inspections after major storms are a good habit." },
    ],
    updated: U,
  },
  {
    slug: "north-dakota", name: "North Dakota", abbr: "ND", region: "Midwest", status: "PUBLISHED",
    risks: ["snow", "hail", "wind"], neighbors: ["minnesota", "south-dakota", "montana"],
    intro: "North Dakota roofs endure some of the coldest winters in the lower 48, strong winds across the open prairie, and summer hail. Fargo, Bismarck and Grand Forks homes need roofs built for snow load, ice dams and wind.",
    details: [
      { heading: "Extreme cold and ice dams", body: "Long, very cold winters with snow cover make ice dams and attic condensation common. Air sealing and insulation are essential." },
      { heading: "Prairie wind", body: "Strong, persistent winds lift shingle edges and drive snow into vents. Wind-rated installation and proper vent selection help." },
      { heading: "Summer hail", body: "Hail is a regular summer hazard, and many claims follow storms in the eastern part of the state." },
    ],
    rules: "North Dakota requires contractors to be licensed through the Secretary of State for projects above a set dollar amount. Cities issue building permits.",
    faqs: [
      { q: "Do roofers need a license in North Dakota?", a: "Contractors working on projects above the state threshold must hold a contractor license from the Secretary of State. Verify it before hiring." },
      { q: "What's the biggest roofing risk in North Dakota?", a: "Winter: snow load, ice dams and attic condensation, followed by summer hail and wind." },
    ],
    updated: U,
  },
  {
    slug: "south-dakota", name: "South Dakota", abbr: "SD", region: "Midwest", status: "PUBLISHED",
    risks: ["hail", "wind", "snow"], neighbors: ["north-dakota", "minnesota", "iowa", "nebraska", "wyoming", "montana"],
    intro: "South Dakota roofs see summer hail, high winds across the plains and cold, snowy winters. Sioux Falls and Rapid City account for much of the state's roofing, with storm damage a leading reason for replacement.",
    details: [
      { heading: "Hail and wind", body: "Severe summer storms bring hail and straight-line winds. Class 4 shingles and wind-rated installation are good choices at replacement." },
      { heading: "Black Hills conditions", body: "Rapid City and the Black Hills see heavier snow and wildfire risk near forested land, where noncombustible roofing is worth considering." },
      { heading: "Winter ice dams", body: "Cold winters with snow cover lead to ice dams on homes with warm attics." },
    ],
    rules: "South Dakota does not license roofing contractors at the state level. Cities such as Sioux Falls and Rapid City have their own contractor licensing and permit requirements.",
    faqs: [
      { q: "Does South Dakota license roofers?", a: "Not statewide. Check city requirements, and ask for proof of insurance and a written contract." },
      { q: "Are metal roofs good in the Black Hills?", a: "Often. Metal sheds snow and is noncombustible, which helps in areas near forested land." },
    ],
    updated: U,
  },
];
