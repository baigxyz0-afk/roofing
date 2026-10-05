import type { State } from "../types";

const U = "2026-10-05";

// West (Census): Mountain + Pacific, including Alaska and Hawaii.
export const west: State[] = [
  {
    slug: "arizona", name: "Arizona", abbr: "AZ", region: "West", status: "PUBLISHED",
    risks: ["heat", "wind", "rain", "wildfire"], neighbors: ["california", "nevada", "utah", "new-mexico", "colorado"],
    intro: "Arizona roofs live under extreme sun and heat, with summer monsoon storms bringing sudden wind, dust and heavy rain. Phoenix, Tucson, Mesa and Scottsdale have many tile and foam (spray polyurethane) flat roofs alongside shingles, and higher-elevation areas such as Flagstaff deal with snow and wildfire risk.",
    details: [
      { heading: "Tile roofs and underlayment", body: "Concrete and clay tile is common in metro Phoenix and Tucson. The tiles last for decades, but the underlayment beneath them wears out under the heat, which is the usual cause of tile roof leaks." },
      { heading: "Flat roofs and coatings", body: "Many Arizona homes have flat roofs with foam or membrane systems that need periodic recoating to stay watertight and reflective." },
      { heading: "Monsoon storms", body: "July through September monsoon storms bring high winds, dust and intense rain that expose weak flashing, loose tiles and clogged scuppers." },
    ],
    rules: "Arizona requires roofing contractors to be licensed by the Registrar of Contractors (ROC). You can verify licenses and complaint history on the ROC website. Permits come from the city or county.",
    faqs: [
      { q: "How do I check an Arizona roofer's license?", a: "Search the Arizona Registrar of Contractors website for the license number and complaint history." },
      { q: "Why does my tile roof leak if the tiles look fine?", a: "The underlayment under the tiles usually fails first in Arizona's heat. Replacing it and relaying the tiles is a common repair." },
    ],
    updated: U,
  },
  {
    slug: "colorado", name: "Colorado", abbr: "CO", region: "West", status: "PUBLISHED",
    risks: ["hail", "snow", "wildfire", "wind"], neighbors: ["wyoming", "nebraska", "kansas", "oklahoma", "new-mexico", "arizona", "utah"],
    intro: "Colorado's Front Range, from Fort Collins through Denver to Colorado Springs, is one of the most hail-damaged regions in the country. Intense sun at altitude ages roofing quickly, heavy snow and ice dams affect higher elevations, and wildfire risk shapes roofing choices in the foothills and mountains.",
    details: [
      { heading: "Hail on the Front Range", body: "Denver, Aurora, Colorado Springs and their suburbs see frequent damaging hail. Class 4 impact-resistant shingles are widely used, and insurance-funded replacements are common." },
      { heading: "Wildfire zones", body: "Homes in the wildland-urban interface benefit from Class A fire-rated roofing such as Class A shingles, metal or tile, plus ember-resistant vents. Some communities require Class A roofs." },
      { heading: "Snow, ice and UV at altitude", body: "Mountain towns see heavy snow and ice dams, while strong high-altitude sun breaks down shingles and sealants faster than at sea level." },
    ],
    rules: "Colorado does not license roofers statewide; Denver and many cities license contractors and issue permits. Colorado law sets specific requirements for roofing contracts on insurance claims, including prohibiting contractors from paying or waiving the deductible.",
    faqs: [
      { q: "Does Colorado license roofers?", a: "Not statewide, but Denver and many municipalities license contractors and require permits. Check your city's requirements." },
      { q: "Should I choose Class 4 shingles on the Front Range?", a: "Often yes. Hail is frequent, and many insurers offer discounts for impact-resistant roofs." },
    ],
    updated: U,
  },
  {
    slug: "idaho", name: "Idaho", abbr: "ID", region: "West", status: "PUBLISHED",
    risks: ["snow", "wildfire", "wind"], neighbors: ["washington", "oregon", "nevada", "utah", "wyoming", "montana"],
    intro: "Idaho roofs handle snow in the mountains and the Panhandle, hot, dry summers in the Treasure Valley around Boise and Nampa, and wildfire smoke and embers near forested land. Fast growth around Boise has added many newer homes with builder-grade roofs.",
    details: [
      { heading: "Snow in the north and mountains", body: "Coeur d'Alene, Sandpoint and mountain towns see heavy snow and ice dams; snow load and ventilation are key design concerns." },
      { heading: "Wildfire exposure", body: "Homes near forest and rangeland benefit from Class A fire-rated roofing and ember-resistant vents." },
      { heading: "Treasure Valley growth", body: "Many homes around Boise were built in the last few decades; inspecting builder-grade roofs before warranties end catches installation issues." },
    ],
    rules: "Idaho requires contractors to register with the Idaho Contractors Board through the Division of Occupational and Professional Licenses. Permits come from the city or county.",
    faqs: [
      { q: "Do Idaho roofers need to register?", a: "Yes. Contractors must register with the Idaho Contractors Board. Verify the registration and insurance before hiring." },
      { q: "What roofing is best near Idaho forests?", a: "Class A fire-rated roofing, such as Class A shingles or metal, plus ember-resistant vents and clean gutters." },
    ],
    updated: U,
  },
  {
    slug: "montana", name: "Montana", abbr: "MT", region: "West", status: "PUBLISHED",
    risks: ["snow", "hail", "wildfire", "wind"], neighbors: ["idaho", "wyoming", "south-dakota", "north-dakota"],
    intro: "Montana roofs face heavy mountain snow, strong winds east of the Rockies, summer hail in Billings and on the plains, and wildfire risk across forested areas. Missoula, Bozeman, Billings and Helena each have different mixes of these hazards.",
    details: [
      { heading: "Snow load", body: "Mountain towns see heavy snow loads; metal roofs, snow guards and good ventilation are common choices." },
      { heading: "Hail in eastern Montana", body: "Billings and the eastern plains see summer hail that drives insurance claims." },
      { heading: "Wildfire", body: "Homes near forested land benefit from Class A roofing and ember-resistant vents." },
    ],
    rules: "Montana requires construction contractors with employees to register with the Department of Labor and Industry. Permits depend on the city or county.",
    faqs: [
      { q: "Do Montana roofers need to register?", a: "Contractors with employees must register with the Department of Labor and Industry. Ask for the registration and insurance." },
      { q: "Are metal roofs common in Montana?", a: "Yes, especially in snowy mountain areas, because they shed snow and resist fire." },
    ],
    updated: U,
  },
  {
    slug: "nevada", name: "Nevada", abbr: "NV", region: "West", status: "PUBLISHED",
    risks: ["heat", "wind", "wildfire", "snow"], neighbors: ["california", "oregon", "idaho", "utah", "arizona"],
    intro: "Nevada roofs in Las Vegas and Henderson face extreme heat and sun, where tile roofs dominate, while Reno and Carson City see snow, wind and wildfire risk from the Sierra. UV and heat are the main reasons roofing materials wear out in the south.",
    details: [
      { heading: "Desert heat and tile", body: "Concrete tile is common in Las Vegas. Heat breaks down the underlayment beneath, causing leaks even when tiles look fine." },
      { heading: "Wind", body: "High winds lift and break tiles and shingles; proper fastening and secure ridges reduce damage." },
      { heading: "Reno snow and wildfire", body: "Northern Nevada homes see winter snow and summer wildfire risk, favoring Class A fire-rated roofing." },
    ],
    rules: "Nevada requires roofing contractors to be licensed by the Nevada State Contractors Board (C-15 roofing classification). Permits come from the city or county.",
    faqs: [
      { q: "How do I verify a Nevada roofer?", a: "Search the Nevada State Contractors Board license lookup and confirm the license covers roofing." },
      { q: "How long does a tile roof last in Las Vegas?", a: "The tiles can last decades, but underlayment often needs replacement after about 20 years in desert heat." },
    ],
    updated: U,
  },
  {
    slug: "new-mexico", name: "New Mexico", abbr: "NM", region: "West", status: "PUBLISHED",
    risks: ["heat", "wildfire", "hail", "wind"], neighbors: ["arizona", "colorado", "oklahoma", "texas"],
    intro: "New Mexico roofs include the flat roofs of Pueblo Revival and adobe-style homes in Albuquerque and Santa Fe, intense high-desert sun, summer monsoon storms with hail, and wildfire risk in the mountains. Flat-roof drainage and coatings are central to roofing here.",
    details: [
      { heading: "Flat roofs and canales", body: "Pueblo-style homes have flat roofs behind parapets, draining through canales. Parapet flashing, membrane condition and clear drainage are the main concerns." },
      { heading: "Monsoon hail and rain", body: "Summer monsoon storms bring hail and intense rain that test flat roofs and drainage." },
      { heading: "Sun at altitude", body: "Strong UV at high elevation breaks down membranes, coatings and sealants faster; reflective coatings help." },
    ],
    rules: "New Mexico licenses contractors, including roofers, through the Construction Industries Division of the Regulation and Licensing Department. Permits also come through CID or local jurisdictions.",
    faqs: [
      { q: "Do New Mexico roofers need a license?", a: "Yes. Contractors must be licensed through the Construction Industries Division. Verify the license before hiring." },
      { q: "How do I maintain a flat roof with canales?", a: "Keep canales and scuppers clear, recoat the roof as recommended, and inspect parapet flashing yearly." },
    ],
    updated: U,
  },
  {
    slug: "utah", name: "Utah", abbr: "UT", region: "West", status: "PUBLISHED",
    risks: ["snow", "wildfire", "wind", "hail"], neighbors: ["idaho", "wyoming", "colorado", "new-mexico", "arizona", "nevada"],
    intro: "Utah roofs along the Wasatch Front, from Ogden through Salt Lake City to Provo, deal with snow and ice dams, strong canyon winds, intense sun at altitude and wildfire risk on the foothills. St. George in the south adds desert heat.",
    details: [
      { heading: "Snow and ice dams", body: "Wasatch Front winters bring snow and ice dams, especially on older homes with limited insulation." },
      { heading: "Canyon winds", body: "Downslope winds out of the canyons can exceed hurricane force in places, tearing off shingles; wind-rated installation helps." },
      { heading: "Foothill wildfire", body: "Homes near the foothills benefit from Class A roofing and ember-resistant vents." },
    ],
    rules: "Utah requires roofing contractors to be licensed through the Division of Professional Licensing, with a roofing specialty classification. Permits come from the city or county.",
    faqs: [
      { q: "How do I verify a Utah roofer?", a: "Use the Division of Professional Licensing's license lookup and confirm a roofing classification." },
      { q: "Why do Utah roofs lose shingles in wind?", a: "Strong canyon winds lift shingles that aren't nailed to the manufacturer's high-wind pattern." },
    ],
    updated: U,
  },
  {
    slug: "wyoming", name: "Wyoming", abbr: "WY", region: "West", status: "PUBLISHED",
    risks: ["wind", "hail", "snow", "wildfire"], neighbors: ["montana", "south-dakota", "nebraska", "colorado", "utah", "idaho"],
    intro: "Wyoming roofs face some of the strongest sustained winds in the country, summer hail around Cheyenne and Casper, cold winters with blowing snow, and wildfire risk in forested areas. Wind performance is the first roofing concern for most of the state.",
    details: [
      { heading: "Wind", body: "Persistent high winds lift shingle edges and ridge caps. High-wind-rated shingles with enhanced nailing, or well-fastened metal, perform best." },
      { heading: "Hail", body: "Cheyenne and southeastern Wyoming see frequent summer hail." },
      { heading: "Snow and cold", body: "Cold winters with drifting snow cause ice dams and load on leeward roof sections." },
    ],
    rules: "Wyoming does not license roofers statewide. Cities such as Cheyenne and Casper set local contractor licensing and permit rules.",
    faqs: [
      { q: "Does Wyoming license roofers?", a: "Not at the state level. Check city requirements, and ask for proof of insurance." },
      { q: "What roofing holds up in Wyoming wind?", a: "High-wind-rated shingles installed with enhanced nailing, or properly fastened standing seam metal." },
    ],
    updated: U,
  },
  {
    slug: "alaska", name: "Alaska", abbr: "AK", region: "West", status: "PUBLISHED",
    risks: ["snow", "wind", "rain"], neighbors: [],
    intro: "Alaska roofs face heavy snow loads, extreme cold, short building seasons and, in Southeast Alaska, very high rainfall. Anchorage, Fairbanks and the Mat-Su Valley account for much of the state's housing, and metal roofing is common because it sheds snow.",
    details: [
      { heading: "Snow load and ice dams", body: "Heavy snow and long cold spells make ice dams and snow load central concerns; air sealing, insulation and ventilation matter." },
      { heading: "Short building season", body: "Most roofing is done in the short summer window, so scheduling early matters." },
      { heading: "Rain in Southeast Alaska", body: "Juneau and Ketchikan get heavy rainfall year-round, favoring metal roofing and careful flashing." },
    ],
    rules: "Alaska requires contractors to be registered with the Division of Corporations, Business and Professional Licensing, and residential work requires a residential contractor endorsement. Permits depend on the borough or city.",
    faqs: [
      { q: "Do Alaska roofers need to be registered?", a: "Yes. Contractors must register with the state, and those doing residential construction need a residential endorsement." },
      { q: "When is roofing season in Alaska?", a: "Mainly late spring through early fall; book early because the window is short." },
    ],
    updated: U,
  },
  {
    slug: "california", name: "California", abbr: "CA", region: "West", status: "PUBLISHED",
    risks: ["wildfire", "heat", "rain", "wind"], neighbors: ["oregon", "nevada", "arizona"],
    intro: "California's roofing needs vary from wildfire-zone requirements in the foothills and canyons, to clay and concrete tile across Southern California, to winter atmospheric rivers that test roofs from Sacramento to the Bay Area. The state's building and energy codes add specific rules for fire resistance and cool roofs.",
    details: [
      { heading: "Wildfire zones", body: "Homes in designated fire hazard areas are subject to California's wildland-urban interface building standards, which require Class A roofing and ember-resistant features for new construction and many re-roofs." },
      { heading: "Tile roofs", body: "Clay and concrete tile is common in Southern California and the Central Valley; underlayment, not the tile, is the usual failure point." },
      { heading: "Atmospheric rivers", body: "Winter storms bring days of heavy rain that expose flashing and underlayment problems on older roofs." },
    ],
    rules: "California requires roofing contractors to hold a C-39 Roofing license (or an appropriate general contractor license) from the Contractors State License Board for jobs above the state's minor-work threshold. Title 24 energy rules can require cool roofs in some re-roofs. Permits come from the city or county.",
    faqs: [
      { q: "How do I verify a California roofer?", a: "Look up the license on the Contractors State License Board website and confirm the C-39 roofing classification or a qualifying general license." },
      { q: "What roof do I need in a California fire zone?", a: "A Class A fire-rated roof assembly, plus ember-resistant vents and other features required by the wildland-urban interface code where it applies." },
    ],
    updated: U,
  },
  {
    slug: "hawaii", name: "Hawaii", abbr: "HI", region: "West", status: "PUBLISHED",
    risks: ["hurricane", "rain", "heat", "wind"], neighbors: [],
    intro: "Hawaii roofs face intense tropical sun, salt air, trade winds, heavy rain on windward sides and the threat of hurricanes. Honolulu, Kailua, Hilo and Pearl City homes often use metal, shingles or flat roofs, and corrosion resistance is a priority near the ocean.",
    details: [
      { heading: "Salt air corrosion", body: "Coastal salt air corrodes standard steel quickly; coastal-rated metals, stainless fasteners and appropriate finishes extend roof life." },
      { heading: "Hurricane and wind", body: "Hurricanes such as Iniki in 1992 showed the need for strong roof-to-wall connections and wind-rated roofing." },
      { heading: "Rain and sun", body: "Windward areas get heavy rainfall while leeward areas get intense sun; both age roofing materials." },
    ],
    rules: "Hawaii requires roofing contractors to be licensed by the Contractors License Board (C-42 roofing classification) through the Department of Commerce and Consumer Affairs. Permits come from the county.",
    faqs: [
      { q: "How do I verify a Hawaii roofer?", a: "Use the Department of Commerce and Consumer Affairs license search and confirm a C-42 roofing classification." },
      { q: "What roofing lasts near the ocean in Hawaii?", a: "Coastal-rated metal or other corrosion-resistant systems with stainless fasteners, installed to wind requirements." },
    ],
    updated: U,
  },
  {
    slug: "oregon", name: "Oregon", abbr: "OR", region: "West", status: "PUBLISHED",
    risks: ["rain", "wildfire", "snow", "wind"], neighbors: ["washington", "idaho", "nevada", "california"],
    intro: "Oregon roofs west of the Cascades deal with long, wet winters that feed moss and test flashing, while Central and Southern Oregon face wildfire risk and snow. Portland, Salem, Eugene and Bend each see a different mix.",
    details: [
      { heading: "Moss and rain", body: "Wet winters grow moss on shaded roofs in the Willamette Valley; moss holds water and lifts shingles. Regular cleaning and zinc or copper strips help." },
      { heading: "Wildfire", body: "Bend, Medford and other areas near forests benefit from Class A roofing and ember-resistant vents." },
      { heading: "Winter storms", body: "Wind and ice storms occasionally hit the Portland area, damaging roofs and bringing down trees." },
    ],
    rules: "Oregon requires contractors to be licensed by the Construction Contractors Board (CCB). Permits come from the city or county.",
    faqs: [
      { q: "How do I verify an Oregon roofer?", a: "Search the Construction Contractors Board license lookup for the CCB number and any complaint history." },
      { q: "How do I get rid of moss on my Oregon roof?", a: "Have it removed gently with roof-safe treatment, trim shade trees, and install zinc or copper strips to slow regrowth. Avoid pressure washing." },
    ],
    updated: U,
  },
  {
    slug: "washington", name: "Washington", abbr: "WA", region: "West", status: "PUBLISHED",
    risks: ["rain", "snow", "wildfire", "wind"], neighbors: ["oregon", "idaho"],
    intro: "Washington roofs west of the Cascades, around Seattle, Tacoma and Everett, face long rainy seasons, moss and windstorms, while Spokane and the eastern side see snow, ice dams and wildfire risk. The state's two climates call for different roofing priorities.",
    details: [
      { heading: "Moss in Western Washington", body: "Damp, shaded roofs grow moss that holds water and lifts shingles. Regular cleaning and zinc or copper strips slow regrowth." },
      { heading: "Snow and ice in Eastern Washington", body: "Spokane winters bring snow and ice dams; attic insulation and ventilation matter." },
      { heading: "Windstorms and wildfire", body: "Pacific windstorms bring down trees in the west, and wildfire risk affects the east and foothills." },
    ],
    rules: "Washington requires contractors to be registered with the Department of Labor & Industries, with a bond and insurance. Permits come from the city or county.",
    faqs: [
      { q: "How do I verify a Washington roofer?", a: "Check the Department of Labor & Industries' contractor lookup for registration, bond and insurance." },
      { q: "Is moss damaging my roof?", a: "Yes, over time. Moss holds moisture and lifts shingles. Remove it gently and slow regrowth with zinc or copper strips." },
    ],
    updated: U,
  },
];
