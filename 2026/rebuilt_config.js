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
      "defaultValue": "TXFOR",
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
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required": "true"
    },
    {
      "name": "Team #",
      "code": "t",
      "type": "dropdown",
      "choices": {
       "Select": "-- Select Team --",
       "1,164": "1164",
       "2,657": "2657",
       "3,310": "3310",
       "4,063": "4063",
       "4,153": "4153",
       "4,192": "4192",
       "4,206": "4206",
       "4,734": "4734",
       "5,212": "5212",
       "5,411": "5411",
       "5,613": "5613",
       "5,866": "5866",
       "6,369": "6369",
       "6,768": "6768",
       "6,974": "6974",
       "7,271": "7271",
       "7,540": "7540",
       "8,512": "8512",
       "8,528": "8528",
       "8,732": "8732",
       "9,080": "9080",
       "9,105": "9105",
       "9,136": "9136",
       "9,419": "9419",
       "9,457": "9457",
       "9,492": "9492",
       "10,312": "10312",
       "10,994": "10994",
       "11,091": "11091",
       "11,200": "11200",
       "11,465": "11465",
       "11,469": "11469"
       },
       "defaultValue": "Select"
       "required": "true"
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
