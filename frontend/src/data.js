const STOCK_DATA = [
    {
       "ticker":"MMM",
       "security":"3M Company",
       "description":"3M Company (MMM)"
    },
    {
       "ticker":"ABT",
       "security":"Abbott Laboratories",
       "description":"Abbott Laboratories (ABT)"
    },
    {
       "ticker":"ABBV",
       "security":"AbbVie Inc.",
       "description":"AbbVie Inc. (ABBV)"
    },
    {
       "ticker":"ABMD",
       "security":"ABIOMED Inc",
       "description":"ABIOMED Inc (ABMD)"
    },
    {
       "ticker":"ACN",
       "security":"Accenture plc",
       "description":"Accenture plc (ACN)"
    },
    {
       "ticker":"ATVI",
       "security":"Activision Blizzard",
       "description":"Activision Blizzard (ATVI)"
    },
    {
       "ticker":"ADBE",
       "security":"Adobe Inc.",
       "description":"Adobe Inc. (ADBE)"
    },
    {
       "ticker":"AMD",
       "security":"Advanced Micro Devices Inc",
       "description":"Advanced Micro Devices Inc (AMD)"
    },
    {
       "ticker":"AAP",
       "security":"Advance Auto Parts",
       "description":"Advance Auto Parts (AAP)"
    },
    {
       "ticker":"AES",
       "security":"AES Corp",
       "description":"AES Corp (AES)"
    },
    {
       "ticker":"AFL",
       "security":"AFLAC Inc",
       "description":"AFLAC Inc (AFL)"
    },
    {
       "ticker":"A",
       "security":"Agilent Technologies Inc",
       "description":"Agilent Technologies Inc (A)"
    },
    {
       "ticker":"APD",
       "security":"Air Products & Chemicals Inc",
       "description":"Air Products & Chemicals Inc (APD)"
    },
    {
       "ticker":"AKAM",
       "security":"Akamai Technologies Inc",
       "description":"Akamai Technologies Inc (AKAM)"
    },
    {
       "ticker":"ALK",
       "security":"Alaska Air Group Inc",
       "description":"Alaska Air Group Inc (ALK)"
    },
    {
       "ticker":"ALB",
       "security":"Albemarle Corp",
       "description":"Albemarle Corp (ALB)"
    },
    {
       "ticker":"ARE",
       "security":"Alexandria Real Estate Equities",
       "description":"Alexandria Real Estate Equities (ARE)"
    },
    {
       "ticker":"ALXN",
       "security":"Alexion Pharmaceuticals",
       "description":"Alexion Pharmaceuticals (ALXN)"
    },
    {
       "ticker":"ALGN",
       "security":"Align Technology",
       "description":"Align Technology (ALGN)"
    },
    {
       "ticker":"ALLE",
       "security":"Allegion",
       "description":"Allegion (ALLE)"
    },
    {
       "ticker":"LNT",
       "security":"Alliant Energy Corp",
       "description":"Alliant Energy Corp (LNT)"
    },
    {
       "ticker":"ALL",
       "security":"Allstate Corp",
       "description":"Allstate Corp (ALL)"
    },
    {
       "ticker":"GOOGL",
       "security":"Alphabet Inc. (Class A)",
       "description":"Alphabet Inc. (Class A) (GOOGL)"
    },
    {
       "ticker":"GOOG",
       "security":"Alphabet Inc. (Class C)",
       "description":"Alphabet Inc. (Class C) (GOOG)"
    },
    {
       "ticker":"MO",
       "security":"Altria Group Inc",
       "description":"Altria Group Inc (MO)"
    },
    {
       "ticker":"AMZN",
       "security":"Amazon.com Inc.",
       "description":"Amazon.com Inc. (AMZN)"
    },
    {
       "ticker":"AMCR",
       "security":"Amcor plc",
       "description":"Amcor plc (AMCR)"
    },
    {
       "ticker":"AEE",
       "security":"Ameren Corp",
       "description":"Ameren Corp (AEE)"
    },
    {
       "ticker":"AAL",
       "security":"American Airlines Group",
       "description":"American Airlines Group (AAL)"
    },
    {
       "ticker":"AEP",
       "security":"American Electric Power",
       "description":"American Electric Power (AEP)"
    },
    {
       "ticker":"AXP",
       "security":"American Express Co",
       "description":"American Express Co (AXP)"
    },
    {
       "ticker":"AIG",
       "security":"American International Group",
       "description":"American International Group (AIG)"
    },
    {
       "ticker":"AMT",
       "security":"American Tower Corp.",
       "description":"American Tower Corp. (AMT)"
    },
    {
       "ticker":"AWK",
       "security":"American Water Works Company Inc",
       "description":"American Water Works Company Inc (AWK)"
    },
    {
       "ticker":"AMP",
       "security":"Ameriprise Financial",
       "description":"Ameriprise Financial (AMP)"
    },
    {
       "ticker":"ABC",
       "security":"AmerisourceBergen Corp",
       "description":"AmerisourceBergen Corp (ABC)"
    },
    {
       "ticker":"AME",
       "security":"AMETEK Inc.",
       "description":"AMETEK Inc. (AME)"
    },
    {
       "ticker":"AMGN",
       "security":"Amgen Inc.",
       "description":"Amgen Inc. (AMGN)"
    },
    {
       "ticker":"APH",
       "security":"Amphenol Corp",
       "description":"Amphenol Corp (APH)"
    },
    {
       "ticker":"ADI",
       "security":"Analog Devices, Inc.",
       "description":"Analog Devices, Inc. (ADI)"
    },
    {
       "ticker":"ANSS",
       "security":"ANSYS, Inc.",
       "description":"ANSYS, Inc. (ANSS)"
    },
    {
       "ticker":"ANTM",
       "security":"Anthem",
       "description":"Anthem (ANTM)"
    },
    {
       "ticker":"AON",
       "security":"Aon plc",
       "description":"Aon plc (AON)"
    },
    {
       "ticker":"AOS",
       "security":"A.O. Smith Corp",
       "description":"A.O. Smith Corp (AOS)"
    },
    {
       "ticker":"APA",
       "security":"Apache Corporation",
       "description":"Apache Corporation (APA)"
    },
    {
       "ticker":"AAPL",
       "security":"Apple Inc.",
       "description":"Apple Inc. (AAPL)"
    },
    {
       "ticker":"AMAT",
       "security":"Applied Materials Inc.",
       "description":"Applied Materials Inc. (AMAT)"
    },
    {
       "ticker":"APTV",
       "security":"Aptiv PLC",
       "description":"Aptiv PLC (APTV)"
    },
    {
       "ticker":"ADM",
       "security":"Archer-Daniels-Midland Co",
       "description":"Archer-Daniels-Midland Co (ADM)"
    },
    {
       "ticker":"ANET",
       "security":"Arista Networks",
       "description":"Arista Networks (ANET)"
    },
    {
       "ticker":"AJG",
       "security":"Arthur J. Gallagher & Co.",
       "description":"Arthur J. Gallagher & Co. (AJG)"
    },
    {
       "ticker":"AIZ",
       "security":"Assurant",
       "description":"Assurant (AIZ)"
    },
    {
       "ticker":"T",
       "security":"AT&T Inc.",
       "description":"AT&T Inc. (T)"
    },
    {
       "ticker":"ATO",
       "security":"Atmos Energy",
       "description":"Atmos Energy (ATO)"
    },
    {
       "ticker":"ADSK",
       "security":"Autodesk Inc.",
       "description":"Autodesk Inc. (ADSK)"
    },
    {
       "ticker":"ADP",
       "security":"Automatic Data Processing",
       "description":"Automatic Data Processing (ADP)"
    },
    {
       "ticker":"AZO",
       "security":"AutoZone Inc",
       "description":"AutoZone Inc (AZO)"
    },
    {
       "ticker":"AVB",
       "security":"AvalonBay Communities",
       "description":"AvalonBay Communities (AVB)"
    },
    {
       "ticker":"AVY",
       "security":"Avery Dennison Corp",
       "description":"Avery Dennison Corp (AVY)"
    },
    {
       "ticker":"BKR",
       "security":"Baker Hughes Co",
       "description":"Baker Hughes Co (BKR)"
    },
    {
       "ticker":"BLL",
       "security":"Ball Corp",
       "description":"Ball Corp (BLL)"
    },
    {
       "ticker":"BAC",
       "security":"Bank of America Corp",
       "description":"Bank of America Corp (BAC)"
    },
    {
       "ticker":"BK",
       "security":"The Bank of New York Mellon",
       "description":"The Bank of New York Mellon (BK)"
    },
    {
       "ticker":"BAX",
       "security":"Baxter International Inc.",
       "description":"Baxter International Inc. (BAX)"
    },
    {
       "ticker":"BDX",
       "security":"Becton Dickinson",
       "description":"Becton Dickinson (BDX)"
    },
    {
       "ticker":"BRK.B",
       "security":"Berkshire Hathaway",
       "description":"Berkshire Hathaway (BRK.B)"
    },
    {
       "ticker":"BBY",
       "security":"Best Buy Co. Inc.",
       "description":"Best Buy Co. Inc. (BBY)"
    },
    {
       "ticker":"BIO",
       "security":"Bio-Rad Laboratories",
       "description":"Bio-Rad Laboratories (BIO)"
    },
    {
       "ticker":"BIIB",
       "security":"Biogen Inc.",
       "description":"Biogen Inc. (BIIB)"
    },
    {
       "ticker":"BLK",
       "security":"BlackRock",
       "description":"BlackRock (BLK)"
    },
    {
       "ticker":"BA",
       "security":"Boeing Company",
       "description":"Boeing Company (BA)"
    },
    {
       "ticker":"BKNG",
       "security":"Booking Holdings Inc",
       "description":"Booking Holdings Inc (BKNG)"
    },
    {
       "ticker":"BWA",
       "security":"BorgWarner",
       "description":"BorgWarner (BWA)"
    },
    {
       "ticker":"BXP",
       "security":"Boston Properties",
       "description":"Boston Properties (BXP)"
    },
    {
       "ticker":"BSX",
       "security":"Boston Scientific",
       "description":"Boston Scientific (BSX)"
    },
    {
       "ticker":"BMY",
       "security":"Bristol-Myers Squibb",
       "description":"Bristol-Myers Squibb (BMY)"
    },
    {
       "ticker":"AVGO",
       "security":"Broadcom Inc.",
       "description":"Broadcom Inc. (AVGO)"
    },
    {
       "ticker":"BR",
       "security":"Broadridge Financial Solutions",
       "description":"Broadridge Financial Solutions (BR)"
    },
    {
       "ticker":"BF.B",
       "security":"Brown-Forman Corp.",
       "description":"Brown-Forman Corp. (BF.B)"
    },
    {
       "ticker":"CHRW",
       "security":"C. H. Robinson Worldwide",
       "description":"C. H. Robinson Worldwide (CHRW)"
    },
    {
       "ticker":"COG",
       "security":"Cabot Oil & Gas",
       "description":"Cabot Oil & Gas (COG)"
    },
    {
       "ticker":"CDNS",
       "security":"Cadence Design Systems",
       "description":"Cadence Design Systems (CDNS)"
    },
    {
       "ticker":"CPB",
       "security":"Campbell Soup",
       "description":"Campbell Soup (CPB)"
    },
    {
       "ticker":"COF",
       "security":"Capital One Financial",
       "description":"Capital One Financial (COF)"
    },
    {
       "ticker":"CAH",
       "security":"Cardinal Health Inc.",
       "description":"Cardinal Health Inc. (CAH)"
    },
    {
       "ticker":"KMX",
       "security":"Carmax Inc",
       "description":"Carmax Inc (KMX)"
    },
    {
       "ticker":"CCL",
       "security":"Carnival Corp.",
       "description":"Carnival Corp. (CCL)"
    },
    {
       "ticker":"CARR",
       "security":"Carrier Global",
       "description":"Carrier Global (CARR)"
    },
    {
       "ticker":"CTLT",
       "security":"Catalent",
       "description":"Catalent (CTLT)"
    },
    {
       "ticker":"CAT",
       "security":"Caterpillar Inc.",
       "description":"Caterpillar Inc. (CAT)"
    },
    {
       "ticker":"CBOE",
       "security":"Cboe Global Markets",
       "description":"Cboe Global Markets (CBOE)"
    },
    {
       "ticker":"CBRE",
       "security":"CBRE Group",
       "description":"CBRE Group (CBRE)"
    },
    {
       "ticker":"CDW",
       "security":"CDW",
       "description":"CDW (CDW)"
    },
    {
       "ticker":"CE",
       "security":"Celanese",
       "description":"Celanese (CE)"
    },
    {
       "ticker":"CNC",
       "security":"Centene Corporation",
       "description":"Centene Corporation (CNC)"
    },
    {
       "ticker":"CNP",
       "security":"CenterPoint Energy",
       "description":"CenterPoint Energy (CNP)"
    },
    {
       "ticker":"CERN",
       "security":"Cerner",
       "description":"Cerner (CERN)"
    },
    {
       "ticker":"CF",
       "security":"CF Industries Holdings Inc",
       "description":"CF Industries Holdings Inc (CF)"
    },
    {
       "ticker":"SCHW",
       "security":"Charles Schwab Corporation",
       "description":"Charles Schwab Corporation (SCHW)"
    },
    {
       "ticker":"CHTR",
       "security":"Charter Communications",
       "description":"Charter Communications (CHTR)"
    },
    {
       "ticker":"CVX",
       "security":"Chevron Corp.",
       "description":"Chevron Corp. (CVX)"
    },
    {
       "ticker":"CMG",
       "security":"Chipotle Mexican Grill",
       "description":"Chipotle Mexican Grill (CMG)"
    },
    {
       "ticker":"CB",
       "security":"Chubb Limited",
       "description":"Chubb Limited (CB)"
    },
    {
       "ticker":"CHD",
       "security":"Church & Dwight",
       "description":"Church & Dwight (CHD)"
    },
    {
       "ticker":"CI",
       "security":"CIGNA Corp.",
       "description":"CIGNA Corp. (CI)"
    },
    {
       "ticker":"CINF",
       "security":"Cincinnati Financial",
       "description":"Cincinnati Financial (CINF)"
    },
    {
       "ticker":"CTAS",
       "security":"Cintas Corporation",
       "description":"Cintas Corporation (CTAS)"
    },
    {
       "ticker":"CSCO",
       "security":"Cisco Systems",
       "description":"Cisco Systems (CSCO)"
    },
    {
       "ticker":"C",
       "security":"Citigroup Inc.",
       "description":"Citigroup Inc. (C)"
    },
    {
       "ticker":"CFG",
       "security":"Citizens Financial Group",
       "description":"Citizens Financial Group (CFG)"
    },
    {
       "ticker":"CTXS",
       "security":"Citrix Systems",
       "description":"Citrix Systems (CTXS)"
    },
    {
       "ticker":"CLX",
       "security":"The Clorox Company",
       "description":"The Clorox Company (CLX)"
    },
    {
       "ticker":"CME",
       "security":"CME Group Inc.",
       "description":"CME Group Inc. (CME)"
    },
    {
       "ticker":"CMS",
       "security":"CMS Energy",
       "description":"CMS Energy (CMS)"
    },
    {
       "ticker":"KO",
       "security":"Coca-Cola Company",
       "description":"Coca-Cola Company (KO)"
    },
    {
       "ticker":"CTSH",
       "security":"Cognizant Technology Solutions",
       "description":"Cognizant Technology Solutions (CTSH)"
    },
    {
       "ticker":"CL",
       "security":"Colgate-Palmolive",
       "description":"Colgate-Palmolive (CL)"
    },
    {
       "ticker":"CMCSA",
       "security":"Comcast Corp.",
       "description":"Comcast Corp. (CMCSA)"
    },
    {
       "ticker":"CMA",
       "security":"Comerica Inc.",
       "description":"Comerica Inc. (CMA)"
    },
    {
       "ticker":"CAG",
       "security":"Conagra Brands",
       "description":"Conagra Brands (CAG)"
    },
    {
       "ticker":"CXO",
       "security":"Concho Resources",
       "description":"Concho Resources (CXO)"
    },
    {
       "ticker":"COP",
       "security":"ConocoPhillips",
       "description":"ConocoPhillips (COP)"
    },
    {
       "ticker":"ED",
       "security":"Consolidated Edison",
       "description":"Consolidated Edison (ED)"
    },
    {
       "ticker":"STZ",
       "security":"Constellation Brands",
       "description":"Constellation Brands (STZ)"
    },
    {
       "ticker":"COO",
       "security":"The Cooper Companies",
       "description":"The Cooper Companies (COO)"
    },
    {
       "ticker":"CPRT",
       "security":"Copart Inc",
       "description":"Copart Inc (CPRT)"
    },
    {
       "ticker":"GLW",
       "security":"Corning Inc.",
       "description":"Corning Inc. (GLW)"
    },
    {
       "ticker":"CTVA",
       "security":"Corteva",
       "description":"Corteva (CTVA)"
    },
    {
       "ticker":"COST",
       "security":"Costco Wholesale Corp.",
       "description":"Costco Wholesale Corp. (COST)"
    },
    {
       "ticker":"CCI",
       "security":"Crown Castle International Corp.",
       "description":"Crown Castle International Corp. (CCI)"
    },
    {
       "ticker":"CSX",
       "security":"CSX Corp.",
       "description":"CSX Corp. (CSX)"
    },
    {
       "ticker":"CMI",
       "security":"Cummins Inc.",
       "description":"Cummins Inc. (CMI)"
    },
    {
       "ticker":"CVS",
       "security":"CVS Health",
       "description":"CVS Health (CVS)"
    },
    {
       "ticker":"DHI",
       "security":"D. R. Horton",
       "description":"D. R. Horton (DHI)"
    },
    {
       "ticker":"DHR",
       "security":"Danaher Corp.",
       "description":"Danaher Corp. (DHR)"
    },
    {
       "ticker":"DRI",
       "security":"Darden Restaurants",
       "description":"Darden Restaurants (DRI)"
    },
    {
       "ticker":"DVA",
       "security":"DaVita Inc.",
       "description":"DaVita Inc. (DVA)"
    },
    {
       "ticker":"DE",
       "security":"Deere & Co.",
       "description":"Deere & Co. (DE)"
    },
    {
       "ticker":"DAL",
       "security":"Delta Air Lines Inc.",
       "description":"Delta Air Lines Inc. (DAL)"
    },
    {
       "ticker":"XRAY",
       "security":"Dentsply Sirona",
       "description":"Dentsply Sirona (XRAY)"
    },
    {
       "ticker":"DVN",
       "security":"Devon Energy",
       "description":"Devon Energy (DVN)"
    },
    {
       "ticker":"DXCM",
       "security":"DexCom",
       "description":"DexCom (DXCM)"
    },
    {
       "ticker":"FANG",
       "security":"Diamondback Energy",
       "description":"Diamondback Energy (FANG)"
    },
    {
       "ticker":"DLR",
       "security":"Digital Realty Trust Inc",
       "description":"Digital Realty Trust Inc (DLR)"
    },
    {
       "ticker":"DFS",
       "security":"Discover Financial Services",
       "description":"Discover Financial Services (DFS)"
    },
    {
       "ticker":"DISCA",
       "security":"Discovery, Inc. (Class A)",
       "description":"Discovery, Inc. (Class A) (DISCA)"
    },
    {
       "ticker":"DISCK",
       "security":"Discovery, Inc. (Class C)",
       "description":"Discovery, Inc. (Class C) (DISCK)"
    },
    {
       "ticker":"DISH",
       "security":"Dish Network",
       "description":"Dish Network (DISH)"
    },
    {
       "ticker":"DG",
       "security":"Dollar General",
       "description":"Dollar General (DG)"
    },
    {
       "ticker":"DLTR",
       "security":"Dollar Tree",
       "description":"Dollar Tree (DLTR)"
    },
    {
       "ticker":"D",
       "security":"Dominion Energy",
       "description":"Dominion Energy (D)"
    },
    {
       "ticker":"DPZ",
       "security":"Domino's Pizza",
       "description":"Domino's Pizza (DPZ)"
    },
    {
       "ticker":"DOV",
       "security":"Dover Corporation",
       "description":"Dover Corporation (DOV)"
    },
    {
       "ticker":"DOW",
       "security":"Dow Inc.",
       "description":"Dow Inc. (DOW)"
    },
    {
       "ticker":"DTE",
       "security":"DTE Energy Co.",
       "description":"DTE Energy Co. (DTE)"
    },
    {
       "ticker":"DUK",
       "security":"Duke Energy",
       "description":"Duke Energy (DUK)"
    },
    {
       "ticker":"DRE",
       "security":"Duke Realty Corp",
       "description":"Duke Realty Corp (DRE)"
    },
    {
       "ticker":"DD",
       "security":"DuPont de Nemours Inc",
       "description":"DuPont de Nemours Inc (DD)"
    },
    {
       "ticker":"DXC",
       "security":"DXC Technology",
       "description":"DXC Technology (DXC)"
    },
    {
       "ticker":"EMN",
       "security":"Eastman Chemical",
       "description":"Eastman Chemical (EMN)"
    },
    {
       "ticker":"ETN",
       "security":"Eaton Corporation",
       "description":"Eaton Corporation (ETN)"
    },
    {
       "ticker":"EBAY",
       "security":"eBay Inc.",
       "description":"eBay Inc. (EBAY)"
    },
    {
       "ticker":"ECL",
       "security":"Ecolab Inc.",
       "description":"Ecolab Inc. (ECL)"
    },
    {
       "ticker":"EIX",
       "security":"Edison Int'l",
       "description":"Edison Int'l (EIX)"
    },
    {
       "ticker":"EW",
       "security":"Edwards Lifesciences",
       "description":"Edwards Lifesciences (EW)"
    },
    {
       "ticker":"EA",
       "security":"Electronic Arts",
       "description":"Electronic Arts (EA)"
    },
    {
       "ticker":"EMR",
       "security":"Emerson Electric Company",
       "description":"Emerson Electric Company (EMR)"
    },
    {
       "ticker":"ENPH",
       "security":"Enphase Energy",
       "description":"Enphase Energy (ENPH)"
    },
    {
       "ticker":"ETR",
       "security":"Entergy Corp.",
       "description":"Entergy Corp. (ETR)"
    },
    {
       "ticker":"EOG",
       "security":"EOG Resources",
       "description":"EOG Resources (EOG)"
    },
    {
       "ticker":"EFX",
       "security":"Equifax Inc.",
       "description":"Equifax Inc. (EFX)"
    },
    {
       "ticker":"EQIX",
       "security":"Equinix",
       "description":"Equinix (EQIX)"
    },
    {
       "ticker":"EQR",
       "security":"Equity Residential",
       "description":"Equity Residential (EQR)"
    },
    {
       "ticker":"ESS",
       "security":"Essex Property Trust, Inc.",
       "description":"Essex Property Trust, Inc. (ESS)"
    },
    {
       "ticker":"EL",
       "security":"Est\u00e9e Lauder Companies",
       "description":"Est\u00e9e Lauder Companies (EL)"
    },
    {
       "ticker":"ETSY",
       "security":"Etsy",
       "description":"Etsy (ETSY)"
    },
    {
       "ticker":"EVRG",
       "security":"Evergy",
       "description":"Evergy (EVRG)"
    },
    {
       "ticker":"ES",
       "security":"Eversource Energy",
       "description":"Eversource Energy (ES)"
    },
    {
       "ticker":"RE",
       "security":"Everest Re Group Ltd.",
       "description":"Everest Re Group Ltd. (RE)"
    },
    {
       "ticker":"EXC",
       "security":"Exelon Corp.",
       "description":"Exelon Corp. (EXC)"
    },
    {
       "ticker":"EXPE",
       "security":"Expedia Group",
       "description":"Expedia Group (EXPE)"
    },
    {
       "ticker":"EXPD",
       "security":"Expeditors",
       "description":"Expeditors (EXPD)"
    },
    {
       "ticker":"EXR",
       "security":"Extra Space Storage",
       "description":"Extra Space Storage (EXR)"
    },
    {
       "ticker":"XOM",
       "security":"Exxon Mobil Corp.",
       "description":"Exxon Mobil Corp. (XOM)"
    },
    {
       "ticker":"FFIV",
       "security":"F5 Networks",
       "description":"F5 Networks (FFIV)"
    },
    {
       "ticker":"FB",
       "security":"Facebook, Inc.",
       "description":"Facebook, Inc. (FB)"
    },
    {
       "ticker":"FAST",
       "security":"Fastenal Co",
       "description":"Fastenal Co (FAST)"
    },
    {
       "ticker":"FRT",
       "security":"Federal Realty Investment Trust",
       "description":"Federal Realty Investment Trust (FRT)"
    },
    {
       "ticker":"FDX",
       "security":"FedEx Corporation",
       "description":"FedEx Corporation (FDX)"
    },
    {
       "ticker":"FIS",
       "security":"Fidelity National Information Services",
       "description":"Fidelity National Information Services (FIS)"
    },
    {
       "ticker":"FITB",
       "security":"Fifth Third Bancorp",
       "description":"Fifth Third Bancorp (FITB)"
    },
    {
       "ticker":"FE",
       "security":"FirstEnergy Corp",
       "description":"FirstEnergy Corp (FE)"
    },
    {
       "ticker":"FRC",
       "security":"First Republic Bank",
       "description":"First Republic Bank (FRC)"
    },
    {
       "ticker":"FISV",
       "security":"Fiserv Inc",
       "description":"Fiserv Inc (FISV)"
    },
    {
       "ticker":"FLT",
       "security":"FleetCor Technologies Inc",
       "description":"FleetCor Technologies Inc (FLT)"
    },
    {
       "ticker":"FLIR",
       "security":"FLIR Systems",
       "description":"FLIR Systems (FLIR)"
    },
    {
       "ticker":"FLS",
       "security":"Flowserve Corporation",
       "description":"Flowserve Corporation (FLS)"
    },
    {
       "ticker":"FMC",
       "security":"FMC Corporation",
       "description":"FMC Corporation (FMC)"
    },
    {
       "ticker":"F",
       "security":"Ford Motor Company",
       "description":"Ford Motor Company (F)"
    },
    {
       "ticker":"FTNT",
       "security":"Fortinet",
       "description":"Fortinet (FTNT)"
    },
    {
       "ticker":"FTV",
       "security":"Fortive Corp",
       "description":"Fortive Corp (FTV)"
    },
    {
       "ticker":"FBHS",
       "security":"Fortune Brands Home & Security",
       "description":"Fortune Brands Home & Security (FBHS)"
    },
    {
       "ticker":"FOXA",
       "security":"Fox Corporation (Class A)",
       "description":"Fox Corporation (Class A) (FOXA)"
    },
    {
       "ticker":"FOX",
       "security":"Fox Corporation (Class B)",
       "description":"Fox Corporation (Class B) (FOX)"
    },
    {
       "ticker":"BEN",
       "security":"Franklin Resources",
       "description":"Franklin Resources (BEN)"
    },
    {
       "ticker":"FCX",
       "security":"Freeport-McMoRan Inc.",
       "description":"Freeport-McMoRan Inc. (FCX)"
    },
    {
       "ticker":"GPS",
       "security":"Gap Inc.",
       "description":"Gap Inc. (GPS)"
    },
    {
       "ticker":"GRMN",
       "security":"Garmin Ltd.",
       "description":"Garmin Ltd. (GRMN)"
    },
    {
       "ticker":"IT",
       "security":"Gartner Inc",
       "description":"Gartner Inc (IT)"
    },
    {
       "ticker":"GD",
       "security":"General Dynamics",
       "description":"General Dynamics (GD)"
    },
    {
       "ticker":"GE",
       "security":"General Electric",
       "description":"General Electric (GE)"
    },
    {
       "ticker":"GIS",
       "security":"General Mills",
       "description":"General Mills (GIS)"
    },
    {
       "ticker":"GM",
       "security":"General Motors",
       "description":"General Motors (GM)"
    },
    {
       "ticker":"GPC",
       "security":"Genuine Parts",
       "description":"Genuine Parts (GPC)"
    },
    {
       "ticker":"GILD",
       "security":"Gilead Sciences",
       "description":"Gilead Sciences (GILD)"
    },
    {
       "ticker":"GL",
       "security":"Globe Life Inc.",
       "description":"Globe Life Inc. (GL)"
    },
    {
       "ticker":"GPN",
       "security":"Global Payments Inc.",
       "description":"Global Payments Inc. (GPN)"
    },
    {
       "ticker":"GS",
       "security":"Goldman Sachs Group",
       "description":"Goldman Sachs Group (GS)"
    },
    {
       "ticker":"GWW",
       "security":"Grainger (W.W.) Inc.",
       "description":"Grainger (W.W.) Inc. (GWW)"
    },
    {
       "ticker":"HAL",
       "security":"Halliburton Co.",
       "description":"Halliburton Co. (HAL)"
    },
    {
       "ticker":"HBI",
       "security":"Hanesbrands Inc",
       "description":"Hanesbrands Inc (HBI)"
    },
    {
       "ticker":"HIG",
       "security":"Hartford Financial Svc.Gp.",
       "description":"Hartford Financial Svc.Gp. (HIG)"
    },
    {
       "ticker":"HAS",
       "security":"Hasbro Inc.",
       "description":"Hasbro Inc. (HAS)"
    },
    {
       "ticker":"HCA",
       "security":"HCA Healthcare",
       "description":"HCA Healthcare (HCA)"
    },
    {
       "ticker":"PEAK",
       "security":"Healthpeak Properties",
       "description":"Healthpeak Properties (PEAK)"
    },
    {
       "ticker":"HSIC",
       "security":"Henry Schein",
       "description":"Henry Schein (HSIC)"
    },
    {
       "ticker":"HSY",
       "security":"The Hershey Company",
       "description":"The Hershey Company (HSY)"
    },
    {
       "ticker":"HES",
       "security":"Hess Corporation",
       "description":"Hess Corporation (HES)"
    },
    {
       "ticker":"HPE",
       "security":"Hewlett Packard Enterprise",
       "description":"Hewlett Packard Enterprise (HPE)"
    },
    {
       "ticker":"HLT",
       "security":"Hilton Worldwide Holdings Inc",
       "description":"Hilton Worldwide Holdings Inc (HLT)"
    },
    {
       "ticker":"HFC",
       "security":"HollyFrontier Corp",
       "description":"HollyFrontier Corp (HFC)"
    },
    {
       "ticker":"HOLX",
       "security":"Hologic",
       "description":"Hologic (HOLX)"
    },
    {
       "ticker":"HD",
       "security":"Home Depot",
       "description":"Home Depot (HD)"
    },
    {
       "ticker":"HON",
       "security":"Honeywell Int'l Inc.",
       "description":"Honeywell Int'l Inc. (HON)"
    },
    {
       "ticker":"HRL",
       "security":"Hormel Foods Corp.",
       "description":"Hormel Foods Corp. (HRL)"
    },
    {
       "ticker":"HST",
       "security":"Host Hotels & Resorts",
       "description":"Host Hotels & Resorts (HST)"
    },
    {
       "ticker":"HWM",
       "security":"Howmet Aerospace",
       "description":"Howmet Aerospace (HWM)"
    },
    {
       "ticker":"HPQ",
       "security":"HP Inc.",
       "description":"HP Inc. (HPQ)"
    },
    {
       "ticker":"HUM",
       "security":"Humana Inc.",
       "description":"Humana Inc. (HUM)"
    },
    {
       "ticker":"HBAN",
       "security":"Huntington Bancshares",
       "description":"Huntington Bancshares (HBAN)"
    },
    {
       "ticker":"HII",
       "security":"Huntington Ingalls Industries",
       "description":"Huntington Ingalls Industries (HII)"
    },
    {
       "ticker":"IEX",
       "security":"IDEX Corporation",
       "description":"IDEX Corporation (IEX)"
    },
    {
       "ticker":"IDXX",
       "security":"IDEXX Laboratories",
       "description":"IDEXX Laboratories (IDXX)"
    },
    {
       "ticker":"INFO",
       "security":"IHS Markit Ltd.",
       "description":"IHS Markit Ltd. (INFO)"
    },
    {
       "ticker":"ITW",
       "security":"Illinois Tool Works",
       "description":"Illinois Tool Works (ITW)"
    },
    {
       "ticker":"ILMN",
       "security":"Illumina Inc",
       "description":"Illumina Inc (ILMN)"
    },
    {
       "ticker":"INCY",
       "security":"Incyte",
       "description":"Incyte (INCY)"
    },
    {
       "ticker":"IR",
       "security":"Ingersoll Rand",
       "description":"Ingersoll Rand (IR)"
    },
    {
       "ticker":"INTC",
       "security":"Intel Corp.",
       "description":"Intel Corp. (INTC)"
    },
    {
       "ticker":"ICE",
       "security":"Intercontinental Exchange",
       "description":"Intercontinental Exchange (ICE)"
    },
    {
       "ticker":"IBM",
       "security":"International Business Machines",
       "description":"International Business Machines (IBM)"
    },
    {
       "ticker":"IP",
       "security":"International Paper",
       "description":"International Paper (IP)"
    },
    {
       "ticker":"IPG",
       "security":"Interpublic Group",
       "description":"Interpublic Group (IPG)"
    },
    {
       "ticker":"IFF",
       "security":"International Flavors & Fragrances",
       "description":"International Flavors & Fragrances (IFF)"
    },
    {
       "ticker":"INTU",
       "security":"Intuit Inc.",
       "description":"Intuit Inc. (INTU)"
    },
    {
       "ticker":"ISRG",
       "security":"Intuitive Surgical Inc.",
       "description":"Intuitive Surgical Inc. (ISRG)"
    },
    {
       "ticker":"IVZ",
       "security":"Invesco Ltd.",
       "description":"Invesco Ltd. (IVZ)"
    },
    {
       "ticker":"IPGP",
       "security":"IPG Photonics Corp.",
       "description":"IPG Photonics Corp. (IPGP)"
    },
    {
       "ticker":"IQV",
       "security":"IQVIA Holdings Inc.",
       "description":"IQVIA Holdings Inc. (IQV)"
    },
    {
       "ticker":"IRM",
       "security":"Iron Mountain Incorporated",
       "description":"Iron Mountain Incorporated (IRM)"
    },
    {
       "ticker":"JKHY",
       "security":"Jack Henry & Associates",
       "description":"Jack Henry & Associates (JKHY)"
    },
    {
       "ticker":"J",
       "security":"Jacobs Engineering Group",
       "description":"Jacobs Engineering Group (J)"
    },
    {
       "ticker":"JBHT",
       "security":"J. B. Hunt Transport Services",
       "description":"J. B. Hunt Transport Services (JBHT)"
    },
    {
       "ticker":"SJM",
       "security":"JM Smucker",
       "description":"JM Smucker (SJM)"
    },
    {
       "ticker":"JNJ",
       "security":"Johnson & Johnson",
       "description":"Johnson & Johnson (JNJ)"
    },
    {
       "ticker":"JCI",
       "security":"Johnson Controls International",
       "description":"Johnson Controls International (JCI)"
    },
    {
       "ticker":"JPM",
       "security":"JPMorgan Chase & Co.",
       "description":"JPMorgan Chase & Co. (JPM)"
    },
    {
       "ticker":"JNPR",
       "security":"Juniper Networks",
       "description":"Juniper Networks (JNPR)"
    },
    {
       "ticker":"KSU",
       "security":"Kansas City Southern",
       "description":"Kansas City Southern (KSU)"
    },
    {
       "ticker":"K",
       "security":"Kellogg Co.",
       "description":"Kellogg Co. (K)"
    },
    {
       "ticker":"KEY",
       "security":"KeyCorp",
       "description":"KeyCorp (KEY)"
    },
    {
       "ticker":"KEYS",
       "security":"Keysight Technologies",
       "description":"Keysight Technologies (KEYS)"
    },
    {
       "ticker":"KMB",
       "security":"Kimberly-Clark",
       "description":"Kimberly-Clark (KMB)"
    },
    {
       "ticker":"KIM",
       "security":"Kimco Realty",
       "description":"Kimco Realty (KIM)"
    },
    {
       "ticker":"KMI",
       "security":"Kinder Morgan",
       "description":"Kinder Morgan (KMI)"
    },
    {
       "ticker":"KLAC",
       "security":"KLA Corporation",
       "description":"KLA Corporation (KLAC)"
    },
    {
       "ticker":"KHC",
       "security":"Kraft Heinz Co",
       "description":"Kraft Heinz Co (KHC)"
    },
    {
       "ticker":"KR",
       "security":"Kroger Co.",
       "description":"Kroger Co. (KR)"
    },
    {
       "ticker":"LB",
       "security":"L Brands Inc.",
       "description":"L Brands Inc. (LB)"
    },
    {
       "ticker":"LHX",
       "security":"L3Harris Technologies",
       "description":"L3Harris Technologies (LHX)"
    },
    {
       "ticker":"LH",
       "security":"Laboratory Corp. of America Holding",
       "description":"Laboratory Corp. of America Holding (LH)"
    },
    {
       "ticker":"LRCX",
       "security":"Lam Research",
       "description":"Lam Research (LRCX)"
    },
    {
       "ticker":"LW",
       "security":"Lamb Weston Holdings Inc",
       "description":"Lamb Weston Holdings Inc (LW)"
    },
    {
       "ticker":"LVS",
       "security":"Las Vegas Sands",
       "description":"Las Vegas Sands (LVS)"
    },
    {
       "ticker":"LEG",
       "security":"Leggett & Platt",
       "description":"Leggett & Platt (LEG)"
    },
    {
       "ticker":"LDOS",
       "security":"Leidos Holdings",
       "description":"Leidos Holdings (LDOS)"
    },
    {
       "ticker":"LEN",
       "security":"Lennar Corp.",
       "description":"Lennar Corp. (LEN)"
    },
    {
       "ticker":"LLY",
       "security":"Lilly (Eli) & Co.",
       "description":"Lilly (Eli) & Co. (LLY)"
    },
    {
       "ticker":"LNC",
       "security":"Lincoln National",
       "description":"Lincoln National (LNC)"
    },
    {
       "ticker":"LIN",
       "security":"Linde plc",
       "description":"Linde plc (LIN)"
    },
    {
       "ticker":"LYV",
       "security":"Live Nation Entertainment",
       "description":"Live Nation Entertainment (LYV)"
    },
    {
       "ticker":"LKQ",
       "security":"LKQ Corporation",
       "description":"LKQ Corporation (LKQ)"
    },
    {
       "ticker":"LMT",
       "security":"Lockheed Martin Corp.",
       "description":"Lockheed Martin Corp. (LMT)"
    },
    {
       "ticker":"L",
       "security":"Loews Corp.",
       "description":"Loews Corp. (L)"
    },
    {
       "ticker":"LOW",
       "security":"Lowe's Cos.",
       "description":"Lowe's Cos. (LOW)"
    },
    {
       "ticker":"LUMN",
       "security":"Lumen Technologies",
       "description":"Lumen Technologies (LUMN)"
    },
    {
       "ticker":"LYB",
       "security":"LyondellBasell",
       "description":"LyondellBasell (LYB)"
    },
    {
       "ticker":"MTB",
       "security":"M&T Bank Corp.",
       "description":"M&T Bank Corp. (MTB)"
    },
    {
       "ticker":"MRO",
       "security":"Marathon Oil Corp.",
       "description":"Marathon Oil Corp. (MRO)"
    },
    {
       "ticker":"MPC",
       "security":"Marathon Petroleum",
       "description":"Marathon Petroleum (MPC)"
    },
    {
       "ticker":"MKTX",
       "security":"MarketAxess",
       "description":"MarketAxess (MKTX)"
    },
    {
       "ticker":"MAR",
       "security":"Marriott Int'l.",
       "description":"Marriott Int'l. (MAR)"
    },
    {
       "ticker":"MMC",
       "security":"Marsh & McLennan",
       "description":"Marsh & McLennan (MMC)"
    },
    {
       "ticker":"MLM",
       "security":"Martin Marietta Materials",
       "description":"Martin Marietta Materials (MLM)"
    },
    {
       "ticker":"MAS",
       "security":"Masco Corp.",
       "description":"Masco Corp. (MAS)"
    },
    {
       "ticker":"MA",
       "security":"Mastercard Inc.",
       "description":"Mastercard Inc. (MA)"
    },
    {
       "ticker":"MKC",
       "security":"McCormick & Co.",
       "description":"McCormick & Co. (MKC)"
    },
    {
       "ticker":"MXIM",
       "security":"Maxim Integrated Products Inc",
       "description":"Maxim Integrated Products Inc (MXIM)"
    },
    {
       "ticker":"MCD",
       "security":"McDonald's Corp.",
       "description":"McDonald's Corp. (MCD)"
    },
    {
       "ticker":"MCK",
       "security":"McKesson Corp.",
       "description":"McKesson Corp. (MCK)"
    },
    {
       "ticker":"MDT",
       "security":"Medtronic plc",
       "description":"Medtronic plc (MDT)"
    },
    {
       "ticker":"MRK",
       "security":"Merck & Co.",
       "description":"Merck & Co. (MRK)"
    },
    {
       "ticker":"MET",
       "security":"MetLife Inc.",
       "description":"MetLife Inc. (MET)"
    },
    {
       "ticker":"MTD",
       "security":"Mettler Toledo",
       "description":"Mettler Toledo (MTD)"
    },
    {
       "ticker":"MGM",
       "security":"MGM Resorts International",
       "description":"MGM Resorts International (MGM)"
    },
    {
       "ticker":"MCHP",
       "security":"Microchip Technology",
       "description":"Microchip Technology (MCHP)"
    },
    {
       "ticker":"MU",
       "security":"Micron Technology",
       "description":"Micron Technology (MU)"
    },
    {
       "ticker":"MSFT",
       "security":"Microsoft Corp.",
       "description":"Microsoft Corp. (MSFT)"
    },
    {
       "ticker":"MAA",
       "security":"Mid-America Apartments",
       "description":"Mid-America Apartments (MAA)"
    },
    {
       "ticker":"MHK",
       "security":"Mohawk Industries",
       "description":"Mohawk Industries (MHK)"
    },
    {
       "ticker":"TAP",
       "security":"Molson Coors Beverage Company",
       "description":"Molson Coors Beverage Company (TAP)"
    },
    {
       "ticker":"MDLZ",
       "security":"Mondelez International",
       "description":"Mondelez International (MDLZ)"
    },
    {
       "ticker":"MNST",
       "security":"Monster Beverage",
       "description":"Monster Beverage (MNST)"
    },
    {
       "ticker":"MCO",
       "security":"Moody's Corp",
       "description":"Moody's Corp (MCO)"
    },
    {
       "ticker":"MS",
       "security":"Morgan Stanley",
       "description":"Morgan Stanley (MS)"
    },
    {
       "ticker":"MOS",
       "security":"The Mosaic Company",
       "description":"The Mosaic Company (MOS)"
    },
    {
       "ticker":"MSI",
       "security":"Motorola Solutions Inc.",
       "description":"Motorola Solutions Inc. (MSI)"
    },
    {
       "ticker":"MSCI",
       "security":"MSCI Inc",
       "description":"MSCI Inc (MSCI)"
    },
    {
       "ticker":"NDAQ",
       "security":"Nasdaq, Inc.",
       "description":"Nasdaq, Inc. (NDAQ)"
    },
    {
       "ticker":"NTAP",
       "security":"NetApp",
       "description":"NetApp (NTAP)"
    },
    {
       "ticker":"NFLX",
       "security":"Netflix Inc.",
       "description":"Netflix Inc. (NFLX)"
    },
    {
       "ticker":"NWL",
       "security":"Newell Brands",
       "description":"Newell Brands (NWL)"
    },
    {
       "ticker":"NEM",
       "security":"Newmont Corporation",
       "description":"Newmont Corporation (NEM)"
    },
    {
       "ticker":"NWSA",
       "security":"News Corp. Class A",
       "description":"News Corp. Class A (NWSA)"
    },
    {
       "ticker":"NWS",
       "security":"News Corp. Class B",
       "description":"News Corp. Class B (NWS)"
    },
    {
       "ticker":"NEE",
       "security":"NextEra Energy",
       "description":"NextEra Energy (NEE)"
    },
    {
       "ticker":"NLSN",
       "security":"Nielsen Holdings",
       "description":"Nielsen Holdings (NLSN)"
    },
    {
       "ticker":"NKE",
       "security":"Nike, Inc.",
       "description":"Nike, Inc. (NKE)"
    },
    {
       "ticker":"NI",
       "security":"NiSource Inc.",
       "description":"NiSource Inc. (NI)"
    },
    {
       "ticker":"NSC",
       "security":"Norfolk Southern Corp.",
       "description":"Norfolk Southern Corp. (NSC)"
    },
    {
       "ticker":"NTRS",
       "security":"Northern Trust Corp.",
       "description":"Northern Trust Corp. (NTRS)"
    },
    {
       "ticker":"NOC",
       "security":"Northrop Grumman",
       "description":"Northrop Grumman (NOC)"
    },
    {
       "ticker":"NLOK",
       "security":"NortonLifeLock",
       "description":"NortonLifeLock (NLOK)"
    },
    {
       "ticker":"NCLH",
       "security":"Norwegian Cruise Line Holdings",
       "description":"Norwegian Cruise Line Holdings (NCLH)"
    },
    {
       "ticker":"NOV",
       "security":"NOV Inc.",
       "description":"NOV Inc. (NOV)"
    },
    {
       "ticker":"NRG",
       "security":"NRG Energy",
       "description":"NRG Energy (NRG)"
    },
    {
       "ticker":"NUE",
       "security":"Nucor Corp.",
       "description":"Nucor Corp. (NUE)"
    },
    {
       "ticker":"NVDA",
       "security":"Nvidia Corporation",
       "description":"Nvidia Corporation (NVDA)"
    },
    {
       "ticker":"NVR",
       "security":"NVR, Inc.",
       "description":"NVR, Inc. (NVR)"
    },
    {
       "ticker":"ORLY",
       "security":"O'Reilly Automotive",
       "description":"O'Reilly Automotive (ORLY)"
    },
    {
       "ticker":"OXY",
       "security":"Occidental Petroleum",
       "description":"Occidental Petroleum (OXY)"
    },
    {
       "ticker":"ODFL",
       "security":"Old Dominion Freight Line",
       "description":"Old Dominion Freight Line (ODFL)"
    },
    {
       "ticker":"OMC",
       "security":"Omnicom Group",
       "description":"Omnicom Group (OMC)"
    },
    {
       "ticker":"OKE",
       "security":"ONEOK",
       "description":"ONEOK (OKE)"
    },
    {
       "ticker":"ORCL",
       "security":"Oracle Corp.",
       "description":"Oracle Corp. (ORCL)"
    },
    {
       "ticker":"OTIS",
       "security":"Otis Worldwide",
       "description":"Otis Worldwide (OTIS)"
    },
    {
       "ticker":"PCAR",
       "security":"PACCAR Inc.",
       "description":"PACCAR Inc. (PCAR)"
    },
    {
       "ticker":"PKG",
       "security":"Packaging Corporation of America",
       "description":"Packaging Corporation of America (PKG)"
    },
    {
       "ticker":"PH",
       "security":"Parker-Hannifin",
       "description":"Parker-Hannifin (PH)"
    },
    {
       "ticker":"PAYX",
       "security":"Paychex Inc.",
       "description":"Paychex Inc. (PAYX)"
    },
    {
       "ticker":"PAYC",
       "security":"Paycom",
       "description":"Paycom (PAYC)"
    },
    {
       "ticker":"PYPL",
       "security":"PayPal",
       "description":"PayPal (PYPL)"
    },
    {
       "ticker":"PNR",
       "security":"Pentair plc",
       "description":"Pentair plc (PNR)"
    },
    {
       "ticker":"PBCT",
       "security":"People's United Financial",
       "description":"People's United Financial (PBCT)"
    },
    {
       "ticker":"PEP",
       "security":"PepsiCo Inc.",
       "description":"PepsiCo Inc. (PEP)"
    },
    {
       "ticker":"PKI",
       "security":"PerkinElmer",
       "description":"PerkinElmer (PKI)"
    },
    {
       "ticker":"PRGO",
       "security":"Perrigo",
       "description":"Perrigo (PRGO)"
    },
    {
       "ticker":"PFE",
       "security":"Pfizer Inc.",
       "description":"Pfizer Inc. (PFE)"
    },
    {
       "ticker":"PM",
       "security":"Philip Morris International",
       "description":"Philip Morris International (PM)"
    },
    {
       "ticker":"PSX",
       "security":"Phillips 66",
       "description":"Phillips 66 (PSX)"
    },
    {
       "ticker":"PNW",
       "security":"Pinnacle West Capital",
       "description":"Pinnacle West Capital (PNW)"
    },
    {
       "ticker":"PXD",
       "security":"Pioneer Natural Resources",
       "description":"Pioneer Natural Resources (PXD)"
    },
    {
       "ticker":"PNC",
       "security":"PNC Financial Services",
       "description":"PNC Financial Services (PNC)"
    },
    {
       "ticker":"POOL",
       "security":"Pool Corporation",
       "description":"Pool Corporation (POOL)"
    },
    {
       "ticker":"PPG",
       "security":"PPG Industries",
       "description":"PPG Industries (PPG)"
    },
    {
       "ticker":"PPL",
       "security":"PPL Corp.",
       "description":"PPL Corp. (PPL)"
    },
    {
       "ticker":"PFG",
       "security":"Principal Financial Group",
       "description":"Principal Financial Group (PFG)"
    },
    {
       "ticker":"PG",
       "security":"Procter & Gamble",
       "description":"Procter & Gamble (PG)"
    },
    {
       "ticker":"PGR",
       "security":"Progressive Corp.",
       "description":"Progressive Corp. (PGR)"
    },
    {
       "ticker":"PLD",
       "security":"Prologis",
       "description":"Prologis (PLD)"
    },
    {
       "ticker":"PRU",
       "security":"Prudential Financial",
       "description":"Prudential Financial (PRU)"
    },
    {
       "ticker":"PEG",
       "security":"Public Service Enterprise Group (PSEG)",
       "description":"Public Service Enterprise Group (PSEG) (PEG)"
    },
    {
       "ticker":"PSA",
       "security":"Public Storage",
       "description":"Public Storage (PSA)"
    },
    {
       "ticker":"PHM",
       "security":"PulteGroup",
       "description":"PulteGroup (PHM)"
    },
    {
       "ticker":"PVH",
       "security":"PVH Corp.",
       "description":"PVH Corp. (PVH)"
    },
    {
       "ticker":"QRVO",
       "security":"Qorvo",
       "description":"Qorvo (QRVO)"
    },
    {
       "ticker":"PWR",
       "security":"Quanta Services Inc.",
       "description":"Quanta Services Inc. (PWR)"
    },
    {
       "ticker":"QCOM",
       "security":"QUALCOMM Inc.",
       "description":"QUALCOMM Inc. (QCOM)"
    },
    {
       "ticker":"DGX",
       "security":"Quest Diagnostics",
       "description":"Quest Diagnostics (DGX)"
    },
    {
       "ticker":"RL",
       "security":"Ralph Lauren Corporation",
       "description":"Ralph Lauren Corporation (RL)"
    },
    {
       "ticker":"RJF",
       "security":"Raymond James Financial, Inc.",
       "description":"Raymond James Financial, Inc. (RJF)"
    },
    {
       "ticker":"RTX",
       "security":"Raytheon Technologies",
       "description":"Raytheon Technologies (RTX)"
    },
    {
       "ticker":"O",
       "security":"Realty Income Corporation",
       "description":"Realty Income Corporation (O)"
    },
    {
       "ticker":"REG",
       "security":"Regency Centers Corporation",
       "description":"Regency Centers Corporation (REG)"
    },
    {
       "ticker":"REGN",
       "security":"Regeneron Pharmaceuticals",
       "description":"Regeneron Pharmaceuticals (REGN)"
    },
    {
       "ticker":"RF",
       "security":"Regions Financial Corp.",
       "description":"Regions Financial Corp. (RF)"
    },
    {
       "ticker":"RSG",
       "security":"Republic Services Inc",
       "description":"Republic Services Inc (RSG)"
    },
    {
       "ticker":"RMD",
       "security":"ResMed",
       "description":"ResMed (RMD)"
    },
    {
       "ticker":"RHI",
       "security":"Robert Half International",
       "description":"Robert Half International (RHI)"
    },
    {
       "ticker":"ROK",
       "security":"Rockwell Automation Inc.",
       "description":"Rockwell Automation Inc. (ROK)"
    },
    {
       "ticker":"ROL",
       "security":"Rollins, Inc.",
       "description":"Rollins, Inc. (ROL)"
    },
    {
       "ticker":"ROP",
       "security":"Roper Technologies",
       "description":"Roper Technologies (ROP)"
    },
    {
       "ticker":"ROST",
       "security":"Ross Stores",
       "description":"Ross Stores (ROST)"
    },
    {
       "ticker":"RCL",
       "security":"Royal Caribbean Group",
       "description":"Royal Caribbean Group (RCL)"
    },
    {
       "ticker":"SPGI",
       "security":"S&P Global Inc.",
       "description":"S&P Global Inc. (SPGI)"
    },
    {
       "ticker":"CRM",
       "security":"Salesforce.com",
       "description":"Salesforce.com (CRM)"
    },
    {
       "ticker":"SBAC",
       "security":"SBA Communications",
       "description":"SBA Communications (SBAC)"
    },
    {
       "ticker":"SLB",
       "security":"Schlumberger Ltd.",
       "description":"Schlumberger Ltd. (SLB)"
    },
    {
       "ticker":"STX",
       "security":"Seagate Technology",
       "description":"Seagate Technology (STX)"
    },
    {
       "ticker":"SEE",
       "security":"Sealed Air",
       "description":"Sealed Air (SEE)"
    },
    {
       "ticker":"SRE",
       "security":"Sempra Energy",
       "description":"Sempra Energy (SRE)"
    },
    {
       "ticker":"NOW",
       "security":"ServiceNow",
       "description":"ServiceNow (NOW)"
    },
    {
       "ticker":"SHW",
       "security":"Sherwin-Williams",
       "description":"Sherwin-Williams (SHW)"
    },
    {
       "ticker":"SPG",
       "security":"Simon Property Group Inc",
       "description":"Simon Property Group Inc (SPG)"
    },
    {
       "ticker":"SWKS",
       "security":"Skyworks Solutions",
       "description":"Skyworks Solutions (SWKS)"
    },
    {
       "ticker":"SLG",
       "security":"SL Green Realty",
       "description":"SL Green Realty (SLG)"
    },
    {
       "ticker":"SNA",
       "security":"Snap-on",
       "description":"Snap-on (SNA)"
    },
    {
       "ticker":"SO",
       "security":"Southern Company",
       "description":"Southern Company (SO)"
    },
    {
       "ticker":"LUV",
       "security":"Southwest Airlines",
       "description":"Southwest Airlines (LUV)"
    },
    {
       "ticker":"SWK",
       "security":"Stanley Black & Decker",
       "description":"Stanley Black & Decker (SWK)"
    },
    {
       "ticker":"SBUX",
       "security":"Starbucks Corp.",
       "description":"Starbucks Corp. (SBUX)"
    },
    {
       "ticker":"STT",
       "security":"State Street Corp.",
       "description":"State Street Corp. (STT)"
    },
    {
       "ticker":"STE",
       "security":"STERIS plc",
       "description":"STERIS plc (STE)"
    },
    {
       "ticker":"SYK",
       "security":"Stryker Corp.",
       "description":"Stryker Corp. (SYK)"
    },
    {
       "ticker":"SIVB",
       "security":"SVB Financial",
       "description":"SVB Financial (SIVB)"
    },
    {
       "ticker":"SYF",
       "security":"Synchrony Financial",
       "description":"Synchrony Financial (SYF)"
    },
    {
       "ticker":"SNPS",
       "security":"Synopsys Inc.",
       "description":"Synopsys Inc. (SNPS)"
    },
    {
       "ticker":"SYY",
       "security":"Sysco Corp.",
       "description":"Sysco Corp. (SYY)"
    },
    {
       "ticker":"TMUS",
       "security":"T-Mobile US",
       "description":"T-Mobile US (TMUS)"
    },
    {
       "ticker":"TROW",
       "security":"T. Rowe Price Group",
       "description":"T. Rowe Price Group (TROW)"
    },
    {
       "ticker":"TTWO",
       "security":"Take-Two Interactive",
       "description":"Take-Two Interactive (TTWO)"
    },
    {
       "ticker":"TPR",
       "security":"Tapestry, Inc.",
       "description":"Tapestry, Inc. (TPR)"
    },
    {
       "ticker":"TGT",
       "security":"Target Corp.",
       "description":"Target Corp. (TGT)"
    },
    {
       "ticker":"TEL",
       "security":"TE Connectivity Ltd.",
       "description":"TE Connectivity Ltd. (TEL)"
    },
    {
       "ticker":"FTI",
       "security":"TechnipFMC",
       "description":"TechnipFMC (FTI)"
    },
    {
       "ticker":"TDY",
       "security":"Teledyne Technologies",
       "description":"Teledyne Technologies (TDY)"
    },
    {
       "ticker":"TFX",
       "security":"Teleflex",
       "description":"Teleflex (TFX)"
    },
    {
       "ticker":"TER",
       "security":"Teradyne",
       "description":"Teradyne (TER)"
    },
    {
       "ticker":"TSLA",
       "security":"Tesla, Inc.",
       "description":"Tesla, Inc. (TSLA)"
    },
    {
       "ticker":"TXN",
       "security":"Texas Instruments",
       "description":"Texas Instruments (TXN)"
    },
    {
       "ticker":"TXT",
       "security":"Textron Inc.",
       "description":"Textron Inc. (TXT)"
    },
    {
       "ticker":"TMO",
       "security":"Thermo Fisher Scientific",
       "description":"Thermo Fisher Scientific (TMO)"
    },
    {
       "ticker":"TJX",
       "security":"TJX Companies Inc.",
       "description":"TJX Companies Inc. (TJX)"
    },
    {
       "ticker":"TSCO",
       "security":"Tractor Supply Company",
       "description":"Tractor Supply Company (TSCO)"
    },
    {
       "ticker":"TT",
       "security":"Trane Technologies plc",
       "description":"Trane Technologies plc (TT)"
    },
    {
       "ticker":"TDG",
       "security":"TransDigm Group",
       "description":"TransDigm Group (TDG)"
    },
    {
       "ticker":"TRV",
       "security":"The Travelers Companies Inc.",
       "description":"The Travelers Companies Inc. (TRV)"
    },
    {
       "ticker":"TFC",
       "security":"Truist Financial",
       "description":"Truist Financial (TFC)"
    },
    {
       "ticker":"TWTR",
       "security":"Twitter, Inc.",
       "description":"Twitter, Inc. (TWTR)"
    },
    {
       "ticker":"TYL",
       "security":"Tyler Technologies",
       "description":"Tyler Technologies (TYL)"
    },
    {
       "ticker":"TSN",
       "security":"Tyson Foods",
       "description":"Tyson Foods (TSN)"
    },
    {
       "ticker":"UDR",
       "security":"UDR, Inc.",
       "description":"UDR, Inc. (UDR)"
    },
    {
       "ticker":"ULTA",
       "security":"Ulta Beauty",
       "description":"Ulta Beauty (ULTA)"
    },
    {
       "ticker":"USB",
       "security":"U.S. Bancorp",
       "description":"U.S. Bancorp (USB)"
    },
    {
       "ticker":"UAA",
       "security":"Under Armour (Class A)",
       "description":"Under Armour (Class A) (UAA)"
    },
    {
       "ticker":"UA",
       "security":"Under Armour (Class C)",
       "description":"Under Armour (Class C) (UA)"
    },
    {
       "ticker":"UNP",
       "security":"Union Pacific Corp",
       "description":"Union Pacific Corp (UNP)"
    },
    {
       "ticker":"UAL",
       "security":"United Airlines Holdings",
       "description":"United Airlines Holdings (UAL)"
    },
    {
       "ticker":"UNH",
       "security":"UnitedHealth Group Inc.",
       "description":"UnitedHealth Group Inc. (UNH)"
    },
    {
       "ticker":"UPS",
       "security":"United Parcel Service",
       "description":"United Parcel Service (UPS)"
    },
    {
       "ticker":"URI",
       "security":"United Rentals, Inc.",
       "description":"United Rentals, Inc. (URI)"
    },
    {
       "ticker":"UHS",
       "security":"Universal Health Services",
       "description":"Universal Health Services (UHS)"
    },
    {
       "ticker":"UNM",
       "security":"Unum Group",
       "description":"Unum Group (UNM)"
    },
    {
       "ticker":"VLO",
       "security":"Valero Energy",
       "description":"Valero Energy (VLO)"
    },
    {
       "ticker":"VAR",
       "security":"Varian Medical Systems",
       "description":"Varian Medical Systems (VAR)"
    },
    {
       "ticker":"VTR",
       "security":"Ventas Inc",
       "description":"Ventas Inc (VTR)"
    },
    {
       "ticker":"VRSN",
       "security":"Verisign Inc.",
       "description":"Verisign Inc. (VRSN)"
    },
    {
       "ticker":"VRSK",
       "security":"Verisk Analytics",
       "description":"Verisk Analytics (VRSK)"
    },
    {
       "ticker":"VZ",
       "security":"Verizon Communications",
       "description":"Verizon Communications (VZ)"
    },
    {
       "ticker":"VRTX",
       "security":"Vertex Pharmaceuticals Inc",
       "description":"Vertex Pharmaceuticals Inc (VRTX)"
    },
    {
       "ticker":"VFC",
       "security":"VF Corporation",
       "description":"VF Corporation (VFC)"
    },
    {
       "ticker":"VIAC",
       "security":"ViacomCBS",
       "description":"ViacomCBS (VIAC)"
    },
    {
       "ticker":"VTRS",
       "security":"Viatris",
       "description":"Viatris (VTRS)"
    },
    {
       "ticker":"V",
       "security":"Visa Inc.",
       "description":"Visa Inc. (V)"
    },
    {
       "ticker":"VNT",
       "security":"Vontier",
       "description":"Vontier (VNT)"
    },
    {
       "ticker":"VNO",
       "security":"Vornado Realty Trust",
       "description":"Vornado Realty Trust (VNO)"
    },
    {
       "ticker":"VMC",
       "security":"Vulcan Materials",
       "description":"Vulcan Materials (VMC)"
    },
    {
       "ticker":"WRB",
       "security":"W. R. Berkley Corporation",
       "description":"W. R. Berkley Corporation (WRB)"
    },
    {
       "ticker":"WAB",
       "security":"Westinghouse Air Brake Technologies Corp",
       "description":"Westinghouse Air Brake Technologies Corp (WAB)"
    },
    {
       "ticker":"WMT",
       "security":"Walmart",
       "description":"Walmart (WMT)"
    },
    {
       "ticker":"WBA",
       "security":"Walgreens Boots Alliance",
       "description":"Walgreens Boots Alliance (WBA)"
    },
    {
       "ticker":"DIS",
       "security":"The Walt Disney Company",
       "description":"The Walt Disney Company (DIS)"
    },
    {
       "ticker":"WM",
       "security":"Waste Management Inc.",
       "description":"Waste Management Inc. (WM)"
    },
    {
       "ticker":"WAT",
       "security":"Waters Corporation",
       "description":"Waters Corporation (WAT)"
    },
    {
       "ticker":"WEC",
       "security":"WEC Energy Group",
       "description":"WEC Energy Group (WEC)"
    },
    {
       "ticker":"WFC",
       "security":"Wells Fargo",
       "description":"Wells Fargo (WFC)"
    },
    {
       "ticker":"WELL",
       "security":"Welltower Inc.",
       "description":"Welltower Inc. (WELL)"
    },
    {
       "ticker":"WST",
       "security":"West Pharmaceutical Services",
       "description":"West Pharmaceutical Services (WST)"
    },
    {
       "ticker":"WDC",
       "security":"Western Digital",
       "description":"Western Digital (WDC)"
    },
    {
       "ticker":"WU",
       "security":"Western Union Co",
       "description":"Western Union Co (WU)"
    },
    {
       "ticker":"WRK",
       "security":"WestRock",
       "description":"WestRock (WRK)"
    },
    {
       "ticker":"WY",
       "security":"Weyerhaeuser",
       "description":"Weyerhaeuser (WY)"
    },
    {
       "ticker":"WHR",
       "security":"Whirlpool Corp.",
       "description":"Whirlpool Corp. (WHR)"
    },
    {
       "ticker":"WMB",
       "security":"Williams Companies",
       "description":"Williams Companies (WMB)"
    },
    {
       "ticker":"WLTW",
       "security":"Willis Towers Watson",
       "description":"Willis Towers Watson (WLTW)"
    },
    {
       "ticker":"WYNN",
       "security":"Wynn Resorts Ltd",
       "description":"Wynn Resorts Ltd (WYNN)"
    },
    {
       "ticker":"XEL",
       "security":"Xcel Energy Inc",
       "description":"Xcel Energy Inc (XEL)"
    },
    {
       "ticker":"XRX",
       "security":"Xerox",
       "description":"Xerox (XRX)"
    },
    {
       "ticker":"XLNX",
       "security":"Xilinx",
       "description":"Xilinx (XLNX)"
    },
    {
       "ticker":"XYL",
       "security":"Xylem Inc.",
       "description":"Xylem Inc. (XYL)"
    },
    {
       "ticker":"YUM",
       "security":"Yum! Brands Inc",
       "description":"Yum! Brands Inc (YUM)"
    },
    {
       "ticker":"ZBRA",
       "security":"Zebra Technologies",
       "description":"Zebra Technologies (ZBRA)"
    },
    {
       "ticker":"ZBH",
       "security":"Zimmer Biomet",
       "description":"Zimmer Biomet (ZBH)"
    },
    {
       "ticker":"ZION",
       "security":"Zions Bancorp",
       "description":"Zions Bancorp (ZION)"
    },
    {
       "ticker":"ZTS",
       "security":"Zoetis",
       "description":"Zoetis (ZTS)"
    }
 ]

export {STOCK_DATA}