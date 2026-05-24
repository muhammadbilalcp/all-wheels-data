export type Car = {
  slug: string;
  make: string;
  model: string;
  year: number;
  era: string; // e.g. "Modern", "Classic", "Vintage"
  category: string; // Sports, Sedan, SUV, Hypercar, EV, Muscle, Off-road, Hot Hatch
  origin: string; // country
  engine: string;
  displacement: string;
  power: string; // hp
  torque: string;
  drivetrain: string; // RWD/AWD/FWD
  transmission: string;
  topSpeed: string;
  zeroToSixty: string;
  weight: string;
  price: string; // launch / approx
  production: string;
  description: string;
  notable: string[];
};

export const cars: Car[] = [
  {
    slug: "ferrari-f40-1987",
    make: "Ferrari", model: "F40", year: 1987, era: "Classic", category: "Hypercar", origin: "Italy",
    engine: "Twin-turbo V8", displacement: "2.9 L", power: "478 hp", torque: "424 lb-ft",
    drivetrain: "RWD", transmission: "5-speed manual", topSpeed: "201 mph", zeroToSixty: "3.8 s",
    weight: "2,425 lb", price: "$400,000 (1987)", production: "1,315 units",
    description: "Enzo Ferrari's last personally approved car. A stripped, kevlar-bodied missile built to celebrate Ferrari's 40th anniversary.",
    notable: ["First production car to exceed 200 mph", "No carpet, no radio, no door handles", "Sliding plexiglass windows"],
  },
  {
    slug: "porsche-911-carrera-rs-1973",
    make: "Porsche", model: "911 Carrera RS 2.7", year: 1973, era: "Vintage", category: "Sports", origin: "Germany",
    engine: "Flat-6", displacement: "2.7 L", power: "210 hp", torque: "188 lb-ft",
    drivetrain: "RWD", transmission: "5-speed manual", topSpeed: "152 mph", zeroToSixty: "5.8 s",
    weight: "2,116 lb", price: "DM 34,000 (1973)", production: "1,580 units",
    description: "The original ducktail. Lightweight homologation special that defined the Porsche 911 mythos for the next half century.",
    notable: ["Iconic 'ducktail' spoiler", "Lightweight thin-gauge steel", "Sport (M471) and Touring (M472) trims"],
  },
  {
    slug: "lamborghini-miura-p400-1966",
    make: "Lamborghini", model: "Miura P400", year: 1966, era: "Vintage", category: "Sports", origin: "Italy",
    engine: "V12", displacement: "3.9 L", power: "350 hp", torque: "262 lb-ft",
    drivetrain: "RWD", transmission: "5-speed manual", topSpeed: "171 mph", zeroToSixty: "6.7 s",
    weight: "2,855 lb", price: "$20,000 (1966)", production: "764 units (all P400)",
    description: "The car that invented the supercar. Mid-engined, transverse V12, impossibly low.",
    notable: ["First mid-engine production supercar", "Designed by 25-year-old Marcello Gandini", "Engine and gearbox share oil"],
  },
  {
    slug: "mclaren-f1-1992",
    make: "McLaren", model: "F1", year: 1992, era: "Classic", category: "Hypercar", origin: "United Kingdom",
    engine: "BMW S70/2 V12", displacement: "6.1 L", power: "618 hp", torque: "480 lb-ft",
    drivetrain: "RWD", transmission: "6-speed manual", topSpeed: "240.1 mph", zeroToSixty: "3.2 s",
    weight: "2,509 lb", price: "$815,000 (1994)", production: "106 units",
    description: "Gordon Murray's no-compromise masterpiece. Central driving position, gold-lined engine bay, and the fastest naturally aspirated production car ever made.",
    notable: ["Central driver seat with two passengers", "Gold foil engine bay heat shielding", "Held top-speed record 12 years"],
  },
  {
    slug: "bugatti-chiron-2016",
    make: "Bugatti", model: "Chiron", year: 2016, era: "Modern", category: "Hypercar", origin: "France",
    engine: "Quad-turbo W16", displacement: "8.0 L", power: "1,479 hp", torque: "1,180 lb-ft",
    drivetrain: "AWD", transmission: "7-speed dual-clutch", topSpeed: "261 mph (limited)", zeroToSixty: "2.4 s",
    weight: "4,400 lb", price: "$2,900,000", production: "500 units",
    description: "Successor to the Veyron. Four turbos, sixteen cylinders, a single-minded pursuit of speed without compromise.",
    notable: ["Top speed electronically limited", "Tires last only 15 minutes at top speed", "Carbon-fiber monocoque"],
  },
  {
    slug: "tesla-model-s-plaid-2021",
    make: "Tesla", model: "Model S Plaid", year: 2021, era: "Modern", category: "EV", origin: "United States",
    engine: "Tri-motor electric", displacement: "—", power: "1,020 hp", torque: "1,050 lb-ft",
    drivetrain: "AWD", transmission: "Single-speed", topSpeed: "200 mph", zeroToSixty: "1.99 s",
    weight: "4,766 lb", price: "$129,990", production: "Ongoing",
    description: "The sedan that humiliated supercars. Three motors, carbon-sleeved rotors, sub-2-second acceleration.",
    notable: ["Quickest production car (0-60)", "405 mi range", "Yoke steering wheel"],
  },
  {
    slug: "ford-mustang-gt350-1965",
    make: "Ford", model: "Mustang Shelby GT350", year: 1965, era: "Vintage", category: "Muscle", origin: "United States",
    engine: "V8", displacement: "4.7 L", power: "306 hp", torque: "329 lb-ft",
    drivetrain: "RWD", transmission: "4-speed manual", topSpeed: "133 mph", zeroToSixty: "6.5 s",
    weight: "2,800 lb", price: "$4,547 (1965)", production: "562 units",
    description: "Carroll Shelby's transformation of the Mustang from secretary's car to SCCA champion.",
    notable: ["SCCA B-Production champion 1965-1967", "Hood scoop and side exhausts", "No back seat (originally)"],
  },
  {
    slug: "nissan-skyline-gtr-r34-1999",
    make: "Nissan", model: "Skyline GT-R V-Spec (R34)", year: 1999, era: "Classic", category: "Sports", origin: "Japan",
    engine: "Twin-turbo I6 (RB26DETT)", displacement: "2.6 L", power: "276 hp (claimed)", torque: "289 lb-ft",
    drivetrain: "AWD", transmission: "6-speed manual", topSpeed: "165 mph", zeroToSixty: "4.9 s",
    weight: "3,400 lb", price: "¥4,999,000 (1999)", production: "11,578 units",
    description: "Godzilla. The car that beat Porsches at the Nürburgring and Europeans at their own game.",
    notable: ["ATTESA E-TS Pro AWD system", "Multifunction LCD display", "RB26DETT capable of 600+ hp tuned"],
  },
  {
    slug: "mazda-mx5-miata-1989",
    make: "Mazda", model: "MX-5 Miata (NA)", year: 1989, era: "Classic", category: "Sports", origin: "Japan",
    engine: "I4", displacement: "1.6 L", power: "115 hp", torque: "100 lb-ft",
    drivetrain: "RWD", transmission: "5-speed manual", topSpeed: "121 mph", zeroToSixty: "8.6 s",
    weight: "2,116 lb", price: "$13,800 (1989)", production: "431,506 units (NA)",
    description: "The roadster reborn. A tiny, perfectly balanced 50/50 weight distribution machine that proved fun has nothing to do with horsepower.",
    notable: ["Best-selling roadster in history", "Pop-up headlights", "Jinba ittai design philosophy"],
  },
  {
    slug: "land-rover-defender-90-1990",
    make: "Land Rover", model: "Defender 90", year: 1990, era: "Classic", category: "Off-road", origin: "United Kingdom",
    engine: "Diesel I4 / V8 options", displacement: "2.5 L", power: "107 hp", torque: "188 lb-ft",
    drivetrain: "4WD", transmission: "5-speed manual", topSpeed: "82 mph", zeroToSixty: "16.0 s",
    weight: "3,800 lb", price: "£14,000 (1990)", production: "Discontinued 2016",
    description: "Aluminum-bodied, ladder-framed icon. Goes anywhere, fixes with a hammer.",
    notable: ["Aluminum alloy body", "Used by militaries worldwide", "Production ran 1983–2016"],
  },
  {
    slug: "volkswagen-golf-gti-mk1-1976",
    make: "Volkswagen", model: "Golf GTI (Mk1)", year: 1976, era: "Vintage", category: "Hot Hatch", origin: "Germany",
    engine: "I4", displacement: "1.6 L", power: "108 hp", torque: "103 lb-ft",
    drivetrain: "FWD", transmission: "4-speed manual", topSpeed: "113 mph", zeroToSixty: "9.0 s",
    weight: "1,810 lb", price: "DM 13,850 (1976)", production: "462,000 units (Mk1 GTI)",
    description: "The car that invented the hot hatch. Tartan seats, golf-ball shift knob, red grille trim.",
    notable: ["Originated the 'hot hatch' segment", "Tartan cloth interior", "Golf-ball gear knob"],
  },
  {
    slug: "honda-nsx-1990",
    make: "Honda", model: "NSX", year: 1990, era: "Classic", category: "Sports", origin: "Japan",
    engine: "V6 VTEC", displacement: "3.0 L", power: "270 hp", torque: "210 lb-ft",
    drivetrain: "RWD", transmission: "5-speed manual", topSpeed: "168 mph", zeroToSixty: "5.7 s",
    weight: "3,010 lb", price: "$60,000 (1990)", production: "18,734 units",
    description: "Senna helped tune the suspension. The everyday supercar that taught Ferrari about reliability.",
    notable: ["All-aluminum monocoque", "Developed with input from Ayrton Senna", "Titanium connecting rods"],
  },
  {
    slug: "bmw-e30-m3-1986",
    make: "BMW", model: "M3 (E30)", year: 1986, era: "Classic", category: "Sports", origin: "Germany",
    engine: "S14 I4", displacement: "2.3 L", power: "192 hp", torque: "170 lb-ft",
    drivetrain: "RWD", transmission: "5-speed manual", topSpeed: "146 mph", zeroToSixty: "6.7 s",
    weight: "2,866 lb", price: "$34,000 (1988)", production: "17,970 units",
    description: "Homologation for DTM. Box-flared, naturally aspirated, the purest M-car.",
    notable: ["Won DTM championship multiple times", "Boxed fender flares", "Only shares hood/sunroof with regular E30"],
  },
  {
    slug: "chevrolet-corvette-c8-2020",
    make: "Chevrolet", model: "Corvette Stingray (C8)", year: 2020, era: "Modern", category: "Sports", origin: "United States",
    engine: "LT2 V8", displacement: "6.2 L", power: "495 hp", torque: "470 lb-ft",
    drivetrain: "RWD", transmission: "8-speed dual-clutch", topSpeed: "194 mph", zeroToSixty: "2.9 s",
    weight: "3,366 lb", price: "$60,000", production: "Ongoing",
    description: "First mid-engine Corvette. Supercar performance at a sports-car price.",
    notable: ["First mid-engine Corvette in 67 years", "No manual transmission option", "Removable roof panel"],
  },
  {
    slug: "toyota-supra-mk4-1993",
    make: "Toyota", model: "Supra Turbo (A80)", year: 1993, era: "Classic", category: "Sports", origin: "Japan",
    engine: "2JZ-GTE twin-turbo I6", displacement: "3.0 L", power: "320 hp", torque: "315 lb-ft",
    drivetrain: "RWD", transmission: "6-speed manual", topSpeed: "155 mph (limited)", zeroToSixty: "4.6 s",
    weight: "3,485 lb", price: "$40,000 (1994)", production: "11,239 units",
    description: "The 2JZ legend. Cast-iron block so overbuilt it took the tuner world by storm.",
    notable: ["2JZ-GTE engine famously overbuilt", "Featured in The Fast and the Furious", "Targa top option"],
  },
  {
    slug: "audi-quattro-1980",
    make: "Audi", model: "Quattro", year: 1980, era: "Vintage", category: "Sports", origin: "Germany",
    engine: "Turbo I5", displacement: "2.1 L", power: "197 hp", torque: "210 lb-ft",
    drivetrain: "AWD", transmission: "5-speed manual", topSpeed: "137 mph", zeroToSixty: "7.1 s",
    weight: "2,866 lb", price: "$35,000 (1983)", production: "11,452 units",
    description: "The car that brought all-wheel drive to performance. Rewrote rally racing overnight.",
    notable: ["Pioneered AWD in performance cars", "Dominated Group B rally", "Inline-5 warbling exhaust"],
  },
  {
    slug: "jaguar-e-type-1961",
    make: "Jaguar", model: "E-Type Series 1", year: 1961, era: "Vintage", category: "Sports", origin: "United Kingdom",
    engine: "I6 (XK)", displacement: "3.8 L", power: "265 hp", torque: "260 lb-ft",
    drivetrain: "RWD", transmission: "4-speed manual", topSpeed: "150 mph", zeroToSixty: "7.1 s",
    weight: "2,770 lb", price: "$5,595 (1961)", production: "72,520 units (all E-Type)",
    description: "Enzo Ferrari called it 'the most beautiful car ever made.' Long-nosed, monocoque, impossibly elegant.",
    notable: ["Permanent MoMA collection", "Independent rear suspension (rare for era)", "Monocoque construction"],
  },
  {
    slug: "mercedes-300sl-gullwing-1954",
    make: "Mercedes-Benz", model: "300 SL Gullwing", year: 1954, era: "Vintage", category: "Sports", origin: "Germany",
    engine: "I6 (M198)", displacement: "3.0 L", power: "215 hp", torque: "203 lb-ft",
    drivetrain: "RWD", transmission: "4-speed manual", topSpeed: "163 mph", zeroToSixty: "8.8 s",
    weight: "2,855 lb", price: "$7,295 (1954)", production: "1,400 units",
    description: "The first production car with direct fuel injection. Doors that opened to the sky.",
    notable: ["First production fuel-injected car", "Gullwing doors due to tubular spaceframe", "Fastest production car of its time"],
  },
  {
    slug: "subaru-impreza-22b-1998",
    make: "Subaru", model: "Impreza 22B STI", year: 1998, era: "Classic", category: "Sports", origin: "Japan",
    engine: "Turbo flat-4", displacement: "2.2 L", power: "276 hp (claimed)", torque: "267 lb-ft",
    drivetrain: "AWD", transmission: "5-speed manual", topSpeed: "155 mph", zeroToSixty: "4.7 s",
    weight: "2,800 lb", price: "¥5,000,000 (1998)", production: "424 units",
    description: "Built to celebrate Subaru's third consecutive WRC manufacturers' title. Sold out in 30 minutes.",
    notable: ["Sold out in 30 minutes", "Widened fenders by 80mm", "Only 16 exported to UK officially"],
  },
  {
    slug: "porsche-959-1986",
    make: "Porsche", model: "959", year: 1986, era: "Classic", category: "Hypercar", origin: "Germany",
    engine: "Twin-turbo flat-6", displacement: "2.8 L", power: "444 hp", torque: "369 lb-ft",
    drivetrain: "AWD", transmission: "6-speed manual", topSpeed: "197 mph", zeroToSixty: "3.6 s",
    weight: "3,190 lb", price: "$225,000 (1987)", production: "337 units",
    description: "Rolling laboratory. Computer-controlled AWD, tire-pressure monitoring, twin sequential turbos in 1986.",
    notable: ["First production car with tire-pressure monitoring", "Sequential twin-turbo system", "Won Paris-Dakar in 1986"],
  },
  {
    slug: "rolls-royce-phantom-2017",
    make: "Rolls-Royce", model: "Phantom VIII", year: 2017, era: "Modern", category: "Sedan", origin: "United Kingdom",
    engine: "Twin-turbo V12", displacement: "6.75 L", power: "563 hp", torque: "664 lb-ft",
    drivetrain: "RWD", transmission: "8-speed automatic", topSpeed: "155 mph (limited)", zeroToSixty: "5.1 s",
    weight: "5,644 lb", price: "$460,000", production: "Ongoing",
    description: "The pinnacle of luxury. 'Magic carpet' ride from a satellite-aided transmission.",
    notable: ["Bespoke 'Gallery' dashboard art", "Aluminum spaceframe ('Architecture of Luxury')", "Self-righting wheel center caps"],
  },
  {
    slug: "rimac-nevera-2021",
    make: "Rimac", model: "Nevera", year: 2021, era: "Modern", category: "EV", origin: "Croatia",
    engine: "Quad-motor electric", displacement: "—", power: "1,914 hp", torque: "1,741 lb-ft",
    drivetrain: "AWD", transmission: "Single-speed", topSpeed: "256 mph", zeroToSixty: "1.74 s",
    weight: "5,070 lb", price: "$2,400,000", production: "150 units",
    description: "The fastest accelerating production car ever made. Built in Croatia by a company that started in a garage.",
    notable: ["Holds 23 acceleration world records", "120 kWh battery in the floor", "Torque vectoring per wheel"],
  },
  {
    slug: "ford-gt40-mk-ii-1966",
    make: "Ford", model: "GT40 Mk II", year: 1966, era: "Vintage", category: "Hypercar", origin: "United States",
    engine: "V8", displacement: "7.0 L", power: "485 hp", torque: "475 lb-ft",
    drivetrain: "RWD", transmission: "4-speed manual", topSpeed: "210 mph", zeroToSixty: "3.9 s",
    weight: "2,470 lb", price: "Racing-only", production: "8 units (Mk II)",
    description: "Henry Ford's revenge on Ferrari. 1-2-3 finish at Le Mans, 1966.",
    notable: ["1-2-3 Le Mans finish 1966", "Beat Ferrari four years running", "40 inches tall, hence 'GT40'"],
  },
  {
    slug: "dodge-charger-rt-1969",
    make: "Dodge", model: "Charger R/T", year: 1969, era: "Vintage", category: "Muscle", origin: "United States",
    engine: "440 Magnum V8", displacement: "7.2 L", power: "375 hp", torque: "480 lb-ft",
    drivetrain: "RWD", transmission: "4-speed manual", topSpeed: "150 mph", zeroToSixty: "6.5 s",
    weight: "3,671 lb", price: "$3,592 (1969)", production: "20,057 units",
    description: "Coke-bottle styling, hideaway headlights, and the meanest muscle on the boulevard.",
    notable: ["The 'General Lee' of Dukes of Hazzard", "Hideaway headlights", "Hemi engine available"],
  },
  {
    slug: "alpine-a110-1962",
    make: "Alpine", model: "A110 Berlinette", year: 1962, era: "Vintage", category: "Sports", origin: "France",
    engine: "Renault I4", displacement: "1.6 L", power: "138 hp", torque: "104 lb-ft",
    drivetrain: "RWD", transmission: "5-speed manual", topSpeed: "130 mph", zeroToSixty: "6.3 s",
    weight: "1,540 lb", price: "FF 39,000 (1971)", production: "7,489 units",
    description: "Tiny fiberglass rear-engine giant-killer. Won the inaugural World Rally Championship in 1973.",
    notable: ["Won the inaugural WRC in 1973", "Rear-engined, fiberglass body", "Steel backbone chassis"],
  },
  {
    slug: "citroen-ds-1955",
    make: "Citroën", model: "DS 19", year: 1955, era: "Vintage", category: "Sedan", origin: "France",
    engine: "I4", displacement: "1.9 L", power: "75 hp", torque: "101 lb-ft",
    drivetrain: "FWD", transmission: "4-speed semi-auto", topSpeed: "87 mph", zeroToSixty: "23.3 s",
    weight: "2,690 lb", price: "FF 940,000 (1955)", production: "1,455,746 units",
    description: "From the future. Self-leveling hydropneumatic suspension, swiveling headlights, and a shape from another planet.",
    notable: ["Hydropneumatic self-leveling suspension", "Saved De Gaulle's life in 1962 ambush", "12,000 orders on launch day"],
  },
  {
    slug: "lotus-elise-s1-1996",
    make: "Lotus", model: "Elise (S1)", year: 1996, era: "Classic", category: "Sports", origin: "United Kingdom",
    engine: "Rover K-Series I4", displacement: "1.8 L", power: "118 hp", torque: "122 lb-ft",
    drivetrain: "RWD", transmission: "5-speed manual", topSpeed: "126 mph", zeroToSixty: "5.8 s",
    weight: "1,598 lb", price: "£18,950 (1996)", production: "10,675 units",
    description: "Bonded aluminum chassis weighing just 68 kg. Colin Chapman's 'add lightness' creed in modern form.",
    notable: ["Extruded bonded aluminum chassis", "Chassis weighs only 150 lb", "No power steering or ABS"],
  },
  {
    slug: "pagani-zonda-c12-1999",
    make: "Pagani", model: "Zonda C12", year: 1999, era: "Classic", category: "Hypercar", origin: "Italy",
    engine: "Mercedes-AMG V12", displacement: "6.0 L", power: "444 hp", torque: "443 lb-ft",
    drivetrain: "RWD", transmission: "5-speed manual", topSpeed: "208 mph", zeroToSixty: "4.2 s",
    weight: "2,756 lb", price: "$320,000 (1999)", production: "5 units (C12)",
    description: "Horacio Pagani's love letter to Juan Manuel Fangio. Carbon-fiber jewelry, AMG thunder.",
    notable: ["Designed with Fangio's input", "Quad center-exit exhaust", "All-carbon-fiber monocoque"],
  },
  {
    slug: "koenigsegg-jesko-2022",
    make: "Koenigsegg", model: "Jesko Absolut", year: 2022, era: "Modern", category: "Hypercar", origin: "Sweden",
    engine: "Twin-turbo V8", displacement: "5.0 L", power: "1,600 hp (E85)", torque: "1,106 lb-ft",
    drivetrain: "RWD", transmission: "9-speed Light Speed", topSpeed: "330+ mph (claimed)", zeroToSixty: "2.5 s",
    weight: "3,131 lb", price: "$2,800,000", production: "125 units",
    description: "Engineered with the singular goal of being the fastest production car ever.",
    notable: ["Claimed top speed >330 mph", "9-speed multi-clutch gearbox", "Hollow carbon-fiber wheels"],
  },
  {
    slug: "aston-martin-db5-1963",
    make: "Aston Martin", model: "DB5", year: 1963, era: "Vintage", category: "Sports", origin: "United Kingdom",
    engine: "I6", displacement: "4.0 L", power: "282 hp", torque: "288 lb-ft",
    drivetrain: "RWD", transmission: "5-speed manual", topSpeed: "145 mph", zeroToSixty: "7.1 s",
    weight: "3,233 lb", price: "£4,175 (1963)", production: "1,059 units",
    description: "James Bond's car. Silver Birch, ejector seat optional.",
    notable: ["Featured in Goldfinger (1964)", "ZF 5-speed manual transmission", "Coachbuilt aluminum body by Touring"],
  },
  {
    slug: "volvo-240-1974",
    make: "Volvo", model: "240", year: 1974, era: "Classic", category: "Sedan", origin: "Sweden",
    engine: "I4 (B21)", displacement: "2.1 L", power: "97 hp", torque: "118 lb-ft",
    drivetrain: "RWD", transmission: "4-speed manual", topSpeed: "100 mph", zeroToSixty: "13.5 s",
    weight: "3,000 lb", price: "$5,690 (1975)", production: "2,862,053 units",
    description: "The boxy immortal. Defined safety standards used by NHTSA for decades.",
    notable: ["Used by NHTSA as crash benchmark", "Produced for 19 years nearly unchanged", "Famous for million-mile reliability"],
  },
  {
    slug: "jeep-wrangler-yj-1986",
    make: "Jeep", model: "Wrangler YJ", year: 1986, era: "Classic", category: "Off-road", origin: "United States",
    engine: "I6", displacement: "4.2 L", power: "112 hp", torque: "210 lb-ft",
    drivetrain: "4WD", transmission: "5-speed manual", topSpeed: "92 mph", zeroToSixty: "12.0 s",
    weight: "3,000 lb", price: "$9,395 (1987)", production: "685,071 units (YJ)",
    description: "Square headlights and all, the YJ kept the Willys spirit alive into the modern era.",
    notable: ["Only Wrangler with square headlights", "Removable doors and roof", "Solid axles front and rear"],
  },
  {
    slug: "fiat-500-1957",
    make: "Fiat", model: "Nuova 500", year: 1957, era: "Vintage", category: "Compact", origin: "Italy",
    engine: "Rear air-cooled I2", displacement: "0.5 L", power: "13 hp", torque: "21 lb-ft",
    drivetrain: "RWD", transmission: "4-speed manual", topSpeed: "53 mph", zeroToSixty: "—",
    weight: "1,100 lb", price: "ITL 490,000 (1957)", production: "3,893,294 units",
    description: "Postwar Italy on four tiny wheels. Three meters of cheerful, indispensable design.",
    notable: ["Permanent MoMA collection", "Air-cooled to avoid radiator costs", "Rear-engined, like the Beetle"],
  },
  {
    slug: "lucid-air-sapphire-2023",
    make: "Lucid", model: "Air Sapphire", year: 2023, era: "Modern", category: "EV", origin: "United States",
    engine: "Tri-motor electric", displacement: "—", power: "1,234 hp", torque: "1,430 lb-ft",
    drivetrain: "AWD", transmission: "Single-speed", topSpeed: "205 mph", zeroToSixty: "1.89 s",
    weight: "5,336 lb", price: "$249,000", production: "Ongoing",
    description: "An EV super-sedan from the engineers who built the Model S powertrain.",
    notable: ["Most efficient EV ever made (4.6 mi/kWh)", "427 mi range", "900V architecture"],
  },
  {
    slug: "mini-cooper-s-1963",
    make: "Mini", model: "Cooper S Mk1", year: 1963, era: "Vintage", category: "Compact", origin: "United Kingdom",
    engine: "I4", displacement: "1.1 L", power: "70 hp", torque: "62 lb-ft",
    drivetrain: "FWD", transmission: "4-speed manual", topSpeed: "97 mph", zeroToSixty: "10.9 s",
    weight: "1,500 lb", price: "£695 (1963)", production: "45,000 (Cooper S 1963-71)",
    description: "Won the Monte Carlo Rally three times. Transverse engine, FWD packaging genius.",
    notable: ["Won Monte Carlo Rally '64, '65, '67", "Transverse engine pioneered packaging", "Wheels at the corners"],
  },
  {
    slug: "toyota-corolla-2024",
    make: "Toyota", model: "Corolla SE", year: 2024, era: "Modern", category: "Sedan", origin: "Japan",
    engine: "I4", displacement: "2.0 L", power: "169 hp", torque: "151 lb-ft",
    drivetrain: "FWD", transmission: "CVT", topSpeed: "120 mph", zeroToSixty: "8.2 s",
    weight: "3,150 lb", price: "$24,000", production: "Ongoing (50M+ all time)",
    description: "The best-selling nameplate in automotive history. Pure transportation, refined for the 12th time.",
    notable: ["Best-selling car nameplate ever (50M+)", "Continuous production since 1966", "Hybrid available"],
  },
  {
    slug: "lancia-stratos-hf-1973",
    make: "Lancia", model: "Stratos HF", year: 1973, era: "Vintage", category: "Sports", origin: "Italy",
    engine: "Ferrari Dino V6", displacement: "2.4 L", power: "190 hp", torque: "166 lb-ft",
    drivetrain: "RWD", transmission: "5-speed manual", topSpeed: "143 mph", zeroToSixty: "6.8 s",
    weight: "2,160 lb", price: "ITL 7,500,000 (1973)", production: "492 units",
    description: "First car designed from scratch for rally. Won the WRC three years running.",
    notable: ["WRC Manufacturers' titles 1974-76", "Ferrari Dino V6 mid-mounted", "Wraparound wedge windshield"],
  },
  {
    slug: "ford-f150-raptor-2017",
    make: "Ford", model: "F-150 Raptor", year: 2017, era: "Modern", category: "Off-road", origin: "United States",
    engine: "Twin-turbo V6 (EcoBoost)", displacement: "3.5 L", power: "450 hp", torque: "510 lb-ft",
    drivetrain: "4WD", transmission: "10-speed automatic", topSpeed: "107 mph (limited)", zeroToSixty: "5.1 s",
    weight: "5,697 lb", price: "$50,000", production: "Ongoing",
    description: "A Baja prerunner you can buy at a Ford dealer. Fox internal-bypass shocks, 13 inches of travel.",
    notable: ["Fox Racing internal-bypass shocks", "13 inches of suspension travel", "Aluminum body"],
  },
  {
    slug: "mercedes-amg-gt-black-series-2020",
    make: "Mercedes-AMG", model: "GT Black Series", year: 2020, era: "Modern", category: "Sports", origin: "Germany",
    engine: "Twin-turbo flat-plane V8", displacement: "4.0 L", power: "720 hp", torque: "590 lb-ft",
    drivetrain: "RWD", transmission: "7-speed dual-clutch", topSpeed: "202 mph", zeroToSixty: "3.1 s",
    weight: "3,627 lb", price: "$325,000", production: "Limited",
    description: "Held the Nürburgring production-car lap record. Active aero, flat-plane V8 howl.",
    notable: ["Set Nürburgring production record 2020", "Flat-plane crank V8 (rare for AMG)", "Manually adjustable rear wing"],
  },
];

export const makes = Array.from(new Set(cars.map((c) => c.make))).sort();
export const categories = Array.from(new Set(cars.map((c) => c.category))).sort();
export const eras = ["Vintage", "Classic", "Modern"];

export function getCarBySlug(slug: string) {
  return cars.find((c) => c.slug === slug);
}

export function getCarImage(car: Car, width = 1200, height = 800): string {
  const prompt = encodeURIComponent(`${car.year} ${car.make} ${car.model} automotive photography professional studio lighting`);
  return `https://image.pollinations.ai/prompt/${prompt}?width=${width}&height=${height}&nologo=true&seed=${car.slug}`;
}