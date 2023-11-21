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
        hobbies: "Gun collecting, Quilting, Glass blowing",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/nvIh9El3c00xkTkFwB9b7lZ3W94V-tfaVWlt5APyR-U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODQzOTEyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I can stand on my head",
      },
      {
        alpha_roster_id: 2,
        go_by: "Bear",
        favorite_movie: "The Empire Strikes Back",
        hobbies: "Needlepoint",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "Wendie",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/o5TKII2vn4q7IKWxNDkhQFii1v_DGWv_jKEqTPJ4uzY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDEwMTg2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
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
          "https://images.generated.photos/uzv_ELYzJ2shF8REfIyngoXWWHQaYk5qaF-9BVI2wKs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTY4MDUwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I can guess people's weight",
      },
      {
        alpha_roster_id: 4,
        go_by: "Exit",
        favorite_movie: "Raiders of the Lost Ark",
        hobbies: "Sea glass collecting",
        achievements: "Gallant Unit Citation",
        spouse_name: "",
        children_num: 1,
        children_names: "Artemas",
        personal_img:
          "https://images.generated.photos/7ygKSG_SH3G_i7rhOOuSPMPr2SiaMNO6Rzgflb2QMIM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzI5NDYwLmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I know when a pot of water is about to boil",
      },
      {
        alpha_roster_id: 5,
        go_by: "Flux",
        favorite_movie: "The Shawshank Redemption",
        hobbies: "Urban spelunking",
        achievements: "Presidential Unit Citation",
        spouse_name: "Maxy",
        children_num: 3,
        children_names: "Lynnett, Barbette, Helga",
        personal_img:
          "https://images.generated.photos/HUX2gQf4mzU7Tq90l7OVk2HetLsXXaXVFbsjfMCINCM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTU2MjcwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I can open a beer can with my teeth",
      },
      {
        alpha_roster_id: 6,
        go_by: "Boxer",
        favorite_movie: "Pulp Fiction",
        hobbies: "Skydiving",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "Hettie",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/1bdbdzvouEsYJ5hBoxtlcbpXYtT_mTkYUxTqkw-z4Gc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQxMjczLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I found $20 on the ground once",
      },
      {
        alpha_roster_id: 7,
        go_by: "Blackjack",
        favorite_movie: "Return of the Jedi",
        hobbies: "Aquaponics",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "Chase",
        children_num: 2,
        children_names: "Kesley, June",
        personal_img:
          "https://images.generated.photos/fCZ-nuNEsN8vxJO0Rj0wCHq-S37F9cM4Xq50fpAGaJ8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzU0NTM5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I've been to all 50 US states",
      },
      {
        alpha_roster_id: 8,
        go_by: "Cosmos",
        favorite_movie: "Back to the Future",
        hobbies: "Shooting / marksmanship, Billiards, Aluminum can collecting",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "Norma",
        children_num: 1,
        children_names: "Sheilah",
        personal_img:
          "https://images.generated.photos/CQ_q3zz3jO7Dt0RUHTEse4hwJYnDQiZbQM_AghhGFZM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzg2NDE3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
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
          "https://images.generated.photos/DNUQgBcLw6dixz6w5H_vi5WRqr__J48dMypVNYi9h8o/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODMzMzUxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I am a professional card player",
      },
      {
        alpha_roster_id: 10,
        go_by: "Banjo",
        favorite_movie: "The Godfather Part II",
        hobbies: "Organic gardening, Sculpting",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "",
        children_num: 2,
        children_names: "Boony, Jermain",
        personal_img:
          "https://images.generated.photos/gIMDSO5UOLeD9FvNrO6PI49rrjMZ8xzcr0262zo_8Mc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjEzNDYwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I am a black belt in Judo",
      },
      {
        alpha_roster_id: 11,
        go_by: "Gator",
        favorite_movie: "Harakiri",
        hobbies: "Chainsaw carving",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Lottie",
        personal_img:
          "https://images.generated.photos/t1lHkzxkSYnx0pVtcITPXBNHv7jLPSvC-XvYWnSpEf0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTM2Mzc2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I play 7 instruments",
      },
      {
        alpha_roster_id: 12,
        go_by: "Grizzle",
        favorite_movie: "The Dark Knight",
        hobbies: "Visit all US National Parks",
        achievements: "Combat Readiness Medal",
        spouse_name: "Emmye",
        children_num: 2,
        children_names: "Aloysia, Stafani",
        personal_img:
          "https://images.generated.photos/1lw7NwvmF1kG78ylPRw8z7A2CAnCE18GxUKWoHzAkPQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzgyNjkzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I ran into Joe Pesci at the Atlanta airport",
      },
      {
        alpha_roster_id: 13,
        go_by: "Ant",
        favorite_movie: "Fight Club",
        hobbies: "Furniture building",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Gabbi",
        personal_img:
          "https://images.generated.photos/nSVuWG3GQSbJaKcctEwei5P1v7rCleqWs-RFKHRgAA0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTc2NTI2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can whistle all of Beethoven's symphonies",
      },
      {
        alpha_roster_id: 14,
        go_by: "Omega",
        favorite_movie: "GoodFellas",
        hobbies: "Vinyl record collecting",
        achievements: "Aerial Achievement Medal",
        spouse_name: "",
        children_num: 3,
        children_names: "Horst, Granville, Frannie",
        personal_img:
          "https://images.generated.photos/NNISK6GIwKtXqoc80lP9z741n6cpUfopFRNr8t4F-H4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTgxMzI2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I memorized 534 digits of Pi",
      },
      {
        alpha_roster_id: 15,
        go_by: "Ecto",
        favorite_movie: "Rear Window",
        hobbies: "Vintage photo collecting",
        achievements: "Airman's Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/w-UqPkRDbmqCvmMtBym79GoPRk_Qv5RMppZ32QeJb7g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjc3Mjk4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can recite the Star Spangled Banner backwards",
      },
      {
        alpha_roster_id: 16,
        go_by: "Digger",
        favorite_movie: "City Lights",
        hobbies: "Origami",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Ollie",
        personal_img:
          "https://images.generated.photos/6k1mpiFi5SDsG-kEmV6HUqQjHPvqZ_qALRLKK8_c7ho/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTk1NDc0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can shoot a three point shot backwards",
      },
      {
        alpha_roster_id: 17,
        go_by: "Fox",
        favorite_movie: "High and Low",
        hobbies: "Archery",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/XCjwKe61vY8sUGeWQ-cNs0kDfpBlqEeO6vpbRElLLhE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM1MTczLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I am a third cousin of Ryan Gosling",
      },
      {
        alpha_roster_id: 18,
        go_by: "Cloud",
        favorite_movie: "Alien",
        hobbies: "Impersonations, Drone flying",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "Griswold",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/-_HuWiN5otrc0vAd0d8vvFaqdvbfPGvzD_q-gKmUSNg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY1MTE5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I saw the Barbie movie 14 times",
      },
      {
        alpha_roster_id: 19,
        go_by: "Challenger",
        favorite_movie: "The Silence of the Lambs",
        hobbies: "Chocolate making",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "",
        children_num: 2,
        children_names: "Eleonore, Minnnie",
        personal_img:
          "https://images.generated.photos/TrE1LxFiqQPOLtyZNvx3PedFPBhj_G59BWvTCwUOpf0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDM3MjU2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I run a D&D campaign with my friends",
      },
      {
        alpha_roster_id: 20,
        go_by: "Viking",
        favorite_movie: "The Shining",
        hobbies: "Paintball",
        achievements: "Meritorious Unit Award",
        spouse_name: "",
        children_num: 2,
        children_names: "Aldrich, Pier",
        personal_img:
          "https://images.generated.photos/xvvsMWlDEUoYF12zvqHtX6Ijc-PAJ_IqCIDKljrGqYo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwNDI0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I built my own computer",
      },
      {
        alpha_roster_id: 21,
        go_by: "Dove",
        favorite_movie: "Reservoir Dogs",
        hobbies: "Cake decorating",
        achievements: "Gallant Unit Citation",
        spouse_name: "",
        children_num: 2,
        children_names: "Niki, Terence",
        personal_img:
          "https://images.generated.photos/7NrnQP-80qcfIS0eEVNG1uV75-qwzNlnwAIKri_61Ts/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDY2MDUwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I brew my own beer",
      },
      {
        alpha_roster_id: 22,
        go_by: "Goat",
        favorite_movie: "Indiana Jones and the Last Crusade",
        hobbies: "Dominoes, Rogue Lawnmowing, Origami",
        achievements: "Presidential Unit Citation",
        spouse_name: "",
        children_num: 2,
        children_names: "Irita, Germayne",
        personal_img:
          "https://images.generated.photos/iDHeuS5F-2elM-auZ6hB2aptNzVYcc6A3KcAcXuLQ0M/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjI1MTgwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can solve a Rubiks Cube in 40 seconds",
      },
      {
        alpha_roster_id: 23,
        go_by: "Jenkins",
        favorite_movie: "Casablanca",
        hobbies: "Spelunking",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "",
        children_num: 1,
        children_names: "Barry",
        personal_img:
          "https://images.generated.photos/AU33FfQxjZSBxe4YeYdIg3pWKrm2ccnTpoWWMWUJLm0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDA3MjU0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can speed run Mario Brothers in 30 seconds",
      },
      {
        alpha_roster_id: 24,
        go_by: "Birdie",
        favorite_movie: "The Apartment",
        hobbies: "Lapidary",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "",
        children_num: 2,
        children_names: "Cobbie, Lucas",
        personal_img:
          "https://images.generated.photos/k-inIzUOMKxOZ5x9GO2YA8s9UJHYwEshLl3o481qCpU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDUyNjI0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I am a globally ranked Star Craft player",
      },
      {
        alpha_roster_id: 25,
        go_by: "Stallion",
        favorite_movie: "Se7en",
        hobbies: "Ventriloquism, Knitting",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "",
        children_num: 1,
        children_names: "Emalia",
        personal_img:
          "https://images.generated.photos/vR7GSWzfs1X3OzvzCJI8wgh5oCyXqnnO8sQymVRmEWM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE1NDM0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact:
          "I performed in my high school's performance of Hamlet",
      },
      {
        alpha_roster_id: 26,
        go_by: "Hammerhead",
        favorite_movie: "Seven Samurai",
        hobbies: "Beach volleyball",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "Karola",
        children_num: 1,
        children_names: "Crissie",
        personal_img:
          "https://images.generated.photos/BWSZbFRDYmwTRJUfxaSV_nvfh-LsN6P2oW3f0lIU-NI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDg4Mzg2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I am a classically trained harpist",
      },
      {
        alpha_roster_id: 27,
        go_by: "Buster",
        favorite_movie: "M",
        hobbies: "Cemetery/Tombstone cleaning",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "",
        children_num: 2,
        children_names: "Foss, Kylie",
        personal_img:
          "https://images.generated.photos/OOLG27GTWoXHWbmUQ-9bbPweZuiNVXLaETXpeWhanM4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODUzNjU3LmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I know 6 programming languages",
      },
      {
        alpha_roster_id: 28,
        go_by: "Medusa",
        favorite_movie: "Monty Python and the Holy Grail",
        hobbies: "Ghost hunting, Carpet weaving",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "",
        children_num: 2,
        children_names: "Vale, Stefa",
        personal_img:
          "https://images.generated.photos/HAB9sqo1VXasxCAidw7A4V3dH-6jtIA6OPacvc_EwL4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODcxMTQ3LmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I spend my 24th birthday in Paris",
      },
      {
        alpha_roster_id: 29,
        go_by: "Badger",
        favorite_movie: "The Matrix",
        hobbies: "Learn a new language",
        achievements: "Combat Readiness Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/5mEU-YxT09ZHLU7B6xVdBbsCsGAv3CK0lJ38nsB3FCc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTU1ODMwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I've been to Disney World 26 times",
      },
      {
        alpha_roster_id: 30,
        go_by: "Beam",
        favorite_movie: "The Good, the Bad and the Ugly",
        hobbies: "Curling, Croquet, Girl Scout council patch collecting",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Debora",
        personal_img:
          "https://images.generated.photos/4XHPlJQW1SCSv69_l8SBLSLjCpK_Yi0S_ew-JDUwiBk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTc4NDE2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I've been to 40 Phish concerts",
      },
      {
        alpha_roster_id: 31,
        go_by: "Spider",
        favorite_movie: "Die Hard",
        hobbies: "Gnoming",
        achievements: "Aerial Achievement Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/jpSihGor8I9bKHuf4Y1AsCFKxWfxiYeIaDBmk5_M-lo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzEwOTUwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I played drums in a punk band during high school",
      },
      {
        alpha_roster_id: 32,
        go_by: "Cash",
        favorite_movie: "One Flew Over the Cuckoo's Nest",
        hobbies: "Sea glass collecting",
        achievements: "Airman's Medal",
        spouse_name: "Nancie",
        children_num: 4,
        children_names: "Georgetta, Jelene, Skippy, Spense",
        personal_img:
          "https://images.generated.photos/H4UyT7TkFJ_YwpSLuWVA6UlHd0jkpCGOJ-yVoAQwafQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU0NjQ5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I'm fluent 9 different languages",
      },
      {
        alpha_roster_id: 33,
        go_by: "Eagle",
        favorite_movie: "Double Indemnity",
        hobbies: "Urban spelunking",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "Eachelle",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/d0sez9x48Qa3rBWS06RrPy7sWc3zPAY5mGV1Vp02Rzw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTEyMTcwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I have a collection of top hats",
      },
      {
        alpha_roster_id: 34,
        go_by: "Ibis",
        favorite_movie: "Yojimbo",
        hobbies: "Skydiving",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "Bart",
        children_num: 3,
        children_names: "Dill, Northrop, Marilee",
        personal_img:
          "https://images.generated.photos/Bmy042BW7EWpWLikirM7vtTkyWuvVCAMz4X40Uc6A40/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzc2MDMzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can do 40 pull ups",
      },
      {
        alpha_roster_id: 35,
        go_by: "Boss",
        favorite_movie: "The Night of the Hunter",
        hobbies: "Wine tasting, Soap making",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "",
        children_num: 2,
        children_names: "Farah, Leonie",
        personal_img:
          "https://images.generated.photos/PQs5W0dvgSZr26a2Wv4XUjUZoip3eq5pfdwUR-kgjqY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mzc2MzQwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I am a black belt in Tae Kwon Do",
      },
      {
        alpha_roster_id: 36,
        go_by: "Tiger",
        favorite_movie: "Sunrise: A Song of Two Humans",
        hobbies: "Sailing",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "",
        children_num: 3,
        children_names: "Donalt, Waylen, Mar",
        personal_img:
          "https://images.generated.photos/BMLdM4YbIamJTJ09YL54RXnBWyLfpQOlDwJyT6XkhIg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzQ3ODU1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I saw Tom Cruse at a Dodgers game",
      },
      {
        alpha_roster_id: 37,
        go_by: "Hide",
        favorite_movie: "North by Northwest",
        hobbies: "Ziplining, Learn sign language, Vintage clothing collecting",
        achievements: "Meritorious Unit Award",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/VGQ6Ifv_opD--NkkX6fHRSGl6msgAiQZSYhWF8qufXk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjk5ODkyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can balance a broom on my nose",
      },
      {
        alpha_roster_id: 38,
        go_by: "Patience",
        favorite_movie:
          "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        hobbies: "Crocheting",
        achievements: "Gallant Unit Citation",
        spouse_name: "",
        children_num: 1,
        children_names: "Annis",
        personal_img:
          "https://images.generated.photos/8cp7GLPmNrVHg8PKeEyldFNxad0o-I74HT0npd3lPl8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDQ2NTM0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I survived SDI",
      },
      {
        alpha_roster_id: 39,
        go_by: "Iron",
        favorite_movie: "The Third Man",
        hobbies: "Chainsaw carving",
        achievements: "Presidential Unit Citation",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/27Ok-CUUSqHWCR-qPA-XcG1n3dtZwtkYhAHEaHeV720/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mzc1NDg3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I sat through a Star Wars movie marathon",
      },
      {
        alpha_roster_id: 40,
        go_by: "Mustang",
        favorite_movie: "Citizen Kane",
        hobbies: "Visit all US National Parks",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/kZrA1QicQlUNWn-ApvhSYbYw5MpSeFyjpiOgGSsOWMM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzM2Mzc5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I can crush an aluminum hand on my head",
      },
      {
        alpha_roster_id: 41,
        go_by: "Friend",
        favorite_movie: "Ghostbusters",
        hobbies: "Vintage electronics, Sports memorabilia collecting",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "",
        children_num: 3,
        children_names: "Marwin, Dyna, Guthrey",
        personal_img:
          "https://images.generated.photos/AZH6EFrFjXwF8jEZYdlY2VXZYQmQgSxk1I8Xq4WKypM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTYyMzAyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I go to Halloween Horror Nights every year",
      },
      {
        alpha_roster_id: 42,
        go_by: "Rhythm",
        favorite_movie: "Rash\u00f4mon",
        hobbies: "Vinyl record collecting",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "Cyrill",
        children_num: 3,
        children_names: "Evanne, Hermann, Kippy",
        personal_img:
          "https://images.generated.photos/0D8Yqj7iV6CzOqoYCeC8t80D_lvnfKe2UCcgzwReolQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDA1OTM2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I won a hot dog eating contest at a county fair",
      },
      {
        alpha_roster_id: 43,
        go_by: "Single",
        favorite_movie: "The Princess Bride",
        hobbies: "Vintage photo collecting",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "Starr",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/dO1nHbqHbheyyloVvlgFQNSxj7vnzsgwPu2fDQeJbTo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU3NjAyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I've travelled to Europe 12 times",
      },
      {
        alpha_roster_id: 44,
        go_by: "Bones",
        favorite_movie: "The Lord of the Rings: The Fellowship of the Ring",
        hobbies: "Origami",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "Constancia",
        children_num: 2,
        children_names: "Kelci, Gardner",
        personal_img:
          "https://images.generated.photos/BZESCjUTFUOWpvCcqWOOU2sGtmu8iLzUXxQq5dgVQBM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE4NjMyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I memorized all of Robert Frost's poetry",
      },
      {
        alpha_roster_id: 45,
        go_by: "Casper",
        favorite_movie: "Blade Runner",
        hobbies: "Salsa dancing, Paintball, Leather tooling",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/hrRKXcJpGKXL6Ihjd38AVh3ntXQEKM1voREAeY-95ZA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjQ4OTg0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I read 200 books a year",
      },
      {
        alpha_roster_id: 46,
        go_by: "Fanboy",
        favorite_movie: "Terminator 2: Judgment Day",
        hobbies: "Kickboxing, Investing",
        achievements: "Combat Readiness Medal",
        spouse_name: "Lina",
        children_num: 1,
        children_names: "Angela",
        personal_img:
          "https://images.generated.photos/TqrvpluWUiT-aeoGoKM7jjSLZcMolGPkRYKOBYoMM5Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTQwNDczLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I played bass in a metal band during college",
      },
      {
        alpha_roster_id: 47,
        go_by: "Arc",
        favorite_movie: "Taxi Driver",
        hobbies: "Chocolate making",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Dorise",
        personal_img:
          "https://images.generated.photos/OsvcmEqc1686_2Ys0ynKCC6Y-HG-2TY9CYpiaeA7L9M/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjgwMzcwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I placed third a state swimming championship",
      },
      {
        alpha_roster_id: 48,
        go_by: "Hellhound",
        favorite_movie: "The Usual Suspects",
        hobbies: "Paintball",
        achievements: "Aerial Achievement Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Dulce",
        personal_img:
          "https://images.generated.photos/AEEkW6xLNRD6VY0kECBIvRBHpKalGLfwn0yzXR1wAG0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzU3NzM3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I restore classic Harley Davidson motorcycles",
      },
      {
        alpha_roster_id: 49,
        go_by: "Lizard",
        favorite_movie: "Psycho",
        hobbies: "Cake decorating",
        achievements: "Airman's Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/7Di0Jw34vxDBQt5C-YoT1J5HahFD8F2FYJB8EM1SYhU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzA3MDQxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can do a backflip",
      },
      {
        alpha_roster_id: 50,
        go_by: "Justice",
        favorite_movie: "Aliens",
        hobbies: "Bullion collecting",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "",
        children_num: 2,
        children_names: "Pepita, Cinda",
        personal_img:
          "https://images.generated.photos/zqFkP87UfTGye_grthVlROlmXYk6OnsHCDns5pzJ1qM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTQ4OTE4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I have perfect pitch",
      },
      {
        alpha_roster_id: 51,
        go_by: "Blanks",
        favorite_movie: "Paths of Glory",
        hobbies: "Spelunking",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "Mechelle",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/rVTl5i6KadQj0OO1_M110Jw51G_x8GhkaYtMkoEpS4c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDk3NTQ1LmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can stand on my head",
      },
      {
        alpha_roster_id: 52,
        go_by: "Bouncer",
        favorite_movie: "12 Angry Men",
        hobbies: "Needlepoint, Learn to be a mime, Lapidary",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/pqa5P-52NoPHizeygtw4rkA4rzAtEsbW5btX7Y6KJ-A/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzUxODM3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I can burp the alphabet",
      },
      {
        alpha_roster_id: 53,
        go_by: "Midnight",
        favorite_movie: "The Lord of the Rings: The Return of the King",
        hobbies: "Tennis",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "Janith",
        children_num: 1,
        children_names: "Laraine",
        personal_img:
          "https://images.generated.photos/gfGucz_nmy9QWxFhUO4LrfHNp4nBtCl-Xl8q2sHSn54/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDUwMzQ2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can guess people's weight",
      },
      {
        alpha_roster_id: 54,
        go_by: "Ghost",
        favorite_movie: "The Wages of Fear",
        hobbies: "Beach volleyball",
        achievements: "Meritorious Unit Award",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/SBCIpBiPiCebaO81Sio3qWbYbh2lnlIqD0osSbvbiQw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTgwMTM3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I know when a pot of water is about to boil",
      },
      {
        alpha_roster_id: 55,
        go_by: "Fowl",
        favorite_movie: "Saving Private Ryan",
        hobbies: "Cemetery/Tombstone cleaning",
        achievements: "Gallant Unit Citation",
        spouse_name: "Cicily",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/7tryn6bnhDYEPfChGI7rSw0CmYBi5mtNPDa4shbIBKQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkwNTUyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I can open a beer can with my teeth",
      },
      {
        alpha_roster_id: 56,
        go_by: "Iceman",
        favorite_movie: "The Passion of Joan of Arc",
        hobbies: "Civil War history and site visits",
        achievements: "Presidential Unit Citation",
        spouse_name: "",
        children_num: 3,
        children_names: "Thadeus, Gregoire, Jens",
        personal_img:
          "https://images.generated.photos/yToWu0H4hq1c74ZBzDu3tojZKG4tRFFSOnb5DZaItMU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUzOTY0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I found $20 on the ground once",
      },
      {
        alpha_roster_id: 57,
        go_by: "Condor",
        favorite_movie: "Schindler's List",
        hobbies: "Learn a new language",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "Val",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/JV1qJi2EPL940uVjaR-XI_eRaGCKVaIVJG0pS0A1UF8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTM5NzE2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I've been to all 50 US states",
      },
      {
        alpha_roster_id: 58,
        go_by: "Bullfrog",
        favorite_movie: "Apocalypse Now",
        hobbies: "Rugby, Doll making",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "Janela",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/yntUIGEy4sL1Jfc-J3DjJAQTpswHoqxXzc904KV1Hf0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzczMjI3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I have  a collection of buttons",
      },
      {
        alpha_roster_id: 59,
        go_by: "Giggles",
        favorite_movie: "Jurassic Park",
        hobbies: "Gnoming",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "",
        children_num: 1,
        children_names: "Ulrikaumeko",
        personal_img:
          "https://images.generated.photos/wxR8y25d8HD7syD5fUqL7a7HSHok9j6dxHGlFeCTwS0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mzk1NTk3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I am a professional card player",
      },
      {
        alpha_roster_id: 60,
        go_by: "Bullseye",
        favorite_movie: "Persona",
        hobbies: "Sea glass collecting",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "",
        children_num: 2,
        children_names: "Barnabas, Gun",
        personal_img:
          "https://images.generated.photos/XC-MPvAM-_lK4XblceOrLyAbdiynsgY1ZFlQGlbw6WQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDM3NTYwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I am a black belt in Judo",
      },
      {
        alpha_roster_id: 61,
        go_by: "Breaker",
        favorite_movie: "Vertigo",
        hobbies: "Urban spelunking",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "Stillman",
        children_num: 1,
        children_names: "Carolyne",
        personal_img:
          "https://images.generated.photos/l4pznwh62QGnFYYfumfJoMksJmxeYhaAdq0k31QpNIc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDQ0NDg4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I play 7 instruments",
      },
      {
        alpha_roster_id: 62,
        go_by: "Bull",
        favorite_movie: "The Red Shoes",
        hobbies: "Skydiving",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Liz",
        personal_img:
          "https://images.generated.photos/UCmim7qjVpKzWtSkzf6TjD575w792nPZdvNeiXm0X9M/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDQ1NTUxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I ran into Joe Pesci at the Atlanta airport",
      },
      {
        alpha_roster_id: 63,
        go_by: "Goose",
        favorite_movie: "Touch of Evil",
        hobbies: "Aquaponics",
        achievements: "Combat Readiness Medal",
        spouse_name: "Kay",
        children_num: 1,
        children_names: "Lissi",
        personal_img:
          "https://images.generated.photos/Uy3WxELpOljoR7oKA27bEBAdoSLa_3uGNEGvAcjv3Mo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDUyMDIyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I can whistle all of Beethoven's symphonies",
      },
      {
        alpha_roster_id: 64,
        go_by: "Chip",
        favorite_movie: "Chinatown",
        hobbies: "Polo, Amateur radio (HAM)",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/Z6sWhK5z1m5OA7xSH_4ucgrRHzkVmEOn6OlHRBWT7cY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjQ3MzA3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I memorized 534 digits of Pi",
      },
      {
        alpha_roster_id: 65,
        go_by: "Error",
        favorite_movie: "Le samoura\u00ef",
        hobbies: "Cruising",
        achievements: "Aerial Achievement Medal",
        spouse_name: "Nissy",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/YcvT1k-vPfJ72NtzHK7UuRAmdCHvveGoyLg4r3xnwTw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODEzMzYzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can recite the Star Spangled Banner backwards",
      },
      {
        alpha_roster_id: 66,
        go_by: "Ace",
        favorite_movie: "Jaws",
        hobbies: "Crocheting",
        achievements: "Airman's Medal",
        spouse_name: "Babbette",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/yIsUxD3g92IeVKt9KWOFwSSxrIGWZnZY48se6evwusI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDI0Mzk1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can shoot a three point shot backwards",
      },
      {
        alpha_roster_id: 67,
        go_by: "Piggy",
        favorite_movie: "Forrest Gump",
        hobbies: "Chainsaw carving",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "Alfi",
        children_num: 2,
        children_names: "Avril, Bobinette",
        personal_img:
          "https://images.generated.photos/GHiLndF6aksdfNjta1-ft1F2Za8UWa666-g19GsrB8w/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDUxMDExLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I am a third cousin of Ryan Gosling",
      },
      {
        alpha_roster_id: 68,
        go_by: "Rumor",
        favorite_movie: "A Clockwork Orange",
        hobbies: "Model Rockets, Embroidery",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/ZZK1YrKXK7MgUnN2GhzZEQUBjhuQLspCCRz7qwWnxKc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDk2ODg4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I saw the Barbie movie 14 times",
      },
      {
        alpha_roster_id: 69,
        go_by: "Champ",
        favorite_movie: "Bicycle Thieves",
        hobbies: "Furniture building",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "Minnie",
        children_num: 2,
        children_names: "Bea, Ophelie",
        personal_img:
          "https://images.generated.photos/p1Z4ocwsamIOhPa0K__7P51ejyzqJlAKS3Tx5xCcqB8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzA5NjkzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I run a D&D campaign with my friends",
      },
      {
        alpha_roster_id: 70,
        go_by: "Great Ape",
        favorite_movie: "Toy Story",
        hobbies: "Vinyl record collecting",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "Nicki",
        children_num: 3,
        children_names: "Ronald, Fanchon, Petrina",
        personal_img:
          "https://images.generated.photos/E2XiGy5Hgz1K45nHx2iTLYJOnYMk-0aPzLE8_bOC88M/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDg0ODkxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I built my own computer",
      },
      {
        alpha_roster_id: 71,
        go_by: "Bookworm",
        favorite_movie: "Ferris Bueller's Day Off",
        hobbies: "Vintage photo collecting",
        achievements: "Meritorious Unit Award",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/46fakUOiUdrYep1CXT4a-pX-u8wWNpIxJltRtvjKAZU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDU2MzE3LmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I brew my own beer",
      },
      {
        alpha_roster_id: 72,
        go_by: "Magnet",
        favorite_movie: "The Big Lebowski",
        hobbies: "Kite Flying, Storm chasing, Miniature furniture",
        achievements: "Gallant Unit Citation",
        spouse_name: "Kass",
        children_num: 1,
        children_names: "Gerrard",
        personal_img:
          "https://images.generated.photos/BC9nFLN_fRq_0rWwHjnDgzABBym6ooLq4WQKpjfLIPs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mzc1MTY0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can solve a Rubiks Cube in 40 seconds",
      },
      {
        alpha_roster_id: 73,
        go_by: "Delight",
        favorite_movie: "Memento",
        hobbies: "Archery",
        achievements: "Presidential Unit Citation",
        spouse_name: "Clio",
        children_num: 3,
        children_names: "Paulie, Anatol, Sandy",
        personal_img:
          "https://images.generated.photos/AqIjTcAbyK8Ss_BArQWsoxlhhEcPXbEMrfZ2NjaxKB4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTg0Njg1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I can speed run Mario Brothers in 30 seconds",
      },
      {
        alpha_roster_id: 74,
        go_by: "Hound",
        favorite_movie: "The General",
        hobbies: "Hunting, Visit all 50 states",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "",
        children_num: 2,
        children_names: "Frants, Sam",
        personal_img:
          "https://images.generated.photos/1XBuv3VEyKarvQMAyuQMMSJf2R84Kkpwo_JE1fbiGuc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzY1NDE0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I am a globally ranked Star Craft player",
      },
      {
        alpha_roster_id: 75,
        go_by: "Flash",
        favorite_movie: "The Treasure of the Sierra Madre",
        hobbies: "Chocolate making",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "",
        children_num: 1,
        children_names: "Gunar",
        personal_img:
          "https://images.generated.photos/-a15tDvKAqdZJQYdFnwmpB5YS4h_e_vQuWCu3a6XINU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYxNTY2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact:
          "I performed in my high school's performance of Hamlet",
      },
      {
        alpha_roster_id: 76,
        go_by: "Maverick",
        favorite_movie: "The Lord of the Rings: The Two Towers",
        hobbies: "Paintball",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "Anselma",
        children_num: 2,
        children_names: "Remy, Eldredge",
        personal_img:
          "https://images.generated.photos/gS6khO-x2hA5wKuej2sxDdvyku0o4vZBuEVEnNpBGpA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAxMDk4LmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I am a classically trained harpist",
      },
      {
        alpha_roster_id: 77,
        go_by: "Collar",
        favorite_movie: "Full Metal Jacket",
        hobbies: "Cake decorating",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "Garner",
        children_num: 1,
        children_names: "Jordon",
        personal_img:
          "https://images.generated.photos/WtQU_MAwRese0wplpk9pQdgIvPG3ReEEl0as5XUtvAs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzg1NjYzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I know 6 programming languages",
      },
      {
        alpha_roster_id: 78,
        go_by: "Rabbit",
        favorite_movie: "Tokyo Story",
        hobbies: "First edition book collecting, Archery, Pub trivia",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/_bRTxIA69KaVDE308C2jRmE8ca38F6R_VpuL4AQwtBE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTQ4NDcyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I spend my 24th birthday in Paris",
      },
      {
        alpha_roster_id: 79,
        go_by: "Teacher",
        favorite_movie: "The Terminator",
        hobbies: "Spelunking",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Johan",
        personal_img:
          "https://images.generated.photos/7pPfhXoyGXqKqTD8tbOA0pHgFmpa-5w5lz36EQrWXQU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzI5MjA0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I've been to Disney World 26 times",
      },
      {
        alpha_roster_id: 80,
        go_by: "Bingo",
        favorite_movie: "Come and See",
        hobbies: "Civil War history and site visits, Cake decorating",
        achievements: "Combat Readiness Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/bwkro8r68rILWOa9Jyw5whMYsni3nImELxdExonN3xA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTQ1ODQ1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I've been to 40 Phish concerts",
      },
      {
        alpha_roster_id: 81,
        go_by: "Earthquake",
        favorite_movie: "Fargo",
        hobbies: "Tennis",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "",
        children_num: 3,
        children_names: "Brnaby, Dion, Timmy",
        personal_img:
          "https://images.generated.photos/QwEONqldmQisO8-EulQnmAx0bPzbI1h6SjtCMDH2hhU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTUzMzkzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I played drums in a punk band during high school",
      },
      {
        alpha_roster_id: 82,
        go_by: "Gopher",
        favorite_movie: "The 400 Blows",
        hobbies: "Crocheting, Canoeing, Home brewing",
        achievements: "Aerial Achievement Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/YdpfQ-Tu176Nymb7sxA3DxN0EpcuKM_ktcYjcW5XzLM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mzg3NTkxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I'm fluent 9 different languages",
      },
      {
        alpha_roster_id: 83,
        go_by: "Riddle",
        favorite_movie: "It Happened One Night",
        hobbies: "Cemetery/Tombstone cleaning",
        achievements: "Airman's Medal",
        spouse_name: "",
        children_num: 2,
        children_names: "Ysabel, Cammy",
        personal_img:
          "https://images.generated.photos/2l2BYQSOR-gJ62LsSQrS8n_jsvMeo34YeQoEavYKLSw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODExNzg1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I have a collection of top hats",
      },
      {
        alpha_roster_id: 84,
        go_by: "Flex",
        favorite_movie: "Notorious",
        hobbies: "Civil War history and site visits",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "Hamilton",
        children_num: 1,
        children_names: "Delphine",
        personal_img:
          "https://images.generated.photos/OISbW6TJTsZvEpy1MsqO7yxZVB-u_kFKTuZhwLpMhTw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjczODc0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can do 40 pull ups",
      },
      {
        alpha_roster_id: 85,
        go_by: "Dizzy",
        favorite_movie: "Wild Strawberries",
        hobbies: "Learn a new language",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "Ximenes",
        children_num: 1,
        children_names: "Claudianus",
        personal_img:
          "https://images.generated.photos/dAKRT6Lb3XaiY_pGWjFx60qMlaoQAUvJTeLLEnqwMzQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzg5OTY4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I am a black belt in Tae Kwon Do",
      },
      {
        alpha_roster_id: 86,
        go_by: "Chum",
        favorite_movie: "Inception",
        hobbies: "Needlepoint",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/waFxEVUZXMpofg-6LVADqWMPay49_9PBgYuLROj09tc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDY3MzAwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I saw Tom Cruse at a Dodgers game",
      },
      {
        alpha_roster_id: 87,
        go_by: "Doodle",
        favorite_movie: "Sunset Blvd.",
        hobbies: "Gnoming",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "",
        children_num: 3,
        children_names: "Billye, Bobbette, Hermia",
        personal_img:
          "https://images.generated.photos/RJCF7ke2G2QK38X3bEO0-ISQdPzlDUV2ZanzOyfp4U8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTM3NzI2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I can balance a broom on my nose",
      },
      {
        alpha_roster_id: 88,
        go_by: "Chimp",
        favorite_movie: "The Seventh Seal",
        hobbies: "Baton twirling, Jigsaw puzzles, Candle making",
        achievements: "Meritorious Unit Award",
        spouse_name: "Ikey",
        children_num: 2,
        children_names: "Fletch, Cecilia",
        personal_img:
          "https://images.generated.photos/D5AjJONjcgfWvls64K1Be2jS2evEgOXCmb3G57KRCwM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTg0MDA0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I survived SDI",
      },
      {
        alpha_roster_id: 89,
        go_by: "Cypher",
        favorite_movie: "Ace in the Hole",
        hobbies: "Arrowhead collecting, Magazine Collecting",
        achievements: "Gallant Unit Citation",
        spouse_name: "",
        children_num: 2,
        children_names: "Ilaire, Rycca",
        personal_img:
          "https://images.generated.photos/fxA4-gDWQXMN7cp5j9gWDeUoi-VglrWwFQBXfCe3Fhg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzUyOTA1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I sat through a Star Wars movie marathon",
      },
      {
        alpha_roster_id: 90,
        go_by: "Cannibal",
        favorite_movie: "Modern Times",
        hobbies: "Skydiving",
        achievements: "Presidential Unit Citation",
        spouse_name: "",
        children_num: 1,
        children_names: "Gilles",
        personal_img:
          "https://images.generated.photos/4wWAu7kqZ1e1ovRJWlOB0v1VkLC2lzZBSa49zMui_uA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODAyNDUzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can crush an aluminum hand on my head",
      },
      {
        alpha_roster_id: 91,
        go_by: "Vulture",
        favorite_movie: "2001: A Space Odyssey",
        hobbies: "Boating, Kayaking, Go-Kart racing",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "Gae",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/6L53rLFNrtP_sc0W5vHoac_5SkZ_aOWVVISfKXP-Zlc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDAyMzc1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I go to Halloween Horror Nights every year",
      },
      {
        alpha_roster_id: 92,
        go_by: "Cosmo",
        favorite_movie: "Strangers on a Train",
        hobbies: "Sailing",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "Tommi",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/xWVkVTr1dgNoTqEyIrS-wUtkcVlqCXUKITpfNF2sK3A/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE5OTUxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I won a hot dog eating contest at a county fair",
      },
      {
        alpha_roster_id: 93,
        go_by: "Viper",
        favorite_movie: "Grand Illusion",
        hobbies: "Cruising",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "Alden",
        children_num: 2,
        children_names: "Merrielle, Olly",
        personal_img:
          "https://images.generated.photos/c4bfuu8wbK49v-BTKgkxMyIEQkDVKch1q_DUTUmPsD0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTUzMDc2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I've travelled to Europe 12 times",
      },
      {
        alpha_roster_id: 94,
        go_by: "Boomer",
        favorite_movie: "The Departed",
        hobbies: "Fishing, VHS collecting, Beekeeping",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/wkNlFOfxRgJG1YF7NTCsSh12pk7WyDvN5U3BJJywvfY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzU3MTI2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I memorized all of Robert Frost's poetry",
      },
      {
        alpha_roster_id: 95,
        go_by: "Dash",
        favorite_movie: "The Professional",
        hobbies: "Chainsaw carving",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/BEJ6IaiJs0Rri4uRAeCSLoLCq-50WMLlBi3Uj48c_Os/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTA1ODAyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I read 200 books a year",
      },
      {
        alpha_roster_id: 96,
        go_by: "Mountain",
        favorite_movie: "On the Waterfront",
        hobbies: "Visit all US National Parks",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/QU_1VRYFxkP0nAoXNImoSh7quDzd5kIkOrG0oBZ8Fe4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDY1OTI3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I played bass in a metal band during college",
      },
      {
        alpha_roster_id: 97,
        go_by: "Alien",
        favorite_movie: "Batman Begins",
        hobbies: "Furniture building",
        achievements: "Combat Readiness Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/NxRQI52iUEFswFkRHUwcB4hF9muEz9HUPxx4qi69ZMo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjUzNDE2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I placed third a state swimming championship",
      },
      {
        alpha_roster_id: 98,
        go_by: "Nobody",
        favorite_movie: "Rocky",
        hobbies: "Letterboxing, Whale watching",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "Ailene",
        children_num: 2,
        children_names: "Renard, Coreen",
        personal_img:
          "https://images.generated.photos/2a_anF5aUe1k07Rz7YH1AqZ2sly6NuwHx5TTbUOYJ6k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTc4MDgyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I restore classic Harley Davidson motorcycles",
      },
      {
        alpha_roster_id: 99,
        go_by: "Phoenix",
        favorite_movie: "8\u00bd",
        hobbies: "Vintage photo collecting",
        achievements: "Aerial Achievement Medal",
        spouse_name: "Celestyna",
        children_num: 3,
        children_names: "Erastus, Nata, Kenyon",
        personal_img:
          "https://images.generated.photos/ebLRiIa1_wnvUTOSSPCJCfwX5yHjZcOFvVekjP6mVmA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTU1ODc5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can do a backflip",
      },
      {
        alpha_roster_id: 100,
        go_by: "Clover",
        favorite_movie: "Network",
        hobbies: "Baseball card collecting, Kayaking",
        achievements: "Airman's Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Babbette",
        personal_img:
          "https://images.generated.photos/7JCSGhXYVE6aWSraruUXaWvJxm-nk3kZvq70lB6MbdY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjI1NzIyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I have perfect pitch",
      },
      {
        alpha_roster_id: 101,
        go_by: "Angel",
        favorite_movie: "Stalker",
        hobbies: "Archery",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Ronni",
        personal_img:
          "https://images.generated.photos/96iv0mklpSJOpM7i-mDrF0fQQ5IgwP78QYbj8AJlBbk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTgwNDY4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can stand on my head",
      },
      {
        alpha_roster_id: 102,
        go_by: "Roach",
        favorite_movie: "Indiana Jones and the Temple of Doom",
        hobbies: "Ventriloquism",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/YSnEClHNut36Zp36rOY2Vi1HJhM7ruweL9YCeWuMqnE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDM1NjQ2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I can burp the alphabet",
      },
      {
        alpha_roster_id: 103,
        go_by: "Secret",
        favorite_movie: "The Philadelphia Story",
        hobbies: "Chocolate making",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/8jjILaPjHe5H5GCSDG3s6DtV57B12upa5dcu3PtpMW8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjUxNjQxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can guess people's weight",
      },
      {
        alpha_roster_id: 104,
        go_by: "Feather",
        favorite_movie: "In a Lonely Place",
        hobbies: "Paintball",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "",
        children_num: 1,
        children_names: "Marsha",
        personal_img:
          "https://images.generated.photos/PFydRYjWg5ZA8LYMZs6U5F6bCyYgCEYwoLYA1Q0k-cU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTQ0MDg1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I know when a pot of water is about to boil",
      },
      {
        alpha_roster_id: 105,
        go_by: "Scratch",
        favorite_movie: "The Conversation",
        hobbies: "Feng shui, Metal working",
        achievements: "Meritorious Unit Award",
        spouse_name: "",
        children_num: 1,
        children_names: "Efren",
        personal_img:
          "https://images.generated.photos/1D1tfukbMKulLCeHmcwj7D6cdXMSHX4ZFI1GeRFg2kA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjQyOTk2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can open a beer can with my teeth",
      },
      {
        alpha_roster_id: 106,
        go_by: "Cinder",
        favorite_movie: "Sweet Smell of Success",
        hobbies: "Bullion collecting",
        achievements: "Gallant Unit Citation",
        spouse_name: "",
        children_num: 3,
        children_names: "Dulcie, Dione, Gilbert",
        personal_img:
          "https://images.generated.photos/wneH9v2jajla5Wz63CofCIQQkOi8FeLOzuVvStIM9mI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzkzMjcxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I found $20 on the ground once",
      },
      {
        alpha_roster_id: 107,
        go_by: "Bubbles",
        favorite_movie: "Throne of Blood",
        hobbies: "Bird watching, Butterfly watching, Weight Lifting",
        achievements: "Presidential Unit Citation",
        spouse_name: "",
        children_num: 2,
        children_names: "Marcy, Philly",
        personal_img:
          "https://images.generated.photos/4x5e0Yt5g1NLKt6NZfrnxxpFf33aYtVcRM541WNZfbA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTI5MjI4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I've been to all 50 US states",
      },
      {
        alpha_roster_id: 108,
        go_by: "Butcher",
        favorite_movie: "Inglourious Basterds",
        hobbies: "Lapidary",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "",
        children_num: 1,
        children_names: "Min",
        personal_img:
          "https://images.generated.photos/p6k1K4ycji1PJF1T6jEnBhgeyJpy2XC7Z65lWNk0v_U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjY5MTM5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I have  a collection of buttons",
      },
      {
        alpha_roster_id: 109,
        go_by: "Bison",
        favorite_movie: "Cool Hand Luke",
        hobbies: "Adult kickball, Puppetry",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "Saloma",
        children_num: 2,
        children_names: "Germain, Enrichetta",
        personal_img:
          "https://images.generated.photos/PMRN1S97K6PZ4JLx7u3Iayv4EpxpncQW_GXmGgPV1pQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODU2NjYyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I am a professional card player",
      },
      {
        alpha_roster_id: 110,
        go_by: "Robin",
        favorite_movie: "The Man Who Shot Liberty Valance",
        hobbies: "Beach volleyball",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "Marlyn",
        children_num: 3,
        children_names: "Julieta, Jennie, Kinny",
        personal_img:
          "https://images.generated.photos/LTYPEJyAIDAgDr-2HKlAsiNJMPo9N_sPrbaVdOAyHxg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODk3NjgxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I am a black belt in Judo",
      },
      {
        alpha_roster_id: 111,
        go_by: "Lightning",
        favorite_movie: "Raging Bull",
        hobbies: "Cemetery/Tombstone cleaning",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "Anselma",
        children_num: 1,
        children_names: "Alvin",
        personal_img:
          "https://images.generated.photos/rcuUHTv7B6OrOU3lHyR7J79rMzrQjK9uSlscCJ7N9u8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njk0NjY4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I play 7 instruments",
      },
      {
        alpha_roster_id: 112,
        go_by: "Darkwing",
        favorite_movie: "The Rules of the Game",
        hobbies: "Civil War history and site visits",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "Lauryn",
        children_num: 4,
        children_names: "Nisse, Doe, Noelani, Valentina",
        personal_img:
          "https://images.generated.photos/C5Mp2D0UbjYYKNioAyshhANNr0I-_HIjN0rdojRf_5o/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzQzODExLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I ran into Joe Pesci at the Atlanta airport",
      },
      {
        alpha_roster_id: 113,
        go_by: "Cougar",
        favorite_movie: "All About Eve",
        hobbies: "Learn a new language",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "Matt",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/hD7hD0gd4CLaIKZ0O5YnzRFX8xK6iZiq6AyGPG39rnQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQ1MzY1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I can whistle all of Beethoven's symphonies",
      },
      {
        alpha_roster_id: 114,
        go_by: "Bugsie",
        favorite_movie: "Shadow of a Doubt",
        hobbies: "Needlepoint",
        achievements: "Combat Readiness Medal",
        spouse_name: "",
        children_num: 3,
        children_names: "Brent, Onofredo, Theresa",
        personal_img:
          "https://images.generated.photos/BHhyzkNkHXJ8hTag3yIy7SYqooImwckDsC-t1Yn0UEA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjU1NzUyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I memorized 534 digits of Pi",
      },
      {
        alpha_roster_id: 115,
        go_by: "Ladybug",
        favorite_movie: "Groundhog Day",
        hobbies: "Gnoming",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Trumaine",
        personal_img:
          "https://images.generated.photos/if6Z7xmpBXO4oVe6MJmRA6zy95N6muv9aqJ17FERUQA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODg1NTc4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I can recite the Star Spangled Banner backwards",
      },
      {
        alpha_roster_id: 116,
        go_by: "Bugs",
        favorite_movie: "A Matter of Life and Death",
        hobbies: "Sea glass collecting",
        achievements: "Aerial Achievement Medal",
        spouse_name: "",
        children_num: 2,
        children_names: "Nichols, Mart",
        personal_img:
          "https://images.generated.photos/eCjzLc_kPyLM5Imc8T7g9K9pYeLJ1zU269dyEzQx4Mo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDEwNTA1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can shoot a three point shot backwards",
      },
      {
        alpha_roster_id: 117,
        go_by: "Stray",
        favorite_movie: "His Girl Friday",
        hobbies: "Learn magic, Learn a new instrument, Mountain climbing",
        achievements: "Airman's Medal",
        spouse_name: "",
        children_num: 3,
        children_names: "Jada, Feodora, Caddric",
        personal_img:
          "https://images.generated.photos/F-MJyUZwAQhA2hsmXIdlqC_eCx_Cqpfvktq1eqIbaSE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM5MDQwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I am a third cousin of Ryan Gosling",
      },
      {
        alpha_roster_id: 118,
        go_by: "Zebra",
        favorite_movie: "The Gold Rush",
        hobbies: "Skydiving",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Cornelia",
        personal_img:
          "https://images.generated.photos/dEwZfGfi3zgOV6LJCAYg2J4soSqkcfS6h_Y7iorEv84/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODM3OTY5LmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I saw the Barbie movie 14 times",
      },
      {
        alpha_roster_id: 119,
        go_by: "Wyvern",
        favorite_movie: "Badlands",
        hobbies: "Antiquing, Vinyl record collecting",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "",
        children_num: 5,
        children_names: "Hetti, Cody, Albrecht, Donn, Rorke",
        personal_img:
          "https://images.generated.photos/s6WrpETKv-OYJmKWzDS14AFr9DpwV-GdU9C7bFXIdmw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjA5Mzc2LmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I run a D&D campaign with my friends",
      },
      {
        alpha_roster_id: 120,
        go_by: "Turtle",
        favorite_movie: "La Dolce Vita",
        hobbies: "Sailing",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "",
        children_num: 1,
        children_names: "Danya",
        personal_img:
          "https://images.generated.photos/AmReL5LlgswVCD8M-dMHVwpXy2KEUjCcV12TVjbCdqY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg1MjA1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I built my own computer",
      },
      {
        alpha_roster_id: 121,
        go_by: "Mystery",
        favorite_movie: "Good Will Hunting",
        hobbies: "Battle reenactments, Art collecting",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "",
        children_num: 2,
        children_names: "Netti, Dredi",
        personal_img:
          "https://images.generated.photos/mNYwf1UkQj2Dcvv5O_ZS8AOov0ta44mYRaY4qeCKMO8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjM3NTAxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I brew my own beer",
      },
      {
        alpha_roster_id: 122,
        go_by: "Elf",
        favorite_movie: "Aguirre: The Wrath of God",
        hobbies: "Crocheting",
        achievements: "Meritorious Unit Award",
        spouse_name: "Gino",
        children_num: 3,
        children_names: "Kameko, Madel, Cloe",
        personal_img:
          "https://images.generated.photos/JfoQFXaUiJ7qL-MVBBP6RMyFGmyWSBuDwa9cZQ_zVBc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTg1NzY4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I can solve a Rubiks Cube in 40 seconds",
      },
      {
        alpha_roster_id: 123,
        go_by: "Alligator",
        favorite_movie: "The Maltese Falcon",
        hobbies: "Chainsaw carving",
        achievements: "Gallant Unit Citation",
        spouse_name: "",
        children_num: 1,
        children_names: "Hali",
        personal_img:
          "https://images.generated.photos/DiPnajBR-zCrfc4MZncqdXv-dC4N_5hxDtIKyAgmsWo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjkyNTAzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I can speed run Mario Brothers in 30 seconds",
      },
      {
        alpha_roster_id: 124,
        go_by: "Heretic",
        favorite_movie: "The Big Sleep",
        hobbies: "Visit all US National Parks",
        achievements: "Presidential Unit Citation",
        spouse_name: "Cherlyn",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/5g8WT2ZmLDfBMRQbtNt7uRG0FJ3UY9NFB1fFVUxYR08/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQ2NzQ4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I am a globally ranked Star Craft player",
      },
      {
        alpha_roster_id: 125,
        go_by: "Hangman",
        favorite_movie: "Out of the Past",
        hobbies: "Furniture building",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "",
        children_num: 2,
        children_names: "Imogen, Verena",
        personal_img:
          "https://images.generated.photos/BAfX1ssWGYpworcz-jZnxQ8wHvKDHmY-1D9JwlNzqog/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTMxMDkxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact:
          "I performed in my high school's performance of Hamlet",
      },
      {
        alpha_roster_id: 126,
        go_by: "Dog",
        favorite_movie: "The Great Dictator",
        hobbies: "Vinyl record collecting",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "",
        children_num: 3,
        children_names: "Freddi, Willow, Mora",
        personal_img:
          "https://images.generated.photos/wmfFSKDtQ-ffe4jkNhjXoRAKgNpq5MhCfOecKw2cxPw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTIyODE2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I am a classically trained harpist",
      },
      {
        alpha_roster_id: 127,
        go_by: "Dino",
        favorite_movie: "The Thing",
        hobbies: "Geocaching, Martial arts",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "",
        children_num: 1,
        children_names: "Trixy",
        personal_img:
          "https://images.generated.photos/p7HPqpvkv3bSVctxJzsmH-HmmCXVRoidgtU6ZmVS5sw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDk3MTc2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I know 6 programming languages",
      },
      {
        alpha_roster_id: 128,
        go_by: "Bugsy",
        favorite_movie: "Sherlock Jr.",
        hobbies: "Parkour, Pottery, Furniture restoration",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "Rebecca",
        children_num: 2,
        children_names: "Joy, Willdon",
        personal_img:
          "https://images.generated.photos/U6lKOksmEx8AOplYcvoCqp0uNUIKS0k6tmdxT4RHurY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDAzNjk3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I spend my 24th birthday in Paris",
      },
      {
        alpha_roster_id: 129,
        go_by: "Quill",
        favorite_movie: "Shaun of the Dead",
        hobbies: "Archery",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Nananne",
        personal_img:
          "https://images.generated.photos/5WPI7o-yLJbnHaSbura5OpGoRWitrDmV3MaM9Znmbkk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDI2MTU5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I've been to Disney World 26 times",
      },
      {
        alpha_roster_id: 130,
        go_by: "Coyote",
        favorite_movie: "The Lion King",
        hobbies: "Ventriloquism",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "Meta",
        children_num: 1,
        children_names: "Bordy",
        personal_img:
          "https://images.generated.photos/oAqLSN6Q3zxSLT8w_5NiDQPIdVK4MQSJE-VtPSEMbPQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjIzMzUwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I've been to 40 Phish concerts",
      },
      {
        alpha_roster_id: 131,
        go_by: "Face",
        favorite_movie: "Stand by Me",
        hobbies: "Chocolate making",
        achievements: "Combat Readiness Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Cort",
        personal_img:
          "https://images.generated.photos/4GlGd1Bd2E_aZ7zSR31_X1DQWoy4PU-ddAAlRtTOQjc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDg2OTg1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I played drums in a punk band during high school",
      },
      {
        alpha_roster_id: 132,
        go_by: "Fly",
        favorite_movie: "Kill Bill Vol. 1",
        hobbies: "Paintball",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "Rena",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/Mli1-GqTaL49k0d35sikZmUrpNjYjq8TQt6rY_Y8_LU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTkxNzYwLmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I'm fluent 9 different languages",
      },
      {
        alpha_roster_id: 133,
        go_by: "Quicksand",
        favorite_movie: "Rope",
        hobbies: "Calligraphy, RV Traveling",
        achievements: "Aerial Achievement Medal",
        spouse_name: "Baldwin",
        children_num: 2,
        children_names: "Cirilo, Moreen",
        personal_img:
          "https://images.generated.photos/puTZLYAs1R07YNQpvoI0ruiTiV_7JOJ2MRWbtOa51WA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzMxMjIyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I have a collection of top hats",
      },
      {
        alpha_roster_id: 134,
        go_by: "Biscuit",
        favorite_movie: "Whiplash",
        hobbies: "Bullion collecting",
        achievements: "Airman's Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Thorsten",
        personal_img:
          "https://images.generated.photos/xzxcQHe2BJiUTrnn9CBewWBwQkkfM8gMj64tt1b_ZQA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTgyMTA2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can do 40 pull ups",
      },
      {
        alpha_roster_id: 135,
        go_by: "Silver",
        favorite_movie: "In the Mood for Love",
        hobbies: "Jewelry making, Sea glass collecting, Blacksmithing",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "Alvy",
        children_num: 1,
        children_names: "Boycey",
        personal_img:
          "https://images.generated.photos/-0tVvPQUAV-hsIKqXUZ21KMViH1gyh5ztqynMyIKQAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQxMjQ1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I am a black belt in Tae Kwon Do",
      },
      {
        alpha_roster_id: 136,
        go_by: "Barracuda",
        favorite_movie: "No Country for Old Men",
        hobbies: "Lapidary",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Aluin",
        personal_img:
          "https://images.generated.photos/Ob6IL_4DsowcGhVw66qyR-iLor-4zfxuuUDTylJPB8I/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjgwMTY2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I saw Tom Cruse at a Dodgers game",
      },
      {
        alpha_roster_id: 137,
        go_by: "Boomboom",
        favorite_movie: "Diabolique",
        hobbies: "Squash, Canoeing",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "Myer",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/pgIiZt5tHU3WjPtLnTjGUjbPxTjHD5q3htnOziKX0vw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTMwNDI2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I can balance a broom on my nose",
      },
      {
        alpha_roster_id: 138,
        go_by: "Suit",
        favorite_movie: "Anatomy of a Murder",
        hobbies: "Beach volleyball",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "Ado",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/jE1_Ac2PxdfOCCywP99_0flZlFykfmUIRNWTyvCLPpo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzY3MzYzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I survived SDI",
      },
      {
        alpha_roster_id: 139,
        go_by: "Beaker",
        favorite_movie: "The Thin Man",
        hobbies: "Cemetery/Tombstone cleaning",
        achievements: "Meritorious Unit Award",
        spouse_name: "",
        children_num: 3,
        children_names: "Richart, Carolann, Sebastien",
        personal_img:
          "https://images.generated.photos/jZPDQpDQDasEvHIKylFfErJ8vrKrzhLpSOqIRR7YA1E/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTEwOTQ2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I sat through a Star Wars movie marathon",
      },
      {
        alpha_roster_id: 140,
        go_by: "Drake",
        favorite_movie: "The Searchers",
        hobbies: "Civil War history and site visits",
        achievements: "Gallant Unit Citation",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/bO9St8_2tSPfW63MBVDwRWss-omHE0UEl763X65z-VA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTk0MDQwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can crush an aluminum hand on my head",
      },
      {
        alpha_roster_id: 141,
        go_by: "Fangs",
        favorite_movie: "My Neighbor Totoro",
        hobbies: "Learn a new language",
        achievements: "Presidential Unit Citation",
        spouse_name: "Demetre",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/sm7DZCN77u1Pcylujb7eWN6i2m4icuTePUcTCP0rp_I/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjQ3NjM4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I go to Halloween Horror Nights every year",
      },
      {
        alpha_roster_id: 142,
        go_by: "Booger",
        favorite_movie: "Gladiator",
        hobbies: "Vintage photo collecting, Renaissance fairs",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "Fawnia",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/LYQXdY5SJ9VAcXrFMR5v5H7ilAqluRY3UQdO6shGTTw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTU0OTM2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I won a hot dog eating contest at a county fair",
      },
      {
        alpha_roster_id: 143,
        go_by: "Photon",
        favorite_movie: "Parasite",
        hobbies: "Gnoming",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "Massimiliano",
        children_num: 2,
        children_names: "Nikolaos, Link",
        personal_img:
          "https://images.generated.photos/JXgMlg9EUyuz1TvGcyDJAjWnnVLmeSJQlxZHshjFvnc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQwMTI1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I've travelled to Europe 12 times",
      },
      {
        alpha_roster_id: 144,
        go_by: "Hedgehog",
        favorite_movie: "The Breakfast Club",
        hobbies: "Sea glass collecting",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "",
        children_num: 3,
        children_names: "Homere, Caty, Ashli",
        personal_img:
          "https://images.generated.photos/zVz_MkALK8HV9ayNfq2fpQeK0RMixG9n2n8QoRg4CRM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUxMjgzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I memorized all of Robert Frost's poetry",
      },
      {
        alpha_roster_id: 145,
        go_by: "Melody",
        favorite_movie: "Days of Heaven",
        hobbies: "Urban spelunking",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "",
        children_num: 1,
        children_names: "Lise",
        personal_img:
          "https://images.generated.photos/UYN7iwLpl8zPnio3YvnEK35UI3O61MeCcsmj9-kNaKM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODI5NDU1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I read 200 books a year",
      },
      {
        alpha_roster_id: 146,
        go_by: "Legend",
        favorite_movie: "American History X",
        hobbies: "Skydiving",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "Goran",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/AXXFKOddzlTDsQ5hys0L90uwovPSCW84FRXHK23NR-c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg3MDgwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I played bass in a metal band during college",
      },
      {
        alpha_roster_id: 147,
        go_by: "Dragon",
        favorite_movie: "Eternal Sunshine of the Spotless Mind",
        hobbies: "Aquaponics",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/0szIW1gpNEVq_xkWIHZuqVU4_yyZ5KIwbj5qcWa4Hpk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjY1NjY0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I placed third a state swimming championship",
      },
      {
        alpha_roster_id: 148,
        go_by: "Locket",
        favorite_movie: "Office Space",
        hobbies: "Rock collecting, Horseback Riding",
        achievements: "Combat Readiness Medal",
        spouse_name: "Art",
        children_num: 1,
        children_names: "Colman",
        personal_img:
          "https://images.generated.photos/TpQwU9E5wkTYTPAl82gC8EbXrBjIdT2O0l7reSzVO7c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDIzNTU2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I restore classic Harley Davidson motorcycles",
      },
      {
        alpha_roster_id: 149,
        go_by: "Mojo",
        favorite_movie: "It's a Wonderful Life",
        hobbies: "Animal Husbandry, Lamp making, Furniture building",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/LRPUYDI_ttUFx-jSbUoPm-MQc5SSxhxsWHlI1dmq5Ms/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjQzMzMzLmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I can do a backflip",
      },
      {
        alpha_roster_id: 150,
        go_by: "Serpent",
        favorite_movie: "Memories of Murder",
        hobbies: "Crocheting",
        achievements: "Aerial Achievement Medal",
        spouse_name: "Alfy",
        children_num: 3,
        children_names: "Hansiain, Townie, Cello",
        personal_img:
          "https://images.generated.photos/vxXAVQsRhZPA8lBRYajPEUEOdqKCprLkwDcBGncCDdg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjM1MTE3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I have perfect pitch",
      },
      {
        alpha_roster_id: 151,
        go_by: "Omen",
        favorite_movie: "Sullivan's Travels",
        hobbies: "Chainsaw carving",
        achievements: "Airman's Medal",
        spouse_name: "Lesley",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/B4yHTU8_5hgdBhNY6_smvwpDqf4ESeymlVm2VlUW4Oc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjI2NjI0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I can stand on my head",
      },
      {
        alpha_roster_id: 152,
        go_by: "Whistle",
        favorite_movie: "Fanny and Alexander",
        hobbies: "Gaga ball, Gnoming",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "",
        children_num: 2,
        children_names: "Merry, Dahlia",
        personal_img:
          "https://images.generated.photos/e2LbnNugJd9MKIYiFcnjWuSZhQfeGPsPQzom1BErt4Y/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzExNDI2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can burp the alphabet",
      },
      {
        alpha_roster_id: 153,
        go_by: "Impulse",
        favorite_movie: "Butch Cassidy and the Sundance Kid",
        hobbies: "Sculling, Start a garage band, Comic book collecting",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "",
        children_num: 4,
        children_names: "Talia, Clerkclaude, Etti, Simmonds",
        personal_img:
          "https://images.generated.photos/6Iz2dsuLvteF1tYG8pxghszUA6NnGrT718pglnAw0Xs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mzk4NzE1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can guess people's weight",
      },
      {
        alpha_roster_id: 154,
        go_by: "Delta",
        favorite_movie: "Bringing Up Baby",
        hobbies: "Vinyl record collecting",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "Anestassia",
        children_num: 1,
        children_names: "Kirsteni",
        personal_img:
          "https://images.generated.photos/m6tf63cm6J3Uar5jc7rZNEUmjL-4s9W0k_YMOTBasRM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTg2MjQwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I know when a pot of water is about to boil",
      },
      {
        alpha_roster_id: 155,
        go_by: "Grizzly",
        favorite_movie: "The Wizard of Oz",
        hobbies: "Vintage photo collecting",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "Worthington",
        children_num: 2,
        children_names: "Marlyn, Marris",
        personal_img:
          "https://images.generated.photos/YcrBaaeFQ7EDVmUzQv8yZsrYaI7n2uKAhMPON78vM74/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTQ2MTY4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I can open a beer can with my teeth",
      },
      {
        alpha_roster_id: 156,
        go_by: "Cobra King",
        favorite_movie: "Rio Bravo",
        hobbies: "Origami",
        achievements: "Meritorious Unit Award",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/hBrXtHafZDjbA9pCI6j8t5tDWTCiOTysRN8z7EKVoAQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTU0MTk5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I found $20 on the ground once",
      },
      {
        alpha_roster_id: 157,
        go_by: "Nightingale",
        favorite_movie: "A Fistful of Dollars",
        hobbies: "Base jumping, Jogging",
        achievements: "Gallant Unit Citation",
        spouse_name: "",
        children_num: 3,
        children_names: "Guthrie, Selie, Mel",
        personal_img:
          "https://images.generated.photos/UdqQ061ILS7DRUk9MQG3Eg2PHBBUtESnwx7oPZC9TMI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODg2ODc3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I've been to all 50 US states",
      },
      {
        alpha_roster_id: 158,
        go_by: "Hard Target",
        favorite_movie: "The Killing",
        hobbies: "Ventriloquism",
        achievements: "Presidential Unit Citation",
        spouse_name: "",
        children_num: 1,
        children_names: "Tarah",
        personal_img:
          "https://images.generated.photos/7IZ0IwcGMuzjoInfbQeWwk6pUh6c_VJCHt4o5zIDMJw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjA5NzU0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I have  a collection of buttons",
      },
      {
        alpha_roster_id: 159,
        go_by: "Night Fury",
        favorite_movie: "Rebecca",
        hobbies: "Chocolate making",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/cTrAuF3iiLAUR9eq48AZp6niY29wWLdWzp_K0oLBj9U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYzOTA3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I am a professional card player",
      },
      {
        alpha_roster_id: 160,
        go_by: "Hollywood",
        favorite_movie: "Once Upon a Time in the West",
        hobbies: "Paintball",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/QuWATTk8jbHqYMKyl36NH_0Swzxp-pYxVwC9YLuvoMc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI5MjE3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I am a black belt in Judo",
      },
      {
        alpha_roster_id: 161,
        go_by: "Dragon Slayer",
        favorite_movie: "Unforgiven",
        hobbies: "Cake decorating",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "",
        children_num: 4,
        children_names: "Darya, Emeline, Ashly, Simmonds",
        personal_img:
          "https://images.generated.photos/P5pe8UvtBODVuwaTpLIHhngd0wzY7lcSf-7bHV6h_pM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTY2NTMzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I play 7 instruments",
      },
      {
        alpha_roster_id: 162,
        go_by: "Firestorm",
        favorite_movie: "Rififi",
        hobbies: "Bullion collecting",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "Theresita",
        children_num: 3,
        children_names: "Nada, Carmine, Nickola",
        personal_img:
          "https://images.generated.photos/uDZIAhAUg0zA29DF1b7jpK8-DfmMpw8bRcFqeP5UbVU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzM3MTg0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I ran into Joe Pesci at the Atlanta airport",
      },
      {
        alpha_roster_id: 163,
        go_by: "Foxhound",
        favorite_movie: "Mr. Smith Goes to Washington",
        hobbies: "Book Restoration, Jigsaw puzzles",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/T2f0tUnlSaHMr0h45AkOhfAVbkn7thNTjtF8sAAi5XI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODQ5ODg0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can whistle all of Beethoven's symphonies",
      },
      {
        alpha_roster_id: 164,
        go_by: "Machete",
        favorite_movie: "Laura",
        hobbies: "Community theatre, Knife throwing, Meteorology",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "Marcella",
        children_num: 1,
        children_names: "Nadya",
        personal_img:
          "https://images.generated.photos/h11A7KXgkvqFgeBTP-u8Nw5j3P4az5TNoDTDOYPke1M/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQ3NzkwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I memorized 534 digits of Pi",
      },
      {
        alpha_roster_id: 165,
        go_by: "Banshee",
        favorite_movie: "Annie Hall",
        hobbies: "Tennis",
        achievements: "Combat Readiness Medal",
        spouse_name: "Shir",
        children_num: 2,
        children_names: "Lucienne, Ozzie",
        personal_img:
          "https://images.generated.photos/KwhVmuecselTidOBJVpx9DAYh5dShn-qYmzF5Cfij-0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzU3MzA2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I can recite the Star Spangled Banner backwards",
      },
      {
        alpha_roster_id: 166,
        go_by: "Phoenix Flamekeeper",
        favorite_movie: "Duck Soup",
        hobbies: "Beach volleyball",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Edgar",
        personal_img:
          "https://images.generated.photos/D5j2MpjZWwVf7VE5L72itHHhq7roS7e_fj97H7bEXMk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzk0MjQ1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can shoot a three point shot backwards",
      },
      {
        alpha_roster_id: 167,
        go_by: "Mad Dog",
        favorite_movie: "For a Few Dollars More",
        hobbies: "Cemetery/Tombstone cleaning",
        achievements: "Aerial Achievement Medal",
        spouse_name: "Zebulon",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/f-BmA2K-DEtyy7EULumzLCoBLjhdQZb53JYC-aybML4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTYyMTU4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I am a third cousin of Ryan Gosling",
      },
      {
        alpha_roster_id: 168,
        go_by: "Cyclone",
        favorite_movie: "The Best Years of Our Lives",
        hobbies: "Civil War history and site visits",
        achievements: "Airman's Medal",
        spouse_name: "",
        children_num: 2,
        children_names: "Mei, Ola",
        personal_img:
          "https://images.generated.photos/tCTitgrAl-rnRDMnFpkzpWt6Z9A0__8ia_YcqN1NDZ0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQzNjU4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I saw the Barbie movie 14 times",
      },
      {
        alpha_roster_id: 169,
        go_by: "Sky King",
        favorite_movie: "Ran",
        hobbies: "Learn a new language",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/VV71-42DyW0qxSUE_Y1pPgBWivMpv_j3CV147z9Hl04/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDEyMTc3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I run a D&D campaign with my friends",
      },
      {
        alpha_roster_id: 170,
        go_by: "Grim Reaper",
        favorite_movie: "Stalag 17",
        hobbies: "Needlepoint",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "Dulce",
        children_num: 1,
        children_names: "Reyna",
        personal_img:
          "https://images.generated.photos/iq1cFdhm5hBhq_3EtWwj-Uyr5lr4xUpS7Fs7GO_s4s4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzI3NzAwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I built my own computer",
      },
      {
        alpha_roster_id: 171,
        go_by: "Panthera",
        favorite_movie: "Lawrence of Arabia",
        hobbies: "Juggling, Tarot card reading, Lockpicking",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "",
        children_num: 2,
        children_names: "Matilda, Katheryn",
        personal_img:
          "https://images.generated.photos/AqeWQL5HwHVgutBv9jo8GqY6ukDU3qUybeO3C4FdJT4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTY1Njg3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I brew my own beer",
      },
      {
        alpha_roster_id: 172,
        go_by: "Eclipse of the Heart",
        favorite_movie: "The Sting",
        hobbies: "Reloading (Shells), Quilting",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "",
        children_num: 1,
        children_names: "Eziechiele",
        personal_img:
          "https://images.generated.photos/QSG-716hEPEtXDyDEPhU5jVAtEHuRbziqkaZOX1mPWY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjY4ODMzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can solve a Rubiks Cube in 40 seconds",
      },
      {
        alpha_roster_id: 173,
        go_by: "Chipper",
        favorite_movie: "Brief Encounter",
        hobbies: "Urban spelunking",
        achievements: "Meritorious Unit Award",
        spouse_name: "",
        children_num: 2,
        children_names: "Gennie, Berke",
        personal_img:
          "https://images.generated.photos/USVbhzi1l_80vLq1JhQQFQCz-yqPrgW-nEjL8GNhDYY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDM5NzcwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can speed run Mario Brothers in 30 seconds",
      },
      {
        alpha_roster_id: 174,
        go_by: "Jetfire",
        favorite_movie: "The Kid",
        hobbies: "Skydiving",
        achievements: "Gallant Unit Citation",
        spouse_name: "",
        children_num: 1,
        children_names: "Alene",
        personal_img:
          "https://images.generated.photos/uqnxCB5t1E_2lZr2EGtfjXVCX_GhvdfddqyndYR3peA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTA1ODg3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I am a globally ranked Star Craft player",
      },
      {
        alpha_roster_id: 175,
        go_by: "Phoenix Flame",
        favorite_movie: "All the President's Men",
        hobbies: "Aquaponics",
        achievements: "Presidential Unit Citation",
        spouse_name: "Tye",
        children_num: 2,
        children_names: "Ernesto, Luther",
        personal_img:
          "https://images.generated.photos/pj3Up24iU6jU0nKiT1qhRwhFv5JUPV-SdzGp37D4BzA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQ2OTQxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact:
          "I performed in my high school's performance of Hamlet",
      },
      {
        alpha_roster_id: 176,
        go_by: "Jester",
        favorite_movie: "Iron Man",
        hobbies: "Sailing",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "",
        children_num: 3,
        children_names: "Anderea, Maryrose, Rinaldo",
        personal_img:
          "https://images.generated.photos/5w7-ol_OUhUCI8D7UhQ91ZltegBH-rbX-eaQ1BiuVio/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjA2NzkzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I am a classically trained harpist",
      },
      {
        alpha_roster_id: 177,
        go_by: "Top Ace",
        favorite_movie: "Dog Day Afternoon",
        hobbies: "Leaf collecting, Archery",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/wK9mHNVNV1H6nlcy0N7TJzH-sp8t3oTMKNuIRVgig8o/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQwMzQxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I know 6 programming languages",
      },
      {
        alpha_roster_id: 178,
        go_by: "Sabre Strike",
        favorite_movie: "To Be or Not to Be",
        hobbies: "Genealogy, Archaeology, Metal Detecting",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "",
        children_num: 2,
        children_names: "Arte, Perry",
        personal_img:
          "https://images.generated.photos/iXLvYEKc06Ofy8jcelEBqF5hG-D3oDqsU-ILSok-l78/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM0NzY2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I spend my 24th birthday in Paris",
      },
      {
        alpha_roster_id: 179,
        go_by: "Thunderstruck",
        favorite_movie: "Back to the Future Part II",
        hobbies: "Chainsaw carving",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/DetJRkdbSgtjw25rXUBYS1KuoCsqYZoJEtuhRZT-2yw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTExNjQyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I've been to Disney World 26 times",
      },
      {
        alpha_roster_id: 180,
        go_by: "Merlin",
        favorite_movie: "Paris, Texas",
        hobbies: "Visit all US National Parks",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "Reinaldos",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/FZUi8t-FIRQTi4YHEts85rHfcSKGTa7zof_SIVwer58/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTIzOTQ2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I've been to 40 Phish concerts",
      },
      {
        alpha_roster_id: 181,
        go_by: "Bulletproof Heart",
        favorite_movie: "Witness for the Prosecution",
        hobbies: "Furniture building",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/IlNBnnkmdouqSKRZg1ASDYUtH12DL3XaaXrsnrjnQ5A/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTc1ODc0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I played drums in a punk band during high school",
      },
      {
        alpha_roster_id: 182,
        go_by: "Inferno",
        favorite_movie: "Charade",
        hobbies: "Vinyl record collecting",
        achievements: "Combat Readiness Medal",
        spouse_name: "Lanna",
        children_num: 3,
        children_names: "Malanie, Dieter, Meredithe",
        personal_img:
          "https://images.generated.photos/pExaAymgiUpia8aFzC6p4vnavfLFcXX-dqvuGyBmBRA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDY3MzUyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I'm fluent 9 different languages",
      },
      {
        alpha_roster_id: 183,
        go_by: "Diablo",
        favorite_movie: "The Prestige",
        hobbies: "Vintage photo collecting",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "Andrey",
        children_num: 1,
        children_names: "Camilla",
        personal_img:
          "https://images.generated.photos/eb9HwMMCPx3aMoLzBbhcwDndlvWepi5qRSVzrHZ-BYg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTQ3NTIzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I have a collection of top hats",
      },
      {
        alpha_roster_id: 184,
        go_by: "Savage",
        favorite_movie: "The Graduate",
        hobbies: "Balloon twisting, Billiards",
        achievements: "Aerial Achievement Medal",
        spouse_name: "Ellene",
        children_num: 1,
        children_names: "Jamima",
        personal_img:
          "https://images.generated.photos/OTmAo6IN3mJZ9Prk7D7BQ_X-LJYNPR5G5vjPvioBS7Y/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE2NTMzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I can do 40 pull ups",
      },
      {
        alpha_roster_id: 185,
        go_by: "Viper Strike",
        favorite_movie: "The Great Escape",
        hobbies: "Bowling, Racquetball, Reloading (Shells)",
        achievements: "Airman's Medal",
        spouse_name: "",
        children_num: 2,
        children_names: "Berkley, Maxy",
        personal_img:
          "https://images.generated.photos/xZTT4cPPh7WhIg_a0cnTD00PyzaUy45Ho7acm2a7g8M/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjUzNjA1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I am a black belt in Tae Kwon Do",
      },
      {
        alpha_roster_id: 186,
        go_by: "Fury",
        favorite_movie: "Andrei Rublev",
        hobbies: "Ventriloquism",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "",
        children_num: 2,
        children_names: "Elnora, Timothea",
        personal_img:
          "https://images.generated.photos/771CcvwqeKIosmM-s2dG6Fh748Z3mkT7GUsJbsQpjbM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzM5MzczLmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I saw Tom Cruse at a Dodgers game",
      },
      {
        alpha_roster_id: 187,
        go_by: "Avenger",
        favorite_movie: "Metropolis",
        hobbies: "Chocolate making",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "",
        children_num: 2,
        children_names: "Merrielle, Fergus",
        personal_img:
          "https://images.generated.photos/DhPteuQ83HQlUhbKyikqbw-jlxGGOczWdXuObf6iL30/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzAzNTY2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can balance a broom on my nose",
      },
      {
        alpha_roster_id: 188,
        go_by: "Tempest",
        favorite_movie: "The Battle of Algiers",
        hobbies: "Frisbee golf, Woodworking, Magazine Collecting",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "Birch",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/yvsA_fLEoeom5tXoKZ9wQn5PZZngt4L_-pqC3y8q8bk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTczMzU1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I survived SDI",
      },
      {
        alpha_roster_id: 189,
        go_by: "Wraith",
        favorite_movie: "Breathless",
        hobbies: "Cake decorating",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/q3ZuyHfsKfSNqFy3_boTiONrrU95dpp78uoRepzZRqA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTYyNTE5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I sat through a Star Wars movie marathon",
      },
      {
        alpha_roster_id: 190,
        go_by: "Bandit",
        favorite_movie: "Willy Wonka & the Chocolate Factory",
        hobbies: "Bullion collecting",
        achievements: "Meritorious Unit Award",
        spouse_name: "",
        children_num: 1,
        children_names: "Tomlin",
        personal_img:
          "https://images.generated.photos/a29Yg-R5YqNsyWPZWy8CzZQCf3fEZWIwJbEagNg4U4I/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDI1NDEzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I can crush an aluminum hand on my head",
      },
      {
        alpha_roster_id: 191,
        go_by: "Cyclone Fury",
        favorite_movie: "Chungking Express",
        hobbies: "Spelunking",
        achievements: "Gallant Unit Citation",
        spouse_name: "",
        children_num: 1,
        children_names: "Devora",
        personal_img:
          "https://images.generated.photos/R1PM51VPOcTLXhvjAG2i8dMRaVrkuCt9PLvr-dXuqMI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTg3NTcwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I go to Halloween Horror Nights every year",
      },
      {
        alpha_roster_id: 192,
        go_by: "Cowboy",
        favorite_movie: "The King of Comedy",
        hobbies: "Lapidary",
        achievements: "Presidential Unit Citation",
        spouse_name: "Charissa",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/fZJ8XMDwv_LJh2Q7dxJlhA5uhQwwbbl8XI2scKZcdzo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjY4MzI0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I won a hot dog eating contest at a county fair",
      },
      {
        alpha_roster_id: 193,
        go_by: "Blackout",
        favorite_movie: "E.T.: The Extra-Terrestrial",
        hobbies: "Tennis",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "Tull",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/kCF0XNH7iYJZiNNsD78cwDWPBJu5sK_V2QyDdYwQsO4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODg4MzI4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I've travelled to Europe 12 times",
      },
      {
        alpha_roster_id: 194,
        go_by: "Thunder",
        favorite_movie: "The Hidden Fortress",
        hobbies: "Beach volleyball",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/69oFvto1JJmIvLqAU4riD80wyAjyAc5-rJtEaYVX8Xk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzE2MDgzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I memorized all of Robert Frost's poetry",
      },
      {
        alpha_roster_id: 195,
        go_by: "Nightfall",
        favorite_movie: "City of God",
        hobbies: "Cemetery/Tombstone cleaning",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "",
        children_num: 2,
        children_names: "Isa, Kerby",
        personal_img:
          "https://images.generated.photos/RMEqav2QyQ2cUSlG2EKJpfZi9aEMkROrWabJiG6GCmM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDIyOTExLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I read 200 books a year",
      },
      {
        alpha_roster_id: 196,
        go_by: "Lightning Strike",
        favorite_movie: "The Hustler",
        hobbies: "Civil War history and site visits",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/ZjYHYOLA4_H2GU5ptPS-zDPARf6w6NySuO8qN2RrGBE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzM1NTIzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I played bass in a metal band during college",
      },
      {
        alpha_roster_id: 197,
        go_by: "Ninja",
        favorite_movie: "To Kill a Mockingbird",
        hobbies: "Fantasy Sports, Rogue Lawnmowing",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Chance",
        personal_img:
          "https://images.generated.photos/XvpnmxWz80T8PZ3m-4s4eVg8YhjkMBcSvpmLabJoG3I/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDA5MTIyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I placed third a state swimming championship",
      },
      {
        alpha_roster_id: 198,
        go_by: "Ghost Hawk",
        favorite_movie: "The Shop Around the Corner",
        hobbies: "Needlepoint",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/C4adHHFufeSA9WmejOvvp24UnylZ3SwOzUYi2MNVaDc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTA1OTE2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I restore classic Harley Davidson motorcycles",
      },
      {
        alpha_roster_id: 199,
        go_by: "Dark Knight",
        favorite_movie: "Scarface",
        hobbies: "Palm reading, Fly fishing, Whale watching",
        achievements: "Combat Readiness Medal",
        spouse_name: "Cassy",
        children_num: 3,
        children_names: "Franny, Giana, Reube",
        personal_img:
          "https://images.generated.photos/EoxZvprG7oAcZYaX2vmEZoThSUeH2dqTaFx-twTfkHg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzA2NzAyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can do a backflip",
      },
      {
        alpha_roster_id: 200,
        go_by: "Scorpion",
        favorite_movie: "Django Unchained",
        hobbies: "Sea glass collecting",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "Tanhya",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/OePuF7oyxkD-DGYYf1uLvCrp_DQqM3s0eLhy3UGlf18/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTk5Mzc1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I have perfect pitch",
      },
      {
        alpha_roster_id: 201,
        go_by: "Red Baron",
        favorite_movie: "Dial M for Murder",
        hobbies: "Urban spelunking",
        achievements: "Aerial Achievement Medal",
        spouse_name: "Hamlen",
        children_num: 4,
        children_names: "Rourke, Muhammad, Ashbey, Edsel",
        personal_img:
          "https://images.generated.photos/KvQZW6H5br8F66W9TueLkk0YvbsQ61CyCqAPurQmZow/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjExMzg4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can stand on my head",
      },
      {
        alpha_roster_id: 202,
        go_by: "Sabre",
        favorite_movie: "The Long Goodbye",
        hobbies: "Skydiving",
        achievements: "Airman's Medal",
        spouse_name: "Ardelia",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/AOLHAETKZyc99IaI5o2Q9rCQ71fmevQCjKpxO5w5xBI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODM4MjQzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I can burp the alphabet",
      },
      {
        alpha_roster_id: 203,
        go_by: "Snipe",
        favorite_movie: "12 Monkeys",
        hobbies: "Paragliding, Storm chasing",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/7RuywU98OuUqT1sQ4RtpW9R8zyA1cAiRNrHemtc2i_w/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDI1NDg5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can guess people's weight",
      },
      {
        alpha_roster_id: 204,
        go_by: "Knight Rider",
        favorite_movie: "The Wild Bunch",
        hobbies: "Knife throwing, Croquet",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "Marten",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/H1o6pwsKLyy5fbUtFe8pX83shFQlLWBBDhnW7ADbeoE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzQ4ODYzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I know when a pot of water is about to boil",
      },
      {
        alpha_roster_id: 205,
        go_by: "Warlock",
        favorite_movie: "The Lady Vanishes",
        hobbies: "Cruising",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "Elaine",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/ZOCnY3pDQSpkG5bFgR62XjsLJfSD7DLPkwhnctTK1cQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUxMTg4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I can open a beer can with my teeth",
      },
      {
        alpha_roster_id: 206,
        go_by: "Shark",
        favorite_movie: "WALL\u00b7E",
        hobbies: "Photography, Composting, Metal working",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "Netti",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/F9rqcvVaSJp7Hhk71U2h2_OnC3d3AVgW-ID6dWPdNPM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzg1MDQxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I found $20 on the ground once",
      },
      {
        alpha_roster_id: 207,
        go_by: "Devil's Advocate",
        favorite_movie: "The Life and Death of Colonel Blimp",
        hobbies: "Cruising, Balloon twisting, Base jumping",
        achievements: "Meritorious Unit Award",
        spouse_name: "Olympia",
        children_num: 1,
        children_names: "Alfy",
        personal_img:
          "https://images.generated.photos/qpFj9BawIcpZRRnO-8t34cHYvBcTpBuXRuJE5CCpOGw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzE2ODc1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-1-second-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I've been to all 50 US states",
      },
      {
        alpha_roster_id: 208,
        go_by: "Blaze of Glory",
        favorite_movie: "American Beauty",
        hobbies: "Visit all US National Parks",
        achievements: "Gallant Unit Citation",
        spouse_name: "Fransisco",
        children_num: 1,
        children_names: "Brigg",
        personal_img:
          "https://images.generated.photos/yhJRIl6q3XE9pPnWBo7L_HZH-h-rQI-EH6y-cDN4X9I/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUzNzk3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I have  a collection of buttons",
      },
      {
        alpha_roster_id: 209,
        go_by: "Operation Thunder",
        favorite_movie: "The French Connection",
        hobbies: "Woodworking, Learn sign language",
        achievements: "Presidential Unit Citation",
        spouse_name: "",
        children_num: 2,
        children_names: "Jenna, Adler",
        personal_img:
          "https://images.generated.photos/xF31Bc__wQulIcAypcrh3gepqLkmAqLoERRj3ALVDD8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDkxMTAyLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I am a professional card player",
      },
      {
        alpha_roster_id: 210,
        go_by: "Death Angel",
        favorite_movie: "Bride of Frankenstein",
        hobbies: "Vinyl record collecting",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "Caty",
        children_num: 1,
        children_names: "Skipton",
        personal_img:
          "https://images.generated.photos/wxwm08yMR1dOGrht_P-wkfg-fkgWN34331S5FUcK9f8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE1NTM5LmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I am a black belt in Judo",
      },
      {
        alpha_roster_id: 211,
        go_by: "Wind Rider",
        favorite_movie: "Braveheart",
        hobbies: "Vintage photo collecting",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "",
        children_num: 2,
        children_names: "Bunnie, Blayne",
        personal_img:
          "https://images.generated.photos/4VkiG-_-DmBFF4KAMZWJ1JPvZ_grBajrGfzaEwpUsVk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM1MTExLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I play 7 instruments",
      },
      {
        alpha_roster_id: 212,
        go_by: "Shadow",
        favorite_movie: "Ugetsu",
        hobbies: "Origami",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "",
        children_num: 3,
        children_names: "Kylie, Kara, Dael",
        personal_img:
          "https://images.generated.photos/kyOn3eLv7rIZeKpi9EiYVESvaXhNe0M4z94H7ILBZow/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mzg2NDA4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I ran into Joe Pesci at the Atlanta airport",
      },
      {
        alpha_roster_id: 213,
        go_by: "Storm Chaser",
        favorite_movie: "Young Frankenstein",
        hobbies: "Sewing, Gunsmithing",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "Janie",
        children_num: 1,
        children_names: "Ester",
        personal_img:
          "https://images.generated.photos/0BJAO5iBz48dzgGs_5-vfXsUMvASmDWcFnn86cQcQ_Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY2ODk4LmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I can whistle all of Beethoven's symphonies",
      },
      {
        alpha_roster_id: 214,
        go_by: "Sundown",
        favorite_movie: "The Bridge on the River Kwai",
        hobbies: "Ventriloquism",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "Jan",
        children_num: 2,
        children_names: "Brigitta, Winnah",
        personal_img:
          "https://images.generated.photos/uPzf6MdDJjs_SweTEVBUxIz0LuKz7ZQwQCGfScoXG4M/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODMyNDc0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I memorized 534 digits of Pi",
      },
      {
        alpha_roster_id: 215,
        go_by: "Vortex",
        favorite_movie: "The Incredibles",
        hobbies: "Chocolate making",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "Ollie",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/8m5e_9JS4x2d8O9DtpCkzCy9ijByToOh-1s6U3Mt1qA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODQ4NjU0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-9-chief-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I can recite the Star Spangled Banner backwards",
      },
      {
        alpha_roster_id: 216,
        go_by: "Ghost Rider",
        favorite_movie: "Grave of the Fireflies",
        hobbies: "Taxidermy, Fantasy Sports, Puppetry",
        achievements: "Combat Readiness Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/q-4JIz378Edq1V8uTaVblu987RIG0p6h7SlMJKMtn-0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTA3NDE4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I can shoot a three point shot backwards",
      },
      {
        alpha_roster_id: 217,
        go_by: "Wildfire",
        favorite_movie: "My Man Godfrey",
        hobbies: "Cake decorating",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "Milzie",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/c5A7isvHh3uzZlp7g9Y3rx_1EZri2mozW1N3YRen5O0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDAzMzU3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I am a third cousin of Ryan Gosling",
      },
      {
        alpha_roster_id: 218,
        go_by: "Stinger",
        favorite_movie: "Life of Brian",
        hobbies: "Bullion collecting",
        achievements: "Aerial Achievement Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/xdLol_Iy4ckvwh_sa-6H9dHaN_RW-Zi9VhOxVJs26t8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzE3MDU4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I saw the Barbie movie 14 times",
      },
      {
        alpha_roster_id: 219,
        go_by: "Falcon",
        favorite_movie: "Miller's Crossing",
        hobbies: "Spelunking",
        achievements: "Airman's Medal",
        spouse_name: "Thekla",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/uLOb7xDgBnBVJhAOQOwi0nPKvyn0S5MXgOnLhxiA9xU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODc5OTg3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I run a D&D campaign with my friends",
      },
      {
        alpha_roster_id: 220,
        go_by: "Outlaw",
        favorite_movie: "High Noon",
        hobbies: "Lapidary",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "",
        children_num: 3,
        children_names: "Carter, Gaye, Leora",
        personal_img:
          "https://images.generated.photos/9yB8GnrEqd3EvZ9vtGHpSGmWd0NYNan3pEPAiq_DQt4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTgzMTQzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I built my own computer",
      },
      {
        alpha_roster_id: 221,
        go_by: "Blue Angel",
        favorite_movie: "Airplane!",
        hobbies: "Spelunking, Ice skating, Art collecting",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "Leonhard",
        children_num: 3,
        children_names: "Mylo, Jayson, Doro",
        personal_img:
          "https://images.generated.photos/BZ8r10TWSn99H7Nc4tgmBF0wBxIkiuW1Pla0Q1oVJxc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzA2MTc2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I brew my own beer",
      },
      {
        alpha_roster_id: 222,
        go_by: "Rhino",
        favorite_movie: "The Goonies",
        hobbies: "Climb the Seven Summits, Pickleball",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "Yolanda",
        children_num: 1,
        children_names: "Tedmund",
        personal_img:
          "https://images.generated.photos/AVm6KrjU1PzGQFpJpwnUINvLkzu7ZnMAfLa8uXpq0Aw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTc0NTA0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I can solve a Rubiks Cube in 40 seconds",
      },
      {
        alpha_roster_id: 223,
        go_by: "Ace of Aces",
        favorite_movie: "Army of Shadows",
        hobbies: "Cemetery/Tombstone cleaning",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "Rik",
        children_num: 2,
        children_names: "Rancell, Sofia",
        personal_img:
          "https://images.generated.photos/iVG61gb8xTls2yPkS2FPSrrIx1s5D7LJOY6TmgrNmyU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjUwODgxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I can speed run Mario Brothers in 30 seconds",
      },
      {
        alpha_roster_id: 224,
        go_by: "Havoc",
        favorite_movie: "Singin' in the Rain",
        hobbies: "Civil War history and site visits",
        achievements: "Meritorious Unit Award",
        spouse_name: "Nissa",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/9urX_9DOzP8pf7sHs3_E-PgxzRHYXnAQAUXwuniZVDQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njc4OTE1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-7-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I am a globally ranked Star Craft player",
      },
      {
        alpha_roster_id: 225,
        go_by: "Iron Will",
        favorite_movie: "Sanjuro",
        hobbies: "Learn a new language",
        achievements: "Gallant Unit Citation",
        spouse_name: "Bethany",
        children_num: 4,
        children_names: "Delainey, Lauren, Ninnetta, Clara",
        personal_img:
          "https://images.generated.photos/vMku_Yo-3hrADdGp-xbi60ZQoDE_iLwsRukrgKA5lUI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjUzNTQ5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-3-captain.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact:
          "I performed in my high school's performance of Hamlet",
      },
      {
        alpha_roster_id: 226,
        go_by: "Shadow Hunter",
        favorite_movie: "Barry Lyndon",
        hobbies: "Cheese making, Wine making, Horseback Riding",
        achievements: "Presidential Unit Citation",
        spouse_name: "",
        children_num: 1,
        children_names: "Clo",
        personal_img:
          "https://images.generated.photos/FlyTV27cxtor7EdaFLbrbybqMDwxbNasZK4wZJ20TFU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjIyODQ5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I am a classically trained harpist",
      },
      {
        alpha_roster_id: 227,
        go_by: "Thunderbird",
        favorite_movie: "Woman in the Dunes",
        hobbies: "Gnoming",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "Gunther",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/BYOCHMBEZZTakjGLTZjwzZomHheG55tfXse6qiyM5OY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjE5MDMxLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I know 6 programming languages",
      },
      {
        alpha_roster_id: 228,
        go_by: "Donkey",
        favorite_movie: "Mad Max: Fury Road",
        hobbies: "Sea glass collecting",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "",
        children_num: 2,
        children_names: "Aleece, Sunny",
        personal_img:
          "https://images.generated.photos/roQSxRwEZINF-ZocGrToIiJ6Xc5-BqLIcC6BrzbmULY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjU3Mjg1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I spend my 24th birthday in Paris",
      },
      {
        alpha_roster_id: 229,
        go_by: "Gladiator",
        favorite_movie: "Nausica\u00e4 of the Valley of the Wind",
        hobbies: "Urban spelunking",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "",
        children_num: 3,
        children_names: "Bobbie, Elena, Hadley",
        personal_img:
          "https://images.generated.photos/EJ-92SnpVEp4sJkAev8n2g4Fp2_1kdoFlbwGR3hXfW4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzM5ODc2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I've been to Disney World 26 times",
      },
      {
        alpha_roster_id: 230,
        go_by: "Red Scorpion",
        favorite_movie: "Manhattan",
        hobbies: "Flag football, Diving, Martial arts",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/OmlpUBNOGWssv41bsMATFPxU5b5m0lU2d4puSAAgp1Y/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDIwNzg2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I've been to 40 Phish concerts",
      },
      {
        alpha_roster_id: 231,
        go_by: "Silver Streak",
        favorite_movie: "Black Narcissus",
        hobbies: "Aquaponics",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "Ax",
        children_num: 1,
        children_names: "Sarah",
        personal_img:
          "https://images.generated.photos/2UxsiG4VoMOjxPqEfWh-iE42kSecSBUp27AtpZalYBM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjY4MTE0LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I played drums in a punk band during high school",
      },
      {
        alpha_roster_id: 232,
        go_by: "Hawk Eye",
        favorite_movie: "Finding Nemo",
        hobbies: "Cross-fit, Learn a new language",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "Nevin",
        children_num: 2,
        children_names: "Avis, Reynolds",
        personal_img:
          "https://images.generated.photos/wxiNZiSy6UutyK4PyDGjjPz5uRrdoXgfMYloe9Bzc9I/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTAzNDYwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-4-senior-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I'm fluent 9 different languages",
      },
      {
        alpha_roster_id: 233,
        go_by: "Sundance",
        favorite_movie: "The Sixth Sense",
        hobbies: "Cruising",
        achievements: "Combat Readiness Medal",
        spouse_name: "",
        children_num: 4,
        children_names: "Bruno, Donna, Jeanie, Hillie",
        personal_img:
          "https://images.generated.photos/H9O36ou_5Lot6HLu5mAgWTPjVL4ynP3K1WBIZ01bi2U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzAzNzU3LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/United_States_Air_Force_Intelligence_Badge.svg/1920px-United_States_Air_Force_Intelligence_Badge.svg.png",
        interesting_fact: "I have a collection of top hats",
      },
      {
        alpha_roster_id: 234,
        go_by: "Hellfire",
        favorite_movie: "Who's Afraid of Virginia Woolf?",
        hobbies: "Crocheting",
        achievements: "Air and Space Campaign Medal",
        spouse_name: "Melodee",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/s4yoyKCMpooJzyvNMRXZmzqXGFY5S1HDwdSTnTHA3kM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjQ5NDMzLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_and_Space_Campaign_Medal_ribbon.svg/1024px-Air_and_Space_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I can do 40 pull ups",
      },
      {
        alpha_roster_id: 235,
        go_by: "Snake",
        favorite_movie: "Predator",
        hobbies: "Chainsaw carving",
        achievements: "Aerial Achievement Medal",
        spouse_name: "",
        children_num: 1,
        children_names: "Konrad",
        personal_img:
          "https://images.generated.photos/3CxxDPPXWDCO146QQhXwG9JiCRwBUoHoGLeQfmMxvR4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQyMzA2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-6-technical-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_Achievement_Medal_ribbon.svg/1024px-Aerial_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I am a black belt in Tae Kwon Do",
      },
      {
        alpha_roster_id: 236,
        go_by: "Gargoyle",
        favorite_movie: "Spirited Away",
        hobbies: "Visit all US National Parks",
        achievements: "Airman's Medal",
        spouse_name: "",
        children_num: 3,
        children_names: "Konstantine, Lia, Mohandas",
        personal_img:
          "https://images.generated.photos/syjCuk0pSZ8JM6INrHGvQ4u3cTk-ts_g77ZS2vwDQs4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDg4Mjk5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Airman%27s_Medal_ribbon.svg/1024px-Airman%27s_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I saw Tom Cruse at a Dodgers game",
      },
      {
        alpha_roster_id: 237,
        go_by: "Fluke",
        favorite_movie: "Kill Bill Vol. 2",
        hobbies: "Lockpicking, Beach volleyball",
        achievements: "Air and Space Commendation Medal",
        spouse_name: "",
        children_num: 2,
        children_names: "Jeane, Imogene",
        personal_img:
          "https://images.generated.photos/XGAcDAvTOp0PnHAbo1RG-2earprAZW_bBOi_3SvcC3E/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODIxOTIwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-8-senior-master-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Air_and_Space_Commendation_Medal_ribbon.svg/1024px-Air_and_Space_Commendation_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I can balance a broom on my nose",
      },
      {
        alpha_roster_id: 238,
        go_by: "Firefly",
        favorite_movie: "White Heat",
        hobbies: "Vinyl record collecting",
        achievements: "Air and Space Achievement Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/60DG33vQX3lpCIrsQjtPgy1aRe_qnVBO2BVirvMpC9U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE5NzY3LmpwZw.jpg",
        grade_emblem_img: "",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Air_and_Space_Achievement_Medal_ribbon.svg/1024px-Air_and_Space_Achievement_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I survived SDI",
      },
      {
        alpha_roster_id: 239,
        go_by: "Muscle",
        favorite_movie: "The Bourne Identity",
        hobbies: "Vintage photo collecting",
        achievements: "Air and Space Training Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/YvYh08A6nDcv6tLzIvZOarCQ-qxqOG7HkFtj_4JOJyY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjU1MjIwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_and_Space_Training_Ribbon.svg/1024px-Air_and_Space_Training_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I sat through a Star Wars movie marathon",
      },
      {
        alpha_roster_id: 240,
        go_by: "Moose",
        favorite_movie: "Stagecoach",
        hobbies: "Synchronized swimming, Paintball",
        achievements: "Air and Space Organizational Excellence Award",
        spouse_name: "Chandal",
        children_num: 2,
        children_names: "Reynolds, Papageno",
        personal_img:
          "https://images.generated.photos/b8gDcTcYjP7jV4tHHAN11Xwl_5Dk-PcKYP0C9yBgIGo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTA4NzU1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Organizational_Excellence_ribbon.svg/1024px-Organizational_Excellence_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I can crush an aluminum hand on my head",
      },
      {
        alpha_roster_id: 241,
        go_by: "Bond",
        favorite_movie: "Some Like It Hot",
        hobbies: "Archery",
        achievements: "Meritorious Unit Award",
        spouse_name: "",
        children_num: 1,
        children_names: "Horatio",
        personal_img:
          "https://images.generated.photos/iNbOgHkvtfiqnBSuyGvyVQO4jk5zgagECUzKPlUnqVU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDQ2NTE5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Air_Force_Meritorious_Unit_ribbon.svg/1024px-Air_Force_Meritorious_Unit_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I go to Halloween Horror Nights every year",
      },
      {
        alpha_roster_id: 242,
        go_by: "Passenger",
        favorite_movie: "Oldboy",
        hobbies: "Sailing, Backpacking, RV Traveling",
        achievements: "Gallant Unit Citation",
        spouse_name: "",
        children_num: 1,
        children_names: "Editha",
        personal_img:
          "https://images.generated.photos/58Bhz4qHl1TEoUkPoTZfkxsrC_Ou0SRCLeSMY_47GVU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTY1MzUwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-2-first-lieutenant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gallant_Unit_Citation_ribbon.svg/1024px-Gallant_Unit_Citation_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I won a hot dog eating contest at a county fair",
      },
      {
        alpha_roster_id: 243,
        go_by: "Animal",
        favorite_movie: "Roman Holiday",
        hobbies: "Chocolate making",
        achievements: "Presidential Unit Citation",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/OH1__70BTllQlftQqFGCuvm7bKKnS2Gzp-CzMxApOQ8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDA2MzcwLmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-2-airman.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/db/AF_Presidential_Unit_Citation_Ribbon.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I've travelled to Europe 12 times",
      },
      {
        alpha_roster_id: 244,
        go_by: "Familiar",
        favorite_movie: "A Face in the Crowd",
        hobbies: "Paintball",
        achievements: "Outstanding Airman of the Year Ribbon",
        spouse_name: "",
        children_num: 2,
        children_names: "Zaccaria, Lilah",
        personal_img:
          "https://images.generated.photos/EuPtyL-zqOr9nXpnES8wDSADEG09SBPGFy8xsWzoMuk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjI3OTU4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Outstanding_Airman_of_the_Year_Ribbon.svg/1024px-Outstanding_Airman_of_the_Year_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I memorized all of Robert Frost's poetry",
      },
      {
        alpha_roster_id: 245,
        go_by: "Alpha",
        favorite_movie: "The Untouchables",
        hobbies: "Bullion collecting, Improv, Renaissance fairs",
        achievements: "Air and Space Recognition Ribbon",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/6f5PJOziSHbEkYHZyG2tu4_SRjiTUU6JK6ImU-aiFv4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY2MzU5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-6-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Air_Force_Recognition_Ribbon.svg/1024px-Air_Force_Recognition_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/USAF_-_Occupational_Badge_-_Missile_Operations.svg/800px-USAF_-_Occupational_Badge_-_Missile_Operations.svg.png",
        interesting_fact: "I read 200 books a year",
      },
      {
        alpha_roster_id: 246,
        go_by: "Data",
        favorite_movie: "Late Spring",
        hobbies: "Bullion collecting",
        achievements: "\u00a0Air and Space Overseas Long Tour Service Ribbon",
        spouse_name: "Calvin",
        children_num: 1,
        children_names: "Marquita",
        personal_img:
          "https://images.generated.photos/uvTvlW0Gl18Jf3l--32Go6KgsfRBlu1m6d2tlo3i6fs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY0OTQ4LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-5-staff-sergeant.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg/1024px-Air_and_Space_Overseas_Long_Tour_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I played bass in a metal band during college",
      },
      {
        alpha_roster_id: 247,
        go_by: "Pitch",
        favorite_movie: "Paper Moon",
        hobbies: "Beekeeping, Learn to be a mime",
        achievements: "Air and Space Expeditionary Service Ribbon",
        spouse_name: "",
        children_num: 2,
        children_names: "Wolfie, Aileen",
        personal_img:
          "https://images.generated.photos/4WQ1vflpup6hTWMRZgXkXCc5f4QYl13jWAel2wCQxAU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjkzMzM2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Air_and_Space_Expeditionary_Service_Ribbon.svg/1024px-Air_and_Space_Expeditionary_Service_Ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I placed third a state swimming championship",
      },
      {
        alpha_roster_id: 248,
        go_by: "Wish",
        favorite_movie: "The Exorcist",
        hobbies: "Lapidary",
        achievements: "Inherent Resolve Campaign Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/rJcs1zWg891zSgENnQISDP4LsFzxmR9dCFYWeSwWw8g/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjI2MTg2LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-4-major.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inherent_Resolve_Campaign_Medal_ribbon.svg/1024px-Inherent_Resolve_Campaign_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/en/5/55/USAF_1C8XX_badge.jpg",
        interesting_fact: "I restore classic Harley Davidson motorcycles",
      },
      {
        alpha_roster_id: 249,
        go_by: "Hawk",
        favorite_movie: "Rain Man",
        hobbies: "Latte art, Tombstone rubbing, Jogging",
        achievements: "Air Force Good Conduct Medal",
        spouse_name: "",
        children_num: 3,
        children_names: "Rivkah, Adan, Renae",
        personal_img:
          "https://images.generated.photos/TAxLgMMpCpxAfkqZlnje4tXTFfMH8yr6bdKEPU9QkZ4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE2MDk5LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/O-5-lieutenant-colonel.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/U.S._Air_Force_Good_Conduct_Medal_ribbon.svg/1024px-U.S._Air_Force_Good_Conduct_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg/1920px-USAF_-_Occupational_Badge_-_Cyber_Space_Support.svg.png",
        interesting_fact: "I can do a backflip",
      },
      {
        alpha_roster_id: 250,
        go_by: "Scarecrow",
        favorite_movie: "The Green Mile",
        hobbies: "Beach volleyball",
        achievements: "Combat Readiness Medal",
        spouse_name: "",
        children_num: 0,
        children_names: "",
        personal_img:
          "https://images.generated.photos/J1voXIMZQEvnHa5gckXUszsMTQHSblCJ2HCvthBWzp0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTcxMzQ1LmpwZw.jpg",
        grade_emblem_img:
          "https://www.defense.gov/Portals/1/Page-Assets/insignias/air-force/E-3-airman-first-class.png",
        achievement_img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Combat_Readiness_Medal_ribbon.svg/1024px-Combat_Readiness_Medal_ribbon.svg.png",
        career_field_img:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/USAF_-_Cyberspace_Operator_Wings_Basic.png",
        interesting_fact: "I have perfect pitch",
      }
  ]);
};
