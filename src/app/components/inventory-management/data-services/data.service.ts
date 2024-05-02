import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  replacement: any;
  replacement_found: any;
  purchase_order_table: any;
  ring_fence: any;
  stock_and_scrap: any;

  getData() {
    
    let data = [
      {
        "ITEM_ID": 1001,
        "ITEM_NAME": "NUNC _1",
        "ITEM_NUMBER": "12-565-243",
        "ITEM_DESCRIPTION": "NUNC CRYOTUBE BLUE INSERT (CASE/2,000)",
        "DEMAND": 1482,
        "ON_STOCK": 1490,
        "AVAILABILITY": 1207,
        "OPEN_PO": 1833,
        "DUE_DATE": "2024-02-18T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1002,
        "ITEM_NAME": "NUNC _2",
        "ITEM_NUMBER": "24270-100",
        "ITEM_DESCRIPTION": "NUNC CRYOTUBE WHITE INSERT (CASE/2,000)",
        "DEMAND": 4591,
        "ON_STOCK": 40591,
        "AVAILABILITY": 32879,
        "OPEN_PO": 49927,
        "DUE_DATE": "2024-01-09T00:00:00",
        "ITEM_TYPE": "Kit"
    },
    {
        "ITEM_ID": 1003,
        "ITEM_NAME": "NUNC _3",
        "ITEM_NUMBER": "24270-104",
        "ITEM_DESCRIPTION": "NUNC CRYOTUBE RED INSERT (CASE/2,000)",
        "DEMAND": 65,
        "ON_STOCK": 65,
        "AVAILABILITY": 53,
        "OPEN_PO": 80,
        "DUE_DATE": "2024-04-07T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1004,
        "ITEM_NAME": "NUNC _4",
        "ITEM_NUMBER": "24270-106",
        "ITEM_DESCRIPTION": "NUNC CRYOTUBE GREEN INSERT (CASE/2,000)",
        "DEMAND": 1132,
        "ON_STOCK": 0,
        "AVAILABILITY": 0,
        "OPEN_PO": 0,
        "DUE_DATE": "2024-02-05T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1005,
        "ITEM_NAME": "NUNC _5",
        "ITEM_NUMBER": "24270-112",
        "ITEM_DESCRIPTION": "NUNC CRYOTUBE BROWN INSERT (CASE/2,000)",
        "DEMAND": 1646,
        "ON_STOCK": 0,
        "AVAILABILITY": 0,
        "OPEN_PO": 0,
        "DUE_DATE": "2024-09-11T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1006,
        "ITEM_NAME": "NUNC _6",
        "ITEM_NUMBER": "24270-116",
        "ITEM_DESCRIPTION": "NUNC CRYOTUBE GRAY INSERT (CASE/2,000)",
        "DEMAND": 993,
        "ON_STOCK": 1132,
        "AVAILABILITY": 917,
        "OPEN_PO": 1392,
        "DUE_DATE": "2024-08-22T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1007,
        "ITEM_NAME": "NUNC _7",
        "ITEM_NUMBER": "24270-118",
        "ITEM_DESCRIPTION": "NUNC CRYOTUBE PURPLE INSERT (CASE/2,000)",
        "DEMAND": 89,
        "ON_STOCK": 1646,
        "AVAILABILITY": 1333,
        "OPEN_PO": 2025,
        "DUE_DATE": "2024-02-27T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1008,
        "ITEM_NAME": "NUNC _8",
        "ITEM_NUMBER": "354755",
        "ITEM_DESCRIPTION": "NUNC CRYOTUBE WHITE INSERT (CASE/2,000)",
        "DEMAND": 5742,
        "ON_STOCK": 0,
        "AVAILABILITY": 0,
        "OPEN_PO": 0,
        "DUE_DATE": "2024-03-15T00:00:00",
        "ITEM_TYPE": "Dangerous"
    },
    {
        "ITEM_ID": 1009,
        "ITEM_NAME": "NUNC _9",
        "ITEM_NUMBER": "355018",
        "ITEM_DESCRIPTION": "NUNC CRYOTUBE GREEN INSERT (CASE/2,000)",
        "DEMAND": 11479,
        "ON_STOCK": 0,
        "AVAILABILITY": 0,
        "OPEN_PO": 0,
        "DUE_DATE": "2024-02-28T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1010,
        "ITEM_NAME": "NUNC _10",
        "ITEM_NUMBER": "375868",
        "ITEM_DESCRIPTION": "NUNC CRYOTUBE BROWN INSERT (CASE/2,000)",
        "DEMAND": 1316,
        "ON_STOCK": 0,
        "AVAILABILITY": 0,
        "OPEN_PO": 0,
        "DUE_DATE": "2024-07-02T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1011,
        "ITEM_NAME": "NUNC _11",
        "ITEM_NUMBER": "375884",
        "ITEM_DESCRIPTION": "NUNC CRYOTUBE PINK INSERT (CASE/2,000)",
        "DEMAND": 2647,
        "ON_STOCK": 0,
        "AVAILABILITY": 0,
        "OPEN_PO": 0,
        "DUE_DATE": "2024-08-11T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1012,
        "ITEM_NAME": "ACCU-",
        "ITEM_NUMBER": "3448622001",
        "ITEM_DESCRIPTION": "ACCU-CHEK SAFE-T-PRO PLUS LANCET SINGLE USE-BX/200",
        "DEMAND": 1767,
        "ON_STOCK": 993,
        "AVAILABILITY": 804,
        "OPEN_PO": 1221,
        "DUE_DATE": "2024-05-04T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1013,
        "ITEM_NAME": "PARA ",
        "ITEM_NUMBER": "900612",
        "ITEM_DESCRIPTION": "PARA PAK C&S VIAL ORANGE CAP",
        "DEMAND": 5139,
        "ON_STOCK": 89,
        "AVAILABILITY": 72,
        "OPEN_PO": 109,
        "DUE_DATE": "2024-06-11T00:00:00",
        "ITEM_TYPE": "Kit"
    },
    {
        "ITEM_ID": 1014,
        "ITEM_NAME": "1ML B",
        "ITEM_NUMBER": "BD309628",
        "ITEM_DESCRIPTION": "1ML BD LUER-LOK TIP SYRINGE",
        "DEMAND": 1539,
        "ON_STOCK": 5742,
        "AVAILABILITY": 4651,
        "OPEN_PO": 7063,
        "DUE_DATE": "2024-09-13T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1015,
        "ITEM_NAME": "BUSSE",
        "ITEM_NUMBER": "NC9566754",
        "ITEM_DESCRIPTION": "BUSSE, INC. 4\" POSI-GRIP PLASTIC FORCEPS (STERILE)",
        "DEMAND": 345,
        "ON_STOCK": 11479,
        "AVAILABILITY": 9298,
        "OPEN_PO": 14119,
        "DUE_DATE": "2024-01-30T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1016,
        "ITEM_NAME": "33G X",
        "ITEM_NUMBER": "TSK3313",
        "ITEM_DESCRIPTION": "33G X 1/2\" HYPODERMIC NEEDLE TSK STERIJECT",
        "DEMAND": 137,
        "ON_STOCK": 1316,
        "AVAILABILITY": 1066,
        "OPEN_PO": 1619,
        "DUE_DATE": "2024-10-07T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1017,
        "ITEM_NAME": "THERM",
        "ITEM_NUMBER": "14-754-555",
        "ITEM_DESCRIPTION": "THERMO SCIENTIFIC 1ML MATRIX 2D SCREW TOP TUBE W/W",
        "DEMAND": 38,
        "ON_STOCK": 2647,
        "AVAILABILITY": 2144,
        "OPEN_PO": 3256,
        "DUE_DATE": "2024-09-02T00:00:00",
        "ITEM_TYPE": "Kit"
    },
    {
        "ITEM_ID": 1018,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-568",
        "ITEM_DESCRIPTION": "GREINER 13X75MM TUBE CARRIER PREMIUM (CASE/500)",
        "DEMAND": 131,
        "ON_STOCK": 1767,
        "AVAILABILITY": 1431,
        "OPEN_PO": 2173,
        "DUE_DATE": "2024-03-31T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1019,
        "ITEM_NAME": "5ML N",
        "ITEM_NUMBER": "5000-0050",
        "ITEM_DESCRIPTION": "5ML NALGENE PP CRYOGENIC VIAL",
        "DEMAND": 392,
        "ON_STOCK": 5139,
        "AVAILABILITY": 4163,
        "OPEN_PO": 6321,
        "DUE_DATE": "2024-09-23T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1020,
        "ITEM_NAME": "5ML N",
        "ITEM_NUMBER": "66008-732",
        "ITEM_DESCRIPTION": "5ML NALGENE PP CRYOGENIC VIAL",
        "DEMAND": 6,
        "ON_STOCK": 1539,
        "AVAILABILITY": 1247,
        "OPEN_PO": 1893,
        "DUE_DATE": "2024-09-18T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1021,
        "ITEM_NAME": "GIBCO",
        "ITEM_NUMBER": "14190-144",
        "ITEM_DESCRIPTION": "GIBCO DPBS, NO CALCIUM, NO MAGNESIUM - 500ML",
        "DEMAND": 28,
        "ON_STOCK": 0,
        "AVAILABILITY": 0,
        "OPEN_PO": 0,
        "DUE_DATE": "2024-08-10T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1022,
        "ITEM_NAME": "AZENT",
        "ITEM_NUMBER": "65-7641",
        "ITEM_DESCRIPTION": "AZENTA 1.9ML ORANGE TOP 2D BARCODE TUBE (CASE/480)",
        "DEMAND": 53,
        "ON_STOCK": 1370,
        "AVAILABILITY": 1110,
        "OPEN_PO": 1685,
        "DUE_DATE": "2024-06-01T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1023,
        "ITEM_NAME": "COMMO",
        "ITEM_NUMBER": "2544208",
        "ITEM_DESCRIPTION": "COMMODE SPECIMEN COLLECTION SYSTEM W/RACK & LID",
        "DEMAND": 3998,
        "ON_STOCK": 3000,
        "AVAILABILITY": 2430,
        "OPEN_PO": 3690,
        "DUE_DATE": "2024-03-25T00:00:00",
        "ITEM_TYPE": "Dangerous"
    },
    {
        "ITEM_ID": 1024,
        "ITEM_NAME": "ALCOH",
        "ITEM_NUMBER": "853",
        "ITEM_DESCRIPTION": "ALCOHOL PREP PADS",
        "DEMAND": 144,
        "ON_STOCK": 11963,
        "AVAILABILITY": 9690,
        "OPEN_PO": 14714,
        "DUE_DATE": "2024-04-19T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1025,
        "ITEM_NAME": "DUKAL",
        "ITEM_NUMBER": "95041-714",
        "ITEM_DESCRIPTION": "DUKAL ALCOHOL PREP PADS",
        "DEMAND": 18,
        "ON_STOCK": 16032,
        "AVAILABILITY": 12986,
        "OPEN_PO": 19719,
        "DUE_DATE": "2024-02-27T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1026,
        "ITEM_NAME": "CORNI",
        "ITEM_NUMBER": "66021-942",
        "ITEM_DESCRIPTION": "CORNING 2ML ROUND BOTTOM, SELF-STANDING CRYOTUBE",
        "DEMAND": 3671,
        "ON_STOCK": 4765,
        "AVAILABILITY": 3860,
        "OPEN_PO": 5861,
        "DUE_DATE": "2024-05-19T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1027,
        "ITEM_NAME": "12-PA",
        "ITEM_NUMBER": "Mar-53",
        "ITEM_DESCRIPTION": "12-PANEL INSTANT VIEW CARD DRUG SCREEN",
        "DEMAND": 233,
        "ON_STOCK": 670,
        "AVAILABILITY": 543,
        "OPEN_PO": 824,
        "DUE_DATE": "2024-06-04T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1028,
        "ITEM_NAME": "THERM",
        "ITEM_NUMBER": "14-754-585",
        "ITEM_DESCRIPTION": "THERMO SCIENTIFIC 0.5ML MATRIX SCREW TOP TUBE",
        "DEMAND": 1661,
        "ON_STOCK": 3592,
        "AVAILABILITY": 2910,
        "OPEN_PO": 4418,
        "DUE_DATE": "2024-02-15T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1029,
        "ITEM_NAME": "1.8ML",
        "ITEM_NUMBER": "363401",
        "ITEM_DESCRIPTION": "1.8ML NUNC CRYOTUBE #363401",
        "DEMAND": 5366,
        "ON_STOCK": 88,
        "AVAILABILITY": 71,
        "OPEN_PO": 108,
        "DUE_DATE": "2024-07-01T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1030,
        "ITEM_NAME": "10 ML",
        "ITEM_NUMBER": "55.475.300",
        "ITEM_DESCRIPTION": "10 ML PLASTIC SARSTEDT 13 X 75MM,ROUND BOTTOM, NON",
        "DEMAND": 249,
        "ON_STOCK": 4301,
        "AVAILABILITY": 3484,
        "OPEN_PO": 5290,
        "DUE_DATE": "2024-09-04T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1031,
        "ITEM_NAME": "PUSH ",
        "ITEM_NUMBER": "65.806.300",
        "ITEM_DESCRIPTION": "PUSH CAP,13MM, TRANSPARENT, LD-PE, SARSTEDT",
        "DEMAND": 588,
        "ON_STOCK": 4,
        "AVAILABILITY": 3,
        "OPEN_PO": 5,
        "DUE_DATE": "2024-05-27T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1032,
        "ITEM_NAME": "1.8ML",
        "ITEM_NUMBER": "66021-985-PACK",
        "ITEM_DESCRIPTION": "1.8ML NUNC CRYOTUBE #363401 (PACK/500)",
        "DEMAND": 2888,
        "ON_STOCK": 3840,
        "AVAILABILITY": 3110,
        "OPEN_PO": 4723,
        "DUE_DATE": "2024-05-05T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1033,
        "ITEM_NAME": "MICRO",
        "ITEM_NUMBER": "961836",
        "ITEM_DESCRIPTION": "MICROALBUMIN/CREATININE, REAGENT URINE TEST STRIP",
        "DEMAND": 482,
        "ON_STOCK": 3470,
        "AVAILABILITY": 2811,
        "OPEN_PO": 4268,
        "DUE_DATE": "2024-01-21T00:00:00",
        "ITEM_TYPE": "Kit"
    },
    {
        "ITEM_ID": 1034,
        "ITEM_NAME": "VWR 1",
        "ITEM_NUMBER": "16001-172",
        "ITEM_DESCRIPTION": "VWR 1.5ML DISPOSABLE GRADUATED PIPETS",
        "DEMAND": 924,
        "ON_STOCK": 3728,
        "AVAILABILITY": 3020,
        "OPEN_PO": 4585,
        "DUE_DATE": "2024-03-27T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1035,
        "ITEM_NAME": "1ML C",
        "ITEM_NUMBER": "68-1004-10",
        "ITEM_DESCRIPTION": "1ML CLEAR 2D BARCODE EXT THREAD PP SCREW TOP",
        "DEMAND": 16,
        "ON_STOCK": 3469,
        "AVAILABILITY": 2810,
        "OPEN_PO": 4267,
        "DUE_DATE": "2024-03-23T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1036,
        "ITEM_NAME": "VWR R",
        "ITEM_NUMBER": "76319-862",
        "ITEM_DESCRIPTION": "VWR RED 1.5 QUART FLIP TOP SHARPS CONTAINER",
        "DEMAND": 2265,
        "ON_STOCK": 4782,
        "AVAILABILITY": 3873,
        "OPEN_PO": 5882,
        "DUE_DATE": "2024-01-08T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1037,
        "ITEM_NAME": "HOLOG",
        "ITEM_NUMBER": "504415",
        "ITEM_DESCRIPTION": "HOLOGIC TRANSPORT TUBE CAP (5.5ML) (BAG/100)",
        "DEMAND": 21566,
        "ON_STOCK": 287,
        "AVAILABILITY": 232,
        "OPEN_PO": 353,
        "DUE_DATE": "2024-06-10T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1038,
        "ITEM_NAME": "HOLOG",
        "ITEM_NUMBER": "FAB-18184",
        "ITEM_DESCRIPTION": "HOLOGIC SPECIMEN ALIQUOT 5.5ML TUBE (BAG/100)",
        "DEMAND": 7548,
        "ON_STOCK": 11391,
        "AVAILABILITY": 9227,
        "OPEN_PO": 14011,
        "DUE_DATE": "2024-09-01T00:00:00",
        "ITEM_TYPE": "Kit"
    },
    {
        "ITEM_ID": 1039,
        "ITEM_NAME": "NALGE",
        "ITEM_NUMBER": "03-313-80A",
        "ITEM_DESCRIPTION": "NALGENE 0.5ML NATURAL PPCO MICRO TUBE ONLY",
        "DEMAND": 2878,
        "ON_STOCK": 463,
        "AVAILABILITY": 375,
        "OPEN_PO": 569,
        "DUE_DATE": "2024-08-26T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1040,
        "ITEM_NAME": "NALGE",
        "ITEM_NUMBER": "03-313-81A",
        "ITEM_DESCRIPTION": "NALGENE 0.5ML NATURAL PPCO MICRO  CAP ONLY",
        "DEMAND": 3426,
        "ON_STOCK": 23104,
        "AVAILABILITY": 18714,
        "OPEN_PO": 28418,
        "DUE_DATE": "2024-05-26T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1041,
        "ITEM_NAME": "PIPET",
        "ITEM_NUMBER": "21377604",
        "ITEM_DESCRIPTION": "PIPETTER TIPS 100UL - 1,000UL FINNPIPETTE",
        "DEMAND": 1641,
        "ON_STOCK": 411,
        "AVAILABILITY": 333,
        "OPEN_PO": 506,
        "DUE_DATE": "2024-12-11T00:00:00",
        "ITEM_TYPE": "Kit"
    },
    {
        "ITEM_ID": 1042,
        "ITEM_NAME": "PURIT",
        "ITEM_NUMBER": "62505-011",
        "ITEM_DESCRIPTION": "PURITAN TONGUE DEPRESSOR, 6\" X 0.75\"",
        "DEMAND": 44738,
        "ON_STOCK": 58000,
        "AVAILABILITY": 46980,
        "OPEN_PO": 71340,
        "DUE_DATE": "2024-06-12T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1043,
        "ITEM_NAME": "30 ML",
        "ITEM_NUMBER": "75810-294",
        "ITEM_DESCRIPTION": "30 ML  PRE-FILLED PJ SPECIMEN JAR- 10 % FORMALIN",
        "DEMAND": 16533,
        "ON_STOCK": 1000,
        "AVAILABILITY": 810,
        "OPEN_PO": 1230,
        "DUE_DATE": "2024-05-19T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1044,
        "ITEM_NAME": "60ML ",
        "ITEM_NUMBER": "23316155",
        "ITEM_DESCRIPTION": "60ML BLUE BIOPSY BOTTLE (W/30ML OF 10% FORMALIN)",
        "DEMAND": 6789,
        "ON_STOCK": 5197,
        "AVAILABILITY": 3950,
        "OPEN_PO": 6392,
        "DUE_DATE": "2024-10-27T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1045,
        "ITEM_NAME": "40 ML",
        "ITEM_NUMBER": "89213-158",
        "ITEM_DESCRIPTION": "40 ML SECURTAINER LL SPECIMEN CONTAINER W/TAMPER",
        "DEMAND": 1381,
        "ON_STOCK": 2242,
        "AVAILABILITY": 1704,
        "OPEN_PO": 2758,
        "DUE_DATE": "2024-08-22T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1046,
        "ITEM_NAME": "WHEAT",
        "ITEM_NUMBER": "02-912-737",
        "ITEM_DESCRIPTION": "WHEATON 2ML NATURAL CRYOELITE CRYOVIAL, STERILE",
        "DEMAND": 198,
        "ON_STOCK": 2801,
        "AVAILABILITY": 2129,
        "OPEN_PO": 3445,
        "DUE_DATE": "2024-05-24T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1047,
        "ITEM_NAME": "DRUG ",
        "ITEM_NUMBER": "CCP04200",
        "ITEM_DESCRIPTION": "DRUG SCREEN BREATHSCAN ALCOHOL DETECTOR .04%",
        "DEMAND": 759,
        "ON_STOCK": 39000,
        "AVAILABILITY": 29640,
        "OPEN_PO": 47970,
        "DUE_DATE": "2024-10-09T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1048,
        "ITEM_NAME": "2 L D",
        "ITEM_NUMBER": "7002000",
        "ITEM_DESCRIPTION": "2 L DIAMOND REAL SEAL WIDE MOUTH PP BOTTLE",
        "DEMAND": 59,
        "ON_STOCK": 652,
        "AVAILABILITY": 496,
        "OPEN_PO": 802,
        "DUE_DATE": "2024-02-06T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1049,
        "ITEM_NAME": "FOLEY",
        "ITEM_NUMBER": "147899",
        "ITEM_DESCRIPTION": "FOLEY CATHETER BARDIA 2-WAY STANDARD TIP 30CC",
        "DEMAND": 935,
        "ON_STOCK": 170,
        "AVAILABILITY": 129,
        "OPEN_PO": 209,
        "DUE_DATE": "2024-07-21T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1050,
        "ITEM_NAME": "SIMPO",
        "ITEM_NUMBER": "89499-606",
        "ITEM_DESCRIPTION": "SIMPORT 0.5ML CLEAR MICROCENTRIFUGE TUBE W/SCREW C",
        "DEMAND": 1188,
        "ON_STOCK": 4436,
        "AVAILABILITY": 3371,
        "OPEN_PO": 5456,
        "DUE_DATE": "2024-06-29T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1051,
        "ITEM_NAME": "DISPO",
        "ITEM_NUMBER": "97-2012",
        "ITEM_DESCRIPTION": "DISPOSABLE NASOPHARYNGEAL SWAB (BAG/100)",
        "DEMAND": 1424,
        "ON_STOCK": 993,
        "AVAILABILITY": 755,
        "OPEN_PO": 1221,
        "DUE_DATE": "2024-12-23T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1052,
        "ITEM_NAME": "TEST ",
        "ITEM_NUMBER": "60941-594",
        "ITEM_DESCRIPTION": "TEST TUBE RACK (24 PLACE, 15-16MM)",
        "DEMAND": 17,
        "ON_STOCK": 54,
        "AVAILABILITY": 41,
        "OPEN_PO": 66,
        "DUE_DATE": "2024-10-06T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1053,
        "ITEM_NAME": "SIMPO",
        "ITEM_NUMBER": "T334-2",
        "ITEM_DESCRIPTION": "SIMPORT 0.5ML CLEAR MICROCENTRIFUGE TUBE W/SCREW C",
        "DEMAND": 286,
        "ON_STOCK": 200,
        "AVAILABILITY": 152,
        "OPEN_PO": 246,
        "DUE_DATE": "2024-07-21T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1054,
        "ITEM_NAME": "SKLAR",
        "ITEM_NUMBER": "Jun-10",
        "ITEM_DESCRIPTION": "SKLAR DISPOSABLE #10 SCALPEL (STERILE)",
        "DEMAND": 133,
        "ON_STOCK": 1043,
        "AVAILABILITY": 793,
        "OPEN_PO": 1283,
        "DUE_DATE": "2024-07-05T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1055,
        "ITEM_NAME": "MILTE",
        "ITEM_NUMBER": "12-460-409",
        "ITEM_DESCRIPTION": "MILTEX 4MM DISPOSABLE BIOPSY PUNCH",
        "DEMAND": 81,
        "ON_STOCK": 992,
        "AVAILABILITY": 754,
        "OPEN_PO": 1220,
        "DUE_DATE": "2024-03-10T00:00:00",
        "ITEM_TYPE": "Kit"
    },
    {
        "ITEM_ID": 1056,
        "ITEM_NAME": "VWR 2",
        "ITEM_NUMBER": "20170-170",
        "ITEM_DESCRIPTION": "VWR 2ML MICRO CENTRIFUGE TUBE (PACK/500)",
        "DEMAND": 11728,
        "ON_STOCK": 104,
        "AVAILABILITY": 79,
        "OPEN_PO": 128,
        "DUE_DATE": "2024-01-01T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1057,
        "ITEM_NAME": "THERM",
        "ITEM_NUMBER": "3744",
        "ITEM_DESCRIPTION": "THERMO SCIENTIFIC 0.5ML MATRIX SCREW TOP TUBE RACK",
        "DEMAND": 13,
        "ON_STOCK": 181,
        "AVAILABILITY": 138,
        "OPEN_PO": 223,
        "DUE_DATE": "2024-03-15T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1058,
        "ITEM_NAME": "BEL-A",
        "ITEM_NUMBER": "47733-014",
        "ITEM_DESCRIPTION": "BEL-ART STERILEWARE STERILE MINI TONGS (CASE/25)",
        "DEMAND": 496,
        "ON_STOCK": 62,
        "AVAILABILITY": 47,
        "OPEN_PO": 76,
        "DUE_DATE": "2024-09-28T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1059,
        "ITEM_NAME": "SALIV",
        "ITEM_NUMBER": "51.1534",
        "ITEM_DESCRIPTION": "SALIVETTE TUBE W/COTTON SWAB",
        "DEMAND": 676,
        "ON_STOCK": 1368,
        "AVAILABILITY": 1040,
        "OPEN_PO": 1683,
        "DUE_DATE": "2024-04-01T00:00:00",
        "ITEM_TYPE": "Dangerous"
    },
    {
        "ITEM_ID": 1060,
        "ITEM_NAME": "VWR 2",
        "ITEM_NUMBER": "89004-298",
        "ITEM_DESCRIPTION": "VWR 2ML CLEAR MICROCENTRIFUGE TUBE W/GREEN CAP",
        "DEMAND": 967,
        "ON_STOCK": 190,
        "AVAILABILITY": 144,
        "OPEN_PO": 234,
        "DUE_DATE": "2024-04-08T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1061,
        "ITEM_NAME": "D-SQU",
        "ITEM_NUMBER": "D100",
        "ITEM_DESCRIPTION": "D-SQUAME STAND SAMPLING DISC, SHEET 10",
        "DEMAND": 5398,
        "ON_STOCK": 6294,
        "AVAILABILITY": 4783,
        "OPEN_PO": 7742,
        "DUE_DATE": "2024-06-06T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1062,
        "ITEM_NAME": "D-SQU",
        "ITEM_NUMBER": "D120.",
        "ITEM_DESCRIPTION": "D-SQUAME STANDARD STORAGE CARDS (REGULAR STOCK)",
        "DEMAND": 3366,
        "ON_STOCK": 1781,
        "AVAILABILITY": 1354,
        "OPEN_PO": 2191,
        "DUE_DATE": "2024-01-09T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1063,
        "ITEM_NAME": "ACU-P",
        "ITEM_NUMBER": "P550",
        "ITEM_DESCRIPTION": "ACU-PUNCH 5MM",
        "DEMAND": 146,
        "ON_STOCK": 4925,
        "AVAILABILITY": 3743,
        "OPEN_PO": 6058,
        "DUE_DATE": "2024-05-09T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1064,
        "ITEM_NAME": "DIAMO",
        "ITEM_NUMBER": "1358W",
        "ITEM_DESCRIPTION": "DIAMOND WHITE CHARGED GLASS SLIDES, WHITE (BOX/72)",
        "DEMAND": 1244,
        "ON_STOCK": 72,
        "AVAILABILITY": 55,
        "OPEN_PO": 89,
        "DUE_DATE": "2024-04-14T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1065,
        "ITEM_NAME": "STREC",
        "ITEM_NUMBER": "240360",
        "ITEM_DESCRIPTION": "STRECK 1.2ML ESR-VACUUM TUBE (BOX/100)",
        "DEMAND": 562,
        "ON_STOCK": 3167,
        "AVAILABILITY": 2407,
        "OPEN_PO": 3895,
        "DUE_DATE": "2024-04-03T00:00:00",
        "ITEM_TYPE": "Dangerous"
    },
    {
        "ITEM_ID": 1066,
        "ITEM_NAME": "#SPON",
        "ITEM_NUMBER": "305819-GENASCENCE",
        "ITEM_DESCRIPTION": "#SPONSOR# GENASCENCE BD TIP CASE (BOX/200)",
        "DEMAND": 16825,
        "ON_STOCK": 188,
        "AVAILABILITY": 143,
        "OPEN_PO": 231,
        "DUE_DATE": "2024-03-26T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1067,
        "ITEM_NAME": "#SPON",
        "ITEM_NUMBER": "309659-GENASCENCE",
        "ITEM_DESCRIPTION": "#SPONSOR# GENASCENCE BD 1ML SLIP-TIP DISPOSABLE TU",
        "DEMAND": 69846,
        "ON_STOCK": 14900,
        "AVAILABILITY": 11324,
        "OPEN_PO": 18327,
        "DUE_DATE": "2024-08-14T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1068,
        "ITEM_NAME": "DEVON",
        "ITEM_NUMBER": "31146010",
        "ITEM_DESCRIPTION": "DEVON SURGICAL SITE MINI-MARKER",
        "DEMAND": 11639,
        "ON_STOCK": 6100,
        "AVAILABILITY": 4636,
        "OPEN_PO": 7503,
        "DUE_DATE": "2024-03-01T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1069,
        "ITEM_NAME": "DYNAR",
        "ITEM_NUMBER": "4409",
        "ITEM_DESCRIPTION": "DYNAREX STERILE DISPOSABLE TOWEL DRAPE",
        "DEMAND": 21,
        "ON_STOCK": 117,
        "AVAILABILITY": 89,
        "OPEN_PO": 144,
        "DUE_DATE": "2024-02-08T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1070,
        "ITEM_NAME": "#SPON",
        "ITEM_NUMBER": "72.694.600-GENASCENCE",
        "ITEM_DESCRIPTION": "#SPONSOR# GENASCENCE SARSTEDT 2ML CLEAR PCR MICRO ",
        "DEMAND": 9545,
        "ON_STOCK": 2197,
        "AVAILABILITY": 1670,
        "OPEN_PO": 2702,
        "DUE_DATE": "2024-03-24T00:00:00",
        "ITEM_TYPE": "Kit"
    },
    {
        "ITEM_ID": 1071,
        "ITEM_NAME": "SARST",
        "ITEM_NUMBER": "94420G",
        "ITEM_DESCRIPTION": "SARSTEDT 13ML BLUE URINE MYOGLOBIN W/10% NAHCO3 PL",
        "DEMAND": 1489,
        "ON_STOCK": 27548,
        "AVAILABILITY": 20936,
        "OPEN_PO": 33884,
        "DUE_DATE": "2024-01-11T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1072,
        "ITEM_NAME": "#SPON",
        "ITEM_NUMBER": "SCAT-292-0/2SC",
        "ITEM_DESCRIPTION": "#SPONSOR# MITSUBISHI 2ML VIAL WITH 150UL OF 5% CIT",
        "DEMAND": 25,
        "ON_STOCK": 25440,
        "AVAILABILITY": 19334,
        "OPEN_PO": 31291,
        "DUE_DATE": "2024-10-22T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1073,
        "ITEM_NAME": "SIGMA",
        "ITEM_NUMBER": "T8154-20ML",
        "ITEM_DESCRIPTION": "SIGMA ALDRICH 20ML TRYPAN BLUE SOLUTION",
        "DEMAND": 164,
        "ON_STOCK": 5632,
        "AVAILABILITY": 4280,
        "OPEN_PO": 6927,
        "DUE_DATE": "2024-04-28T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1074,
        "ITEM_NAME": "SOCOR",
        "ITEM_NUMBER": "W810315",
        "ITEM_DESCRIPTION": "SOCOREX ACURA SINGLE-CHANNEL PIPETTORS 200-000 UL",
        "DEMAND": 5339,
        "ON_STOCK": 65950,
        "AVAILABILITY": 50122,
        "OPEN_PO": 81119,
        "DUE_DATE": "2024-05-28T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1075,
        "ITEM_NAME": "VWR 1",
        "ITEM_NUMBER": "16466-062",
        "ITEM_DESCRIPTION": "VWR 1.5ML STERILE MICROCENTRIFUGE TUBE (PACK/500)",
        "DEMAND": 7422,
        "ON_STOCK": 4609,
        "AVAILABILITY": 3503,
        "OPEN_PO": 5669,
        "DUE_DATE": "2024-05-28T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1076,
        "ITEM_NAME": "MULTI",
        "ITEM_NUMBER": "23-042305",
        "ITEM_DESCRIPTION": "MULTISTIX 10SG URINALYSIS REAGENT TEST STRIPS",
        "DEMAND": 1277,
        "ON_STOCK": 109,
        "AVAILABILITY": 83,
        "OPEN_PO": 134,
        "DUE_DATE": "2024-02-23T00:00:00",
        "ITEM_TYPE": "Dangerous"
    },
    {
        "ITEM_ID": 1077,
        "ITEM_NAME": "4.0 M",
        "ITEM_NUMBER": "MP52440Z20",
        "ITEM_DESCRIPTION": "4.0 ML TRACKER 2D BARCODED SCREW CAP TUBE",
        "DEMAND": 6647,
        "ON_STOCK": 20,
        "AVAILABILITY": 15,
        "OPEN_PO": 25,
        "DUE_DATE": "2024-04-08T00:00:00",
        "ITEM_TYPE": "Kit"
    },
    {
        "ITEM_ID": 1078,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "456018P",
        "ITEM_DESCRIPTION": "GREINER 5ML GOLD/GOLD Z SERUM CLOT ACTIVATOR VACU",
        "DEMAND": 7972,
        "ON_STOCK": 3280,
        "AVAILABILITY": 2493,
        "OPEN_PO": 4034,
        "DUE_DATE": "2024-05-01T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1079,
        "ITEM_NAME": "ROCHE",
        "ITEM_NUMBER": "7832397001",
        "ITEM_DESCRIPTION": "ROCHE 8.5ML CELL-FREE DNA COLLECTION TUBE (RUO)",
        "DEMAND": 4547,
        "ON_STOCK": 3208,
        "AVAILABILITY": 2438,
        "OPEN_PO": 3946,
        "DUE_DATE": "2024-03-14T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1080,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22040035",
        "ITEM_DESCRIPTION": "GREINER 3ML LAVENDER/BLACK K3 EDTA VACUETTE TUBE",
        "DEMAND": 42953,
        "ON_STOCK": 1100,
        "AVAILABILITY": 836,
        "OPEN_PO": 1353,
        "DUE_DATE": "2024-07-09T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1081,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "454030",
        "ITEM_DESCRIPTION": "GREINER 4ML GREEN/GREEN SODIUM HEPARIN VACUETTE TU",
        "DEMAND": 4573,
        "ON_STOCK": 767,
        "AVAILABILITY": 583,
        "OPEN_PO": 943,
        "DUE_DATE": "2024-02-07T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1082,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "456088",
        "ITEM_DESCRIPTION": "GREINER 6ML GREEN/BLACK LITHIUM HEPARIN VACUETTE T",
        "DEMAND": 653,
        "ON_STOCK": 2734,
        "AVAILABILITY": 2078,
        "OPEN_PO": 3363,
        "DUE_DATE": "2024-06-02T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1083,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "95057-217",
        "ITEM_DESCRIPTION": "GREINER 5ML GREEN/YELLOW LITHIUM HEPARIN VACUETTE ",
        "DEMAND": 2688,
        "ON_STOCK": 90,
        "AVAILABILITY": 68,
        "OPEN_PO": 111,
        "DUE_DATE": "2024-01-23T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1084,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22040101",
        "ITEM_DESCRIPTION": "GREINER 2ML LAVENDER/WHITE K3 EDTA VACUETTE TUBE",
        "DEMAND": 348,
        "ON_STOCK": 554,
        "AVAILABILITY": 421,
        "OPEN_PO": 803,
        "DUE_DATE": "2024-04-15T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1085,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "454237",
        "ITEM_DESCRIPTION": "GREINER 2ML GREEN/WHITE LITHIUM HEPARIN VACUETTE T",
        "DEMAND": 46,
        "ON_STOCK": 11670,
        "AVAILABILITY": 8869,
        "OPEN_PO": 16922,
        "DUE_DATE": "2024-01-19T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1086,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "454513",
        "ITEM_DESCRIPTION": "GREINER 3ML PINK FC MIX TUBE VACUETTE (EU ONLY)",
        "DEMAND": 56,
        "ON_STOCK": 86,
        "AVAILABILITY": 65,
        "OPEN_PO": 125,
        "DUE_DATE": "2024-01-03T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1087,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "455051",
        "ITEM_DESCRIPTION": "GREINER 9ML GREEN/BLACK SODIUM HEPARIN VACUETTE TU",
        "DEMAND": 9324,
        "ON_STOCK": 85400,
        "AVAILABILITY": 64904,
        "OPEN_PO": 123830,
        "DUE_DATE": "2024-06-26T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1088,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "95057-229",
        "ITEM_DESCRIPTION": "GREINER 6ML LAVENDER/BLACK K3 EDTA VACUETTE TUBE",
        "DEMAND": 23529,
        "ON_STOCK": 50880,
        "AVAILABILITY": 38669,
        "OPEN_PO": 73776,
        "DUE_DATE": "2024-09-28T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1089,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "95057-367",
        "ITEM_DESCRIPTION": "GREINER 3ML WHITE/BLACK Z NO ADDITIVE VACUETTE TUB",
        "DEMAND": 1612,
        "ON_STOCK": 1204,
        "AVAILABILITY": 915,
        "OPEN_PO": 1746,
        "DUE_DATE": "2024-04-20T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1090,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22040037",
        "ITEM_DESCRIPTION": "GREINER 9ML LAVENDER/BLACK K3 EDTA VACUETTE TUBE",
        "DEMAND": 12947,
        "ON_STOCK": 1669,
        "AVAILABILITY": 1268,
        "OPEN_PO": 2420,
        "DUE_DATE": "2024-06-03T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1091,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-093",
        "ITEM_DESCRIPTION": "GREINER 3ML LAVENDER/BLACK K2 EDTA VACUETTE TUBE",
        "DEMAND": 468,
        "ON_STOCK": 2000,
        "AVAILABILITY": 1520,
        "OPEN_PO": 2900,
        "DUE_DATE": "2024-03-08T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1092,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "95057-365",
        "ITEM_DESCRIPTION": "GREINER 2.0ML RED/WHITE SERUM GEL W/CLOT ACTIVATOR",
        "DEMAND": 93,
        "ON_STOCK": 17,
        "AVAILABILITY": 13,
        "OPEN_PO": 25,
        "DUE_DATE": "2024-01-01T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1093,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-542",
        "ITEM_DESCRIPTION": "GREINER 2.5ML RED/WHITE Z SERUM W/CLOT ACTIVATOR V",
        "DEMAND": 11968,
        "ON_STOCK": 184,
        "AVAILABILITY": 140,
        "OPEN_PO": 267,
        "DUE_DATE": "2024-10-13T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1094,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "10755-702",
        "ITEM_DESCRIPTION": "GREINER 1ML GREEN/WHITE LITHIUM HEPARIN VACUETTE T",
        "DEMAND": 5837,
        "ON_STOCK": 1367,
        "AVAILABILITY": 1039,
        "OPEN_PO": 1982,
        "DUE_DATE": "2024-04-05T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1095,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-307",
        "ITEM_DESCRIPTION": "GREINER 2ML LAVENDER/WHITE K2 EDTA VACUETTE TUBE",
        "DEMAND": 12397,
        "ON_STOCK": 669,
        "AVAILABILITY": 508,
        "OPEN_PO": 970,
        "DUE_DATE": "2024-06-03T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1096,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "454034",
        "ITEM_DESCRIPTION": "GREINER 1ML LAVENDER/WHITE K3 EDTA VACUETTE TUBE",
        "DEMAND": 14295,
        "ON_STOCK": 41494,
        "AVAILABILITY": 31535,
        "OPEN_PO": 60166,
        "DUE_DATE": "2024-02-18T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1097,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "454052",
        "ITEM_DESCRIPTION": "GREINER 1ML LAVENDER/WHITE K2 EDTA VACUETTE TUBE",
        "DEMAND": 584,
        "ON_STOCK": 97,
        "AVAILABILITY": 74,
        "OPEN_PO": 141,
        "DUE_DATE": "2024-09-29T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1098,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "454238",
        "ITEM_DESCRIPTION": "GREINER 2ML GRAY/WHITE SODIUM FLUORIDE VACUETTE TU",
        "DEMAND": 7859,
        "ON_STOCK": 108,
        "AVAILABILITY": 82,
        "OPEN_PO": 157,
        "DUE_DATE": "2024-03-10T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1099,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "95057-385",
        "ITEM_DESCRIPTION": "GREINER 3.5ML GOLD/GOLD Z SERUM CLOT ACTIVATOR VAC",
        "DEMAND": 2,
        "ON_STOCK": 15,
        "AVAILABILITY": 11,
        "OPEN_PO": 22,
        "DUE_DATE": "2024-04-14T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1100,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-546",
        "ITEM_DESCRIPTION": "GREINER 3.5ML GOLD/GOLD Z SERUM CLOT ACTIVATOR VAC",
        "DEMAND": 18383,
        "ON_STOCK": 94,
        "AVAILABILITY": 71,
        "OPEN_PO": 136,
        "DUE_DATE": "2024-09-22T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1101,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "456028",
        "ITEM_DESCRIPTION": "GREINER 6ML GREEN/GREEN SODIUM HEPARIN VACUETTE T",
        "DEMAND": 7217,
        "ON_STOCK": 495,
        "AVAILABILITY": 376,
        "OPEN_PO": 718,
        "DUE_DATE": "2024-09-22T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1102,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "95057-413",
        "ITEM_DESCRIPTION": "GREINER 6ML GREEN/GREEN SODIUM HEPARIN VACUETTE T",
        "DEMAND": 874,
        "ON_STOCK": 6500,
        "AVAILABILITY": 4940,
        "OPEN_PO": 9425,
        "DUE_DATE": "2024-01-28T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1103,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-161",
        "ITEM_DESCRIPTION": "GREINER 6ML LAVENDER/BLACK K2 EDTA VACUETTE TUBE",
        "DEMAND": 9276,
        "ON_STOCK": 15477,
        "AVAILABILITY": 11763,
        "OPEN_PO": 22442,
        "DUE_DATE": "2024-07-11T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1104,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-024",
        "ITEM_DESCRIPTION": "GREINER 9ML GREEN/BLACK LITHIUM HEPARIN VACUETTE T",
        "DEMAND": 316,
        "ON_STOCK": 25600,
        "AVAILABILITY": 19456,
        "OPEN_PO": 37120,
        "DUE_DATE": "2024-10-27T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1105,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22040036",
        "ITEM_DESCRIPTION": "GREINER 4ML LAVENDER/BLACK K3 EDTA VACUETTE TUBE",
        "DEMAND": 3353,
        "ON_STOCK": 784,
        "AVAILABILITY": 596,
        "OPEN_PO": 1137,
        "DUE_DATE": "2024-08-29T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1106,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-095",
        "ITEM_DESCRIPTION": "GREINER 4ML LAVENDER/BLACK K2 EDTA VACUETTE TUBE",
        "DEMAND": 37448,
        "ON_STOCK": 6625,
        "AVAILABILITY": 5035,
        "OPEN_PO": 9606,
        "DUE_DATE": "2024-07-25T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1107,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-536",
        "ITEM_DESCRIPTION": "GREINER 3.5ML RED/YELLOW Z SERUM W/CLOT ACTIVATOR",
        "DEMAND": 32398,
        "ON_STOCK": 3298,
        "AVAILABILITY": 2506,
        "OPEN_PO": 4782,
        "DUE_DATE": "2024-03-05T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1108,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "454021",
        "ITEM_DESCRIPTION": "GREINER 4ML LAVENDER/BLACK K3 EDTA VACUETTE TUBE",
        "DEMAND": 568,
        "ON_STOCK": 15000,
        "AVAILABILITY": 11400,
        "OPEN_PO": 21750,
        "DUE_DATE": "2024-04-10T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1109,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "455084",
        "ITEM_DESCRIPTION": "GREINER 9ML GREEN/BLACK LITHIUM HEPARIN VACUETTE T",
        "DEMAND": 52,
        "ON_STOCK": 12047,
        "AVAILABILITY": 9156,
        "OPEN_PO": 17468,
        "DUE_DATE": "2024-02-08T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1110,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-045",
        "ITEM_DESCRIPTION": "GREINER 2ML LIGHT BLUE/WHITE SODIUM CITRATE VACUET",
        "DEMAND": 69399,
        "ON_STOCK": 550,
        "AVAILABILITY": 418,
        "OPEN_PO": 798,
        "DUE_DATE": "2024-08-16T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1111,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-046",
        "ITEM_DESCRIPTION": "GREINER 3.5ML BLUE/BLACK SODIUM CITRATE VACUETTE T",
        "DEMAND": 4574,
        "ON_STOCK": 7344,
        "AVAILABILITY": 5581,
        "OPEN_PO": 10649,
        "DUE_DATE": "2024-06-09T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1112,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "450085",
        "ITEM_DESCRIPTION": "GREINER 21G X .75\" NEEDLE W/7.5\" TUBE & HOLDER, ST",
        "DEMAND": 3,
        "ON_STOCK": 1202,
        "AVAILABILITY": 914,
        "OPEN_PO": 1743,
        "DUE_DATE": "2024-02-04T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1113,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "450095",
        "ITEM_DESCRIPTION": "GREINER 21G SAFETY BLOOD COLLECTION SET W/HOLDER",
        "DEMAND": 186,
        "ON_STOCK": 975,
        "AVAILABILITY": 741,
        "OPEN_PO": 1414,
        "DUE_DATE": "2024-09-15T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1114,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "450096",
        "ITEM_DESCRIPTION": "GREINER 23G SAFETY BLOOD COLLECTION SET W/HOLDER",
        "DEMAND": 1399,
        "ON_STOCK": 5820,
        "AVAILABILITY": 4423,
        "OPEN_PO": 8439,
        "DUE_DATE": "2024-04-15T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1115,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "454029",
        "ITEM_DESCRIPTION": "GREINER 4ML GREEN/BLACK LITHIUM HEPARIN VACUETTE",
        "DEMAND": 18694,
        "ON_STOCK": 2378,
        "AVAILABILITY": 1807,
        "OPEN_PO": 3448,
        "DUE_DATE": "2024-12-22T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1116,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "455092",
        "ITEM_DESCRIPTION": "GREINER 9ML RED/BLACK Z SERUM CLOT ACTIVATOR VACUE",
        "DEMAND": 24,
        "ON_STOCK": 7387,
        "AVAILABILITY": 5614,
        "OPEN_PO": 10711,
        "DUE_DATE": "2024-09-12T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1117,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-545",
        "ITEM_DESCRIPTION": "GREINER 4ML RED/YELLOW Z SERUM CLOT ACTIVATOR VACU",
        "DEMAND": 238,
        "ON_STOCK": 7657,
        "AVAILABILITY": 5819,
        "OPEN_PO": 11103,
        "DUE_DATE": "2024-10-03T00:00:00",
        "ITEM_TYPE": "Special item"
    },
    {
        "ITEM_ID": 1118,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "456292P",
        "ITEM_DESCRIPTION": "GREINER 4ML RED/YELLOW Z SERUM CLOT ACTIVATOR VACU",
        "DEMAND": 742,
        "ON_STOCK": 4077,
        "AVAILABILITY": 3099,
        "OPEN_PO": 5912,
        "DUE_DATE": "2024-06-17T00:00:00",
        "ITEM_TYPE": "Kit"
    },
    {
        "ITEM_ID": 1119,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-537",
        "ITEM_DESCRIPTION": "GREINER 8ML RED/YELLOW Z SERUM CLOT ACTIVATOR TUBE",
        "DEMAND": 96,
        "ON_STOCK": 7450,
        "AVAILABILITY": 5662,
        "OPEN_PO": 10803,
        "DUE_DATE": "2024-06-10T00:00:00",
        "ITEM_TYPE": "Temperature"
    },
    {
        "ITEM_ID": 1120,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "455071P",
        "ITEM_DESCRIPTION": "GREINER 8ML RED/YELLOW Z SERUM CLOT ACTIVATOR TUBE",
        "DEMAND": 444,
        "ON_STOCK": 10125,
        "AVAILABILITY": 7695,
        "OPEN_PO": 14681,
        "DUE_DATE": "2024-01-13T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1121,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "456089",
        "ITEM_DESCRIPTION": "GREINER 6ML RED/BLACK Z SERUM CLOT ACTIVATOR VACUE",
        "DEMAND": 483,
        "ON_STOCK": 1075,
        "AVAILABILITY": 817,
        "OPEN_PO": 1559,
        "DUE_DATE": "2024-05-29T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1122,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-104",
        "ITEM_DESCRIPTION": "GREINER 3ML GREEN/BLACK LITHIUM HEPARIN VACUETTE T",
        "DEMAND": 216,
        "ON_STOCK": 7850,
        "AVAILABILITY": 5966,
        "OPEN_PO": 11383,
        "DUE_DATE": "2024-07-04T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1123,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "454204",
        "ITEM_DESCRIPTION": "GREINER 4ML RED/BLACK Z SERUM CLOT ACTIVATOR VACUE",
        "DEMAND": 873,
        "ON_STOCK": 24603,
        "AVAILABILITY": 18698,
        "OPEN_PO": 35674,
        "DUE_DATE": "2024-10-21T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1124,
        "ITEM_NAME": "GREIN",
        "ITEM_NUMBER": "22-040-119",
        "ITEM_DESCRIPTION": "GREINER 3ML BLUE/BLACK SODIUM CITRATE VACUETTE TUB",
        "DEMAND": 718,
        "ON_STOCK": 1093,
        "AVAILABILITY": 831,
        "OPEN_PO": 1585,
        "DUE_DATE": "2024-12-10T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1125,
        "ITEM_NAME": "#SPON",
        "ITEM_NUMBER": "18118",
        "ITEM_DESCRIPTION": "#SPONSOR# UNIQURE 5CC (5ML) URINE COLLECTION & PRE",
        "DEMAND": 318,
        "ON_STOCK": 2817,
        "AVAILABILITY": 2141,
        "OPEN_PO": 4085,
        "DUE_DATE": "2024-06-01T00:00:00",
        "ITEM_TYPE": "Bulk"
    },
    {
        "ITEM_ID": 1126,
        "ITEM_NAME": "SIGMA",
        "ITEM_NUMBER": "270741-1L",
        "ITEM_DESCRIPTION": "SIGMA 1L REAGENT ALCOHOL",
        "DEMAND": 623,
        "ON_STOCK": 2912,
        "AVAILABILITY": 2213,
        "OPEN_PO": 4222,
        "DUE_DATE": "2024-02-07T00:00:00",
        "ITEM_TYPE": "Dangerous"
    },
    {
        "ITEM_ID": 1127,
        "ITEM_NAME": "#SPON",
        "ITEM_NUMBER": "45660",
        "ITEM_DESCRIPTION": "#SPONSOR# UNIQURE STOOL NUCLEIC ACID COLLECTION & ",
        "DEMAND": 5693,
        "ON_STOCK": 1567,
        "AVAILABILITY": 1191,
        "OPEN_PO": 2272,
        "DUE_DATE": "2024-02-13T00:00:00",
        "ITEM_TYPE": "Kit"
    }
    ]

    data.forEach((item: any) => {
      item["id"] = this.generateUniqueId();
    });

    return data
  }

  getColumns() {
    let dropdownData = [
      {
        id: 1,
        name: "Vendor",
        val: "1"
      },
      {
        id: 2,
        name: "Order Type",
        val: "2"
      },
      {
        id: 3,
        name: "Warehouse",
        val: "3"
      }]
    return dropdownData;
  }
  getDuration() {
    let dropdownData = [
      {
        id: 2,
        name: "15 Days",
        val: "15Days"
      },{
        id: 1,
        name: "3 Months",
        val: "3Months"
      },
      {
        id: 3,
        name: "6 Months",
        val: "6Months"
      }]
    return dropdownData;
  }

  constructor(private http: HttpClient) { }

  generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  

  
  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  }

  getCustomers(params?: any) {

    return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();

  }




}
