import type { City, CityService, State } from "./types";
import { citiesMore } from "./locationsMore";
import { extraIssues } from "./locationDepth";
import { usaStates } from "./states";

const U = "2026-10-05";

export const states: State[] = usaStates;

export const regions = [
  { slug: "houston", name: "Houston" },
  { slug: "west", name: "West & Fort Bend" },
  { slug: "north", name: "North & Montgomery County" },
  { slug: "southeast", name: "Southeast, Bay Area & Galveston" },
] as const;

const core: City[] = [
  {
    slug: "houston",
    name: "Houston",
    stateSlug: "texas",
    county: "Harris",
    region: "houston",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77002", "77003", "77004", "77005", "77006", "77007", "77008", "77009", "77018", "77019", "77024", "77025", "77027", "77030", "77035", "77036", "77040", "77041", "77042", "77043", "77055", "77056", "77057", "77063", "77079", "77080", "77092", "77096", "77098"],
    areas: ["The Heights", "Montrose", "Memorial", "Spring Branch", "Meyerland", "Bellaire area", "Garden Oaks", "Oak Forest", "Westchase", "Third Ward"],
    intro:
      "Houston's roofs range from 1910s bungalows in the Heights and Montrose to 1950s ranches in Oak Forest, Spring Branch and Meyerland, and the three-story townhomes that have replaced many of them since the 2000s. Mature live oaks and water oaks shade much of the city, which keeps attics cooler but drops limbs and leaves on roofs every storm.",
    housingNotes:
      "Older homes inside the Loop often have several layers of roofing history, original wood decking with gaps, and low-slope rear additions. Postwar ranches in Spring Branch and Oak Forest are on their third or fourth roof. Townhomes typically combine steep shingle slopes with flat roof decks and parapet walls, where most leaks start at scuppers and wall flashing.",
    localIssues: [
      { title: "Townhome roof decks", body: "Flat roof decks on three-story townhomes rely on membranes, scuppers and parapet flashing. Clogged scuppers and open seams cause many of the leaks. See [flat roof repair](/roofing-services/flat-roof-repair/)." },
      { title: "Tree limbs and the 2024 derecho", body: "The May 2024 derecho and Hurricane Beryl two months later brought down oaks and pines across the city. Branches over the roof scrape shingles in normal wind and become projectiles in storms, so trimming is part of roof maintenance here." },
      { title: "Historic districts", body: "The Heights and several other neighborhoods are city historic districts, where visible exterior changes can need a Certificate of Appropriateness. Changing roofing material, such as shingle to metal, is the kind of change to ask about before signing." },
    ],
    popularServices: ["roof-repair", "roof-leak-repair", "roof-replacement", "flat-roof-repair", "storm-damage-roof-repair", "roof-maintenance"],
    nearby: ["pasadena", "katy", "sugar-land", "spring"],
    storm:
      "Most of the city is west of State Highway 146 and outside the designated windstorm area, but storms like the 2024 derecho and Beryl caused widespread wind damage anyway. Check your wind and hail deductible before storm season.",
    permits:
      "The City of Houston issues building permits through the Houston Permitting Center. Ask the contractor whether your scope needs a permit, and check historic district rules if you live in one.",
    faqs: [
      { q: "Do I need a permit to replace my roof in Houston?", a: "Requirements depend on the scope, such as whether decking or structure changes. Ask the contractor to confirm with the Houston Permitting Center, and check historic district rules if they apply." },
      { q: "How do I stop leaks on my townhome roof deck?", a: "Keep scuppers and drains clear, have the membrane and parapet flashing inspected yearly, and fix ponding areas before they open seams." },
    ],
    updated: U,
  },
  {
    slug: "katy",
    name: "Katy",
    stateSlug: "texas",
    county: "Harris",
    region: "west",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77449", "77450", "77491", "77492", "77493", "77494"],
    areas: ["Cinco Ranch", "Old Katy", "Grand Lakes", "Seven Meadows", "Cane Island", "Firethorne", "Nottingham Country"],
    intro:
      "Katy grew from a rice-farming town into one of the largest master-planned suburbs in the country. Cinco Ranch began in the early 1990s, and newer communities such as Cane Island and Firethorne continue west toward Brookshire. Most homes are two-story brick and siding houses with architectural shingle roofs.",
    housingNotes:
      "Homes built in the 1990s and 2000s are on their original or second roofs, and many original builder-grade shingles have reached the end of their life. The flat former prairie leaves neighborhoods exposed to straight-line winds, and HOAs across Cinco Ranch and its neighbors set approved shingle colors.",
    localIssues: [
      { title: "Hail on the west side", body: "Spring supercells crossing from the west hit Katy more often than the inner city, and roofs here see frequent [hail damage](/roofing-services/hail-damage-roof-repair/) claims. Many owners upgrade to Class 4 shingles at replacement." },
      { title: "HOA color approval", body: "Most Katy communities require an architectural review application listing the shingle brand and color before work starts. A contractor familiar with the HOA can include the paperwork." },
      { title: "Second-generation roofs", body: "First Cinco Ranch roofs from the 1990s were often three-tab shingles. Replacements usually move to architectural or impact-resistant shingles, with a ridge vent replacing older turbines." },
    ],
    popularServices: ["hail-damage-roof-repair", "roof-replacement", "impact-resistant-shingles", "roof-insurance-claims", "roof-inspection"],
    nearby: ["sugar-land", "houston", "tomball"],
    storm:
      "Katy is well outside the coastal windstorm area, but hail and wind claims are common. Many policies here carry a percentage-based wind and hail deductible.",
    permits:
      "The City of Katy issues permits inside city limits. Most of the area is unincorporated Harris, Fort Bend or Waller County, where HOA approval is usually the main requirement for a re-roof.",
    faqs: [
      { q: "Do Katy HOAs restrict roof colors?", a: "Most do. Submit the brand, line and color to the architectural review committee before the roofer orders material." },
      { q: "Is Class 4 worth it in Katy?", a: "Often yes, given how frequently hail reaches the west side. Ask your insurer about the premium discount before choosing." },
    ],
    updated: U,
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    stateSlug: "texas",
    county: "Fort Bend",
    region: "west",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77478", "77479", "77487", "77496", "77498"],
    areas: ["First Colony", "Telfair", "Riverstone", "Sugar Creek", "New Territory", "Greatwood", "Imperial"],
    intro:
      "Sugar Land grew around the Imperial Sugar refinery and boomed with First Colony in the 1980s and 1990s, followed by Telfair and Riverstone in the 2000s. Neighborhoods are almost all master-planned, with brick two-story homes, steep hip roofs and active homeowner associations.",
    housingNotes:
      "Many First Colony and Sugar Creek homes are on their second or third roof. Steep, complex hip roofs with many valleys take more labor and materials than simpler gable roofs. Newer homes in Telfair and Riverstone are reaching their first replacement.",
    localIssues: [
      { title: "Complex hip roofs", body: "Steep hips, multiple valleys and two-story walls create many flashing details. Valleys and roof-to-wall joints are where most leaks start, so ask how [flashing](/roofing-services/flashing-chimney-repair/) will be replaced." },
      { title: "Architectural review", body: "Sugar Land's community associations review roof material and color. Approval timelines can add a week or two, so start the application early." },
      { title: "Algae on shaded slopes", body: "Tree-lined streets and humid air feed black algae streaks on north slopes. Algae-resistant shingles are worth specifying on a replacement." },
    ],
    popularServices: ["roof-replacement", "asphalt-shingle-roofing", "roof-leak-repair", "roof-inspection", "roof-maintenance"],
    nearby: ["missouri-city", "katy", "houston"],
    storm:
      "Fort Bend County is outside the designated coastal windstorm area. Wind and hail claims follow spring storms and tropical systems.",
    permits:
      "The City of Sugar Land requires permits for roofing work inside city limits, and HOA approval usually comes first. Some addresses with a Sugar Land mailing address are unincorporated Fort Bend County.",
    faqs: [
      { q: "Do I need a permit to replace my roof in Sugar Land?", a: "Inside city limits, yes. The contractor pulls it. Confirm whether your address is in the city or unincorporated Fort Bend County." },
      { q: "Why do roofing quotes vary so much in Sugar Land?", a: "Steep, complex roofs vary in measurement and labor. Compare quotes by squares, shingle line, underlayment and flashing scope." },
    ],
    updated: U,
  },
  {
    slug: "missouri-city",
    name: "Missouri City",
    stateSlug: "texas",
    county: "Fort Bend",
    region: "west",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77459", "77489"],
    areas: ["Quail Valley", "Sienna", "Lake Olympia", "Hunters Glen", "Riverstone (part)", "Fondren Park"],
    intro:
      "Missouri City mixes established 1970s neighborhoods such as Quail Valley and Hunters Glen with Sienna, a large master-planned community built along the Brazos River since the late 1990s. Housing runs from single-story brick ranches to large two-stories with complex roof lines.",
    housingNotes:
      "Quail Valley homes, many of them single-story, often have older decking, low-slope rear additions and patio covers tied into the main roof. Sienna homes are newer, with architectural shingles and HOA standards, and the earliest sections are now reaching replacement age.",
    localIssues: [
      { title: "Patio cover tie-ins", body: "Older ranches often have flat or low-slope patio covers attached to the main roof. The joint between them is a frequent leak point that needs proper flashing, not sealant." },
      { title: "Sienna's first replacements", body: "Early Sienna homes from the late 1990s and 2000s are hitting the age where original roofs wear out, and HOA approval is required for new material and color." },
      { title: "Wind exposure near open land", body: "Neighborhoods backing onto the Brazos River bottoms, golf courses and open land catch more wind, which lifts shingle edges and ridge caps." },
    ],
    popularServices: ["roof-repair", "roof-replacement", "flat-roof-repair", "wind-damage-roof-repair", "roof-inspection"],
    nearby: ["sugar-land", "houston", "pearland"],
    storm:
      "Missouri City is outside the designated coastal windstorm area. Tropical storm winds and spring storms cause most claims.",
    permits:
      "The City of Missouri City issues building permits inside city limits. Parts of Sienna are in a municipal utility district and may follow different rules, so confirm before work starts.",
    faqs: [
      { q: "Why does my patio cover leak where it meets the house?", a: "The tie-in usually lacks proper flashing or relies on sealant. A roofer can rebuild the transition with metal flashing and the right membrane." },
      { q: "Does Sienna require HOA approval for a new roof?", a: "Yes. Submit the shingle brand, line and color before the work is scheduled." },
    ],
    updated: U,
  },
  {
    slug: "spring",
    name: "Spring & The Woodlands",
    stateSlug: "texas",
    county: "Harris",
    region: "north",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77373", "77379", "77380", "77381", "77382", "77383", "77386", "77388", "77389"],
    areas: ["The Woodlands", "Old Town Spring", "Klein", "Gleannloch Farms", "Champion Forest", "Augusta Pines", "Spring Lakes"],
    intro:
      "Spring is an unincorporated area rather than a city, stretching across north Harris County into Montgomery County and The Woodlands, which has been developed since 1974. Tall loblolly pines cover much of the area, and homes range from 1970s Klein ranches to large newer two-stories.",
    housingNotes:
      "Pine-shaded roofs stay cooler but collect needles in valleys and gutters, which hold moisture against shingles. Homes in The Woodlands follow the community's development standards, and many neighborhoods in Klein and Champion Forest have their own deed restrictions on roofing.",
    localIssues: [
      { title: "Falling pines", body: "Hurricane Beryl in 2024 dropped thousands of pines across north Harris and Montgomery counties, many onto roofs. A tree on the roof needs a tree service and [emergency tarping](/roofing-services/emergency-roof-repair/) before repairs." },
      { title: "Needles in valleys", body: "Pine needles pack valleys and gutters, slowing water and holding moisture. Regular clearing is the simplest way to extend roof life here." },
      { title: "Community standards", body: "The Woodlands and many Spring neighborhoods review roof material and color. Approval is easier when the contractor submits the product sheet with the application." },
    ],
    popularServices: ["storm-damage-roof-repair", "emergency-roof-repair", "roof-replacement", "roof-maintenance", "hail-damage-roof-repair", "roof-ventilation"],
    nearby: ["tomball", "conroe", "humble", "kingwood"],
    storm:
      "Spring is far from the coastal windstorm area, but tree damage is the major storm risk. Many claims here involve limbs and whole trees rather than wind alone.",
    permits:
      "Unincorporated Harris and Montgomery counties generally don't require a building permit for a re-roof. Community association and deed-restriction approval usually apply.",
    faqs: [
      { q: "Do I need a permit for a new roof in Spring?", a: "In unincorporated areas, generally not from the county, but your community association or The Woodlands' standards committee may need to approve material and color." },
      { q: "Will insurance cover a pine that fell on my roof?", a: "Damage from a tree knocked down by a covered storm is often covered, including removal from the structure. Photograph everything before cleanup and call your insurer." },
    ],
    updated: U,
  },
  {
    slug: "tomball",
    name: "Tomball",
    stateSlug: "texas",
    county: "Harris",
    region: "north",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77375", "77377"],
    areas: ["Old Town Tomball", "Northpointe", "Rose Hill", "Lakewood Forest area", "Wildwood", "Tomball Forest"],
    intro:
      "Tomball is a small railroad town on the northwest edge of the metro, surrounded by fast-growing unincorporated subdivisions and acreage properties. Old Town has early 20th-century homes, while Northpointe and newer neighborhoods along the Tomball Parkway are mostly two-story homes built since the 1990s.",
    housingNotes:
      "Acreage homes often have long ranch roofs, metal-roofed barns and shops, and detached garages, so one storm can mean several roofs. Subdivision homes have architectural shingles under HOA rules, and older in-town homes may have low-slope additions.",
    localIssues: [
      { title: "Northwest hail corridor", body: "Spring storms moving in from the northwest regularly bring hail across Tomball and Cypress. [Class 4 shingles](/roofing-services/impact-resistant-shingles/) are a popular replacement choice here." },
      { title: "Metal outbuildings", body: "Barns and shops with exposed-fastener metal panels lose screws and sealing washers over time, and wind lifts loose panel ends. Re-screwing or coating extends their life." },
      { title: "Tree cover", body: "Pines and oaks around Tomball shade roofs and fall in storms, and debris in valleys is a common cause of slow leaks." },
    ],
    popularServices: ["hail-damage-roof-repair", "metal-roofing", "roof-replacement", "roof-coatings", "roof-inspection"],
    nearby: ["spring", "katy", "conroe"],
    storm:
      "Tomball is inland, outside the windstorm area. Hail and wind from spring storms are the main insurance claims.",
    permits:
      "The City of Tomball issues building permits inside city limits. The surrounding unincorporated areas generally rely on HOA or deed-restriction approval.",
    faqs: [
      { q: "Can a roofer fix my barn's metal roof too?", a: "Many can re-screw, re-panel or coat metal outbuildings. Mention every structure when you request service so the roofer brings the right materials." },
      { q: "How often does hail hit Tomball?", a: "Hail is a regular spring risk on the northwest side. After any storm with hail reported nearby, get the roof checked." },
    ],
    updated: U,
  },
  {
    slug: "humble",
    name: "Humble & Atascocita",
    stateSlug: "texas",
    county: "Harris",
    region: "north",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77338", "77346", "77396"],
    areas: ["Old Town Humble", "Atascocita", "Eagle Springs", "Fall Creek", "Walden on Lake Houston", "Summerwood"],
    intro:
      "Humble began as an oil boomtown in the early 1900s and is now the center of a large northeast suburb, most of it unincorporated Atascocita along Lake Houston. Homes range from older ranches near downtown Humble to 1980s lakeside neighborhoods and newer master-planned communities such as Eagle Springs and Fall Creek.",
    housingNotes:
      "Atascocita and Walden homes from the 1980s and 1990s are on their second or third roofs, often with older turbine ventilation. Newer communities have architectural shingles and active HOAs. Pines and oaks shade many streets.",
    localIssues: [
      { title: "Lake Houston storm exposure", body: "Lakeside neighborhoods catch stronger winds across open water, which lifts shingles along eaves and ridges. Harvey's 2017 flooding along the lake also left many homes with storm-related roof and interior repairs." },
      { title: "Mixed ventilation", body: "Older homes often have turbines added over the years alongside other vents. Balancing [ventilation](/roofing-services/roof-ventilation/) during a re-roof lowers attic heat and protects the new shingles." },
      { title: "Tree damage", body: "Beryl in 2024 brought down many pines across the northeast suburbs. Trimming limbs back from the roof prevents both scraping and impact damage." },
    ],
    popularServices: ["roof-replacement", "wind-damage-roof-repair", "roof-ventilation", "roof-repair", "storm-damage-roof-repair"],
    nearby: ["kingwood", "spring", "baytown"],
    storm:
      "Humble and Atascocita are outside the coastal windstorm area. Wind from tropical systems and falling trees drive most claims.",
    permits:
      "The City of Humble issues permits inside its limits. Atascocita and most surrounding neighborhoods are unincorporated, where community association approval is the usual requirement.",
    faqs: [
      { q: "Is Atascocita part of Humble?", a: "No. Atascocita is unincorporated Harris County with a Humble mailing address, so city permits generally don't apply." },
      { q: "Should I replace turbine vents during a re-roof?", a: "Often yes, with a continuous ridge vent and enough soffit intake, so exhaust types aren't mixed." },
    ],
    updated: U,
  },
  {
    slug: "kingwood",
    name: "Kingwood",
    stateSlug: "texas",
    county: "Harris",
    region: "north",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77339", "77345"],
    areas: ["Kings Forest", "Elm Grove", "Kingwood Lakes", "Forest Cove", "Bear Branch", "Trailwood", "Greentree Village"],
    intro:
      "Kingwood, the \"Livable Forest,\" was developed from 1970 onward as a master-planned community under a dense pine canopy along the San Jacinto River. The City of Houston annexed it in 1996, so city rules apply even though it feels like a separate town.",
    housingNotes:
      "Most homes date from the 1970s through the 1990s and many are on their second or third roof. Heavy tree cover means debris, algae and limbs over the roof. Each village has its own community association with deed restrictions covering roofing.",
    localIssues: [
      { title: "Roofs under the canopy", body: "Shade slows drying after rain, so algae and moss grow on north slopes and needles collect in valleys. [Roof maintenance](/roofing-services/roof-maintenance/) once or twice a year matters more here than in open subdivisions." },
      { title: "Harvey and the river", body: "Hurricane Harvey's 2017 flooding hit Kingwood neighborhoods near the San Jacinto River and Lake Houston hard. Many homes were rebuilt, so roof ages vary widely street to street." },
      { title: "Village deed restrictions", body: "Kingwood's village associations review exterior changes, including roof color and material. Expect to submit a form before the roofer schedules." },
    ],
    popularServices: ["roof-maintenance", "storm-damage-roof-repair", "roof-replacement", "roof-leak-repair", "fascia-soffit-repair"],
    nearby: ["humble", "spring", "conroe"],
    storm:
      "Kingwood is inland and outside the windstorm area. Falling pines during tropical storms and severe thunderstorms are the leading cause of roof damage.",
    permits:
      "As part of the City of Houston, Kingwood work follows Houston Permitting Center rules, along with village association approval.",
    faqs: [
      { q: "Does Kingwood follow City of Houston permit rules?", a: "Yes. Kingwood was annexed in 1996, so Houston's permit rules apply, plus your village association's deed restrictions." },
      { q: "How do I keep algae off a shaded Kingwood roof?", a: "Trim branches for more sun, keep debris clear, and soft-wash with a roof-safe cleaner. Algae-resistant shingles help on a replacement." },
    ],
    updated: U,
  },
  {
    slug: "conroe",
    name: "Conroe",
    stateSlug: "texas",
    county: "Montgomery",
    region: "north",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77301", "77302", "77303", "77304", "77384", "77385"],
    areas: ["Downtown Conroe", "Lake Conroe area", "Grand Central Park", "Woodforest", "Wedgewood Forest", "River Plantation"],
    intro:
      "Conroe is the Montgomery County seat and one of the fastest-growing cities in Texas. Older homes surround the historic downtown, lakeside homes line Lake Conroe to the west, and large new communities are spreading along Interstate 45 and Loop 336.",
    housingNotes:
      "Housing ranges from mid-century ranches near downtown to golf-course homes along the river and new two-stories with first-generation builder roofs. Lake properties often include boathouses, docks with roofs and detached garages.",
    localIssues: [
      { title: "New-build roof checks", body: "Fast construction can mean missed details: short nails, missing kick-out flashing or blocked soffit vents. A [roof inspection](/roofing-services/roof-inspection/) before the builder warranty expires catches them while they're still the builder's responsibility." },
      { title: "Lake Conroe wind", body: "Homes on the lake face open-water wind that lifts shingles and damages boathouse roofs, and docks and outbuildings are often overlooked after storms." },
      { title: "Pine country", body: "Conroe sits in the Piney Woods. Falling pines in tropical storms and needles in valleys and gutters are the main local roof problems." },
    ],
    popularServices: ["roof-inspection", "storm-damage-roof-repair", "roof-replacement", "metal-roofing", "roof-maintenance"],
    nearby: ["spring", "kingwood", "tomball"],
    storm:
      "Conroe is well inland, outside the windstorm area. Tree damage and spring hail drive most claims.",
    permits:
      "The City of Conroe issues building permits inside city limits. Lake Conroe and many subdivisions are in unincorporated Montgomery County, where HOA approval usually applies instead.",
    faqs: [
      { q: "Should I have my new home's roof inspected?", a: "Yes, ideally before the builder's warranty period ends, so any defects are fixed at the builder's cost." },
      { q: "Can boathouse roofs be repaired by the same roofer?", a: "Often yes. Mention boathouses and outbuildings when you request service." },
    ],
    updated: U,
  },
  {
    slug: "pearland",
    name: "Pearland",
    stateSlug: "texas",
    county: "Brazoria",
    region: "southeast",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77581", "77584", "77588"],
    areas: ["Shadow Creek Ranch", "Silverlake", "Southdown", "Old Townsite", "Country Place", "West Oaks"],
    intro:
      "Pearland was a small farming town south of Houston until it became one of the region's fastest-growing suburbs in the 1990s and 2000s. Southdown and Country Place date from the 1980s and 1990s; Silverlake and Shadow Creek Ranch filled in through the 2000s and 2010s.",
    housingNotes:
      "Most homes are brick or brick-and-siding two-stories with architectural shingles, many on their original roof or first replacement. Open prairie terrain gives wind a long run at the roof edges, and HOAs regulate roof colors.",
    localIssues: [
      { title: "Windstorm area", body: "Most of Pearland is in Brazoria County, which is inside the state's designated windstorm area. Roofing work there may need a windstorm inspection to keep TWIA eligibility, so ask how the contractor handles it." },
      { title: "Roofs reaching 20 years", body: "Homes built in the late 1990s and early 2000s are past typical Houston shingle life, and many owners are combining [roof replacement](/roofing-services/roof-replacement/) with an insurance claim after storms." },
      { title: "Edge damage from wind", body: "Flat, open land lets wind accelerate across neighborhoods, so eaves, rakes and ridge caps take the first damage. Correct starter strips and nailing matter more than shingle brand." },
    ],
    popularServices: ["roof-replacement", "wind-damage-roof-repair", "roof-insurance-claims", "storm-damage-roof-repair", "asphalt-shingle-roofing"],
    nearby: ["league-city", "pasadena", "missouri-city"],
    storm:
      "Most Pearland addresses are in Brazoria County, part of the designated windstorm area. Parts of the city extend into Harris and Fort Bend counties, so confirm your county before work begins.",
    permits:
      "The City of Pearland requires permits for roofing work inside city limits, and HOA approval usually comes first.",
    faqs: [
      { q: "Does my Pearland roof need a windstorm certificate?", a: "If your home is in the Brazoria County portion and you want TWIA coverage, the work should be inspected for windstorm compliance. Confirm with the contractor and your insurer." },
      { q: "Do I need a permit in Pearland?", a: "Yes, inside city limits. The contractor pulls the permit." },
    ],
    updated: U,
  },
  {
    slug: "league-city",
    name: "League City",
    stateSlug: "texas",
    county: "Galveston",
    region: "southeast",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77573", "77574"],
    areas: ["South Shore Harbour", "Westover Park", "Victory Lakes", "Tuscan Lakes", "Historic District", "Brittany Bay"],
    intro:
      "League City sits between Clear Lake and Galveston Bay in Galveston County, with a small historic district under old live oaks and large master-planned neighborhoods built since the 1980s. Its location near the bay brings both coastal wind and Houston-style thunderstorms.",
    housingNotes:
      "South Shore Harbour and neighborhoods near Clear Lake have homes from the 1980s and 1990s, many re-roofed after Hurricane Ike in 2008. Westover Park, Victory Lakes and Tuscan Lakes are newer, with roofs now 10 to 20 years old.",
    localIssues: [
      { title: "Windstorm certification", body: "All of Galveston County is in the designated windstorm area. Re-roofs need to meet windstorm code and be inspected to keep TWIA coverage, which affects nailing, underlayment and paperwork." },
      { title: "Ike-era roofs aging out", body: "Many League City roofs were replaced after Hurricane Ike in 2008. Those roofs are now past typical Houston shingle life and are failing at the edges and ridges." },
      { title: "Salt air near the water", body: "Homes close to Clear Lake and the bay see faster corrosion of metal flashing, vents and fasteners. Ask for coastal-rated metals during [roof replacement](/roofing-services/roof-replacement/)." },
    ],
    popularServices: ["roof-replacement", "wind-damage-roof-repair", "roof-insurance-claims", "flashing-chimney-repair", "roof-inspection"],
    nearby: ["pearland", "galveston", "pasadena"],
    storm:
      "Galveston County is entirely within the designated windstorm area, and TWIA is a common wind insurer here. Keep the windstorm certificate with your home records.",
    permits:
      "The City of League City requires permits for re-roofing inside city limits, along with windstorm inspection for TWIA eligibility.",
    faqs: [
      { q: "Do I need a windstorm inspection in League City?", a: "If you want or have TWIA coverage, yes. The contractor arranges the inspection so you receive a certificate of compliance." },
      { q: "Are roofs from the Ike rebuild due for replacement?", a: "Many are. Roofs from 2008 and 2009 are past the typical 15 to 20 years shingles last here, so an inspection is a good idea." },
    ],
    updated: U,
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    stateSlug: "texas",
    county: "Harris",
    region: "southeast",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77502", "77503", "77504", "77505", "77506"],
    areas: ["Golden Acres", "Parkview Manor", "Red Bluff", "Pasadena Gardens", "Bay Area Boulevard area", "Burnett Bayland"],
    intro:
      "Pasadena grew alongside the refineries and plants of the Houston Ship Channel, and most of its homes are brick ranches built from the 1950s through the 1970s. Neighborhoods south toward the Bay Area include newer homes from the 1980s and 1990s.",
    housingNotes:
      "Postwar ranches often have original wood plank decking, low-slope additions and carports tied into the main roof. Many are on their third or fourth roof, and some still have multiple layers of shingles that should come off at replacement.",
    localIssues: [
      { title: "Multiple shingle layers", body: "Older Pasadena ranches sometimes have two layers of shingles. A full tear-off exposes plank decking that may need repair or new sheathing before the new roof goes on." },
      { title: "Carports and additions", body: "Low-slope carports and back additions on 1950s and 60s homes often leak where they meet the main roof. They usually need a membrane, not shingles. See [flat roof repair](/roofing-services/flat-roof-repair/)." },
      { title: "Industrial air", body: "Homes near the Ship Channel can see faster wear of metal components and staining on roofs. Inspecting flashing and vents during regular maintenance catches corrosion early." },
    ],
    popularServices: ["roof-replacement", "flat-roof-repair", "roof-repair", "fascia-soffit-repair", "roof-leak-repair"],
    nearby: ["houston", "baytown", "league-city", "pearland"],
    storm:
      "Most of Pasadena is west of State Highway 146, generally outside the designated windstorm area, while nearby La Porte and Seabrook are inside it. Confirm your address with your insurer.",
    permits:
      "The City of Pasadena issues building permits for roofing work inside city limits.",
    faqs: [
      { q: "Should both layers of old shingles come off?", a: "Yes. A full tear-off lets the roofer inspect and repair the decking, and most manufacturers' warranties expect it." },
      { q: "Is Pasadena in the windstorm area?", a: "Generally not, since most of it is west of Highway 146. Addresses near the bay should confirm." },
    ],
    updated: U,
  },
  {
    slug: "baytown",
    name: "Baytown",
    stateSlug: "texas",
    county: "Harris",
    region: "southeast",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77520", "77521", "77523"],
    areas: ["Lakewood", "Country Club Oaks", "Goose Creek", "Chaparral Village", "San Jacinto Mall area", "Eastpoint"],
    intro:
      "Baytown grew around the refinery that opened on Goose Creek in the 1910s, and its older neighborhoods hold homes from the 1940s through the 1970s. Newer subdivisions spread east into Chambers County toward Mont Belvieu. The city sits on Galveston Bay and the Houston Ship Channel.",
    housingNotes:
      "Older homes near Goose Creek and Lakewood have plank decking and decades of re-roofs, while east-side subdivisions are mostly built since the 1990s. Bay exposure brings stronger wind and salt air to waterfront neighborhoods.",
    localIssues: [
      { title: "Split windstorm line", body: "State Highway 146 runs through Baytown, and the part of Harris County east of it is in the designated windstorm area, as is all of Chambers County. Whether your roof needs a windstorm inspection depends on which side you're on." },
      { title: "Hurricane history", body: "Hurricane Alicia in 1983 and Ike in 2008 caused heavy damage in Baytown. Roofs replaced after Ike are now aging out, and coastal exposure shortens shingle life near the bay." },
      { title: "Corrosion near the water", body: "Salt air and industrial exposure corrode drip edge, vents and fasteners. Coastal-rated metals and stainless nails are worth requesting on a [roof replacement](/roofing-services/roof-replacement/)." },
    ],
    popularServices: ["wind-damage-roof-repair", "roof-replacement", "roof-insurance-claims", "roof-repair", "metal-roofing"],
    nearby: ["pasadena", "humble", "league-city"],
    storm:
      "Neighborhoods east of State Highway 146 and in Chambers County are in the designated windstorm area. Waterfront homes face the highest wind exposure in the area.",
    permits:
      "The City of Baytown requires building permits for roofing inside city limits, plus windstorm inspection where it applies.",
    faqs: [
      { q: "Is my Baytown home in the windstorm area?", a: "If it's east of State Highway 146 or in Chambers County, generally yes. Confirm with your insurer before work starts." },
      { q: "What roofing holds up best near the bay?", a: "Correctly nailed high-wind or Class 4 shingles, or standing seam metal with coastal-rated finishes and stainless fasteners." },
    ],
    updated: U,
  },
  {
    slug: "galveston",
    name: "Galveston",
    stateSlug: "texas",
    county: "Galveston",
    region: "southeast",
    status: "PUBLISHED",
    officeAddress: null,
    zips: ["77550", "77551", "77554"],
    areas: ["East End Historic District", "Silk Stocking", "Lasker Park", "Fort Crockett", "West End", "Pirates Beach", "Jamaica Beach area"],
    intro:
      "Galveston Island has some of the oldest housing in Texas, including Victorian homes in the East End and Silk Stocking historic districts, next to raised beach houses on pilings along the West End. Every roof on the island faces Gulf winds, salt spray and hurricane season.",
    housingNotes:
      "Historic homes have steep, complex roofs with dormers and turrets, sometimes with original wood decking. West End beach houses stand on pilings with full wind exposure on every side. Many island roofs were replaced after Hurricane Ike in 2008.",
    localIssues: [
      { title: "Historic district review", body: "Exterior changes in Galveston's historic districts, including roofing material, can require Landmark Commission approval. Plan for that before ordering material." },
      { title: "Salt and wind", body: "Salt spray corrodes standard steel flashing and fasteners fast. Aluminum, stainless or coastal-rated [metal roofing](/roofing-services/metal-roofing/) and high-wind shingle installation hold up longer." },
      { title: "Ike-era roofs", body: "Roofs installed after Ike in 2008 are now well past typical Gulf Coast shingle life. Pre-season inspections catch lifted edges before the next storm." },
    ],
    popularServices: ["wind-damage-roof-repair", "metal-roofing", "roof-replacement", "roof-inspection", "emergency-roof-repair"],
    nearby: ["league-city", "pearland"],
    storm:
      "The entire island is in the designated windstorm area, and most homes carry TWIA wind coverage. Every re-roof should end with a windstorm certificate of compliance.",
    permits:
      "The City of Galveston requires building permits for roofing, plus historic district review where it applies and windstorm inspection for TWIA eligibility.",
    faqs: [
      { q: "Do Galveston roofs need a windstorm certificate?", a: "For TWIA coverage, yes. The work is inspected during and after installation, and you keep the certificate with your home records." },
      { q: "Can I put a metal roof on a historic Galveston home?", a: "Possibly, with approval. Historic district review considers the material and style, so check before you commit." },
    ],
    updated: U,
  },
];

