import Adidas from "../../../assets/images/brands/Adidas.webp";
import Aldo from "../../../assets/images/brands/Aldo.webp";
import AllenSolly from "../../../assets/images/brands/AllenSolly.webp";
import AllenSollyJuniors from "../../../assets/images/brands/AllenSollyJuniors.webp";
import Biba from "../../../assets/images/brands/Biba.webp";
import Caprese from "../../../assets/images/brands/Caprese.webp";
import Crocs from "../../../assets/images/brands/Crocs.webp";
import Fastrack from "../../../assets/images/brands/Fastrack.webp";
import Fossil from "../../../assets/images/brands/Fossil.webp";
import GiniAndJony from "../../../assets/images/brands/GiniAndJony.webp";
import Hidesign from "../../../assets/images/brands/Hidesign.webp";
import Jockey from "../../../assets/images/brands/Jockey.webp";
import Joyalukkas from "../../../assets/images/brands/Joyalukkas.webp";
import Lavie from "../../../assets/images/brands/Lavie.webp";
import Lifestyle from "../../../assets/images/brands/Lifestyle.webp";
import Malabar from "../../../assets/images/brands/Malabar.webp";
import MIA from "../../../assets/images/brands/MIA.webp";
import Mufti from "../../../assets/images/brands/Mufti.webp";
import Pantaloons from "../../../assets/images/brands/Pantaloons.webp";
import PCJ from "../../../assets/images/brands/PCJ.webp";
import Puma from "../../../assets/images/brands/Puma.webp";
import Redtape from "../../../assets/images/brands/Redtape.webp";
import Titan from "../../../assets/images/brands/Titan.webp";
import Toms from "../../../assets/images/brands/Toms.webp";
import UnitedColors from "../../../assets/images/brands/UnitedColors.webp";
import Unlimited from "../../../assets/images/brands/Unlimited.webp";
import USPolo from "../../../assets/images/brands/USPolo.webp";
import VanHusen from "../../../assets/images/brands/VanHusen.webp";
import W from "../../../assets/images/brands/W.webp";
import Westside from "../../../assets/images/brands/Westside.webp";

