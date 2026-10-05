import type { Article } from "./types";

const P = "2026-10-05";

export const articles: Article[] = [
  {
    slug: "roof-leaking-what-to-do",
    title: "Roof leaking right now? What to do in the first hour",
    seoTitle: "Roof Leaking Right Now? What to Do First",
    metaDescription:
      "Water coming through the ceiling? Steps to protect your home in the first hour, how to find the source, and when to call a roofer for tarping.",
    category: "Leaks & repair",
    status: "PUBLISHED",
    answer:
      "Catch the water, protect what's below it, and switch off electricity to any wet fixture. If the ceiling is bulging, poke a small hole at the lowest point to drain it into a bucket. Then photograph everything and call a roofer to tarp or repair once it's safe. Don't go onto the roof during the storm.",
    sections: [
      {
        heading: "1. Protect the inside",
        body: ["The first priority is limiting interior damage, which usually costs more than the roof repair."],
        list: [
          "Put buckets, bins or towels under every drip.",
          "Move furniture, rugs and electronics out of the way, or cover them with plastic.",
          "If water is near a light fixture or outlet, switch that circuit off at the breaker panel.",
          "If the drywall is sagging with water, poke a small hole at the lowest point with a screwdriver so it drains into a bucket instead of collapsing.",
        ],
      },
      {
        heading: "2. Find where it's coming in",
        body: [
          "If you can safely get into the attic, take a flashlight and look above the stain. Water usually enters higher on the slope and runs along rafters or decking before dripping. Look for wet wood, dark trails and soaked insulation, and don't step between ceiling joists.",
          "Note the conditions. Leaks only in wind-driven rain usually point to flashing, vent boots or lifted shingle edges. Leaks during winter thaws in snowy states are often ice dams.",
        ],
      },
      {
        heading: "3. Document for insurance",
        body: [
          "Take photos and video of the ceiling, the attic, any damage visible from the ground, and anything in the yard such as shingles or limbs. Write down the date and time the leak started and what weather caused it.",
        ],
      },
      {
        heading: "4. Get it covered",
        body: [
          "A roofer can install an emergency tarp over the ridge, secured with wood battens so wind can't peel it off. That buys time for an inspection and, if needed, an insurance claim. Keep the receipt; reasonable steps to prevent further damage are often reimbursed on covered claims.",
        ],
      },
      {
        heading: "What not to do",
        body: ["Leaks make people want to act fast, but some moves make things worse."],
        list: [
          "Don't climb onto a wet, icy or storm-damaged roof.",
          "Don't smear roofing cement over shingles in the rain; it doesn't stick and can hide the real cause.",
          "Don't chip at ice dams with tools.",
          "Don't ignore a slow leak: wet insulation and drywall can grow mold within a day or two in warm weather.",
        ],
      },
    ],
    whenToCall: [
      "Water is actively coming through a ceiling or light fixture.",
      "Shingles, decking or a tree limb are missing from or lying on the roof.",
      "The leak comes back with every storm or thaw.",
    ],
    faqs: [
      { q: "Can a roofer fix a leak while it's raining?", a: "Usually not permanently. A roofer can tarp in a break in the weather and make the permanent repair once the roof is dry." },
      { q: "Will my homeowners insurance cover the leak?", a: "Sudden damage from a covered storm often is covered; leaks from age and wear usually aren't. Document the date and cause." },
      { q: "How fast does mold grow after a roof leak?", a: "In warm, humid conditions mold can start within 24 to 48 hours on wet insulation and drywall, so dry or replace wet materials quickly." },
    ],
    services: ["roof-leak-repair", "emergency-roof-repair"],
    relatedArticles: ["roof-checklist-after-hurricane", "ice-dams-what-to-do"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "how-to-spot-hail-damage-on-a-roof",
    title: "How to tell if hail damaged your roof (without climbing up)",
    seoTitle: "How to Spot Hail Damage on Your Roof",
    metaDescription:
      "Signs of hail damage you can check from the ground, what roofers and adjusters look for, and why hail shortens shingle life even without leaks.",
    category: "Storms & insurance",
    status: "PUBLISHED",
    answer:
      "Check the things around the roof first: dents in gutters, downspouts, vent caps and AC fins, granules piled at downspout outlets, and damaged screens or patio furniture. Those confirm hail size and direction. A roofer then checks shingles for bruises, cracks and granule loss in test squares on each slope.",
    sections: [
      {
        heading: "Ground-level clues",
        body: ["You can learn a lot without a ladder."],
        list: [
          "Dents or dimples on aluminum gutters and downspouts.",
          "Dents on metal roof vents and chimney caps (use binoculars or a phone zoom).",
          "Flattened fins on the outdoor AC unit.",
          "Piles of dark granules at downspout outlets after the storm.",
          "Torn window screens, chipped paint on the windward side, and dented cars or mailboxes.",
        ],
      },
      {
        heading: "What hail does to shingles",
        body: [
          "Hail knocks granules loose and leaves dark spots. Hard hits fracture the fiberglass mat underneath, which you can't see from the ground. The roof may not leak for months, but bruised shingles lose granules faster and wear out years early under the sun.",
        ],
      },
      {
        heading: "How roofers and adjusters measure it",
        body: [
          "Most inspections use a test square, a 10-by-10-foot area on each slope, and count the hits inside it. Hits are circled in chalk and photographed. Adjusters look for functional damage, such as fractured mats and exposed asphalt, rather than cosmetic marks. Damage concentrated on the windward slopes is consistent with a single storm.",
        ],
      },
      {
        heading: "Where hail is most common",
        body: [
          "Hail claims are concentrated in the central U.S., from Texas and Oklahoma north through Kansas, Nebraska, Colorado, the Dakotas and Minnesota, but damaging hail reaches most states. If you live in hail country, check after every major storm.",
        ],
      },
      {
        heading: "Timing matters",
        body: [
          "Policies require prompt notice of damage, and evidence fades as granules wash away. Get an inspection within days or a few weeks of the storm and keep a record of the date, reported hail size and your photos.",
        ],
      },
    ],
    whenToCall: [
      "You see dents on gutters, vents or the AC unit after a storm.",
      "Neighbors are getting hail inspections or new roofs.",
      "Granules are piling up at the downspouts.",
    ],
    faqs: [
      { q: "What size hail damages shingles?", a: "Hail about one inch or larger can damage standard shingles, especially older ones. Wind-driven hail does more damage." },
      { q: "Is hail damage covered by insurance?", a: "Hail is usually a covered peril, subject to your wind and hail deductible. Some policies exclude purely cosmetic damage." },
    ],
    services: ["hail-damage-roof-repair", "impact-resistant-shingles"],
    relatedArticles: ["how-roof-insurance-claims-work", "are-class-4-shingles-worth-it"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "how-roof-insurance-claims-work",
    title: "How a roof insurance claim works, step by step",
    seoTitle: "How Roof Insurance Claims Work, Step by Step",
    metaDescription:
      "Roof insurance claims explained: inspection, filing, the adjuster visit, deductibles, depreciation, supplements, and state rules that protect homeowners.",
    category: "Storms & insurance",
    status: "PUBLISHED",
    answer:
      "Get the roof inspected and documented, file the claim with your insurer, meet the adjuster on the roof (with your contractor if you like), review the estimate, and schedule the work. You pay your deductible. On replacement-cost policies, withheld depreciation is usually released after the work is finished.",
    sections: [
      {
        heading: "1. Inspect before you file",
        body: ["A roofer can tell you whether the damage looks storm-related and significant enough for a claim. That avoids filing a claim that's denied or worth less than your deductible. Ask for dated photos and a written summary."],
      },
      {
        heading: "2. File and get a claim number",
        body: ["Report the storm date, what you saw and your photos. Your insurer assigns an adjuster and schedules an inspection. Keep a log of every call and email."],
      },
      {
        heading: "3. The adjuster visit",
        body: ["The adjuster inspects the roof and the soft metals and writes an estimate. Having your roofer present helps make sure all slopes, vents, flashing and code items are seen and measured. The roofer can point out damage; negotiating the claim is between you and your insurer, or a licensed public adjuster you hire."],
      },
      {
        heading: "4. Understand the numbers",
        body: ["Your estimate and first payment usually include these items."],
        list: [
          "Replacement cost value (RCV): the full cost to replace the roof.",
          "Depreciation: on replacement-cost policies, held back until the work is done, then released.",
          "Actual cash value (ACV): RCV minus depreciation; ACV-only policies pay this and no more.",
          "Deductible: in hail and hurricane states often a percentage of dwelling coverage. You pay it.",
        ],
      },
      {
        heading: "5. Supplements and completion",
        body: ["If the roofer finds rotted decking or code-required items not in the estimate, such as ice barrier or drip edge, they document them and submit a supplement. After the work, final invoices and photos let the insurer release the remaining funds."],
      },
      {
        heading: "State rules that protect you",
        body: ["Several states regulate storm-related roofing contracts. Your state insurance department can explain what applies where you live."],
        list: [
          "Texas, Colorado and Minnesota are among the states that prohibit contractors from paying, waiving or rebating your deductible.",
          "Many states limit claim negotiation to you, an attorney or a licensed public adjuster.",
          "Some states, such as Colorado, give homeowners the right to cancel certain roofing contracts if the insurance claim is denied.",
        ],
      },
    ],
    whenToCall: [
      "A storm passed and you want to know if a claim is worth filing.",
      "You want a contractor at the adjuster inspection.",
      "Your estimate seems to miss slopes, vents or decking.",
    ],
    faqs: [
      { q: "How long do I have to file a roof claim?", a: "It depends on your policy and state; many policies require prompt notice and set a deadline after the storm. Read the policy and file promptly." },
      { q: "Should I hire a public adjuster?", a: "For large or disputed claims, a licensed public adjuster can negotiate for you for a percentage of the settlement. Small, straightforward claims often don't need one." },
    ],
    services: ["roof-insurance-claims", "storm-damage-roof-repair"],
    relatedArticles: ["how-to-spot-hail-damage-on-a-roof", "roof-checklist-after-hurricane"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "roof-checklist-after-hurricane",
    title: "Roof checklist after a hurricane or major windstorm",
    seoTitle: "Roof Checklist After a Hurricane or Windstorm",
    metaDescription:
      "What to check on your roof after a hurricane, tropical storm or derecho, what to photograph for insurance, when to tarp, and how to avoid storm chasers.",
    category: "Storms & insurance",
    status: "PUBLISHED",
    answer:
      "Once it's safe, walk around the house and photograph the roof from every side. Look for missing shingles, lifted ridge caps, damaged soffit, fallen limbs and dents, then check the attic and ceilings for water. Tarp any openings quickly, notify your insurer and schedule an inspection.",
    sections: [
      {
        heading: "Safety first",
        body: ["Injuries from falls, chainsaws, generators and downed lines are common after big storms."],
        list: [
          "Stay off the roof. Wet, damaged roofs are slippery and may not hold weight.",
          "Treat every downed line as live and report it to your utility.",
          "If a tree is on the house, stay out of the rooms below it.",
          "Run generators outside, far from windows and doors.",
        ],
      },
      {
        heading: "From the ground",
        body: [],
        list: [
          "Missing or folded-back shingles, especially along the eaves, rakes and ridge.",
          "Exposed underlayment or bare decking.",
          "Loose or missing ridge caps, vents and flashing.",
          "Soffit panels pulled out, fascia hanging, gutters pulled away.",
          "Limbs resting on the roof or debris in the valleys.",
        ],
      },
      {
        heading: "Inside",
        body: ["Check upstairs ceilings, closets and around light fixtures for stains. With a flashlight, look in the attic for daylight, wet decking and soaked insulation. If the power is out, a closed-up house can grow mold fast, so get wet materials drying."],
      },
      {
        heading: "Document, cover, report",
        body: ["Photograph everything before cleanup, including debris in the yard. Get openings tarped, keep receipts, and notify your insurer as soon as you can. After big storms roofers are booked solid, so getting on the list early matters."],
      },
      {
        heading: "Watch for storm chasers",
        body: ["After every major storm, out-of-town crews go door to door. Ask for a local address, a certificate of insurance and any license or registration your state requires. Don't sign on the spot, never pay in full upfront, and walk away from anyone offering to cover your deductible."],
      },
    ],
    whenToCall: ["Any part of the roof deck is exposed.", "Water is coming in, or ceilings are stained after the storm.", "A tree or large limb is on the roof."],
    faqs: [
      { q: "How soon after a hurricane should my roof be inspected?", a: "As soon as it's safe and a roofer is available. Tarp openings right away to prevent further damage." },
      { q: "Does a hurricane deductible apply?", a: "Many policies in coastal states apply a separate hurricane, named-storm or wind deductible, often a percentage of dwelling coverage. Check your declarations page." },
    ],
    services: ["wind-damage-roof-repair", "emergency-roof-repair", "storm-damage-roof-repair"],
    relatedArticles: ["fortified-roof-hurricane", "how-roof-insurance-claims-work"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "fortified-roof-hurricane",
    title: "What is a FORTIFIED roof, and is it worth it?",
    seoTitle: "FORTIFIED Roofs: Hurricane-Resistant Roofing Explained",
    metaDescription:
      "How the IBHS FORTIFIED Roof standard helps roofs resist hurricane wind and rain, what changes in a re-roof, and grants and discounts some states offer.",
    category: "Storms & insurance",
    status: "PUBLISHED",
    answer:
      "A FORTIFIED Roof is a re-roof built to a standard from the Insurance Institute for Business & Home Safety (IBHS): a sealed roof deck so water can't pour in if shingles blow off, stronger deck attachment with ring-shank nails, and enhanced edges. A third-party evaluator verifies it, and some states and insurers offer grants or premium discounts.",
    sections: [
      {
        heading: "What changes during a FORTIFIED re-roof",
        body: ["Most of the work happens under the shingles, while the deck is exposed."],
        list: [
          "Deck re-nailed with ring-shank nails for stronger attachment.",
          "A sealed roof deck: taped seams or a full self-adhered underlayment.",
          "Drip edge and starter strips installed and fastened to stricter edge requirements.",
          "Shingles or other coverings rated for high wind.",
          "Inspection and documentation by a certified FORTIFIED evaluator.",
        ],
      },
      {
        heading: "Why the sealed deck matters",
        body: ["In many hurricanes, losing a few shingles lets wind-driven rain pour through deck seams and ruin ceilings and insulation. Sealing the deck keeps water out even when the covering is damaged, which is why it's the core of the standard."],
      },
      {
        heading: "Grants and discounts",
        body: ["Alabama's Strengthen Alabama Homes program and Louisiana's Fortify Homes Program have offered grants toward FORTIFIED roofs, and some states require or encourage insurers to discount them. Program funding and rules change, so check with your state insurance department."],
      },
      {
        heading: "Who should consider it",
        body: ["Homeowners on or near the Gulf and Atlantic coasts who are already replacing a roof get the most value, because the upgrade costs far less when the deck is already exposed. Inland homes in high-wind areas can benefit too."],
      },
    ],
    whenToCall: ["You're replacing a roof in a hurricane-prone state.", "Your state offers FORTIFIED grants or discounts.", "You want a stronger roof after storm damage."],
    faqs: [
      { q: "Does a FORTIFIED roof cost much more?", a: "It adds some cost to a re-roof, mostly for the sealed deck and extra fastening. Grants and insurance discounts can offset part of it where available." },
      { q: "Can any roofer install a FORTIFIED roof?", a: "The roofer must follow the standard and the work must be verified by a certified FORTIFIED evaluator. Ask whether the contractor has completed FORTIFIED roofs before." },
    ],
    services: ["wind-damage-roof-repair", "roof-replacement"],
    relatedArticles: ["roof-checklist-after-hurricane", "how-roof-insurance-claims-work"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "ice-dams-what-to-do",
    title: "Ice dams: why they form and what to do about them",
    seoTitle: "Ice Dams on Your Roof: Causes, Removal & Prevention",
    metaDescription:
      "Why ice dams form, how to handle one safely now, why chipping and salt make it worse, and the insulation, ventilation and ice barrier fixes that stop them.",
    category: "Leaks & repair",
    status: "PUBLISHED",
    answer:
      "Ice dams form when heat from the house melts snow on the upper roof and the water refreezes at the cold eaves. Right now, rake snow off the lower roof from the ground and catch any drips; have the dam removed with steam. To stop them for good, air-seal and insulate the attic so the roof deck stays cold.",
    sections: [
      {
        heading: "Why they form",
        body: ["Warm air leaking into the attic heats the roof deck above freezing while the overhangs stay cold. Snow melts, runs down, and refreezes at the edge, building a ridge of ice that backs water up under the shingles. Complex roofs, finished half-story rooms and recessed lights make it worse."],
      },
      {
        heading: "What to do now",
        body: [],
        list: [
          "Use a roof rake from the ground to pull snow off the lower few feet of roof.",
          "Catch interior drips and move belongings; switch off power to wet fixtures.",
          "Have a roofer remove the dam with low-pressure steam.",
          "Don't chip with hammers or axes, and don't use salt that can damage shingles, metal and plants.",
        ],
      },
      {
        heading: "Fixing the cause",
        body: ["The lasting fix keeps heat out of the attic: seal gaps around light fixtures, plumbing and chimney chases and the attic hatch, add insulation, and make sure soffit intake and ridge exhaust are clear. When you re-roof, model codes in cold-climate areas require an ice barrier from the eave edge to at least 24 inches inside the exterior wall."],
      },
      {
        heading: "Where ice dams are common",
        body: ["New England, New York, Pennsylvania, the Great Lakes states, the Upper Midwest and mountain areas of the West see the most ice dams, especially in winters with repeated snow and thaw cycles."],
      },
    ],
    whenToCall: ["Water is coming in during a thaw.", "Thick ice is building along the eaves or gutters are pulling away.", "Ice dams return every winter."],
    faqs: [
      { q: "Do heated cables stop ice dams?", a: "They can keep a drainage path open in trouble spots, but they don't fix the heat loss that causes ice dams." },
      { q: "Does insurance cover ice dam leaks?", a: "Interior water damage from ice dams is often covered by standard homeowners policies; removing the ice and preventing it usually isn't." },
    ],
    services: ["ice-dam-removal", "roof-ventilation"],
    relatedArticles: ["hot-attic-roof-ventilation", "roof-leaking-what-to-do"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "wildfire-resistant-roofing",
    title: "Wildfire-resistant roofing: what makes a roof safer",
    seoTitle: "Wildfire-Resistant Roofing: Class A Roofs & Embers",
    metaDescription:
      "How roofs ignite in wildfires, what a Class A fire rating means, which materials qualify, and the vent, gutter and edge details that keep embers out.",
    category: "Maintenance",
    status: "PUBLISHED",
    answer:
      "Most homes ignite from wind-blown embers, not the wall of flame, and the roof is the largest target. A Class A rated roof assembly, ember-resistant vents, and clean gutters and valleys make the biggest difference. Class A options include many asphalt shingles, metal, clay and concrete tile, and some treated products.",
    sections: [
      {
        heading: "How roofs catch fire",
        body: ["Embers can travel a mile or more ahead of a fire. They land in gutters full of dry leaves, in valleys and against roof-to-wall joints, and they get sucked through attic vents. Untreated wood shakes are especially vulnerable."],
      },
      {
        heading: "What Class A means",
        body: ["Roof fire ratings come from standardized tests; Class A is the highest. Many products reach Class A only as part of a specific assembly with the right underlayment, so ask for the rated assembly, not just the shingle."],
      },
      {
        heading: "Details that matter as much as the roof",
        body: [],
        list: [
          "Ember- and flame-resistant attic and soffit vents with fine mesh.",
          "Gutters and valleys kept free of leaves and needles, or covered with noncombustible guards.",
          "Bird stops or closures at the ends of tile and metal roofs.",
          "Noncombustible drip edge and a gap-free roof-to-wall transition.",
        ],
      },
      {
        heading: "Rules in fire-prone states",
        body: ["California's wildland-urban interface building standards require Class A roofing and ember-resistant features in designated fire hazard areas, and many communities across Colorado, Oregon, Washington, Idaho, Montana, Utah, Nevada, Arizona and New Mexico have their own requirements. Check with your local building department."],
      },
    ],
    whenToCall: ["You live near forest, brush or grassland.", "Your roof is wood shake or not Class A rated.", "Your vents are open louvers without fine mesh."],
    faqs: [
      { q: "Is a metal roof fireproof?", a: "Metal is noncombustible and typically part of a Class A assembly, but embers can still enter through vents and gaps, so those details matter too." },
      { q: "Can I treat my wood shake roof instead of replacing it?", a: "Fire-retardant treatments wear off over time. In high-risk areas, replacing shakes with a Class A assembly is the more reliable choice." },
    ],
    services: ["metal-roofing", "tile-roofing", "roof-inspection"],
    relatedArticles: ["how-long-does-a-roof-last", "roof-replacement-cost-factors"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "repair-or-replace-roof",
    title: "Repair or replace your roof? How to decide",
    seoTitle: "Repair or Replace Your Roof? How to Decide",
    metaDescription:
      "When a roof repair makes sense and when replacement is the better value: age, extent of damage, repeat leaks, insurance and resale.",
    category: "Replacement",
    status: "PUBLISHED",
    answer:
      "Repair when the roof is still well within its expected life for your climate, the problem is isolated, and the shingles are still flexible. Replace when the roof is near the end of its life, damage is spread across several slopes, leaks keep coming back in different places, or a covered storm claim pays for it.",
    sections: [
      {
        heading: "Signs a repair is enough",
        body: [],
        list: [
          "One leak with a clear cause, such as a pipe boot or a flashing joint.",
          "A few shingles blown off a roof that's otherwise in good shape.",
          "Shingles still lie flat and bend without cracking.",
          "The roof has many years left for your climate.",
        ],
      },
      {
        heading: "Signs it's time to replace",
        body: [],
        list: [
          "The roof is near or past its expected life for your climate.",
          "Shingles are curling, cracking or losing granules across the roof.",
          "Leaks appear in different spots after every storm.",
          "Storm damage covers multiple slopes.",
          "Your insurer won't renew or is moving the roof to actual-cash-value coverage because of its age.",
        ],
      },
      {
        heading: "The insurance angle",
        body: ["If storm damage is covered, a claim may pay for most of a replacement minus your deductible. For an older roof with storm damage, that often makes replacement the better choice. Some insurers also charge more, or pay less, for older roofs."],
      },
      {
        heading: "Selling soon?",
        body: ["Buyers' inspectors flag aging roofs, and lenders and insurers may require repairs before closing. A roof inspection report helps you decide whether to repair, replace or offer a credit."],
      },
    ],
    whenToCall: ["You've had more than one leak in a year.", "Your roof is aging and you've had a storm.", "An insurer or buyer's inspector questioned the roof."],
    faqs: [
      { q: "How much of a roof can be repaired before replacing makes more sense?", a: "When damage reaches roughly a quarter or more of the roof, or spans several slopes, replacement usually costs less over time than repeated repairs. Florida has specific rules on partial replacements tied to the building code." },
      { q: "Will a partial replacement match?", a: "Rarely exactly. Sun-faded shingles look different from new ones, which matters on visible slopes." },
    ],
    services: ["roof-replacement", "roof-repair", "roof-inspection"],
    relatedArticles: ["how-long-does-a-roof-last", "roof-replacement-cost-factors"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "how-long-does-a-roof-last",
    title: "How long does a roof last? It depends on your climate",
    seoTitle: "How Long Does a Roof Last? Lifespans by Climate",
    metaDescription:
      "Real-world roof lifespans for asphalt, Class 4, metal, tile and flat roofs, and how heat, hail, hurricanes, snow and moss change them by region.",
    category: "Replacement",
    status: "PUBLISHED",
    answer:
      "Architectural asphalt shingles typically last about 15 to 30 years, standing seam metal 40 years or more, clay and concrete tile 50 years or more (with underlayment replaced sooner), and flat membranes about 15 to 30 years. Hot, sunny and storm-prone regions sit at the low end of those ranges.",
    sections: [
      {
        heading: "Typical lifespans",
        body: ["Ranges assume correct installation and reasonable maintenance."],
        list: [
          "Three-tab asphalt shingles: about 12 to 20 years.",
          "Architectural shingles: about 15 to 30 years.",
          "Class 4 impact-resistant shingles: similar or longer, with better hail survival.",
          "Standing seam metal: 40 years or more.",
          "Clay or concrete tile: 50 years or more; underlayment often 20 to 30 years.",
          "Modified bitumen, EPDM or TPO flat roofs: about 15 to 30 years.",
        ],
      },
      {
        heading: "How climate changes the number",
        body: [],
        list: [
          "South and Southwest: heat and UV dry out asphalt; shingles often land at 15 to 20 years.",
          "Plains and Front Range: hail can end a roof's life early regardless of age.",
          "Gulf and Atlantic coasts: hurricanes and salt air stress edges and metals.",
          "North: freeze-thaw, ice dams and snow load wear flashing and eaves.",
          "Pacific Northwest: moss and constant moisture shorten life on shaded roofs.",
        ],
      },
      {
        heading: "What extends roof life anywhere",
        body: [],
        list: [
          "Balanced attic ventilation with clear soffit intake.",
          "Keeping valleys and gutters clear.",
          "Replacing pipe boots before they crack.",
          "Trimming branches away from the roof.",
          "Inspections after major storms.",
        ],
      },
      {
        heading: "Finding your roof's age",
        body: ["Check closing documents, permit records, the seller's disclosure or a shingle wrapper in the attic. A roofer can also estimate age from shingle type and condition."],
      },
    ],
    whenToCall: ["Your roof is aging and you don't know its condition.", "Your insurer asked for the roof's age.", "You see curling, granule loss or brittle shingles."],
    faqs: [
      { q: "Does a lifetime shingle warranty mean the roof lasts forever?", a: "No. It covers manufacturing defects, usually with coverage reducing over time, and doesn't guarantee lifespan in your climate." },
      { q: "Do darker shingles wear out faster?", a: "They run hotter, which can age them somewhat faster in hot climates, especially with poor ventilation." },
    ],
    services: ["roof-replacement", "roof-inspection", "roof-ventilation"],
    relatedArticles: ["repair-or-replace-roof", "hot-attic-roof-ventilation"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "are-class-4-shingles-worth-it",
    title: "Are Class 4 impact-resistant shingles worth it?",
    seoTitle: "Are Class 4 Impact-Resistant Shingles Worth It?",
    metaDescription:
      "What Class 4 shingles are, how the UL 2218 rating works, insurance discounts, extra cost, and which homeowners benefit most.",
    category: "Replacement",
    status: "PUBLISHED",
    answer:
      "Class 4 shingles are worth pricing for most homes being re-roofed in hail-prone states. They cost more than standard architectural shingles, but they resist hail better and insurers in many hail states discount premiums for them, which can recover part of the cost over time.",
    sections: [
      { heading: "What Class 4 means", body: ["The rating comes from UL 2218. Steel balls up to two inches across are dropped on the shingle, and a Class 4 product doesn't crack. Most use rubber-modified (SBS) asphalt that flexes on impact."] },
      { heading: "The insurance discount", body: ["Insurers in hail-prone states often discount premiums for impact-resistant roofs, and some states require insurers to offer a discount. The amount varies widely, so call your agent with the specific product name before deciding."] },
      {
        heading: "Who benefits most",
        body: [],
        list: [
          "Homes in Texas, Oklahoma, Kansas, Nebraska, Colorado, the Dakotas, Minnesota and Iowa.",
          "Homeowners replacing a roof after a hail claim, who pay only the upgrade difference.",
          "Owners planning to stay many years.",
          "Homes on exposed lots that also want strong wind ratings.",
        ],
      },
      { heading: "The limits", body: ["They aren't hail-proof, and very large hail still damages them. They also need correct installation to keep the rating. Compare warranties and wind ratings along with the impact class."] },
    ],
    whenToCall: ["You're getting replacement quotes and want Class 4 priced.", "Your claim was approved and you're considering an upgrade."],
    faqs: [
      { q: "Do Class 4 shingles look different?", a: "No. They look like standard architectural shingles and come in similar colors." },
      { q: "Can my claim pay for Class 4?", a: "Usually the claim pays for like-kind shingles, and you pay the difference to upgrade, unless your existing roof was already Class 4." },
    ],
    services: ["impact-resistant-shingles", "hail-damage-roof-repair"],
    relatedArticles: ["how-to-spot-hail-damage-on-a-roof", "roof-replacement-cost-factors"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "black-streaks-on-roof",
    title: "Black streaks or moss on your roof: what they are and what to do",
    seoTitle: "Black Streaks & Moss on Your Roof: Causes and Cleaning",
    metaDescription:
      "Black streaks are algae and green growth is moss. Why they grow, which one damages shingles, how to remove them safely, and how to keep them from returning.",
    category: "Maintenance",
    status: "PUBLISHED",
    answer:
      "Black streaks are almost always an algae called Gloeocapsa magma, which thrives on humid, shaded roofs and is mostly cosmetic. Moss is different: it holds water and lifts shingles. Soft washing with a roof-safe cleaner removes both, and zinc or copper strips and algae-resistant shingles slow their return.",
    sections: [
      { heading: "Where it grows", body: ["Algae streaks are most common in the humid Southeast and Gulf states, while moss thrives in the damp Pacific Northwest and on heavily shaded roofs anywhere. North-facing slopes stay damp longest, so growth shows up there first."] },
      { heading: "Is it damaging the roof?", body: ["Algae mostly darkens the roof and can raise heat absorption slightly. Moss and lichen hold moisture against shingles and can lift them, so they should be removed."] },
      {
        heading: "How to remove it safely",
        body: [],
        list: [
          "Use a low-pressure soft wash with a cleaner made for asphalt roofs.",
          "Never pressure wash: it strips granules and can void the warranty.",
          "Protect plants below with water before and after cleaning.",
          "Leave steep or two-story roofs to a professional.",
        ],
      },
      { heading: "Keeping it away", body: ["Trim branches to let in more sun. Zinc or copper strips near the ridge release metal ions when it rains, slowing regrowth. When you replace the roof, choose shingles with algae-resistant granules."] },
    ],
    whenToCall: ["Moss or lichen is growing on the roof.", "You want the roof cleaned without risking the shingles.", "Growth came back within a year."],
    faqs: [
      { q: "Does insurance cover algae or moss?", a: "No. It's considered maintenance, not damage." },
      { q: "How long does a roof cleaning last?", a: "Typically a few years, longer with zinc or copper strips and more sun on the roof." },
    ],
    services: ["roof-maintenance", "asphalt-shingle-roofing"],
    relatedArticles: ["how-long-does-a-roof-last", "hot-attic-roof-ventilation"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "hot-attic-roof-ventilation",
    title: "Why is my attic so hot (or damp)? Roof ventilation explained",
    seoTitle: "Hot or Damp Attic? Roof Ventilation Explained",
    metaDescription:
      "How balanced roof ventilation works, why attics overheat in summer and grow frost in winter, why mixing vent types backfires, and what a roofer can fix.",
    category: "Maintenance",
    status: "PUBLISHED",
    answer:
      "Attics overheat in summer because the sun heats the roof deck and the air has nowhere to go, and they collect frost and moisture in winter when warm, humid household air leaks in. Balanced ventilation, with intake at the soffits and one type of exhaust near the ridge, plus air sealing, fixes both.",
    sections: [
      { heading: "How ventilation works", body: ["Outside air enters through soffit vents under the eaves and rises as it warms, leaving through ridge vents or other exhaust near the peak. Codes and shingle manufacturers specify how much open vent area an attic needs, split roughly evenly between intake and exhaust."] },
      {
        heading: "Common problems",
        body: [],
        list: [
          "Soffit vents blocked by paint or blown insulation.",
          "Turbines, powered fans and ridge vents mixed on one roof, short-circuiting each other.",
          "Too little intake for the amount of exhaust.",
          "Bathroom fans venting into the attic instead of outside.",
        ],
      },
      { heading: "Hot climates vs. cold climates", body: ["In the South and Southwest, the goal is removing heat that bakes shingles from below and burdens attic ductwork. In the North, the goal is keeping the deck cold and dry: air sealing stops moist air from reaching the attic, and ventilation removes what gets through, which limits frost and ice dams."] },
      { heading: "What to ask for", body: ["Ask the roofer to calculate the required vent area and to include soffit intake, insulation baffles and a single exhaust type in the scope. The best time to fix ventilation is during a re-roof."] },
    ],
    whenToCall: ["Upstairs rooms are much hotter than downstairs.", "Shingles are aging early or blistering.", "There's frost, mildew or dampness in the attic."],
    faqs: [
      { q: "Should I add a solar attic fan?", a: "Only as part of a balanced design. A powered fan with too little intake can pull conditioned air out of the house." },
      { q: "Can an attic have too much ventilation?", a: "Mixing exhaust types or adding powered fans without enough intake causes more problems than the total vent area. Balance matters more than quantity." },
    ],
    services: ["roof-ventilation", "ice-dam-removal", "fascia-soffit-repair"],
    relatedArticles: ["ice-dams-what-to-do", "how-long-does-a-roof-last"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
  {
    slug: "roof-replacement-cost-factors",
    title: "What decides the cost of a new roof",
    seoTitle: "Roof Replacement Cost Factors: What Sets the Price",
    metaDescription:
      "The factors that set roof replacement prices: size in squares, pitch, materials, decking, ice barrier, ventilation, permits, codes and storm demand.",
    category: "Cost",
    status: "PUBLISHED",
    answer:
      "Roof replacement prices are driven by roof size in squares, pitch and complexity, the material chosen, decking repairs, code items such as ice barrier and drip edge, ventilation and flashing scope, permits or special inspections, and demand after storms. Compare quotes line by line, not just by the total.",
    sections: [
      { heading: "Size and complexity", body: ["Roofers price by the square, 100 square feet of roof surface. A steep hip roof with many valleys, dormers and walls takes more labor, waste and flashing than a simple gable roof of the same size."] },
      {
        heading: "Materials",
        body: [],
        list: [
          "Standard architectural shingles cost the least of the common options.",
          "Designer and Class 4 shingles cost more per square.",
          "Standing seam metal and tile cost considerably more but last longer.",
          "Synthetic underlayment, ice barrier and new drip edge add to the base cost.",
        ],
      },
      { heading: "Hidden items", body: ["Rotted decking is found only after tear-off, so quotes usually include a per-sheet price. Extra shingle layers, ventilation upgrades, chimney work, skylights and gutters also change the total."] },
      { heading: "Location and timing", body: ["Labor and material costs vary by region. Permits, coastal wind or wildfire code requirements, HOA rules, short building seasons in cold states, and spikes in demand after major storms all affect pricing and schedules."] },
      {
        heading: "Comparing quotes",
        body: ["Ask every contractor to list the same items."],
        list: [
          "Number of squares and the waste factor.",
          "Exact roofing product, underlayment, ice barrier and drip edge.",
          "Whether flashing, boots and vents are replaced or reused.",
          "Decking price per sheet.",
          "Workmanship warranty length, in writing.",
        ],
      },
    ],
    whenToCall: ["You want a written, itemized replacement quote.", "Your quotes are far apart and you want another measurement."],
    faqs: [
      { q: "Why don't you list prices?", a: "Prices depend on the roof, materials, region and timing, and each contractor sets its own. An itemized quote after measurement is the reliable number." },
      { q: "Is the cheapest quote a bad sign?", a: "Not necessarily, but check what's left out: reused flashing, no drip edge, no ice barrier where code requires it, or a short workmanship warranty." },
    ],
    services: ["roof-replacement", "asphalt-shingle-roofing", "metal-roofing"],
    relatedArticles: ["repair-or-replace-roof", "are-class-4-shingles-worth-it"],
    published: P,
    updated: P,
    reviewedBy: null,
  },
];

export const publishedArticles = articles.filter((a) => a.status === "PUBLISHED");
export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
