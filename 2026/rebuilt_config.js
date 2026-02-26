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
      "defaultValue": "2026ilch",
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
      "type": "team",
      "min": 1,
      "max": 99999
    }
  ],
  "auton": [
   {
      "name": "Move From Starting Point",
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
      "Max": 135,
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
