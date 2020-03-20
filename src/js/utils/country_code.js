const COUNTRY_CODES = [
    {
        "name": "Afghanistan",
        "phoneCode": "+93",
        "alpha2code": "AF",
        "alpha3code": "AFG"
    },
    {
        "name": "Albania",
        "phoneCode": "+355",
        "alpha2code": "AL",
        "alpha3code": "ALB"
    },
    {
        "name": "Algeria",
        "phoneCode": "+213",
        "alpha2code": "DZ",
        "alpha3code": "DZA"
    },
    {
        "name": "American Samoa",
        "phoneCode": "+1",
        "alpha2code": "AS",
        "alpha3code": "ASM"
    },
    {
        "name": "Andorra",
        "phoneCode": "+376",
        "alpha2code": "AD",
        "alpha3code": "AND"
    },
    {
        "name": "Angola",
        "phoneCode": "+244",
        "alpha2code": "AO",
        "alpha3code": "AGO"
    },
    {
        "name": "Anguilla",
        "phoneCode": "+1",
        "alpha2code": "AI",
        "alpha3code": "AIA"
    },
    {
        "name": "Antigua and Barbuda",
        "phoneCode": "+1",
        "alpha2code": "AG",
        "alpha3code": "ATG"
    },
    {
        "name": "Argentina",
        "phoneCode": "+54",
        "alpha2code": "AR",
        "alpha3code": "ARG"
    },
    {
        "name": "Armenia",
        "phoneCode": "+374",
        "alpha2code": "AM",
        "alpha3code": "ARM"
    },
    {
        "name": "Aruba",
        "phoneCode": "+297",
        "alpha2code": "AW",
        "alpha3code": "ABW"
    },
    {
        "name": "Australia",
        "phoneCode": "+61",
        "alpha2code": "AU",
        "alpha3code": "AUS"
    },
    {
        "name": "Austria",
        "phoneCode": "+43",
        "alpha2code": "AT",
        "alpha3code": "AUT"
    },
    {
        "name": "Azerbaijan",
        "phoneCode": "+994",
        "alpha2code": "AZ",
        "alpha3code": "AZE"
    },
    {
        "name": "Bahrain",
        "phoneCode": "+973",
        "alpha2code": "BH",
        "alpha3code": "BHR"
    },
    {
        "name": "Bangladesh",
        "phoneCode": "+880",
        "alpha2code": "BD",
        "alpha3code": "BGD"
    },
    {
        "name": "Barbados",
        "phoneCode": "+1",
        "alpha2code": "BB",
        "alpha3code": "BRB"
    },
    {
        "name": "Belarus",
        "phoneCode": "+375",
        "alpha2code": "BY",
        "alpha3code": "BLR"
    },
    {
        "name": "Belgium",
        "phoneCode": "+32",
        "alpha2code": "BE",
        "alpha3code": "BEL"
    },
    {
        "name": "Belize",
        "phoneCode": "+501",
        "alpha2code": "BZ",
        "alpha3code": "BLZ"
    },
    {
        "name": "Benin",
        "phoneCode": "+229",
        "alpha2code": "BJ",
        "alpha3code": "BEN"
    },
    {
        "name": "Bermuda",
        "phoneCode": "+1",
        "alpha2code": "BM",
        "alpha3code": "BMU"
    },
    {
        "name": "Bhutan",
        "phoneCode": "+975",
        "alpha2code": "BT",
        "alpha3code": "BTN"
    },
    {
        "name": "Bolivia",
        "phoneCode": "+591",
        "alpha2code": "BO",
        "alpha3code": "BOL"
    },
    {
        "name": "Bonaire, Sint Eustatius and Saba",
        "phoneCode": "+599",
        "alpha2code": "BQ",
        "alpha3code": "BES"
    },
    {
        "name": "Bosnia and Herzegovina",
        "phoneCode": "+387",
        "alpha2code": "BA",
        "alpha3code": "BIH"
    },
    {
        "name": "Botswana",
        "phoneCode": "+267",
        "alpha2code": "BW",
        "alpha3code": "BWA"
    },
    {
        "name": "Brazil",
        "phoneCode": "+55",
        "alpha2code": "BR",
        "alpha3code": "BRA"
    },
    {
        "name": "British Indian Ocean Territory",
        "phoneCode": "+246",
        "alpha2code": "IO",
        "alpha3code": "IOT"
    },
    {
        "name": "British Virgin Islands",
        "phoneCode": "+1",
        "alpha2code": "VG",
        "alpha3code": "VGB"
    },
    {
        "name": "Brunei",
        "phoneCode": "+673",
        "alpha2code": "BN",
        "alpha3code": "BRN"
    },
    {
        "name": "Bulgaria",
        "phoneCode": "+359",
        "alpha2code": "BG",
        "alpha3code": "BGR"
    },
    {
        "name": "Burkina Faso",
        "phoneCode": "+226",
        "alpha2code": "BF",
        "alpha3code": "BFA"
    },
    {
        "name": "Myanmar",
        "phoneCode": "+95",
        "alpha2code": "MM",
        "alpha3code": "MMR"
    },
    {
        "name": "Burundi",
        "phoneCode": "+257",
        "alpha2code": "BI",
        "alpha3code": "BDI"
    },
    {
        "name": "Cambodia",
        "phoneCode": "+855",
        "alpha2code": "KH",
        "alpha3code": "KHM"
    },
    {
        "name": "Cameroon",
        "phoneCode": "+237",
        "alpha2code": "CM",
        "alpha3code": "CMR"
    },
    {
        "name": "Canada",
        "phoneCode": "+1",
        "alpha2code": "CA",
        "alpha3code": "CAN"
    },
    {
        "name": "Cabo Verde",
        "phoneCode": "+238",
        "alpha2code": "CV",
        "alpha3code": "CPV"
    },
    {
        "name": "Cayman Islands",
        "phoneCode": "+1",
        "alpha2code": "KY",
        "alpha3code": "CYM"
    },
    {
        "name": "Central African Republic",
        "phoneCode": "+236",
        "alpha2code": "CF",
        "alpha3code": "CAF"
    },
    {
        "name": "Chad",
        "phoneCode": "+235",
        "alpha2code": "ID",
        "alpha3code": "TCD"
    },
    {
        "name": "Chile",
        "phoneCode": "+56",
        "alpha2code": "CL",
        "alpha3code": "CHL"
    },
    {
        "name": "China",
        "phoneCode": "+86",
        "alpha2code": "CN",
        "alpha3code": "CHN"
    },
    {
        "name": "Colombia",
        "phoneCode": "+57",
        "alpha2code": "CO",
        "alpha3code": "COL"
    },
    {
        "name": "Comoros",
        "phoneCode": "+269",
        "alpha2code": "KM",
        "alpha3code": "COM"
    },
    {
        "name": "Cook Islands",
        "phoneCode": "+682",
        "alpha2code": "CK",
        "alpha3code": "COK"
    },
    {
        "name": "Costa Rica",
        "phoneCode": "+506",
        "alpha2code": "CR",
        "alpha3code": "CRI"
    },
    {
        "name": "Côte dIvoire",
        "phoneCode": "+225",
        "alpha2code": "CI",
        "alpha3code": "CIV"
    },
    {
        "name": "Croatia",
        "phoneCode": "+385",
        "alpha2code": "HR",
        "alpha3code": "HRV"
    },
    {
        "name": "Cuba",
        "phoneCode": "+53",
        "alpha2code": "CU",
        "alpha3code": "CUB"
    },
    {
        "name": "Curaçao",
        "phoneCode": "+599",
        "alpha2code": "CW",
        "alpha3code": "CUW"
    },
    {
        "name": "Cyprus",
        "phoneCode": "+357",
        "alpha2code": "CY",
        "alpha3code": "CYP"
    },
    {
        "name": "Czechia",
        "phoneCode": "+420",
        "alpha2code": "CZ",
        "alpha3code": "CZE"
    },
    {
        "name": "Denmark",
        "phoneCode": "+45",
        "alpha2code": "DK",
        "alpha3code": "DNK"
    },
    {
        "name": "Djibouti",
        "phoneCode": "+253",
        "alpha2code": "DJ",
        "alpha3code": "DJI"
    },
    {
        "name": "Dominica",
        "phoneCode": "+1",
        "alpha2code": "DM",
        "alpha3code": "DMA"
    },
    {
        "name": "Dominican Republic",
        "phoneCode": "+1",
        "alpha2code": "DO",
        "alpha3code": "DOM"
    },
    {
        "name": "Ecuador",
        "phoneCode": "+593",
        "alpha2code": "EC",
        "alpha3code": "ECU"
    },
    {
        "name": "Egypt",
        "phoneCode": "+20",
        "alpha2code": "EG",
        "alpha3code": "EGY"
    },
    {
        "name": "El Salvador",
        "phoneCode": "+503",
        "alpha2code": "SV",
        "alpha3code": "SLV"
    },
    {
        "name": "Equatorial Guinea",
        "phoneCode": "+240",
        "alpha2code": "GQ",
        "alpha3code": "GNQ"
    },
    {
        "name": "Eritrea",
        "phoneCode": "+291",
        "alpha2code": "ER",
        "alpha3code": "ERI"
    },
    {
        "name": "Estonia",
        "phoneCode": "+372",
        "alpha2code": "EE",
        "alpha3code": "EST"
    },
    {
        "name": "Ethiopia",
        "phoneCode": "+251",
        "alpha2code": "ET",
        "alpha3code": "ETH"
    },
    {
        "name": "Falkland Islands",
        "phoneCode": "+500",
        "alpha2code": "FK",
        "alpha3code": "FLK"
    },
    {
        "name": "Faeroe Islands",
        "phoneCode": "+298",
        "alpha2code": "FO",
        "alpha3code": "FRO"
    },
    {
        "name": "Federated States of Micronesia",
        "phoneCode": "+691",
        "alpha2code": "FM",
        "alpha3code": "FSM"
    },
    {
        "name": "Fiji",
        "phoneCode": "+679",
        "alpha2code": "FJ",
        "alpha3code": "FJI"
    },
    {
        "name": "Finland",
        "phoneCode": "+358",
        "alpha2code": "FI",
        "alpha3code": "FIN"
    },
    {
        "name": "France",
        "phoneCode": "+33",
        "alpha2code": "FR",
        "alpha3code": "FRA"
    },
    {
        "name": "French Guiana",
        "phoneCode": "+594",
        "alpha2code": "GF",
        "alpha3code": "GUF"
    },
    {
        "name": "French Polynesia",
        "phoneCode": "+689",
        "alpha2code": "PF",
        "alpha3code": "PYF"
    },
    {
        "name": "Gabon",
        "phoneCode": "+241",
        "alpha2code": "GA",
        "alpha3code": "GAB"
    },
    {
        "name": "Georgia",
        "phoneCode": "+995",
        "alpha2code": "GE",
        "alpha3code": "GEO"
    },
    {
        "name": "Germany",
        "phoneCode": "+49",
        "alpha2code": "DE",
        "alpha3code": "DEU"
    },
    {
        "name": "Ghana",
        "phoneCode": "+233",
        "alpha2code": "GH",
        "alpha3code": "GHA"
    },
    {
        "name": "Gibraltar",
        "phoneCode": "+350",
        "alpha2code": "GI",
        "alpha3code": "GIB"
    },
    {
        "name": "Greece",
        "phoneCode": "+30",
        "alpha2code": "GR",
        "alpha3code": "GRC"
    },
    {
        "name": "Greenland",
        "phoneCode": "+299",
        "alpha2code": "GL",
        "alpha3code": "GRL"
    },
    {
        "name": "Grenada",
        "phoneCode": "+1",
        "alpha2code": "GD",
        "alpha3code": "GRD"
    },
    {
        "name": "Guadeloupe",
        "phoneCode": "+590",
        "alpha2code": "GP",
        "alpha3code": "GLP"
    },
    {
        "name": "Guam",
        "phoneCode": "+1",
        "alpha2code": "GU",
        "alpha3code": "GUM"
    },
    {
        "name": "Guatemala",
        "phoneCode": "+502",
        "alpha2code": "GT",
        "alpha3code": "GTM"
    },
    {
        "name": "Guinea",
        "phoneCode": "+224",
        "alpha2code": "GN",
        "alpha3code": "GIN"
    },
    {
        "name": "Guinea-Bissau",
        "phoneCode": "+245",
        "alpha2code": "GW",
        "alpha3code": "GNB"
    },
    {
        "name": "Guyana",
        "phoneCode": "+592",
        "alpha2code": "GY",
        "alpha3code": "GUY"
    },
    {
        "name": "Haiti",
        "phoneCode": "+509",
        "alpha2code": "HT",
        "alpha3code": "HTI"
    },
    {
        "name": "Honduras",
        "phoneCode": "+504",
        "alpha2code": "HN",
        "alpha3code": "HND"
    },
    {
        "name": "Hong Kong",
        "phoneCode": "+852",
        "alpha2code": "HK",
        "alpha3code": "HKG"
    },
    {
        "name": "Hungary",
        "phoneCode": "+36",
        "alpha2code": "HU",
        "alpha3code": "HUN"
    },
    {
        "name": "Iceland",
        "phoneCode": "+354",
        "alpha2code": "IS",
        "alpha3code": "ISL"
    },
    {
        "name": "India",
        "phoneCode": "+91",
        "alpha2code": "IN",
        "alpha3code": "IND"
    },
    {
        "name": "Indonesia",
        "phoneCode": "+62",
        "alpha2code": "ID",
        "alpha3code": "IDN"
    },
    {
        "name": "Iran",
        "phoneCode": "+98",
        "alpha2code": "IR",
        "alpha3code": "IRN"
    },
    {
        "name": "Iraq",
        "phoneCode": "+964",
        "alpha2code": "IQ",
        "alpha3code": "IRQ"
    },
    {
        "name": "Ireland",
        "phoneCode": "+353",
        "alpha2code": "IE",
        "alpha3code": "IRL"
    },
    {
        "name": "Israel",
        "phoneCode": "+972",
        "alpha2code": "IL",
        "alpha3code": "ISR"
    },
    {
        "name": "Italy",
        "phoneCode": "+39",
        "alpha2code": "IT",
        "alpha3code": "ITA"
    },
    {
        "name": "Jamaica",
        "phoneCode": "+1",
        "alpha2code": "JM",
        "alpha3code": "JAM"
    },
    {
        "name": "Japan",
        "phoneCode": "+81",
        "alpha2code": "JP",
        "alpha3code": "JPN"
    },
    {
        "name": "Jordan",
        "phoneCode": "+962",
        "alpha2code": "JO",
        "alpha3code": "JOR"
    },
    {
        "name": "Kazakhstan",
        "phoneCode": "+7",
        "alpha2code": "KZ",
        "alpha3code": "KAZ"
    },
    {
        "name": "Kenya",
        "phoneCode": "+254",
        "alpha2code": "KE",
        "alpha3code": "KEN"
    },
    {
        "name": "Kiribati",
        "phoneCode": "+686",
        "alpha2code": "KI",
        "alpha3code": "KIR"
    },
    {
        "name": "Kuwait",
        "phoneCode": "+965",
        "alpha2code": "KW",
        "alpha3code": "KWT"
    },
    {
        "name": "Kyrgyzstan",
        "phoneCode": "+996",
        "alpha2code": "KG",
        "alpha3code": "KGZ"
    },
    {
        "name": "Laos",
        "phoneCode": "+856",
        "alpha2code": "LA",
        "alpha3code": "LAO"
    },
    {
        "name": "Latvia",
        "phoneCode": "+371",
        "alpha2code": "LV",
        "alpha3code": "LVA"
    },
    {
        "name": "Lebanon",
        "phoneCode": "+961",
        "alpha2code": "LB",
        "alpha3code": "LBN"
    },
    {
        "name": "Lesotho",
        "phoneCode": "+266",
        "alpha2code": "LS",
        "alpha3code": "LSO"
    },
    {
        "name": "Liberia",
        "phoneCode": "+231",
        "alpha2code": "LR",
        "alpha3code": "LBR"
    },
    {
        "name": "Libya",
        "phoneCode": "+218",
        "alpha2code": "LY",
        "alpha3code": "LBY"
    },
    {
        "name": "Liechtenstein",
        "phoneCode": "+423",
        "alpha2code": "LI",
        "alpha3code": "LIE"
    },
    {
        "name": "Lithuania",
        "phoneCode": "+370",
        "alpha2code": "LT",
        "alpha3code": "LTU"
    },
    {
        "name": "Luxembourg",
        "phoneCode": "+352",
        "alpha2code": "LU",
        "alpha3code": "LUX"
    },
    {
        "name": "Macao",
        "phoneCode": "+853",
        "alpha2code": "MO",
        "alpha3code": "MAC"
    },
    {
        "name": "North Macedonia",
        "phoneCode": "+389",
        "alpha2code": "MK",
        "alpha3code": "MKD"
    },
    {
        "name": "Madagascar",
        "phoneCode": "+261",
        "alpha2code": "MG",
        "alpha3code": "MDG"
    },
    {
        "name": "Malawi",
        "phoneCode": "+265",
        "alpha2code": "MW",
        "alpha3code": "MWI"
    },
    {
        "name": "Malaysia",
        "phoneCode": "+60",
        "alpha2code": "MY",
        "alpha3code": "MYS"
    },
    {
        "name": "Maldives",
        "phoneCode": "+960",
        "alpha2code": "MV",
        "alpha3code": "MDV"
    },
    {
        "name": "Mali",
        "phoneCode": "+223",
        "alpha2code": "ML",
        "alpha3code": "MLI"
    },
    {
        "name": "Malta",
        "phoneCode": "+356",
        "alpha2code": "MT",
        "alpha3code": "MLT"
    },
    {
        "name": "Marshall Islands",
        "phoneCode": "+692",
        "alpha2code": "MH",
        "alpha3code": "MHL"
    },
    {
        "name": "Martinique",
        "phoneCode": "+596",
        "alpha2code": "MQ",
        "alpha3code": "MTQ"
    },
    {
        "name": "Mauritania",
        "phoneCode": "+222",
        "alpha2code": "MR",
        "alpha3code": "MRT"
    },
    {
        "name": "Mauritius",
        "phoneCode": "+230",
        "alpha2code": "MU",
        "alpha3code": "MUS"
    },
    {
        "name": "Mayotte",
        "phoneCode": "+262",
        "alpha2code": "YT",
        "alpha3code": "MYT"
    },
    {
        "name": "Mexico",
        "phoneCode": "+52",
        "alpha2code": "MX",
        "alpha3code": "MEX"
    },
    {
        "name": "Moldova",
        "phoneCode": "+373",
        "alpha2code": "MD",
        "alpha3code": "MDA"
    },
    {
        "name": "Monaco",
        "phoneCode": "+377",
        "alpha2code": "MC",
        "alpha3code": "MCO"
    },
    {
        "name": "Mongolia",
        "phoneCode": "+976",
        "alpha2code": "MN",
        "alpha3code": "MNG"
    },
    {
        "name": "Montenegro",
        "phoneCode": "+382",
        "alpha2code": "ME",
        "alpha3code": "MNE"
    },
    {
        "name": "Montserrat",
        "phoneCode": "+1",
        "alpha2code": "MS",
        "alpha3code": "MSR"
    },
    {
        "name": "Morocco",
        "phoneCode": "+212",
        "alpha2code": "MA",
        "alpha3code": "MAR"
    },
    {
        "name": "Mozambique",
        "phoneCode": "+258",
        "alpha2code": "MZ",
        "alpha3code": "MOZ"
    },
    {
        "name": "Namibia",
        "phoneCode": "+264",
        "alpha2code": "NA",
        "alpha3code": "NAM"
    },
    {
        "name": "Nauru",
        "phoneCode": "+674",
        "alpha2code": "NR",
        "alpha3code": "NRU"
    },
    {
        "name": "Nepal",
        "phoneCode": "+977",
        "alpha2code": "NP",
        "alpha3code": "NPL"
    },
    {
        "name": "Netherlands",
        "phoneCode": "+31",
        "alpha2code": "NL",
        "alpha3code": "NLD"
    },
    {
        "name": "Netherlands Antilles",
        "phoneCode": "+599",
        "alpha2code": "AN",
        "alpha3code": "ANT"
    },
    {
        "name": "New Caledonia",
        "phoneCode": "+687",
        "alpha2code": "NC",
        "alpha3code": "NCL"
    },
    {
        "name": "New Zealand",
        "phoneCode": "+64",
        "alpha2code": "NZ",
        "alpha3code": "NZL"
    },
    {
        "name": "Nicaragua",
        "phoneCode": "+505",
        "alpha2code": "NI",
        "alpha3code": "NIC"
    },
    {
        "name": "Niger",
        "phoneCode": "+227",
        "alpha2code": "NE",
        "alpha3code": "NER"
    },
    {
        "name": "Nigeria",
        "phoneCode": "+234",
        "alpha2code": "NG",
        "alpha3code": "NGA"
    },
    {
        "name": "Niue",
        "phoneCode": "+683",
        "alpha2code": "NU",
        "alpha3code": "NIU"
    },
    {
        "name": "Norfolk Island",
        "phoneCode": "+672",
        "alpha2code": "NF",
        "alpha3code": "NFK"
    },
    {
        "name": "North Korea",
        "phoneCode": "+850",
        "alpha2code": "KP",
        "alpha3code": "PRK"
    },
    {
        "name": "Northern Mariana Islands",
        "phoneCode": "+1",
        "alpha2code": "MP",
        "alpha3code": "MNP"
    },
    {
        "name": "Norway",
        "phoneCode": "+47",
        "alpha2code": "NO",
        "alpha3code": "NOR"
    },
    {
        "name": "Oman",
        "phoneCode": "+968",
        "alpha2code": "OM",
        "alpha3code": "OMN"
    },
    {
        "name": "Pakistan",
        "phoneCode": "+92",
        "alpha2code": "PK",
        "alpha3code": "PAK"
    },
    {
        "name": "Palau",
        "phoneCode": "+680",
        "alpha2code": "PW",
        "alpha3code": "PLW"
    },
    {
        "name": "Palestine",
        "phoneCode": "+970",
        "alpha2code": "PS",
        "alpha3code": "PSE"
    },
    {
        "name": "Panama",
        "phoneCode": "+507",
        "alpha2code": "PA",
        "alpha3code": "PAN"
    },
    {
        "name": "Papua New Guinea",
        "phoneCode": "+675",
        "alpha2code": "PG",
        "alpha3code": "PNG"
    },
    {
        "name": "Paraguay",
        "phoneCode": "+595",
        "alpha2code": "PY",
        "alpha3code": "PRY"
    },
    {
        "name": "Peru",
        "phoneCode": "+51",
        "alpha2code": "PE",
        "alpha3code": "PER"
    },
    {
        "name": "Philippines",
        "phoneCode": "+63",
        "alpha2code": "PH",
        "alpha3code": "PHL"
    },
    {
        "name": "Poland",
        "phoneCode": "+48",
        "alpha2code": "PL",
        "alpha3code": "POL"
    },
    {
        "name": "Portugal",
        "phoneCode": "+351",
        "alpha2code": "PT",
        "alpha3code": "PRT"
    },
    {
        "name": "Puerto Rico",
        "phoneCode": "+1",
        "alpha2code": "PR",
        "alpha3code": "PRI"
    },
    {
        "name": "Qatar",
        "phoneCode": "+974",
        "alpha2code": "QA",
        "alpha3code": "QAT"
    },
    {
        "name": "Congo",
        "phoneCode": "+242",
        "alpha2code": "CG",
        "alpha3code": "COG"
    },
    {
        "name": "Réunion",
        "phoneCode": "+262",
        "alpha2code": "RE",
        "alpha3code": "REU"
    },
    {
        "name": "Romania",
        "phoneCode": "+40",
        "alpha2code": "RO",
        "alpha3code": "ROU"
    },
    {
        "name": "Russia",
        "phoneCode": "+7",
        "alpha2code": "RU",
        "alpha3code": "RUS"
    },
    {
        "name": "Rwanda",
        "phoneCode": "+250",
        "alpha2code": "RW",
        "alpha3code": "RWA"
    },
    {
        "name": "Saint Barthélemy",
        "phoneCode": "+590",
        "alpha2code": "BL",
        "alpha3code": "BLM"
    },
    {
        "name": "Saint Helena",
        "phoneCode": "+290",
        "alpha2code": "SH",
        "alpha3code": "SHN"
    },
    {
        "name": "Saint Kitts and Nevis",
        "phoneCode": "+1",
        "alpha2code": "KN",
        "alpha3code": "KNA"
    },
    {
        "name": "Saint Martin",
        "phoneCode": "+590",
        "alpha2code": "MF",
        "alpha3code": "MAF"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "phoneCode": "+508",
        "alpha2code": "PM",
        "alpha3code": "SPM"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "phoneCode": "+1",
        "alpha2code": "VC",
        "alpha3code": "VCT"
    },
    {
        "name": "Samoa",
        "phoneCode": "+685",
        "alpha2code": "WS",
        "alpha3code": "WSM"
    },
    {
        "name": "San Marino",
        "phoneCode": "+378",
        "alpha2code": "SM",
        "alpha3code": "SMR"
    },
    {
        "name": "São Tomé and Príncipe",
        "phoneCode": "+239",
        "alpha2code": "ST",
        "alpha3code": "STP"
    },
    {
        "name": "Saudi Arabia",
        "phoneCode": "+966",
        "alpha2code": "SA",
        "alpha3code": "SAU"
    },
    {
        "name": "Senegal",
        "phoneCode": "+221",
        "alpha2code": "SN",
        "alpha3code": "SEN"
    },
    {
        "name": "Serbia",
        "phoneCode": "+381",
        "alpha2code": "RS",
        "alpha3code": "SRB"
    },
    {
        "name": "Seychelles",
        "phoneCode": "+248",
        "alpha2code": "SC",
        "alpha3code": "SYC"
    },
    {
        "name": "Sierra Leone",
        "phoneCode": "+232",
        "alpha2code": "SL",
        "alpha3code": "SLE"
    },
    {
        "name": "Singapore",
        "phoneCode": "+65",
        "alpha2code": "SG",
        "alpha3code": "SGP"
    },
    {
        "name": "Sint Maarten (Dutch part)",
        "phoneCode": "+1",
        "alpha2code": "SX",
        "alpha3code": "SXM"
    },
    {
        "name": "Slovakia",
        "phoneCode": "+421",
        "alpha2code": "SK",
        "alpha3code": "SVK"
    },
    {
        "name": "Slovenia",
        "phoneCode": "+386",
        "alpha2code": "SI",
        "alpha3code": "SVN"
    },
    {
        "name": "Solomon Islands",
        "phoneCode": "+677",
        "alpha2code": "SB",
        "alpha3code": "SLB"
    },
    {
        "name": "Somalia",
        "phoneCode": "+252",
        "alpha2code": "SO",
        "alpha3code": "SOM"
    },
    {
        "name": "South Africa",
        "phoneCode": "+27",
        "alpha2code": "ZA",
        "alpha3code": "ZAF"
    },
    {
        "name": "S. Korea",
        "phoneCode": "+82",
        "alpha2code": "KR",
        "alpha3code": "KOR"
    },
    {
        "name": "South Sudan",
        "phoneCode": "+211",
        "alpha2code": "SS",
        "alpha3code": "SSD"
    },
    {
        "name": "Spain",
        "phoneCode": "+34",
        "alpha2code": "ES",
        "alpha3code": "ESP"
    },
    {
        "name": "Sri Lanka",
        "phoneCode": "+94",
        "alpha2code": "LK",
        "alpha3code": "LKA"
    },
    {
        "name": "Saint Lucia",
        "phoneCode": "+1",
        "alpha2code": "LC",
        "alpha3code": "LCA"
    },
    {
        "name": "Sudan",
        "phoneCode": "+249",
        "alpha2code": "SD",
        "alpha3code": "SDN"
    },
    {
        "name": "Suriname",
        "phoneCode": "+597",
        "alpha2code": "SR",
        "alpha3code": "SUR"
    },
    {
        "name": "Swaziland",
        "phoneCode": "+268",
        "alpha2code": "SZ",
        "alpha3code": "SWZ"
    },
    {
        "name": "Sweden",
        "phoneCode": "+46",
        "alpha2code": "SE",
        "alpha3code": "SWE"
    },
    {
        "name": "Switzerland",
        "phoneCode": "+41",
        "alpha2code": "CH",
        "alpha3code": "CHE"
    },
    {
        "name": "Syrian Arab Republic",
        "phoneCode": "+963",
        "alpha2code": "SY",
        "alpha3code": "SYR"
    },
    {
        "name": "Taiwan",
        "phoneCode": "+886",
        "alpha2code": "TW",
        "alpha3code": "TWN"
    },
    {
        "name": "Tajikistan",
        "phoneCode": "+992",
        "alpha2code": "TJ",
        "alpha3code": "TJK"
    },
    {
        "name": "Tanzania",
        "phoneCode": "+255",
        "alpha2code": "TZ",
        "alpha3code": "TZA"
    },
    {
        "name": "Thailand",
        "phoneCode": "+66",
        "alpha2code": "TH",
        "alpha3code": "THA"
    },
    {
        "name": "Bahamas",
        "phoneCode": "+1",
        "alpha2code": "BS",
        "alpha3code": "BHS"
    },
    {
        "name": "Gambia",
        "phoneCode": "+220",
        "alpha2code": "GM",
        "alpha3code": "GMB"
    },
    {
        "name": "Timor-Leste",
        "phoneCode": "+670",
        "alpha2code": "TL",
        "alpha3code": "TLS"
    },
    {
        "name": "Togo",
        "phoneCode": "+228",
        "alpha2code": "TG",
        "alpha3code": "TGO"
    },
    {
        "name": "Tokelau",
        "phoneCode": "+690",
        "alpha2code": "TK",
        "alpha3code": "TKL"
    },
    {
        "name": "Tonga",
        "phoneCode": "+676",
        "alpha2code": "TO",
        "alpha3code": "TON"
    },
    {
        "name": "Trinidad and Tobago",
        "phoneCode": "+1",
        "alpha2code": "TT",
        "alpha3code": "TTO"
    },
    {
        "name": "Tunisia",
        "phoneCode": "+216",
        "alpha2code": "TN",
        "alpha3code": "TUN"
    },
    {
        "name": "Turkey",
        "phoneCode": "+90",
        "alpha2code": "TR",
        "alpha3code": "TUR"
    },
    {
        "name": "Turkmenistan",
        "phoneCode": "+993",
        "alpha2code": "TM",
        "alpha3code": "TKM"
    },
    {
        "name": "Turks and Caicos Islands",
        "phoneCode": "+1",
        "alpha2code": "TC",
        "alpha3code": "TCA"
    },
    {
        "name": "Tuvalu",
        "phoneCode": "+688",
        "alpha2code": "TV",
        "alpha3code": "TUV"
    },
    {
        "name": "Uganda",
        "phoneCode": "+256",
        "alpha2code": "UG",
        "alpha3code": "UGA"
    },
    {
        "name": "Ukraine",
        "phoneCode": "+380",
        "alpha2code": "UA",
        "alpha3code": "UKR"
    },
    {
        "name": "UAE",
        "phoneCode": "+971",
        "alpha2code": "AE",
        "alpha3code": "ARE"
    },
    {
        "name": "UK",
        "phoneCode": "+44",
        "alpha2code": "GB",
        "alpha3code": "GBR"
    },
    {
        "name": "USA",
        "phoneCode": "+1",
        "alpha2code": "US",
        "alpha3code": "USA"
    },
    {
        "name": "Uruguay",
        "phoneCode": "+598",
        "alpha2code": "UY",
        "alpha3code": "URY"
    },
    {
        "name": "U.S. Virgin Islands",
        "phoneCode": "+1",
        "alpha2code": "VI",
        "alpha3code": "VIR"
    },
    {
        "name": "Uzbekistan",
        "phoneCode": "+998",
        "alpha2code": "UZ",
        "alpha3code": "UZB"
    },
    {
        "name": "Vanuatu",
        "phoneCode": "+678",
        "alpha2code": "VU",
        "alpha3code": "VUT"
    },
    {
        "name": "Vatican City",
        "phoneCode": "+39",
        "alpha2code": "VA",
        "alpha3code": "VAT"
    },
    {
        "name": "Venezuela",
        "phoneCode": "+58",
        "alpha2code": "VE",
        "alpha3code": "VEN"
    },
    {
        "name": "Vietnam",
        "phoneCode": "+84",
        "alpha2code": "VN",
        "alpha3code": "VNM"
    },
    {
        "name": "Wallis and Futuna",
        "phoneCode": "+681",
        "alpha2code": "WF",
        "alpha3code": "WLF"
    },
    {
        "name": "Yemen",
        "phoneCode": "+967",
        "alpha2code": "YE",
        "alpha3code": "YEM"
    },
    {
        "name": "Zambia",
        "phoneCode": "+260",
        "alpha2code": "ZM",
        "alpha3code": "ZMB"
    },
    {
        "name": "Zimbabwe",
        "phoneCode": "+263",
        "alpha2code": "ZW",
        "alpha3code": "ZWE"
    }
];

export default COUNTRY_CODES;