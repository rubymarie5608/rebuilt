var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",
  "prematch": [
    {
      "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    {
      "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "DCMP",
      "required": "true"
    },
    {
      "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    {
      "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "R1": "Red-1",
        "B1": "Blue-1<br>",
        "R2": "Red-2",
        "B2": "Blue-2<br>",
        "R3": "Red-3",
        "B3": "Blue-3"
      },
      "required": "true"
    },
    {
      "name": "Team #",
      "code": "t",
      "type": "dropdown",
      "choices": {
      "SELECT": "-- Select Team --",
      "88": "88",
      "148": "148",
      "180": "180",
      "195": "195",
      "233": "233",
      "341": "341",
      "346": "346",
      "386": "386",
      "424": "424",
      "599": "599",
      "604": "604",
      "687": "687",
      "695": "695",
      "818": "818",
      "868": "868",
      "930": "930",
      "948": "948",
      "973": "973",
      "1,108": "1108",
      "1,540": "1540",
      "1,577": "1577",
      "1,796": "1796",
      "1,807": "1807",
      "1,833": "1833",
      "1,884": "1884",
      "1,902": "1902",
      "1,922": "1922",
      "2,046": "2046",
      "2,052": "2052",
      "2,067": "2067",
      "2,194": "2194",
      "2,370": "2370",
      "2,586": "2586",
      "2,713": "2713",
      "2,783": "2783",
      "2,910": "2910",
      "2,996": "2996",
      "3,005": "3005",
      "3,044": "3044",
      "3,256": "3256",
      "3,276": "3276",
      "3,354": "3354",
      "3,966": "3966",
      "4,099": "4099",
      "4,253": "4253",
      "4,296": "4296",
      "4,400": "4400",
      "4,561": "4561",
      "4,590": "4590",
      "5,216": "5216",
      "5,414": "5414",
      "5,549": "5549",
      "5,736": "5736",
      "5,948": "5948",
      "5,951": "5951",
      "6,036": "6036",
      "6,352": "6352",
      "6,436": "6436",
      "6,647": "6647",
      "6,988": "6988",
      "7,160": "7160",
      "8,046": "8046",
      "8,373": "8373",
      "9,029": "9029",
      "9,067": "9067",
      "9,128": "9128",
      "9,245": "9245",
      "9,408": "9408",
      "9,450": "9450",
      "10,291": "10291",
      "10,553": "10553",
      "10,903": "10903",
      "10,935": "10935",
      "10,979": "10979",
      "11,463": "11463"
      },
       "defaultValue": "SELECT"
     }
  ],
  "auton": [
   {
      "name": "Move During Auto",
      "code": "msp",
      "type": "bool"
    },
    {
      "name": "Auto Shooting Time",
      "code": "ast",
      "Max": 20,
      "Min": 0,
      "type": "number"
    },
    {
      "name": "Shuttle Fuel",
      "code": "sfa",
      "type": "bool"
    },
    {
      "name": "Floor Pickup",
      "code": "fpa",
      "type": "bool"
    },
    {
      "name": "Climb (L1)",
      "code": "ac",
      "type": "radio",
      "choices": {
        "c": "Climbed<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    {
      "name": "Teleop Shooting Time",
      "code": "tst",
      "Max": 70,
      "Min": 0,
      "type": "number"
    },
    {
      "name": "Shuttle Fuel",
      "code": "sft",
      "type": "bool"
    },
    {
      "name": "Pickup from Outpost",
      "code": "pfo",
      "type": "bool"
    },
    {
      "name": "Floor Pickup",
      "code": "fpt",
      "type": "bool"
    }
  ],
  "endgame": [
    {
      "name": "Climb",
      "code": "tc",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    {
      "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    {
      "name": "Beached<br>(Stuck on balls or bump)",
      "code": "bea",
      "type": "bool"
    },
    {
      "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 100
    }
  ]
}`;
