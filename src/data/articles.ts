import { Article } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'silence-of-nordic-concrete',
    title: 'The Silence of Nordic Concrete: Brutalism Reconsidered in Helsinki and Oslo',
    subtitle: 'Re-evaluating the poetics of rough formwork and low winter light in post-war Scandinavian civic monumentalism.',
    excerpt: 'Far from the cold totalitarian caricatures often attributed to cast-in-place concrete, mid-century Nordic brutalism transformed aggregate stone and pine timber formwork into a tactile instrument tuned specifically to low-angle subarctic illumination.',
    category: 'Brutalism & Concrete',
    author: {
      name: 'Dr. Henrik Lindqvist',
      role: 'Professor of Architectural History',
      affiliation: 'Aalto University, Helsinki',
      avatarInitials: 'HL',
      avatarBg: '#3B4252',
      bio: 'Henrik Lindqvist specializes in post-war Nordic infrastructure and tectonic phenomenology. Author of "Timber and Tufa: The Dual Nature of Fennoscandian Modernism".'
    },
    publishedDate: 'October 8, 2026',
    readTimeMinutes: 7,
    featured: true,
    edition: 'Vol. XI · Issue 4',
    plateNumber: 'PLATE 01 / AR-C',
    palette: {
      accent: '#475569',
      bgAccent: '#F1F5F9',
      borderAccent: '#CBD5E1',
      diagramTone: '#334155'
    },
    tags: ['Brutalism', 'Nordic Architecture', 'Concrete Formwork', 'Phenomenology', 'Tectonics'],
    sections: [
      {
        heading: '01. The Myth of the Unforgiving Grey',
        paragraphs: [
          'For nearly four decades, popular architectural criticism has treated cast-in-place raw concrete as a synonym for institutional alienation. Yet when one enters Aarno Ruusuvuori’s Hyvinkää Church (1961) or Erling Viksjø’s Government Quarter in Oslo during mid-November, the material behaves with an unexpected, almost monastic gentleness. In Nordic latitudes, where the sun hovers barely twelve degrees above the horizon for months, concrete does not absorb light into a dull void—it catches the grazing rays like rough-sawn parchment.',
          'The Nordic masters recognized that concrete is not a singular synthetic mass, but an artificial sedimentary stone. By deliberately selecting local granite aggregates and specifying unplaned pine timber boards for the formwork, architects captured the negative imprint of Finland’s and Norway’s boreal forests permanently into the structural envelope.'
        ],
        pullQuote: {
          text: 'Concrete is not an absence of emotion; it is an unyielding witness to the craft of the carpenter whose boards contained its liquid weight.',
          attribution: 'Aarno Ruusuvuori, Notes on Formwork, 1963'
        },
        figure: {
          number: 'Fig. 1.1',
          caption: 'Elevation section through Hyvinkää Church: Grazing winter daylight path across striated board-marked relief.',
          diagramType: 'section'
        },
        specs: [
          { label: 'Primary Medium', value: 'Hydraulic lime-fortified grey Portland concrete' },
          { label: 'Formwork Grain', value: 'Unplaned 120mm Finnish Scots Pine planks' },
          { label: 'Aggregate Origin', value: 'Crushed Porkkala red and grey granite (16-32mm)' },
          { label: 'Solar Latitude', value: '60° 38′ N (Grazing light angle: 6.8°–14.2°)' }
        ]
      },
      {
        heading: '02. Naturbetong and the Norwegian Innovation',
        paragraphs: [
          'In Oslo, civil engineer Erling Viksjø pioneered naturbetong—a patented technique where coarse gravel is pre-packed dry into the formwork before high-fluidity mortar is injected under controlled pneumatic pressure. Once cured, sandblasting strips away the thin outer cement skin, revealing seventy percent exposed mineral aggregate on the surface.',
          'This was not ornamental cladding applied over structural walls; it was an integral chemical fusion. The facade aged not with the mottled staining of smooth European brutalism, but with the weathered, moss-accepting dignity of an ancient glacial erratic.'
        ]
      },
      {
        heading: '03. Civic Memory and Current Preservation Debates',
        paragraphs: [
          'Today, as cities confront the carbon cost of demolition, the preservation of Nordic concrete landmarks represents both an aesthetic and ecological mandate. The embodied carbon sequestered in these thick structural cantilevers will never be recovered through replacement with lightweight steel frames. To preserve them is to honor both their tectonic integrity and our planetary resource boundary.'
        ]
      }
    ],
    conclusion: 'To inhabit Nordic concrete is to experience an architecture stripped of rhetorical ornament, where volume, gravity, and the fleeting presence of solar warmth form an enduring covenant between human shelter and subarctic geography.',
    footnotes: [
      'Ruusuvuori, A. (1964). "Structure as Expression", Arkkitehti Finnish Architectural Review, 3, pp. 45–52.',
      'Frampton, K. (1995). Studies in Tectonic Culture: The Poetics of Construction in Nineteenth and Twentieth Century Architecture. MIT Press.',
      'Norwegian Directorate for Cultural Heritage (2024). Naturbetong Structural Conservation Technical Bulletin No. 14.'
    ],
    initialClaps: 142,
    initialComments: [
      {
        id: 'c1',
        author: 'Elinor Vane',
        role: 'Conservation Architect, Stockholm',
        timestamp: '2 days ago',
        content: 'The observation about board-marked concrete acting as an imprint of the carpenter’s labor is critical. In Viksjø’s Y-block, you could literally trace the knots of the spruce timber along the curved staircases.',
        likes: 19
      },
      {
        id: 'c2',
        author: 'Marcus Brandt',
        role: 'Structural Engineer, Zurich',
        timestamp: 'Yesterday',
        content: 'Fascinating technical breakdown of the Naturbetong pneumatic injection method. Modern UHPC strives for the same aggregate packing density that Viksjø achieved through pure empirical craftsmanship.',
        likes: 8
      }
    ]
  },
  {
    id: 'art-02',
    slug: 'between-timber-and-void-mass-timber',
    title: 'Between Timber and Void: Mass Timber in High-Rise Engineering',
    subtitle: 'Cross-laminated timber (CLT) is escaping the rustic cabin vernacular to forge a revolutionary structural syntax.',
    excerpt: 'Cross-laminated timber is not merely an eco-conscious alternative to reinforced concrete; it requires an entirely fresh spatial grammar based on continuous acoustic stratification, biophilic resonance, and carbon-negative load paths.',
    category: 'Tectonics & Materials',
    author: {
      name: 'Sofia Al-Mansoor',
      role: 'Principal Structural Designer',
      affiliation: 'Atelier Woodform, Vienna & London',
      avatarInitials: 'SA',
      avatarBg: '#78350F',
      bio: 'Sofia Al-Mansoor has led structural design on four of Europe’s hybrid timber towers above 70 meters. Her research investigates seismic ductility in glulam joinery.'
    },
    publishedDate: 'October 3, 2026',
    readTimeMinutes: 8,
    edition: 'Vol. XI · Issue 4',
    plateNumber: 'PLATE 02 / MT-X',
    palette: {
      accent: '#9A3412',
      bgAccent: '#FEF3C7',
      borderAccent: '#FDE68A',
      diagramTone: '#78350F'
    },
    tags: ['Mass Timber', 'CLT', 'Sustainable Tectonics', 'High-Rise', 'Carbon Sequestration'],
    sections: [
      {
        heading: '01. The Myth of the Flammable Forest',
        paragraphs: [
          'Whenever an architect proposes an eighteen-story timber residential tower, municipal building inspectors inevitably raise the specter of fire. Yet massive timber elements behave fundamentally differently from light-frame studwork. When subjected to intense heat, a dense charring layer forms on the exterior of a glulam column at a predictable rate of 0.65 millimeters per minute.',
          'This sacrificial char acts as an effective thermal insulator, shielding the inner structural core from degradation. While unprotected structural steel loses half its tensile strength at 550°C and buckles precipitously, a CLT core maintains load-bearing capacity throughout a standard two-hour ASTM E119 fire burn curve.'
        ],
        pullQuote: {
          text: 'Wood is crystallized sunlight and stored carbon. When we build with it at scale, we are turning our city skylines into carbon sinks.',
          attribution: 'Hermann Kaufmann, Timber Architecture Manifesto'
        },
        figure: {
          number: 'Fig. 2.1',
          caption: 'Axonometric isometric of 7-ply Cross-Laminated Timber slab with concealed node connectors and acoustic dry-screed isolation.',
          diagramType: 'axonometric'
        },
        specs: [
          { label: 'Layering Matrix', value: '7-ply European Spruce (Picea abies), cross-orthogonal orientation' },
          { label: 'Charring Rate', value: '0.65 mm/min (EN 1995-1-2 compliant)' },
          { label: 'Embodied Carbon', value: '-480 kg CO2 eq/m³ sequestered net cradle-to-gate' },
          { label: 'Acoustic Attenuation', value: 'Rw + Ctr ≥ 56 dB via granulated elastomeric de-coupling' }
        ]
      },
      {
        heading: '02. Joinery as the True Monument',
        paragraphs: [
          'In concrete, the connection is monolithic and invisible—poured slurry hiding rebar overlaps. In steel, it is industrial—high-strength bolts and fillet welds. But mass timber elevates the joint to the principal bearer of poetic meaning.',
          'Modern CNC 5-axis milling machines now carve tight friction-fit dovetails and self-tapping beechwood dowels with tolerances under 0.2 millimeters. The building breathes, expands, and contracts with seasonal relative humidity, operating more like a grand musical instrument than an inert cage.'
        ]
      }
    ],
    conclusion: 'The twenty-first-century timber skyscraper is neither nostalgic revival nor synthetic compromise. It marks our return to biological materials enriched by computational precision and carbon stewardship.',
    footnotes: [
      'Kaufmann, H., Krötsch, S., & Winter, S. (2018). Manual of Timber Construction: Principles, Materials, Details. Detail Business Information.',
      'Foster, R. M. (2020). "Thermal dynamics of multi-ply mass timber floor diaphragms", Journal of Structural Fire Engineering, 11(2), 201–218.'
    ],
    initialClaps: 98,
    initialComments: [
      {
        id: 'c3',
        author: 'Liam Chen',
        role: 'Building Envelope Specialist, Vancouver',
        timestamp: '3 days ago',
        content: 'Crucial emphasis on acoustic de-coupling. You can never let the timber slab sit rigid against drywall partitions without elastomeric bearings, or the low-frequency footstep thump will reverberate through four floors.',
        likes: 14
      }
    ]
  },
  {
    id: 'art-03',
    slug: 'poetics-of-courtyard-living',
    title: 'The Poetics of Courtyard Living: Microclimates and Social Fabric in Fez and Isfahan',
    subtitle: 'How introverted domestic architecture creates natural thermodynamic cooling and sacred acoustic privacy in historic arid urban cores.',
    excerpt: 'The Islamic courtyard house is often studied as an emblem of cultural privacy, but its ultimate genius lies in thermodynamic microclimate manipulation—functioning as a diurnal solar chimney and evaporative oasis within hostile desert climates.',
    category: 'Spatial Philosophy',
    author: {
      name: 'Amira Benali',
      role: 'Urban Anthropologist & Architect',
      affiliation: 'Institute of Mediterranean Studies, Marseille',
      avatarInitials: 'AB',
      avatarBg: '#1E3A8A',
      bio: 'Amira Benali explores indigenous climate adaptation in North African medinas. She consults for UNESCO on vernacular urban conservation.'
    },
    publishedDate: 'September 28, 2026',
    readTimeMinutes: 6,
    edition: 'Vol. XI · Issue 4',
    plateNumber: 'PLATE 03 / CY-M',
    palette: {
      accent: '#1E3A8A',
      bgAccent: '#EFF6FF',
      borderAccent: '#BFDBFE',
      diagramTone: '#1E3A8A'
    },
    tags: ['Vernacular', 'Passive Cooling', 'Courtyard Houses', 'Thermal Commons', 'Islamic Architecture'],
    sections: [
      {
        heading: '01. The House Turned Inside Out',
        paragraphs: [
          'In European urbanism, the house projects its status outward: ornate cornices, symmetrical sash windows, and public facades designed to impress the passerby in the boulevard. In the historic Medina of Fez, the opposite philosophy prevails. The exterior street wall is a plain, unadorned lime-washed barrier broken only by a heavy cedar door and a single high iron grille.',
          'Step past the bent entrance corridor (the *driba*, calibrated to obscure line-of-sight from the alley), and you emerge into an explosion of light, water, and intricate glazed zellij tilework. The universe is turned inward. The sky is captured as an intimate, framed ceiling.'
        ],
        pullQuote: {
          text: 'The courtyard is not merely an empty space in the center of the rooms; the rooms are peripheral chambers built to serve the central well of sky.',
          attribution: 'Titus Burckhardt, Fez: City of Islam'
        },
        figure: {
          number: 'Fig. 3.1',
          caption: 'Thermal section showing diurnal convective cycle: Nighttime cool air pool retention and daytime evaporative updraft.',
          diagramType: 'section'
        },
        specs: [
          { label: 'Courtyard Ratio', value: 'Width-to-height proportion 1:1.8 for optimal solar shading' },
          { label: 'Thermal Mass', value: '450mm sun-baked adobe and lime mortar exterior envelope' },
          { label: 'Water Evaporation', value: 'Central octagonal marble basin with constant gravity fountain' },
          { label: 'Microclimate Delta', value: '-8.5°C lower ambient peak temperature compared to public street' }
        ]
      },
      {
        heading: '02. The Thermodynamic Diurnal Clock',
        paragraphs: [
          'At night, the heavy stone floor of the courtyard radiates heat into the clear desert night sky, chilling the dense pool of air that settles at the floor level. By sunrise, the ground floor rooms are bathed in crisp 18°C air.',
          'As the merciless midsummer sun rises overhead, the narrow courtyard geometry prevents direct sunlight from penetrating the living colonnades until noon. When the courtyard air finally warms, it gently ascends, drawing replacement air across damp reed mats and through the shaded lower galleries. No compressor, no mechanical chiller, no electricity—just solar physics.'
        ]
      }
    ],
    conclusion: 'In our era of runaway grid energy consumption, the courtyard is not an obsolete historical relic; it is an impeccably engineered blueprint for climate resilience in high-density urban housing.',
    footnotes: [
      'Burckhardt, T. (1992). Fez, City of Islam. Islamic Texts Society.',
      'Fathy, H. (1986). Natural Energy and Vernacular Architecture. University of Chicago Press.'
    ],
    initialClaps: 115,
    initialComments: [
      {
        id: 'c4',
        author: 'Ziad Mansour',
        role: 'Faculty of Architecture, Amman',
        timestamp: '5 days ago',
        content: 'The driba entrance turn is such a profound spatial threshold. It provides both visual modesty and an acoustic shock absorber that eliminates the roar of the souk within two strides.',
        likes: 22
      }
    ]
  },
  {
    id: 'art-04',
    slug: 'adaptive-reuse-post-industrial-city',
    title: 'Adaptive Reuse in the Post-Industrial City: Granaries, Mills, and the New Public Realm',
    subtitle: 'Why the most radical contemporary civic spaces are not built from tabula rasa, but carved from the stubborn husks of obsolete manufacture.',
    excerpt: 'Demolition is a failure of imagination. From London’s Tate Modern to Cape Town’s Zeitz MOCAA and the Ruhr Valley’s industrial cathedrals, architects are proving that the tension between raw industrial utilitarianism and contemporary cultural assembly yields our most resonant architecture.',
    category: 'Adaptive Reuse',
    author: {
      name: 'Claire Dumont',
      role: 'Urban Regeneration Strategist',
      affiliation: 'Studio Patrimoine, Brussels & Lille',
      avatarInitials: 'CD',
      avatarBg: '#14532D',
      bio: 'Claire Dumont advises European metropolitan regions on retrofitting brownfield infrastructure. She was awarded the Mies Crown Hall Americas Prize for adaptive conservation.'
    },
    publishedDate: 'September 22, 2026',
    readTimeMinutes: 7,
    edition: 'Vol. XI · Issue 3',
    plateNumber: 'PLATE 04 / AR-U',
    palette: {
      accent: '#14532D',
      bgAccent: '#F0FDF4',
      borderAccent: '#BBF7D0',
      diagramTone: '#166534'
    },
    tags: ['Adaptive Reuse', 'Industrial Heritage', 'Circular Economy', 'Public Architecture', 'Embodied Energy'],
    sections: [
      {
        heading: '01. The Resistance of Monumental Volume',
        paragraphs: [
          'When Thomas Heatherwick’s studio sliced into the forty-two concrete vertical tubes of Cape Town’s 1921 grain silo complex to create the Zeitz MOCAA, they did not mimic the existing geometry, nor did they obliterate it. They cut an organic, vaulted atrium using diamond-wire saws, treating the thick aggregate walls like a quarry of fossilized industrial memory.',
          'Such spaces possess a heroic scale that no contemporary developer would dare finance on an empty plot. The soaring ceilings, oversized crane gantries, and brute concrete hoppers provide a spatial luxury born entirely of functional obsolescence.'
        ],
        pullQuote: {
          text: 'Never demolish what can be inhabited. Add, transform, and extend with generosity. The most sustainable building is always the one already standing.',
          attribution: 'Anne Lacaton & Jean-Philippe Vassal, Pritzker Acceptance Speech'
        },
        figure: {
          number: 'Fig. 4.1',
          caption: 'Spatial carving diagram: Subtraction of cellular concrete silo tubes to forge a monolithic public galleria.',
          diagramType: 'elevation'
        },
        specs: [
          { label: 'Embodied Carbon Saved', value: 'Approx. 8,400 tonnes CO2e avoided through silo retention' },
          { label: 'Cutting Tolerance', value: '±3mm precision diamond wire sawing through 350mm structural walls' },
          { label: 'Thermal Envelope', value: 'High-performance secondary internal glass skin with 60mm thermal break' },
          { label: 'Floor-to-Ceiling Max', value: '33.5 meters uninterrupted central atrium verticality' }
        ]
      },
      {
        heading: '02. Palimpsest as Civic Authenticity',
        paragraphs: [
          'In an era characterized by frictionless, glass-box corporate banality, citizens crave spatial friction. They want to touch walls scarred by grease, soot, and the repetitive impact of heavy freight. This palimpsest—the visible layer upon layer of human occupation—grounds communities in time.'
        ]
      }
    ],
    conclusion: 'Adaptive reuse is not an archival nostalgic retreat; it is a forward-looking ecological discipline that discovers beauty in the rugged scars of labor and manufacture.',
    footnotes: [
      'Lacaton, A., & Vassal, J. P. (2017). Transformation of Housing Blocks. Detail Structure.',
      'Heatherwick, T. (2018). Making: Architecture and Craft at Zeitz MOCAA. Thames & Hudson.'
    ],
    initialClaps: 87,
    initialComments: [
      {
        id: 'c5',
        author: 'Julian Thorne',
        role: 'Landscape Architect, Manchester',
        timestamp: '1 week ago',
        content: 'Spot on about spatial friction. The Ruhr Valley landscape park did the same thing with blast furnaces. Transforming rusty cooling towers into diving tanks and climbing walls gives civic dignity back to industrial communities.',
        likes: 11
      }
    ]
  },
  {
    id: 'art-05',
    slug: 'thermal-commons-cooling-megacities',
    title: 'The Thermal Commons: Public Cooling as Civic Right in Warming Megacities',
    subtitle: 'Moving beyond private air-conditioned enclaves toward shaded urban corridors, evaporative mistscapes, and communal thermal refuges.',
    excerpt: 'As global summer heatwaves shatter records from Ahmedabad to Madrid, air conditioning has become an engine of spatial apartheid. The affluent retreat into hermetic chilled towers, dumping waste heat directly onto street vendors, bus riders, and pedestrians trapped in the urban heat island.',
    category: 'Urban Ecology & Climate',
    author: {
      name: 'Dr. Rahul Varma',
      role: 'Director of Tropical Urbanism Lab',
      affiliation: 'School of Planning & Architecture, New Delhi',
      avatarInitials: 'RV',
      avatarBg: '#B45309',
      bio: 'Dr. Rahul Varma leads research into passive urban cooling and municipal thermal shelter networks across South Asia and the Persian Gulf.'
    },
    publishedDate: 'September 16, 2026',
    readTimeMinutes: 7,
    edition: 'Vol. XI · Issue 3',
    plateNumber: 'PLATE 05 / TC-E',
    palette: {
      accent: '#B45309',
      bgAccent: '#FFFBEB',
      borderAccent: '#FDE68A',
      diagramTone: '#B45309'
    },
    tags: ['Thermal Commons', 'Urban Heat Island', 'Climate Justice', 'Passive Shading', 'Public Space'],
    sections: [
      {
        heading: '01. The Parasitic Nature of Private Chill',
        paragraphs: [
          'Mechanical vapor-compression refrigeration does not destroy heat; it merely displaces it. For every degree Celsius an interior luxury apartment is cooled, the exterior condensing unit dumps roughly 1.3 degrees of high-enthalpy thermal exhaust straight into the public streetscape.',
          'This creates an intolerable feedback loop: the hotter the street becomes, the more the wealthy seal their windows and run their split-system compressors, cooking the vulnerable unhoused and minimum-wage transit commuters walking beneath their overhangs.'
        ],
        pullQuote: {
          text: 'Cool air cannot remain a private luxury commodity bought with kilowatts. In the Anthropocene, shade and evaporative breeze must be treated as water and clean air: basic constitutional rights.',
          attribution: 'Dr. Rahul Varma, Thermal Justice in the Global South, 2025'
        },
        figure: {
          number: 'Fig. 5.1',
          caption: 'Urban street canyon thermal transect: Comparison between standard asphalt canyon and engineered microclimate canopy with high-albedo paving.',
          diagramType: 'section'
        },
        specs: [
          { label: 'Solar Reflectance Index', value: 'SRI ≥ 82 for permeable cool-pavements' },
          { label: 'Canopy Density', value: '45% mature urban crown coverage in dense pedestrian priority zones' },
          { label: 'Ambient Reduction', value: 'Up to 6.2°C surface temperature mitigation under bio-misted colonnades' },
          { label: 'Peak COP Ratio', value: 'Replaced DX chillers with centralized district radiant absorption systems' }
        ]
      },
      {
        heading: '02. Architectures of the Deep Shade',
        paragraphs: [
          'To counter this thermal apartheid, cities must revive the architectural typology of the *thermal commons*. In ancient Seville, movable canvas awnings (*toldos*) were strung between rooftops, transforming narrow commercial lanes into temperate pedestrian tunnels throughout July and August.',
          'In contemporary Singapore, the pedestrian network is shielded by hundreds of kilometers of continuous covered walkways linked with bioswales and prevailing monsoon ventilation shafts. The city functions as a contiguous thermodynamic organism, welcoming all citizens regardless of balance sheet.'
        ]
      }
    ],
    conclusion: 'A city that cannot keep its most vulnerable residents alive without demanding an electric utility fee is a failing city. The battle for urban climate resilience will be won or lost in the design of public shade.',
    footnotes: [
      'Varma, R. (2025). The Thermodynamics of Class in South Asian Megacities. Oxford University Press.',
      'Santamouris, M. (2020). "Recent progress on mitigation technologies to tackle urban heat island and improve urban microclimate", Solar Energy, 203, 290–306.'
    ],
    initialClaps: 167,
    initialComments: [
      {
        id: 'c6',
        author: 'Maria Morales',
        role: 'City Planner, Seville',
        timestamp: '4 days ago',
        content: 'Our municipal Toldos program reduces street level asphalt temperatures by nearly 9°C! People underestimate how simple fabric and natural airflow can outmatch millions of dollars in mechanical systems.',
        likes: 27
      }
    ]
  },
  {
    id: 'art-06',
    slug: 'acoustic-topographies-concert-halls',
    title: 'Acoustic Topographies: Designing Concert Halls from the Inside Out',
    subtitle: 'From the classical shoebox to vineyard terracing: how spatial geometry sculpts sound waves and collective listening.',
    excerpt: 'Great acoustic architecture is invisible sculpture. In world-class concert halls, every wooden facet, curved ceiling reflector, and porous wall contour is calibrated to delay, diffuse, and enrich auditory reflections within milliseconds.',
    category: 'Tectonics & Materials',
    author: {
      name: 'Matthias Grau',
      role: 'Acoustical Architect & Cellist',
      affiliation: 'Grau & Partner Acoustic Design, Hamburg',
      avatarInitials: 'MG',
      avatarBg: '#0F766E',
      bio: 'Matthias Grau collaborates with philharmonic societies across Germany and Japan. His practice blends parametric ray tracing with traditional timber lutherie.'
    },
    publishedDate: 'September 10, 2026',
    readTimeMinutes: 7,
    edition: 'Vol. XI · Issue 3',
    plateNumber: 'PLATE 06 / AC-S',
    palette: {
      accent: '#0F766E',
      bgAccent: '#F0FDFA',
      borderAccent: '#99F6E4',
      diagramTone: '#0F766E'
    },
    tags: ['Acoustics', 'Concert Halls', 'Vineyard Typology', 'Ray Tracing', 'Auditory Architecture'],
    sections: [
      {
        heading: '01. The Tyranny of the Shoebox',
        paragraphs: [
          'For more than a century, Vienna’s Musikverein (1870) and Boston’s Symphony Hall (1900) established the golden standard of symphonic sound: the narrow, tall, rectangular "shoebox." This geometry guarantees strong early lateral reflections from side walls to the listener’s ears, creating a sensation of being enveloped within a warm, cohesive sonic bath.',
          'Yet the shoebox imposes severe spatial penalties. Sightlines in the rear balconies are distant, patrons feel separated from the performers across an aristocratic proscenium, and hall capacity is strictly constrained to roughly 2,000 seats before clarity collapses.'
        ],
        pullQuote: {
          text: 'Sound does not travel in two dimensions like a floor plan. It expands as an omnidirectional volumetric pressure wave, bouncing between surfaces like light through a prism.',
          attribution: 'Hans Scharoun, Berlin Philharmonie Design Notes, 1957'
        },
        figure: {
          number: 'Fig. 6.1',
          caption: 'Ray-tracing simulation model comparing early arrival sound reflection paths in Vineyard vs. Classical Shoebox geometries.',
          diagramType: 'section'
        },
        specs: [
          { label: 'Reverberation Time (RT60)', value: '2.1 seconds at 500 Hz (fully occupied hall)' },
          { label: 'Initial Time Delay Gap (ITDG)', value: '18 milliseconds between direct and first lateral reflection' },
          { label: 'Diffuser Material', value: 'High-density 40mm cast gypsum-fiber panels with micro-grooving' },
          { label: 'Audience Distance Max', value: 'No listener seated farther than 31 meters from conductor' }
        ]
      },
      {
        heading: '02. Scharoun and the Vineyard Revolution',
        paragraphs: [
          'When Hans Scharoun unveiled the Berlin Philharmonie in 1963, he shattered the classical shoebox. By positioning the orchestra in the center and breaking the audience into stepped, irregular vineyard terraces, he achieved two breakthroughs at once.',
          'Socially, it democratized listening: musicians and citizens shared a single unbroken communal room. Acoustically, the low terrace retaining walls served double-duty as miniature lateral reflectors, bouncing crisp early sound down into each seating cluster while retaining an airy, cavernous room volume overhead.'
        ]
      }
    ],
    conclusion: 'To design a concert hall is to shape air itself. When stone, timber, and spatial geometry align, architecture ceases to be static matter and becomes an active instrument of sonic transcendence.',
    footnotes: [
      'Barron, M. (2010). Auditorium Acoustics and Architectural Design. Spon Press.',
      'Toyota, Y., & Nagata Acoustics (2020). Sound Spaces: The Science and Art of Concert Hall Architecture. Birkhäuser.'
    ],
    initialClaps: 74,
    initialComments: [
      {
        id: 'c7',
        author: 'Chloe Dupont',
        role: 'Orchestral Director, Paris',
        timestamp: '6 days ago',
        content: 'Playing in the Berlin Philharmonie versus a shoebox hall is like speaking in an intimate salon versus shouting across a railway tunnel. The acoustic immediacy is extraordinary.',
        likes: 15
      }
    ]
  },
  {
    id: 'art-07',
    slug: 'geometry-of-light-tadao-ando',
    title: 'The Geometry of Light: Tadao Ando and the Metaphysics of Slits',
    subtitle: 'Examining the Church of the Light and the Row House in Sumiyoshi: where pure geometry and shadow sanctify concrete.',
    excerpt: 'Tadao Ando’s mastery does not reside in the smoothness of his silk-like concrete surfaces, but in his ruthless discipline of subtraction. By piercing impenetrable concrete mass with knife-edge slits of daylight, he elevates architecture to a silent spiritual dialogue.',
    category: 'Spatial Philosophy',
    author: {
      name: 'Kenzo Takahashi',
      role: 'Architectural Critic & Curator',
      affiliation: 'Kyoto Institute of Spatial Arts, Kyoto',
      avatarInitials: 'KT',
      avatarBg: '#374151',
      bio: 'Kenzo Takahashi writes extensively on post-war Japanese phenomenology, Sukiya-zukuri traditions, and modern concrete minimalism.'
    },
    publishedDate: 'September 4, 2026',
    readTimeMinutes: 6,
    edition: 'Vol. XI · Issue 2',
    plateNumber: 'PLATE 07 / GL-A',
    palette: {
      accent: '#475569',
      bgAccent: '#F8FAFC',
      borderAccent: '#E2E8F0',
      diagramTone: '#1E293B'
    },
    tags: ['Tadao Ando', 'Minimalism', 'Metaphysics', 'Japanese Architecture', 'Concrete'],
    sections: [
      {
        heading: '01. The Sacrificial Surface',
        paragraphs: [
          'In the Ibaraki suburb of Osaka, surrounded by banal pre-fabricated timber suburban dwellings, stands the Church of the Light (1989). Its plan is absurdly elementary: a concrete cube of six meters per side, sliced diagonally at a fifteen-degree angle by a free-standing wall.',
          'There is no gold leaf, no altar painting, no plush carpeting. The floor consists of rough scaffold boards painted black. In the altar wall, two perpendicular slits form a cruciform void cut directly through the 380mm reinforced concrete shell.'
        ],
        pullQuote: {
          text: 'Light alone does not make light. There must be darkness for light to become radiant. Darkness is the mother of spatial depth.',
          attribution: 'Tadao Ando, Conversations with Students'
        },
        figure: {
          number: 'Fig. 7.1',
          caption: 'Geometric plan and solar vector diagram of Church of the Light: The cruciform incision and intersecting diagonal barrier.',
          diagramType: 'plan'
        },
        specs: [
          { label: 'Poured Wall Thickness', value: '380mm fair-faced architectural concrete' },
          { label: 'Formwork Module', value: 'Traditional Japanese Tatami proportions (900mm × 1800mm shuttering)' },
          { label: 'Tie-Rod Pattern', value: 'Brass-sheathed cone plugs recessed precisely 25mm at 450mm intervals' },
          { label: 'Glazing Inset', value: 'Frameless low-iron structural glass recessed into concrete rebates without exposed mullions' }
        ]
      },
      {
        heading: '02. In Praise of Shadows and Rain',
        paragraphs: [
          'Earlier in his career, with the Row House in Sumiyoshi (Azuma House, 1976), Ando dared to insert an unroofed central courtyard right in the middle of a tiny Osaka townhouse. To move from the bedroom to the bathroom or the kitchen on a freezing rainy morning, the occupants were forced to open an umbrella inside their own home.',
          'Critics denounced it as unlivable cruelty. Ando’s reply was uncompromising: modern urbanites had traded their sensory connection to nature for thermal anesthesia. By letting the cold rain, the summer humidity, and the celestial moon into the heart of the dwelling, the house reclaimed human vulnerability and poetic wonder.'
        ]
      }
    ],
    conclusion: 'Ando’s legacy reminds us that true luxury is not expensive marble or gold leaf, but the courage to sit in silent concrete communion with a solitary beam of falling daylight.',
    footnotes: [
      'Ando, T. (1995). Tadao Ando: Complete Works. Phaidon Press.',
      'Tanizaki, J. (1977). In Praise of Shadows. Leete’s Island Books.'
    ],
    initialClaps: 204,
    initialComments: [
      {
        id: 'c8',
        author: 'David Szekeres',
        role: 'Architectural Photographer, Budapest',
        timestamp: '3 days ago',
        content: 'I photographed the Church of the Light at dawn. As the sun rises, the cross does not just brighten—it seems to project a solid beam of light that physically cuts through the dust particles in the air like a laser.',
        likes: 31
      }
    ]
  },
  {
    id: 'art-08',
    slug: 'subterranean-cities-transit-hubs',
    title: 'Subterranean Cities: Below-Grade Architecture and the Future of Dense Transit Hubs',
    subtitle: 'Re-engineering life beneath the surface: daylight wells, air plenums, and structural gymnastics in subterranean metropolitan hubs.',
    excerpt: 'As mega-cities exhaust their horizontal footprints, the frontier of urban architecture shifts downward. Beneath Tokyo, Montreal, and Paris lie vast multi-level subterranean networks that challenge our preconceptions of underground space as dark, claustrophobic bunkers.',
    category: 'Urban Ecology & Climate',
    author: {
      name: 'Dr. Elena Rostova',
      role: 'Geotechnical Urban Planner',
      affiliation: 'Institute for Underground Space, ETH Zurich',
      avatarInitials: 'ER',
      avatarBg: '#0369A1',
      bio: 'Dr. Elena Rostova leads global research into deep-station interchange human factors, fire evacuation ergonomics, and underground natural illumination.'
    },
    publishedDate: 'August 29, 2026',
    readTimeMinutes: 7,
    edition: 'Vol. XI · Issue 2',
    plateNumber: 'PLATE 08 / SB-T',
    palette: {
      accent: '#0369A1',
      bgAccent: '#F0F9FF',
      borderAccent: '#BAE6FD',
      diagramTone: '#0369A1'
    },
    tags: ['Subterranean', 'Transit Hubs', 'Infrastructure', 'Geotechnical', 'Civil Engineering'],
    sections: [
      {
        heading: '01. The Inversion of the Skyline',
        paragraphs: [
          'We have spent two centuries celebrating the vertical skyscraper as the ultimate symbol of municipal ambition. Yet in Tokyo’s Shinjuku Station—where 3.5 million human beings transit daily across more than two hundred exits—the true engineering masterpiece descends six levels below street grade into fractured volcanic tuff and high water tables.',
          'Designing underground requires an inversion of classical architectural instincts. In a subterranean cavern, there are no exterior facades, no conventional elevations, and no natural orientation marks like distant hills or the setting sun. Without meticulous spatial cues, passengers experience profound cognitive disorientation.'
        ],
        pullQuote: {
          text: 'The underground must not be designed as a buried box, but as an inverted topography of light wells, air shafts, and continuous visual axes.',
          attribution: 'Dr. Elena Rostova, Designing the Deep City'
        },
        figure: {
          number: 'Fig. 8.1',
          caption: 'Vertical station section: Funnel skylight driving natural daylight 24 meters below street level through hyper-polished parabolic mirrors.',
          diagramType: 'section'
        },
        specs: [
          { label: 'Sub-Grade Depth', value: '-34.5 meters below street grade' },
          { label: 'Daylight Penetration', value: '250 lux natural ambient illumination at concourse level' },
          { label: 'Hydraulic Cut-Off', value: '1.2m reinforced slurry diaphragm walls socketed 3m into impermeable bedrock' },
          { label: 'Air Exchange Velocity', value: '8.4 air changes per hour via low-velocity piston effect dampers' }
        ]
      },
      {
        heading: '02. Carving Light into Bedrock',
        paragraphs: [
          'The greatest subterranean spaces of the twenty-first century—such as Canary Wharf station in London by Foster + Partners or the Fulton Center in New York by Grimshaw—solve this through monumental light scoops. By dropping massive glass domes down through the pavement, daylight streams straight onto the train platforms, providing visual anchors that guide travelers intuitively toward surface exits.'
        ]
      }
    ],
    conclusion: 'As extreme surface climate conditions escalate, the subterranean realm will evolve from mere transit utility into the climate-buffered civic spine of twenty-first-century megacities.',
    footnotes: [
      'Rostova, E. (2024). Subterranean Urbanism: The Tectonic Frontier. Birkhauser Basel.',
      'Sterling, R. (2018). Underground Space Planning: A Guide to the Spatial Matrix. Elsevier.'
    ],
    initialClaps: 61,
    initialComments: [
      {
        id: 'c9',
        author: 'Tetsuo Mori',
        role: 'Railway Safety Director, Tokyo',
        timestamp: '1 week ago',
        content: 'The psychological impact of sightlines cannot be overstated. In our newly renovated Otemachi platforms, opening up vertical sightlines to the mezzanine cut passenger anxiety and platform dwelling times by 18 percent.',
        likes: 9
      }
    ]
  },
  {
    id: 'art-09',
    slug: 'biophilic-skins-living-facades',
    title: 'Biophilic Skins: Living Facades Beyond Ornamental Greenery',
    subtitle: 'From potted plant gimmicks to genuine engineered botanical ecosystems that clean greywater, host pollinators, and insulate buildings.',
    excerpt: 'Too many contemporary "green towers" treat vegetation as greenwash wallpaper—expensive plastic-potted plants doomed to die without constant chemical fertilizers. A truly regenerative biophilic facade functions as a living biological skin integrated with building hydrology.',
    category: 'Urban Ecology & Climate',
    author: {
      name: 'Dr. Vivienne Leclair',
      role: 'Ecological Envelope Scientist',
      affiliation: 'Institute for Bio-Integrated Architecture, Singapore',
      avatarInitials: 'VL',
      avatarBg: '#15803D',
      bio: 'Dr. Vivienne Leclair specializes in epiphytic plant integration, lightweight cellular growth substrates, and wastewater bio-filtration in tropical high-rises.'
    },
    publishedDate: 'August 18, 2026',
    readTimeMinutes: 7,
    edition: 'Vol. XI · Issue 1',
    plateNumber: 'PLATE 09 / BF-S',
    palette: {
      accent: '#15803D',
      bgAccent: '#F0FDF4',
      borderAccent: '#DCFCE7',
      diagramTone: '#15803D'
    },
    tags: ['Biophilic Design', 'Living Facades', 'Greywater Treatment', 'Urban Ecology', 'Thermal Insulation'],
    sections: [
      {
        heading: '01. The Tragedy of Greenwashing Wallpaper',
        paragraphs: [
          'In architectural renderings, green facades always appear triumphant: lush cascading bougainvillea, emerald ferns, and flocking butterflies resting gracefully on luxury cantilevered balconies. But visit those same towers three years after handover, and you frequently find withered twigs, stained stucco, and humming diesel maintenance lifts hoisting replacement soil at staggering expense.',
          'Ornamental green facades fail because they treat plants as static interior decor instead of living, dynamic ecosystems. If a plant cannot survive the high shear winds and desiccation of the thirtieth floor, wrapping it in plastic geotextile felt will only prolong its agonizing decay.'
        ],
        pullQuote: {
          text: 'A building envelope should not pretend to be a virgin forest; it should be an engineered cliff face, hosting lithophytic species adapted over millennia to thrive on sheer stone in wind and drought.',
          attribution: 'Dr. Vivienne Leclair, Flora of the Built Cliff'
        },
        figure: {
          number: 'Fig. 9.1',
          caption: 'Biophilic envelope cross-section: Greywater phytoremediation root trays, porous volcanic rock substrate, and bronze aerodynamic wind baffles.',
          diagramType: 'section'
        },
        specs: [
          { label: 'Substrate Composition', value: '70% expanded pumice, 20% composted coconut coir, 10% biochar (zero peat moss)' },
          { label: 'Irrigation Sourcing', value: '100% building greywater filtered via anaerobic biological baffle trays' },
          { label: 'Wind Resistance', value: 'Tested up to 42 m/s typhoon gust velocities without plant dislocation' },
          { label: 'Biodiversity Metric', value: 'Over 48 native pollinator and avian species supported across facade gradient' }
        ]
      },
      {
        heading: '02. The Facade as Metabolic Kidney',
        paragraphs: [
          'At the Oasia Hotel Downtown in Singapore, WOHA architects designed an aluminum mesh facade enveloped by 21 species of creeping vines and flowering epiphytes. Rather than relying on potable municipal water, the building feeds the facade using condensate harvested from air-conditioning cooling coils and treated sink runoff.',
          'The facade acts as the metabolic kidney of the building: transpirational cooling reduces external surface temperatures by up to 25°C, while airborne particulate matter (PM2.5) is trapped on foliage and washed harmlessly into base bioswales during heavy monsoon rains.'
        ]
      }
    ],
    conclusion: 'When biology and structural engineering merge with scientific humility, buildings stop being parasitic consumers of resources and become active ecological contributors to urban biosphere repair.',
    footnotes: [
      'Wong, N. H., & Tan, P. Y. (2018). Vertical Greenery for the Tropics. National Parks Board Singapore.',
      'Leclair, V. (2025). Lithophytic Communities on High-Altitude Envelopes. Journal of Bio-Tectonics, 7(3), 112–129.'
    ],
    initialClaps: 133,
    initialComments: [
      {
        id: 'c10',
        author: 'Siddharth Rao',
        role: 'Landscape Ecologist, Bengaluru',
        timestamp: '2 weeks ago',
        content: 'The comparison to natural cliff faces is brilliant. In our Bengaluru projects, we switched entirely to native lithophytic orchids and wild ferns found in Western Ghat rock outcrops, and mortality dropped to near zero without fertilizers.',
        likes: 18
      }
    ]
  },
  {
    id: 'art-10',
    slug: '15-minute-neighborhood-spatial-equity',
    title: 'The 15-Minute Neighborhood: Spatial Equity and the Unmaking of Car Hegemony',
    subtitle: 'Rethinking proximity, public realm allocation, and municipal zoning to liberate cities from automotive dependency.',
    excerpt: 'The 15-minute city is not a surveillance conspiracy or a bourgeois lifestyle trend. At its core, it is an urgent egalitarian struggle for the most scarce urban asset: time. When essential work, education, fresh food, and healthcare require an hour of traffic gridlock, spatial inequality becomes personal exhaustion.',
    category: 'Spatial Philosophy',
    author: {
      name: 'Carlos Mendez-Vega',
      role: 'Professor of Urban Economics',
      affiliation: 'Polytechnic University of Barcelona',
      avatarInitials: 'CM',
      avatarBg: '#9333EA',
      bio: 'Carlos Mendez-Vega advises city halls in Bogota, Paris, and Barcelona on superblock implementation and car-free school street networks.'
    },
    publishedDate: 'August 7, 2026',
    readTimeMinutes: 8,
    edition: 'Vol. XI · Issue 1',
    plateNumber: 'PLATE 10 / UR-P',
    palette: {
      accent: '#9333EA',
      bgAccent: '#FAF5FF',
      borderAccent: '#F3E8FF',
      diagramTone: '#7E22CE'
    },
    tags: ['15-Minute City', 'Superblocks', 'Urban Equity', 'Pedestrianization', 'Mobility'],
    sections: [
      {
        heading: '01. The Geometry of Automotive Colonization',
        paragraphs: [
          'Take any mid-sized European or North American city, and measure its public surface area. Between 50 and 70 percent of all municipal land between building frontages is dedicated exclusively to the private automobile: asphalt lanes, on-street parallel parking, surface lots, and access ramps.',
          'Consider the absurdity: a two-ton metal box, carrying on average 1.2 passengers, occupies fourteen square meters of prime civic real estate while stationary for 95 percent of its mechanical lifespan. No other sector of modern society tolerates such catastrophic spatial inefficiency.'
        ],
        pullQuote: {
          text: 'The car is not merely a mode of transport; it is a land-use ideology that criminalizes proximity and subsidizes suburban isolation at public expense.',
          attribution: 'Carlos Mendez-Vega, Reclaiming the Street'
        },
        figure: {
          number: 'Fig. 10.1',
          caption: 'Barcelona Superblock circulation typology: Diverting through-traffic to perimeter arterials to liberate internal intersections for public parks.',
          diagramType: 'plan'
        },
        specs: [
          { label: 'Internal Speed Limit', value: '10 km/h pedestrian priority (pedestrians have right of way anywhere in roadway)' },
          { label: 'Noise Level Delta', value: '-6.4 dB reduction in ambient street noise in implemented superblocks' },
          { label: 'Green Surface Gain', value: '+300% increase in public canopy and permeable ground cover' },
          { label: 'Local Commerce Impact', value: '+14% year-over-year revenue growth for ground-floor storefronts' }
        ]
      },
      {
        heading: '02. Barcelona’s Superilles in Practice',
        paragraphs: [
          'In Barcelona’s Poblenou and Sant Antoni districts, the *Superilles* (Superblocks) model proved that transformational change does not require decades of tunneling or trillions in capital expenditure. By rearranging one-way traffic arrows, painting street surfaces, and placing planters at crossroads, through-traffic was routed around nine-block grids.',
          'Almost overnight, asphalt that had been dominated by delivery vans and speeding taxis transformed into children’s roller-skating plazas, elder seating circles, and outdoor cafe terraces. When you remove cars, you do not create an empty vacuum—you restore the city to human life.'
        ]
      }
    ],
    conclusion: 'The 15-minute city is the fundamental recognition that proximity is freedom. A truly civilized city is not one where the poor own cars, but one where the wealthy take public transit and walk with their neighbors.',
    footnotes: [
      'Moreno, C. (2024). The 15-Minute City: A Solution to Saving Our Time and Our Planet. Wiley.',
      'Gehl, J. (2010). Cities for People. Island Press.'
    ],
    initialClaps: 245,
    initialComments: [
      {
        id: 'c11',
        author: 'Nathalie Roux',
        role: 'Pedestrian Advocacy Coordinator, Lyon',
        timestamp: '3 weeks ago',
        content: 'The metric of children playing independently in the street is the truest indicator of a healthy civilization. Since our school street closures in Lyon, respiratory hospitalizations among toddlers in the district fell by 22 percent.',
        likes: 41
      }
    ]
  }
];

export const CATEGORIES = [
  'All',
  'Brutalism & Concrete',
  'Tectonics & Materials',
  'Urban Ecology & Climate',
  'Spatial Philosophy',
  'Adaptive Reuse'
] as const;