const brands = [
  {
    label: "Women's Wear",
    levelOne: "womens_wear",
    items: [
      {
        label: "Popular Brands",
        levelTwo: "popular_brands",
        items: [
          { label: "Utsa", levelThree: "utsa" },
          { label: "W", levelThree: "w" },
          { label: "Biba", levelThree: "biba" },
          { label: "Forever New", levelThree: "forever_new" },
          { label: "Wardrobe", levelThree: "wardrobe" },
          { label: "Gia", levelThree: "gia" },
          { label: "Pantaloons", levelThree: "pantaloons" },
          { label: "Lifestyle", levelThree: "lifestyle" },
          { label: "Fabindia", levelThree: "fabindia" },
          { label: "Vero Moda", levelThree: "vero_moda" },
          { label: "Tommy Hilfiger", levelThree: "tommy_hilfiger" },
          { label: "Forever 21", levelThree: "forever_21" },
          { label: "Puma", levelThree: "puma" },
          { label: "Levi's", levelThree: "levis" },
          { label: "Jockey", levelThree: "jockey" },
        ],
      },
      {
        label: "Featured Brands",
        levelTwo: "featured_brands",
        items: [
          { label: "Vark", levelThree: "vark" },
          { label: "Artagai", levelThree: "artagai" },
          { label: "LOV xcvd", levelThree: "lov_xcvd" },
          { label: "Varanga", levelThree: "varanga" },
          { label: "Aurelia", levelThree: "aurelia" },
          { label: "Juniper", levelThree: "juniper" },
          { label: "Yufta", levelThree: "yufta" },
          { label: "Ganga Fashion", levelThree: "ganga_fashion" },
          { label: "Cottinfab", levelThree: "cottinfab" },
          { label: "Aachho", levelThree: "aachho" },
          { label: "Janasya", levelThree: "janasya" },
          { label: "Only", levelThree: "only" },
          { label: "Enamor", levelThree: "enamor" },
          { label: "La vie en rose", levelThree: "la_vie_en_rose" },
          { label: "Wunderlove", levelThree: "wunderlove" },
        ],
      },
    ],
    brandImages: [
      { url: Westside, alt: "westside" },
      { url: Lifestyle, alt: "Lifestyle" },
      { url: Puma, alt: "Puma" },
      { url: W, alt: "W" },
      { url: Pantaloons, alt: "Pantaloons" },
      { url: Adidas, alt: "Adidas" },
    ],
  },
  {
    label: "Men's Wear",
    levelOne: "mens_wear",
    items: [
      {
        label: "Popular Brands",
        levelTwo: "popular_brands",
        items: [
          { label: "ETA", levelThree: "eta" },
          { label: "Nuon Men", levelThree: "nuon_men" },
          { label: "Pepe Jeans", levelThree: "pepe_jeans" },
          { label: "Puma", levelThree: "puma" },
          { label: "Park Avenue", levelThree: "park_avenue" },
          { label: "Ascot", levelThree: "ascot" },
          { label: "Killer", levelThree: "killer" },
          { label: "Levi's", levelThree: "levis" },
          { label: "Raymond", levelThree: "raymond" },
          { label: "Blackberrys", levelThree: "blackberrys" },
          { label: "Woodland", levelThree: "woodland" },
        ],
      },
      {
        label: "Featured Brands",
        levelTwo: "featured_brands",
        items: [
          { label: "Westside", levelThree: "westside" },
          { label: "U.S. Polo Assn", levelThree: "us_polo_assn" },
          { label: "WES", levelThree: "wes" },
          { label: "Peter England", levelThree: "peter_england" },
          { label: "Fruit of the Loom", levelThree: "fruit_of_the_loom" },
          { label: "Bewakoof", levelThree: "bewakoof" },
          { label: "Flying Machine", levelThree: "flying_machine" },
          { label: "Celio", levelThree: "celio" },
          { label: "Westsport", levelThree: "westsport" },
          { label: "Parx", levelThree: "parx" },
          { label: "Spykar", levelThree: "spykar" },
        ],
      },
    ],
    brandImages: [
      { url: Redtape, alt: "Redtape" },
      { url: Unlimited, alt: "Unlimited" },
      { url: Mufti, alt: "Mufti" },
      { url: Jockey, alt: "Jockey" },
      { url: VanHusen, alt: "VanHusen" },
      { url: AllenSolly, alt: "AllenSolly" },
    ],
  },
  {
    label: "Footwear",
    levelOne: "footwear",
    items: [
      {
        label: "Popular Brands",
        levelTwo: "popular_brands",
        items: [
          { label: "Red Chief", levelThree: "red_chief" },
          { label: "Ruosh", levelThree: "ruosh" },
          { label: "TOMS", levelThree: "toms" },
          { label: "Alberto Torresi", levelThree: "alberto_torresi" },
          { label: "Campus", levelThree: "campus" },
          { label: "LUNA BLU", levelThree: "luna_blu" },
          { label: "Regal", levelThree: "regal" },
          { label: "Reebok", levelThree: "reebok" },
          { label: "Carlton London", levelThree: "carlton_london" },
          { label: "Aldo", levelThree: "aldo" },
          { label: "New Balance", levelThree: "new_balance" },
          { label: "Hush Puppies", levelThree: "hush_puppies" },
          { label: "Salomon", levelThree: "salomon" },
          { label: "Hoka", levelThree: "hoka" },
        ],
      },
      {
        label: "Featured Brands",
        levelTwo: "featured_brands",
        items: [
          { label: "Red Tape", levelThree: "red_tape" },
          { label: "Puma", levelThree: "puma" },
          { label: "Crocs", levelThree: "crocs" },
          { label: "Asics", levelThree: "asics" },
          { label: "Woodland", levelThree: "woodland" },
          { label: "Catwalk", levelThree: "catwalk" },
          { label: "Clarks", levelThree: "clarks" },
          { label: "Inc.5", levelThree: "inc_5" },
          { label: "Metro", levelThree: "metro" },
          { label: "Mochi", levelThree: "mochi" },
          { label: "Bata", levelThree: "bata" },
          { label: "Skechers", levelThree: "skechers" },
          { label: "Yoho", levelThree: "yoho" },
          { label: "Buckaroo", levelThree: "buckaroo" },
        ],
      },
    ],
    brandImages: [
      { url: Adidas, alt: "Adidas" },
      { url: Puma, alt: "Puma" },
      { url: Aldo, alt: "Aldo" },
      { url: Redtape, alt: "Redtape" },
      { url: Toms, alt: "Toms" },
    ],
  },
  {
    label: "Jewellery",
    levelOne: "jewellery",
    items: [
      {
        label: "Popular Brands",
        levelTwo: "popular_brands",
        items: [
          { label: "Mia by Tanishq", levelThree: "mia_by_tanishq" },
          { label: "Melorra", levelThree: "melorra" },
          { label: "Malabar", levelThree: "malabar" },
          { label: "Joyalukkas", levelThree: "joyalukkas" },
          {
            label: "P.C. Chandra Jewellers",
            levelThree: "pc_chandra_jewellers",
          },
          { label: "Sri Jagdamba Pearls", levelThree: "sri_jagdamba_pearls" },
          { label: "Waman Hari Pethe", levelThree: "waman_hari_pethe" },
          { label: "P.N Gadgil Jewellers", levelThree: "pn_gadgil_jewellers" },
          { label: "PC Jeweller", levelThree: "pc_jeweller" },
          { label: "Candere by Kalyan", levelThree: "candere_by_kalyan" },
          { label: "Bangalore Refinery", levelThree: "bangalore_refinery" },
          {
            label: "C. Krishniah Chetty Group",
            levelThree: "c_krishniah_chetty_group",
          },
        ],
      },
      {
        label: "Featured Brands",
        levelTwo: "featured_brands",
        items: [
          { label: "GIVA", levelThree: "giva" },
          { label: "Shaya", levelThree: "shaya" },
          { label: "Clara", levelThree: "clara" },
          { label: "Zavya", levelThree: "zavya" },
          { label: "March by Fablestreet", levelThree: "march_by_fablestreet" },
          { label: "Priyaasi", levelThree: "priyaasi" },
          { label: "Accessorize London", levelThree: "accessorize_london" },
          { label: "Oomph", levelThree: "oomph" },
          { label: "Zaveri Pearls", levelThree: "zaveri_pearls" },
          { label: "FIDA", levelThree: "fida" },
          { label: "Jazz & Sizzle", levelThree: "jazz_and_sizzle" },
          { label: "Jewels Galaxy", levelThree: "jewels_galaxy" },
        ],
      },
    ],
    brandImages: [
      { url: MIA, alt: "MIA" },
      { url: Malabar, alt: "Malabar" },
      { url: Joyalukkas, alt: "Joyalukkas" },
      { url: PCJ, alt: "PCJ" },
    ],
  },
  {
    label: "Watches & Accessories",
    levelOne: "watches_and_accessories",
    items: [
      {
        label: "Popular Brands",
        levelTwo: "popular_brands",
        items: [
          { label: "Lavie", levelThree: "lavie" },
          { label: "Caprese", levelThree: "caprese" },
          { label: "Hidesign", levelThree: "hidesign" },
          { label: "Lino Perros", levelThree: "lino_perros" },
          { label: "Baggit", levelThree: "baggit" },
          { label: "Metro", levelThree: "metro" },
          { label: "Mochi", levelThree: "mochi" },
          { label: "Skybags", levelThree: "skybags" },
          { label: "Giordano & Gio", levelThree: "giordano_and_gio" },
          { label: "Esbeda", levelThree: "esbeda" },
          { label: "Fossil", levelThree: "fossil" },
          { label: "Da Milano", levelThree: "da_milano" },
          { label: "Fastrack", levelThree: "fastrack" },
          { label: "Elle", levelThree: "elle" },
          { label: "Addons", levelThree: "addons" },
        ],
      },
      {
        label: "Featured Brands",
        levelTwo: "featured_brands",
        items: [
          { label: "Casio", levelThree: "casio" },
          { label: "Tommy Hilfiger", levelThree: "tommy_hilfiger" },
          { label: "Sonata", levelThree: "sonata" },
          { label: "Daniel Wellington", levelThree: "daniel_wellington" },
          { label: "Timex", levelThree: "timex" },
          { label: "Guess Collection", levelThree: "guess_collection" },
          { label: "Citizen", levelThree: "citizen" },
          { label: "Anne Klein", levelThree: "anne_klein" },
          { label: "Kenneth Cole", levelThree: "kenneth_cole" },
          { label: "Giordano", levelThree: "giordano" },
          { label: "Gio Collection", levelThree: "gio_collection" },
          { label: "Victorinox", levelThree: "victorinox" },
          { label: "Lenskart", levelThree: "lenskart" },
          { label: "Ray-Ban", levelThree: "ray_ban" },
          { label: "Apple", levelThree: "apple" },
        ],
      },
    ],
    brandImages: [
      { url: Titan, alt: "Titan" },
      { url: Fossil, alt: "Fossil" },
      { url: Fastrack, alt: "Fastrack" },
      { url: Hidesign, alt: "Hidesign" },
      { url: Caprese, alt: "Caprese" },
      { url: Lavie, alt: "Lavie" },
    ],
  },
  {
    label: "Kids",
    levelOne: "kids",
    items: [
      {
        label: "Popular Brands",
        levelTwo: "popular_brands",
        items: [
          { label: "Allen Solly Junior", levelThree: "allen_solly_junior" },
          {
            label: "United Colors of Benetton",
            levelThree: "united_colors_of_benetton",
          },
          { label: "Gini & Jony", levelThree: "gini_and_jony" },
          {
            label: "Utsa Kids by Westside",
            levelThree: "utsa_kids_by_westside",
          },
          { label: "Global Desi Girl", levelThree: "global_desi_girl" },
          { label: "Pepe Jeans", levelThree: "pepe_jeans" },
          { label: "Crocs", levelThree: "crocs" },
          { label: "Lifestyle Brands", levelThree: "lifestyle_brands" },
          { label: "Ed-a-Mamma", levelThree: "ed_a_mamma" },
          { label: "AND girl", levelThree: "and_girl" },
        ],
      },
      {
        label: "Featured Brands",
        levelTwo: "featured_brands",
        items: [
          { label: "Cutecumber", levelThree: "cutecumber" },
          { label: "Peppermint", levelThree: "peppermint" },
          { label: "HOP by Westside", levelThree: "hop_by_westside" },
          { label: "Y&F by Westside", levelThree: "y_and_f_by_westside" },
          { label: "Lilpicks", levelThree: "lilpicks" },
          { label: "A.T.U.N.", levelThree: "a_t_u_n" },
          { label: "Kids ONLY", levelThree: "kids_only" },
          { label: "Anthrilo", levelThree: "anthrilo" },
        ],
      },
    ],
    brandImages: [
      { url: Crocs, alt: "Crocs" },
      { url: AllenSollyJuniors, alt: "AllenSollyJuniors" },
      { url: UnitedColors, alt: "UnitedColors" },
      { url: GiniAndJony, alt: "Hidesign" },
      { url: Biba, alt: "Biba" },
      { url: USPolo, alt: "USPolo" },
    ],
  },
];

export default brands;
