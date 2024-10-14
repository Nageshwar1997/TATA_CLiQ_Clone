const categories = [
  {
    label: "Women's Fashion",
    levelOne: "womens_fashion",
    items: [
      {
        label: "Shop All Ethnic Wear",
        levelTwo: "ethnic_wear",
        items: [
          {
            label: "Kurtis & Kurtas",
            levelThree: "kurtis_and_kurtas",
          },
          {
            label: "Suits",
            levelThree: "suits",
          },
          {
            label: "Sarees",
            levelThree: "sarees",
          },
          {
            label: "Lehengas",
            levelThree: "lehengas",
          },
          {
            label: "Bottoms",
            levelThree: "bottoms",
          },
          {
            label: "Blouses & Fabrics",
            levelThree: "blouses_and_fabrics",
          },
          {
            label: "Dupattas",
            levelThree: "dupattas",
          },
        ],
      },
      {
        label: "Shop All Western Wear",
        levelTwo: "western_wear",
        items: [
          {
            label: "Tops & T-shirts",
            levelThree: "tops_and_tshirts",
          },
          {
            label: "Dresses",
            levelThree: "dresses",
          },
          {
            label: "Jeans",
            levelThree: "jeans",
          },
          {
            label: "Shirts",
            levelThree: "shirts",
          },
          {
            label: "Trousers",
            levelThree: "trousers",
          },
          {
            label: "Skirts",
            levelThree: "skirts",
          },
          {
            label: "Shorts",
            levelThree: "shorts",
          },
          {
            label: "Jackets & Blazers",
            levelThree: "jackets_and_blazers",
          },
          {
            label: "Leggings",
            levelThree: "leggings",
          },
          {
            label: "Capris",
            levelThree: "capris",
          },
          {
            label: "Jumpsuits",
            levelThree: "jumpsuits",
          },
          {
            label: "Shrugs",
            levelThree: "shrugs",
          },
          {
            label: "Sweaters",
            levelThree: "sweaters",
          },
          {
            label: "Sweatshirts",
            levelThree: "sweatshirts",
          },
        ],
      },
      {
        label: "Activewear & Sportswear",
        levelTwo: "activewear_and_sportswear",
        items: [
          {
            label: "T-shirts",
            levelThree: "tshirts",
          },
          {
            label: "Shorts",
            levelThree: "shorts_activewear",
          },
          {
            label: "Sets",
            levelThree: "sets",
          },
          {
            label: "Jackets",
            levelThree: "jackets_activewear",
          },
          {
            label: "Track Pants",
            levelThree: "track_pants",
          },
          {
            label: "Innerwear",
            levelThree: "innerwear",
          },
        ],
      },
      {
        label: "Lingerie & Lounge Sets",
        levelTwo: "lingerie_and_lounge_sets",
        items: [
          {
            label: "Bras",
            levelThree: "bras",
          },
          {
            label: "Panties",
            levelThree: "panties",
          },
          {
            label: "Lingerie Sets",
            levelThree: "lingerie_sets",
          },
          {
            label: "Camisoles",
            levelThree: "camisoles",
          },
          {
            label: "Sleepwear & Robes",
            levelThree: "sleepwear_and_robes",
          },
          {
            label: "Shapewear",
            levelThree: "shapewear",
          },
          {
            label: "Swimwear",
            levelThree: "swimwear",
          },
        ],
      },
      {
        label: "Shop All Footwear",
        levelTwo: "footwear",
        items: [
          {
            label: "Casual Footwear",
            levelThree: "casual_footwear",
          },
          {
            label: "Boots",
            levelThree: "boots",
          },
          {
            label: "Sneakers",
            levelThree: "sneakers",
          },
          {
            label: "Flip Flops",
            levelThree: "flip_flops",
          },
          {
            label: "Sports Shoes",
            levelThree: "sports_shoes",
          },
          {
            label: "Ethnic Footwear",
            levelThree: "ethnic_footwear",
          },
        ],
      },
      {
        label: "Bags, Wallets & Clutches",
        levelTwo: "bags_and_wallets_and_clutches",
        items: [
          {
            label: "Handbags",
            levelThree: "handbags",
          },
          {
            label: "Tote Bags",
            levelThree: "tote_bags",
          },
          {
            label: "Sling Bags",
            levelThree: "sling_bags",
          },
          {
            label: "Backpacks",
            levelThree: "backpacks",
          },
          {
            label: "Wallets",
            levelThree: "wallets",
          },
          {
            label: "Clutches",
            levelThree: "clutches",
          },
          {
            label: "Premium Handbags",
            levelThree: "premium_handbags",
          },
        ],
      },
      {
        label: "Jewellery",
        levelTwo: "jewellery",
        items: [
          {
            label: "Gold",
            levelThree: "gold",
          },
          {
            label: "Diamond",
            levelThree: "diamond",
          },
          {
            label: "Silver",
            levelThree: "silver",
          },
          {
            label: "Fashion Jewellery",
            levelThree: "fashion_jewellery",
          },
        ],
      },
      {
        label: "Watches",
        levelTwo: "watches",
        items: [
          {
            label: "Smart",
            levelThree: "smart_watches",
          },
        ],
      },
    ],
  },
  {
    label: "Men's Fashion",
    levelOne: "mens_fashion",
    items: [
      {
        label: "Tops",
        levelTwo: "tops",
        items: [
          { label: "T-shirts", levelThree: "tshirts" },
          { label: "Polo T-shirts", levelThree: "polo_tshirts" },
          { label: "Shirts", levelThree: "shirts" },
          { label: "Formal Shirts", levelThree: "formal_shirts" },
          { label: "Sweatshirts", levelThree: "sweatshirts" },
          { label: "Jackets", levelThree: "jackets" },
          { label: "Suits", levelThree: "suits" },
          { label: "Blazers", levelThree: "blazers" },
        ],
      },
      {
        label: "Bottoms",
        levelTwo: "bottoms",
        items: [
          { label: "Jeans", levelThree: "jeans" },
          { label: "Chinos", levelThree: "chinos" },
          { label: "Trousers", levelThree: "trousers" },
          { label: "Formal Trousers", levelThree: "formal_trousers" },
          { label: "Shorts", levelThree: "shorts" },
          { label: "Joggers", levelThree: "joggers" },
          { label: "Trackpants", levelThree: "trackpants" },
        ],
      },
      {
        label: "Activewear",
        levelTwo: "activewear",
        items: [
          { label: "T-Shirts & Jerseys", levelThree: "tshirts_and_jerseys" },
          { label: "Sports Shorts", levelThree: "sports_shorts" },
          { label: "Sports Jackets", levelThree: "sports_jackets" },
          { label: "Joggers", levelThree: "joggers_activewear" },
        ],
      },
      {
        label: "Innerwear",
        levelTwo: "innerwear",
        items: [
          { label: "Boxers", levelThree: "boxers" },
          { label: "Briefs", levelThree: "briefs" },
          { label: "Trunks", levelThree: "trunks" },
          { label: "Vests", levelThree: "vests" },
          { label: "Night Suits", levelThree: "night_suits" },
        ],
      },
      {
        label: "Footwear",
        levelTwo: "footwear",
        items: [
          { label: "Casual Shoes", levelThree: "casual_shoes" },
          { label: "Sneakers", levelThree: "sneakers" },
          { label: "Formal Shoes", levelThree: "formal_shoes" },
          { label: "Running Shoes", levelThree: "running_shoes" },
          { label: "Training Shoes", levelThree: "training_shoes" },
          { label: "Sports Shoes", levelThree: "sports_shoes" },
          { label: "Boots", levelThree: "boots" },
          { label: "Flip Flops", levelThree: "flip_flops" },
          { label: "Sandals & Floaters", levelThree: "sandals_and_floaters" },
        ],
      },
      {
        label: "Watches",
        levelTwo: "watches",
        items: [
          { label: "Smartwatches", levelThree: "smartwatches" },
          { label: "Work Watches", levelThree: "work_watches" },
          { label: "Casual Watches", levelThree: "casual_watches" },
          { label: "Party Watches", levelThree: "party_watches" },
          { label: "Digital Watches", levelThree: "digital_watches" },
          {
            label: "Multifunctional Watches",
            levelThree: "multifunctional_watches",
          },
        ],
      },
      {
        label: "Bags, Backpacks & Wallets",
        levelTwo: "bags_backpacks_wallets",
        items: [
          { label: "Backpacks", levelThree: "backpacks" },
          { label: "Wallets", levelThree: "wallets" },
          { label: "Messenger Bags", levelThree: "messenger_bags" },
          { label: "Crossbody Bags", levelThree: "crossbody_bags" },
        ],
      },
      {
        label: "Fashion Accessories",
        levelTwo: "fashion_accessories",
        items: [
          { label: "Belts", levelThree: "belts" },
          { label: "Ties", levelThree: "ties" },
          { label: "Cufflinks", levelThree: "cufflinks" },
          { label: "Sunglasses", levelThree: "sunglasses" },
          { label: "Caps", levelThree: "caps" },
        ],
      },
      {
        label: "Sports & Fitness",
        levelTwo: "sports_and_fitness",
        items: [
          { label: "Fitness Equipment", levelThree: "fitness_equipment" },
          { label: "Sports Equipment", levelThree: "sports_equipment" },
          { label: "Treadmill", levelThree: "treadmill" },
        ],
      },
    ],
  },
  {
    label: "Kid's Fashion",
    levelOne: "kids_fashion",
    items: [
      {
        label: "Girls Clothing",
        levelTwo: "girls_clothing",
        items: [
          { label: "Tops", levelThree: "tops" },
          { label: "Jeans & Trousers", levelThree: "jeans_and_trousers" },
          { label: "Dresses", levelThree: "dresses" },
          { label: "Activewear", levelThree: "activewear" },
          {
            label: "Jumpsuits & Dungarees",
            levelThree: "jumpsuits_and_dungarees",
          },
          {
            label: "Skirts, Shorts & Jumpsuits",
            levelThree: "skirts_shorts_and_jumpsuits",
          },
          { label: "Ethnic Wear", levelThree: "ethnic_wear" },
          { label: "Matching Sets", levelThree: "matching_sets" },
          { label: "Sleepwear", levelThree: "sleepwear" },
          { label: "Winter Wear", levelThree: "winter_wear" },
        ],
      },
      {
        label: "Boys Clothing",
        levelTwo: "boys_clothing",
        items: [
          { label: "T-shirts & Polos", levelThree: "tshirts_and_polos" },
          { label: "Shirts", levelThree: "shirts" },
          { label: "Jeans & Trousers", levelThree: "jeans_and_trousers" },
          { label: "Shorts & Dungarees", levelThree: "shorts_and_dungarees" },
          { label: "Activewear", levelThree: "activewear" },
          { label: "Ethnic Wear", levelThree: "ethnic_wear" },
          { label: "Inner Wear", levelThree: "inner_wear" },
          { label: "Sleepwear", levelThree: "sleepwear" },
          { label: "Winter Wear", levelThree: "winter_wear" },
        ],
      },
      {
        label: "Footwear",
        levelTwo: "footwear",
        items: [
          { label: "Girls' Footwear", levelThree: "girls_footwear" },
          { label: "Boys' Footwear", levelThree: "boys_footwear" },
        ],
      },
      {
        label: "Infants",
        levelTwo: "infants",
        items: [
          { label: "Jeans & Trousers", levelThree: "jeans_and_trousers" },
          { label: "Tops & T-shirts", levelThree: "tops_and_tshirts" },
          { label: "Matching Sets", levelThree: "matching_sets" },
          {
            label: "Jumpsuits & Dungarees",
            levelThree: "jumpsuits_and_dungarees",
          },
          { label: "Dresses", levelThree: "dresses" },
          { label: "Shirts", levelThree: "shirts" },
          { label: "Ethnic Wear", levelThree: "ethnic_wear" },
          { label: "Shorts & Jumpsuits", levelThree: "shorts_and_jumpsuits" },
          { label: "Winter Wear", levelThree: "winter_wear" },
        ],
      },
      {
        label: "Shop By Age",
        levelTwo: "shop_by_age",
        items: [
          { label: "0 - 6 Months", levelThree: "0_to_6_months" },
          { label: "6 - 12 Months", levelThree: "6_to_12_months" },
          { label: "12 - 24 Months", levelThree: "12_to_24_months" },
          { label: "2 - 6 Years", levelThree: "2_to_6_years" },
          { label: "6 - 12 Years", levelThree: "6_to_12_years" },
          { label: "12 - 16 Years", levelThree: "12_to_16_years" },
        ],
      },
    ],
  },
  {
    label: "Home & Kitchen",
    levelOne: "home_and_kitchen",
    items: [
      {
        label: "Furniture",
        levelTwo: "furniture",
        items: [
          { label: "Living Room", levelThree: "living_room" },
          { label: "Bedroom", levelThree: "bedroom" },
          { label: "Dining Room", levelThree: "dining_room" },
        ],
      },
      {
        label: "Bedding & Linen",
        levelTwo: "bedding_and_linen",
        items: [
          { label: "Bedsheets", levelThree: "bedsheets" },
          { label: "Bedding Sets", levelThree: "bedding_sets" },
          { label: "Bed Covers", levelThree: "bed_covers" },
          {
            label: "Pillows & Mattresses",
            levelThree: "pillows_and_mattresses",
          },
          { label: "Pillow Covers", levelThree: "pillow_covers" },
          { label: "Comforters", levelThree: "comforters" },
          { label: "Quilts & Rajais", levelThree: "quilts_and_rajais" },
          { label: "Dohars", levelThree: "dohars" },
          { label: "Kids Bedding Linen", levelThree: "kids_bedding_linen" },
        ],
      },
      {
        label: "Bath Linen & Accessories",
        levelTwo: "bath_linen_and_accessories",
        items: [
          { label: "Towels", levelThree: "towels" },
          { label: "Hand Towels", levelThree: "hand_towels" },
          { label: "Face Towels", levelThree: "face_towels" },
          { label: "Bath Mats & Rugs", levelThree: "bath_mats_and_rugs" },
          { label: "Bathrobes", levelThree: "bathrobes" },
          { label: "Kids Bath Linen", levelThree: "kids_bath_linen" },
          { label: "Laundry & Storage", levelThree: "laundry_and_storage" },
        ],
      },
      {
        label: "Room Furnishings",
        levelTwo: "room_furnishings",
        items: [
          { label: "Cushion Covers", levelThree: "cushion_covers" },
          { label: "Cushion Fillers", levelThree: "cushion_fillers" },
          { label: "Rugs & Dhurries", levelThree: "rugs_and_dhurries" },
          { label: "Carpets", levelThree: "carpets" },
          { label: "Doormats", levelThree: "doormats" },
          { label: "Curtains", levelThree: "curtains" },
        ],
      },
      {
        label: "Lamps & Lighting",
        levelTwo: "lamps_and_lighting",
        items: [
          { label: "Table Lamps", levelThree: "table_lamps" },
          { label: "Ceiling Lamps", levelThree: "ceiling_lamps" },
          { label: "Wall Lamps", levelThree: "wall_lamps" },
          { label: "Floor Lamps", levelThree: "floor_lamps" },
          { label: "Decorative Lights", levelThree: "decorative_lights" },
          { label: "Chandeliers", levelThree: "chandeliers" },
        ],
      },
      {
        label: "Kitchen",
        levelTwo: "kitchen",
        items: [
          { label: "Kitchen Appliances", levelThree: "kitchen_appliances" },
          { label: "Pots & Pans", levelThree: "pots_and_pans" },
          { label: "Tawas", levelThree: "tawas" },
          { label: "Kadhai & Woks", levelThree: "kadhai_and_woks" },
          { label: "Pressure Cookers", levelThree: "pressure_cookers" },
          { label: "Casseroles", levelThree: "casseroles" },
          { label: "Cookware Sets", levelThree: "cookware_sets" },
          { label: "Bakeware", levelThree: "bakeware" },
          { label: "Kitchen Tools", levelThree: "kitchen_tools" },
          { label: "Storage Containers", levelThree: "storage_containers" },
        ],
      },
      {
        label: "Tableware",
        levelTwo: "tableware",
        items: [
          { label: "Glassware & Bar", levelThree: "glassware_and_bar" },
          { label: "Serveware", levelThree: "serveware" },
          { label: "Tea & Coffee Sets", levelThree: "tea_and_coffee_sets" },
          { label: "Dinnerware", levelThree: "dinnerware" },
          { label: "Table Linen", levelThree: "table_linen" },
        ],
      },
      {
        label: "Home Decor",
        levelTwo: "home_decor",
        items: [
          { label: "Showpieces", levelThree: "showpieces" },
          { label: "Wall Decor", levelThree: "wall_decor" },
          { label: "Vases", levelThree: "vases" },
          { label: "Photo Frames", levelThree: "photo_frames" },
          { label: "Candles & Holders", levelThree: "candles_and_holders" },
          { label: "Room Fragrances", levelThree: "room_fragrances" },
        ],
      },
    ],
  },
  {
    label: "Beauty",
    levelOne: "beauty",
    items: [
      {
        label: "Fragrance Store",
        levelTwo: "fragrance_store",
        items: [
          { label: "Perfumes", levelThree: "perfumes" },
          { label: "Gift Sets", levelThree: "gift_sets" },
          {
            label: "Deodorants & Anti-Perspirants",
            levelThree: "deodorants_and_anti_perspirants",
          },
          { label: "Body Mists", levelThree: "body_mists" },
          { label: "All Fragrances", levelThree: "all_fragrances" },
        ],
      },
      {
        label: "Makeup",
        levelTwo: "makeup",
        items: [
          { label: "Eyes", levelThree: "eyes" },
          { label: "Face", levelThree: "face" },
          { label: "Lips", levelThree: "lips" },
          { label: "Nails", levelThree: "nails" },
          { label: "All Makeup", levelThree: "all_makeup" },
        ],
      },
      {
        label: "Skin",
        levelTwo: "skin",
        items: [
          { label: "Cleansers", levelThree: "cleansers" },
          {
            label: "Moisturizers & Serums",
            levelThree: "moisturizers_and_serums",
          },
          {
            label: "Facial Peels & Masks",
            levelThree: "facial_peels_and_masks",
          },
          { label: "Eye Creams", levelThree: "eye_creams" },
          { label: "Combo Sets", levelThree: "combo_sets" },
          { label: "Men's Skin Care", levelThree: "mens_skin_care" },
          { label: "Natural Skin Care", levelThree: "natural_skin_care" },
          { label: "K-Skin Care", levelThree: "k_skin_care" },
          { label: "Derma Skin Care", levelThree: "derma_skin_care" },
          { label: "All Skin", levelThree: "all_skin" },
        ],
      },
      {
        label: "Hair",
        levelTwo: "hair",
        items: [
          {
            label: "Shampoos & Conditioners",
            levelThree: "shampoos_and_conditioners",
          },
          { label: "Hair Styling & Care", levelThree: "hair_styling_and_care" },
          { label: "Hair Oils", levelThree: "hair_oils" },
          { label: "Hair Masks", levelThree: "hair_masks" },
          {
            label: "Professional Hair Care",
            levelThree: "professional_hair_care",
          },
          { label: "Natural Hair Care", levelThree: "natural_hair_care" },
          { label: "All Hair", levelThree: "all_hair" },
        ],
      },
      {
        label: "Men's Grooming",
        levelTwo: "mens_grooming",
        items: [
          { label: "Shaving", levelThree: "shaving" },
          {
            label: "Beard & Moustache Care",
            levelThree: "beard_and_moustache_care",
          },
          { label: "Grooming Kits", levelThree: "grooming_kits" },
          { label: "All Men's Grooming", levelThree: "all_mens_grooming" },
        ],
      },
      {
        label: "Tools & Accessories",
        levelTwo: "tools_and_accessories",
        items: [
          { label: "Makeup Brushes", levelThree: "makeup_brushes" },
          { label: "Beauty Sponges", levelThree: "beauty_sponges" },
          { label: "Tweezers", levelThree: "tweezers" },
          { label: "Mirror & Tools", levelThree: "mirror_and_tools" },
          { label: "Nail Tools", levelThree: "nail_tools" },
        ],
      },
      {
        label: "Bath & Body",
        levelTwo: "bath_and_body",
        items: [
          { label: "Body Wash", levelThree: "body_wash" },
          { label: "Body Scrubs", levelThree: "body_scrubs" },
          { label: "Moisturizers", levelThree: "moisturizers" },
          { label: "Bath Oils", levelThree: "bath_oils" },
          { label: "Hand Creams", levelThree: "hand_creams" },
        ],
      },
      {
        label: "All Beauty & Grooming",
        levelTwo: "all_beauty_and_grooming",
        items: [
          { label: "Skincare Sets", levelThree: "skincare_sets" },
          { label: "Makeup Removers", levelThree: "makeup_removers" },
          { label: "Fragrance Sets", levelThree: "fragrance_sets" },
          { label: "Hair Care Sets", levelThree: "hair_care_sets" },
          { label: "Men's Grooming Sets", levelThree: "mens_grooming_sets" },
        ],
      },
    ],
  },
  {
    label: "Gadgets",
    levelOne: "gadgets",
    items: [
      {
        label: "Audio",
        levelTwo: "audio",
        items: [
          { label: "Headphones", levelThree: "headphones" },
          { label: "Wired Earphones", levelThree: "wired_earphones" },
          { label: "Headsets", levelThree: "headsets" },
          { label: "Neckbands", levelThree: "neckbands" },
          { label: "TWS Earbuds", levelThree: "tws_earbuds" },
        ],
      },
      {
        label: "Speakers",
        levelThree: "speakers",
        items: [
          { label: "Bluetooth Speakers", levelThree: "bluetooth_speakers" },
          { label: "Soundbars", levelThree: "soundbars" },
          { label: "Home Theatre Systems", levelThree: "home_theatre_systems" },
        ],
      },
      {
        label: "Wearables",
        levelTwo: "wearables",
        items: [
          { label: "Premium Smartwatches", levelThree: "premium_smartwatches" },
        ],
      },
      {
        label: "Personal Care",
        levelTwo: "personal_care",
        items: [
          { label: "Hair Dryers", levelThree: "hair_dryers" },
          { label: "Hair Straighteners", levelThree: "hair_straighteners" },
          { label: "Hair Stylers", levelThree: "hair_stylers" },
          { label: "Trimmers & Shavers", levelThree: "trimmers_and_shavers" },
          { label: "Epilators", levelThree: "epilators" },
          { label: "Oral Care", levelThree: "oral_care" },
          {
            label: "Hair Curlers & Multistylers",
            levelThree: "hair_curlers_and_multistylers",
          },
        ],
      },
      {
        label: "Kitchen Appliances",
        levelTwo: "kitchen_appliances",
        items: [
          {
            label: "Fryers, Cookers & Cooktops",
            levelThree: "fryers_cookers_and_cooktops",
          },
          {
            label: "Mixers & Food Processors",
            levelThree: "mixers_and_food_processors",
          },
          {
            label: "Kettles & Coffee Makers",
            levelThree: "kettles_and_coffee_makers",
          },
          { label: "Electric Choppers", levelThree: "electric_choppers" },
          { label: "OTG", levelThree: "otg" },
          {
            label: "Toasters, Sandwich & Food Makers",
            levelThree: "toasters_sandwich_and_food_makers",
          },
        ],
      },
      {
        label: "Tech Accessories",
        levelTwo: "tech_accessories",
        items: [
          {
            label: "Shop All Tech Accessories",
            levelThree: "shop_all_tech_accessories",
          },
          {
            label: "Fast & Wireless Chargers",
            levelThree: "fast_and_wireless_chargers",
          },
          { label: "Power Banks", levelThree: "power_banks" },
          { label: "Storage Devices", levelThree: "storage_devices" },
          { label: "Cables & Connectors", levelThree: "cables_and_connectors" },
          { label: "Memory Cards", levelThree: "memory_cards" },
        ],
      },
      {
        label: "Smart Gadgets",
        levelTwo: "smart_gadgets",
        items: [
          {
            label: "Shop All Smart Gadgets",
            levelThree: "shop_all_smart_gadgets",
          },
          {
            label: "Smart Assistants & FireTV",
            levelThree: "smart_assistants_and_firetv",
          },
          { label: "Smart Locks & Safes", levelThree: "smart_locks_and_safes" },
          {
            label: "Smart Security Camera",
            levelThree: "smart_security_camera",
          },
          { label: "Lights & Bulbs", levelThree: "lights_and_bulbs" },
          { label: "Smart Plugs", levelThree: "smart_plugs" },
          { label: "Extension Board", levelThree: "extension_board" },
          { label: "Torches", levelThree: "torches" },
        ],
      },
    ],
  },
  {
    label: "Accessories",
    levelOne: "accessories",
    items: [
      {
        label: "Gold Jewellery",
        levelTwo: "gold_jewellery",
        items: [
          { label: "Earrings", levelThree: "gold_earrings" },
          { label: "Chains", levelThree: "gold_chains" },
          { label: "Pendants", levelThree: "gold_pendants" },
          { label: "Necklaces", levelThree: "gold_necklaces" },
          { label: "Mangalsutras", levelThree: "gold_mangalsutras" },
          {
            label: "Bangles & Bracelets",
            levelThree: "gold_bangles_and_bracelets",
          },
        ],
      },
      {
        label: "Diamond Jewellery",
        levelTwo: "diamond_jewellery",
        items: [
          { label: "Earrings", levelThree: "diamond_earrings" },
          { label: "Pendants", levelThree: "diamond_pendants" },
          { label: "Rings", levelThree: "diamond_rings" },
          { label: "Mangalsutras", levelThree: "diamond_mangalsutras" },
          {
            label: "Bangles & Bracelets",
            levelThree: "diamond_bangles_and_bracelets",
          },
          { label: "Necklaces", levelThree: "diamond_necklaces" },
        ],
      },
      {
        label: "Silver Jewellery",
        levelTwo: "silver_jewellery",
        items: [
          { label: "Earrings", levelThree: "silver_earrings" },
          { label: "Rings", levelThree: "silver_rings" },
          { label: "Pendants & Sets", levelThree: "silver_pendants_and_sets" },
          { label: "Necklaces", levelThree: "silver_necklaces" },
          {
            label: "Bangles & Bracelets",
            levelThree: "silver_bangles_and_bracelets",
          },
          {
            label: "Toe Rings & Anklets",
            levelThree: "silver_toe_rings_and_anklets",
          },
        ],
      },
      {
        label: "Fashion Jewellery",
        levelTwo: "fashion_jewellery",
        items: [
          { label: "Earrings", levelThree: "fashion_earrings" },
          { label: "Necklaces", levelThree: "fashion_necklaces" },
          { label: "Pendants & Sets", levelThree: "fashion_pendants_and_sets" },
          {
            label: "Bangles & Bracelets",
            levelThree: "fashion_bangles_and_bracelets",
          },
          { label: "Rings", levelThree: "fashion_rings" },
          { label: "Nosepins", levelThree: "fashion_nosepins" },
        ],
      },
      {
        label: "Coins & Bars",
        levelTwo: "coins_and_bars",
        items: [
          { label: "Gold", levelThree: "gold_coins_and_bars" },
          { label: "Silver", levelThree: "silver_coins_and_bars" },
        ],
      },
      {
        label: "Bags, Wallets & Clutches",
        levelTwo: "bags_wallets_and_clutches",
        items: [
          { label: "Handbags", levelThree: "handbags" },
          { label: "Backpacks", levelThree: "backpacks" },
          { label: "Clutches", levelThree: "clutches" },
          { label: "Messenger Bags", levelThree: "messenger_bags" },
        ],
      },
      {
        label: "Luggage & Trolleys",
        levelTwo: "luggage_and_trolleys",
        items: [
          {
            label: "Hard Shell Trolley Bags",
            levelThree: "hard_shell_trolley_bags",
          },
          {
            label: "Soft Shell Trolley Bags",
            levelThree: "soft_shell_trolley_bags",
          },
          { label: "Travel Backpacks", levelThree: "travel_backpacks" },
          { label: "Cabin Trolley Bags", levelThree: "cabin_trolley_bags" },
          { label: "Checked Luggage", levelThree: "checked_luggage" },
          { label: "Luggage Sets", levelThree: "luggage_sets" },
          { label: "Garment Bags", levelThree: "garment_bags" },
          { label: "Wheeled Duffel Bags", levelThree: "wheeled_duffel_bags" },
        ],
      },
      {
        label: "Watches",
        levelTwo: "watches",
        items: [
          { label: "For Him", levelThree: "watches_for_him" },
          { label: "For Her", levelThree: "watches_for_her" },
        ],
      },
      {
        label: "Eyewear",
        levelTwo: "eyewear",
        items: [
          { label: "Sunglasses", levelThree: "sunglasses" },
          { label: "Eye Glasses", levelThree: "eye_glasses" },
        ],
      },
      {
        label: "Fashion Accessories",
        levelTwo: "fashion_accessories",
        items: [
          { label: "Belts", levelThree: "belts" },
          { label: "Ties & Cufflinks", levelThree: "ties_and_cufflinks" },
          { label: "Socks", levelThree: "socks" },
        ],
      },
    ],
  },
  {
    label: "Health & Wellness",
    levelOne: "health_and_wellness",
    items: [
      {
        label: "Fitness Equipment",
        levelTwo: "fitness_equipment",
        items: [
          { label: "Dumbbells", levelThree: "dumbbells" },
          { label: "Treadmills", levelThree: "treadmills" },
          { label: "Home Gym Items", levelThree: "home_gym_items" },
          { label: "Exercise Bike", levelThree: "exercise_bike" },
        ],
      },
      {
        label: "Fitness Accessories",
        levelTwo: "fitness_accessories",
        items: [
          {
            label: "Yoga Mats & Accessories",
            levelThree: "yoga_mats_and_accessories",
          },
          {
            label: "Gym & Weight Lifting Gloves",
            levelThree: "gym_and_weight_lifting_gloves",
          },
          { label: "Fitness Accessories", levelThree: "fitness_accessories" },
        ],
      },
      {
        label: "Health Care & Devices",
        levelTwo: "health_care_and_devices",
        items: [
          { label: "BP Monitors", levelThree: "bp_monitors" },
          { label: "BG Monitors", levelThree: "bg_monitors" },
          { label: "Oximeters", levelThree: "oximeters" },
          { label: "Weighing Machine", levelThree: "weighing_machine" },
          { label: "Thermometers", levelThree: "thermometers" },
        ],
      },
      {
        label: "Sports",
        levelTwo: "sports",
        items: [
          { label: "Sports Accessories", levelThree: "sports_accessories" },
          { label: "Badminton", levelThree: "badminton" },
          { label: "Basketball", levelThree: "basketball" },
          { label: "Cricket", levelThree: "cricket" },
          { label: "Cycling", levelThree: "cycling" },
          {
            label: "Skates, Skateboards & Scooters",
            levelThree: "skates_skateboards_and_scooters",
          },
          { label: "Table Tennis", levelThree: "table_tennis" },
        ],
      },
      {
        label: "Holistic Nutrition",
        levelTwo: "holistic_nutrition",
        items: [
          {
            label: "Vitamins & Supplements",
            levelThree: "vitamins_and_supplements",
          },
        ],
      },
      {
        label: "Calm Living",
        levelTwo: "calm_living",
        items: [{ label: "Massagers", levelThree: "massagers" }],
      },
    ],
  },
];

export default categories;
