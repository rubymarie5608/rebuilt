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
      "defaultValue": "TXCMP2",
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
       "127": "127",
       "148": "148",
       "231": "231",
       "418": "418",
       "457": "457",
       "2,158": "2158",
       "2,583": "2583",
       "2,689": "2689",
       "2,714": "2714",
       "2,848": "2848",
       "3,035": "3035",
       "3,310": "3310",
       "3,561": "3561",
       "4,063": "4063",
       "4,153": "4153",
       "4,192": "4192",
       "4,206": "4206",
       "4,639": "4639",
       "5,411": "5411",
       "5,414": "5414",
       "5,427": "5427",
       "5,503": "5503",
       "5,572": "5572",
       "6,357": "6357",
       "6,369": "6369",
       "6,773": "6773",
       "7,312": "7312",
       "7,492": "7492",
       "7,616": "7616",
       "8,114": "8114",
       "8,177": "8177",
       "8,576": "8576",
       "8,749": "8749",
       "8,769": "8769",
       "8,818": "8818",
       "8,858": "8858",
       "9,128": "9128",
       "9,136": "9136",
       "9,140": "9140",
       "9,506": "9506",
       "10,385": "10385",
       "10,518": "10518",
       "10,913": "10913",
       "11,169": "11169",
       "11,178": "11178"
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
