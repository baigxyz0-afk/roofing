import type { Category, Service } from "./types";
import { servicesMore } from "./servicesMore";
import { SERVICE_PARENT, childrenOf } from "./serviceTree";

export const categories: Category[] = [
  { slug: "repair", name: "Roof Repair", blurb: "Leaks, missing shingles, ice dams and emergency tarping.", icon: "wrench" },
  { slug: "storm", name: "Storm & Insurance", blurb: "Hail, hurricane and wind damage, and documenting a claim.", icon: "storm" },
  { slug: "replacement", name: "Roof Replacement", blurb: "Full re-roofs in asphalt, impact-resistant, metal or tile.", icon: "layers" },
  { slug: "flat", name: "Flat & Low-Slope Roofs", blurb: "Membranes and coatings for porches, additions and flat sections.", icon: "flat" },
  { slug: "inspection", name: "Inspections & Maintenance", blurb: "Inspections for buyers, sellers, insurers and storm season.", icon: "ladder" },
  { slug: "components", name: "Vents, Flashing & Skylights", blurb: "The details where most roof leaks actually start.", icon: "vent" },
];

const U = "2026-10-05";

const core: Service[] = [
  {
    slug: "roof-repair",
    name: "Roof Repair",
    shortName: "Roof repair",
    category: "repair",
    status: "PUBLISHED",
    seoTitle: "Roof Repair: Causes, Process & Cost Factors",
    metaDescription:
      "Roof repair explained: missing shingles, failed pipe boots, flashing, soft decking and ice-dam damage. What a roofer checks, and how to get one near you.",
    h1: "Roof repair",
    answer:
      "Most residential roof repairs are specific and small: replacing shingles that blew off, resealing or replacing flashing, swapping a cracked pipe boot, or cutting out a soft section of decking. A roofer inspects the whole roof and the attic first, names the cause and quotes the repair before starting.",
    intro: [
      "What breaks a roof depends on where you live. Wind and hail lift and bruise shingles across the Plains and the South, hurricanes strip roof edges along the Gulf and Atlantic coasts, ice dams force water under shingles in the Northeast and Upper Midwest, and intense sun dries out shingles and underlayment across the Southwest.",
      "A good repair fixes the cause, not just the spot where water appeared. Water runs along decking and rafters before it drips, so a ceiling stain in a hallway can start at a pipe boot or flashing joint several feet uphill. Expect the roofer to check the attic as well as the roof.",
    ],
    signs: [
      "Shingles, tabs or ridge caps on the ground after wind",
      "Ceiling stains that grow after rain or snowmelt",
      "Granules collecting at downspout outlets",
      "Cracked rubber boots around plumbing vent pipes",
      "Daylight visible through the roof deck from the attic",
    ],
    process: [
      { title: "Inspect", body: "The roofer checks the field of the roof, valleys, flashing, vents and the attic underside to trace the source." },
      { title: "Document and quote", body: "You get photos and a written price, plus an honest note if the roof's age or damage makes replacement worth comparing." },
      { title: "Repair", body: "Damaged shingles, boots, flashing or decking are replaced with matching or compatible materials and sealed to the manufacturer's instructions." },
      { title: "Verify", body: "Nails and debris are cleaned up and the finished repair is photographed so you have a record." },
    ],
    costFactors: [
      "How many shingles or squares are involved",
      "Whether matching shingles are still made for an older roof",
      "Decking replacement where water has softened the plywood",
      "Roof pitch, height and access",
      "Emergency or after-hours visits during storm season",
    ],
    diy: {
      safe: ["Photograph damage from the ground with a zoom lens", "Collect shingles and debris from the yard", "Put buckets under drips and move belongings", "Check the attic with a flashlight for wet decking or insulation"],
      stop: ["Walking on a wet, icy, steep or storm-damaged roof", "Using roofing cement over shingles as a permanent fix", "Chipping ice off a roof with tools"],
    },
    faqs: [
      { q: "Can a few missing shingles be repaired, or do I need a new roof?", a: "A few missing shingles on a roof in good condition can usually be repaired. If the roof is near the end of its life, the shingles are brittle, or damage is spread across slopes, replacement is often better value." },
      { q: "Why does my roof only leak in wind-driven rain?", a: "Wind pushes water sideways under lifted shingles, flashing and vent boots that stay dry in a straight-down rain. That pattern usually points to flashing, a lifted shingle edge or a failed boot." },
      { q: "Will a repair match my existing shingles?", a: "Often closely, but not perfectly. Sun fades shingles and some colors are discontinued. Ask the roofer to show you the closest available match first." },
    ],
    related: ["roof-replacement", "flashing-chimney-repair", "roof-inspection", "storm-damage-roof-repair"],
    isEmergencyCapable: true,
    glance: [
      { term: "Most common fixes", detail: "Wind-lifted shingles, failed pipe boots and flashing" },
      { term: "Regional causes", detail: "Hail and wind (Plains, South), hurricanes (coasts), ice dams (North), UV (Southwest)" },
      { term: "Check first", detail: "Attic underside, ceilings and the yard after a storm" },
      { term: "Typical visit", detail: "Inspection and quote, often with small repairs the same visit" },
    ],
    updated: U,
  },
  {
    slug: "roof-leak-repair",
    name: "Roof Leak Repair",
    shortName: "Leak repair",
    category: "repair",
    status: "PUBLISHED",
    seoTitle: "Roof Leak Repair: Finding and Fixing the Source",
    metaDescription:
      "How roof leaks are traced and fixed: pipe boots, valleys, wall and chimney flashing, skylights and wind-driven rain. What to do before the roofer arrives.",
    h1: "Roof leak detection and repair",
    answer:
      "Most roof leaks come from penetrations and transitions, not open shingles: pipe boots, valley flashing, wall and chimney flashing, skylights and vents. A roofer traces water from the stain back up the decking to its entry point, then repairs that detail.",
    intro: [
      "Neoprene pipe boots are among the most common leak sources nationwide. The rubber collar dries and cracks in the sun, often years before the shingles wear out, and faster in hot, high-UV climates. Valleys packed with leaves and needles are next on the list.",
      "Some leaks only appear in specific conditions: wind-driven rain on the coasts, ice dams during freeze-thaw cycles in snowy states, or monsoon downpours in the desert Southwest. Noting when the leak shows up helps the roofer find it faster.",
    ],
    signs: [
      "A ceiling stain with a darker ring that grows after storms",
      "Drips from a light fixture or vent grille",
      "Musty smell or mold spots in an upstairs closet",
      "Wet or compressed insulation in the attic",
      "Peeling paint or swelling drywall near an exterior wall",
    ],
    process: [
      { title: "Trace", body: "The roofer inspects the attic for water trails, then the roof above that area, checking boots, flashing, valleys and fasteners." },
      { title: "Test if needed", body: "For hard-to-find leaks, a controlled water test on one section at a time isolates the entry point." },
      { title: "Repair", body: "The failed detail is rebuilt: a new boot, re-flashed wall, cleared and resealed valley, or replaced shingles and underlayment." },
      { title: "Check the damage", body: "Wet decking is replaced, and you're told whether insulation or drywall inside needs drying or replacing." },
    ],
    costFactors: [
      "How hard the leak is to trace",
      "The detail involved (a pipe boot costs less than a chimney re-flash)",
      "Rotted decking or fascia found during the repair",
      "Roof height and pitch",
      "Interior repairs, which are usually separate from the roofing work",
    ],
    diy: {
      safe: ["Catch drips; poke a small hole in a bulging ceiling to drain it into a bucket", "Move furniture and electronics", "Mark the stain edge to see if it grows", "Note wind direction, rainfall or snowmelt when it leaks"],
      stop: ["Climbing onto the roof during or right after rain or snow", "Caulking over shingles or flashing blindly", "Ignoring water near electrical fixtures (switch off that circuit)"],
    },
    faqs: [
      { q: "How do I find where my roof is leaking?", a: "Start in the attic during or after rain with a flashlight. Water usually enters higher up the slope than the stain, following rafters or decking. A roofer can trace it from there." },
      { q: "Is a roof leak covered by homeowners insurance?", a: "Sudden damage from a covered event, such as a storm, often is. Leaks from wear and age usually aren't. Document the damage and the date, and read your policy's roof provisions." },
      { q: "Can a leak wait until the next dry week?", a: "A slow drip can wait a few days if you catch the water and the roof can be tarped. Active leaks near wiring, sagging ceilings or repeated storms need prompt attention." },
    ],
    related: ["roof-repair", "flashing-chimney-repair", "skylight-repair", "ice-dam-removal"],
    isEmergencyCapable: true,
    glance: [
      { term: "Most common source", detail: "Cracked neoprene pipe boots" },
      { term: "Also check", detail: "Valleys, wall flashing, skylights and vents" },
      { term: "Leaks appear", detail: "Downhill of where water enters" },
      { term: "Seasonal pattern", detail: "Wind-driven rain, ice dams or monsoon storms, by region" },
    ],
    updated: U,
  },
  {
    slug: "emergency-roof-repair",
    name: "Emergency Roof Repair & Tarping",
    shortName: "Emergency tarping",
    category: "repair",
    status: "PUBLISHED",
    seoTitle: "Emergency Roof Repair & Tarping: What to Do Now",
    metaDescription:
      "Roof leaking, torn open or hit by a tree? What to do right now, how emergency tarping works, insurance documentation, and how to reach a roofer.",
    h1: "Emergency roof repair and tarping",
    answer:
      "An emergency roof visit stops water from getting in: the roofer secures a tarp over the damaged area, battens it down so wind can't peel it off, and photographs the damage for your insurance claim. Permanent repairs follow once the weather and the claim allow.",
    intro: [
      "After a hurricane, derecho, tornado, heavy snow load or a fallen tree, the first job is keeping the next rain out. A properly installed tarp runs over the ridge, is fastened with wood battens rather than nails through the plastic, and can protect a roof for weeks while a claim is processed.",
      "Safety comes first: stay off a damaged roof, keep away from downed power lines, and stay out of rooms beneath a tree resting on the structure. After large regional storms, demand for tarping spikes, so request help as soon as it's safe.",
    ],
    signs: [
      "A tree or large limb on the roof",
      "Sections of shingles or decking torn away",
      "Water actively coming through a ceiling",
      "Daylight through the roof deck",
      "A sagging ceiling holding water",
    ],
    process: [
      { title: "Make it safe", body: "The roofer checks for structural damage and downed lines, and coordinates with a tree service when a trunk is on the roof." },
      { title: "Document", body: "Photos and measurements of the damage are taken before anything is covered." },
      { title: "Tarp and seal", body: "A heavy tarp is run over the ridge and secured with battens, or holes are temporarily decked and sealed." },
      { title: "Plan the repair", body: "You get a scope for the permanent repair or replacement to share with your insurance adjuster." },
    ],
    costFactors: [
      "Size of the area to cover",
      "Whether temporary decking is needed under the tarp",
      "Roof height and pitch",
      "Tree removal (usually a separate company)",
      "Demand immediately after a regional storm",
    ],
    faqs: [
      { q: "Does homeowners insurance pay for emergency tarping?", a: "Most policies expect you to take reasonable steps to prevent further damage, and that cost is often reimbursed as part of a covered claim. Keep the invoice and photos." },
      { q: "How long can a tarp stay on a roof?", a: "A well-secured tarp typically lasts several weeks to a few months. Sun breaks the plastic down, so plan the permanent repair as soon as your claim allows." },
      { q: "Should I tarp the roof myself?", a: "Not after a storm. Wet or icy shingles, debris, damaged decking and power lines make it dangerous. Only cover small, low areas from a ladder, and only if you're comfortable doing it." },
    ],
    related: ["roof-leak-repair", "storm-damage-roof-repair", "wind-damage-roof-repair", "roof-insurance-claims"],
    isEmergencyCapable: true,
    glance: [
      { term: "First priority", detail: "Stop water entry and stay safe" },
      { term: "Tarp method", detail: "Over the ridge, secured with wood battens" },
      { term: "Before covering", detail: "Photograph and measure the damage" },
      { term: "Lasts", detail: "Weeks to a few months while the claim is handled" },
    ],
    updated: U,
  },
  {
    slug: "storm-damage-roof-repair",
    name: "Storm Damage Roof Repair",
    shortName: "Storm damage",
    category: "storm",
    status: "PUBLISHED",
    seoTitle: "Storm Damage Roof Repair & Inspection",
    metaDescription:
      "Roof inspection and repair after hail, hurricanes, derechos, tornadoes and fallen trees: what roofers check, documentation for insurance, and red flags.",
    h1: "Storm damage roof repair",
    answer:
      "After a storm, a roofer checks for hail bruising, creased or missing shingles, lifted flashing, damaged vents and impact from limbs, then documents it with dated photos. Minor damage is repaired; widespread damage on a covered loss usually means a claim and a full replacement.",
    intro: [
      "Storm risk varies by region: hail across the Great Plains and Front Range (the area often called Hail Alley), hurricanes and tropical storms from Texas to New England, derechos and tornadoes across the Midwest and South, and nor'easters and heavy snow in the Northeast. Each leaves different damage, and much of it isn't visible from the ground.",
      "Insurance policies set deadlines for reporting damage, so an inspection soon after the storm matters even if nothing leaks yet. Be cautious with out-of-town crews who go door to door after big storms: ask for a local address and proof of insurance, and never sign on the spot.",
    ],
    signs: [
      "Neighbors getting roofs replaced after the same storm",
      "Dented gutters, vents or a dinged mailbox",
      "Shingles creased, folded back or missing",
      "Limbs or debris on the roof",
      "New leaks after the storm",
    ],
    process: [
      { title: "Inspect", body: "A full inspection of every slope, the soft metals (vents, gutters, flashing) and the attic, with dated photos." },
      { title: "Report", body: "You receive a written summary separating storm damage from normal wear." },
      { title: "Claim support", body: "If you file, the contractor can meet the adjuster on the roof and provide a repair scope. Negotiating the claim is between you, your insurer and, if you hire one, a licensed public adjuster." },
      { title: "Repair or replace", body: "Work follows the approved scope, with supplements documented if hidden damage turns up." },
    ],
    costFactors: [
      "Extent of damage across slopes",
      "Your deductible (often a percentage of dwelling coverage for wind, hail or hurricanes)",
      "Code-required upgrades such as drip edge, ice barrier or new decking",
      "Coastal or high-wind inspection requirements in some states",
      "Gutters, screens and siding damaged in the same storm",
    ],
    faqs: [
      { q: "How soon after a storm should my roof be inspected?", a: "Within days or a few weeks. Damage can worsen with the next rain, and policies require prompt notice. Check your policy for the filing deadline." },
      { q: "Can a roofer pay or waive my insurance deductible?", a: "No. Paying the deductible is your obligation under the policy, and several states, including Texas, Colorado and Minnesota, specifically prohibit contractors from waiving or rebating it." },
      { q: "A roofer knocked on my door after the storm. Should I sign?", a: "Don't sign anything on the spot. Get the company's local address and insurance certificate, read the contract, and compare at least one other inspection." },
    ],
    related: ["emergency-roof-repair", "roof-replacement", "roof-inspection", "roof-repair"],
    isEmergencyCapable: true,
    glance: [
      { term: "Storm types", detail: "Hail, hurricanes, derechos, tornadoes, nor'easters and snow load" },
      { term: "Inspect within", detail: "Days to a few weeks of the storm" },
      { term: "Deductible", detail: "Paid by you; waivers are illegal in several states" },
      { term: "Keep", detail: "Dated photos, the storm date and every invoice" },
    ],
    updated: U,
  },
  {
    slug: "hail-damage-roof-repair",
    name: "Hail Damage Roof Repair",
    shortName: "Hail damage",
    category: "storm",
    status: "PUBLISHED",
    seoTitle: "Hail Damage Roof Inspection & Repair",
    metaDescription:
      "How roofers identify hail damage (bruised shingles, granule loss, dented metal), how test squares work for insurance, and when hail means a new roof.",
    h1: "Hail damage roof inspection and repair",
    answer:
      "Hail damages asphalt shingles by bruising the mat and knocking off granules, which shortens the roof's life even when nothing leaks. A roofer checks test squares on each slope, the soft metals and the ridge to judge whether damage is isolated or widespread enough for replacement.",
    intro: [
      "Hail is most frequent in the central United States: Texas, Oklahoma, Kansas, Nebraska, Colorado, South Dakota and Minnesota see the most hail claims, but damaging hail reaches nearly every state. The damage is easy to miss from the ground and often turns into leaks a year or two later.",
      "Insurance adjusters look for functional damage: fractured mats, exposed asphalt and punctures, typically counted within a 10-by-10-foot test square on each slope. Dented gutters, vent caps and AC fins help confirm hail size and direction.",
    ],
    signs: [
      "Dark spots where granules were knocked off",
      "Dents in gutters, downspouts, AC fins or metal vents",
      "Granules piling at downspout outlets",
      "Cracked or split shingles on the windward side",
      "Damaged patio furniture, cars or window screens",
    ],
    process: [
      { title: "Check collateral damage", body: "Gutters, vents, screens and AC units show hail size and direction before anyone goes up." },
      { title: "Test squares", body: "The roofer marks and counts hits within a test square on each slope and photographs them with chalk circles." },
      { title: "Assess", body: "They judge whether the damage is cosmetic or functional, and whether repair or replacement fits." },
      { title: "Repair or replace", body: "Isolated hits can be repaired; widespread damage usually means replacing the roof under the claim." },
    ],
    costFactors: [
      "Number of damaged slopes",
      "Shingle availability and matching",
      "Upgrading to Class 4 impact-resistant shingles",
      "Soft metal replacement (vents, gutters, flashing)",
      "Your wind and hail deductible",
    ],
    faqs: [
      { q: "What size hail damages a roof?", a: "Hail around one inch and larger can bruise standard asphalt shingles, especially older ones. Wind-driven hail does more damage than hail falling straight down." },
      { q: "Does filing a hail claim raise my premium?", a: "Rules vary by state and insurer. Many treat weather claims differently from other claims; ask your agent before filing if you're unsure." },
      { q: "Should I upgrade to impact-resistant shingles?", a: "Often, in hail-prone states. Many insurers in states such as Texas, Oklahoma, Kansas, Colorado and Minnesota offer premium discounts for Class 4 roofs." },
    ],
    related: ["impact-resistant-shingles", "roof-insurance-claims", "roof-inspection", "roof-replacement"],
    isEmergencyCapable: false,
    glance: [
      { term: "Damage type", detail: "Bruised mats and granule loss" },
      { term: "Measured by", detail: "Hits in a test square on each slope" },
      { term: "Confirm with", detail: "Dents in gutters, vents and AC fins" },
      { term: "Highest risk", detail: "Central Plains, Front Range and Upper Midwest" },
    ],
    updated: U,
  },
  {
    slug: "wind-damage-roof-repair",
    name: "Hurricane & Wind Damage Repair",
    shortName: "Wind damage",
    category: "storm",
    status: "PUBLISHED",
    seoTitle: "Hurricane & Wind Damage Roof Repair",
    metaDescription:
      "Roof repair after hurricanes, tropical storms, derechos and high winds: blown-off shingles, lifted decking, edge failures and coastal building requirements.",
    h1: "Hurricane and wind damage roof repair",
    answer:
      "Wind damages roofs from the edges in: it lifts shingle tabs, breaks the seal strips, peels ridge caps and can pull decking at the eaves and gables. Repair means replacing what blew off, re-sealing lifted shingles and, in coastal high-wind zones, meeting stricter code and inspection requirements.",
    intro: [
      "Hurricanes threaten the Gulf and Atlantic coasts from Texas to New England each season from June through November, while derechos, tornadoes and downslope winds damage roofs far inland. Even a Category 1 storm can strip shingles and drop trees across a whole metro area.",
      "Wind-rated shingles depend on correct installation: the right number of nails in the manufacturer's nailing zone, plus starter strips at the eaves and rakes. Coastal states add rules: Florida's building code is among the strictest, and Texas requires windstorm inspections in designated coastal areas for state wind-pool coverage.",
    ],
    signs: [
      "Missing shingles, especially at edges, ridges and rakes",
      "Shingle tabs folded back or creased",
      "Ridge caps lifted or missing",
      "Exposed underlayment or decking",
      "Soffit or fascia pulled loose",
    ],
    process: [
      { title: "Secure", body: "Exposed areas are tarped or temporarily sealed so rain can't get in." },
      { title: "Assess", body: "The roofer checks seal strips across the roof, not just the missing pieces, and photographs creased shingles." },
      { title: "Repair to code", body: "Shingles are replaced with correct nailing and starter courses, including any coastal inspection your state requires." },
      { title: "Document", body: "You receive photos and the completed scope for your insurance file." },
    ],
    costFactors: [
      "How much of the roof lost its seal",
      "Decking or soffit damage",
      "Coastal code and inspection requirements",
      "Shingle matching on a partial repair",
      "Demand after a regional storm",
    ],
    faqs: [
      { q: "Can wind damage be repaired, or does it need a new roof?", a: "A few missing shingles can be repaired. If seal strips have failed across the roof, or the shingles are old and brittle, replacement may be the better option." },
      { q: "What is a FORTIFIED roof?", a: "FORTIFIED is a construction standard from the Insurance Institute for Business & Home Safety for roofs built to resist high wind and water intrusion. Some states and insurers offer grants or discounts for it, including Alabama's Strengthen Alabama Homes program." },
      { q: "How fast should I act after a hurricane?", a: "Cover openings right away, then schedule an inspection and notify your insurer as soon as possible. Policies require prompt notice." },
    ],
    related: ["emergency-roof-repair", "storm-damage-roof-repair", "fascia-soffit-repair", "metal-roofing"],
    isEmergencyCapable: true,
    glance: [
      { term: "Fails first", detail: "Eaves, rakes and ridge caps" },
      { term: "Hurricane season", detail: "June 1 through November 30" },
      { term: "Key detail", detail: "Correct nailing and starter strips" },
      { term: "Stronger option", detail: "IBHS FORTIFIED Roof construction" },
    ],
    updated: U,
  },
  {
    slug: "roof-insurance-claims",
    name: "Roof Insurance Claim Inspections",
    shortName: "Insurance claims",
    category: "storm",
    status: "PUBLISHED",
    seoTitle: "Roof Insurance Claims: Inspections & How They Work",
    metaDescription:
      "How roof insurance claims work: inspection, filing, meeting the adjuster, deductibles, depreciation, supplements and what a roofer can and can't do.",
    h1: "Roof insurance claim inspections",
    answer:
      "A roofer's job in an insurance claim is to document the damage, meet the adjuster on the roof, and provide a repair or replacement scope. You file the claim and deal with your insurer, or hire a licensed public adjuster; in most states a contractor isn't allowed to negotiate the claim for you.",
    intro: [
      "Many storm-related roof replacements are paid through homeowners insurance, and the process goes better with good documentation: dated photos, the storm date, measurements and a clear scope. A thorough inspection before you call your insurer helps you decide whether a claim is worth filing.",
      "Watch the deductible. Policies in hail and hurricane states often carry a separate wind, hail or named-storm deductible set as a percentage of dwelling coverage, which can be several thousand dollars. Several states expressly prohibit contractors from waiving or rebating it.",
    ],
    signs: [
      "A named storm or hail event passed over your area",
      "Visible missing or damaged shingles",
      "Leaks that started after a specific storm",
      "Neighbors with approved claims",
      "An insurer requesting a roof inspection or condition report",
    ],
    process: [
      { title: "Pre-claim inspection", body: "The roofer inspects and photographs the roof and tells you plainly whether the damage looks storm-related." },
      { title: "File", body: "You report the claim to your insurer with the storm date and photos." },
      { title: "Adjuster meeting", body: "The contractor can be present when the adjuster inspects, pointing out damage and measurements." },
      { title: "Scope and supplements", body: "Work follows the approved scope; hidden damage found during the job is documented and submitted as a supplement." },
    ],
    costFactors: [
      "Your deductible and policy type (replacement cost vs. actual cash value)",
      "Depreciation withheld until work is complete",
      "Code upgrades and whether your policy covers them",
      "Items outside the roof scope, such as interior repairs",
      "Upgrades you choose beyond the approved scope",
    ],
    faqs: [
      { q: "What's the difference between replacement cost and actual cash value?", a: "A replacement-cost policy pays to replace the roof, usually releasing withheld depreciation after the work is done. An actual-cash-value policy pays the depreciated value, so an older roof may pay out much less." },
      { q: "What if my claim is denied?", a: "Ask for the denial in writing with the reasons, request a re-inspection if you have new evidence, or consult a licensed public adjuster or attorney. Your state insurance department can also explain your options." },
      { q: "Can a roofer talk to my insurance company?", a: "A roofer can discuss the scope and meet the adjuster, but negotiating the claim on your behalf is generally limited to you, an attorney or a licensed public adjuster." },
    ],
    related: ["hail-damage-roof-repair", "wind-damage-roof-repair", "roof-inspection", "roof-replacement"],
    isEmergencyCapable: false,
    glance: [
      { term: "Who files", detail: "The homeowner" },
      { term: "Contractor's role", detail: "Document, meet the adjuster, provide a scope" },
      { term: "Deductible", detail: "Often a percentage for wind, hail or named storms" },
      { term: "Get help from", detail: "Your state insurance department or a licensed public adjuster" },
    ],
    updated: U,
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    shortName: "Roof replacement",
    category: "replacement",
    status: "PUBLISHED",
    seoTitle: "Roof Replacement: Process, Materials & Cost Factors",
    metaDescription:
      "What a full roof replacement includes: tear-off, decking, underlayment, ice barrier, flashing and ventilation, plus asphalt, Class 4, metal and tile options.",
    h1: "Roof replacement",
    answer:
      "A roof replacement tears off the old roofing down to the deck, replaces damaged decking, installs new underlayment, drip edge, flashing and vents, and then the new roof covering. Most single-family homes are re-roofed in one to three days, depending on size, material and weather.",
    intro: [
      "How long a roof lasts depends heavily on climate. Asphalt shingles age fastest under intense sun and heat in the South and Southwest, while freeze-thaw cycles, ice dams and snow load wear roofs in the North. Hail and hurricane exposure can end a roof's life early anywhere.",
      "The parts you don't see matter as much as the shingle. In cold-climate states, building codes require an ice barrier membrane along the eaves. Everywhere, ask what underlayment, drip edge, pipe boots, flashing and ventilation are included so quotes are comparable.",
    ],
    signs: [
      "Roof is 15 to 20 or more years old",
      "Curling, cupping or cracked shingles",
      "Bald patches with heavy granule loss",
      "Repeated leaks in different places",
      "Sagging lines along the roof deck",
    ],
    process: [
      { title: "Inspect and measure", body: "The roofer measures every slope, checks the attic and ventilation, and notes decking condition." },
      { title: "Written options", body: "You get a scope listing roofing material, underlayment, ice barrier, flashing, vents and warranty, plus any HOA or historic-district approvals needed." },
      { title: "Tear-off and install", body: "Old roofing is removed, decking repaired, and the new system installed to the manufacturer's specification and local code." },
      { title: "Clean-up and closeout", body: "Magnetic sweeps pick up nails, and you receive photos, warranty registration and any permit paperwork." },
    ],
    costFactors: [
      "Roof size in squares and the number of slopes, valleys and penetrations",
      "Pitch and height, which affect labor and safety equipment",
      "Material: architectural shingles, Class 4, metal, tile or slate",
      "Decking replacement and number of existing layers",
      "Ice barrier, ventilation upgrades and local permit requirements",
    ],
    faqs: [
      { q: "How long does a roof last?", a: "Architectural asphalt shingles typically last about 15 to 30 years depending on climate and ventilation, metal 40 to 70 years, and concrete or clay tile 40 years or more. Hot, sunny and storm-prone regions sit at the low end." },
      { q: "Can new shingles go over the old ones?", a: "Many codes allow one overlay, but most roofers recommend a full tear-off so damaged decking can be found and the roof can be warrantied properly. Overlays aren't allowed over two existing layers." },
      { q: "Do I need a permit to replace my roof?", a: "In most cities and counties, yes. Requirements vary by local jurisdiction, so ask the contractor to confirm and pull the permit where required." },
    ],
    related: ["roof-repair", "roof-ventilation", "roof-inspection", "storm-damage-roof-repair"],
    isEmergencyCapable: false,
    glance: [
      { term: "Typical install", detail: "One to three days for most homes" },
      { term: "Includes", detail: "Underlayment, drip edge, flashing, boots and vents" },
      { term: "Cold climates", detail: "Ice barrier along the eaves required by code" },
      { term: "Check first", detail: "Permit, HOA and historic-district rules" },
    ],
    updated: U,
  },
];

export const services: Service[] = [...core, ...servicesMore];

export const publishedServices = services.filter((s) => s.status === "PUBLISHED");

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)!;
}

export function servicesInCategory(slug: string) {
  return publishedServices.filter((s) => s.category === slug);
}

/** Top-level services (no parent) and their subservices. */
export const parentServices = publishedServices.filter((s) => !SERVICE_PARENT[s.slug]);
export function parentOf(slug: string) {
  const p = SERVICE_PARENT[slug];
  return p ? getService(p) : undefined;
}
export function subservicesOf(slug: string) {
  return childrenOf(slug)
    .map(getService)
    .filter((s): s is Service => Boolean(s && s.status === "PUBLISHED"));
}
