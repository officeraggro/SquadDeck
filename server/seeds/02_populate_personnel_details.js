/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("personnel_details").del();
  await knex("personnel_details").insert([
    {
      alpha_roster_id: 1,
      go_by: "Humor",
      favorite_movie: "Star Wars",
      hobbies: "Learn a new language",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/c0rzf6dp4N2sEgibkqZiAb3s789o-HBuGGAEWh4uIHc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI4NDEzLmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 2,
      go_by: "Bear",
      favorite_movie: "The Empire Strikes Back",
      hobbies: "Needlepoint",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/xLGKhzqnXnwyIwhU76gUYNrZvVuCAkvGlmn9lN9jFuk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzE0ODM5LmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 3,
      go_by: "Lucky",
      favorite_movie: "The Godfather",
      hobbies: "Gnoming",
      achievements: "Meritorious Unit Award",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/j6ILz3sn8WPNO8wx_79hmWIbjNG8LD4nb8HcFv4DXsg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAzNTQwLmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 4,
      go_by: "Exit",
      favorite_movie: "Raiders of the Lost Ark",
      hobbies: "Sea glass collecting",
      achievements: "Gallant Unit Citation",
      spouse_name: "Jeff",
      children_num: 1,
      children_names: "Susie",
      personal_img:
        "https://images.generated.photos/tMqY0UwpM9fKRtfYLbDUBvSOXwpLtJAGQ74956d-Rl8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzczMDg4LmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 5,
      go_by: "Flux",
      favorite_movie: "The Shawshank Redemption",
      hobbies: "Urban spelunking",
      achievements: "Presidential Unit Citation",
      spouse_name: "Bob",
      children_num: 3,
      children_names: "Alice",
      personal_img:
        "https://images.generated.photos/VWzF4qoHS69aE6r-zWWWEJpBvAdcr6Vo1b90PqUADK4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU3NTEwLmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 6,
      go_by: "Boxer",
      favorite_movie: "Pulp Fiction",
      hobbies: "Skydiving",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/X4Nb5w_ro-HvgTVSjhS2fOPFSAoilYAiwjgIyBm23uU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODU1OTY3LmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 7,
      go_by: "Blackjack",
      favorite_movie: "Return of the Jedi",
      hobbies: "Aquaponics",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "Wendy",
      children_num: 2,
      children_names: "Peter",
      personal_img:
        "https://images.generated.photos/JETNeyKSkwA3bD9zavXL3WXjVMoI7tUfdPrK1x5oH-A/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDk3NjMyLmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 8,
      go_by: "Cosmos",
      favorite_movie: "Back to the Future",
      hobbies: "Sailing",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "",
      children_num: 1,
      children_names: "Trevor",
      personal_img:
        "https://images.generated.photos/4DFbSSbaTqaD6aLhVqfBBySchbtlPc8T40Yy-Lvt8Uc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYzMTQ0LmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 9,
      go_by: "Basilisk",
      favorite_movie: "Ikiru",
      hobbies: "Cruising",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/7xWoKEyRVpArFKyLbv3iESkRcYi6zmXf6EPeUWXYEOM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTEwMDY0LmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 10,
      go_by: "Banjo",
      favorite_movie: "The Godfather Part II",
      hobbies: "Crocheting",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "",
      children_num: 2,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/P4Q7G7jH-SXLyuquosI3GHDz1Lbp278kjo2HtaTqY0g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTQ4OTI2LmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 11,
      go_by: "Boxer",
      favorite_movie: "Harakiri",
      hobbies: "Chainsaw carving",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "",
      children_num: 1,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/qNVLM49IiyEiDYglCWYlQbxrJ2Lo4a82vArnfYMR_yk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzI2NjgxLmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 12,
      go_by: "Gator",
      favorite_movie: "The Dark Knight",
      hobbies: "Visit all US National Parks",
      achievements: "Combat Readiness Medal",
      spouse_name: "Melissa",
      children_num: 2,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/yMMGK4PlHjRAGrHIZBwpvhGZIsjQruhGQMV8QPd8oyA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTU5NTI1LmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 13,
      go_by: "Grizzle",
      favorite_movie: "Fight Club",
      hobbies: "Furniture building",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "",
      children_num: 1,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/3it2djpi0J0cLcGdBgJOW3RMaccaIlHBMwkCOoFsNLs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI4NDk3LmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 14,
      go_by: "Ant",
      favorite_movie: "GoodFellas",
      hobbies: "Vinyl record collecting",
      achievements: "Aerial Achievement Medal",
      spouse_name: "Sarah",
      children_num: 3,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/JxwvUx-6UW6Q8unBSsnCkOAzB_wMBJoeOno5r0d0P7I/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjMzOTQyLmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 15,
      go_by: "Omega",
      favorite_movie: "Rear Window",
      hobbies: "Vintage photo collecting",
      achievements: "Airman's Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/xl2jlWOBseXI9KeHPRd_4ERUDHCywfDp2Hgy-FBfHj4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzQ0NzAzLmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 16,
      go_by: "Ecto",
      favorite_movie: "City Lights",
      hobbies: "Origami",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "Steve",
      children_num: 1,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/X6Zy2hV9XgPHybFCNusN6ibWTiZkb3nyae3ctP_WvK8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzA5MjM1LmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 17,
      go_by: "Digger",
      favorite_movie: "High and Low",
      hobbies: "Archery",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/zMH1N5abHMIa9MdMgFGBTKQf0IQ6hJcuYC0Aj7nKMPQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE1Mjg3LmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 18,
      go_by: "Fox",
      favorite_movie: "Alien",
      hobbies: "Ventriloquism",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "Clara",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/qEQouccBJNSTru0SI2m-pcNiGlfMMoDgbeIAtvW2eKI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTA0MzM5LmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 19,
      go_by: "Cloud",
      favorite_movie: "The Silence of the Lambs",
      hobbies: "Chocolate making",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "Trevor",
      children_num: 2,
      children_names: "Alice",
      personal_img:
        "https://images.generated.photos/dwyMC5sSt9X4bollsOBtLGyuN-P-4m0GiGPu9U92fL8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzUwMzQ2LmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 20,
      go_by: "Challenger",
      favorite_movie: "The Shining",
      hobbies: "Paintball",
      achievements: "Meritorious Unit Award",
      spouse_name: "Rachel",
      children_num: 2,
      children_names: "George",
      personal_img:
        "https://images.generated.photos/U80kR-YA8CMC26DfyZkpHszT43gHxS2p7qPAjYQJaWk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDQ1MjYwLmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 21,
      go_by: "Viking",
      favorite_movie: "Reservoir Dogs",
      hobbies: "Cake decorating",
      achievements: "Gallant Unit Citation",
      spouse_name: "",
      children_num: 2,
      children_names: "Peter",
      personal_img:
        "https://images.generated.photos/Eoe-jq05dlPG9headtKtdL4tVINUZH6q3leEcKg2un8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTExOTEzLmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 22,
      go_by: "Dove",
      favorite_movie: "Indiana Jones and the Last Crusade",
      hobbies: "Bullion collecting",
      achievements: "Presidential Unit Citation",
      spouse_name: "Trent",
      children_num: 2,
      children_names: "Trevor",
      personal_img:
        "https://images.generated.photos/ZLwgnDN5R1smErnP3Gb6DjsVa5-nQs0_rtW5WT7jVwc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzE0MzE2LmpwZw.jpg",
      grade_emblem_img:
        "https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 23,
      go_by: "Goat",
      favorite_movie: "Casablanca",
      hobbies: "Spelunking",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "Judy",
      children_num: 1,
      children_names: "Constance",
      personal_img:
        "https://images.generated.photos/Q2SyCYF2DMb6YUVwZ9T3HE-XEMdbGFZo_b83aWJBxxw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE5MDc1LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 24,
      go_by: "Jenkins",
      favorite_movie: "The Apartment",
      hobbies: "Lapidary",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "",
      children_num: 2,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/0-eYmraFVjA-02c1NTNQM6G40vTHpxl02VxPZSScAQg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzYwMDE0LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 25,
      go_by: "Birdie",
      favorite_movie: "Se7en",
      hobbies: "Tennis",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "Florence",
      children_num: 1,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/6DvVzNhvrZh7AZPDdCrOphq8H18w7MLyYpZqCuY-s3E/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjE5NDE4LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 26,
      go_by: "Stallion",
      favorite_movie: "Seven Samurai",
      hobbies: "Beach volleyball",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "Ginger",
      children_num: 1,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/c0rzf6dp4N2sEgibkqZiAb3s789o-HBuGGAEWh4uIHc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI4NDEzLmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 27,
      go_by: "Hammerhead",
      favorite_movie: "M",
      hobbies: "Cemetery/Tombstone cleaning",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "William",
      children_num: 2,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/xLGKhzqnXnwyIwhU76gUYNrZvVuCAkvGlmn9lN9jFuk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzE0ODM5LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 28,
      go_by: "Buster",
      favorite_movie: "Monty Python and the Holy Grail",
      hobbies: "Civil War history and site visits",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "",
      children_num: 2,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/j6ILz3sn8WPNO8wx_79hmWIbjNG8LD4nb8HcFv4DXsg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAzNTQwLmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 29,
      go_by: "Medusa",
      favorite_movie: "The Matrix",
      hobbies: "Learn a new language",
      achievements: "Combat Readiness Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/tMqY0UwpM9fKRtfYLbDUBvSOXwpLtJAGQ74956d-Rl8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzczMDg4LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 30,
      go_by: "Badger",
      favorite_movie: "The Good, the Bad and the Ugly",
      hobbies: "Needlepoint",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "Steve",
      children_num: 1,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/VWzF4qoHS69aE6r-zWWWEJpBvAdcr6Vo1b90PqUADK4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU3NTEwLmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 31,
      go_by: "Beam",
      favorite_movie: "Die Hard",
      hobbies: "Gnoming",
      achievements: "Aerial Achievement Medal",
      spouse_name: "Trevor",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/X4Nb5w_ro-HvgTVSjhS2fOPFSAoilYAiwjgIyBm23uU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODU1OTY3LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 32,
      go_by: "Spider",
      favorite_movie: "One Flew Over the Cuckoo's Nest",
      hobbies: "Sea glass collecting",
      achievements: "Airman's Medal",
      spouse_name: "Harrold",
      children_num: 4,
      children_names: "Susie",
      personal_img:
        "https://images.generated.photos/JETNeyKSkwA3bD9zavXL3WXjVMoI7tUfdPrK1x5oH-A/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDk3NjMyLmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 33,
      go_by: "Cash",
      favorite_movie: "Double Indemnity",
      hobbies: "Urban spelunking",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "William",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/4DFbSSbaTqaD6aLhVqfBBySchbtlPc8T40Yy-Lvt8Uc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYzMTQ0LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 34,
      go_by: "Eagle",
      favorite_movie: "Yojimbo",
      hobbies: "Skydiving",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "Zoe",
      children_num: 3,
      children_names: "George",
      personal_img:
        "https://images.generated.photos/7xWoKEyRVpArFKyLbv3iESkRcYi6zmXf6EPeUWXYEOM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTEwMDY0LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 35,
      go_by: "Ibis",
      favorite_movie: "The Night of the Hunter",
      hobbies: "Aquaponics",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "Wendy",
      children_num: 2,
      children_names: "Peter",
      personal_img:
        "https://images.generated.photos/P4Q7G7jH-SXLyuquosI3GHDz1Lbp278kjo2HtaTqY0g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTQ4OTI2LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 36,
      go_by: "Boss",
      favorite_movie: "Sunrise: A Song of Two Humans",
      hobbies: "Sailing",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "Peter",
      children_num: 3,
      children_names: "Trevor",
      personal_img:
        "https://images.generated.photos/qNVLM49IiyEiDYglCWYlQbxrJ2Lo4a82vArnfYMR_yk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzI2NjgxLmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 37,
      go_by: "Tiger",
      favorite_movie: "North by Northwest",
      hobbies: "Cruising",
      achievements: "Meritorious Unit Award",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/yMMGK4PlHjRAGrHIZBwpvhGZIsjQruhGQMV8QPd8oyA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTU5NTI1LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 38,
      go_by: "Hide",
      favorite_movie:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      hobbies: "Crocheting",
      achievements: "Gallant Unit Citation",
      spouse_name: "Steven",
      children_num: 1,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/3it2djpi0J0cLcGdBgJOW3RMaccaIlHBMwkCOoFsNLs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI4NDk3LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 39,
      go_by: "Patience",
      favorite_movie: "The Third Man",
      hobbies: "Chainsaw carving",
      achievements: "Presidential Unit Citation",
      spouse_name: "Oscar",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/JxwvUx-6UW6Q8unBSsnCkOAzB_wMBJoeOno5r0d0P7I/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjMzOTQyLmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 40,
      go_by: "Iron",
      favorite_movie: "Citizen Kane",
      hobbies: "Visit all US National Parks",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/xl2jlWOBseXI9KeHPRd_4ERUDHCywfDp2Hgy-FBfHj4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzQ0NzAzLmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 41,
      go_by: "Mustang",
      favorite_movie: "Ghostbusters",
      hobbies: "Furniture building",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "",
      children_num: 3,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/X6Zy2hV9XgPHybFCNusN6ibWTiZkb3nyae3ctP_WvK8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzA5MjM1LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 42,
      go_by: "Blackjack",
      favorite_movie: "Rash\u00f4mon",
      hobbies: "Vinyl record collecting",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "Eddie",
      children_num: 3,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/zMH1N5abHMIa9MdMgFGBTKQf0IQ6hJcuYC0Aj7nKMPQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE1Mjg3LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 43,
      go_by: "Friend",
      favorite_movie: "The Princess Bride",
      hobbies: "Vintage photo collecting",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/qEQouccBJNSTru0SI2m-pcNiGlfMMoDgbeIAtvW2eKI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTA0MzM5LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 44,
      go_by: "Rhythm",
      favorite_movie: "The Lord of the Rings: The Fellowship of the Ring",
      hobbies: "Origami",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "",
      children_num: 2,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/dwyMC5sSt9X4bollsOBtLGyuN-P-4m0GiGPu9U92fL8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzUwMzQ2LmpwZw.jpg",
      grade_emblem_img:
        "https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 45,
      go_by: "Omega",
      favorite_movie: "Blade Runner",
      hobbies: "Archery",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/U80kR-YA8CMC26DfyZkpHszT43gHxS2p7qPAjYQJaWk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDQ1MjYwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 46,
      go_by: "Single",
      favorite_movie: "Terminator 2: Judgment Day",
      hobbies: "Ventriloquism",
      achievements: "Combat Readiness Medal",
      spouse_name: "Melissa",
      children_num: 1,
      children_names: "Susie",
      personal_img:
        "https://images.generated.photos/Eoe-jq05dlPG9headtKtdL4tVINUZH6q3leEcKg2un8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTExOTEzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 47,
      go_by: "Viking",
      favorite_movie: "Taxi Driver",
      hobbies: "Chocolate making",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "Steven",
      children_num: 1,
      children_names: "Alice",
      personal_img:
        "https://images.generated.photos/ZLwgnDN5R1smErnP3Gb6DjsVa5-nQs0_rtW5WT7jVwc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzE0MzE2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 48,
      go_by: "Bones",
      favorite_movie: "The Usual Suspects",
      hobbies: "Paintball",
      achievements: "Aerial Achievement Medal",
      spouse_name: "",
      children_num: 1,
      children_names: "George",
      personal_img:
        "https://images.generated.photos/Q2SyCYF2DMb6YUVwZ9T3HE-XEMdbGFZo_b83aWJBxxw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE5MDc1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 49,
      go_by: "Eagle",
      favorite_movie: "Psycho",
      hobbies: "Cake decorating",
      achievements: "Airman's Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/0-eYmraFVjA-02c1NTNQM6G40vTHpxl02VxPZSScAQg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzYwMDE0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 50,
      go_by: "Casper",
      favorite_movie: "Aliens",
      hobbies: "Bullion collecting",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "",
      children_num: 2,
      children_names: "Trevor",
      personal_img:
        "https://images.generated.photos/6DvVzNhvrZh7AZPDdCrOphq8H18w7MLyYpZqCuY-s3E/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjE5NDE4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 51,
      go_by: "Fanboy",
      favorite_movie: "Paths of Glory",
      hobbies: "Spelunking",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "Oscar",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/c0rzf6dp4N2sEgibkqZiAb3s789o-HBuGGAEWh4uIHc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI4NDEzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 52,
      go_by: "Arc",
      favorite_movie: "12 Angry Men",
      hobbies: "Lapidary",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/xLGKhzqnXnwyIwhU76gUYNrZvVuCAkvGlmn9lN9jFuk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzE0ODM5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 53,
      go_by: "Hellhound",
      favorite_movie: "The Lord of the Rings: The Return of the King",
      hobbies: "Tennis",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "Trevor",
      children_num: 1,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/j6ILz3sn8WPNO8wx_79hmWIbjNG8LD4nb8HcFv4DXsg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAzNTQwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 54,
      go_by: "Lizard",
      favorite_movie: "The Wages of Fear",
      hobbies: "Beach volleyball",
      achievements: "Meritorious Unit Award",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/tMqY0UwpM9fKRtfYLbDUBvSOXwpLtJAGQ74956d-Rl8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzczMDg4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 55,
      go_by: "Justice",
      favorite_movie: "Saving Private Ryan",
      hobbies: "Cemetery/Tombstone cleaning",
      achievements: "Gallant Unit Citation",
      spouse_name: "Mike",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/VWzF4qoHS69aE6r-zWWWEJpBvAdcr6Vo1b90PqUADK4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU3NTEwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 56,
      go_by: "Spider",
      favorite_movie: "The Passion of Joan of Arc",
      hobbies: "Civil War history and site visits",
      achievements: "Presidential Unit Citation",
      spouse_name: "William",
      children_num: 3,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/X4Nb5w_ro-HvgTVSjhS2fOPFSAoilYAiwjgIyBm23uU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODU1OTY3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 57,
      go_by: "Blanks",
      favorite_movie: "Schindler's List",
      hobbies: "Learn a new language",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "Harrold",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/JETNeyKSkwA3bD9zavXL3WXjVMoI7tUfdPrK1x5oH-A/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDk3NjMyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 58,
      go_by: "Bouncer",
      favorite_movie: "Apocalypse Now",
      hobbies: "Needlepoint",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "Peter",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/4DFbSSbaTqaD6aLhVqfBBySchbtlPc8T40Yy-Lvt8Uc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYzMTQ0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 59,
      go_by: "Midnight",
      favorite_movie: "Jurassic Park",
      hobbies: "Gnoming",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "Eddie",
      children_num: 1,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/7xWoKEyRVpArFKyLbv3iESkRcYi6zmXf6EPeUWXYEOM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTEwMDY0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 60,
      go_by: "Medusa",
      favorite_movie: "Persona",
      hobbies: "Sea glass collecting",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "Jeff",
      children_num: 2,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/P4Q7G7jH-SXLyuquosI3GHDz1Lbp278kjo2HtaTqY0g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTQ4OTI2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 61,
      go_by: "Ghost",
      favorite_movie: "Vertigo",
      hobbies: "Urban spelunking",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "Bob",
      children_num: 1,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/qNVLM49IiyEiDYglCWYlQbxrJ2Lo4a82vArnfYMR_yk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzI2NjgxLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 62,
      go_by: "Fowl",
      favorite_movie: "The Red Shoes",
      hobbies: "Skydiving",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "Rachel",
      children_num: 1,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/yMMGK4PlHjRAGrHIZBwpvhGZIsjQruhGQMV8QPd8oyA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTU5NTI1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 63,
      go_by: "Iceman",
      favorite_movie: "Touch of Evil",
      hobbies: "Aquaponics",
      achievements: "Combat Readiness Medal",
      spouse_name: "",
      children_num: 1,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/3it2djpi0J0cLcGdBgJOW3RMaccaIlHBMwkCOoFsNLs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI4NDk3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 64,
      go_by: "Hellhound",
      favorite_movie: "Chinatown",
      hobbies: "Sailing",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/JxwvUx-6UW6Q8unBSsnCkOAzB_wMBJoeOno5r0d0P7I/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjMzOTQyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 65,
      go_by: "Condor",
      favorite_movie: "Le samoura\u00ef",
      hobbies: "Cruising",
      achievements: "Aerial Achievement Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/xl2jlWOBseXI9KeHPRd_4ERUDHCywfDp2Hgy-FBfHj4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzQ0NzAzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 66,
      go_by: "Bullfrog",
      favorite_movie: "Jaws",
      hobbies: "Crocheting",
      achievements: "Airman's Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/X6Zy2hV9XgPHybFCNusN6ibWTiZkb3nyae3ctP_WvK8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzA5MjM1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 67,
      go_by: "Buster",
      favorite_movie: "Forrest Gump",
      hobbies: "Chainsaw carving",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "",
      children_num: 2,
      children_names: "Constance",
      personal_img:
        "https://images.generated.photos/zMH1N5abHMIa9MdMgFGBTKQf0IQ6hJcuYC0Aj7nKMPQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE1Mjg3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 68,
      go_by: "Cloud",
      favorite_movie: "A Clockwork Orange",
      hobbies: "Visit all US National Parks",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/qEQouccBJNSTru0SI2m-pcNiGlfMMoDgbeIAtvW2eKI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTA0MzM5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 69,
      go_by: "Giggles",
      favorite_movie: "Bicycle Thieves",
      hobbies: "Furniture building",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "",
      children_num: 2,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/dwyMC5sSt9X4bollsOBtLGyuN-P-4m0GiGPu9U92fL8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzUwMzQ2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 70,
      go_by: "Bullseye",
      favorite_movie: "Toy Story",
      hobbies: "Vinyl record collecting",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "Florence",
      children_num: 3,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/U80kR-YA8CMC26DfyZkpHszT43gHxS2p7qPAjYQJaWk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDQ1MjYwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 71,
      go_by: "Breaker",
      favorite_movie: "Ferris Bueller's Day Off",
      hobbies: "Vintage photo collecting",
      achievements: "Meritorious Unit Award",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/Eoe-jq05dlPG9headtKtdL4tVINUZH6q3leEcKg2un8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTExOTEzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 72,
      go_by: "Bull",
      favorite_movie: "The Big Lebowski",
      hobbies: "Origami",
      achievements: "Gallant Unit Citation",
      spouse_name: "",
      children_num: 1,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/ZLwgnDN5R1smErnP3Gb6DjsVa5-nQs0_rtW5WT7jVwc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzE0MzE2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 73,
      go_by: "Goose",
      favorite_movie: "Memento",
      hobbies: "Archery",
      achievements: "Presidential Unit Citation",
      spouse_name: "",
      children_num: 3,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/Q2SyCYF2DMb6YUVwZ9T3HE-XEMdbGFZo_b83aWJBxxw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE5MDc1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 74,
      go_by: "Chip",
      favorite_movie: "The General",
      hobbies: "Ventriloquism",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "Ginger",
      children_num: 2,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/0-eYmraFVjA-02c1NTNQM6G40vTHpxl02VxPZSScAQg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzYwMDE0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 75,
      go_by: "Error",
      favorite_movie: "The Treasure of the Sierra Madre",
      hobbies: "Chocolate making",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "Wendy",
      children_num: 1,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/6DvVzNhvrZh7AZPDdCrOphq8H18w7MLyYpZqCuY-s3E/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjE5NDE4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 76,
      go_by: "Ace",
      favorite_movie: "The Lord of the Rings: The Two Towers",
      hobbies: "Paintball",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "",
      children_num: 2,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/c0rzf6dp4N2sEgibkqZiAb3s789o-HBuGGAEWh4uIHc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI4NDEzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 77,
      go_by: "Piggy",
      favorite_movie: "Full Metal Jacket",
      hobbies: "Cake decorating",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "Trent",
      children_num: 1,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/xLGKhzqnXnwyIwhU76gUYNrZvVuCAkvGlmn9lN9jFuk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzE0ODM5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 78,
      go_by: "Rumor",
      favorite_movie: "Tokyo Story",
      hobbies: "Bullion collecting",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/j6ILz3sn8WPNO8wx_79hmWIbjNG8LD4nb8HcFv4DXsg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAzNTQwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 79,
      go_by: "Champ",
      favorite_movie: "The Terminator",
      hobbies: "Spelunking",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "",
      children_num: 1,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/tMqY0UwpM9fKRtfYLbDUBvSOXwpLtJAGQ74956d-Rl8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzczMDg4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 80,
      go_by: "Great Ape",
      favorite_movie: "Come and See",
      hobbies: "Lapidary",
      achievements: "Combat Readiness Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/VWzF4qoHS69aE6r-zWWWEJpBvAdcr6Vo1b90PqUADK4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU3NTEwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 81,
      go_by: "Bookworm",
      favorite_movie: "Fargo",
      hobbies: "Tennis",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "Melissa",
      children_num: 3,
      children_names: "Constance",
      personal_img:
        "https://images.generated.photos/X4Nb5w_ro-HvgTVSjhS2fOPFSAoilYAiwjgIyBm23uU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODU1OTY3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 82,
      go_by: "Magnet",
      favorite_movie: "The 400 Blows",
      hobbies: "Beach volleyball",
      achievements: "Aerial Achievement Medal",
      spouse_name: "William",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/JETNeyKSkwA3bD9zavXL3WXjVMoI7tUfdPrK1x5oH-A/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDk3NjMyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 83,
      go_by: "Delight",
      favorite_movie: "It Happened One Night",
      hobbies: "Cemetery/Tombstone cleaning",
      achievements: "Airman's Medal",
      spouse_name: "Harrold",
      children_num: 2,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/4DFbSSbaTqaD6aLhVqfBBySchbtlPc8T40Yy-Lvt8Uc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYzMTQ0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 84,
      go_by: "Hound",
      favorite_movie: "Notorious",
      hobbies: "Civil War history and site visits",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "",
      children_num: 1,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/7xWoKEyRVpArFKyLbv3iESkRcYi6zmXf6EPeUWXYEOM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTEwMDY0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 85,
      go_by: "Flash",
      favorite_movie: "Wild Strawberries",
      hobbies: "Learn a new language",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "",
      children_num: 1,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/P4Q7G7jH-SXLyuquosI3GHDz1Lbp278kjo2HtaTqY0g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTQ4OTI2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 86,
      go_by: "Maverick",
      favorite_movie: "Inception",
      hobbies: "Needlepoint",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/qNVLM49IiyEiDYglCWYlQbxrJ2Lo4a82vArnfYMR_yk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzI2NjgxLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 87,
      go_by: "Collar",
      favorite_movie: "Sunset Blvd.",
      hobbies: "Gnoming",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "Clara",
      children_num: 3,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/yMMGK4PlHjRAGrHIZBwpvhGZIsjQruhGQMV8QPd8oyA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTU5NTI1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 88,
      go_by: "Cloud",
      favorite_movie: "The Seventh Seal",
      hobbies: "Sea glass collecting",
      achievements: "Meritorious Unit Award",
      spouse_name: "Rachel",
      children_num: 2,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/3it2djpi0J0cLcGdBgJOW3RMaccaIlHBMwkCOoFsNLs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI4NDk3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 89,
      go_by: "Rabbit",
      favorite_movie: "Ace in the Hole",
      hobbies: "Urban spelunking",
      achievements: "Gallant Unit Citation",
      spouse_name: "Harrold",
      children_num: 2,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/JxwvUx-6UW6Q8unBSsnCkOAzB_wMBJoeOno5r0d0P7I/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjMzOTQyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 90,
      go_by: "Teacher",
      favorite_movie: "Modern Times",
      hobbies: "Skydiving",
      achievements: "Presidential Unit Citation",
      spouse_name: "Peter",
      children_num: 1,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/xl2jlWOBseXI9KeHPRd_4ERUDHCywfDp2Hgy-FBfHj4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzQ0NzAzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 91,
      go_by: "Ecto",
      favorite_movie: "2001: A Space Odyssey",
      hobbies: "Aquaponics",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/X6Zy2hV9XgPHybFCNusN6ibWTiZkb3nyae3ctP_WvK8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzA5MjM1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 92,
      go_by: "Flash",
      favorite_movie: "Strangers on a Train",
      hobbies: "Sailing",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/zMH1N5abHMIa9MdMgFGBTKQf0IQ6hJcuYC0Aj7nKMPQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE1Mjg3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 93,
      go_by: "Bingo",
      favorite_movie: "Grand Illusion",
      hobbies: "Cruising",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "Mike",
      children_num: 2,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/qEQouccBJNSTru0SI2m-pcNiGlfMMoDgbeIAtvW2eKI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTA0MzM5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 94,
      go_by: "Omega",
      favorite_movie: "The Departed",
      hobbies: "Crocheting",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/dwyMC5sSt9X4bollsOBtLGyuN-P-4m0GiGPu9U92fL8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzUwMzQ2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 95,
      go_by: "Casper",
      favorite_movie: "The Professional",
      hobbies: "Chainsaw carving",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/U80kR-YA8CMC26DfyZkpHszT43gHxS2p7qPAjYQJaWk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDQ1MjYwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 96,
      go_by: "Earthquake",
      favorite_movie: "On the Waterfront",
      hobbies: "Visit all US National Parks",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/Eoe-jq05dlPG9headtKtdL4tVINUZH6q3leEcKg2un8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTExOTEzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 97,
      go_by: "Challenger",
      favorite_movie: "Batman Begins",
      hobbies: "Furniture building",
      achievements: "Combat Readiness Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/ZLwgnDN5R1smErnP3Gb6DjsVa5-nQs0_rtW5WT7jVwc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzE0MzE2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 98,
      go_by: "Gopher",
      favorite_movie: "Rocky",
      hobbies: "Vinyl record collecting",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "",
      children_num: 2,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/Q2SyCYF2DMb6YUVwZ9T3HE-XEMdbGFZo_b83aWJBxxw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE5MDc1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 99,
      go_by: "Riddle",
      favorite_movie: "8\u00bd",
      hobbies: "Vintage photo collecting",
      achievements: "Aerial Achievement Medal",
      spouse_name: "",
      children_num: 3,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/oEl2zmineV2mziUJDrHQcU7Zu9-Tp65scxdPoQzPQT4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTc1Njg5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 100,
      go_by: "Casper",
      favorite_movie: "Network",
      hobbies: "Origami",
      achievements: "Airman's Medal",
      spouse_name: "",
      children_num: 1,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/_DjYMnhCRq5HLAiTH4USrLAE3lmUGR3AOcfLaWLlnyE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzkwOTQyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 101,
      go_by: "Humor",
      favorite_movie: "Stalker",
      hobbies: "Archery",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "Judy",
      children_num: 1,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/FnMsHo_JKqWBQT41wnzpiCyV5jQbvq37zqhk_LvULkM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODA0NDYyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 102,
      go_by: "Flex",
      favorite_movie: "Indiana Jones and the Temple of Doom",
      hobbies: "Ventriloquism",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "Florence",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/g3-diLjiZQPsy8CCKpAcMN1hexp6gcsbCWC5fa-ex0g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE1Mzg2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 103,
      go_by: "Dizzy",
      favorite_movie: "The Philadelphia Story",
      hobbies: "Chocolate making",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/zzns0JDirzZ7y1_sM7JCajfQzrODs2LMcM6jhK6RA-Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTMxMjYyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 104,
      go_by: "Buster",
      favorite_movie: "In a Lonely Place",
      hobbies: "Paintball",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "Zoe",
      children_num: 1,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/jRcJhQ3WnmDMVt0uL8lbyCtg58gGTq8vBnRF4pmbvss/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE1NDgzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 105,
      go_by: "Chum",
      favorite_movie: "The Conversation",
      hobbies: "Cake decorating",
      achievements: "Meritorious Unit Award",
      spouse_name: "Steve",
      children_num: 1,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/av-86iavi4RsUXfbXUQZShrv8h5weD30J3RJjDzXIsg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODk5NTkyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 106,
      go_by: "Goat",
      favorite_movie: "Sweet Smell of Success",
      hobbies: "Bullion collecting",
      achievements: "Gallant Unit Citation",
      spouse_name: "Wendy",
      children_num: 3,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/0fALFGfaUbDFXnIJk1Y8KYx3RVkvxqmrJYlG6GE3vg0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE0NzM1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 107,
      go_by: "Doodle",
      favorite_movie: "Throne of Blood",
      hobbies: "Spelunking",
      achievements: "Presidential Unit Citation",
      spouse_name: "Eddie",
      children_num: 2,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/KaUk5mF6HCq5LNcnkW5RATKkmP4_QYiDFnD1qScq9mI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQwMDMyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 108,
      go_by: "Chimp",
      favorite_movie: "Inglourious Basterds",
      hobbies: "Lapidary",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "Trevor",
      children_num: 1,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/UXtu8o4s8C7Kj0PtkKmlmD7R_mfChbq84Rj3OEj9EJE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjIyMTEwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 109,
      go_by: "Cypher",
      favorite_movie: "Cool Hand Luke",
      hobbies: "Tennis",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "Trent",
      children_num: 2,
      children_names: "Trevor",
      personal_img:
        "https://images.generated.photos/2H5sqgZXBKtH3Co5GH1xL4-7IMpF7P2qtpgXxs9hnSg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODAwMjM4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 110,
      go_by: "Iceman",
      favorite_movie: "The Man Who Shot Liberty Valance",
      hobbies: "Beach volleyball",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "Melissa",
      children_num: 3,
      children_names: "Constance",
      personal_img:
        "https://images.generated.photos/7n-o0Wf50RJ316_0DELF6axnmzrh_-c_tfG639UpTXw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDEyMDc5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 111,
      go_by: "Cannibal",
      favorite_movie: "Raging Bull",
      hobbies: "Cemetery/Tombstone cleaning",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "Mike",
      children_num: 1,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/oBvqgzyu2cwNxXTIm2qwy_aRIPBG7AbtuzuDw31MTs8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkxMDUzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 112,
      go_by: "Vulture",
      favorite_movie: "The Rules of the Game",
      hobbies: "Civil War history and site visits",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "Sarah",
      children_num: 4,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/Fnr1Sr303ied11DOMSi-153ROefitiBytYPxM91sSAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUxNjgwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 113,
      go_by: "Ibis",
      favorite_movie: "All About Eve",
      hobbies: "Learn a new language",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "Harrold",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/E-nOn1GMq79-DXVlH7X_Bt2nKtSVhQnP20f8xvxqGms/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODMzMjE0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 114,
      go_by: "Hide",
      favorite_movie: "Shadow of a Doubt",
      hobbies: "Needlepoint",
      achievements: "Combat Readiness Medal",
      spouse_name: "William",
      children_num: 3,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/wpsAYo5NIR5yZLdDHyqHrLz0eEy_vf9iZt-KmdWadAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYyNDY3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 115,
      go_by: "Cosmo",
      favorite_movie: "Groundhog Day",
      hobbies: "Gnoming",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "Peter",
      children_num: 1,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/wUSU57he02S0BlA6hIjZDjxvr-xUa1fu6OBgToYTxGA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjk5MjU1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 116,
      go_by: "Viper",
      favorite_movie: "A Matter of Life and Death",
      hobbies: "Sea glass collecting",
      achievements: "Aerial Achievement Medal",
      spouse_name: "Eddie",
      children_num: 2,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/5g8WT2ZmLDfBMRQbtNt7uRG0FJ3UY9NFB1fFVUxYR08/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQ2NzQ4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 117,
      go_by: "Goose",
      favorite_movie: "His Girl Friday",
      hobbies: "Urban spelunking",
      achievements: "Airman's Medal",
      spouse_name: "Steven",
      children_num: 3,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/zVKrruKmIojl8CL-ix78BIDo6b3H5Aw7iZG_2JWGl6U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDM3NTA0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 118,
      go_by: "Boomer",
      favorite_movie: "The Gold Rush",
      hobbies: "Skydiving",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "Oscar",
      children_num: 1,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/zEuOQ68hckic41qV-nRxitZjuN-hgRZu7vMppjEp5hQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI5NzQ2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 119,
      go_by: "Dash",
      favorite_movie: "Badlands",
      hobbies: "Aquaponics",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "Jeff",
      children_num: 5,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/s6lQhfeAlwnPhAER2O36G4NnsC0aL2FnKja8MxW9BxM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjkwMTkwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 120,
      go_by: "Mountain",
      favorite_movie: "La Dolce Vita",
      hobbies: "Sailing",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "Clara",
      children_num: 1,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/g1fzudSyiyQMNPYYo3KCa8s7SfoX8vIOg1yy2P2xz6c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY5NzMwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 121,
      go_by: "Flash",
      favorite_movie: "Good Will Hunting",
      hobbies: "Cruising",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "Harrold",
      children_num: 2,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/b08rkHbJOs2kk6nj86h4Sje6ExFu7PbLhZPi9JHnLpk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODI3ODg2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 122,
      go_by: "Alien",
      favorite_movie: "Aguirre: The Wrath of God",
      hobbies: "Crocheting",
      achievements: "Meritorious Unit Award",
      spouse_name: "Peter",
      children_num: 3,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/eM7f7vXKsF_IbKP4SKGPWSXxOR6VxXQJ5EZFI2MrHoA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjE2OTg4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 123,
      go_by: "Boomer",
      favorite_movie: "The Maltese Falcon",
      hobbies: "Chainsaw carving",
      achievements: "Gallant Unit Citation",
      spouse_name: "Eddie",
      children_num: 1,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/-DVIwclJX5kZLezgl1a_kmsaI3KScsuy_xswMa__dWE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY5NTI3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 124,
      go_by: "Cash",
      favorite_movie: "The Big Sleep",
      hobbies: "Visit all US National Parks",
      achievements: "Presidential Unit Citation",
      spouse_name: "Bob",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/oEl2zmineV2mziUJDrHQcU7Zu9-Tp65scxdPoQzPQT4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTc1Njg5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 125,
      go_by: "Nobody",
      favorite_movie: "Out of the Past",
      hobbies: "Furniture building",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "Rachel",
      children_num: 2,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/_DjYMnhCRq5HLAiTH4USrLAE3lmUGR3AOcfLaWLlnyE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzkwOTQyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 126,
      go_by: "Phoenix",
      favorite_movie: "The Great Dictator",
      hobbies: "Vinyl record collecting",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "Judy",
      children_num: 3,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/FnMsHo_JKqWBQT41wnzpiCyV5jQbvq37zqhk_LvULkM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODA0NDYyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 127,
      go_by: "Clover",
      favorite_movie: "The Thing",
      hobbies: "Vintage photo collecting",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "Bob",
      children_num: 1,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/g3-diLjiZQPsy8CCKpAcMN1hexp6gcsbCWC5fa-ex0g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE1Mzg2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 128,
      go_by: "Angel",
      favorite_movie: "Sherlock Jr.",
      hobbies: "Origami",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "Steven",
      children_num: 2,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/zzns0JDirzZ7y1_sM7JCajfQzrODs2LMcM6jhK6RA-Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTMxMjYyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 129,
      go_by: "Roach",
      favorite_movie: "Shaun of the Dead",
      hobbies: "Archery",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "Sarah",
      children_num: 1,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/jRcJhQ3WnmDMVt0uL8lbyCtg58gGTq8vBnRF4pmbvss/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE1NDgzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 130,
      go_by: "Secret",
      favorite_movie: "The Lion King",
      hobbies: "Ventriloquism",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "Clara",
      children_num: 1,
      children_names: "Billy",
      personal_img:
        "https://images.generated.photos/av-86iavi4RsUXfbXUQZShrv8h5weD30J3RJjDzXIsg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODk5NTkyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 131,
      go_by: "Feather",
      favorite_movie: "Stand by Me",
      hobbies: "Chocolate making",
      achievements: "Combat Readiness Medal",
      spouse_name: "Florence",
      children_num: 1,
      children_names: "Susie",
      personal_img:
        "https://images.generated.photos/0fALFGfaUbDFXnIJk1Y8KYx3RVkvxqmrJYlG6GE3vg0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE0NzM1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 132,
      go_by: "Scratch",
      favorite_movie: "Kill Bill Vol. 1",
      hobbies: "Paintball",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "Judy",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/KaUk5mF6HCq5LNcnkW5RATKkmP4_QYiDFnD1qScq9mI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQwMDMyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 133,
      go_by: "Cinder",
      favorite_movie: "Rope",
      hobbies: "Cake decorating",
      achievements: "Aerial Achievement Medal",
      spouse_name: "Oscar",
      children_num: 2,
      children_names: "George",
      personal_img:
        "https://images.generated.photos/UXtu8o4s8C7Kj0PtkKmlmD7R_mfChbq84Rj3OEj9EJE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjIyMTEwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 134,
      go_by: "Badger",
      favorite_movie: "Whiplash",
      hobbies: "Bullion collecting",
      achievements: "Airman's Medal",
      spouse_name: "Ginger",
      children_num: 1,
      children_names: "Peter",
      personal_img:
        "https://images.generated.photos/2H5sqgZXBKtH3Co5GH1xL4-7IMpF7P2qtpgXxs9hnSg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODAwMjM4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 135,
      go_by: "Bubbles",
      favorite_movie: "In the Mood for Love",
      hobbies: "Spelunking",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "Zoe",
      children_num: 1,
      children_names: "Trevor",
      personal_img:
        "https://images.generated.photos/7n-o0Wf50RJ316_0DELF6axnmzrh_-c_tfG639UpTXw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDEyMDc5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 136,
      go_by: "Butcher",
      favorite_movie: "No Country for Old Men",
      hobbies: "Lapidary",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "Mike",
      children_num: 1,
      children_names: "Constance",
      personal_img:
        "https://images.generated.photos/oBvqgzyu2cwNxXTIm2qwy_aRIPBG7AbtuzuDw31MTs8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkxMDUzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 137,
      go_by: "Bouncer",
      favorite_movie: "Diabolique",
      hobbies: "Tennis",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "Zoe",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/Fnr1Sr303ied11DOMSi-153ROefitiBytYPxM91sSAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUxNjgwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 138,
      go_by: "Bison",
      favorite_movie: "Anatomy of a Murder",
      hobbies: "Beach volleyball",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/E-nOn1GMq79-DXVlH7X_Bt2nKtSVhQnP20f8xvxqGms/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODMzMjE0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 139,
      go_by: "Champ",
      favorite_movie: "The Thin Man",
      hobbies: "Cemetery/Tombstone cleaning",
      achievements: "Meritorious Unit Award",
      spouse_name: "",
      children_num: 3,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/wpsAYo5NIR5yZLdDHyqHrLz0eEy_vf9iZt-KmdWadAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYyNDY3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 140,
      go_by: "Robin",
      favorite_movie: "The Searchers",
      hobbies: "Civil War history and site visits",
      achievements: "Gallant Unit Citation",
      spouse_name: "Wendy",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/wUSU57he02S0BlA6hIjZDjxvr-xUa1fu6OBgToYTxGA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjk5MjU1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 141,
      go_by: "Lightning",
      favorite_movie: "My Neighbor Totoro",
      hobbies: "Learn a new language",
      achievements: "Presidential Unit Citation",
      spouse_name: "Steve",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/5g8WT2ZmLDfBMRQbtNt7uRG0FJ3UY9NFB1fFVUxYR08/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQ2NzQ4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 142,
      go_by: "Darkwing",
      favorite_movie: "Gladiator",
      hobbies: "Needlepoint",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "Sarah",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/zVKrruKmIojl8CL-ix78BIDo6b3H5Aw7iZG_2JWGl6U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDM3NTA0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 143,
      go_by: "Cougar",
      favorite_movie: "Parasite",
      hobbies: "Gnoming",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "Clara",
      children_num: 2,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/zEuOQ68hckic41qV-nRxitZjuN-hgRZu7vMppjEp5hQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI5NzQ2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 144,
      go_by: "Bugsie",
      favorite_movie: "The Breakfast Club",
      hobbies: "Sea glass collecting",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "Trent",
      children_num: 3,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/s6lQhfeAlwnPhAER2O36G4NnsC0aL2FnKja8MxW9BxM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjkwMTkwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 145,
      go_by: "Riddle",
      favorite_movie: "Days of Heaven",
      hobbies: "Urban spelunking",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "Rachel",
      children_num: 1,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/g1fzudSyiyQMNPYYo3KCa8s7SfoX8vIOg1yy2P2xz6c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY5NzMwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 146,
      go_by: "Friend",
      favorite_movie: "American History X",
      hobbies: "Skydiving",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "Judy",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/b08rkHbJOs2kk6nj86h4Sje6ExFu7PbLhZPi9JHnLpk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODI3ODg2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 147,
      go_by: "Ladybug",
      favorite_movie: "Eternal Sunshine of the Spotless Mind",
      hobbies: "Aquaponics",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "Ginger",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/eM7f7vXKsF_IbKP4SKGPWSXxOR6VxXQJ5EZFI2MrHoA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjE2OTg4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 148,
      go_by: "Bugs",
      favorite_movie: "Office Space",
      hobbies: "Sailing",
      achievements: "Combat Readiness Medal",
      spouse_name: "Florence",
      children_num: 1,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/-DVIwclJX5kZLezgl1a_kmsaI3KScsuy_xswMa__dWE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY5NTI3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 149,
      go_by: "Delight",
      favorite_movie: "It's a Wonderful Life",
      hobbies: "Cruising",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "Steven",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/oEl2zmineV2mziUJDrHQcU7Zu9-Tp65scxdPoQzPQT4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTc1Njg5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 150,
      go_by: "Stray",
      favorite_movie: "Memories of Murder",
      hobbies: "Crocheting",
      achievements: "Aerial Achievement Medal",
      spouse_name: "Steven",
      children_num: 3,
      children_names: "Trevor",
      personal_img:
        "https://images.generated.photos/_DjYMnhCRq5HLAiTH4USrLAE3lmUGR3AOcfLaWLlnyE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzkwOTQyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 151,
      go_by: "Badger",
      favorite_movie: "Sullivan's Travels",
      hobbies: "Chainsaw carving",
      achievements: "Airman's Medal",
      spouse_name: "Ginger",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/FnMsHo_JKqWBQT41wnzpiCyV5jQbvq37zqhk_LvULkM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODA0NDYyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 152,
      go_by: "Chum",
      favorite_movie: "Fanny and Alexander",
      hobbies: "Visit all US National Parks",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "Zoe",
      children_num: 2,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/g3-diLjiZQPsy8CCKpAcMN1hexp6gcsbCWC5fa-ex0g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE1Mzg2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 153,
      go_by: "Blanks",
      favorite_movie: "Butch Cassidy and the Sundance Kid",
      hobbies: "Furniture building",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "Wendy",
      children_num: 4,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/zzns0JDirzZ7y1_sM7JCajfQzrODs2LMcM6jhK6RA-Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTMxMjYyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 154,
      go_by: "Clover",
      favorite_movie: "Bringing Up Baby",
      hobbies: "Vinyl record collecting",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "Clara",
      children_num: 1,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/jRcJhQ3WnmDMVt0uL8lbyCtg58gGTq8vBnRF4pmbvss/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE1NDgzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 155,
      go_by: "Zebra",
      favorite_movie: "The Wizard of Oz",
      hobbies: "Vintage photo collecting",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "Judy",
      children_num: 2,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/av-86iavi4RsUXfbXUQZShrv8h5weD30J3RJjDzXIsg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODk5NTkyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 156,
      go_by: "Wyvern",
      favorite_movie: "Rio Bravo",
      hobbies: "Origami",
      achievements: "Meritorious Unit Award",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/0fALFGfaUbDFXnIJk1Y8KYx3RVkvxqmrJYlG6GE3vg0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE0NzM1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-5-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 157,
      go_by: "Turtle",
      favorite_movie: "A Fistful of Dollars",
      hobbies: "Archery",
      achievements: "Gallant Unit Citation",
      spouse_name: "Zoe",
      children_num: 3,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/KaUk5mF6HCq5LNcnkW5RATKkmP4_QYiDFnD1qScq9mI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQwMDMyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 158,
      go_by: "Boss",
      favorite_movie: "The Killing",
      hobbies: "Ventriloquism",
      achievements: "Presidential Unit Citation",
      spouse_name: "Wendy",
      children_num: 1,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/UXtu8o4s8C7Kj0PtkKmlmD7R_mfChbq84Rj3OEj9EJE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjIyMTEwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 159,
      go_by: "Mystery",
      favorite_movie: "Rebecca",
      hobbies: "Chocolate making",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/2H5sqgZXBKtH3Co5GH1xL4-7IMpF7P2qtpgXxs9hnSg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODAwMjM4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 160,
      go_by: "Elf",
      favorite_movie: "Once Upon a Time in the West",
      hobbies: "Paintball",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/7n-o0Wf50RJ316_0DELF6axnmzrh_-c_tfG639UpTXw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDEyMDc5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 161,
      go_by: "Bookworm",
      favorite_movie: "Unforgiven",
      hobbies: "Cake decorating",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "Melissa",
      children_num: 4,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/oBvqgzyu2cwNxXTIm2qwy_aRIPBG7AbtuzuDw31MTs8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkxMDUzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 162,
      go_by: "Basilisk",
      favorite_movie: "Rififi",
      hobbies: "Bullion collecting",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "Clara",
      children_num: 3,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/Fnr1Sr303ied11DOMSi-153ROefitiBytYPxM91sSAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUxNjgwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 163,
      go_by: "Flux",
      favorite_movie: "Mr. Smith Goes to Washington",
      hobbies: "Spelunking",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "Melissa",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/E-nOn1GMq79-DXVlH7X_Bt2nKtSVhQnP20f8xvxqGms/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODMzMjE0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 164,
      go_by: "Mystery",
      favorite_movie: "Laura",
      hobbies: "Lapidary",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "Sarah",
      children_num: 1,
      children_names: "Constance",
      personal_img:
        "https://images.generated.photos/wpsAYo5NIR5yZLdDHyqHrLz0eEy_vf9iZt-KmdWadAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYyNDY3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 165,
      go_by: "Alligator",
      favorite_movie: "Annie Hall",
      hobbies: "Tennis",
      achievements: "Combat Readiness Medal",
      spouse_name: "Rachel",
      children_num: 2,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/wUSU57he02S0BlA6hIjZDjxvr-xUa1fu6OBgToYTxGA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjk5MjU1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 166,
      go_by: "Stray",
      favorite_movie: "Duck Soup",
      hobbies: "Beach volleyball",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "Judy",
      children_num: 1,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/5g8WT2ZmLDfBMRQbtNt7uRG0FJ3UY9NFB1fFVUxYR08/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQ2NzQ4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 167,
      go_by: "Ghost",
      favorite_movie: "For a Few Dollars More",
      hobbies: "Cemetery/Tombstone cleaning",
      achievements: "Aerial Achievement Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/zVKrruKmIojl8CL-ix78BIDo6b3H5Aw7iZG_2JWGl6U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDM3NTA0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 168,
      go_by: "Bullfrog",
      favorite_movie: "The Best Years of Our Lives",
      hobbies: "Civil War history and site visits",
      achievements: "Airman's Medal",
      spouse_name: "Oscar",
      children_num: 2,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/zEuOQ68hckic41qV-nRxitZjuN-hgRZu7vMppjEp5hQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI5NzQ2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 169,
      go_by: "Champ",
      favorite_movie: "Ran",
      hobbies: "Learn a new language",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/s6lQhfeAlwnPhAER2O36G4NnsC0aL2FnKja8MxW9BxM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjkwMTkwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 170,
      go_by: "Heretic",
      favorite_movie: "Stalag 17",
      hobbies: "Needlepoint",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "Florence",
      children_num: 1,
      children_names: "Billy",
      personal_img:
        "https://images.generated.photos/g1fzudSyiyQMNPYYo3KCa8s7SfoX8vIOg1yy2P2xz6c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY5NzMwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 171,
      go_by: "Goat",
      favorite_movie: "Lawrence of Arabia",
      hobbies: "Gnoming",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "Ginger",
      children_num: 2,
      children_names: "Susie",
      personal_img:
        "https://images.generated.photos/b08rkHbJOs2kk6nj86h4Sje6ExFu7PbLhZPi9JHnLpk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODI3ODg2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 172,
      go_by: "Hangman",
      favorite_movie: "The Sting",
      hobbies: "Sea glass collecting",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "Mike",
      children_num: 1,
      children_names: "Alice",
      personal_img:
        "https://images.generated.photos/eM7f7vXKsF_IbKP4SKGPWSXxOR6VxXQJ5EZFI2MrHoA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjE2OTg4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 173,
      go_by: "Dog",
      favorite_movie: "Brief Encounter",
      hobbies: "Urban spelunking",
      achievements: "Meritorious Unit Award",
      spouse_name: "Jeff",
      children_num: 2,
      children_names: "George",
      personal_img:
        "https://images.generated.photos/-DVIwclJX5kZLezgl1a_kmsaI3KScsuy_xswMa__dWE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY5NTI3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 174,
      go_by: "Iron",
      favorite_movie: "The Kid",
      hobbies: "Skydiving",
      achievements: "Gallant Unit Citation",
      spouse_name: "Melissa",
      children_num: 1,
      children_names: "Peter",
      personal_img:
        "https://images.generated.photos/oEl2zmineV2mziUJDrHQcU7Zu9-Tp65scxdPoQzPQT4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTc1Njg5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 175,
      go_by: "Fox",
      favorite_movie: "All the President's Men",
      hobbies: "Aquaponics",
      achievements: "Presidential Unit Citation",
      spouse_name: "Sarah",
      children_num: 2,
      children_names: "Trevor",
      personal_img:
        "https://images.generated.photos/_DjYMnhCRq5HLAiTH4USrLAE3lmUGR3AOcfLaWLlnyE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzkwOTQyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 176,
      go_by: "Dino",
      favorite_movie: "Iron Man",
      hobbies: "Sailing",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "Zoe",
      children_num: 3,
      children_names: "Constance",
      personal_img:
        "https://images.generated.photos/FnMsHo_JKqWBQT41wnzpiCyV5jQbvq37zqhk_LvULkM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODA0NDYyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 177,
      go_by: "Bugsy",
      favorite_movie: "Dog Day Afternoon",
      hobbies: "Cruising",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/g3-diLjiZQPsy8CCKpAcMN1hexp6gcsbCWC5fa-ex0g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE1Mzg2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 178,
      go_by: "Dizzy",
      favorite_movie: "To Be or Not to Be",
      hobbies: "Crocheting",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "Rachel",
      children_num: 2,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/zzns0JDirzZ7y1_sM7JCajfQzrODs2LMcM6jhK6RA-Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTMxMjYyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 179,
      go_by: "Doodle",
      favorite_movie: "Back to the Future Part II",
      hobbies: "Chainsaw carving",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/jRcJhQ3WnmDMVt0uL8lbyCtg58gGTq8vBnRF4pmbvss/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE1NDgzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 180,
      go_by: "Ace",
      favorite_movie: "Paris, Texas",
      hobbies: "Visit all US National Parks",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/av-86iavi4RsUXfbXUQZShrv8h5weD30J3RJjDzXIsg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODk5NTkyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 181,
      go_by: "Quill",
      favorite_movie: "Witness for the Prosecution",
      hobbies: "Furniture building",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/0fALFGfaUbDFXnIJk1Y8KYx3RVkvxqmrJYlG6GE3vg0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE0NzM1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 182,
      go_by: "Ant",
      favorite_movie: "Charade",
      hobbies: "Vinyl record collecting",
      achievements: "Combat Readiness Medal",
      spouse_name: "Wendy",
      children_num: 3,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/KaUk5mF6HCq5LNcnkW5RATKkmP4_QYiDFnD1qScq9mI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQwMDMyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 183,
      go_by: "Nobody",
      favorite_movie: "The Prestige",
      hobbies: "Vintage photo collecting",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "Florence",
      children_num: 1,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/UXtu8o4s8C7Kj0PtkKmlmD7R_mfChbq84Rj3OEj9EJE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjIyMTEwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 184,
      go_by: "Alien",
      favorite_movie: "The Graduate",
      hobbies: "Origami",
      achievements: "Aerial Achievement Medal",
      spouse_name: "Ginger",
      children_num: 1,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/2H5sqgZXBKtH3Co5GH1xL4-7IMpF7P2qtpgXxs9hnSg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODAwMjM4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 185,
      go_by: "Elf",
      favorite_movie: "The Great Escape",
      hobbies: "Archery",
      achievements: "Airman's Medal",
      spouse_name: "Bob",
      children_num: 2,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/7n-o0Wf50RJ316_0DELF6axnmzrh_-c_tfG639UpTXw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDEyMDc5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 186,
      go_by: "Coyote",
      favorite_movie: "Andrei Rublev",
      hobbies: "Ventriloquism",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "Steve",
      children_num: 2,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/oBvqgzyu2cwNxXTIm2qwy_aRIPBG7AbtuzuDw31MTs8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkxMDUzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 187,
      go_by: "Face",
      favorite_movie: "Metropolis",
      hobbies: "Chocolate making",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "Sarah",
      children_num: 2,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/Fnr1Sr303ied11DOMSi-153ROefitiBytYPxM91sSAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUxNjgwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 188,
      go_by: "Dash",
      favorite_movie: "The Battle of Algiers",
      hobbies: "Paintball",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "Sarah",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/E-nOn1GMq79-DXVlH7X_Bt2nKtSVhQnP20f8xvxqGms/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODMzMjE0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-8-senior-master-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 189,
      go_by: "Rabbit",
      favorite_movie: "Breathless",
      hobbies: "Cake decorating",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/wpsAYo5NIR5yZLdDHyqHrLz0eEy_vf9iZt-KmdWadAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYyNDY3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 190,
      go_by: "Jenkins",
      favorite_movie: "Willy Wonka & the Chocolate Factory",
      hobbies: "Bullion collecting",
      achievements: "Meritorious Unit Award",
      spouse_name: "Trevor",
      children_num: 1,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/wUSU57he02S0BlA6hIjZDjxvr-xUa1fu6OBgToYTxGA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjk5MjU1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 191,
      go_by: "Hangman",
      favorite_movie: "Chungking Express",
      hobbies: "Spelunking",
      achievements: "Gallant Unit Citation",
      spouse_name: "Rachel",
      children_num: 1,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/5g8WT2ZmLDfBMRQbtNt7uRG0FJ3UY9NFB1fFVUxYR08/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQ2NzQ4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 192,
      go_by: "Justice",
      favorite_movie: "The King of Comedy",
      hobbies: "Lapidary",
      achievements: "Presidential Unit Citation",
      spouse_name: "Trent",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/zVKrruKmIojl8CL-ix78BIDo6b3H5Aw7iZG_2JWGl6U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDM3NTA0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 193,
      go_by: "Fly",
      favorite_movie: "E.T.: The Extra-Terrestrial",
      hobbies: "Tennis",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "Zoe",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/zEuOQ68hckic41qV-nRxitZjuN-hgRZu7vMppjEp5hQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI5NzQ2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 194,
      go_by: "Boss",
      favorite_movie: "The Hidden Fortress",
      hobbies: "Beach volleyball",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/s6lQhfeAlwnPhAER2O36G4NnsC0aL2FnKja8MxW9BxM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjkwMTkwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 195,
      go_by: "Teacher",
      favorite_movie: "City of God",
      hobbies: "Cemetery/Tombstone cleaning",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "Wendy",
      children_num: 2,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/g1fzudSyiyQMNPYYo3KCa8s7SfoX8vIOg1yy2P2xz6c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY5NzMwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 196,
      go_by: "Fox",
      favorite_movie: "The Hustler",
      hobbies: "Civil War history and site visits",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/b08rkHbJOs2kk6nj86h4Sje6ExFu7PbLhZPi9JHnLpk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODI3ODg2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 197,
      go_by: "Quicksand",
      favorite_movie: "To Kill a Mockingbird",
      hobbies: "Learn a new language",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "Peter",
      children_num: 1,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/eM7f7vXKsF_IbKP4SKGPWSXxOR6VxXQJ5EZFI2MrHoA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjE2OTg4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 198,
      go_by: "Biscuit",
      favorite_movie: "The Shop Around the Corner",
      hobbies: "Needlepoint",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "Oscar",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/-DVIwclJX5kZLezgl1a_kmsaI3KScsuy_xswMa__dWE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY5NTI3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 199,
      go_by: "Gator",
      favorite_movie: "Scarface",
      hobbies: "Gnoming",
      achievements: "Combat Readiness Medal",
      spouse_name: "Sarah",
      children_num: 3,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/oEl2zmineV2mziUJDrHQcU7Zu9-Tp65scxdPoQzPQT4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTc1Njg5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 200,
      go_by: "Roach",
      favorite_movie: "Django Unchained",
      hobbies: "Sea glass collecting",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "Melissa",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/_DjYMnhCRq5HLAiTH4USrLAE3lmUGR3AOcfLaWLlnyE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzkwOTQyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 201,
      go_by: "Silver",
      favorite_movie: "Dial M for Murder",
      hobbies: "Urban spelunking",
      achievements: "Aerial Achievement Medal",
      spouse_name: "Clara",
      children_num: 4,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/FnMsHo_JKqWBQT41wnzpiCyV5jQbvq37zqhk_LvULkM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODA0NDYyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 202,
      go_by: "Gopher",
      favorite_movie: "The Long Goodbye",
      hobbies: "Skydiving",
      achievements: "Airman's Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/g3-diLjiZQPsy8CCKpAcMN1hexp6gcsbCWC5fa-ex0g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE1Mzg2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-2-specialist-2.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 203,
      go_by: "Magnet",
      favorite_movie: "12 Monkeys",
      hobbies: "Aquaponics",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "Clara",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/zzns0JDirzZ7y1_sM7JCajfQzrODs2LMcM6jhK6RA-Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTMxMjYyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 204,
      go_by: "Wyvern",
      favorite_movie: "The Wild Bunch",
      hobbies: "Sailing",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "Eddie",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/jRcJhQ3WnmDMVt0uL8lbyCtg58gGTq8vBnRF4pmbvss/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE1NDgzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 205,
      go_by: "Barracuda",
      favorite_movie: "The Lady Vanishes",
      hobbies: "Cruising",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "Judy",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/av-86iavi4RsUXfbXUQZShrv8h5weD30J3RJjDzXIsg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODk5NTkyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 206,
      go_by: "Bones",
      favorite_movie: "WALL\u00b7E",
      hobbies: "Crocheting",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "Florence",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/0fALFGfaUbDFXnIJk1Y8KYx3RVkvxqmrJYlG6GE3vg0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE0NzM1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 207,
      go_by: "Boomboom",
      favorite_movie: "The Life and Death of Colonel Blimp",
      hobbies: "Chainsaw carving",
      achievements: "Meritorious Unit Award",
      spouse_name: "Ginger",
      children_num: 1,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/KaUk5mF6HCq5LNcnkW5RATKkmP4_QYiDFnD1qScq9mI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQwMDMyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 208,
      go_by: "Tiger",
      favorite_movie: "American Beauty",
      hobbies: "Visit all US National Parks",
      achievements: "Gallant Unit Citation",
      spouse_name: "Steven",
      children_num: 1,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/UXtu8o4s8C7Kj0PtkKmlmD7R_mfChbq84Rj3OEj9EJE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjIyMTEwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 209,
      go_by: "Suit",
      favorite_movie: "The French Connection",
      hobbies: "Furniture building",
      achievements: "Presidential Unit Citation",
      spouse_name: "Oscar",
      children_num: 2,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/2H5sqgZXBKtH3Co5GH1xL4-7IMpF7P2qtpgXxs9hnSg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODAwMjM4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 210,
      go_by: "Coyote",
      favorite_movie: "Bride of Frankenstein",
      hobbies: "Vinyl record collecting",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "",
      children_num: 1,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/7n-o0Wf50RJ316_0DELF6axnmzrh_-c_tfG639UpTXw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDEyMDc5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 211,
      go_by: "Hammerhead",
      favorite_movie: "Braveheart",
      hobbies: "Vintage photo collecting",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "Melissa",
      children_num: 2,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/oBvqgzyu2cwNxXTIm2qwy_aRIPBG7AbtuzuDw31MTs8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkxMDUzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 212,
      go_by: "Beaker",
      favorite_movie: "Ugetsu",
      hobbies: "Origami",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "Rachel",
      children_num: 3,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/Fnr1Sr303ied11DOMSi-153ROefitiBytYPxM91sSAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUxNjgwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 213,
      go_by: "Face",
      favorite_movie: "Young Frankenstein",
      hobbies: "Archery",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "Zoe",
      children_num: 1,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/E-nOn1GMq79-DXVlH7X_Bt2nKtSVhQnP20f8xvxqGms/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODMzMjE0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 214,
      go_by: "Drake",
      favorite_movie: "The Bridge on the River Kwai",
      hobbies: "Ventriloquism",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "Wendy",
      children_num: 2,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/wpsAYo5NIR5yZLdDHyqHrLz0eEy_vf9iZt-KmdWadAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYyNDY3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 215,
      go_by: "Cypher",
      favorite_movie: "The Incredibles",
      hobbies: "Chocolate making",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "Judy",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/wUSU57he02S0BlA6hIjZDjxvr-xUa1fu6OBgToYTxGA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjk5MjU1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 216,
      go_by: "Iceman",
      favorite_movie: "Grave of the Fireflies",
      hobbies: "Paintball",
      achievements: "Combat Readiness Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/5g8WT2ZmLDfBMRQbtNt7uRG0FJ3UY9NFB1fFVUxYR08/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQ2NzQ4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 217,
      go_by: "Flex",
      favorite_movie: "My Man Godfrey",
      hobbies: "Cake decorating",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "Florence",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/zVKrruKmIojl8CL-ix78BIDo6b3H5Aw7iZG_2JWGl6U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDM3NTA0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 218,
      go_by: "Secret",
      favorite_movie: "Life of Brian",
      hobbies: "Bullion collecting",
      achievements: "Aerial Achievement Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/zEuOQ68hckic41qV-nRxitZjuN-hgRZu7vMppjEp5hQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI5NzQ2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-3-specialist-3.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 219,
      go_by: "Rabbit",
      favorite_movie: "Miller's Crossing",
      hobbies: "Spelunking",
      achievements: "Airman's Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/s6lQhfeAlwnPhAER2O36G4NnsC0aL2FnKja8MxW9BxM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjkwMTkwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 220,
      go_by: "Silver",
      favorite_movie: "High Noon",
      hobbies: "Lapidary",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "Ginger",
      children_num: 3,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/g1fzudSyiyQMNPYYo3KCa8s7SfoX8vIOg1yy2P2xz6c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY5NzMwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 221,
      go_by: "Fangs",
      favorite_movie: "Airplane!",
      hobbies: "Tennis",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "Melissa",
      children_num: 3,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/b08rkHbJOs2kk6nj86h4Sje6ExFu7PbLhZPi9JHnLpk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODI3ODg2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 222,
      go_by: "Barracuda",
      favorite_movie: "The Goonies",
      hobbies: "Beach volleyball",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "Bob",
      children_num: 1,
      children_names: "Billy",
      personal_img:
        "https://images.generated.photos/eM7f7vXKsF_IbKP4SKGPWSXxOR6VxXQJ5EZFI2MrHoA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjE2OTg4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 223,
      go_by: "Bugsy",
      favorite_movie: "Army of Shadows",
      hobbies: "Cemetery/Tombstone cleaning",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "",
      children_num: 2,
      children_names: "Susie",
      personal_img:
        "https://images.generated.photos/-DVIwclJX5kZLezgl1a_kmsaI3KScsuy_xswMa__dWE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY5NTI3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 224,
      go_by: "Hammerhead",
      favorite_movie: "Singin' in the Rain",
      hobbies: "Civil War history and site visits",
      achievements: "Meritorious Unit Award",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/oEl2zmineV2mziUJDrHQcU7Zu9-Tp65scxdPoQzPQT4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTc1Njg5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 225,
      go_by: "Wyvern",
      favorite_movie: "Sanjuro",
      hobbies: "Learn a new language",
      achievements: "Gallant Unit Citation",
      spouse_name: "",
      children_num: 4,
      children_names: "George",
      personal_img:
        "https://images.generated.photos/_DjYMnhCRq5HLAiTH4USrLAE3lmUGR3AOcfLaWLlnyE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzkwOTQyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 226,
      go_by: "Booger",
      favorite_movie: "Barry Lyndon",
      hobbies: "Needlepoint",
      achievements: "Presidential Unit Citation",
      spouse_name: "",
      children_num: 1,
      children_names: "Peter",
      personal_img:
        "https://images.generated.photos/FnMsHo_JKqWBQT41wnzpiCyV5jQbvq37zqhk_LvULkM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODA0NDYyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 227,
      go_by: "Condor",
      favorite_movie: "Woman in the Dunes",
      hobbies: "Gnoming",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "Steve",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/g3-diLjiZQPsy8CCKpAcMN1hexp6gcsbCWC5fa-ex0g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE1Mzg2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 228,
      go_by: "Photon",
      favorite_movie: "Mad Max: Fury Road",
      hobbies: "Sea glass collecting",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "",
      children_num: 2,
      children_names: "Constance",
      personal_img:
        "https://images.generated.photos/zzns0JDirzZ7y1_sM7JCajfQzrODs2LMcM6jhK6RA-Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTMxMjYyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 229,
      go_by: "Cosmo",
      favorite_movie: "Nausica\u00e4 of the Valley of the Wind",
      hobbies: "Urban spelunking",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "Trevor",
      children_num: 3,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/jRcJhQ3WnmDMVt0uL8lbyCtg58gGTq8vBnRF4pmbvss/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE1NDgzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 230,
      go_by: "Silver",
      favorite_movie: "Manhattan",
      hobbies: "Skydiving",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/av-86iavi4RsUXfbXUQZShrv8h5weD30J3RJjDzXIsg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODk5NTkyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 231,
      go_by: "Chimp",
      favorite_movie: "Black Narcissus",
      hobbies: "Aquaponics",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "Trent",
      children_num: 1,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/0fALFGfaUbDFXnIJk1Y8KYx3RVkvxqmrJYlG6GE3vg0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE0NzM1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 232,
      go_by: "Hedgehog",
      favorite_movie: "Finding Nemo",
      hobbies: "Sailing",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "William",
      children_num: 2,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/KaUk5mF6HCq5LNcnkW5RATKkmP4_QYiDFnD1qScq9mI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQwMDMyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 233,
      go_by: "Magnet",
      favorite_movie: "The Sixth Sense",
      hobbies: "Cruising",
      achievements: "Combat Readiness Medal",
      spouse_name: "Clara",
      children_num: 4,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/UXtu8o4s8C7Kj0PtkKmlmD7R_mfChbq84Rj3OEj9EJE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjIyMTEwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 234,
      go_by: "Melody",
      favorite_movie: "Who's Afraid of Virginia Woolf?",
      hobbies: "Crocheting",
      achievements: "Air and Space Campaign Medal",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/2H5sqgZXBKtH3Co5GH1xL4-7IMpF7P2qtpgXxs9hnSg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODAwMjM4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-4-specialist-4.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 235,
      go_by: "Legend",
      favorite_movie: "Predator",
      hobbies: "Chainsaw carving",
      achievements: "Aerial Achievement Medal",
      spouse_name: "Judy",
      children_num: 1,
      children_names: "Oliver",
      personal_img:
        "https://images.generated.photos/7n-o0Wf50RJ316_0DELF6axnmzrh_-c_tfG639UpTXw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDEyMDc5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 236,
      go_by: "Dragon",
      favorite_movie: "Spirited Away",
      hobbies: "Visit all US National Parks",
      achievements: "Airman's Medal",
      spouse_name: "Sarah",
      children_num: 3,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/oBvqgzyu2cwNxXTIm2qwy_aRIPBG7AbtuzuDw31MTs8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkxMDUzLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Air_and_Space_Campaign_Medal.PNG",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 237,
      go_by: "Friend",
      favorite_movie: "Kill Bill Vol. 2",
      hobbies: "Furniture building",
      achievements: "Air and Space Commendation Medal",
      spouse_name: "Florence",
      children_num: 2,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/Fnr1Sr303ied11DOMSi-153ROefitiBytYPxM91sSAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUxNjgwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 238,
      go_by: "Secret",
      favorite_movie: "White Heat",
      hobbies: "Vinyl record collecting",
      achievements: "Air and Space Achievement Medal",
      spouse_name: "Rachel",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/E-nOn1GMq79-DXVlH7X_Bt2nKtSVhQnP20f8xvxqGms/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODMzMjE0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 239,
      go_by: "Cosmo",
      favorite_movie: "The Bourne Identity",
      hobbies: "Vintage photo collecting",
      achievements: "Air and Space Training Ribbon",
      spouse_name: "Ginger",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/wpsAYo5NIR5yZLdDHyqHrLz0eEy_vf9iZt-KmdWadAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYyNDY3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I have  a collection of buttons",
    },
    {
      alpha_roster_id: 240,
      go_by: "Heretic",
      favorite_movie: "Stagecoach",
      hobbies: "Origami",
      achievements: "Air and Space Organizational Excellence Award",
      spouse_name: "Jeff",
      children_num: 2,
      children_names: "Orville",
      personal_img:
        "https://images.generated.photos/wUSU57he02S0BlA6hIjZDjxvr-xUa1fu6OBgToYTxGA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjk5MjU1LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
      interesting_fact: "I am a professional card player",
    },
    {
      alpha_roster_id: 241,
      go_by: "Locket",
      favorite_movie: "Some Like It Hot",
      hobbies: "Archery",
      achievements: "Meritorious Unit Award",
      spouse_name: "Bob",
      children_num: 1,
      children_names: "Constance",
      personal_img:
        "https://images.generated.photos/5g8WT2ZmLDfBMRQbtNt7uRG0FJ3UY9NFB1fFVUxYR08/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQ2NzQ4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I am a black belt in Judo",
    },
    {
      alpha_roster_id: 242,
      go_by: "Bullseye",
      favorite_movie: "Oldboy",
      hobbies: "Ventriloquism",
      achievements: "Gallant Unit Citation",
      spouse_name: "Zoe",
      children_num: 1,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/zVKrruKmIojl8CL-ix78BIDo6b3H5Aw7iZG_2JWGl6U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDM3NTA0LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I play 7 instruments",
    },
    {
      alpha_roster_id: 243,
      go_by: "Mojo",
      favorite_movie: "Roman Holiday",
      hobbies: "Chocolate making",
      achievements: "Presidential Unit Citation",
      spouse_name: "",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/zEuOQ68hckic41qV-nRxitZjuN-hgRZu7vMppjEp5hQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI5NzQ2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Outstanding_Unit_ribbon.svg/1024px-Outstanding_Unit_ribbon.svg.png",
      interesting_fact: "I can stand on my head",
    },
    {
      alpha_roster_id: 244,
      go_by: "Riddle",
      favorite_movie: "A Face in the Crowd",
      hobbies: "Paintball",
      achievements: "Outstanding Airman of the Year Ribbon",
      spouse_name: "",
      children_num: 2,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/s6lQhfeAlwnPhAER2O36G4NnsC0aL2FnKja8MxW9BxM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjkwMTkwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can burp the alphabet",
    },
    {
      alpha_roster_id: 245,
      go_by: "Dizzy",
      favorite_movie: "The Untouchables",
      hobbies: "Cake decorating",
      achievements: "Outstanding Guardian of the Year Ribbon",
      spouse_name: "Trevor",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/g1fzudSyiyQMNPYYo3KCa8s7SfoX8vIOg1yy2P2xz6c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY5NzMwLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can guess people's weight",
    },
    {
      alpha_roster_id: 246,
      go_by: "Alien",
      favorite_movie: "Late Spring",
      hobbies: "Bullion collecting",
      achievements:
        "Air and Space Expeditionary Service Ribbon with Gold Border",
      spouse_name: "",
      children_num: 1,
      children_names: "Henry",
      personal_img:
        "https://images.generated.photos/b08rkHbJOs2kk6nj86h4Sje6ExFu7PbLhZPi9JHnLpk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODI3ODg2LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I know when a pot of water is about to boil",
    },
    {
      alpha_roster_id: 247,
      go_by: "Digger",
      favorite_movie: "Paper Moon",
      hobbies: "Spelunking",
      achievements: "Air and Space Expeditionary Service Ribbon",
      spouse_name: "Trent",
      children_num: 2,
      children_names: "Pip",
      personal_img:
        "https://images.generated.photos/eM7f7vXKsF_IbKP4SKGPWSXxOR6VxXQJ5EZFI2MrHoA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjE2OTg4LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I can open a beer can with my teeth",
    },
    {
      alpha_roster_id: 248,
      go_by: "Dog",
      favorite_movie: "The Exorcist",
      hobbies: "Lapidary",
      achievements: "Space Force Good Conduct Medal",
      spouse_name: "William",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/-DVIwclJX5kZLezgl1a_kmsaI3KScsuy_xswMa__dWE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY5NTI3LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I found $20 on the ground once",
    },
    {
      alpha_roster_id: 249,
      go_by: "Elf",
      favorite_movie: "Rain Man",
      hobbies: "Tennis",
      achievements: "Air Force Good Conduct Medal",
      spouse_name: "",
      children_num: 3,
      children_names: "Wendell",
      personal_img:
        "https://images.generated.photos/oEl2zmineV2mziUJDrHQcU7Zu9-Tp65scxdPoQzPQT4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTc1Njg5LmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I've been to all 50 US states",
    },
    {
      alpha_roster_id: 250,
      go_by: "Serpent",
      favorite_movie: "The Green Mile",
      hobbies: "Beach volleyball",
      achievements: "Combat Readiness Medal",
      spouse_name: "Harrold",
      children_num: 0,
      children_names: "",
      personal_img:
        "https://images.generated.photos/_DjYMnhCRq5HLAiTH4USrLAE3lmUGR3AOcfLaWLlnyE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzkwOTQyLmpwZw.jpg",
      grade_emblem_img:
        "https://www.defense.gov/Portals/1/Page-Assets/insignias/space-force/E-6-technical-sergeant.png",
      achievement_imgs:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/AeAMedal.gif",
      interesting_fact: "I have  a collection of buttons",
    },
  ]);
};