export const cities: City[] = [...core, ...citiesMore].map((c) => ({ ...c, localIssues: [...c.localIssues, ...(extraIssues[c.slug] ?? [])] }));
export const publishedCities = cities.filter((c) => c.status === "PUBLISHED");

export function getState(slug: string) {
  return states.find((s) => s.slug === slug);
}
export function getCity(stateSlug: string, slug: string) {
  return cities.find((c) => c.stateSlug === stateSlug && c.slug === slug);
}
export function cityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}
export function cityLabel(c: City) {
  const st = states.find((s) => s.slug === c.stateSlug);
  return `${c.name}, ${st?.abbr ?? ""}`;
}

export const cityServices: CityService[] = [
  {
    citySlug: "katy",
    serviceSlug: "hail-damage-roof-repair",
    status: "PUBLISHED",
    h1: "Hail damage roof repair in Katy",
    seoTitle: "Hail Damage Roof Repair in Katy, TX",
    metaDescription:
      "Hail damage on Katy roofs: inspections after spring storms, insurance claims, HOA approval and upgrading to Class 4 shingles.",
    answer:
      "Katy sits in the path of spring storms moving in from the west, and hail claims here are common. A roofer inspects test squares on each slope and the soft metals, documents the damage for your insurer, and quotes repair or replacement with HOA-approved shingles.",
    localAngle: [
      "Cinco Ranch, Grand Lakes, Seven Meadows and newer communities toward Fulshear have thousands of similar two-story roofs, so a single hailstorm can mean dozens of claims on one street. Contractors who work Katy regularly know the HOA approval process and approved colors, which keeps a claim from stalling after approval.",
      "Many owners upgrade to Class 4 impact-resistant shingles when the claim pays for a replacement, paying the difference and then applying for their insurer's discount. After a storm, photograph dented gutters, vents and AC fins, note the date, and get an inspection before filing so you know whether the damage is functional.",
    ],
    localFaqs: [
      { q: "How do I know if a Katy hailstorm damaged my roof?", a: "Look for dents in gutters, downspouts and vent caps, and granules at the downspouts. A roofer confirms it by counting hits in test squares on each slope." },
    ],
    updated: U,
  },
  {
    citySlug: "galveston",
    serviceSlug: "wind-damage-roof-repair",
    status: "PUBLISHED",
    h1: "Hurricane and wind damage roof repair in Galveston",
    seoTitle: "Hurricane Roof Repair in Galveston, TX",
    metaDescription:
      "Hurricane and wind damage roof repair on Galveston Island: tarping, windstorm certification for TWIA, historic districts and salt-air materials.",
    answer:
      "On Galveston Island, wind damage repairs have to be built to windstorm code and inspected so the home stays eligible for TWIA coverage. After a storm, the priority is tarping openings, documenting damage, and then repairing with coastal-rated materials.",
    localAngle: [
      "Every Galveston roof is in the state's designated windstorm area. Repairs and replacements are inspected for nailing, underlayment and edge details, and the homeowner receives a certificate of compliance. Without it, TWIA coverage can be at risk, so ask the contractor how inspections are scheduled before work begins.",
      "Historic homes in the East End and Silk Stocking districts may need Landmark Commission review for visible changes, and raised West End houses take wind on every side. Salt air quickly corrodes plain steel, so drip edge, flashing and fasteners should be aluminum, stainless or coastal-rated.",
    ],
    localFaqs: [
      { q: "How fast can a Galveston roof be tarped after a hurricane?", a: "It depends on demand after the storm. Request service as soon as it's safe, and document damage with photos while you wait." },
    ],
    updated: U,
  },
  {
    citySlug: "spring",
    serviceSlug: "storm-damage-roof-repair",
    status: "PUBLISHED",
    h1: "Storm and tree damage roof repair in Spring and The Woodlands",
    seoTitle: "Storm & Tree Damage Roof Repair, Spring TX",
    metaDescription:
      "Roof repair after storms and falling pines in Spring and The Woodlands: tarping, tree coordination, insurance documentation and community approval.",
    answer:
      "In Spring and The Woodlands, storm damage usually means trees. Tall pines snap or uproot in tropical storms and severe thunderstorms and land on roofs. A roofer coordinates with the tree service, tarps the opening, documents the damage and rebuilds decking, rafters and shingles.",
    localAngle: [
      "Hurricane Beryl in July 2024 brought down pines across north Harris and Montgomery counties, and many homes waited days for tree removal before roofers could tarp. When a tree is on the roof, stay out of the rooms below, keep clear of downed lines, and let the tree crew remove the weight before roofers assess structural damage.",
      "Insurance generally covers damage from a tree felled by a covered storm, including removal from the structure. Photograph everything before cleanup. Repairs in The Woodlands and many Spring neighborhoods need community approval if material or color changes, which a local contractor can submit with the claim paperwork.",
    ],
    localFaqs: [
      { q: "Who removes a tree from my roof, the roofer or a tree service?", a: "A tree service removes the tree; the roofer then tarps and repairs. Many roofers can coordinate both visits." },
    ],
    updated: U,
  },
];

export const publishedCityServices = cityServices.filter((cs) => cs.status === "PUBLISHED");
