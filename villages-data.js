// villages-data.js
// Marrons van Suriname — village data
// Languages: nl (Dutch), en (English), sr (Sranan Tongo)
// Sranan Tongo paragraphs are written to match the depth and length of NL and EN.

const VILLAGES = [

  // ══ NDYUKA ═══════════════════════════════════════════════

  { id: 'diitabiki', society: 'ndyuka', granman: true, lat: 3.778, lng: -54.652,
    names: { nl: 'Diitabiki (Drietabbetje)', en: 'Diitabiki (Drietabbetje)', sr: 'Diitabiki (Drietabbetje)' },
    subtitles: { nl: 'Zetel van de Granman · Tapanahonyrivier', en: 'Seat of the Granman · Tapanahony River', sr: 'Oso fu Granman · Tapanahony Liba' },
    river: 'Tapanahonyrivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Diitabiki — "drie eilanden" in zowel Ndyuka als Sranan Tongo — is het politieke en spirituele hart van het Ndyuka-volk, gelegen aan de Tapanahonyrivier in het district Sipaliwini. Het dorp fungeert als zetel van de granman en herbergt het orakel van de Ndyuka.',
        en: 'Diitabiki — "three islands" in both Ndyuka and Sranan Tongo — is the political and spiritual heart of the Ndyuka people, on the Tapanahony River in Sipaliwini District. The village serves as the seat of the granman and houses the Ndyuka oracle.',
        sr: 'Diitabiki — "dri ailan" na Ndyuka tongo en Sranantongo — na di politikale en spirituele hati fu Ndyuka pipel, na Tapanahony Liba na Sipaliwini Distrikt. Di fowru de oso fu di granman, en a de pe di orakeri fu Ndyuka de libi.',
      },
      founding: {
        nl: 'De Ndyuka zijn afstammelingen van tot slaaf gemaakten die in de 17e en 18e eeuw van Engelse en Nederlandse plantages aan de Surinaamse kust ontsnapten. Na een langdurige guerrillaoorlog sloten zij in 1760 een vredesverdrag met de Nederlandse koloniale autoriteiten — het eerste dergelijke verdrag in Suriname. Vanaf 1761 trokken velen stroomopwaarts langs de Tapanahonyrivier, en Diitabiki groeide uit tot het politieke centrum. Diitabiki is sinds 1950 officieel de residentie van de granman.',
        en: 'The Ndyuka are descendants of enslaved people who escaped from English and Dutch plantations on the Surinamese coast during the 17th and 18th centuries. After a prolonged guerrilla war, they concluded a peace treaty with Dutch colonial authorities in 1760 — the first such treaty in Suriname. From 1761 many moved upstream along the Tapanahony, and Diitabiki grew into the political center. Diitabiki has been the official residence of the granman since 1950.',
        sr: 'Ndyuka pipel de naksama fu enslefs sma di ben ron wey fu Ingris en Olondesi plantasi na Sranan kosta na 17de en 18de ieuwen. Baka wan langa gerilya-oorlog, den ben seti wan frede-traktati nanga Olondesi koloniale otoreteti na 1760 — di fosi sramaten dati na Sranan. Fu 1761 a furu sma ben muvi go na ini liba nanga Tapanahony, en Diitabiki ben gro kon na di politikale sentro. Fu 1950 Diitabiki de officieel oso fu di granman.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1760 genoten de Ndyuka grote autonomie. In de 19e eeuw verwierven zij een haast-monopolie op de vrachtvaart tussen Albina en het binnenland, wat hen economisch macht gaf. De Binnenlandse Oorlog (1986–1992), waarbij het Jungle Commando onder leiding van de Ndyuka Ronnie Brunswijk streed tegen het Nationaal Leger van Bouterse, bracht massale verwoesting. Ndyuka-dorpen langs de Cottica werden platgebrand; ruim 10.000 vluchtelingen ontvluchtten naar Frans-Guyana. Granman Gazon weigerde partij te kiezen en bewaarde de neutraliteit van het Tapanahony-resort.',
        en: 'After the 1760 peace treaty the Ndyuka enjoyed great autonomy. In the 19th century they gained a near-monopoly on freight transport between Albina and the interior, giving them economic power. The Interior War (1986–1992), in which the Jungle Commando under Ndyuka leader Ronnie Brunswijk fought against Bouterse\'s National Army, brought massive destruction. Ndyuka villages along the Cottica were burned; over 10,000 refugees fled to French Guiana. Granman Gazon refused to take sides, preserving the neutrality of the Tapanahony resort.',
        sr: 'Baka di traktati fu 1760, Ndyuka ben abi granbigi awtonemsi. Na 19de ieuwen den ben kisi prisiri fu kontroleer bijna ala fri-frei tussen Albina en di binnenlant, di ben gi den ekonomikale feti-krakti. Di Binnenlandse Oorlog (1986–1992), pe Jungle Commando ondro lidriman Ronnie Brunswijk — srefi wan Ndyuka — ben feti kopi Bouterse en hem Nationaal Lesre, ben breng massive ruïne. Ndyuka fowru nanga Cottica Liba ben brandi kon grontapu; moro dan 10.000 fisi sma ben ron wey go na Frans-Guyane. Granman Gazon ben weigere fu sori wan kanti en a ben hori di neutraliteit fu Tapanahony-resort.',
      },
      leadership: {
        nl: 'De granman is de opperste gezagdrager van de Ndyuka, bijgestaan door kabitens (kapiteins) en basiyas (opzieners). Diitabiki is tevens de locatie van het Ndyuka-orakel, dat een centrale rol speelt bij politieke en spirituele beslissingen. De granman vertegenwoordigt de Ndyuka in de betrekkingen met de Surinaamse staat. Ronnie Brunswijk, zelf Ndyuka, is huidig vicepresident van Suriname.',
        en: 'The granman is the paramount authority of the Ndyuka, assisted by kabitens (captains) and basiyas (aldermen). Diitabiki is also the location of the Ndyuka oracle, which plays a central role in political and spiritual decisions. The granman represents the Ndyuka in relations with the Surinamese state. Ronnie Brunswijk, himself Ndyuka, is current Vice President of Suriname.',
        sr: 'Di granman na di ogri otoreteti fu Ndyuka, nanga kabitens (kapiteins) en basiyas (opzeners) fu helpiman. Diitabiki de oso fu di Ndyuka orakeri, di speli wan sentrali rolo na politikale en spirituele beslissingen. Di granman reprezenteer di Ndyuka na di relasi nanga Sranan strati. Ronnie Brunswijk, srefi wan Ndyuka sma, na huidig visepresident fu Suriname.',
      },
      challenges: {
        nl: 'De hedendaagse uitdagingen voor de Ndyuka zijn ingrijpend. Kwikverontreiniging door kleinschalige goudwinning — waarbij zowel Braziliaanse garimpeiros als Ndyuka-goudzoekers betrokken zijn — tast rivieren en gezondheid aan. Van de geschatte 90.000 Ndyuka woont nog maar een minderheid in het traditionele binnenland; de rest leeft in Paramaribo, Frans-Guyana of Nederland. Grondrechten blijven onzeker: het Surinaamse recht erkent Marron-landrechten formeel niet, ondanks uitspraken van het Inter-Amerikaans Hof.',
        en: 'Contemporary challenges for the Ndyuka are severe. Mercury contamination from small-scale gold mining — involving both Brazilian garimpeiros and Ndyuka miners — damages rivers and health. Of an estimated 90,000 Ndyuka, only a minority still lives in the traditional interior; the rest live in Paramaribo, French Guiana, or the Netherlands. Land rights remain precarious: Surinamese law does not formally recognize Maroon land rights, despite rulings from the Inter-American Court.',
        sr: 'Di wroko-futu problemen fu Ndyuka tide de ari tranga. Kwik-pisi fu pikin gowtu-olo werki — pe Brazilian garimpeiros en Ndyuka srefi de pina gowtu — de broko libas en kondre-libi. Fu di skatteer 90.000 Ndyuka, nomo wan klein minderhetti de libi ete na di traditionele binnenlant; di resti de libi na Paramaribo, Frans-Guyane, oso na Holland. Gronrechten de na wantimpi onzeiker: Sranan weti no erkenne Marron gronrechten formeel, tide nanga uitspraken fu di Inter-Amerikaans Hof.',
      },
    },
  },

  { id: 'futupasi', society: 'ndyuka', granman: false, lat: 3.830, lng: -54.620,
    names: { nl: 'Futupasi', en: 'Futupasi', sr: 'Futupasi' },
    subtitles: { nl: 'Ndyuka-dorp · Tapanahonyrivier', en: 'Ndyuka village · Tapanahony River', sr: 'Ndyuka fowru · Tapanahony Liba' },
    river: 'Tapanahonyrivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Futupasi is een Ndyuka-dorp aan de Tapanahonyrivier, gelegen vlak bij Diitabiki in het Tapanahony-resort.',
        en: 'Futupasi is a Ndyuka village on the Tapanahony River, close to Diitabiki in the Tapanahony resort.',
        sr: 'Futupasi na wan Ndyuka fowru na Tapanahony Liba, krosibei Diitabiki, na ini fu di Tapanahony-resort.',
      },
      founding: {
        nl: 'Het dorp ontstond als onderdeel van de Ndyuka-nederzettingen die zich na het vredesverdrag van 1760 langs de Tapanahony vestigden.',
        en: 'The village emerged as part of the Ndyuka settlements that established themselves along the Tapanahony after the 1760 peace treaty.',
        sr: 'Di fowru ben meki na ondro fu di Ndyuka nederzettingen di ben seti densrefi nanga Tapanahony Liba baka di frede-traktati fu 1760.',
      },
      history: {
        nl: 'Futupasi deelt de historische ervaringen van de omringende Ndyuka-dorpen, waaronder de impact van de Binnenlandse Oorlog in de jaren 1980.',
        en: 'Futupasi shares the historical experiences of the surrounding Ndyuka villages, including the impact of the Interior War in the 1980s.',
        sr: 'Futupasi abi di srefi historikale ervaringen nanga di fowru rondom en, inkluzif di hevi slag fu di Binnenlandse Oorlog na den 1980s, pe furu sma ben sari en fowru ben broko.',
      },
      leadership: {
        nl: 'Het dorp staat onder gezag van een kabiten, die verantwoording aflegt aan de granman in Diitabiki.',
        en: 'The village is governed by a kabiten who reports to the granman in Diitabiki.',
        sr: 'Di fowru de ondro bestuur fu wan kabiten, di meki rekenschap na di granman na Diitabiki fu ala sani di pasa na kondre.',
      },
      challenges: {
        nl: 'De elektriciteitsvoorziening is een blijvend probleem. Plannen voor een waterkrachtcentrale bij de Gran Olo-stroomversnellingen zijn al jaren in ontwikkeling.',
        en: 'Electricity supply remains a persistent problem. Plans for a hydroelectric plant at the Gran Olo rapids have been in development for years.',
        sr: 'Leti-leti de wan trobi probren di no wani go wey. Plannen fu wan waterkrachtcentrale nanga Gran Olo-sneli de na groei fu langkanti jari ete, mar no doro reali nog.',
      },
    },
  },

  { id: 'moitaki', society: 'ndyuka', granman: false, lat: 3.807, lng: -54.619,
    names: { nl: 'Moitaki', en: 'Moitaki', sr: 'Moitaki' },
    subtitles: { nl: 'Ndyuka-dorp · nabij Diitabiki', en: 'Ndyuka village · near Diitabiki', sr: 'Ndyuka fowru · krosibei Diitabiki' },
    river: 'Tapanahonyrivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Moitaki is een Ndyuka-dorp aan de Tapanahonyrivier, op circa 3 km ten noordoosten van Diitabiki, nabij Mainsi.',
        en: 'Moitaki is a Ndyuka village on the Tapanahony River, about 3 km northeast of Diitabiki, near Mainsi.',
        sr: 'Moitaki na wan Ndyuka fowru na Tapanahony Liba, someni 3 km na noort-oostsei fu Diitabiki, krosibei Mainsi fowru.',
      },
      founding: {
        nl: 'Moitaki maakt deel uit van het cluster van dorpen rondom het politieke centrum Diitabiki dat zich na 1760 ontwikkelde.',
        en: 'Moitaki is part of the cluster of villages around the political center of Diitabiki that developed after 1760.',
        sr: 'Moitaki meki deypaart fu di groep fowru di de rondom di politikale sentro Diitabiki, ala di ben gro op baka di frede-traktati fu 1760.',
      },
      history: {
        nl: 'Het dorp deelt de geschiedenis van de Tapanahony-regio, inclusief de periode van de Binnenlandse Oorlog waarbij dit gebied relatief gespaard bleef dankzij de neutraliteitspolitiek van granman Gazon.',
        en: 'The village shares the history of the Tapanahony region, including the period of the Interior War during which this area was relatively spared thanks to the neutrality policy of granman Gazon.',
        sr: 'Di fowru abi di srefi historia nanga di Tapanahony-regio na ala en, inkluzif di periode fu di Binnenlandse Oorlog, pe disi kondre ben sorfiri lesi skada dankzij di neutraliteitspolitiki fu granman Gazon di ben weigere fu sori wan kanti.',
      },
      leadership: {
        nl: 'Bestuurd door een kabiten onder het gezag van de granman van Diitabiki.',
        en: 'Governed by a kabiten under the authority of the granman of Diitabiki.',
        sr: 'Di fowru de bestuurd doro wan kabiten di de ondro di otoreteti fu di granman na Diitabiki, na srefi fasi leki ala leysi Ndyuka fowru.',
      },
      challenges: {
        nl: 'Toegankelijkheid, basisgezondheidszorg en onderwijs blijven uitdagingen voor dit en vergelijkbare kleine dorpen in het binnenland.',
        en: 'Accessibility, basic healthcare, and education remain challenges for this and similar small villages in the interior.',
        sr: 'Kan-go na di fowru, basisgezondheidszorg en skori de trobi wroko fu disi en ala sma pikin fowru na binnenlant, pe weg en brug no de en alasani na boto de.',
      },
    },
  },

  { id: 'puketi', society: 'ndyuka', granman: false, lat: 3.785, lng: -54.600,
    names: { nl: 'Puketi (Poeketi)', en: 'Puketi (Poeketi)', sr: 'Puketi (Poeketi)' },
    subtitles: { nl: 'Ndyuka-dorp · eigen landingsbaan', en: 'Ndyuka village · own airstrip', sr: 'Ndyuka fowru · hem eigi airstrip' },
    river: 'Tapanahonyrivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Puketi is een Ndyuka-dorp aan de Tapanahonyrivier op circa 5 km van Diitabiki. Het dorp heeft een eigen landingsbaan (Poeketi Airstrip) voor verbinding met Paramaribo.',
        en: 'Puketi is a Ndyuka village on the Tapanahony River about 5 km from Diitabiki. It has its own airstrip (Poeketi Airstrip) for connection to Paramaribo.',
        sr: 'Puketi na wan Ndyuka fowru na Tapanahony Liba, someni 5 km fu Diitabiki. Di fowru abi hem eigi airstrip — Poeketi Airstrip — di de di enki wey fu kontakti nanga Paramaribo snel.',
      },
      founding: {
        nl: 'Puketi ontstond als onderdeel van de Ndyuka-nederzettingen langs de Tapanahony na het vredesverdrag van 1760.',
        en: 'Puketi emerged as part of the Ndyuka settlements along the Tapanahony after the 1760 peace treaty.',
        sr: 'Puketi ben meki na ondro fu di Ndyuka nederzettingen di ben seti densrefi nanga Tapanahony Liba baka di frede-traktati fu 1760, pe Ndyuka ben kisi vrimi fu libi na dem eigi fasi.',
      },
      history: {
        nl: 'De infrastructuur rond de landingsbaan heeft Puketi een zekere logistieke rol gegeven in de regio.',
        en: 'The airstrip infrastructure has given Puketi a certain logistical role in the region.',
        sr: 'Di airstrip en ala sani di de rondom en ben gi Puketi wan speisyal logistikale rolo na di regio, meki a wan tussenposi fu transport tussen di harde binnenlant fowru en di kosta.',
      },
      leadership: {
        nl: 'Bestuurd door een kabiten onder de autoriteit van de granman van de Ndyuka.',
        en: 'Governed by a kabiten under the authority of the Ndyuka granman.',
        sr: 'Di fowru de bestuurd doro wan kabiten di de ondro di otoreteti fu di granman fu di Ndyuka, nanga di grantafel na Diitabiki.',
      },
      challenges: {
        nl: 'Elektriciteitsvoorziening en afhankelijkheid van externe bevoorrading via vliegtuig of boot zijn structurele uitdagingen.',
        en: 'Electricity supply and dependence on external supply by plane or boat are structural challenges.',
        sr: 'Leti-leti en di afhankelijkheid fu buitenkondre leveringen via vliegtuig oso boto de structurele problemen. Als di weder sleht de, di airstrip kan no werki en di fowru kan kom volledig afgesneden.',
      },
    },
  },

  { id: 'stoelmanseiland', society: 'ndyuka', granman: false, lat: 4.353, lng: -54.408,
    names: { nl: 'Stoelmanseiland', en: 'Stoelmans Island', sr: 'Stoelmanseiland' },
    subtitles: { nl: 'Historische grenspost · Marowijne', en: 'Historic frontier post · Marowijne', sr: 'Owru grensposo · Marowijne Liba' },
    river: 'Marowijne', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Stoelmanseiland is een Ndyuka-nederzetting op een eiland in de Marowijne op de grens met Frans-Guyana, een strategisch knooppunt tussen het binnenland en de kust.',
        en: 'Stoelmans Island is a Ndyuka settlement on an island in the Marowijne at the border with French Guiana, a strategic hub between the interior and the coast.',
        sr: 'Stoelmanseiland na wan Ndyuka nederzetting nanga wan ailan na Marowijne Liba, na di grensi nanga Frans-Guyane. A de wan strategisi sentro tussen di binnenlant en di kosta, pe boto en handeli ben pasa fu ala kanti.',
      },
      founding: {
        nl: 'In december 1791 stichtte de Nederlander Philip Stoelman hier een militaire post om de grens te bewaken tussen Ndyuka-territorium en de kolonie Suriname. De Ndyuka vestigden zich op het eiland en maakten het tot een handels- en doorvoerpunt.',
        en: 'In December 1791, the Dutchman Philip Stoelman founded a military post here to guard the boundary between Ndyuka territory and the colony of Suriname. The Ndyuka settled on the island and made it a trade and transit point.',
        sr: 'Na december 1791, di Olondesi Philip Stoelman ben meki wan militaire poso dape fu waki di grensi tussen Ndyuka territorio en di kolonie Suriname. Di Ndyuka ben seti densrefi na di ailan en den ben meki a wan handeli- en transitposo fu di liba-reysi.',
      },
      history: {
        nl: 'In de 19e en vroege 20e eeuw maakten de Ndyuka een quasi-monopolie op de binnenlandse vrachthandel. Stoelmanseiland speelde een centrale rol in dit handelsnetwerk. Tijdens de Binnenlandse Oorlog diende het als vluchtoord en doorvoerpunt voor vluchtelingen op weg naar Frans-Guyana.',
        en: 'In the 19th and early 20th centuries the Ndyuka maintained a near-monopoly on interior freight trade. Stoelmans Island played a central role in this trading network. During the Interior War it served as a refuge and transit point for refugees heading to French Guiana.',
        sr: 'Na 19de en vroeg 20ste ieuwen, Ndyuka ben hori bijna ala frei-frei fu fri-frei tussen Albina en di binnenlant. Stoelmanseiland ben speli wan sentrali rolo na disi handeli-netti. Tijdens di Binnenlandse Oorlog a ben serve als vluchthaven en transitposi fu furu sma di ben ron wey go na Frans-Guyane.',
      },
      leadership: {
        nl: 'Het eiland valt onder de jurisdictie van de Ndyuka-granman, met een lokale kabiten als bestuurder.',
        en: 'The island falls under the jurisdiction of the Ndyuka granman, with a local kabiten as administrator.',
        sr: 'Di ailan de ondro di jurisdiksie fu di Ndyuka granman, nanga wan lokale kabiten als bestuurder di de ondro hem otoreteti en di fu di granman.',
      },
      challenges: {
        nl: 'De neergang van de traditionele vrachthandel, verplaatsing van populatie naar stedelijke gebieden, en de grenseconomie (ook illegale goudhandel) zijn de voornaamste uitdagingen.',
        en: 'The decline of traditional freight trade, population shift to urban areas, and the border economy (including illegal gold trade) are the main challenges.',
        sr: 'Di neergaan fu di traditionele vrachthandeli, furu sma muvi go na stedi, en di grensekonomie — inkluzif illegale gowtu-handeli en smokkelari — de di bigisma problemen di di kondre-libi na Stoelmanseiland de moro moro hevi meki.',
      },
    },
  },

  { id: 'moiwana', society: 'ndyuka', granman: false, lat: 5.420, lng: -54.250,
    names: { nl: 'Moiwana', en: 'Moiwana', sr: 'Moiwana' },
    subtitles: { nl: 'Plek van herdenking · massamoord 1986', en: 'Place of remembrance · 1986 massacre', sr: 'Pesi fu memre · massamoord 1986' },
    river: 'Cotticaliba', district: 'Marowijne',
    sections: {
      intro: {
        nl: 'Moiwana is een Ndyuka-dorp nabij de Cotticarivier in de Marowijne-regio. Het dorp staat internationaal bekend als de plek van een van de ernstigste mensenrechtenschendingen uit de Surinaamse geschiedenis.',
        en: 'Moiwana is a Ndyuka village near the Cottica River in the Marowijne region. The village is internationally known as the site of one of the gravest human rights violations in Surinamese history.',
        sr: 'Moiwana na wan Ndyuka fowru krosibei Cottica Liba na Marowijne-regio. Di fowru wreld-beroemd na di hil eyrt fu wan fu di grantisma mensrechten-schendingen na di historia fu Suriname.',
      },
      founding: {
        nl: 'Moiwana was een gevestigde Ndyuka-gemeenschap in het Cottica-gebied, de historische thuisbasis van de Ndyuka Bilo (de benedenloop-tak).',
        en: 'Moiwana was an established Ndyuka community in the Cottica area, the historical home territory of the Ndyuka Bilo (the downstream branch).',
        sr: 'Moiwana ben wan gevestigde Ndyuka gemeenschap na Cottica regio — di historikale thisigrond fu di Ndyuka Bilo, di benedenstroom-tak fu di Ndyuka, di ben libi nanga Cottica Liba fu langkanti yari.',
      },
      history: {
        nl: 'Op 29 november 1986 viel het Surinaams Nationaal Leger het dorp aan. Meer dan 40 mannen, vrouwen en kinderen werden gedood; de huizen werden platgebrand. De overlevenden vluchtten naar Frans-Guyana. In 2005 veroordeelde het Inter-Amerikaans Hof voor de Rechten van de Mens Suriname en beval reparaties aan de overlevenden, erkenning van staatsverantwoordelijkheid en een publieke ceremonie van excuses.',
        en: 'On November 29, 1986, the Surinamese National Army attacked the village. More than 40 men, women, and children were killed; the houses were burned down. Survivors fled to French Guiana. In 2005 the Inter-American Court of Human Rights condemned Suriname and ordered reparations to survivors, recognition of state responsibility, and a public ceremony of apology.',
        sr: 'Na 29 november 1986, di Surinaams Nationaal Lesre ben ataki di fowru. Moro dan 40 manpikin, uman en pikin-pikin ben kiri; ala oso ben brandi kon grontapu. Di sma di ben libi ben ron wey go na Frans-Guyane. Na 2005, di Inter-Amerikaans Hof fu Mensrechten ben kondemneer Suriname en ben ordu dat di gobierno musu betaali reparasies na di overlevenden, erkenne dem strati-verantwoordelijkheid, en meki wan publieke sirimoenie fu verontschuldiging.',
      },
      leadership: {
        nl: 'Na de verwoesting in 1986 raakte Moiwana grotendeels verlaten. Overlevende families hebben geprobeerd terug te keren, maar de wederopbouw verloopt langzaam.',
        en: 'After the 1986 destruction Moiwana became largely abandoned. Surviving families have tried to return, but reconstruction has been slow.',
        sr: 'Baka di verwoesting fu 1986, Moiwana ben bijna volledig verlaten. Famiri di ben sorfiri prubo fu go baka, mar di wederopbouw de gaan heri langzaam — moro dan dri desenia baka, di fowru ete no den herstel.',
      },
      challenges: {
        nl: 'Trage uitbetaling van reparaties, onvolledige gerechtelijke opvolging van de daders, en de psychologische trauma\'s van overlevenden en hun nakomelingen vormen een voortdurende uitdaging. Moiwana is symbool geworden voor de onopgeloste nalatenschap van de Binnenlandse Oorlog.',
        en: 'Slow disbursement of reparations, incomplete judicial follow-through on perpetrators, and the psychological trauma of survivors and their descendants remain ongoing challenges. Moiwana has become a symbol of the unresolved legacy of the Interior War.',
        sr: 'Srow betaling fu reparasies, onfulledigde rechtszaken teki di daders, en di zwaar psychikale trauma fu di overlevenden en dem pikinnakomelingen de kontinue problemen. Moiwana ben meki wan symbool fu di onopgelost nalatenschap fu di Binnenlandse Oorlog — wan wond na Sranan sisibi di ete no furu klosi.',
      },
    },
  },

  { id: 'wanhatti', society: 'ndyuka', granman: false, lat: 5.490, lng: -54.110,
    names: { nl: 'Wanhatti', en: 'Wanhatti', sr: 'Wanhatti' },
    subtitles: { nl: 'Ndyuka Ansu-clan · Cotticaliba', en: 'Ndyuka Ansu clan · Cottica River', sr: 'Ndyuka Ansu-klan · Cottica Liba' },
    river: 'Cotticaliba', district: 'Marowijne',
    sections: {
      intro: {
        nl: 'Wanhatti is een Ndyuka-dorp en resort in het Marowijne-district, gelegen aan de Cotticaliba. Het wordt voornamelijk bewoond door Ndyuka van de Ansu-clan (lo). De bevolking bedroeg 468 mensen bij de volkstelling van 2012.',
        en: 'Wanhatti is a Ndyuka village and resort in Marowijne District on the Cottica River. It is primarily inhabited by Ndyuka of the Ansu clan (lo). Population was 468 at the 2012 census.',
        sr: 'Wanhatti na wan Ndyuka fowru en resort na Marowijne Distrikt, nanga Cottica Liba. A de bewoond prisiri fu Ndyuka fu di Ansu-klan (lo). Na di teling fu 2012, 468 sma ben libi na Wanhatti.',
      },
      founding: {
        nl: 'Wanhatti is een van de oudere Ndyuka-nederzettingen in de Cottica-regio, gelieerd aan de Ansu-matriclan.',
        en: 'Wanhatti is one of the older Ndyuka settlements in the Cottica region, affiliated with the Ansu matriclan.',
        sr: 'Wanhatti na wan fu di owru Ndyuka nederzettingen na di Cottica-regio, nanga di Ansu-matriclan, wan fu di bigi matrilineaire clans fu Ndyuka pipel di de kondre-oso na Cottica.',
      },
      history: {
        nl: 'De Cottica-regio was een van de zwaarst getroffen gebieden tijdens de Binnenlandse Oorlog. Dorpen werden vernietigd en bewoners vluchtten massaal.',
        en: 'The Cottica region was one of the hardest-hit areas during the Interior War. Villages were destroyed and residents fled en masse.',
        sr: 'Di Cottica-regio ben wan fu di zwaarst getroffen gebieden tijdens di Binnenlandse Oorlog. Furu fowru ben verwoest en brandi, en di meeste bewoners ben musti ron wey go na Frans-Guyane oso na Paramaribo fu den libi.',
      },
      leadership: {
        nl: 'Bestuurd door een kabiten van de Ansu-lo, onder het gezag van de Ndyuka-granman.',
        en: 'Governed by a kabiten of the Ansu lo, under the authority of the Ndyuka granman.',
        sr: 'Di fowru de bestuurd doro wan kabiten fu di Ansu-lo, ondro di otoreteti fu di Ndyuka granman na Diitabiki, di de di ogri otoreteti fu ala Ndyuka fowru.',
      },
      challenges: {
        nl: 'Goudwinning in de omgeving belast de Cotticarivier met kwikverontreiniging. Afhankelijkheid van de goudeconomie en beperkte alternatieve levensonderhoudsopties zijn structurele problemen.',
        en: 'Gold mining in the area burdens the Cottica River with mercury contamination. Dependence on the gold economy and limited alternative livelihood options are structural problems.',
        sr: 'Gowtu-olo werki na di omgeving de breng kwik-pisi na Cottica Liba en skadi di fisi en drinki-watra. Di afhankelijkheid fu di gowtu-ekonomie en di beperkte leysi maneri fu ley nanga dem libi de structurele problemen di no meki makkeli fu oplosi.',
      },
    },
  },

  { id: 'albina', society: 'ndyuka', granman: false, lat: 5.497, lng: -54.057,
    names: { nl: 'Albina', en: 'Albina', sr: 'Albina' },
    subtitles: { nl: 'Hoofdplaats Marowijne · grensovergang', en: 'Capital of Marowijne District · border crossing', sr: 'Hoofdplaats Marowijne · grenspaso' },
    river: 'Marowijne', district: 'Marowijne',
    sections: {
      intro: {
        nl: 'Albina is de administratieve hoofdstad van het Marowijne-district aan de Marowijne tegenover Saint-Laurent-du-Maroni in Frans-Guyana. De stad is een belangrijk doorvoerpunt voor Ndyuka-gemeenschappen in het binnenland en voor migranten naar Frans-Guyana.',
        en: 'Albina is the administrative capital of Marowijne District on the Marowijne facing Saint-Laurent-du-Maroni in French Guiana. The town is a key transit point for Ndyuka communities in the interior and for migrants to French Guiana.',
        sr: 'Albina na di administratieve hoofdplaats fu Marowijne Distrikt, na Marowijne Liba tegenover Saint-Laurent-du-Maroni na Frans-Guyane. Di stad de wan importan transitposo fu Ndyuka gemeenschappen na di binnenlant en fu sma di wani muvi go na Frans-Guyane.',
      },
      founding: {
        nl: 'Albina werd in de 19e eeuw gesticht als een handels- en bestuursknooppunt aan de Marowijne. De Ndyuka-aanwezigheid is historisch sterk door hun dominantie van de rivierhandel.',
        en: 'Albina was founded in the 19th century as a trade and administrative node on the Marowijne. Ndyuka presence is historically strong due to their dominance of river trade.',
        sr: 'Albina ben meki na 19de ieuwen als wan handeli- en bestuursknooppunt na Marowijne Liba. Di Ndyuka aanwezigheid de historisch sterk dankzij dem dominantie fu di liba-handeli tussen Albina en di binnenlant fowru.',
      },
      history: {
        nl: 'Albina speelde een cruciale rol tijdens de Binnenlandse Oorlog als vertrek- en aankomstpunt voor vluchtelingen. De stad werd ernstig beschadigd. Sindsdien is zij gedeeltelijk hersteld maar draagt zij de littekens van het conflict.',
        en: 'Albina played a crucial role during the Interior War as a departure and arrival point for refugees. The town was severely damaged. Since then it has partially recovered but bears the scars of the conflict.',
        sr: 'Albina ben speli wan cruciale rolo tijdens di Binnenlandse Oorlog als vertrek- en aankomstposi fu furu sma di ben frai. Di stad ben ernstig beschadigd doro di feti. Fu dati tem Albina ben gedeeltelijk herstel mar a dragi ete di littekens fu di oorlog nanga heri stedi.',
      },
      leadership: {
        nl: 'Albina kent zowel Surinaams stadsbestuur als een sterke Ndyuka-gemeenschapsstructuur met eigen kabitens.',
        en: 'Albina has both Surinamese municipal governance and a strong Ndyuka community structure with its own kabitens.',
        sr: 'Albina abi sodo Surinaams stadsbestuur als wan tranga Ndyuka gemeenschapsstructuur nanga hem eigi kabitens, di de verantwoordelijk fu di Ndyuka-sma na stedi en fu di kondre-libi rondom.',
      },
      challenges: {
        nl: 'De informele grenseconomie — inclusief goudhandel, mensensmokkel en drugshandel — is een groot probleem. Armoede, beperkte werkgelegenheid en slechte infrastructuur belemmeren de ontwikkeling.',
        en: 'The informal border economy — including gold trade, human smuggling, and drug trafficking — is a major problem. Poverty, limited employment, and poor infrastructure hinder development.',
        sr: 'Di informele grensekonomie — inkluzif gowtu-handeli, sma-smokkelari en drogahandeli — de wan bigisma probren. Armoede, beperkte werkgelegenheid en slechte infrastructuur de meki di ontwikkeling fu Albina go langzaam en meki leki wan ari sroto fu libi voor furu sma.',
      },
    },
  },

  { id: 'benzdorp', society: 'ndyuka', granman: false, lat: 3.582, lng: -54.007,
    names: { nl: 'Benzdorp', en: 'Benzdorp', sr: 'Benzdorp' },
    subtitles: { nl: 'Goudmijnenregio · Marowijne', en: 'Gold mining region · Marowijne', sr: 'Gowtu-olo regio · Marowijne Liba' },
    river: 'Marowijne', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Benzdorp is een Ndyuka-dorp aan de Marowijne nabij de grens met Frans-Guyana. Het ligt in het hart van een van de meest actieve goudwinningsregio\'s van Suriname.',
        en: 'Benzdorp is a Ndyuka village on the Marowijne near the French Guiana border, in the heart of one of Suriname\'s most active gold mining regions.',
        sr: 'Benzdorp na wan Ndyuka fowru na Marowijne Liba, krosibei di grensi nanga Frans-Guyane. A de na di hati fu wan fu di mees aktieve gowtu-olo regio\'s fu heri Suriname.',
      },
      founding: {
        nl: 'Benzdorp was oorspronkelijk een klein Ndyuka-dorp. De goudkoorts die vanaf de jaren 1980 de Surinaamse jungle greep, transformeerde het tot een drukke handelsplaats.',
        en: 'Benzdorp was originally a small Ndyuka village. The gold rush that gripped the Surinamese jungle from the 1980s onwards transformed it into a busy trading post.',
        sr: 'Benzdorp ben origineel wan pikin Ndyuka fowru fu normali Ndyuka-kondre-libi. Di gowtu-koorts di ben grijp di Sranan yungu fu di 1980s go na fesi, ben transformeer a kon na wan druk handelsposo pe sma fu furu kondre ben kisi miti.',
      },
      history: {
        nl: 'De goudkoorts bracht duizenden Braziliaanse garimpeiros naar de regio, samen met Ndyuka-goudzoekers. Dit creëerde economische kansen maar ook kwikverontreiniging, prostitutie, malaria en sociale ontwrichting.',
        en: 'The gold rush brought thousands of Brazilian garimpeiros to the region, alongside Ndyuka gold miners. This created economic opportunities but also mercury contamination, prostitution, malaria, and social disruption.',
        sr: 'Di gowtu-koorts ben breng duizenden Braziliaanse garimpeiros na di regio, na srefi tem nanga Ndyuka gowtu-zoekers. Disi ben krejer ekonomikale kansen mar uku kwik-pisi fu di libas, prostitutie, malaria, en zwaar sociale ontwrichting fu di fowru-libi.',
      },
      leadership: {
        nl: 'De lokale Ndyuka-gemeenschapsstructuur functioneert naast de informele economische macht van grotere goudmijnoperatoren.',
        en: 'The local Ndyuka community structure functions alongside the informal economic power of larger gold mining operators.',
        sr: 'Di lokale Ndyuka gemeenschapsstructuur nanga kabitens functioneer naast di informele ekonomikale krakti fu bigisma gowtu-olo operatoren, di sa meki a konflikteren nanga traditionele otoreteti.',
      },
      challenges: {
        nl: 'Kwikverontreiniging van rivieren en visvoorraden, hoge malaria-incidentie, maatschappelijke ontwrichting door de informele goudeconomie, en de afwezigheid van effectief Surinaams staatstoezicht zijn de grootste bedreigingen.',
        en: 'Mercury contamination of rivers and fish stocks, high malaria incidence, social disruption from the informal gold economy, and the absence of effective Surinamese state oversight are the greatest threats.',
        sr: 'Kwik-pisi fu libas en fisi-baki, hoge malaria-incidentie, sociale ontwrichting fu di informele gowtu-ekonomie, en di afwezigheid fu effectief Sranan strati-toezicht de di bigisma bedreigingen fu di kondre-libi na Benzdorp en di omgeving.',
      },
    },
  },

  { id: 'lebidoti', society: 'ndyuka', granman: false, lat: 4.983, lng: -54.933,
    names: { nl: 'Lebidoti', en: 'Lebidoti', sr: 'Lebidoti' },
    subtitles: { nl: 'Ontheemd door stuwdam · Medische Zending', en: 'Displaced by dam · Medische Zending', sr: 'Verplaatst doro dam · Medische Zending' },
    river: 'Brokopondo-regio', district: 'Brokopondo',
    sections: {
      intro: {
        nl: 'Lebidoti is een Ndyuka-dorp met circa 1.000 inwoners in het Brokopondo-district. Het dorp heeft een Medische Zending-zorgcentrum en twee naburige nederzettingen, Bakoe en Pitean.',
        en: 'Lebidoti is a Ndyuka village with about 1,000 residents in Brokopondo District. It has a Medische Zending healthcare centre and two nearby settlements, Bakoe and Pitean.',
        sr: 'Lebidoti na wan Ndyuka fowru nanga someni 1.000 sma na Brokopondo Distrikt. A abi wan Medische Zending-gezondheidssintrum en tu naburige nederzettingen: Bakoe en Pitean.',
      },
      founding: {
        nl: 'Lebidoti werd gesticht door Ndyuka-Marrons die gedwongen werden te verhuizen vanwege de bouw van de Afobakkadam en de daarmee gepaard gaande overstroming van het Brokopondostuwmeer.',
        en: 'Lebidoti was established by Ndyuka Maroons who were forced to relocate due to the construction of the Afobaka dam and the resulting flooding of the Brokopondo reservoir.',
        sr: 'Lebidoti ben meki doro Ndyuka Marrons di ben force muvi baka vanwege di bouw fu di Afobaka-dam en di daarmee gepaard gaande overstroming fu di Brokopondo-stuwmeer, di ben verwoest dem kownu-gron.',
      },
      history: {
        nl: 'De aanleg van de Afobakkadam (1964) was een traumatische ervaring voor tienduizenden Marrons — voornamelijk Saramaka en Ndyuka — wier voorouderlijke gronden overstroomden. De Surinaamse overheid en Alcoa (het aluminiumconcern dat de dam liet bouwen) betaalden minimale compensatie.',
        en: 'The construction of the Afobaka dam (1964) was a traumatic experience for tens of thousands of Maroons — primarily Saramaka and Ndyuka — whose ancestral lands were flooded. The Surinamese government and Alcoa (the aluminium company that had the dam built) paid minimal compensation.',
        sr: 'Di bouw fu di Afobaka-dam (1964) ben wan traumatische ervaring fu tienduizenden Marrons — prisiri Saramaka en Ndyuka — wan kownu-gron ben ondergeloopt. Di Sranan gobierno en Alcoa, di aluminium-bedrijf di ben lati bouw di dam, ben betaali nomo minimale compensatie fu ala dati verlies.',
      },
      leadership: {
        nl: 'Bestuurd door een kabiten onder de autoriteit van de Ndyuka-granman.',
        en: 'Governed by a kabiten under the authority of the Ndyuka granman.',
        sr: 'Di fowru de bestuurd doro wan kabiten ondro di otoreteti fu di Ndyuka granman, di de ondro di traditionele gezagsstructuur di kownu fu langkanti yari.',
      },
      challenges: {
        nl: 'De gevolgen van de gedwongen ontheemding in 1964 zijn nog altijd voelbaar in de gemeenschap. Armoede, beperkte toegang tot diensten en de psychosociale impact van het verlies van voorouderlijk land zijn blijvende uitdagingen.',
        en: 'The consequences of the forced displacement in 1964 are still felt in the community. Poverty, limited access to services, and the psychosocial impact of the loss of ancestral land are ongoing challenges.',
        sr: 'Di gevolgen fu di gedwongen verplaatsing fu 1964 de nog altijd voelbaar na di gemeenschap. Armoede, beperkte toegang na diensten, en di psychosociale impact fu di verlies fu dem kownu-gron de blijvende uitdagingen di de meki di gemenskap sari tide nogi.',
      },
    },
  },

  // ══ SARAMAKA ═════════════════════════════════════════════

  { id: 'asindopo', society: 'saramaka', granman: true, lat: 3.862, lng: -55.775,
    names: { nl: 'Asidonhopo (Asindopo)', en: 'Asidonhopo (Asindopo)', sr: 'Asidonhopo (Asindopo)' },
    subtitles: { nl: 'Zetel van de Granman · Pikin Rio', en: 'Seat of the Granman · Pikin Rio', sr: 'Oso fu Granman · Pikin Rio' },
    river: 'Pikin Rio', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Asidonhopo is de officiële residentie van de granman van de Saramaka, gelegen aan de Pikin Rio vlak voor de samenkomst met de boven-Surinamerivier. De Saramaka zijn het grootste Marronvolk van Suriname, met een bevolking van meer dan 100.000.',
        en: 'Asidonhopo is the official residence of the Saramaka granman, on the Pikin Rio just before its confluence with the upper Suriname River. The Saramaka are the largest Maroon people of Suriname, with a population exceeding 100,000.',
        sr: 'Asidonhopo na di officiële oso fu di granman fu di Saramaka, na Pikin Rio korti vori di samenkomst nanga di boo Sranan Liba. Di Saramaka de di bigisma Marron-pipel fu Suriname, nanga moro dan 100.000 sma.',
      },
      founding: {
        nl: 'De Saramaka zijn de nakomelingen van Afrikaanse tot slaaf gemaakten die eind 17e en vroeg 18e eeuw ontvluchtten. Na bijna een eeuw van guerrillaoorlog sloten zij in 1762 een vredesverdrag met de Nederlanden — een eeuw vóór de algehele afschaffing van de slavernij. Hun taal, het Saramakkaans, heeft een unieke samenstelling: circa 50% Afrikaans, 20% Engels en 20% Portugees.',
        en: 'The Saramaka are descendants of enslaved Africans who fled in the late 17th and early 18th centuries. After nearly a century of guerrilla warfare they concluded a peace treaty with the Dutch in 1762 — a century before general emancipation. Their language, Saramaccan, has a unique composition: about 50% African, 20% English, 20% Portuguese.',
        sr: 'Di Saramaka de naksama fu enslefs Afrikanen di ben ron wey na eind 17de en vroeg 18de ieuwen. Baka bijna wan ieuwen fu gerilya-feti den ben seti wan frede-traktati nanga di Olondesi na 1762 — wan ieuwen vori di algehele slavernij-abolitie. Dem tongo, Saramakkaans, abi wan unieke samenstelling: someni 50% Afrikaans, 20% Engels en 20% Portugees.',
      },
      history: {
        nl: 'In 1964 overstroomde de aanleg van de Afobakkadam (in opdracht van Alcoa) circa de helft van het traditionele Saramaka-territorium. Duizenden mensen werden gedwongen verplaatst naar nieuwe dorpen langs de benedenloop, zonder adequaat overleg of compensatie. Tijdens de Binnenlandse Oorlog (1986–1992) vluchtten circa 3.000 Saramaka naar Frans-Guyana. In 2007 won de Saramaka-zaak bij het Inter-Amerikaans Hof, dat de Surinaamse staat veroordeelde voor schending van landrechten.',
        en: 'In 1964 the construction of the Afobaka dam (commissioned by Alcoa) flooded roughly half of traditional Saramaka territory. Thousands were forcibly displaced to new villages along the lower river, without adequate consultation or compensation. During the Interior War (1986–1992) about 3,000 Saramaka fled to French Guiana. In 2007 the Saramaka case won at the Inter-American Court, which condemned the Surinamese state for violating land rights.',
        sr: 'Na 1964, di bouw fu di Afobaka-dam — in opdracht fu Alcoa — ben overstroomd someni di helft fu di traditionele Saramaka-territorio. Duizenden sma ben force muvi go na nuw fowru nanga di benedenstroom, sonder adequate overleg oso compensatie. Tijdens di Binnenlandse Oorlog (1986–1992), someni 3.000 Saramaka ben ron wey go na Frans-Guyane. Na 2007, di Saramaka ben win wan landmark zaak na di Inter-Amerikaans Hof, di ben kondemneer di Sranan strati fu schending fu gronrechten.',
      },
      leadership: {
        nl: 'De granman van de Saramaka is de hoogste autoriteit, bijgestaan door kabitens van de twaalf matrilineaire clans. De granman raadpleegt de obias (voorouderlijke geesten) bij cruciale beslissingen. De Vereniging van Saamakaanse Gezagsdragers vertegenwoordigt 60+ dorpen in nationale en internationale rechtszaken.',
        en: 'The Saramaka granman is the highest authority, assisted by kabitens of the twelve matrilineal clans. The granman consults the obias (ancestral spirits) for crucial decisions. The Association of Saamaka Authorities represents 60+ villages in national and international legal cases.',
        sr: 'Di granman fu di Saramaka na di ogri otoreteti, nanga kabitens fu di twaalf matrilineaire clans als helpiman. Di granman konsulteer di obias — di kownu-geesten — fu cruciale beslissingen. Di Vereniging van Saamakaanse Gezagsdragers, representeer moro dan 60 fowru na nationale en internationale rechtszaken.',
      },
      challenges: {
        nl: 'Ondanks de overwinning van 2007 blijft het Surinaamse recht de Saramaka grondrechten niet erkennen. In april 2024 keurde de Surinaamse overheid goudmijnconcessies goed die voor bijna de helft overlappen met Saramaka-territorium. Meer dan 125 gemeenschapsleden ondertekenden de Goejaba-verklaring om de concessies te verwerpen. Ontbossing nam met 57% toe van juni tot september 2024. Leider Hugo Jabini staat onder ernstige bedreigingen.',
        en: 'Despite the 2007 victory, Surinamese law still does not recognize Saramaka land rights. In April 2024 the Surinamese government approved gold mining concessions nearly half of which overlap Saramaka territory. More than 125 community members signed the Goejaba Declaration rejecting the concessions. Deforestation increased 57% from June to September 2024. Leader Hugo Jabini faces serious threats.',
        sr: 'Ondanks di overwinning fu 2007, Sranan weti nog no erkenne Saramaka gronrechten. Na april 2024, di Sranan gobierno ben approuveer gowtu-olo concessies di bijna di helft overlap nanga Saramaka-territorio. Moro dan 125 gemeenschapslid ben teken di Goejaba Declaration fu verwerpen di concessies. Bosvernietiging ben stijg 57% fu juni te september 2024. Di mensenrechten-verdediger Hugo Jabini de ondro ernstige persoonlijke bedreigingen.',
      },
    },
  },

  { id: 'pokigron', society: 'saramaka', granman: false, lat: 4.888, lng: -55.495,
    names: { nl: 'Pokigron (Atjoni)', en: 'Pokigron (Atjoni)', sr: 'Pokigron (Atjoni)' },
    subtitles: { nl: 'Eindpunt verharde weg · toegangspoort binnenland', en: 'End of the road · gateway to the interior', sr: 'Eni fu wegi · ingang binnenlant' },
    river: 'Boven-Surinamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Pokigron, ook Atjoni (de naam van de naburige kade) — is het eindpunt van de verharde weg vanuit Paramaribo via Brownsweg. Vanaf hier gaat alles per boot. Het dorp heeft een Medische Zending-zorgcentrum.',
        en: 'Pokigron, also Atjoni — the name of the nearby quay — is the end of the paved road from Paramaribo via Brownsweg. From here everything goes by boat. The village has a Medische Zending healthcare centre.',
        sr: 'Pokigron, odo Atjoni — di nem fu di naburige kade — na di eni fu di harde wegi fu Paramaribo via Brownsweg. Fu dape furu sani go nomo via boto. Di fowru abi wan Medische Zending-gezondheidssintrum fu di omliggende fowru.',
      },
      founding: {
        nl: 'Pokigron is een Saramaka-dorp dat zijn strategische positie ontleent aan zijn ligging aan het begin van de niet-begaanbare rivierweg. Het groeide tot een knooppunt toen de aanleg van de Afobakkadam (1964) de benedenloop-dorpen overspoelde.',
        en: 'Pokigron is a Saramaka village that owes its strategic position to its location at the start of the non-road river route. It grew into a hub when the Afobaka dam construction (1964) inundated the lower-reach villages.',
        sr: 'Pokigron na wan Saramaka fowru di owt hem strategische positie fu hem locatie na di beginposi fu di onbegaanbare liba-reysi. A ben gro kon na wan hub baka di Afobaka-dam bouw (1964) di ben overstroomd di benedenstroom-fowru.',
      },
      history: {
        nl: 'Tot 1986 was Pokigron een redelijk welvarend dorp van 700 inwoners, met straatverlichting en massieve gebouwen. De Binnenlandse Oorlog verstoorde de bevoorradingsroutes en bracht de bevolking terug tot circa 400 mensen.',
        en: 'Until 1986 Pokigron was a reasonably prosperous village of 700 residents, with street lighting and permanent buildings. The Interior War disrupted supply routes and reduced the population to about 400.',
        sr: 'Te 1986 Pokigron ben wan redelijk welvarend fowru nanga 700 sma, nanga straatverlichting en permanente gebouwen. Di Binnenlandse Oorlog ben disturb di supply routes en ben breng di bevolking baka na someni 400 sma.',
      },
      leadership: {
        nl: 'Bestuurd door een Saramaka kabiten. Pokigron speelt een logistieke rol voor de gehele boven-Surinamerivier-gemeenschap.',
        en: 'Governed by a Saramaka kabiten. Pokigron plays a logistical role for the entire upper Suriname River community.',
        sr: 'Bestuurd doro wan Saramaka kabiten. Pokigron speli wan key logistikale rolo fu di hele boo Sranan Liba-gemeenschap, als di punt fu contact tussen di stedi en di diep binnenlant fowru.',
      },
      challenges: {
        nl: 'Chronische elektriciteitsgebrek (pas in 2018 kregen zij 24-uurs stroom), afhankelijkheid van externe bevoorrading, en de gevolgen van de dam-ontheemding van 1964 zijn structurele problemen.',
        en: 'Chronic electricity shortage (24-hour power only arrived in 2018), dependence on external supply, and the legacy of the 1964 dam displacement are structural problems.',
        sr: 'Chronisch gebrek fu leti-leti — 24-uurs stroom ben kisi nomo na 2018 — afhankelijkheid fu externe bevoorrading, en di naerfenis fu di gedwongen ontheemding fu 1964 de structurele problemen di de meki di kondre-libi na Pokigron hevi.',
      },
    },
  },

  { id: 'pikin_slee', society: 'saramaka', granman: false, lat: 4.673, lng: -55.435,
    names: { nl: 'Pikin Slee (Pikienslee)', en: 'Pikin Slee (Pikienslee)', sr: 'Pikin Slee (Pikienslee)' },
    subtitles: { nl: 'Tweede grootste Saramaka-dorp · Saamaka Marron Museum', en: 'Second largest Saramaka village · Saamaka Maroon Museum', sr: 'Tudde bigisma Saramaka fowru · Saamaka Marron Museum' },
    river: 'Boven-Surinamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Pikin Slee is met circa 3.000 inwoners het op één na grootste Saramaka-dorp na Aurora. Het dorp heeft een school, kliniek, het Saamaka Marron Museum (opgericht 14 november 2011), en een eco-resort.',
        en: 'Pikin Slee is, with about 3,000 residents, the second largest Saramaka village after Aurora. It has a school, clinic, the Saamaka Maroon Museum (founded November 14, 2011), and an eco-resort.',
        sr: 'Pikin Slee na, nanga someni 3.000 sma, di tweede bigisma Saramaka fowru baka Aurora. A abi wan skoro, kliniek, di Saamaka Marron Museum (meki 14 november 2011), en wan eco-resort fu turisten.',
      },
      founding: {
        nl: 'Pikin Slee is een van de dorpen die zich langs de boven-Surinamerivier vestigden na het vredesverdrag van 1762.',
        en: 'Pikin Slee is one of the villages that established itself along the upper Suriname River after the 1762 peace treaty.',
        sr: 'Pikin Slee na wan fu di fowru di ben seti densrefi nanga di boo Sranan Liba baka di frede-traktati fu 1762, pe di Saramaka kisi erkenne fu dem autonomie.',
      },
      history: {
        nl: 'In de jaren 1990 werd het naburige Pikin Santi bedreigd door houtkapbedrijven die zonder toestemming het Saramaka-territorium betraden. Pikin Slee werd een centrum van Saramaka-verzet en juridische mobilisatie.',
        en: 'In the 1990s the nearby Pikin Santi was threatened by logging companies entering Saramaka territory without consent. Pikin Slee became a center of Saramaka resistance and legal mobilization.',
        sr: 'Na di 1990s, di naburige Pikin Santi ben bedreigd doro houtkapbedrijven di ben teki Saramaka territorio sonder toestemming. Pikin Slee ben meki wan sentro fu Saramaka verzet en juridische mobilisatie teki di bedreigingen.',
      },
      leadership: {
        nl: 'De huidige dorpshoofd is Wanze Eduards. Het Saamaka Marron Museum beheert de collectie van traditionele kunst en culturele artefacten.',
        en: 'The current village chief is Wanze Eduards. The Saamaka Maroon Museum manages a collection of traditional art and cultural artefacts.',
        sr: 'Di huidig dorpshoofd na Wanze Eduards. Di Saamaka Marron Museum beheer wan collectie fu traditionele bild-kunst en kulturele artefakten di sori di rijke erfenis fu Saramaka pipel.',
      },
      challenges: {
        nl: 'Toegang tot kwalitatief onderwijs, behoud van cultureel erfgoed tegenover toenemende modernisering, en de dreiging van mijnbouwconcessies op Saramaka-grondgebied zijn de voornaamste uitdagingen.',
        en: 'Access to quality education, preservation of cultural heritage against increasing modernization, and the threat of mining concessions on Saramaka territory are the main challenges.',
        sr: 'Toegang na kwaliteit skori-leri, behoud fu kultureel erfgoed teki toenemende modernisering, en di dreigement fu mijnbouwconcessies na Saramaka-gron de di voornaamste uitdagingen fu Pikin Slee en di Saramaka gemeenschap na ini.',
      },
    },
  },

  { id: 'aurora', society: 'saramaka', granman: false, lat: 4.737, lng: -55.460,
    names: { nl: 'Aurora (met Nieuw Aurora)', en: 'Aurora (with Nieuw Aurora)', sr: 'Aurora (nanga Nieuw Aurora)' },
    subtitles: { nl: 'Grootste Saramaka-dorp · Laduani Airstrip', en: 'Largest Saramaka village · Laduani Airstrip', sr: 'Bigisma Saramaka fowru · Laduani Airstrip' },
    river: 'Boven-Surinamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Aurora is het grootste dorp van de Saramaka, gelegen aan de boven-Surinamerivier. Het heeft een tweelingstadsdorp Nieuw Aurora. De gezondheidszorgpost en luchthaven (Laduani Airstrip) bevinden zich in het naburige Laduani.',
        en: 'Aurora is the largest village of the Saramaka, on the upper Suriname River. It has a twin settlement, Nieuw Aurora. The healthcare post and airstrip (Laduani Airstrip) are in the adjacent Laduani.',
        sr: 'Aurora na di bigisma fowru fu di Saramaka, na boo Sranan Liba. A abi wan sisa-nederzetting Nieuw Aurora. Di gezondheidspost en di Laduani Airstrip de na di naburige Laduani fowru.',
      },
      founding: {
        nl: 'Aurora is een van de langst bestaande Saramaka-dorpen aan de boven-Surinamerivier, geworteld in de nederzettingspatronen na 1762.',
        en: 'Aurora is one of the longest-established Saramaka villages on the upper Suriname River, rooted in the settlement patterns after 1762.',
        sr: 'Aurora na wan fu di langst-bestaande Saramaka fowru na boo Sranan Liba, geworteld na di nederzettingspatronen di ben gro baka di frede-traktati fu 1762.',
      },
      history: {
        nl: 'Aurora bleef betrekkelijk gespaard tijdens de Binnenlandse Oorlog vanwege zijn ligging stroomopwaarts. De school van Nieuw Aurora haalde in 2017 de nationale krantenkoppen met een slagingspercentage van 100%.',
        en: 'Aurora remained relatively spared during the Interior War due to its upstream location. The school of Nieuw Aurora made national headlines in 2017 with a 100% graduation rate.',
        sr: 'Aurora ben blijf relatief gespaard tijdens di Binnenlandse Oorlog dankzij hem locatie stroomopwaarts fu di feti. Di skoro fu Nieuw Aurora ben meki nationale nieuws na 2017 nanga wan 100% slaagpercentage — wan rimerkabri prestasie na di omstandigheden fu di binnenlant.',
      },
      leadership: {
        nl: 'Aurora is een van de grotere Saramaka-gemeenschappen met invloedrijke kabitens.',
        en: 'Aurora is one of the larger Saramaka communities with influential kabitens.',
        sr: 'Aurora na wan fu di bigisma Saramaka gemeenschappen nanga invloedrijke kabitens di speli wan importan rolo na di bredere politikale structuur fu di Saramaka pipel.',
      },
      challenges: {
        nl: 'Isolement van het binnenland, afhankelijkheid van riviervervoer en de druk van mijnbouwconcessies op het omliggende bos zijn de voornaamste uitdagingen.',
        en: 'Interior isolation, dependence on river transport, and the pressure of mining concessions on the surrounding forest are the main challenges.',
        sr: 'Binnenlant isolement, afhankelijkheid fu liba-vervoer, en di druk fu mijnbouwconcessies na di omliggende woud de di voornaamste uitdagingen. Sonder adequate juridische bescherming van dem gron, di dreigement de constant.',
      },
    },
  },

  { id: 'botopasi', society: 'saramaka', granman: false, lat: 4.650, lng: -55.428,
    names: { nl: 'Botopasi (Boto-Pasi)', en: 'Botopasi (Boto-Pasi)', sr: 'Botopasi (Boto-Pasi)' },
    subtitles: { nl: 'Saramaka-dorp · Botopasi Airstrip', en: 'Saramaka village · Botopasi Airstrip', sr: 'Saramaka fowru · Botopasi Airstrip' },
    river: 'Boven-Surinamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Botopasi is een Saramaka-dorp op circa 3,5 km van Pikin Slee. Met circa 740 inwoners (2001) heeft het een school, kliniek en kerk, en ligt het vlak bij de Botopasi Airstrip.',
        en: 'Botopasi is a Saramaka village about 3.5 km from Pikin Slee. With about 740 residents (2001) it has a school, clinic, and church, and lies near the Botopasi Airstrip.',
        sr: 'Botopasi na wan Saramaka fowru someni 3,5 km fu Pikin Slee, nanga di boo Sranan Liba. Nanga someni 740 sma (2001) a abi wan skoro, kliniek en kerki, en a de krosibei di Botopasi Airstrip.',
      },
      founding: {
        nl: 'Botopasi maakte deel uit van de Saramaka-nederzettingen langs de boven-Surinamerivier na 1762.',
        en: 'Botopasi was part of the Saramaka settlements along the upper Suriname River after 1762.',
        sr: 'Botopasi ben meki deypaart fu di Saramaka nederzettingen di ben seti densrefi nanga boo Sranan Liba baka di frede-traktati fu 1762, pe dem ben kisi vrimi fu libi na dem eigi fasi.',
      },
      history: {
        nl: 'Het dorp bleef grotendeels gespaard tijdens de Binnenlandse Oorlog. De gemeenschap heeft actief deelgenomen aan de Saramaka-rechtszaken tegen de Surinaamse staat.',
        en: 'The village was largely spared during the Interior War. The community has actively participated in the Saramaka legal cases against the Surinamese state.',
        sr: 'Di fowru ben grotendeels gespaard tijdens di Binnenlandse Oorlog dankzij hem locatie stroomopwaarts. Di gemeenschap ben actief participate na di Saramaka rechtszaken teki di Sranan strati fu gronrechten-erkenning.',
      },
      leadership: {
        nl: 'Bestuurd door een kabiten onder de granman van de Saramaka.',
        en: 'Governed by a kabiten under the Saramaka granman.',
        sr: 'Bestuurd doro wan kabiten ondro di Saramaka granman, na srefi hierarchische structuur di de kownu fu di begin fu dem stichting nanga di boo Sranan Liba.',
      },
      challenges: {
        nl: 'Toegankelijkheid, kwaliteit van basisonderwijs en gezondheidszorg, en de druk van mijnbouwactiviteiten in de regio.',
        en: 'Accessibility, quality of basic education and healthcare, and the pressure of mining activities in the region.',
        sr: 'Kan-go na di fowru, kwaliteit fu basisskori en gezondheidsorg, en di druk fu mijnbouwactiviteiten na di regio de di main problemen di Botopasi-sma abi fu fesi elke dag.',
      },
    },
  },

  { id: 'djumu', society: 'saramaka', granman: false, lat: 4.017, lng: -55.483,
    names: { nl: 'Djumu (Djomoe)', en: 'Djumu (Djomoe)', sr: 'Djumu (Djomoe)' },
    subtitles: { nl: 'Confluence Gran Rio & Pikin Rio · eigen airstrip', en: 'Confluence Gran Rio & Pikin Rio · own airstrip', sr: 'Posi fu Gran Rio en Pikin Rio · eigi airstrip' },
    river: 'Gran Rio / Pikin Rio', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Djumu ligt bij de samenkomst van de Gran Rio en de Pikin Rio — het beginpunt van de boven-Surinamerivier. Het dorp heeft een eigen airstrip en is een transitpunt voor de meest afgelegen Saramaka-dorpen.',
        en: 'Djumu lies at the confluence of the Gran Rio and Pikin Rio — the starting point of the upper Suriname River. The village has its own airstrip and is a transit point for the most remote Saramaka villages.',
        sr: 'Djumu de na di samenkomst fu Gran Rio en Pikin Rio — di startposi fu di boo Sranan Liba. Di fowru abi hem eigi airstrip en na wan importan transitposi fu di mees afgelegen Saramaka fowru die leysi stroomopwaarts.',
      },
      founding: {
        nl: 'Djumu behoort tot de meest afgelegen Saramaka-gemeenschappen, gesticht door clans die dieper het binnenland introkken na 1762.',
        en: 'Djumu belongs to the most remote Saramaka communities, established by clans that moved deeper into the interior after 1762.',
        sr: 'Djumu de wan fu di mees afgelegen Saramaka gemeenschappen, meki doro clans di ben muvi go dieper na binnenlant baka di frede-traktati fu 1762, soekende veiligheid en onafhankelijkheid fa van di kolonie.',
      },
      history: {
        nl: 'De Gran Rio-regio bleef eeuwenlang vrijwel gesloten voor buitenstaanders en werd pas in het begin van de 20e eeuw door Europese ontdekkingsreizigers bezocht.',
        en: 'The Gran Rio region remained almost closed to outsiders for centuries and was only visited by European explorers in the early 20th century.',
        sr: 'Di Gran Rio-regio ben bijna gesloten fu buitenstaanders fu ieuwen en ben nomo bezocht doro Europese onderzoekers na vroeg 20ste ieuwen. Disi geïsoleerde leefomgeving ben preserveer dem kulturele onafhankelijkheid furu jari.',
      },
      leadership: {
        nl: 'Bestuurd door een kabiten. Het dorp speelt een logistieke sleutelrol voor gemeenschappen verder stroomopwaarts langs de Gran Rio.',
        en: 'Governed by a kabiten. The village plays a key logistical role for communities further upstream along the Gran Rio.',
        sr: 'Bestuurd doro wan kabiten. Di fowru speli wan key logistikale rolo fu gemeenschappen moro stroomopwaarts nanga Gran Rio, als di enige posi pe boto en vliegtuig kan koordineer.',
      },
      challenges: {
        nl: 'Extreme isolement, beperkte medische zorg en het toenemende bereik van mijnbouwactiviteiten langs de Gran Rio vormen ernstige bedreigingen.',
        en: 'Extreme isolation, limited medical care, and the expanding reach of mining activities along the Gran Rio pose serious threats.',
        sr: 'Extreme isolement, beperkte medische zorg, en di uitbreidende bereik fu mijnbouwactiviteiten nanga Gran Rio de ernstige bedreigingen. Na geval fu medische noodgevallen kan di afstand na di dichtstbijzijnde hospitaal levensgevaarlijk worden.',
      },
    },
  },

  { id: 'goejaba', society: 'saramaka', granman: false, lat: 4.730, lng: -55.390,
    names: { nl: 'Goejaba', en: 'Goejaba', sr: 'Goejaba' },
    subtitles: { nl: 'Saramaka-dorp · Goejaba Declaration 2024', en: 'Saramaka village · Goejaba Declaration 2024', sr: 'Saramaka fowru · Goejaba Declaration 2024' },
    river: 'Boven-Surinamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Goejaba is een Saramaka-dorp aan de boven-Surinamerivier met een Medische Zending-post. Het dorp verwierf internationale bekendheid als de naamgever van de Goejaba-verklaring van 2024.',
        en: 'Goejaba is a Saramaka village on the upper Suriname River with a Medische Zending post. The village gained international attention as the namesake of the 2024 Goejaba Declaration.',
        sr: 'Goejaba na wan Saramaka fowru nanga boo Sranan Liba, nanga wan Medische Zending-post. Di fowru ben kisi internationaal atentie als naamgever fu di Goejaba Declaration fu 2024, wan historisch verzets-dokument.',
      },
      founding: {
        nl: 'Een gevestigde Saramaka-gemeenschap langs de boven-Surinamerivier, onderdeel van de nederzettingen na 1762.',
        en: 'An established Saramaka community along the upper Suriname River, part of the post-1762 settlements.',
        sr: 'Wan gevestigde Saramaka gemeenschap nanga di boo Sranan Liba, deypaart fu di nederzettingen di ben gro baka di frede-traktati fu 1762 pe di Saramaka kisi erkenning fu dem onafhankelijkheid.',
      },
      history: {
        nl: 'Goejaba is gelegen op het snijvlak van het traditionele Saramaka-territorium en de opmars van mijnbouwactiviteiten. De gemeenschap heeft actief geparticipeerd in de juridische strijd voor Saramaka-grondrechten.',
        en: 'Goejaba is located at the intersection of traditional Saramaka territory and the advance of mining activities. The community has actively participated in the legal struggle for Saramaka land rights.',
        sr: 'Goejaba de na di snijvlak fu traditionele Saramaka-territorio en di opmars fu mijnbouwactiviteiten. Di gemeenschap ben actief participe na di juridische feti fu Saramaka gronrechten, als wan fu di fowru die rechtstreeks bedreigd doro mijnbouwconcessies.',
      },
      leadership: {
        nl: 'In april 2024 ondertekenden meer dan 125 Saramaka gemeenschapsleden de Goejaba-verklaring, waarbij zij goudmijnconcessies verwierpen die de Surinaamse overheid had goedgekeurd op hun grondgebied.',
        en: 'In April 2024 more than 125 Saramaka community members signed the Goejaba Declaration, rejecting gold mining concessions the Surinamese government had approved on their territory.',
        sr: 'Na april 2024, moro dan 125 Saramaka gemeenschapsleden ben teken di Goejaba Declaration, di verwerpen gowtu-olo concessies di di Sranan gobierno ben approuveer nanga dem territorio. Disi document ben meki wan duidelijk teken fu gemeenschapsverzet.',
      },
      challenges: {
        nl: 'De druk van illegale en legale goudwinning, ontbossing en kwikverontreiniging zijn direct en acuut. Mensenrechtendefeser Hugo Jabini en andere leiders die de Goejaba-verklaring ondersteunden, staan onder ernstige persoonlijke bedreigingen.',
        en: 'The pressure of illegal and legal gold mining, deforestation, and mercury contamination are direct and acute. Human rights defender Hugo Jabini and other leaders who supported the Goejaba Declaration face serious personal threats.',
        sr: 'Di druk fu illegale en legale gowtu-olo, bosvernietiging en kwik-pisi de direct en acuut. Di mensenrechten-verdediger Hugo Jabini en leysi leiders die di Goejaba Declaration ben steunen de ondro ernstige persoonlijke bedreigingen — wan alarmerend teken fu di staat fu mensenrechten na Suriname.',
      },
    },
  },

  { id: 'semoisi', society: 'saramaka', granman: false, lat: 4.560, lng: -55.380,
    names: { nl: 'Semoisi', en: 'Semoisi', sr: 'Semoisi' },
    subtitles: { nl: 'Saramaka-dorp · toerisme · medische post', en: 'Saramaka village · tourism · medical post', sr: 'Saramaka fowru · turisme · medische post' },
    river: 'Boven-Surinamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Semoisi is een Saramaka-dorp aan de boven-Surinamerivier met een Medische Zending-post. Het dorp is een bestemming voor eco-toeristen die de Saramaka-cultuur willen ervaren.',
        en: 'Semoisi is a Saramaka village on the upper Suriname River with a Medische Zending post. The village is a destination for eco-tourists wishing to experience Saramaka culture.',
        sr: 'Semoisi na wan Saramaka fowru nanga boo Sranan Liba, nanga wan Medische Zending-post. Di fowru na wan bestemming fu eco-turisten di wani beleef en leri moro fu di Saramaka kultuur na ini.',
      },
      founding: {
        nl: 'Semoisi is een traditionele Saramaka-gemeenschap langs de boven-Surinamerivier.',
        en: 'Semoisi is a traditional Saramaka community along the upper Suriname River.',
        sr: 'Semoisi na wan traditionele Saramaka gemeenschap nanga di boo Sranan Liba, meki baka di frede-traktati fu 1762, pe di Saramaka-clans ben seti densrefi dieper na di binnenlant.',
      },
      history: {
        nl: 'De gemeenschap heeft de typische Saramaka-nederzettingspatroon behouden: kleine dorpen van 100–200 bewoners, matrilineair georganiseerd, langs de rivier.',
        en: 'The community has maintained the typical Saramaka settlement pattern: small villages of 100–200 residents, matrilinearly organized, along the river.',
        sr: 'Di gemeenschap ben behoud di typische Saramaka nederzettingspatroon: pikin fowru fu 100–200 sma, matrilineair georganiseerd nanga di liba. Disi continuïteit ben kisi possible fu di geïsoleerde ligging di ben protegeeri dem fu buitendruk.',
      },
      leadership: {
        nl: 'Bestuurd door een kabiten onder de granman.',
        en: 'Governed by a kabiten under the granman.',
        sr: 'Bestuurd doro wan kabiten ondro di granman, na srefi fasi leki ala Saramaka fowru, nanga di traditionele gezagsstructuur di de baseer na matrilineaire clan-lidmaatschap.',
      },
      challenges: {
        nl: 'Balanceren tussen het ontvangen van toeristen en het beschermen van culturele integriteit is een uitdaging. Tegelijk vormt de druk van mijnbouwactiviteiten in de bredere regio een bedreiging.',
        en: 'Balancing the reception of tourists with the protection of cultural integrity is a challenge. At the same time mining activity pressure in the wider region poses a threat.',
        sr: 'Balanceren tussen di ontvangst fu turisten en di bescherming fu kulturele integriteit na wan dagelijkse uitdaging. Naast disi, di druk fu mijnbouwactiviteiten na di bredere regio na wan structurele bedreiging fu di traditionele leefwijze fu Semoisi-sma.',
      },
    },
  },

  { id: 'kajana', society: 'saramaka', granman: false, lat: 3.901, lng: -55.573,
    names: { nl: 'Kajana (Cayana)', en: 'Kajana (Cayana)', sr: 'Kajana (Cayana)' },
    subtitles: { nl: 'Saramaka-dorp · Gran Rio · Radio Thijs', en: 'Saramaka village · Gran Rio · Radio Thijs', sr: 'Saramaka fowru · Gran Rio · Radio Thijs' },
    river: 'Gran Rio', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Kajana is een Saramaka-dorp diep in het binnenland aan de Gran Rio. Het heeft een EHBO-post, een radiostation (Radio Thijs), een lagere school en een kleuterschool. Het wordt bediend door de Cayana Airstrip.',
        en: 'Kajana is a Saramaka village deep in the interior on the Gran Rio. It has a first-aid post, a radio station (Radio Thijs), a primary school, and a kindergarten. It is served by Cayana Airstrip.',
        sr: 'Kajana na wan Saramaka fowru diep na di binnenlant, nanga Gran Rio. A abi wan EHBO-post, wan radiostation (Radio Thijs), wan lagere skoro en wan kleuterskoro. Di fowru de bediend doro Cayana Airstrip.',
      },
      founding: {
        nl: 'Kajana behoort tot de meest afgelegen Saramaka-dorpen, gesticht door clans die stroomopwaarts langs de Gran Rio trokken na 1762.',
        en: 'Kajana is among the most remote Saramaka villages, established by clans that moved upstream along the Gran Rio after 1762.',
        sr: 'Kajana de wan fu di mees afgelegen Saramaka fowru, meki doro clans di ben muvi stroomopwaarts nanga Gran Rio baka di frede-traktati fu 1762, soekende di diepste vrijheid fa van di Olondesi koloniale invloed.',
      },
      history: {
        nl: 'Kajana\'s radiostation Radio Thijs speelt een bijzondere rol in het Saramaka-communicatienetwerk, dat cruciaal is in een gebied zonder wegen of mobiel netwerk.',
        en: 'Kajana\'s radio station Radio Thijs plays a special role in the Saramaka communication network, crucial in an area without roads or mobile network.',
        sr: 'Radio Thijs na Kajana speli wan speisyal rolo na di Saramaka communicatienetwerk. Na wan regio sonder wegen oso mobiel netwerk, di radiostation na di enige wey fu neus en informasie snel te verspreiden entre di diep binnenlant fowru.',
      },
      leadership: {
        nl: 'Bestuurd door een kabiten. Kajana speelt een communicatieve en logistieke sleutelrol voor de Gran Rio-gemeenschappen.',
        en: 'Governed by a kabiten. Kajana plays a communicative and logistical key role for the Gran Rio communities.',
        sr: 'Bestuurd doro wan kabiten. Kajana speli wan communicatieve en logistikale sleutelrolo fu di Gran Rio-gemeenschappen die leysi stroomopwaarts, als di mees zuider posi pe airstrip en radiocontact possible ben.',
      },
      challenges: {
        nl: 'De meest extreme isolatie van alle bewoonde Saramaka-dorpen, gecombineerd met toenemende mijnbouwdruk op het omliggende bos. Medische noodgevallen kunnen bij slecht vliegweer levensbedreigend worden.',
        en: 'The most extreme isolation of any inhabited Saramaka village, combined with increasing mining pressure on the surrounding forest. Medical emergencies can be life-threatening in bad flying weather.',
        sr: 'Di mees extreme isolatie fu ala bewoonde Saramaka fowru, gecombineerd nanga toenemende mijnbouwdruk na di omliggende woud. Medische noodgevallen kan levensgevaarlijk worden wan di weder sleht de en di airstrip no kan functioneer — wan kwetsbaarheid di vraagt om dringende oplossingen.',
      },
    },
  },

  // ══ MATAWAI ══════════════════════════════════════════════

  { id: 'bambusdorp', society: 'matawai', granman: true, lat: 4.185, lng: -56.052,
    names: { nl: 'Bambusdorp', en: 'Bambusdorp', sr: 'Bambusdorp' },
    subtitles: { nl: 'Zetel van de Granman · Saramaccarivier', en: 'Seat of the Granman · Saramacca River', sr: 'Oso fu Granman · Saramacca Liba' },
    river: 'Saramaccarivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Bambusdorp is het administratieve en politieke centrum van de Matawai, het middelste van de drie centrale Marronvolken. De Matawai leven langs de Saramaccarivier in het district Sipaliwini.',
        en: 'Bambusdorp is the administrative and political center of the Matawai, the middle of the three central Maroon peoples. The Matawai live along the Saramacca River in Sipaliwini District.',
        sr: 'Bambusdorp na di administratieve en politikale sentro fu di Matawai, di midden fu di drie centrale Marron-pipel. Di Matawai de libi nanga Saramacca Liba na Sipaliwini Distrikt.',
      },
      founding: {
        nl: 'De Matawai zijn nauw verwant aan de Saramaka en spreken Saramakkaans. Na het Saramaka-vredesverdrag van 1762 sloten de Matawai een eigen verdrag in 1767. Hoewel historisch gezien een ondergroep van de Saramaka, hebben zij een onafhankelijke politieke en culturele identiteit ontwikkeld.',
        en: 'The Matawai are closely related to the Saramaka and speak Saramaccan. After the Saramaka peace treaty of 1762 the Matawai concluded their own treaty in 1767. Though historically a sub-group of the Saramaka, they have developed an independent political and cultural identity.',
        sr: 'Di Matawai de na wantimpi verwant nanga di Saramaka en den taki Saramakkaans. Baka di Saramaka frede-traktati fu 1762, di Matawai ben teki dem eigi traktati na 1767. Alhoewel historisch gezien wan subgroep fu di Saramaka, den ben ontwikkel wan onafhankelijke politikale en culturele identiteit.',
      },
      history: {
        nl: 'De Matawai-gemeenschap bleef relatief klein (8.000–9.000 mensen) en hechter dan de grotere Marrongroepen. Zij leverden oppervrouwe Lesley Valentijn als paramount chief — een zeldzame vrouwelijke aanstelling — die het belang benadrukt van het documenteren van vrouwelijke kennis voordat deze verloren gaat.',
        en: 'The Matawai community remained relatively small (8,000–9,000 people) and more cohesive than the larger Maroon groups. They produced paramount chief Lesley Valentijn — a rare female appointment — who emphasized the importance of documenting women\'s knowledge before it is lost.',
        sr: 'Di Matawai gemeenschap ben blijf relatief pikin (8.000–9.000 sma) en moro aaneengesloten dan di bigisma Marron groepen. Den ben gi wan vrouwelijke paramount chief, Lesley Valentijn — wan zeldzame vrouwelijke aanstelling — die ben nadrukken di belang fu documenteren fu vrouwelijke kennis vori a go verloren.',
      },
      leadership: {
        nl: 'De granman van de Matawai wordt bijgestaan door kabitens. Paramount chief Lesley Valentijn heeft nadruk gelegd op het documenteren van traditionele vrouwelijke kennis, met name over rijstvariëteiten die zijn vernoemd naar voorouderlijke vrouwen.',
        en: 'The Matawai granman is assisted by kabitens. Paramount chief Lesley Valentijn has emphasized documenting traditional women\'s knowledge, particularly rice varieties named after ancestral women.',
        sr: 'Di Matawai granman de nanga kabitens als helpiman. Paramount chief Lesley Valentijn ben nadrukken di documenteren fu traditionele vrouwelijke kennis, inkluzif rijstvariëteiten die vernoemd ben nanga kownu-vrouwen — wan unieke culturele erfenis di vertegenwoordigd di aard fu Matawai-leiderschap.',
      },
      challenges: {
        nl: 'Als een van de kleinere Marrongroepen is de Matawai-gemeenschap kwetsbaar voor cultureel verlies door urbanisering. Grondrechten zijn, net als bij alle Marronvolken, formeel niet erkend door de Surinaamse staat.',
        en: 'As one of the smaller Maroon groups, the Matawai community is vulnerable to cultural loss through urbanization. Land rights, as with all Maroon peoples, are not formally recognized by the Surinamese state.',
        sr: 'Als wan fu di pikinmoro Marron groepen, di Matawai gemeenschap de kwetsbaar fu kultureel verlies doro urbanisering van dem jongeren. Gronrechten, nanga ala Marron-pipel, de niet formeel erkend doro di Sranan strati — wan fundamentele onrechtvaardigheid die kownu fu di slavernij-periode.',
      },
    },
  },

  { id: 'witikreek', society: 'matawai', granman: false, lat: 4.300, lng: -55.900,
    names: { nl: 'Witikreek', en: 'Witikreek', sr: 'Witikreek' },
    subtitles: { nl: 'Matawai-dorp · Saramaccarivier', en: 'Matawai village · Saramacca River', sr: 'Matawai fowru · Saramacca Liba' },
    river: 'Saramaccarivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Witikreek is een Matawai-dorp langs de Saramaccarivier, deel van de verspreide Matawai-gemeenschap in Sipaliwini.',
        en: 'Witikreek is a Matawai village along the Saramacca River, part of the dispersed Matawai community in Sipaliwini.',
        sr: 'Witikreek na wan Matawai fowru nanga Saramacca Liba, deypaart fu di verspreide Matawai gemeenschap na Sipaliwini Distrikt, di kownu fu di historkale expansie nanga di Saramacca Liba.',
      },
      founding: {
        nl: 'Een Matawai-nederzetting langs de Saramaccarivier na het verdrag van 1767.',
        en: 'A Matawai settlement along the Saramacca River following the 1767 treaty.',
        sr: 'Wan Matawai nederzetting nanga Saramacca Liba baka di traktati fu 1767, pe di Matawai — nanga srefi fasi leki di Ndyuka en Saramaka vori den — kisi formele erkenning fu dem gronrechten fu di Olondesi koloniale otoreteti.',
      },
      history: {
        nl: 'De Matawai-dorpen langs de Saramaccarivier zijn vanwege hun ligging relatief geïsoleerd, wat zowel de traditionele leefwijze heeft bewaard als infrastructurele ontwikkeling heeft belemmerd.',
        en: 'The Matawai villages along the Saramacca River are relatively isolated due to their location, which has both preserved the traditional way of life and hindered infrastructural development.',
        sr: 'Di Matawai fowru nanga Saramacca Liba de relatief geïsoleerd dankzij dem locatie, di ben preserveer di traditionele leefwijze mar uku ben hinder di infrastructurele ontwikkeling en toegang na basisservices.',
      },
      leadership: {
        nl: 'Bestuurd door een kabiten onder de Matawai-granman in Bambusdorp.',
        en: 'Governed by a kabiten under the Matawai granman in Bambusdorp.',
        sr: 'Bestuurd doro wan kabiten ondro di Matawai granman na Bambusdorp, di de di centrale otoreteti fu ala Matawai fowru nanga di Saramacca Liba-regio.',
      },
      challenges: {
        nl: 'Beperkte toegang tot gezondheidszorg en onderwijs, urbanisering van jongeren naar Paramaribo, en gebrek aan formele grondrechtserkenning zijn de voornaamste uitdagingen.',
        en: 'Limited access to healthcare and education, migration of youth to Paramaribo, and lack of formal land rights recognition are the main challenges.',
        sr: 'Beperkte toegang na gezondheidsorg en skori, migratie fu jongeren na Paramaribo en buitenland, en gebrek fu formele gronrechtserkenning de di voornaamste uitdagingen die di Matawai-gemeenschap na Witikreek elke dag abi fu fesi.',
      },
    },
  },

  // ══ KWINTI ═══════════════════════════════════════════════

  { id: 'witagron', society: 'kwinti', granman: true, lat: 4.802, lng: -56.448,
    names: { nl: 'Witagron', en: 'Witagron', sr: 'Witagron' },
    subtitles: { nl: 'Zetel van de Granman · Coppenamerivier', en: 'Seat of the Granman · Coppename River', sr: 'Oso fu Granman · Coppename Liba' },
    river: 'Coppenamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Witagron is de hoofdplaats van de Kwinti, het kleinste Marronvolk van Suriname met minder dan 1.000 mensen, gelegen langs de Coppenamerivier in centraal-west Suriname.',
        en: 'Witagron is the main settlement of the Kwinti, the smallest Maroon people of Suriname with fewer than 1,000 people, on the Coppename River in central-western Suriname.',
        sr: 'Witagron na di hoofdplaats fu di Kwinti, di pikinmoro Marron-pipel fu Suriname nanga minder dan 1.000 sma, nanga Coppename Liba na sentro-west Suriname.',
      },
      founding: {
        nl: 'De Kwinti zijn de nakomelingen van Afrikanen die ontsnapten van plantages en zich vestigden langs de Coppenamerivier. Hun taal is verwant aan het Ndyuka-dialect. Zij onderscheiden zich van de andere vijf groepen door hun kleinere omvang en westelijker ligging.',
        en: 'The Kwinti are descendants of Africans who escaped plantations and settled along the Coppename River. Their language is related to the Ndyuka dialect. They are distinguished from the other five groups by their smaller size and more westerly location.',
        sr: 'Di Kwinti de naksama fu Afrikanen di ben ron wey fu plantasi en ben seti densrefi nanga Coppename Liba. Dem tongo de verwant nanga di Ndyuka dialect. Den ben onderscheiden fu di leysi vijf groepen doro dem kleinere grootte en dem mees westelijke locatie na Sranan.',
      },
      history: {
        nl: 'Door hun kleine omvang zijn de Kwinti historisch weinig gedocumenteerd. Zij hebben nooit een formeel vredesverdrag gesloten met de Nederlandse koloniale autoriteiten, in tegenstelling tot de Ndyuka, Saramaka en Matawai.',
        en: 'Due to their small size, the Kwinti are historically little documented. They never concluded a formal peace treaty with Dutch colonial authorities, unlike the Ndyuka, Saramaka, and Matawai.',
        sr: 'Doro dem pikin grootte, di Kwinti de historisch weinig gedocumenteerd. Den ben noiti seti wan formeel frede-traktati nanga Olondesi koloniale otoreteti — in tegenstelling tu di Ndyuka, Saramaka en Matawai — di ben meki dem juridische positie moro onzeiker.',
      },
      leadership: {
        nl: 'De Kwinti hebben een granman die de gemeenschap vertegenwoordigt. De kleine gemeenschapsomvang maakt bestuur relatief informeel maar niet minder effectief.',
        en: 'The Kwinti have a granman who represents the community. The small community size makes governance relatively informal but no less effective.',
        sr: 'Di Kwinti abi wan granman die representeer di gemeenschap na ala nivo. Di pikin grootte fu di gemeenschap meki bestuur relatief informeel mar no minder effectief — di gemeenschapsbanden de tranga en di traditionele kennis ben goed preserveer.',
      },
      challenges: {
        nl: 'De Kwinti staan voor existentiële uitdagingen: hun kleine bevolking maakt hen kwetsbaar voor cultureel verlies en assimilatie. Grondrechten zijn evenmin erkend. Mijnbouw in het Coppenamegebied vormt een ecologische bedreiging voor hun riviergebied.',
        en: 'The Kwinti face existential challenges: their small population makes them vulnerable to cultural loss and assimilation. Land rights are equally unrecognized. Mining in the Coppename area poses an ecological threat to their river territory.',
        sr: 'Di Kwinti de fesi existentiële uitdagingen: dem pikin populatie meki den kwetsbaar fu kultureel verlies en assimilatie na di bredere Surinaamse samenleving. Gronrechten de uku niet erkend. Mijnbouw na di Coppename-regio na wan ecologische bedreiging fu dem liba-territorio die di basis fu dem bestaan na.',
      },
    },
  },

  { id: 'kaaimanston', society: 'kwinti', granman: false, lat: 4.850, lng: -56.500,
    names: { nl: 'Kaaimanston', en: 'Kaaimanston', sr: 'Kaaimanston' },
    subtitles: { nl: 'Kwinti-dorp · Coppenamerivier', en: 'Kwinti village · Coppename River', sr: 'Kwinti fowru · Coppename Liba' },
    river: 'Coppenamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Kaaimanston is een van de kleine Kwinti-dorpen aan de Coppenamerivier. De gehele Kwinti-gemeenschap bestaat uit slechts een handvol dorpen langs deze rivier.',
        en: 'Kaaimanston is one of the small Kwinti villages on the Coppename River. The entire Kwinti community consists of only a handful of villages along this river.',
        sr: 'Kaaimanston na wan fu di pikin Kwinti fowru nanga Coppename Liba. Di heri Kwinti gemeenschap bestaan fu nomo wan klein aantal fowru nanga disi liba, die tezamen di kompletie van dem kleine maar resistente Marron-natie vormen.',
      },
      founding: {
        nl: 'Een van de weinige Kwinti-nederzettingen langs de Coppenamerivier.',
        en: 'One of the few Kwinti settlements along the Coppename River.',
        sr: 'Wan fu di weinige Kwinti nederzettingen nanga Coppename Liba, meki doro nakomelingen fu enslefs sma di ben ron wey fu kosta-plantasi en ben seti densrefi na di rustichwe omgeving fu di liba.',
      },
      history: {
        nl: 'Als onderdeel van de kleinste Marrongroep heeft Kaaimanston weinig externe documentatie. De gemeenschap bewaart haar orale tradities zorgvuldig.',
        en: 'As part of the smallest Maroon group, Kaaimanston has little external documentation. The community carefully preserves its oral traditions.',
        sr: 'Als deypaart fu di pikinmoro Marron groep, Kaaimanston abi weinige externe documentatie fu buitenstaanders. Mar di gemeenschap zorgvuldig preserveer hem orale tradities, die di historikale kennis en kulturele erfenis fu generatie na generatie doorgeven.',
      },
      leadership: {
        nl: 'Bestuurd door een kabiten onder het gezag van de Kwinti-granman.',
        en: 'Governed by a kabiten under the authority of the Kwinti granman.',
        sr: 'Bestuurd doro wan kabiten ondro di otoreteti fu di Kwinti granman, die de di centrale figuur fu ala Kwinti fowru en representeer di belangen van di pikin maar levendige Kwinti natie.',
      },
      challenges: {
        nl: 'De uitdagingen zijn vergelijkbaar met Witagron: kleine bevolking, kwetsbaarheid voor assimilatie, gebrek aan grondrechtserkenning en dreiging van externe mijnbouw.',
        en: 'Challenges are comparable to Witagron: small population, vulnerability to assimilation, lack of land rights recognition, and threat of external mining.',
        sr: 'Uitdagingen de vergelijkbaar nanga Witagron: pikin populatie, kwetsbaarheid fu assimilatie, gebrek fu gronrechtserkenning, en di dreigement fu externe mijnbouw nanga Coppename Liba-regio die dem leefomgeving en traditional leefwijze kan verwoesten.',
      },
    },
  },

  // ══ ALUKU ════════════════════════════════════════════════

  { id: 'maripasoula', society: 'aluku', granman: true, lat: 3.633, lng: -54.033,
    names: { nl: 'Maripasoula (Frans-Guyana)', en: 'Maripasoula (French Guiana)', sr: 'Maripasoula (Frans-Guyane)' },
    subtitles: { nl: 'Bestuurlijk centrum Aluku · Lawarivier', en: 'Aluku administrative center · Lawa River', sr: 'Sentro fu Aluku · Lawa Liba' },
    river: 'Lawarivier', district: 'Frans-Guyana',
    sections: {
      intro: {
        nl: 'De Aluku (ook Boni) zijn het enige Marronvolk van Suriname waarvan het kerngebied in Frans-Guyana ligt, langs de Lawa- en Marowijne-rivieren. Maripasoula, een Frans-Guyanees bestuurlijk centrum, is de grootste gemeente in hun territorium.',
        en: 'The Aluku (also Boni) are the only Maroon people of Suriname whose core territory lies in French Guiana, along the Lawa and Marowijne rivers. Maripasoula, a French Guianese administrative center, is the largest commune in their territory.',
        sr: 'Di Aluku (odo Boni) na di enige Marron-pipel fu Suriname wan kerngrongebied de na Frans-Guyane, nanga Lawa en Marowijne Liba. Maripasoula, wan Frans-Guyanees bestuurlijk sentro, na di bigisma gemeente na dem territorio.',
      },
      founding: {
        nl: 'De Aluku zijn vernoemd naar hun grondlegger Boni (Bokilifu), een vrijheidsstrijder geboren uit een ontsnapte slaaf aan de Cotticarivier. Na militaire nederlagen in de guerrillaoorlog eindigend in 1793 — waarbij ook Ndyuka als hulptroepen van de Nederlanders optraden — vestigden de Aluku zich definitief op de Franse oever van de Marowijne.',
        en: 'The Aluku are named after their founder Boni (Bokilifu), a freedom fighter born of an escaped slave on the Cottica River. After military defeats in the guerrilla war ending in 1793 — in which Ndyuka also acted as Dutch auxiliaries — the Aluku permanently settled on the French bank of the Marowijne.',
        sr: 'Di Aluku ben neem nanga dem stichter Boni (Bokilifu), wan vrijheidsstrijder geboren fu wan ontsnapte slaaf nanga Cottica Liba. Baka militaire niederlagen na di gerilya-oorlog die ben eindigen na 1793 — pe Ndyuka ben serve als Olondesi hulptroepen — di Aluku ben seti densrefi definitief na di Franse oever fu Marowijne.',
      },
      history: {
        nl: 'In 1815 sloten de Aluku en de Wayana-indianen bloedbroederschap. De Aluku worden Frans staatsburger en vallen onder Frans recht, wat hen een andere juridische status geeft dan de Surinaamse Marrons. Tijdens de Surinaamse Binnenlandse Oorlog vluchtten duizenden Ndyuka en Saramaka naar Frans-Guyana, en de Aluku moesten hun regio delen met grote aantallen vluchtelingen en illegale migranten.',
        en: 'In 1815 the Aluku and the Wayana Amerindians became blood brothers. The Aluku are French citizens and fall under French law, giving them a different legal status than Surinamese Maroons. During the Surinamese Interior War thousands of Ndyuka and Saramaka fled to French Guiana, and the Aluku had to share their region with large numbers of refugees and illegal migrants.',
        sr: 'Na 1815, di Aluku en di Wayana Amerindians ben meki bloedsbroederschap. Di Aluku de Frans burgeri en vallen ondro Frans weti, die gi dem wan diferentes juridische status dan Surinaamse Marrons. Tijdens di Sranan Binnenlandse Oorlog, duizenden Ndyuka en Saramaka ben ron wey go na Frans-Guyane, en di Aluku ben musti sari dem regio delen nanga granbigi aantallen fisikoers en illegale migranten.',
      },
      leadership: {
        nl: 'De Aluku-granman vertegenwoordigt de gemeenschap in zowel Frans-Guyanees als in bredere regionale gremia. Als Frans staatsburger hebben de Aluku ook politieke rechten in het Franse systeem.',
        en: 'The Aluku granman represents the community in both French Guianese and broader regional forums. As French citizens, the Aluku also have political rights within the French system.',
        sr: 'Di Aluku granman representeer di gemeenschap na sodo Frans-Guyanees als bredere regionale fora. Als Frans burgeri, di Aluku abi uku politikale rechten na di Frans systeem — wan situatie die gi dem moro kansi dan leysi Surinaamse Marron-groepen.',
      },
      challenges: {
        nl: 'Hoewel hun Frans burgerschap betere toegang tot diensten biedt, kampen de Aluku met marginalisering binnen de Franse staat. Illegale goudwinning langs de Lawa- en Marowijne-oevers tast het milieu aan. De toenemende komst van Surinaamse Marrons als illegale migranten creëert sociale spanning.',
        en: 'Although their French citizenship provides better access to services, the Aluku face marginalization within the French state. Illegal gold mining along the Lawa and Marowijne banks damages the environment. The increasing arrival of Surinamese Maroons as illegal migrants creates social tension.',
        sr: 'Alhoewel dem Frans burgerschap betere toegang na services geeft, di Aluku fesi marginalisering binnenin di Franse strati. Illegale gowtu-olo nanga Lawa en Marowijne-oevers beschadigt di omgeving hevi. Di toenemende komst fu Surinaamse Marrons als illegale migranten krejer sociale spanning die di Aluku-gemeenschap musti navigeer.',
      },
    },
  },

  { id: 'papaichton', society: 'aluku', granman: false, lat: 3.900, lng: -54.133,
    names: { nl: 'Papaichton (Frans-Guyana)', en: 'Papaichton (French Guiana)', sr: 'Papaichton (Frans-Guyane)' },
    subtitles: { nl: 'Aluku-gemeente · Marowijne/Lawa', en: 'Aluku commune · Marowijne/Lawa', sr: 'Aluku fowru · Marowijne/Lawa' },
    river: 'Marowijne/Lawa', district: 'Frans-Guyana',
    sections: {
      intro: {
        nl: 'Papaichton is een van de grotere Aluku-gemeenten op Frans-Guyanees grondgebied aan de Marowijne/Lawarivier.',
        en: 'Papaichton is one of the larger Aluku communes on French Guianese territory on the Marowijne/Lawa River.',
        sr: 'Papaichton na wan fu di bigisma Aluku gemeentes na Frans-Guyanees territorio, nanga Marowijne/Lawa Liba, di dient als wan importan gemeenschapssintrum na di regio.',
      },
      founding: {
        nl: 'Een van de Aluku-nederzettingen die zich vestigden na de gedwongen migratie naar de Franse oever van de Marowijne na 1793.',
        en: 'One of the Aluku settlements established after the forced migration to the French bank of the Marowijne after 1793.',
        sr: 'Wan fu di Aluku nederzettingen meki baka di gedwongen migratie na di Franse oever fu Marowijne baka 1793, pe di Aluku ben musti ron wey fu di Olondesi-Ndyuka militaire druk.',
      },
      history: {
        nl: 'De gemeente heeft de typische Aluku-nederzettingskenmerken: langs de rivier, met sterk behoud van West-Afrikaanse culturele tradities vermengd met Wayana-invloeden.',
        en: 'The commune has the typical Aluku settlement characteristics: along the river, with strong preservation of West African cultural traditions blended with Wayana influences.',
        sr: 'Di gemeente abi di typische Aluku nederzettingskenmerken: nanga di liba, nanga sterk behoud fu West-Afrikaanse kulturele tradities die ben mix nanga Wayana-invloeden, dankzij di bloedbroederschap fu 1815.',
      },
      leadership: {
        nl: 'Bestuurd door een kabiten onder de autoriteit van de Aluku-granman.',
        en: 'Governed by a kabiten under the authority of the Aluku granman.',
        sr: 'Bestuurd doro wan kabiten ondro di otoreteti fu di Aluku granman, die de di centrale figuur fu ala Aluku sma en representeer dem belangen na sodo Frans-Guyanees als bredere regionale nivo.',
      },
      challenges: {
        nl: 'Vergelijkbaar met de uitdagingen van Maripasoula: illegale mijnbouw, milieuvervuiling en de spanning tussen Frans staatsburgerschap en Marron-identiteit.',
        en: 'Comparable to the challenges of Maripasoula: illegal mining, environmental pollution, and the tension between French citizenship and Maroon identity.',
        sr: 'Vergelijkbaar nanga di uitdagingen fu Maripasoula: illegale mijnbouw, milieuvervuiling nanga kwik, en di spanning tussen Frans burgerschap en Marron-identiteit — wan dagelijkse balans tussen di voordelen fu Frans strati en di behoud fu dem eigi kulturele autonomie.',
      },
    },
  },

  { id: 'grand_santi', society: 'aluku', granman: false, lat: 4.253, lng: -54.397,
    names: { nl: 'Grand Santi (Frans-Guyana)', en: 'Grand Santi (French Guiana)', sr: 'Grand Santi (Frans-Guyane)' },
    subtitles: { nl: 'Gemengde Aluku/Ndyuka-gemeente · Marowijne', en: 'Mixed Aluku/Ndyuka commune · Marowijne', sr: 'Gemengd Aluku/Ndyuka fowru · Marowijne' },
    river: 'Marowijne', district: 'Frans-Guyana',
    sections: {
      intro: {
        nl: 'Grand Santi is een Frans-Guyanees gemeente aan de Marowijne met een gemengde Aluku- en Ndyuka-bevolking. Het fungeert als regionaal administratief en commercieel centrum.',
        en: 'Grand Santi is a French Guianese commune on the Marowijne with a mixed Aluku and Ndyuka population. It functions as a regional administrative and commercial center.',
        sr: 'Grand Santi na wan Frans-Guyanees gemeente nanga Marowijne Liba, nanga wan gemengde Aluku en Ndyuka populatie. A functioneer als wan regionaal administratief en commercieel sentro fu di bredere Marron-gemeenschappen nanga di liba.',
      },
      founding: {
        nl: 'Grand Santi ontwikkelde zich als handelsknooppunt langs de Marowijne aan de grens tussen Suriname en Frans-Guyana.',
        en: 'Grand Santi developed as a trading node along the Marowijne on the border between Suriname and French Guiana.',
        sr: 'Grand Santi ben ontwikkelen als wan handelsknooppunt nanga Marowijne Liba na di grensi tussen Suriname en Frans-Guyane, dankzij hem strategische ligging die beide zijden van di liba samenbrengt.',
      },
      history: {
        nl: 'De aanwezigheid van zowel Aluku- als Ndyuka-bevolking weerspiegelt de complexe migratiepatronen in de regio, versterkt door de Binnenlandse Oorlog (1986–1992).',
        en: 'The presence of both Aluku and Ndyuka populations reflects the complex migration patterns in the region, reinforced by the Interior War (1986–1992).',
        sr: 'Di aanwezigheid fu sodo Aluku als Ndyuka sma reflecteer di complexe migratiepatronen na di regio, die ben versterk doro di Binnenlandse Oorlog (1986–1992) pe furu sma ben ron wey fu Suriname go na Frans-Guyane.',
      },
      leadership: {
        nl: 'Heeft zowel Frans-Guyanees gemeentebestuur als informele Marron-gemeenschapsstructuren.',
        en: 'Has both French Guianese municipal governance and informal Maroon community structures.',
        sr: 'Abi sodo Frans-Guyanees gemeentebestuur als informele Marron gemeenschapsstructuren, die parallel functioneer en tezamen di alledaagse leefomgeving fu di gemengde gemeenschap managen.',
      },
      challenges: {
        nl: 'Grenseconomie, drugshandel, goudhandel en illegale migratie zijn de voornaamste maatschappelijke uitdagingen.',
        en: 'Border economy, drug trade, gold trade, and illegal migration are the main social challenges.',
        sr: 'Grensekonomie, drogahandeli, gowtu-handeli en illegale migratie de di voornaamste maatschappelijke uitdagingen fu Grand Santi, die di stad tegelijkertijd een levendig maar uku kwetsbaar posi meki na di Marowijne-grensi.',
      },
    },
  },

  // ══ PARAMAKA ═════════════════════════════════════════════

  { id: 'langatabiki', society: 'paramaka', granman: true, lat: 3.780, lng: -54.350,
    names: { nl: 'Langatabiki (Langatabbetje)', en: 'Langatabiki (Langatabbetje)', sr: 'Langatabiki (Langatabbetje)' },
    subtitles: { nl: 'Zetel van de Granman · eiland in de Marowijne', en: 'Seat of the Granman · island in the Marowijne', sr: 'Oso fu Granman · ailan na Marowijne Liba' },
    river: 'Marowijne / Paramaka-kreek', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Langatabiki is de residentie van de granman van de Paramaka (ook Paamaka), gelegen op een eiland in de Marowijne bij de monding van de Paramakacreek. De naam betekent "lang eiland". Het dorp is onderdeel van het Pamacca-resort.',
        en: 'Langatabiki is the residence of the Paramaka (also Paamaka) granman, on an island in the Marowijne at the mouth of the Paramaka Creek. The name means "long island". The village is part of the Pamacca resort.',
        sr: 'Langatabiki na di oso fu di granman fu di Paramaka (odo Paamaka), nanga wan ailan na Marowijne Liba na di monding fu Paramaka-kreek. Di nem betekent "langa tabiki" — wan langa ailan. Di fowru na deypaart fu di Pamacca-resort.',
      },
      founding: {
        nl: 'Gesticht in 1879 door circa 90 Marrons. De eerste granman heette Apensa. Het dorp groeide uit tot het bestuurscentrum van de Paramaka. Op 11 september 2019 werd het Pamacca-resort afgesplitst van het Tapanahony-resort, waarmee de Paramaka bestuurlijke erkenning kregen.',
        en: 'Founded in 1879 by about 90 Maroons. The first granman was called Apensa. The village grew into the administrative center of the Paramaka. On September 11, 2019 the Pamacca resort was split from the Tapanahony resort, giving the Paramaka administrative recognition.',
        sr: 'Meki na 1879 doro someni 90 Marrons. Di fosi granman ben nen Apensa. Di fowru ben gro kon na di bestuurssintrum fu di Paramaka. Na 11 september 2019, di Pamacca-resort ben split fu di Tapanahony-resort — wan historisch moment pe Paramaka ben kisi officiële bestuurlijke erkenning na Sranan.',
      },
      history: {
        nl: 'De Paramaka spreken het Ndyuka-dialect en zijn nauw verwant aan de Ndyuka en Aluku. In het begin van de 19e eeuw waren zij in feite Ndyuka-vazallen. Later ontwikkelden zij een autonome identiteit. Tijdens de Binnenlandse Oorlog werden Paramaka-gemeenschappen zwaar getroffen door de strijd langs de Marowijne.',
        en: 'The Paramaka speak the Ndyuka dialect and are closely related to the Ndyuka and Aluku. In the early 19th century they were in effect Ndyuka vassals. Later they developed an autonomous identity. During the Interior War Paramaka communities were severely affected by the fighting along the Marowijne.',
        sr: 'Di Paramaka taki di Ndyuka dialect en de na wantimpi verwant nanga di Ndyuka en Aluku. Na vroeg 19de ieuwen den ben in feite Ndyuka-vazallen. Later den ben ontwikkel wan autonoom identiteit. Tijdens di Binnenlandse Oorlog, Paramaka gemeenschappen ben zwaar getroffen doro di feti nanga Marowijne Liba.',
      },
      leadership: {
        nl: 'De granman in Langatabiki vertegenwoordigt de Paramaka binnen het Surinaamse staatsbestel. Het dorp heeft de Granman Cornelis Forster-lagere school.',
        en: 'The granman in Langatabiki represents the Paramaka within the Surinamese state system. The village has the Granman Cornelis Forster primary school.',
        sr: 'Di granman na Langatabiki representeer di Paramaka binnenin di Sranan staatssysteem. Di fowru abi di Granman Cornelis Forster lagere skoro, die onderwijs geeft na di jongeren fu di gemeenschap.',
      },
      challenges: {
        nl: 'De Paramaka zijn een van de kleinere Marrongroepen (circa 11.000 mensen) en zijn kwetsbaar voor cultureel verlies. Grondrechten zijn niet erkend. De Marowijne-regio is belast met illegale mijnbouw en bijbehorende kwikverontreiniging.',
        en: 'The Paramaka are one of the smaller Maroon groups (about 11,000 people) and vulnerable to cultural loss. Land rights are not recognized. The Marowijne region is burdened by illegal mining and associated mercury contamination.',
        sr: 'Di Paramaka na wan fu di pikinmoro Marron groepen (someni 11.000 sma) en dem de kwetsbaar fu kultureel verlies. Gronrechten de niet erkend doro di Sranan strati. Di Marowijne-regio de belast doro illegale mijnbouw en di bijbehorende kwik-pisi die di libas en fisi-baki skadi.',
      },
    },
  },

  { id: 'snesiekondre', society: 'paramaka', granman: false, lat: 3.750, lng: -54.320,
    names: { nl: 'Snesiekondre', en: 'Snesiekondre', sr: 'Snesiekondre' },
    subtitles: { nl: 'Paramaka-dorp · eindpunt wegverbinding', en: 'Paramaka village · end of road connection', sr: 'Paramaka fowru · eni fu wegi' },
    river: 'Marowijne', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Snesiekondre is een Paramaka-dorp gelegen aan het einde van de weg die Langatabiki verbindt met Patamacca en de rest van Suriname.',
        en: 'Snesiekondre is a Paramaka village at the end of the road connecting Langatabiki to Patamacca and the rest of Suriname.',
        sr: 'Snesiekondre na wan Paramaka fowru nanga di eni fu di wegi die Langatabiki kontakt nanga Patamacca en di rest fu Suriname, dient als wan importan verbindingsposi tussen di eiland-fowru en di vasteland.',
      },
      founding: {
        nl: 'Een Paramaka-nederzetting in de Marowijne-regio, onderdeel van het Pamacca-resort.',
        en: 'A Paramaka settlement in the Marowijne region, part of the Pamacca resort.',
        sr: 'Wan Paramaka nederzetting na di Marowijne-regio, deypaart fu di Pamacca-resort die na 2019 ben kisi officiële erkenning als wan aparte bestuurlijke eenheid binnenin Sranan.',
      },
      history: {
        nl: 'Het dorp vormt een verbindingspunt tussen de meer geïsoleerde eilanddorpen en de weg naar de kust.',
        en: 'The village forms a connection point between the more isolated island villages and the road to the coast.',
        sr: 'Di fowru na wan verbindingsposi tussen di mees geïsoleerde eiland-fowru die alleen via boto bereikbaar de, en di wegi die lei na di kosta en Paramaribo, die cruciaal de fu bevoorrading en emergency toegang.',
      },
      leadership: {
        nl: 'Bestuurd door een kabiten onder de Paramaka-granman.',
        en: 'Governed by a kabiten under the Paramaka granman.',
        sr: 'Bestuurd doro wan kabiten ondro di Paramaka granman na Langatabiki, die de di centrale otoreteti fu ala Paramaka fowru na di Marowijne-regio.',
      },
      challenges: {
        nl: 'Beperkte economische mogelijkheden, afhankelijkheid van de informele goudhandel en het ontbreken van formele landrechten zijn structurele uitdagingen.',
        en: 'Limited economic opportunities, dependence on the informal gold trade, and the absence of formal land rights are structural challenges.',
        sr: 'Beperkte ekonomikale mogelijkheden, afhankelijkheid fu di informele gowtu-handeli, en di afwezigheid fu formele gronrechten de structurele uitdagingen. Sonder juridische bescherming van dem gron, di gemeenschap de kwetsbaar fu externe druk fu mijnbouw en andere industriële aktiviteiten.',
      },
    },
  },

  { id: 'patamacca', society: 'paramaka', granman: false, lat: 4.120, lng: -54.550,
    names: { nl: 'Patamacca', en: 'Patamacca', sr: 'Patamacca' },
    subtitles: { nl: 'Paramaka-dorp · binnenland Sipaliwini', en: 'Paramaka village · Sipaliwini interior', sr: 'Paramaka fowru · binnenland Sipaliwini' },
    river: 'Sipaliwini-regio', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Patamacca is een Paramaka-dorp in het binnenland van Suriname, dat dient als verbindingspunt tussen de Marowijne-kustgemeenschappen en de meer afgelegen Paramaka-dorpen.',
        en: 'Patamacca is a Paramaka village in the Surinamese interior, serving as a link between the Marowijne coastal communities and more remote Paramaka villages.',
        sr: 'Patamacca na wan Paramaka fowru na di binnenlant fu Suriname, die dient als wan schakel tussen di Marowijne-kust-gemeenschappen en di mees afgelegen Paramaka fowru dieper na di yungu.',
      },
      founding: {
        nl: 'Een Paramaka-nederzetting in het Sipaliwini-district die werd gesticht als deel van de Paramaka-expansie langs de Marowijne en zijrivieren.',
        en: 'A Paramaka settlement in Sipaliwini District established as part of the Paramaka expansion along the Marowijne and tributaries.',
        sr: 'Wan Paramaka nederzetting na Sipaliwini Distrikt die ben meki als deypaart fu di Paramaka expansie nanga Marowijne en zijrivieren, pe dem ben soek moro gron fu dem groeiende gemeenschap.',
      },
      history: {
        nl: 'Het dorp vormt deel van het bredere Paramaka-nederzettingspatroon langs de Marowijne-regio.',
        en: 'The village forms part of the broader Paramaka settlement pattern along the Marowijne region.',
        sr: 'Di fowru na deypaart fu di bredere Paramaka nederzettingspatroon nanga Marowijne-regio, die di geografische diversiteit fu dem territorio sori — fu eiland-fowru nanga Marowijne Liba te binnenlant-nederzettingen na Sipaliwini.',
      },
      leadership: {
        nl: 'Bestuurd door een kabiten onder de granman van Langatabiki.',
        en: 'Governed by a kabiten under the granman of Langatabiki.',
        sr: 'Bestuurd doro wan kabiten ondro di granman fu Langatabiki, die de di centrale otoreteti fu ala Paramaka fowru en representeer dem belangen na Sranan strati.',
      },
      challenges: {
        nl: 'Rurale armoede, beperkte toegang tot diensten en de druk van goudwinning in de omgeving zijn de voornaamste uitdagingen.',
        en: 'Rural poverty, limited access to services, and the pressure of gold mining in the surrounding area are the main challenges.',
        sr: 'Rurale armoede, beperkte toegang na basisservices leki gezondheidsorg en skori, en di druk fu gowtu-olo aktiviteiten na di omgeving de di voornaamste uitdagingen fu Patamacca-sma die dagelijks fesi den leefomgeving.',
      },
    },
  },


  // ══ NDYUKA (additional) ══════════════════════════════════════════════
  { id: 'bigiston', society: 'ndyuka', granman: false, lat: 3.85, lng: -54.57,
    names: { nl: 'Bigiston', en: 'Bigiston', sr: 'Bigiston' },
    subtitles: { nl: 'Ndyuka-dorp · Tapanahonyrivier', en: 'Ndyuka village · Tapanahonyrivier', sr: 'Ndyuka fowru · Tapanahonyrivier' },
    river: 'Tapanahonyrivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Bigiston is een Ndyuka-dorp in het Tapanahony / Marowijne-gebied, gelegen aan de Tapanahonyrivier in district Sipaliwini. Het maakt deel uit van het uitgestrekte nederzettingsnetwerk dat de Ndyuka langs hun riviergebieden hebben opgebouwd sedert de vredesverdragen van de 18de eeuw.',
        en: 'Bigiston is a Ndyuka village in the Tapanahony / Marowijne area, on the Tapanahonyrivier in Sipaliwini District. It forms part of the extensive settlement network the Ndyuka have maintained along their river territories since the 18th-century peace treaties.',
        sr: 'Bigiston na wan Ndyuka fowru na Tapanahony / Marowijne-gebiedo, na Tapanahonyrivier na Sipaliwini Distrikt. A de deypaart fu di groto nederzettingsnetwerk die Ndyuka ben bouw nanga dem libarivier-gebieden seti dem frede-traktati fu di 18de ieuwen.',
      },
      founding: {
        nl: 'De Ndyuka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van Engelse en Nederlandse kustplantages in de 17de en 18de eeuw. Na decennia van guerrillaoorlog sloten zij in 1760 een vredesverdrag met de Nederlandse koloniale overheid — het eerste van zijn soort in Suriname. In de jaren daarna trokken Ndyuka-families stroomopwaarts langs verschillende rivieren en stichtten dorpen als Bigiston langs de oevers van de Tapanahonyrivier.',
        en: 'The Ndyuka are descendants of enslaved people who escaped English and Dutch coastal plantations in the 17th and 18th centuries. After decades of guerrilla warfare they concluded a peace treaty with Dutch colonial authorities in 1760 — the first of its kind in Suriname. In the years that followed, Ndyuka families moved upriver along various waterways and founded villages such as Bigiston along the banks of the Tapanahonyrivier.',
        sr: 'Ndyuka pipel de naksama fu enslefs sma di ben ron wey fu Ingris en Olondesi plantasi nanga Sranan kosta na 17de en 18de ieuwen. Baka desio fu gerilya-oorlog, den ben seti wan frede-traktati nanga Olondesi koloniale otoreteti na 1760 — di fosi wan na Sranan. Na di jarren baka, Ndyuka famirie ben muvi go na ini liba nanga fesede libas en ben seti fowru leki Bigiston na bengsi fu Tapanahonyrivier.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1760 vestigden Ndyuka-gemeenschappen zich langs de grote rivieren van het Surinaamse binnenland. In de 19de eeuw verwierven de Ndyuka een dominante positie in de vrachtvaart naar het binnenland. De Binnenlandse Oorlog (1986–1992) trof de Ndyuka-gemeenschap zwaar; vele dorpsbewoners vluchtten naar Frans-Guyana. Bigiston doorstond ook de aanpassingen die volgden op de aanleg van de Afobaka-dam in 1964, die het waterpeildeel van het binnenland ingrijpend veranderde.',
        en: 'After the 1760 peace treaty, Ndyuka communities settled along the great rivers of the Surinamese interior. In the 19th century the Ndyuka gained a dominant position in freight transport to the interior. The Interior War (1986–1992) struck the Ndyuka community hard; many villagers fled to French Guiana. Bigiston also endured the disruptions that followed the construction of the Afobaka dam in 1964, which fundamentally altered water levels across the interior.',
        sr: 'Baka di frede-traktati fu 1760, Ndyuka kommetii ben seti libi nanga di groto libas fu Sranan binnenlant. Na 19de ieuwen, Ndyuka ben kisi wan dominante positie na freiverei go na binnenlant. Di Binnenlandse Oorlog (1986–1992) ben naki di Ndyuka kommetii ari tranga; furu fowru-sma ben ron wey go na Frans-Guyane. Bigiston ben abi fu fesi eke di trobi di kom baka di bouw fu Afobaka dam na 1964, di ben fenu-fenu tjanji di waterpeil nanga di heri binnenlant.',
      },
      leadership: {
        nl: 'Bigiston wordt bestuurd door een kabiten (kapitein), die rapporteert aan de granman van de Ndyuka. De kabiten beheert interne conflicten, vertegenwoordigt het dorp bij de granman en onderhoudt de betrekkingen met overheidsinstanties. De traditionele raad van ouderlingen speelt een aanvullende rol bij spirituele en juridische kwesties.',
        en: 'Bigiston is governed by a kabiten (captain) who reports to the Ndyuka granman. The kabiten manages internal disputes, represents the village to the granman, and maintains relations with government bodies. The traditional council of elders plays a supplementary role in spiritual and legal matters.',
        sr: 'Bigiston de bestuurd doro wan kabiten (kapiteini) di rapporteer na di Ndyuka granman. Di kabiten managi interne konflikten, representeer di fowru na di granman, en hori relasi nanga staatsbodis. Di traditionele raad fu owreman speli wan aanvullende rolo na spirituele en juridische zaken.',
      },
      challenges: {
        nl: 'De voornaamste uitdagingen voor Bigiston zijn de vervuiling van de rivier door kwikgebruik bij kleinschalige goudwinning, het gebrek aan structurele gezondheidszorg en onderwijs, en de emigratie van jongeren naar Paramaribo en Nederland. De juridische onzekerheid rond grondbezit — Surinamees recht erkent Marron-landrechten niet formeel — blijft een structureel probleem.',
        en: 'The main challenges for Bigiston are river contamination from mercury use in small-scale gold mining, the lack of structural healthcare and education, and the emigration of young people to Paramaribo and the Netherlands. The legal uncertainty surrounding land tenure — Surinamese law does not formally recognize Maroon land rights — remains a structural problem.',
        sr: 'Di voornaamste problemen fu Bigiston de pisi fu di liba doro kwik-gebruik na pikin gowtu-olo werki, di gebrek fu strukturele gezondheidsorg en skori, en di muvi fu jongomama go Paramaribo en Holland. Di juridische onzekerheid rondoro grondbezit — Sranan weti no erkenne Marron gronrechten formeel — de ete wan strukturele probleem.',
      },
    },
  },
  { id: 'godo_holo', society: 'ndyuka', granman: false, lat: 3.76, lng: -54.7,
    names: { nl: 'Godo Holo', en: 'Godo Holo', sr: 'Godo Holo' },
    subtitles: { nl: 'Ndyuka-dorp · Tapanahonyrivier', en: 'Ndyuka village · Tapanahonyrivier', sr: 'Ndyuka fowru · Tapanahonyrivier' },
    river: 'Tapanahonyrivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Godo Holo is een Ndyuka-dorp in het Tapanahony-gebied, gelegen aan de Tapanahonyrivier in district Sipaliwini. Het maakt deel uit van het uitgestrekte nederzettingsnetwerk dat de Ndyuka langs hun riviergebieden hebben opgebouwd sedert de vredesverdragen van de 18de eeuw.',
        en: 'Godo Holo is a Ndyuka village in the Tapanahony area, on the Tapanahonyrivier in Sipaliwini District. It forms part of the extensive settlement network the Ndyuka have maintained along their river territories since the 18th-century peace treaties.',
        sr: 'Godo Holo na wan Ndyuka fowru na Tapanahony-gebiedo, na Tapanahonyrivier na Sipaliwini Distrikt. A de deypaart fu di groto nederzettingsnetwerk die Ndyuka ben bouw nanga dem libarivier-gebieden seti dem frede-traktati fu di 18de ieuwen.',
      },
      founding: {
        nl: 'De Ndyuka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van Engelse en Nederlandse kustplantages in de 17de en 18de eeuw. Na decennia van guerrillaoorlog sloten zij in 1760 een vredesverdrag met de Nederlandse koloniale overheid — het eerste van zijn soort in Suriname. In de jaren daarna trokken Ndyuka-families stroomopwaarts langs verschillende rivieren en stichtten dorpen als Godo Holo langs de oevers van de Tapanahonyrivier.',
        en: 'The Ndyuka are descendants of enslaved people who escaped English and Dutch coastal plantations in the 17th and 18th centuries. After decades of guerrilla warfare they concluded a peace treaty with Dutch colonial authorities in 1760 — the first of its kind in Suriname. In the years that followed, Ndyuka families moved upriver along various waterways and founded villages such as Godo Holo along the banks of the Tapanahonyrivier.',
        sr: 'Ndyuka pipel de naksama fu enslefs sma di ben ron wey fu Ingris en Olondesi plantasi nanga Sranan kosta na 17de en 18de ieuwen. Baka desio fu gerilya-oorlog, den ben seti wan frede-traktati nanga Olondesi koloniale otoreteti na 1760 — di fosi wan na Sranan. Na di jarren baka, Ndyuka famirie ben muvi go na ini liba nanga fesede libas en ben seti fowru leki Godo Holo na bengsi fu Tapanahonyrivier.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1760 vestigden Ndyuka-gemeenschappen zich langs de grote rivieren van het Surinaamse binnenland. In de 19de eeuw verwierven de Ndyuka een dominante positie in de vrachtvaart naar het binnenland. De Binnenlandse Oorlog (1986–1992) trof de Ndyuka-gemeenschap zwaar; vele dorpsbewoners vluchtten naar Frans-Guyana. Godo Holo doorstond ook de aanpassingen die volgden op de aanleg van de Afobaka-dam in 1964, die het waterpeildeel van het binnenland ingrijpend veranderde.',
        en: 'After the 1760 peace treaty, Ndyuka communities settled along the great rivers of the Surinamese interior. In the 19th century the Ndyuka gained a dominant position in freight transport to the interior. The Interior War (1986–1992) struck the Ndyuka community hard; many villagers fled to French Guiana. Godo Holo also endured the disruptions that followed the construction of the Afobaka dam in 1964, which fundamentally altered water levels across the interior.',
        sr: 'Baka di frede-traktati fu 1760, Ndyuka kommetii ben seti libi nanga di groto libas fu Sranan binnenlant. Na 19de ieuwen, Ndyuka ben kisi wan dominante positie na freiverei go na binnenlant. Di Binnenlandse Oorlog (1986–1992) ben naki di Ndyuka kommetii ari tranga; furu fowru-sma ben ron wey go na Frans-Guyane. Godo Holo ben abi fu fesi eke di trobi di kom baka di bouw fu Afobaka dam na 1964, di ben fenu-fenu tjanji di waterpeil nanga di heri binnenlant.',
      },
      leadership: {
        nl: 'Godo Holo wordt bestuurd door een kabiten (kapitein), die rapporteert aan de granman van de Ndyuka. De kabiten beheert interne conflicten, vertegenwoordigt het dorp bij de granman en onderhoudt de betrekkingen met overheidsinstanties. De traditionele raad van ouderlingen speelt een aanvullende rol bij spirituele en juridische kwesties.',
        en: 'Godo Holo is governed by a kabiten (captain) who reports to the Ndyuka granman. The kabiten manages internal disputes, represents the village to the granman, and maintains relations with government bodies. The traditional council of elders plays a supplementary role in spiritual and legal matters.',
        sr: 'Godo Holo de bestuurd doro wan kabiten (kapiteini) di rapporteer na di Ndyuka granman. Di kabiten managi interne konflikten, representeer di fowru na di granman, en hori relasi nanga staatsbodis. Di traditionele raad fu owreman speli wan aanvullende rolo na spirituele en juridische zaken.',
      },
      challenges: {
        nl: 'De voornaamste uitdagingen voor Godo Holo zijn de vervuiling van de rivier door kwikgebruik bij kleinschalige goudwinning, het gebrek aan structurele gezondheidszorg en onderwijs, en de emigratie van jongeren naar Paramaribo en Nederland. De juridische onzekerheid rond grondbezit — Surinamees recht erkent Marron-landrechten niet formeel — blijft een structureel probleem.',
        en: 'The main challenges for Godo Holo are river contamination from mercury use in small-scale gold mining, the lack of structural healthcare and education, and the emigration of young people to Paramaribo and the Netherlands. The legal uncertainty surrounding land tenure — Surinamese law does not formally recognize Maroon land rights — remains a structural problem.',
        sr: 'Di voornaamste problemen fu Godo Holo de pisi fu di liba doro kwik-gebruik na pikin gowtu-olo werki, di gebrek fu strukturele gezondheidsorg en skori, en di muvi fu jongomama go Paramaribo en Holland. Di juridische onzekerheid rondoro grondbezit — Sranan weti no erkenne Marron gronrechten formeel — de ete wan strukturele probleem.',
      },
    },
  },
  { id: 'lantiwei', society: 'ndyuka', granman: false, lat: 3.8, lng: -54.64,
    names: { nl: 'Lantiwei', en: 'Lantiwei', sr: 'Lantiwei' },
    subtitles: { nl: 'Ndyuka-dorp · Tapanahonyrivier', en: 'Ndyuka village · Tapanahonyrivier', sr: 'Ndyuka fowru · Tapanahonyrivier' },
    river: 'Tapanahonyrivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Lantiwei is een Ndyuka-dorp in het Tapanahony / Marowijne-gebied, gelegen aan de Tapanahonyrivier in district Sipaliwini. Het maakt deel uit van het uitgestrekte nederzettingsnetwerk dat de Ndyuka langs hun riviergebieden hebben opgebouwd sedert de vredesverdragen van de 18de eeuw.',
        en: 'Lantiwei is a Ndyuka village in the Tapanahony / Marowijne area, on the Tapanahonyrivier in Sipaliwini District. It forms part of the extensive settlement network the Ndyuka have maintained along their river territories since the 18th-century peace treaties.',
        sr: 'Lantiwei na wan Ndyuka fowru na Tapanahony / Marowijne-gebiedo, na Tapanahonyrivier na Sipaliwini Distrikt. A de deypaart fu di groto nederzettingsnetwerk die Ndyuka ben bouw nanga dem libarivier-gebieden seti dem frede-traktati fu di 18de ieuwen.',
      },
      founding: {
        nl: 'De Ndyuka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van Engelse en Nederlandse kustplantages in de 17de en 18de eeuw. Na decennia van guerrillaoorlog sloten zij in 1760 een vredesverdrag met de Nederlandse koloniale overheid — het eerste van zijn soort in Suriname. In de jaren daarna trokken Ndyuka-families stroomopwaarts langs verschillende rivieren en stichtten dorpen als Lantiwei langs de oevers van de Tapanahonyrivier.',
        en: 'The Ndyuka are descendants of enslaved people who escaped English and Dutch coastal plantations in the 17th and 18th centuries. After decades of guerrilla warfare they concluded a peace treaty with Dutch colonial authorities in 1760 — the first of its kind in Suriname. In the years that followed, Ndyuka families moved upriver along various waterways and founded villages such as Lantiwei along the banks of the Tapanahonyrivier.',
        sr: 'Ndyuka pipel de naksama fu enslefs sma di ben ron wey fu Ingris en Olondesi plantasi nanga Sranan kosta na 17de en 18de ieuwen. Baka desio fu gerilya-oorlog, den ben seti wan frede-traktati nanga Olondesi koloniale otoreteti na 1760 — di fosi wan na Sranan. Na di jarren baka, Ndyuka famirie ben muvi go na ini liba nanga fesede libas en ben seti fowru leki Lantiwei na bengsi fu Tapanahonyrivier.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1760 vestigden Ndyuka-gemeenschappen zich langs de grote rivieren van het Surinaamse binnenland. In de 19de eeuw verwierven de Ndyuka een dominante positie in de vrachtvaart naar het binnenland. De Binnenlandse Oorlog (1986–1992) trof de Ndyuka-gemeenschap zwaar; vele dorpsbewoners vluchtten naar Frans-Guyana. Lantiwei doorstond ook de aanpassingen die volgden op de aanleg van de Afobaka-dam in 1964, die het waterpeildeel van het binnenland ingrijpend veranderde.',
        en: 'After the 1760 peace treaty, Ndyuka communities settled along the great rivers of the Surinamese interior. In the 19th century the Ndyuka gained a dominant position in freight transport to the interior. The Interior War (1986–1992) struck the Ndyuka community hard; many villagers fled to French Guiana. Lantiwei also endured the disruptions that followed the construction of the Afobaka dam in 1964, which fundamentally altered water levels across the interior.',
        sr: 'Baka di frede-traktati fu 1760, Ndyuka kommetii ben seti libi nanga di groto libas fu Sranan binnenlant. Na 19de ieuwen, Ndyuka ben kisi wan dominante positie na freiverei go na binnenlant. Di Binnenlandse Oorlog (1986–1992) ben naki di Ndyuka kommetii ari tranga; furu fowru-sma ben ron wey go na Frans-Guyane. Lantiwei ben abi fu fesi eke di trobi di kom baka di bouw fu Afobaka dam na 1964, di ben fenu-fenu tjanji di waterpeil nanga di heri binnenlant.',
      },
      leadership: {
        nl: 'Lantiwei wordt bestuurd door een kabiten (kapitein), die rapporteert aan de granman van de Ndyuka. De kabiten beheert interne conflicten, vertegenwoordigt het dorp bij de granman en onderhoudt de betrekkingen met overheidsinstanties. De traditionele raad van ouderlingen speelt een aanvullende rol bij spirituele en juridische kwesties.',
        en: 'Lantiwei is governed by a kabiten (captain) who reports to the Ndyuka granman. The kabiten manages internal disputes, represents the village to the granman, and maintains relations with government bodies. The traditional council of elders plays a supplementary role in spiritual and legal matters.',
        sr: 'Lantiwei de bestuurd doro wan kabiten (kapiteini) di rapporteer na di Ndyuka granman. Di kabiten managi interne konflikten, representeer di fowru na di granman, en hori relasi nanga staatsbodis. Di traditionele raad fu owreman speli wan aanvullende rolo na spirituele en juridische zaken.',
      },
      challenges: {
        nl: 'De voornaamste uitdagingen voor Lantiwei zijn de vervuiling van de rivier door kwikgebruik bij kleinschalige goudwinning, het gebrek aan structurele gezondheidszorg en onderwijs, en de emigratie van jongeren naar Paramaribo en Nederland. De juridische onzekerheid rond grondbezit — Surinamees recht erkent Marron-landrechten niet formeel — blijft een structureel probleem.',
        en: 'The main challenges for Lantiwei are river contamination from mercury use in small-scale gold mining, the lack of structural healthcare and education, and the emigration of young people to Paramaribo and the Netherlands. The legal uncertainty surrounding land tenure — Surinamese law does not formally recognize Maroon land rights — remains a structural problem.',
        sr: 'Di voornaamste problemen fu Lantiwei de pisi fu di liba doro kwik-gebruik na pikin gowtu-olo werki, di gebrek fu strukturele gezondheidsorg en skori, en di muvi fu jongomama go Paramaribo en Holland. Di juridische onzekerheid rondoro grondbezit — Sranan weti no erkenne Marron gronrechten formeel — de ete wan strukturele probleem.',
      },
    },
  },
  { id: 'manlobi', society: 'ndyuka', granman: false, lat: 3.815, lng: -54.61,
    names: { nl: 'Manlobi', en: 'Manlobi', sr: 'Manlobi' },
    subtitles: { nl: 'Ndyuka-dorp · Tapanahonyrivier', en: 'Ndyuka village · Tapanahonyrivier', sr: 'Ndyuka fowru · Tapanahonyrivier' },
    river: 'Tapanahonyrivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Manlobi is een Ndyuka-dorp in het Tapanahony / Marowijne-gebied, gelegen aan de Tapanahonyrivier in district Sipaliwini. Het maakt deel uit van het uitgestrekte nederzettingsnetwerk dat de Ndyuka langs hun riviergebieden hebben opgebouwd sedert de vredesverdragen van de 18de eeuw.',
        en: 'Manlobi is a Ndyuka village in the Tapanahony / Marowijne area, on the Tapanahonyrivier in Sipaliwini District. It forms part of the extensive settlement network the Ndyuka have maintained along their river territories since the 18th-century peace treaties.',
        sr: 'Manlobi na wan Ndyuka fowru na Tapanahony / Marowijne-gebiedo, na Tapanahonyrivier na Sipaliwini Distrikt. A de deypaart fu di groto nederzettingsnetwerk die Ndyuka ben bouw nanga dem libarivier-gebieden seti dem frede-traktati fu di 18de ieuwen.',
      },
      founding: {
        nl: 'De Ndyuka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van Engelse en Nederlandse kustplantages in de 17de en 18de eeuw. Na decennia van guerrillaoorlog sloten zij in 1760 een vredesverdrag met de Nederlandse koloniale overheid — het eerste van zijn soort in Suriname. In de jaren daarna trokken Ndyuka-families stroomopwaarts langs verschillende rivieren en stichtten dorpen als Manlobi langs de oevers van de Tapanahonyrivier.',
        en: 'The Ndyuka are descendants of enslaved people who escaped English and Dutch coastal plantations in the 17th and 18th centuries. After decades of guerrilla warfare they concluded a peace treaty with Dutch colonial authorities in 1760 — the first of its kind in Suriname. In the years that followed, Ndyuka families moved upriver along various waterways and founded villages such as Manlobi along the banks of the Tapanahonyrivier.',
        sr: 'Ndyuka pipel de naksama fu enslefs sma di ben ron wey fu Ingris en Olondesi plantasi nanga Sranan kosta na 17de en 18de ieuwen. Baka desio fu gerilya-oorlog, den ben seti wan frede-traktati nanga Olondesi koloniale otoreteti na 1760 — di fosi wan na Sranan. Na di jarren baka, Ndyuka famirie ben muvi go na ini liba nanga fesede libas en ben seti fowru leki Manlobi na bengsi fu Tapanahonyrivier.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1760 vestigden Ndyuka-gemeenschappen zich langs de grote rivieren van het Surinaamse binnenland. In de 19de eeuw verwierven de Ndyuka een dominante positie in de vrachtvaart naar het binnenland. De Binnenlandse Oorlog (1986–1992) trof de Ndyuka-gemeenschap zwaar; vele dorpsbewoners vluchtten naar Frans-Guyana. Manlobi doorstond ook de aanpassingen die volgden op de aanleg van de Afobaka-dam in 1964, die het waterpeildeel van het binnenland ingrijpend veranderde.',
        en: 'After the 1760 peace treaty, Ndyuka communities settled along the great rivers of the Surinamese interior. In the 19th century the Ndyuka gained a dominant position in freight transport to the interior. The Interior War (1986–1992) struck the Ndyuka community hard; many villagers fled to French Guiana. Manlobi also endured the disruptions that followed the construction of the Afobaka dam in 1964, which fundamentally altered water levels across the interior.',
        sr: 'Baka di frede-traktati fu 1760, Ndyuka kommetii ben seti libi nanga di groto libas fu Sranan binnenlant. Na 19de ieuwen, Ndyuka ben kisi wan dominante positie na freiverei go na binnenlant. Di Binnenlandse Oorlog (1986–1992) ben naki di Ndyuka kommetii ari tranga; furu fowru-sma ben ron wey go na Frans-Guyane. Manlobi ben abi fu fesi eke di trobi di kom baka di bouw fu Afobaka dam na 1964, di ben fenu-fenu tjanji di waterpeil nanga di heri binnenlant.',
      },
      leadership: {
        nl: 'Manlobi wordt bestuurd door een kabiten (kapitein), die rapporteert aan de granman van de Ndyuka. De kabiten beheert interne conflicten, vertegenwoordigt het dorp bij de granman en onderhoudt de betrekkingen met overheidsinstanties. De traditionele raad van ouderlingen speelt een aanvullende rol bij spirituele en juridische kwesties.',
        en: 'Manlobi is governed by a kabiten (captain) who reports to the Ndyuka granman. The kabiten manages internal disputes, represents the village to the granman, and maintains relations with government bodies. The traditional council of elders plays a supplementary role in spiritual and legal matters.',
        sr: 'Manlobi de bestuurd doro wan kabiten (kapiteini) di rapporteer na di Ndyuka granman. Di kabiten managi interne konflikten, representeer di fowru na di granman, en hori relasi nanga staatsbodis. Di traditionele raad fu owreman speli wan aanvullende rolo na spirituele en juridische zaken.',
      },
      challenges: {
        nl: 'De voornaamste uitdagingen voor Manlobi zijn de vervuiling van de rivier door kwikgebruik bij kleinschalige goudwinning, het gebrek aan structurele gezondheidszorg en onderwijs, en de emigratie van jongeren naar Paramaribo en Nederland. De juridische onzekerheid rond grondbezit — Surinamees recht erkent Marron-landrechten niet formeel — blijft een structureel probleem.',
        en: 'The main challenges for Manlobi are river contamination from mercury use in small-scale gold mining, the lack of structural healthcare and education, and the emigration of young people to Paramaribo and the Netherlands. The legal uncertainty surrounding land tenure — Surinamese law does not formally recognize Maroon land rights — remains a structural problem.',
        sr: 'Di voornaamste problemen fu Manlobi de pisi fu di liba doro kwik-gebruik na pikin gowtu-olo werki, di gebrek fu strukturele gezondheidsorg en skori, en di muvi fu jongomama go Paramaribo en Holland. Di juridische onzekerheid rondoro grondbezit — Sranan weti no erkenne Marron gronrechten formeel — de ete wan strukturele probleem.',
      },
    },
  },
  { id: 'moengotapoe', society: 'ndyuka', granman: false, lat: 5.61, lng: -54.4,
    names: { nl: 'Moengotapoe', en: 'Moengotapoe', sr: 'Moengotapoe' },
    subtitles: { nl: 'Ndyuka-dorp · Cotticarivier', en: 'Ndyuka village · Cotticarivier', sr: 'Ndyuka fowru · Cotticarivier' },
    river: 'Cotticarivier', district: 'Marowijne',
    sections: {
      intro: {
        nl: 'Moengotapoe is een Ndyuka-dorp in het Marowijne-gebied, gelegen aan de Cotticarivier in district Marowijne. Het maakt deel uit van het uitgestrekte nederzettingsnetwerk dat de Ndyuka langs hun riviergebieden hebben opgebouwd sedert de vredesverdragen van de 18de eeuw.',
        en: 'Moengotapoe is a Ndyuka village in the Marowijne area, on the Cotticarivier in Marowijne District. It forms part of the extensive settlement network the Ndyuka have maintained along their river territories since the 18th-century peace treaties.',
        sr: 'Moengotapoe na wan Ndyuka fowru na Marowijne-gebiedo, na Cotticarivier na Marowijne Distrikt. A de deypaart fu di groto nederzettingsnetwerk die Ndyuka ben bouw nanga dem libarivier-gebieden seti dem frede-traktati fu di 18de ieuwen.',
      },
      founding: {
        nl: 'De Ndyuka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van Engelse en Nederlandse kustplantages in de 17de en 18de eeuw. Na decennia van guerrillaoorlog sloten zij in 1760 een vredesverdrag met de Nederlandse koloniale overheid — het eerste van zijn soort in Suriname. In de jaren daarna trokken Ndyuka-families stroomopwaarts langs verschillende rivieren en stichtten dorpen als Moengotapoe langs de oevers van de Cotticarivier.',
        en: 'The Ndyuka are descendants of enslaved people who escaped English and Dutch coastal plantations in the 17th and 18th centuries. After decades of guerrilla warfare they concluded a peace treaty with Dutch colonial authorities in 1760 — the first of its kind in Suriname. In the years that followed, Ndyuka families moved upriver along various waterways and founded villages such as Moengotapoe along the banks of the Cotticarivier.',
        sr: 'Ndyuka pipel de naksama fu enslefs sma di ben ron wey fu Ingris en Olondesi plantasi nanga Sranan kosta na 17de en 18de ieuwen. Baka desio fu gerilya-oorlog, den ben seti wan frede-traktati nanga Olondesi koloniale otoreteti na 1760 — di fosi wan na Sranan. Na di jarren baka, Ndyuka famirie ben muvi go na ini liba nanga fesede libas en ben seti fowru leki Moengotapoe na bengsi fu Cotticarivier.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1760 vestigden Ndyuka-gemeenschappen zich langs de grote rivieren van het Surinaamse binnenland. In de 19de eeuw verwierven de Ndyuka een dominante positie in de vrachtvaart naar het binnenland. De Binnenlandse Oorlog (1986–1992) trof de Ndyuka-gemeenschap zwaar; vele dorpsbewoners vluchtten naar Frans-Guyana. Moengotapoe doorstond ook de aanpassingen die volgden op de aanleg van de Afobaka-dam in 1964, die het waterpeildeel van het binnenland ingrijpend veranderde.',
        en: 'After the 1760 peace treaty, Ndyuka communities settled along the great rivers of the Surinamese interior. In the 19th century the Ndyuka gained a dominant position in freight transport to the interior. The Interior War (1986–1992) struck the Ndyuka community hard; many villagers fled to French Guiana. Moengotapoe also endured the disruptions that followed the construction of the Afobaka dam in 1964, which fundamentally altered water levels across the interior.',
        sr: 'Baka di frede-traktati fu 1760, Ndyuka kommetii ben seti libi nanga di groto libas fu Sranan binnenlant. Na 19de ieuwen, Ndyuka ben kisi wan dominante positie na freiverei go na binnenlant. Di Binnenlandse Oorlog (1986–1992) ben naki di Ndyuka kommetii ari tranga; furu fowru-sma ben ron wey go na Frans-Guyane. Moengotapoe ben abi fu fesi eke di trobi di kom baka di bouw fu Afobaka dam na 1964, di ben fenu-fenu tjanji di waterpeil nanga di heri binnenlant.',
      },
      leadership: {
        nl: 'Moengotapoe wordt bestuurd door een kabiten (kapitein), die rapporteert aan de granman van de Ndyuka. De kabiten beheert interne conflicten, vertegenwoordigt het dorp bij de granman en onderhoudt de betrekkingen met overheidsinstanties. De traditionele raad van ouderlingen speelt een aanvullende rol bij spirituele en juridische kwesties.',
        en: 'Moengotapoe is governed by a kabiten (captain) who reports to the Ndyuka granman. The kabiten manages internal disputes, represents the village to the granman, and maintains relations with government bodies. The traditional council of elders plays a supplementary role in spiritual and legal matters.',
        sr: 'Moengotapoe de bestuurd doro wan kabiten (kapiteini) di rapporteer na di Ndyuka granman. Di kabiten managi interne konflikten, representeer di fowru na di granman, en hori relasi nanga staatsbodis. Di traditionele raad fu owreman speli wan aanvullende rolo na spirituele en juridische zaken.',
      },
      challenges: {
        nl: 'De voornaamste uitdagingen voor Moengotapoe zijn de vervuiling van de rivier door kwikgebruik bij kleinschalige goudwinning, het gebrek aan structurele gezondheidszorg en onderwijs, en de emigratie van jongeren naar Paramaribo en Nederland. De juridische onzekerheid rond grondbezit — Surinamees recht erkent Marron-landrechten niet formeel — blijft een structureel probleem.',
        en: 'The main challenges for Moengotapoe are river contamination from mercury use in small-scale gold mining, the lack of structural healthcare and education, and the emigration of young people to Paramaribo and the Netherlands. The legal uncertainty surrounding land tenure — Surinamese law does not formally recognize Maroon land rights — remains a structural problem.',
        sr: 'Di voornaamste problemen fu Moengotapoe de pisi fu di liba doro kwik-gebruik na pikin gowtu-olo werki, di gebrek fu strukturele gezondheidsorg en skori, en di muvi fu jongomama go Paramaribo en Holland. Di juridische onzekerheid rondoro grondbezit — Sranan weti no erkenne Marron gronrechten formeel — de ete wan strukturele probleem.',
      },
    },
  },
  { id: 'ovia_olo', society: 'ndyuka', granman: false, lat: 3.74, lng: -54.72,
    names: { nl: 'Ovia Olo', en: 'Ovia Olo', sr: 'Ovia Olo' },
    subtitles: { nl: 'Ndyuka-dorp · Tapanahonyrivier', en: 'Ndyuka village · Tapanahonyrivier', sr: 'Ndyuka fowru · Tapanahonyrivier' },
    river: 'Tapanahonyrivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Ovia Olo is een Ndyuka-dorp in het Tapanahony-gebied, gelegen aan de Tapanahonyrivier in district Sipaliwini. Het maakt deel uit van het uitgestrekte nederzettingsnetwerk dat de Ndyuka langs hun riviergebieden hebben opgebouwd sedert de vredesverdragen van de 18de eeuw.',
        en: 'Ovia Olo is a Ndyuka village in the Tapanahony area, on the Tapanahonyrivier in Sipaliwini District. It forms part of the extensive settlement network the Ndyuka have maintained along their river territories since the 18th-century peace treaties.',
        sr: 'Ovia Olo na wan Ndyuka fowru na Tapanahony-gebiedo, na Tapanahonyrivier na Sipaliwini Distrikt. A de deypaart fu di groto nederzettingsnetwerk die Ndyuka ben bouw nanga dem libarivier-gebieden seti dem frede-traktati fu di 18de ieuwen.',
      },
      founding: {
        nl: 'De Ndyuka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van Engelse en Nederlandse kustplantages in de 17de en 18de eeuw. Na decennia van guerrillaoorlog sloten zij in 1760 een vredesverdrag met de Nederlandse koloniale overheid — het eerste van zijn soort in Suriname. In de jaren daarna trokken Ndyuka-families stroomopwaarts langs verschillende rivieren en stichtten dorpen als Ovia Olo langs de oevers van de Tapanahonyrivier.',
        en: 'The Ndyuka are descendants of enslaved people who escaped English and Dutch coastal plantations in the 17th and 18th centuries. After decades of guerrilla warfare they concluded a peace treaty with Dutch colonial authorities in 1760 — the first of its kind in Suriname. In the years that followed, Ndyuka families moved upriver along various waterways and founded villages such as Ovia Olo along the banks of the Tapanahonyrivier.',
        sr: 'Ndyuka pipel de naksama fu enslefs sma di ben ron wey fu Ingris en Olondesi plantasi nanga Sranan kosta na 17de en 18de ieuwen. Baka desio fu gerilya-oorlog, den ben seti wan frede-traktati nanga Olondesi koloniale otoreteti na 1760 — di fosi wan na Sranan. Na di jarren baka, Ndyuka famirie ben muvi go na ini liba nanga fesede libas en ben seti fowru leki Ovia Olo na bengsi fu Tapanahonyrivier.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1760 vestigden Ndyuka-gemeenschappen zich langs de grote rivieren van het Surinaamse binnenland. In de 19de eeuw verwierven de Ndyuka een dominante positie in de vrachtvaart naar het binnenland. De Binnenlandse Oorlog (1986–1992) trof de Ndyuka-gemeenschap zwaar; vele dorpsbewoners vluchtten naar Frans-Guyana. Ovia Olo doorstond ook de aanpassingen die volgden op de aanleg van de Afobaka-dam in 1964, die het waterpeildeel van het binnenland ingrijpend veranderde.',
        en: 'After the 1760 peace treaty, Ndyuka communities settled along the great rivers of the Surinamese interior. In the 19th century the Ndyuka gained a dominant position in freight transport to the interior. The Interior War (1986–1992) struck the Ndyuka community hard; many villagers fled to French Guiana. Ovia Olo also endured the disruptions that followed the construction of the Afobaka dam in 1964, which fundamentally altered water levels across the interior.',
        sr: 'Baka di frede-traktati fu 1760, Ndyuka kommetii ben seti libi nanga di groto libas fu Sranan binnenlant. Na 19de ieuwen, Ndyuka ben kisi wan dominante positie na freiverei go na binnenlant. Di Binnenlandse Oorlog (1986–1992) ben naki di Ndyuka kommetii ari tranga; furu fowru-sma ben ron wey go na Frans-Guyane. Ovia Olo ben abi fu fesi eke di trobi di kom baka di bouw fu Afobaka dam na 1964, di ben fenu-fenu tjanji di waterpeil nanga di heri binnenlant.',
      },
      leadership: {
        nl: 'Ovia Olo wordt bestuurd door een kabiten (kapitein), die rapporteert aan de granman van de Ndyuka. De kabiten beheert interne conflicten, vertegenwoordigt het dorp bij de granman en onderhoudt de betrekkingen met overheidsinstanties. De traditionele raad van ouderlingen speelt een aanvullende rol bij spirituele en juridische kwesties.',
        en: 'Ovia Olo is governed by a kabiten (captain) who reports to the Ndyuka granman. The kabiten manages internal disputes, represents the village to the granman, and maintains relations with government bodies. The traditional council of elders plays a supplementary role in spiritual and legal matters.',
        sr: 'Ovia Olo de bestuurd doro wan kabiten (kapiteini) di rapporteer na di Ndyuka granman. Di kabiten managi interne konflikten, representeer di fowru na di granman, en hori relasi nanga staatsbodis. Di traditionele raad fu owreman speli wan aanvullende rolo na spirituele en juridische zaken.',
      },
      challenges: {
        nl: 'De voornaamste uitdagingen voor Ovia Olo zijn de vervuiling van de rivier door kwikgebruik bij kleinschalige goudwinning, het gebrek aan structurele gezondheidszorg en onderwijs, en de emigratie van jongeren naar Paramaribo en Nederland. De juridische onzekerheid rond grondbezit — Surinamees recht erkent Marron-landrechten niet formeel — blijft een structureel probleem.',
        en: 'The main challenges for Ovia Olo are river contamination from mercury use in small-scale gold mining, the lack of structural healthcare and education, and the emigration of young people to Paramaribo and the Netherlands. The legal uncertainty surrounding land tenure — Surinamese law does not formally recognize Maroon land rights — remains a structural problem.',
        sr: 'Di voornaamste problemen fu Ovia Olo de pisi fu di liba doro kwik-gebruik na pikin gowtu-olo werki, di gebrek fu strukturele gezondheidsorg en skori, en di muvi fu jongomama go Paramaribo en Holland. Di juridische onzekerheid rondoro grondbezit — Sranan weti no erkenne Marron gronrechten formeel — de ete wan strukturele probleem.',
      },
    },
  },
  { id: 'pikin_santi', society: 'ndyuka', granman: false, lat: 3.79, lng: -54.66,
    names: { nl: 'Pikin Santi', en: 'Pikin Santi', sr: 'Pikin Santi' },
    subtitles: { nl: 'Ndyuka-dorp · Tapanahonyrivier', en: 'Ndyuka village · Tapanahonyrivier', sr: 'Ndyuka fowru · Tapanahonyrivier' },
    river: 'Tapanahonyrivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Pikin Santi is een Ndyuka-dorp in het Tapanahony-gebied, gelegen aan de Tapanahonyrivier in district Sipaliwini. Het maakt deel uit van het uitgestrekte nederzettingsnetwerk dat de Ndyuka langs hun riviergebieden hebben opgebouwd sedert de vredesverdragen van de 18de eeuw.',
        en: 'Pikin Santi is a Ndyuka village in the Tapanahony area, on the Tapanahonyrivier in Sipaliwini District. It forms part of the extensive settlement network the Ndyuka have maintained along their river territories since the 18th-century peace treaties.',
        sr: 'Pikin Santi na wan Ndyuka fowru na Tapanahony-gebiedo, na Tapanahonyrivier na Sipaliwini Distrikt. A de deypaart fu di groto nederzettingsnetwerk die Ndyuka ben bouw nanga dem libarivier-gebieden seti dem frede-traktati fu di 18de ieuwen.',
      },
      founding: {
        nl: 'De Ndyuka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van Engelse en Nederlandse kustplantages in de 17de en 18de eeuw. Na decennia van guerrillaoorlog sloten zij in 1760 een vredesverdrag met de Nederlandse koloniale overheid — het eerste van zijn soort in Suriname. In de jaren daarna trokken Ndyuka-families stroomopwaarts langs verschillende rivieren en stichtten dorpen als Pikin Santi langs de oevers van de Tapanahonyrivier.',
        en: 'The Ndyuka are descendants of enslaved people who escaped English and Dutch coastal plantations in the 17th and 18th centuries. After decades of guerrilla warfare they concluded a peace treaty with Dutch colonial authorities in 1760 — the first of its kind in Suriname. In the years that followed, Ndyuka families moved upriver along various waterways and founded villages such as Pikin Santi along the banks of the Tapanahonyrivier.',
        sr: 'Ndyuka pipel de naksama fu enslefs sma di ben ron wey fu Ingris en Olondesi plantasi nanga Sranan kosta na 17de en 18de ieuwen. Baka desio fu gerilya-oorlog, den ben seti wan frede-traktati nanga Olondesi koloniale otoreteti na 1760 — di fosi wan na Sranan. Na di jarren baka, Ndyuka famirie ben muvi go na ini liba nanga fesede libas en ben seti fowru leki Pikin Santi na bengsi fu Tapanahonyrivier.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1760 vestigden Ndyuka-gemeenschappen zich langs de grote rivieren van het Surinaamse binnenland. In de 19de eeuw verwierven de Ndyuka een dominante positie in de vrachtvaart naar het binnenland. De Binnenlandse Oorlog (1986–1992) trof de Ndyuka-gemeenschap zwaar; vele dorpsbewoners vluchtten naar Frans-Guyana. Pikin Santi doorstond ook de aanpassingen die volgden op de aanleg van de Afobaka-dam in 1964, die het waterpeildeel van het binnenland ingrijpend veranderde.',
        en: 'After the 1760 peace treaty, Ndyuka communities settled along the great rivers of the Surinamese interior. In the 19th century the Ndyuka gained a dominant position in freight transport to the interior. The Interior War (1986–1992) struck the Ndyuka community hard; many villagers fled to French Guiana. Pikin Santi also endured the disruptions that followed the construction of the Afobaka dam in 1964, which fundamentally altered water levels across the interior.',
        sr: 'Baka di frede-traktati fu 1760, Ndyuka kommetii ben seti libi nanga di groto libas fu Sranan binnenlant. Na 19de ieuwen, Ndyuka ben kisi wan dominante positie na freiverei go na binnenlant. Di Binnenlandse Oorlog (1986–1992) ben naki di Ndyuka kommetii ari tranga; furu fowru-sma ben ron wey go na Frans-Guyane. Pikin Santi ben abi fu fesi eke di trobi di kom baka di bouw fu Afobaka dam na 1964, di ben fenu-fenu tjanji di waterpeil nanga di heri binnenlant.',
      },
      leadership: {
        nl: 'Pikin Santi wordt bestuurd door een kabiten (kapitein), die rapporteert aan de granman van de Ndyuka. De kabiten beheert interne conflicten, vertegenwoordigt het dorp bij de granman en onderhoudt de betrekkingen met overheidsinstanties. De traditionele raad van ouderlingen speelt een aanvullende rol bij spirituele en juridische kwesties.',
        en: 'Pikin Santi is governed by a kabiten (captain) who reports to the Ndyuka granman. The kabiten manages internal disputes, represents the village to the granman, and maintains relations with government bodies. The traditional council of elders plays a supplementary role in spiritual and legal matters.',
        sr: 'Pikin Santi de bestuurd doro wan kabiten (kapiteini) di rapporteer na di Ndyuka granman. Di kabiten managi interne konflikten, representeer di fowru na di granman, en hori relasi nanga staatsbodis. Di traditionele raad fu owreman speli wan aanvullende rolo na spirituele en juridische zaken.',
      },
      challenges: {
        nl: 'De voornaamste uitdagingen voor Pikin Santi zijn de vervuiling van de rivier door kwikgebruik bij kleinschalige goudwinning, het gebrek aan structurele gezondheidszorg en onderwijs, en de emigratie van jongeren naar Paramaribo en Nederland. De juridische onzekerheid rond grondbezit — Surinamees recht erkent Marron-landrechten niet formeel — blijft een structureel probleem.',
        en: 'The main challenges for Pikin Santi are river contamination from mercury use in small-scale gold mining, the lack of structural healthcare and education, and the emigration of young people to Paramaribo and the Netherlands. The legal uncertainty surrounding land tenure — Surinamese law does not formally recognize Maroon land rights — remains a structural problem.',
        sr: 'Di voornaamste problemen fu Pikin Santi de pisi fu di liba doro kwik-gebruik na pikin gowtu-olo werki, di gebrek fu strukturele gezondheidsorg en skori, en di muvi fu jongomama go Paramaribo en Holland. Di juridische onzekerheid rondoro grondbezit — Sranan weti no erkenne Marron gronrechten formeel — de ete wan strukturele probleem.',
      },
    },
  },
  { id: 'poeketi', society: 'ndyuka', granman: false, lat: 3.77, lng: -54.68,
    names: { nl: 'Poeketi', en: 'Poeketi', sr: 'Poeketi' },
    subtitles: { nl: 'Ndyuka-dorp · Tapanahonyrivier', en: 'Ndyuka village · Tapanahonyrivier', sr: 'Ndyuka fowru · Tapanahonyrivier' },
    river: 'Tapanahonyrivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Poeketi is een Ndyuka-dorp in het Tapanahony-gebied, gelegen aan de Tapanahonyrivier in district Sipaliwini. Het maakt deel uit van het uitgestrekte nederzettingsnetwerk dat de Ndyuka langs hun riviergebieden hebben opgebouwd sedert de vredesverdragen van de 18de eeuw.',
        en: 'Poeketi is a Ndyuka village in the Tapanahony area, on the Tapanahonyrivier in Sipaliwini District. It forms part of the extensive settlement network the Ndyuka have maintained along their river territories since the 18th-century peace treaties.',
        sr: 'Poeketi na wan Ndyuka fowru na Tapanahony-gebiedo, na Tapanahonyrivier na Sipaliwini Distrikt. A de deypaart fu di groto nederzettingsnetwerk die Ndyuka ben bouw nanga dem libarivier-gebieden seti dem frede-traktati fu di 18de ieuwen.',
      },
      founding: {
        nl: 'De Ndyuka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van Engelse en Nederlandse kustplantages in de 17de en 18de eeuw. Na decennia van guerrillaoorlog sloten zij in 1760 een vredesverdrag met de Nederlandse koloniale overheid — het eerste van zijn soort in Suriname. In de jaren daarna trokken Ndyuka-families stroomopwaarts langs verschillende rivieren en stichtten dorpen als Poeketi langs de oevers van de Tapanahonyrivier.',
        en: 'The Ndyuka are descendants of enslaved people who escaped English and Dutch coastal plantations in the 17th and 18th centuries. After decades of guerrilla warfare they concluded a peace treaty with Dutch colonial authorities in 1760 — the first of its kind in Suriname. In the years that followed, Ndyuka families moved upriver along various waterways and founded villages such as Poeketi along the banks of the Tapanahonyrivier.',
        sr: 'Ndyuka pipel de naksama fu enslefs sma di ben ron wey fu Ingris en Olondesi plantasi nanga Sranan kosta na 17de en 18de ieuwen. Baka desio fu gerilya-oorlog, den ben seti wan frede-traktati nanga Olondesi koloniale otoreteti na 1760 — di fosi wan na Sranan. Na di jarren baka, Ndyuka famirie ben muvi go na ini liba nanga fesede libas en ben seti fowru leki Poeketi na bengsi fu Tapanahonyrivier.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1760 vestigden Ndyuka-gemeenschappen zich langs de grote rivieren van het Surinaamse binnenland. In de 19de eeuw verwierven de Ndyuka een dominante positie in de vrachtvaart naar het binnenland. De Binnenlandse Oorlog (1986–1992) trof de Ndyuka-gemeenschap zwaar; vele dorpsbewoners vluchtten naar Frans-Guyana. Poeketi doorstond ook de aanpassingen die volgden op de aanleg van de Afobaka-dam in 1964, die het waterpeildeel van het binnenland ingrijpend veranderde.',
        en: 'After the 1760 peace treaty, Ndyuka communities settled along the great rivers of the Surinamese interior. In the 19th century the Ndyuka gained a dominant position in freight transport to the interior. The Interior War (1986–1992) struck the Ndyuka community hard; many villagers fled to French Guiana. Poeketi also endured the disruptions that followed the construction of the Afobaka dam in 1964, which fundamentally altered water levels across the interior.',
        sr: 'Baka di frede-traktati fu 1760, Ndyuka kommetii ben seti libi nanga di groto libas fu Sranan binnenlant. Na 19de ieuwen, Ndyuka ben kisi wan dominante positie na freiverei go na binnenlant. Di Binnenlandse Oorlog (1986–1992) ben naki di Ndyuka kommetii ari tranga; furu fowru-sma ben ron wey go na Frans-Guyane. Poeketi ben abi fu fesi eke di trobi di kom baka di bouw fu Afobaka dam na 1964, di ben fenu-fenu tjanji di waterpeil nanga di heri binnenlant.',
      },
      leadership: {
        nl: 'Poeketi wordt bestuurd door een kabiten (kapitein), die rapporteert aan de granman van de Ndyuka. De kabiten beheert interne conflicten, vertegenwoordigt het dorp bij de granman en onderhoudt de betrekkingen met overheidsinstanties. De traditionele raad van ouderlingen speelt een aanvullende rol bij spirituele en juridische kwesties.',
        en: 'Poeketi is governed by a kabiten (captain) who reports to the Ndyuka granman. The kabiten manages internal disputes, represents the village to the granman, and maintains relations with government bodies. The traditional council of elders plays a supplementary role in spiritual and legal matters.',
        sr: 'Poeketi de bestuurd doro wan kabiten (kapiteini) di rapporteer na di Ndyuka granman. Di kabiten managi interne konflikten, representeer di fowru na di granman, en hori relasi nanga staatsbodis. Di traditionele raad fu owreman speli wan aanvullende rolo na spirituele en juridische zaken.',
      },
      challenges: {
        nl: 'De voornaamste uitdagingen voor Poeketi zijn de vervuiling van de rivier door kwikgebruik bij kleinschalige goudwinning, het gebrek aan structurele gezondheidszorg en onderwijs, en de emigratie van jongeren naar Paramaribo en Nederland. De juridische onzekerheid rond grondbezit — Surinamees recht erkent Marron-landrechten niet formeel — blijft een structureel probleem.',
        en: 'The main challenges for Poeketi are river contamination from mercury use in small-scale gold mining, the lack of structural healthcare and education, and the emigration of young people to Paramaribo and the Netherlands. The legal uncertainty surrounding land tenure — Surinamese law does not formally recognize Maroon land rights — remains a structural problem.',
        sr: 'Di voornaamste problemen fu Poeketi de pisi fu di liba doro kwik-gebruik na pikin gowtu-olo werki, di gebrek fu strukturele gezondheidsorg en skori, en di muvi fu jongomama go Paramaribo en Holland. Di juridische onzekerheid rondoro grondbezit — Sranan weti no erkenne Marron gronrechten formeel — de ete wan strukturele probleem.',
      },
    },
  },
  { id: 'poeloegoedoe', society: 'ndyuka', granman: false, lat: 3.755, lng: -54.695,
    names: { nl: 'Poeloegoedoe', en: 'Poeloegoedoe', sr: 'Poeloegoedoe' },
    subtitles: { nl: 'Ndyuka-dorp · Tapanahonyrivier', en: 'Ndyuka village · Tapanahonyrivier', sr: 'Ndyuka fowru · Tapanahonyrivier' },
    river: 'Tapanahonyrivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Poeloegoedoe is een Ndyuka-dorp in het Tapanahony-gebied, gelegen aan de Tapanahonyrivier in district Sipaliwini. Het maakt deel uit van het uitgestrekte nederzettingsnetwerk dat de Ndyuka langs hun riviergebieden hebben opgebouwd sedert de vredesverdragen van de 18de eeuw.',
        en: 'Poeloegoedoe is a Ndyuka village in the Tapanahony area, on the Tapanahonyrivier in Sipaliwini District. It forms part of the extensive settlement network the Ndyuka have maintained along their river territories since the 18th-century peace treaties.',
        sr: 'Poeloegoedoe na wan Ndyuka fowru na Tapanahony-gebiedo, na Tapanahonyrivier na Sipaliwini Distrikt. A de deypaart fu di groto nederzettingsnetwerk die Ndyuka ben bouw nanga dem libarivier-gebieden seti dem frede-traktati fu di 18de ieuwen.',
      },
      founding: {
        nl: 'De Ndyuka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van Engelse en Nederlandse kustplantages in de 17de en 18de eeuw. Na decennia van guerrillaoorlog sloten zij in 1760 een vredesverdrag met de Nederlandse koloniale overheid — het eerste van zijn soort in Suriname. In de jaren daarna trokken Ndyuka-families stroomopwaarts langs verschillende rivieren en stichtten dorpen als Poeloegoedoe langs de oevers van de Tapanahonyrivier.',
        en: 'The Ndyuka are descendants of enslaved people who escaped English and Dutch coastal plantations in the 17th and 18th centuries. After decades of guerrilla warfare they concluded a peace treaty with Dutch colonial authorities in 1760 — the first of its kind in Suriname. In the years that followed, Ndyuka families moved upriver along various waterways and founded villages such as Poeloegoedoe along the banks of the Tapanahonyrivier.',
        sr: 'Ndyuka pipel de naksama fu enslefs sma di ben ron wey fu Ingris en Olondesi plantasi nanga Sranan kosta na 17de en 18de ieuwen. Baka desio fu gerilya-oorlog, den ben seti wan frede-traktati nanga Olondesi koloniale otoreteti na 1760 — di fosi wan na Sranan. Na di jarren baka, Ndyuka famirie ben muvi go na ini liba nanga fesede libas en ben seti fowru leki Poeloegoedoe na bengsi fu Tapanahonyrivier.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1760 vestigden Ndyuka-gemeenschappen zich langs de grote rivieren van het Surinaamse binnenland. In de 19de eeuw verwierven de Ndyuka een dominante positie in de vrachtvaart naar het binnenland. De Binnenlandse Oorlog (1986–1992) trof de Ndyuka-gemeenschap zwaar; vele dorpsbewoners vluchtten naar Frans-Guyana. Poeloegoedoe doorstond ook de aanpassingen die volgden op de aanleg van de Afobaka-dam in 1964, die het waterpeildeel van het binnenland ingrijpend veranderde.',
        en: 'After the 1760 peace treaty, Ndyuka communities settled along the great rivers of the Surinamese interior. In the 19th century the Ndyuka gained a dominant position in freight transport to the interior. The Interior War (1986–1992) struck the Ndyuka community hard; many villagers fled to French Guiana. Poeloegoedoe also endured the disruptions that followed the construction of the Afobaka dam in 1964, which fundamentally altered water levels across the interior.',
        sr: 'Baka di frede-traktati fu 1760, Ndyuka kommetii ben seti libi nanga di groto libas fu Sranan binnenlant. Na 19de ieuwen, Ndyuka ben kisi wan dominante positie na freiverei go na binnenlant. Di Binnenlandse Oorlog (1986–1992) ben naki di Ndyuka kommetii ari tranga; furu fowru-sma ben ron wey go na Frans-Guyane. Poeloegoedoe ben abi fu fesi eke di trobi di kom baka di bouw fu Afobaka dam na 1964, di ben fenu-fenu tjanji di waterpeil nanga di heri binnenlant.',
      },
      leadership: {
        nl: 'Poeloegoedoe wordt bestuurd door een kabiten (kapitein), die rapporteert aan de granman van de Ndyuka. De kabiten beheert interne conflicten, vertegenwoordigt het dorp bij de granman en onderhoudt de betrekkingen met overheidsinstanties. De traditionele raad van ouderlingen speelt een aanvullende rol bij spirituele en juridische kwesties.',
        en: 'Poeloegoedoe is governed by a kabiten (captain) who reports to the Ndyuka granman. The kabiten manages internal disputes, represents the village to the granman, and maintains relations with government bodies. The traditional council of elders plays a supplementary role in spiritual and legal matters.',
        sr: 'Poeloegoedoe de bestuurd doro wan kabiten (kapiteini) di rapporteer na di Ndyuka granman. Di kabiten managi interne konflikten, representeer di fowru na di granman, en hori relasi nanga staatsbodis. Di traditionele raad fu owreman speli wan aanvullende rolo na spirituele en juridische zaken.',
      },
      challenges: {
        nl: 'De voornaamste uitdagingen voor Poeloegoedoe zijn de vervuiling van de rivier door kwikgebruik bij kleinschalige goudwinning, het gebrek aan structurele gezondheidszorg en onderwijs, en de emigratie van jongeren naar Paramaribo en Nederland. De juridische onzekerheid rond grondbezit — Surinamees recht erkent Marron-landrechten niet formeel — blijft een structureel probleem.',
        en: 'The main challenges for Poeloegoedoe are river contamination from mercury use in small-scale gold mining, the lack of structural healthcare and education, and the emigration of young people to Paramaribo and the Netherlands. The legal uncertainty surrounding land tenure — Surinamese law does not formally recognize Maroon land rights — remains a structural problem.',
        sr: 'Di voornaamste problemen fu Poeloegoedoe de pisi fu di liba doro kwik-gebruik na pikin gowtu-olo werki, di gebrek fu strukturele gezondheidsorg en skori, en di muvi fu jongomama go Paramaribo en Holland. Di juridische onzekerheid rondoro grondbezit — Sranan weti no erkenne Marron gronrechten formeel — de ete wan strukturele probleem.',
      },
    },
  },

  // ══ SAAMAKA (additional) ═════════════════════════════════════════════
  { id: 'abenaston', society: 'saamaka', granman: false, lat: 3.82, lng: -55.85,
    names: { nl: 'Abenaston', en: 'Abenaston', sr: 'Abenaston' },
    subtitles: { nl: 'Saamaka-dorp · Surinamerivier', en: 'Saamaka village · Surinamerivier', sr: 'Saamaka fowru · Surinamerivier' },
    river: 'Surinamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Abenaston is een Saamaka-dorp aan de bovenloop van de Surinamerivier in het district Sipaliwini. De Saamaka zijn de grootste Marron-samenleving van Suriname, met een rijke traditie in houtsnijkunst, textiel en orale geschiedenis die teruggaat tot de vroege 18de eeuw.',
        en: 'Abenaston is a Saamaka village on the upper Suriname River in Sipaliwini District. The Saamaka are the largest Maroon society in Suriname, with a rich tradition in woodcarving, textile, and oral history stretching back to the early 18th century.',
        sr: 'Abenaston na wan Saamaka fowru na di boven-loop fu Suriname Liba na Sipaliwini Distrikt. Saamaka na di groto Marron-samenleving na Sranan, nanga wan rik tradisie na houtsnijerij, textil, en mondeling historii die de go baka te na vroeg 18de ieuwen.',
      },
      founding: {
        nl: 'De Saamaka zijn nakomelingen van tot slaaf gemaakten die in de vroege 18de eeuw ontsnapten van Nederlandse suiker- en houtplantages langs de beneden-Surinamerivier. Na jarenlange guerrillaoorlog in het oerwoud sloten zij in 1762 een vredesverdrag met de VOC. Daarna trokken zij stroomopwaarts en vestigden zich in de bovenloop van de Surinamerivier, waar dorpen als Abenaston werden gesticht.',
        en: 'The Saamaka are descendants of enslaved people who escaped Dutch sugar and timber plantations along the lower Suriname River in the early 18th century. After years of guerrilla warfare in the rainforest, they concluded a peace treaty with the VOC in 1762. They then moved upstream and settled in the upper Suriname River, where villages such as Abenaston were established.',
        sr: 'Saamaka de naksama fu enslefs sma di ben ron wey fu Olondesi suiker en hout plantasi nanga beneden-Suriname Liba na vroeg 18de ieuwen. Baka jarren fu gerilya-oorlog na busikopu, den ben seti wan frede-traktati nanga di VOC na 1762. Baka den ben muvi go na ini liba en ben seti libi na boven-loop fu Suriname Liba, pe fowru leki Abenaston ben seti.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1762 leefden de Saamaka in relatieve autonomie langs de bovenloop van de Surinamerivier. De aanleg van de Afobaka-dam in 1964 overspoelde duizenden hectare Saamaka-land en dwong meer dan 6.000 mensen te herhuisvesten. Dit trauma — bekend als de Afobaka-verplaatsing — heeft diepe sporen nagelaten in de Saamaka-gemeenschap. Abenaston behoort tot de dorpen die na deze verplaatsing werden gesticht of heropgebouwd.',
        en: 'After the 1762 peace treaty the Saamaka lived in relative autonomy along the upper Suriname River. The construction of the Afobaka dam in 1964 flooded thousands of hectares of Saamaka land and forced more than 6,000 people to be resettled. This trauma — known as the Afobaka displacement — left deep marks on the Saamaka community. Abenaston is among the villages founded or rebuilt following this displacement.',
        sr: 'Baka di traktati fu 1762, Saamaka ben libi nanga relatieve awtonemsi nanga boven-loop fu Suriname Liba. Di bouw fu Afobaka dam na 1964 ben drowned dusenden hektaar Saamaka grondoe en ben fors moro dan 6.000 sma fu muvi libi. Dis trauma — kenbaar als di Afobaka-verplaatsing — ben libi fesi-fesi teken na Saamaka kommetii. Abenaston de ondro di fowru di ben seti oso nu gerebouw baka di verplaatsing.',
      },
      leadership: {
        nl: 'Abenaston staat onder leiding van een kabiten die rapporteert aan de Saamaka-granman, zetelend in Asidonhopo. De granman vertegenwoordigt de Saamaka in politieke onderhandelingen met de Surinaamse regering en is de hoogste autoriteit in traditionele rechtszaken. Dorpsbeslissingen worden genomen in overleg met de matrilineaire clan-ouderlingen.',
        en: 'Abenaston is led by a kabiten who reports to the Saamaka granman, based in Asidonhopo. The granman represents the Saamaka in political negotiations with the Surinamese government and is the highest authority in customary legal matters. Village decisions are taken in consultation with matrilineal clan elders.',
        sr: 'Abenaston de lei doro wan kabiten di rapporteer na di Saamaka granman, di de na Asidonhopo. Di granman representeer di Saamaka na politikale onderhandelingen nanga Sranan regering en de di ogri otoreteti na traditionele juridische zaken. Fowru-beslissingen de neem nanga raadplegeng fu matrilineaire clan-owreman.',
      },
      challenges: {
        nl: 'De Saamaka-gemeenschap kampt met ernstige milieuproblemen als gevolg van intensieve goudwinning langs de Surinamerivier, waarbij kwik het rivierecosysteem vergiftigt. Grondrechten zijn niet wettelijk gewaarborgd: het Inter-Amerikaans Hof voor de Rechten van de Mens stelde Suriname in 2007 in gebreke, maar de uitspraak is nooit volledig uitgevoerd. Abenaston worstelt ook met de afvloeiing van jonge mensen naar stedelijke centra.',
        en: 'The Saamaka community faces severe environmental problems from intensive gold mining along the Suriname River, with mercury poisoning the river ecosystem. Land rights are not legally guaranteed: the Inter-American Court of Human Rights ruled against Suriname in 2007, but the judgment has never been fully implemented. Abenaston also struggles with the outflow of young people to urban centers.',
        sr: 'Saamaka kommetii fesi sware omgevingsproblemen fu intens gowtu-olo werki nanga Suriname Liba, pe kwik de vergifti di liba-ecosisteem. Gronrechten no de juridisch gewaarborgd: di Inter-Amerikaans Hof fu Mensenrechten ben beslis kopi Sranan na 2007, ma di uitspraak no ben volledig uitgevoerd. Abenaston eke feti nanga di afvloeiing fu jongomama go na stedelijke sentra.',
      },
    },
  },
  { id: 'goddo', society: 'saamaka', granman: false, lat: 3.79, lng: -55.9,
    names: { nl: 'Goddo', en: 'Goddo', sr: 'Goddo' },
    subtitles: { nl: 'Saamaka-dorp · Surinamerivier', en: 'Saamaka village · Surinamerivier', sr: 'Saamaka fowru · Surinamerivier' },
    river: 'Surinamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Goddo is een Saamaka-dorp aan de bovenloop van de Surinamerivier in het district Sipaliwini. De Saamaka zijn de grootste Marron-samenleving van Suriname, met een rijke traditie in houtsnijkunst, textiel en orale geschiedenis die teruggaat tot de vroege 18de eeuw.',
        en: 'Goddo is a Saamaka village on the upper Suriname River in Sipaliwini District. The Saamaka are the largest Maroon society in Suriname, with a rich tradition in woodcarving, textile, and oral history stretching back to the early 18th century.',
        sr: 'Goddo na wan Saamaka fowru na di boven-loop fu Suriname Liba na Sipaliwini Distrikt. Saamaka na di groto Marron-samenleving na Sranan, nanga wan rik tradisie na houtsnijerij, textil, en mondeling historii die de go baka te na vroeg 18de ieuwen.',
      },
      founding: {
        nl: 'De Saamaka zijn nakomelingen van tot slaaf gemaakten die in de vroege 18de eeuw ontsnapten van Nederlandse suiker- en houtplantages langs de beneden-Surinamerivier. Na jarenlange guerrillaoorlog in het oerwoud sloten zij in 1762 een vredesverdrag met de VOC. Daarna trokken zij stroomopwaarts en vestigden zich in de bovenloop van de Surinamerivier, waar dorpen als Goddo werden gesticht.',
        en: 'The Saamaka are descendants of enslaved people who escaped Dutch sugar and timber plantations along the lower Suriname River in the early 18th century. After years of guerrilla warfare in the rainforest, they concluded a peace treaty with the VOC in 1762. They then moved upstream and settled in the upper Suriname River, where villages such as Goddo were established.',
        sr: 'Saamaka de naksama fu enslefs sma di ben ron wey fu Olondesi suiker en hout plantasi nanga beneden-Suriname Liba na vroeg 18de ieuwen. Baka jarren fu gerilya-oorlog na busikopu, den ben seti wan frede-traktati nanga di VOC na 1762. Baka den ben muvi go na ini liba en ben seti libi na boven-loop fu Suriname Liba, pe fowru leki Goddo ben seti.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1762 leefden de Saamaka in relatieve autonomie langs de bovenloop van de Surinamerivier. De aanleg van de Afobaka-dam in 1964 overspoelde duizenden hectare Saamaka-land en dwong meer dan 6.000 mensen te herhuisvesten. Dit trauma — bekend als de Afobaka-verplaatsing — heeft diepe sporen nagelaten in de Saamaka-gemeenschap. Goddo behoort tot de dorpen die na deze verplaatsing werden gesticht of heropgebouwd.',
        en: 'After the 1762 peace treaty the Saamaka lived in relative autonomy along the upper Suriname River. The construction of the Afobaka dam in 1964 flooded thousands of hectares of Saamaka land and forced more than 6,000 people to be resettled. This trauma — known as the Afobaka displacement — left deep marks on the Saamaka community. Goddo is among the villages founded or rebuilt following this displacement.',
        sr: 'Baka di traktati fu 1762, Saamaka ben libi nanga relatieve awtonemsi nanga boven-loop fu Suriname Liba. Di bouw fu Afobaka dam na 1964 ben drowned dusenden hektaar Saamaka grondoe en ben fors moro dan 6.000 sma fu muvi libi. Dis trauma — kenbaar als di Afobaka-verplaatsing — ben libi fesi-fesi teken na Saamaka kommetii. Goddo de ondro di fowru di ben seti oso nu gerebouw baka di verplaatsing.',
      },
      leadership: {
        nl: 'Goddo staat onder leiding van een kabiten die rapporteert aan de Saamaka-granman, zetelend in Asidonhopo. De granman vertegenwoordigt de Saamaka in politieke onderhandelingen met de Surinaamse regering en is de hoogste autoriteit in traditionele rechtszaken. Dorpsbeslissingen worden genomen in overleg met de matrilineaire clan-ouderlingen.',
        en: 'Goddo is led by a kabiten who reports to the Saamaka granman, based in Asidonhopo. The granman represents the Saamaka in political negotiations with the Surinamese government and is the highest authority in customary legal matters. Village decisions are taken in consultation with matrilineal clan elders.',
        sr: 'Goddo de lei doro wan kabiten di rapporteer na di Saamaka granman, di de na Asidonhopo. Di granman representeer di Saamaka na politikale onderhandelingen nanga Sranan regering en de di ogri otoreteti na traditionele juridische zaken. Fowru-beslissingen de neem nanga raadplegeng fu matrilineaire clan-owreman.',
      },
      challenges: {
        nl: 'De Saamaka-gemeenschap kampt met ernstige milieuproblemen als gevolg van intensieve goudwinning langs de Surinamerivier, waarbij kwik het rivierecosysteem vergiftigt. Grondrechten zijn niet wettelijk gewaarborgd: het Inter-Amerikaans Hof voor de Rechten van de Mens stelde Suriname in 2007 in gebreke, maar de uitspraak is nooit volledig uitgevoerd. Goddo worstelt ook met de afvloeiing van jonge mensen naar stedelijke centra.',
        en: 'The Saamaka community faces severe environmental problems from intensive gold mining along the Suriname River, with mercury poisoning the river ecosystem. Land rights are not legally guaranteed: the Inter-American Court of Human Rights ruled against Suriname in 2007, but the judgment has never been fully implemented. Goddo also struggles with the outflow of young people to urban centers.',
        sr: 'Saamaka kommetii fesi sware omgevingsproblemen fu intens gowtu-olo werki nanga Suriname Liba, pe kwik de vergifti di liba-ecosisteem. Gronrechten no de juridisch gewaarborgd: di Inter-Amerikaans Hof fu Mensenrechten ben beslis kopi Sranan na 2007, ma di uitspraak no ben volledig uitgevoerd. Goddo eke feti nanga di afvloeiing fu jongomama go na stedelijke sentra.',
      },
    },
  },
  { id: 'jaw_jaw', society: 'saamaka', granman: false, lat: 3.84, lng: -55.82,
    names: { nl: 'Jaw Jaw', en: 'Jaw Jaw', sr: 'Jaw Jaw' },
    subtitles: { nl: 'Saamaka-dorp · Surinamerivier', en: 'Saamaka village · Surinamerivier', sr: 'Saamaka fowru · Surinamerivier' },
    river: 'Surinamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Jaw Jaw is een Saamaka-dorp aan de bovenloop van de Surinamerivier in het district Sipaliwini. De Saamaka zijn de grootste Marron-samenleving van Suriname, met een rijke traditie in houtsnijkunst, textiel en orale geschiedenis die teruggaat tot de vroege 18de eeuw.',
        en: 'Jaw Jaw is a Saamaka village on the upper Suriname River in Sipaliwini District. The Saamaka are the largest Maroon society in Suriname, with a rich tradition in woodcarving, textile, and oral history stretching back to the early 18th century.',
        sr: 'Jaw Jaw na wan Saamaka fowru na di boven-loop fu Suriname Liba na Sipaliwini Distrikt. Saamaka na di groto Marron-samenleving na Sranan, nanga wan rik tradisie na houtsnijerij, textil, en mondeling historii die de go baka te na vroeg 18de ieuwen.',
      },
      founding: {
        nl: 'De Saamaka zijn nakomelingen van tot slaaf gemaakten die in de vroege 18de eeuw ontsnapten van Nederlandse suiker- en houtplantages langs de beneden-Surinamerivier. Na jarenlange guerrillaoorlog in het oerwoud sloten zij in 1762 een vredesverdrag met de VOC. Daarna trokken zij stroomopwaarts en vestigden zich in de bovenloop van de Surinamerivier, waar dorpen als Jaw Jaw werden gesticht.',
        en: 'The Saamaka are descendants of enslaved people who escaped Dutch sugar and timber plantations along the lower Suriname River in the early 18th century. After years of guerrilla warfare in the rainforest, they concluded a peace treaty with the VOC in 1762. They then moved upstream and settled in the upper Suriname River, where villages such as Jaw Jaw were established.',
        sr: 'Saamaka de naksama fu enslefs sma di ben ron wey fu Olondesi suiker en hout plantasi nanga beneden-Suriname Liba na vroeg 18de ieuwen. Baka jarren fu gerilya-oorlog na busikopu, den ben seti wan frede-traktati nanga di VOC na 1762. Baka den ben muvi go na ini liba en ben seti libi na boven-loop fu Suriname Liba, pe fowru leki Jaw Jaw ben seti.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1762 leefden de Saamaka in relatieve autonomie langs de bovenloop van de Surinamerivier. De aanleg van de Afobaka-dam in 1964 overspoelde duizenden hectare Saamaka-land en dwong meer dan 6.000 mensen te herhuisvesten. Dit trauma — bekend als de Afobaka-verplaatsing — heeft diepe sporen nagelaten in de Saamaka-gemeenschap. Jaw Jaw behoort tot de dorpen die na deze verplaatsing werden gesticht of heropgebouwd.',
        en: 'After the 1762 peace treaty the Saamaka lived in relative autonomy along the upper Suriname River. The construction of the Afobaka dam in 1964 flooded thousands of hectares of Saamaka land and forced more than 6,000 people to be resettled. This trauma — known as the Afobaka displacement — left deep marks on the Saamaka community. Jaw Jaw is among the villages founded or rebuilt following this displacement.',
        sr: 'Baka di traktati fu 1762, Saamaka ben libi nanga relatieve awtonemsi nanga boven-loop fu Suriname Liba. Di bouw fu Afobaka dam na 1964 ben drowned dusenden hektaar Saamaka grondoe en ben fors moro dan 6.000 sma fu muvi libi. Dis trauma — kenbaar als di Afobaka-verplaatsing — ben libi fesi-fesi teken na Saamaka kommetii. Jaw Jaw de ondro di fowru di ben seti oso nu gerebouw baka di verplaatsing.',
      },
      leadership: {
        nl: 'Jaw Jaw staat onder leiding van een kabiten die rapporteert aan de Saamaka-granman, zetelend in Asidonhopo. De granman vertegenwoordigt de Saamaka in politieke onderhandelingen met de Surinaamse regering en is de hoogste autoriteit in traditionele rechtszaken. Dorpsbeslissingen worden genomen in overleg met de matrilineaire clan-ouderlingen.',
        en: 'Jaw Jaw is led by a kabiten who reports to the Saamaka granman, based in Asidonhopo. The granman represents the Saamaka in political negotiations with the Surinamese government and is the highest authority in customary legal matters. Village decisions are taken in consultation with matrilineal clan elders.',
        sr: 'Jaw Jaw de lei doro wan kabiten di rapporteer na di Saamaka granman, di de na Asidonhopo. Di granman representeer di Saamaka na politikale onderhandelingen nanga Sranan regering en de di ogri otoreteti na traditionele juridische zaken. Fowru-beslissingen de neem nanga raadplegeng fu matrilineaire clan-owreman.',
      },
      challenges: {
        nl: 'De Saamaka-gemeenschap kampt met ernstige milieuproblemen als gevolg van intensieve goudwinning langs de Surinamerivier, waarbij kwik het rivierecosysteem vergiftigt. Grondrechten zijn niet wettelijk gewaarborgd: het Inter-Amerikaans Hof voor de Rechten van de Mens stelde Suriname in 2007 in gebreke, maar de uitspraak is nooit volledig uitgevoerd. Jaw Jaw worstelt ook met de afvloeiing van jonge mensen naar stedelijke centra.',
        en: 'The Saamaka community faces severe environmental problems from intensive gold mining along the Suriname River, with mercury poisoning the river ecosystem. Land rights are not legally guaranteed: the Inter-American Court of Human Rights ruled against Suriname in 2007, but the judgment has never been fully implemented. Jaw Jaw also struggles with the outflow of young people to urban centers.',
        sr: 'Saamaka kommetii fesi sware omgevingsproblemen fu intens gowtu-olo werki nanga Suriname Liba, pe kwik de vergifti di liba-ecosisteem. Gronrechten no de juridisch gewaarborgd: di Inter-Amerikaans Hof fu Mensenrechten ben beslis kopi Sranan na 2007, ma di uitspraak no ben volledig uitgevoerd. Jaw Jaw eke feti nanga di afvloeiing fu jongomama go na stedelijke sentra.',
      },
    },
  },
  { id: 'laduani', society: 'saamaka', granman: false, lat: 3.77, lng: -55.93,
    names: { nl: 'Laduani', en: 'Laduani', sr: 'Laduani' },
    subtitles: { nl: 'Saamaka-dorp · Surinamerivier', en: 'Saamaka village · Surinamerivier', sr: 'Saamaka fowru · Surinamerivier' },
    river: 'Surinamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Laduani is een Saamaka-dorp aan de bovenloop van de Surinamerivier in het district Sipaliwini. De Saamaka zijn de grootste Marron-samenleving van Suriname, met een rijke traditie in houtsnijkunst, textiel en orale geschiedenis die teruggaat tot de vroege 18de eeuw.',
        en: 'Laduani is a Saamaka village on the upper Suriname River in Sipaliwini District. The Saamaka are the largest Maroon society in Suriname, with a rich tradition in woodcarving, textile, and oral history stretching back to the early 18th century.',
        sr: 'Laduani na wan Saamaka fowru na di boven-loop fu Suriname Liba na Sipaliwini Distrikt. Saamaka na di groto Marron-samenleving na Sranan, nanga wan rik tradisie na houtsnijerij, textil, en mondeling historii die de go baka te na vroeg 18de ieuwen.',
      },
      founding: {
        nl: 'De Saamaka zijn nakomelingen van tot slaaf gemaakten die in de vroege 18de eeuw ontsnapten van Nederlandse suiker- en houtplantages langs de beneden-Surinamerivier. Na jarenlange guerrillaoorlog in het oerwoud sloten zij in 1762 een vredesverdrag met de VOC. Daarna trokken zij stroomopwaarts en vestigden zich in de bovenloop van de Surinamerivier, waar dorpen als Laduani werden gesticht.',
        en: 'The Saamaka are descendants of enslaved people who escaped Dutch sugar and timber plantations along the lower Suriname River in the early 18th century. After years of guerrilla warfare in the rainforest, they concluded a peace treaty with the VOC in 1762. They then moved upstream and settled in the upper Suriname River, where villages such as Laduani were established.',
        sr: 'Saamaka de naksama fu enslefs sma di ben ron wey fu Olondesi suiker en hout plantasi nanga beneden-Suriname Liba na vroeg 18de ieuwen. Baka jarren fu gerilya-oorlog na busikopu, den ben seti wan frede-traktati nanga di VOC na 1762. Baka den ben muvi go na ini liba en ben seti libi na boven-loop fu Suriname Liba, pe fowru leki Laduani ben seti.',
      },
      history: {
        nl: 'Na het vredesverdrag van 1762 leefden de Saamaka in relatieve autonomie langs de bovenloop van de Surinamerivier. De aanleg van de Afobaka-dam in 1964 overspoelde duizenden hectare Saamaka-land en dwong meer dan 6.000 mensen te herhuisvesten. Dit trauma — bekend als de Afobaka-verplaatsing — heeft diepe sporen nagelaten in de Saamaka-gemeenschap. Laduani behoort tot de dorpen die na deze verplaatsing werden gesticht of heropgebouwd.',
        en: 'After the 1762 peace treaty the Saamaka lived in relative autonomy along the upper Suriname River. The construction of the Afobaka dam in 1964 flooded thousands of hectares of Saamaka land and forced more than 6,000 people to be resettled. This trauma — known as the Afobaka displacement — left deep marks on the Saamaka community. Laduani is among the villages founded or rebuilt following this displacement.',
        sr: 'Baka di traktati fu 1762, Saamaka ben libi nanga relatieve awtonemsi nanga boven-loop fu Suriname Liba. Di bouw fu Afobaka dam na 1964 ben drowned dusenden hektaar Saamaka grondoe en ben fors moro dan 6.000 sma fu muvi libi. Dis trauma — kenbaar als di Afobaka-verplaatsing — ben libi fesi-fesi teken na Saamaka kommetii. Laduani de ondro di fowru di ben seti oso nu gerebouw baka di verplaatsing.',
      },
      leadership: {
        nl: 'Laduani staat onder leiding van een kabiten die rapporteert aan de Saamaka-granman, zetelend in Asidonhopo. De granman vertegenwoordigt de Saamaka in politieke onderhandelingen met de Surinaamse regering en is de hoogste autoriteit in traditionele rechtszaken. Dorpsbeslissingen worden genomen in overleg met de matrilineaire clan-ouderlingen.',
        en: 'Laduani is led by a kabiten who reports to the Saamaka granman, based in Asidonhopo. The granman represents the Saamaka in political negotiations with the Surinamese government and is the highest authority in customary legal matters. Village decisions are taken in consultation with matrilineal clan elders.',
        sr: 'Laduani de lei doro wan kabiten di rapporteer na di Saamaka granman, di de na Asidonhopo. Di granman representeer di Saamaka na politikale onderhandelingen nanga Sranan regering en de di ogri otoreteti na traditionele juridische zaken. Fowru-beslissingen de neem nanga raadplegeng fu matrilineaire clan-owreman.',
      },
      challenges: {
        nl: 'De Saamaka-gemeenschap kampt met ernstige milieuproblemen als gevolg van intensieve goudwinning langs de Surinamerivier, waarbij kwik het rivierecosysteem vergiftigt. Grondrechten zijn niet wettelijk gewaarborgd: het Inter-Amerikaans Hof voor de Rechten van de Mens stelde Suriname in 2007 in gebreke, maar de uitspraak is nooit volledig uitgevoerd. Laduani worstelt ook met de afvloeiing van jonge mensen naar stedelijke centra.',
        en: 'The Saamaka community faces severe environmental problems from intensive gold mining along the Suriname River, with mercury poisoning the river ecosystem. Land rights are not legally guaranteed: the Inter-American Court of Human Rights ruled against Suriname in 2007, but the judgment has never been fully implemented. Laduani also struggles with the outflow of young people to urban centers.',
        sr: 'Saamaka kommetii fesi sware omgevingsproblemen fu intens gowtu-olo werki nanga Suriname Liba, pe kwik de vergifti di liba-ecosisteem. Gronrechten no de juridisch gewaarborgd: di Inter-Amerikaans Hof fu Mensenrechten ben beslis kopi Sranan na 2007, ma di uitspraak no ben volledig uitgevoerd. Laduani eke feti nanga di afvloeiing fu jongomama go na stedelijke sentra.',
      },
    },
  },

  // ══ MATAWAI ═══════════════════════════════════════════════════════════
  { id: 'boslanti', society: 'matawai', granman: false, lat: 4.05, lng: -56.1,
    names: { nl: 'Boslanti', en: 'Boslanti', sr: 'Boslanti' },
    subtitles: { nl: 'Matawai-dorp · Saramaccarivier', en: 'Matawai village · Saramaccarivier', sr: 'Matawai fowru · Saramaccarivier' },
    river: 'Saramaccarivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Boslanti is een Matawai-dorp aan de bovenloop van de Saramaccarivier in Sipaliwini. De Matawai vormen een relatief kleine Marron-samenleving — naar schatting 3.000 tot 5.000 mensen — die zich in de 18de eeuw afsplitste van de Saamaka en sindsdien een eigen identiteit en territoir heeft gehandhaafd langs de Boven-Saramacca.',
        en: 'Boslanti is a Matawai village on the upper Saramacca River in Sipaliwini. The Matawai form a relatively small Maroon society — estimated at 3,000 to 5,000 people — who split from the Saamaka in the 18th century and have since maintained their own identity and territory along the Upper Saramacca.',
        sr: 'Boslanti na wan Matawai fowru na boven-loop fu Saramacca Liba na Sipaliwini. Matawai de wan relatief kleini Marron-samenleving — geschat na 3.000 te 5.000 sma — die ben spliti fu Saamaka na 18de ieuwen en seti dem eigi identiteit en territorio nanga Boven-Saramacca.',
      },
      founding: {
        nl: 'De Matawai zijn nakomelingen van Afrikanen die ontsnapten van Nederlandse plantages langs de Surinaamse kust in de vroege 18de eeuw. Zij maakten aanvankelijk deel uit van de bredere Saamaka-groepering, maar splisten zich af — vermoedelijk rond de 1750s — en trokken richting de Boven-Saramaccarivier. De Matawai sloten in 1762 samen met de Saamaka een vredesverdrag met de koloniale overheid. Boslanti is een van de traditionele Matawai-nederzettingen die daarna werden gevestigd.',
        en: 'The Matawai are descendants of Africans who escaped Dutch plantations on the Surinamese coast in the early 18th century. They were initially part of the broader Saamaka grouping but split off — probably around the 1750s — and moved toward the Upper Saramacca River. The Matawai concluded a peace treaty with colonial authorities jointly with the Saamaka in 1762. Boslanti is one of the traditional Matawai settlements established thereafter.',
        sr: 'Matawai de naksama fu Afrikanen di ben ron wey fu Olondesi plantasi na Sranan kosta na vroeg 18de ieuwen. Den ben na fosi deypaart fu di bredere Saamaka groepering, ma ben spliti — vermoedelijk rondoro 1750s — en ben muvi go na Boven-Saramacca Liba. Matawai ben seti wan frede-traktati nanga koloniale otoreteti samen nanga Saamaka na 1762. Boslanti na wan fu di traditionele Matawai nederzettingen di ben seti baka.',
      },
      history: {
        nl: 'De Matawai hebben gedurende de koloniale en postkoloniale periode een zekere mate van isolatie en zelfbestuur weten te handhaven. De Binnenlandse Oorlog (1986–1992) raakte het Matawai-gebied in mindere mate dan andere Marron-regio\'s, maar de economische gevolgen waren alsnog voelbaar. Het Matawai-grondgebied omvat delen van de Boven-Saramaccarivier en grenst aan dat van de Saamaka en de Kwinti. Boslanti maakt deel uit van dit traditionele grondgebied.',
        en: 'The Matawai maintained a degree of isolation and self-governance through the colonial and post-colonial period. The Interior War (1986–1992) affected the Matawai area less directly than other Maroon regions, though the economic consequences were still felt. Matawai territory covers stretches of the Upper Saramacca River and borders that of the Saamaka and the Kwinti. Boslanti forms part of this traditional territory.',
        sr: 'Matawai ben hori wan mate fu isolasi en selfbestuur door di koloniale en postkoloniale periode. Di Binnenlandse Oorlog (1986–1992) ben naki di Matawai gebiedo minder direkt dan andere Marron regio\'s, alhoewel di ekonomikale gevolgen ben eke firi. Matawai territorio de na stukken fu Boven-Saramacca Liba en de grenst nanga teritorio fu Saamaka en Kwinti. Boslanti de deypaart fu dis traditionele territorio.',
      },
      leadership: {
        nl: 'Boslanti valt onder de bevoegdheid van een kabiten die verantwoording aflegt aan de granman van de Matawai, zetelend in Poesoegroenoe. De granman behartigt Matawai-belangen in betrekkingen met de Surinaamse overheid. Besluitvorming binnen de gemeenschap vindt plaats via overleg tussen de kabiten en de matrilineaire clanleiders.',
        en: 'Boslanti falls under the authority of a kabiten who is accountable to the Matawai granman, based in Poesoegroenoe. The granman advocates Matawai interests in dealings with the Surinamese government. Community decision-making takes place through consultation between the kabiten and matrilineal clan leaders.',
        sr: 'Boslanti fali ondro di otoreteti fu wan kabiten di de verantwoordelijk na di Matawai granman, di de na Poesoegroenoe. Di granman behart Matawai belangen na handelen nanga Sranan regering. Gemeenschap-beslissingen de neem doro raadplegeng tussen di kabiten en matrilineaire clan-leidersma.',
      },
      challenges: {
        nl: 'De Matawai-gemeenschap kampt met demografische druk door de kleine omvang van de groep, beperkte staatsvoorzieningen in het afgelegen binnenland, en de onzekere juridische status van hun grondgebied. Jongeren trekken weg naar Paramaribo, wat de traditionele kennisoverdracht bemoeilijkt. Goudmijnbouw in aangrenzende gebieden vormt een toenemende dreiging voor de rivierkwaliteit en het leefgebied van Boslanti.',
        en: 'The Matawai community faces demographic pressure from the small size of the group, limited state services in the remote interior, and the uncertain legal status of their territory. Young people move to Paramaribo, making the transmission of traditional knowledge difficult. Gold mining in adjacent areas represents a growing threat to water quality and the living environment around Boslanti.',
        sr: 'Matawai kommetii fesi demografisch druk fu di kleini grootte fu di groep, beperkte staat-services na di ver binnenlant, en di onzeikere juridische status fu dem territorio. Jongomama muvi go Paramaribo, die meki di doorgave fu traditionele kennis moeilik. Gowtu-olo werki na aangrenzende gebieden de wan groeiende bedreiging fu di waterkwaliteit en di leefomgeving rondoro Boslanti.',
      },
    },
  },
  { id: 'kwakoegron', society: 'matawai', granman: false, lat: 4.08, lng: -56.07,
    names: { nl: 'Kwakoegron', en: 'Kwakoegron', sr: 'Kwakoegron' },
    subtitles: { nl: 'Matawai-dorp · Saramaccarivier', en: 'Matawai village · Saramaccarivier', sr: 'Matawai fowru · Saramaccarivier' },
    river: 'Saramaccarivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Kwakoegron is een Matawai-dorp aan de bovenloop van de Saramaccarivier in Sipaliwini. De Matawai vormen een relatief kleine Marron-samenleving — naar schatting 3.000 tot 5.000 mensen — die zich in de 18de eeuw afsplitste van de Saamaka en sindsdien een eigen identiteit en territoir heeft gehandhaafd langs de Boven-Saramacca.',
        en: 'Kwakoegron is a Matawai village on the upper Saramacca River in Sipaliwini. The Matawai form a relatively small Maroon society — estimated at 3,000 to 5,000 people — who split from the Saamaka in the 18th century and have since maintained their own identity and territory along the Upper Saramacca.',
        sr: 'Kwakoegron na wan Matawai fowru na boven-loop fu Saramacca Liba na Sipaliwini. Matawai de wan relatief kleini Marron-samenleving — geschat na 3.000 te 5.000 sma — die ben spliti fu Saamaka na 18de ieuwen en seti dem eigi identiteit en territorio nanga Boven-Saramacca.',
      },
      founding: {
        nl: 'De Matawai zijn nakomelingen van Afrikanen die ontsnapten van Nederlandse plantages langs de Surinaamse kust in de vroege 18de eeuw. Zij maakten aanvankelijk deel uit van de bredere Saamaka-groepering, maar splisten zich af — vermoedelijk rond de 1750s — en trokken richting de Boven-Saramaccarivier. De Matawai sloten in 1762 samen met de Saamaka een vredesverdrag met de koloniale overheid. Kwakoegron is een van de traditionele Matawai-nederzettingen die daarna werden gevestigd.',
        en: 'The Matawai are descendants of Africans who escaped Dutch plantations on the Surinamese coast in the early 18th century. They were initially part of the broader Saamaka grouping but split off — probably around the 1750s — and moved toward the Upper Saramacca River. The Matawai concluded a peace treaty with colonial authorities jointly with the Saamaka in 1762. Kwakoegron is one of the traditional Matawai settlements established thereafter.',
        sr: 'Matawai de naksama fu Afrikanen di ben ron wey fu Olondesi plantasi na Sranan kosta na vroeg 18de ieuwen. Den ben na fosi deypaart fu di bredere Saamaka groepering, ma ben spliti — vermoedelijk rondoro 1750s — en ben muvi go na Boven-Saramacca Liba. Matawai ben seti wan frede-traktati nanga koloniale otoreteti samen nanga Saamaka na 1762. Kwakoegron na wan fu di traditionele Matawai nederzettingen di ben seti baka.',
      },
      history: {
        nl: 'De Matawai hebben gedurende de koloniale en postkoloniale periode een zekere mate van isolatie en zelfbestuur weten te handhaven. De Binnenlandse Oorlog (1986–1992) raakte het Matawai-gebied in mindere mate dan andere Marron-regio\'s, maar de economische gevolgen waren alsnog voelbaar. Het Matawai-grondgebied omvat delen van de Boven-Saramaccarivier en grenst aan dat van de Saamaka en de Kwinti. Kwakoegron maakt deel uit van dit traditionele grondgebied.',
        en: 'The Matawai maintained a degree of isolation and self-governance through the colonial and post-colonial period. The Interior War (1986–1992) affected the Matawai area less directly than other Maroon regions, though the economic consequences were still felt. Matawai territory covers stretches of the Upper Saramacca River and borders that of the Saamaka and the Kwinti. Kwakoegron forms part of this traditional territory.',
        sr: 'Matawai ben hori wan mate fu isolasi en selfbestuur door di koloniale en postkoloniale periode. Di Binnenlandse Oorlog (1986–1992) ben naki di Matawai gebiedo minder direkt dan andere Marron regio\'s, alhoewel di ekonomikale gevolgen ben eke firi. Matawai territorio de na stukken fu Boven-Saramacca Liba en de grenst nanga teritorio fu Saamaka en Kwinti. Kwakoegron de deypaart fu dis traditionele territorio.',
      },
      leadership: {
        nl: 'Kwakoegron valt onder de bevoegdheid van een kabiten die verantwoording aflegt aan de granman van de Matawai, zetelend in Poesoegroenoe. De granman behartigt Matawai-belangen in betrekkingen met de Surinaamse overheid. Besluitvorming binnen de gemeenschap vindt plaats via overleg tussen de kabiten en de matrilineaire clanleiders.',
        en: 'Kwakoegron falls under the authority of a kabiten who is accountable to the Matawai granman, based in Poesoegroenoe. The granman advocates Matawai interests in dealings with the Surinamese government. Community decision-making takes place through consultation between the kabiten and matrilineal clan leaders.',
        sr: 'Kwakoegron fali ondro di otoreteti fu wan kabiten di de verantwoordelijk na di Matawai granman, di de na Poesoegroenoe. Di granman behart Matawai belangen na handelen nanga Sranan regering. Gemeenschap-beslissingen de neem doro raadplegeng tussen di kabiten en matrilineaire clan-leidersma.',
      },
      challenges: {
        nl: 'De Matawai-gemeenschap kampt met demografische druk door de kleine omvang van de groep, beperkte staatsvoorzieningen in het afgelegen binnenland, en de onzekere juridische status van hun grondgebied. Jongeren trekken weg naar Paramaribo, wat de traditionele kennisoverdracht bemoeilijkt. Goudmijnbouw in aangrenzende gebieden vormt een toenemende dreiging voor de rivierkwaliteit en het leefgebied van Kwakoegron.',
        en: 'The Matawai community faces demographic pressure from the small size of the group, limited state services in the remote interior, and the uncertain legal status of their territory. Young people move to Paramaribo, making the transmission of traditional knowledge difficult. Gold mining in adjacent areas represents a growing threat to water quality and the living environment around Kwakoegron.',
        sr: 'Matawai kommetii fesi demografisch druk fu di kleini grootte fu di groep, beperkte staat-services na di ver binnenlant, en di onzeikere juridische status fu dem territorio. Jongomama muvi go Paramaribo, die meki di doorgave fu traditionele kennis moeilik. Gowtu-olo werki na aangrenzende gebieden de wan groeiende bedreiging fu di waterkwaliteit en di leefomgeving rondoro Kwakoegron.',
      },
    },
  },
  { id: 'kwattahede', society: 'matawai', granman: false, lat: 4.03, lng: -56.12,
    names: { nl: 'Kwattahede', en: 'Kwattahede', sr: 'Kwattahede' },
    subtitles: { nl: 'Matawai-dorp · Saramaccarivier', en: 'Matawai village · Saramaccarivier', sr: 'Matawai fowru · Saramaccarivier' },
    river: 'Saramaccarivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Kwattahede is een Matawai-dorp aan de bovenloop van de Saramaccarivier in Sipaliwini. De Matawai vormen een relatief kleine Marron-samenleving — naar schatting 3.000 tot 5.000 mensen — die zich in de 18de eeuw afsplitste van de Saamaka en sindsdien een eigen identiteit en territoir heeft gehandhaafd langs de Boven-Saramacca.',
        en: 'Kwattahede is a Matawai village on the upper Saramacca River in Sipaliwini. The Matawai form a relatively small Maroon society — estimated at 3,000 to 5,000 people — who split from the Saamaka in the 18th century and have since maintained their own identity and territory along the Upper Saramacca.',
        sr: 'Kwattahede na wan Matawai fowru na boven-loop fu Saramacca Liba na Sipaliwini. Matawai de wan relatief kleini Marron-samenleving — geschat na 3.000 te 5.000 sma — die ben spliti fu Saamaka na 18de ieuwen en seti dem eigi identiteit en territorio nanga Boven-Saramacca.',
      },
      founding: {
        nl: 'De Matawai zijn nakomelingen van Afrikanen die ontsnapten van Nederlandse plantages langs de Surinaamse kust in de vroege 18de eeuw. Zij maakten aanvankelijk deel uit van de bredere Saamaka-groepering, maar splisten zich af — vermoedelijk rond de 1750s — en trokken richting de Boven-Saramaccarivier. De Matawai sloten in 1762 samen met de Saamaka een vredesverdrag met de koloniale overheid. Kwattahede is een van de traditionele Matawai-nederzettingen die daarna werden gevestigd.',
        en: 'The Matawai are descendants of Africans who escaped Dutch plantations on the Surinamese coast in the early 18th century. They were initially part of the broader Saamaka grouping but split off — probably around the 1750s — and moved toward the Upper Saramacca River. The Matawai concluded a peace treaty with colonial authorities jointly with the Saamaka in 1762. Kwattahede is one of the traditional Matawai settlements established thereafter.',
        sr: 'Matawai de naksama fu Afrikanen di ben ron wey fu Olondesi plantasi na Sranan kosta na vroeg 18de ieuwen. Den ben na fosi deypaart fu di bredere Saamaka groepering, ma ben spliti — vermoedelijk rondoro 1750s — en ben muvi go na Boven-Saramacca Liba. Matawai ben seti wan frede-traktati nanga koloniale otoreteti samen nanga Saamaka na 1762. Kwattahede na wan fu di traditionele Matawai nederzettingen di ben seti baka.',
      },
      history: {
        nl: 'De Matawai hebben gedurende de koloniale en postkoloniale periode een zekere mate van isolatie en zelfbestuur weten te handhaven. De Binnenlandse Oorlog (1986–1992) raakte het Matawai-gebied in mindere mate dan andere Marron-regio\'s, maar de economische gevolgen waren alsnog voelbaar. Het Matawai-grondgebied omvat delen van de Boven-Saramaccarivier en grenst aan dat van de Saamaka en de Kwinti. Kwattahede maakt deel uit van dit traditionele grondgebied.',
        en: 'The Matawai maintained a degree of isolation and self-governance through the colonial and post-colonial period. The Interior War (1986–1992) affected the Matawai area less directly than other Maroon regions, though the economic consequences were still felt. Matawai territory covers stretches of the Upper Saramacca River and borders that of the Saamaka and the Kwinti. Kwattahede forms part of this traditional territory.',
        sr: 'Matawai ben hori wan mate fu isolasi en selfbestuur door di koloniale en postkoloniale periode. Di Binnenlandse Oorlog (1986–1992) ben naki di Matawai gebiedo minder direkt dan andere Marron regio\'s, alhoewel di ekonomikale gevolgen ben eke firi. Matawai territorio de na stukken fu Boven-Saramacca Liba en de grenst nanga teritorio fu Saamaka en Kwinti. Kwattahede de deypaart fu dis traditionele territorio.',
      },
      leadership: {
        nl: 'Kwattahede valt onder de bevoegdheid van een kabiten die verantwoording aflegt aan de granman van de Matawai, zetelend in Poesoegroenoe. De granman behartigt Matawai-belangen in betrekkingen met de Surinaamse overheid. Besluitvorming binnen de gemeenschap vindt plaats via overleg tussen de kabiten en de matrilineaire clanleiders.',
        en: 'Kwattahede falls under the authority of a kabiten who is accountable to the Matawai granman, based in Poesoegroenoe. The granman advocates Matawai interests in dealings with the Surinamese government. Community decision-making takes place through consultation between the kabiten and matrilineal clan leaders.',
        sr: 'Kwattahede fali ondro di otoreteti fu wan kabiten di de verantwoordelijk na di Matawai granman, di de na Poesoegroenoe. Di granman behart Matawai belangen na handelen nanga Sranan regering. Gemeenschap-beslissingen de neem doro raadplegeng tussen di kabiten en matrilineaire clan-leidersma.',
      },
      challenges: {
        nl: 'De Matawai-gemeenschap kampt met demografische druk door de kleine omvang van de groep, beperkte staatsvoorzieningen in het afgelegen binnenland, en de onzekere juridische status van hun grondgebied. Jongeren trekken weg naar Paramaribo, wat de traditionele kennisoverdracht bemoeilijkt. Goudmijnbouw in aangrenzende gebieden vormt een toenemende dreiging voor de rivierkwaliteit en het leefgebied van Kwattahede.',
        en: 'The Matawai community faces demographic pressure from the small size of the group, limited state services in the remote interior, and the uncertain legal status of their territory. Young people move to Paramaribo, making the transmission of traditional knowledge difficult. Gold mining in adjacent areas represents a growing threat to water quality and the living environment around Kwattahede.',
        sr: 'Matawai kommetii fesi demografisch druk fu di kleini grootte fu di groep, beperkte staat-services na di ver binnenlant, en di onzeikere juridische status fu dem territorio. Jongomama muvi go Paramaribo, die meki di doorgave fu traditionele kennis moeilik. Gowtu-olo werki na aangrenzende gebieden de wan groeiende bedreiging fu di waterkwaliteit en di leefomgeving rondoro Kwattahede.',
      },
    },
  },
  { id: 'makajapingo', society: 'matawai', granman: false, lat: 4.02, lng: -56.14,
    names: { nl: 'Makajapingo', en: 'Makajapingo', sr: 'Makajapingo' },
    subtitles: { nl: 'Matawai-dorp · Saramaccarivier', en: 'Matawai village · Saramaccarivier', sr: 'Matawai fowru · Saramaccarivier' },
    river: 'Saramaccarivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Makajapingo is een Matawai-dorp aan de bovenloop van de Saramaccarivier in Sipaliwini. De Matawai vormen een relatief kleine Marron-samenleving — naar schatting 3.000 tot 5.000 mensen — die zich in de 18de eeuw afsplitste van de Saamaka en sindsdien een eigen identiteit en territoir heeft gehandhaafd langs de Boven-Saramacca.',
        en: 'Makajapingo is a Matawai village on the upper Saramacca River in Sipaliwini. The Matawai form a relatively small Maroon society — estimated at 3,000 to 5,000 people — who split from the Saamaka in the 18th century and have since maintained their own identity and territory along the Upper Saramacca.',
        sr: 'Makajapingo na wan Matawai fowru na boven-loop fu Saramacca Liba na Sipaliwini. Matawai de wan relatief kleini Marron-samenleving — geschat na 3.000 te 5.000 sma — die ben spliti fu Saamaka na 18de ieuwen en seti dem eigi identiteit en territorio nanga Boven-Saramacca.',
      },
      founding: {
        nl: 'De Matawai zijn nakomelingen van Afrikanen die ontsnapten van Nederlandse plantages langs de Surinaamse kust in de vroege 18de eeuw. Zij maakten aanvankelijk deel uit van de bredere Saamaka-groepering, maar splisten zich af — vermoedelijk rond de 1750s — en trokken richting de Boven-Saramaccarivier. De Matawai sloten in 1762 samen met de Saamaka een vredesverdrag met de koloniale overheid. Makajapingo is een van de traditionele Matawai-nederzettingen die daarna werden gevestigd.',
        en: 'The Matawai are descendants of Africans who escaped Dutch plantations on the Surinamese coast in the early 18th century. They were initially part of the broader Saamaka grouping but split off — probably around the 1750s — and moved toward the Upper Saramacca River. The Matawai concluded a peace treaty with colonial authorities jointly with the Saamaka in 1762. Makajapingo is one of the traditional Matawai settlements established thereafter.',
        sr: 'Matawai de naksama fu Afrikanen di ben ron wey fu Olondesi plantasi na Sranan kosta na vroeg 18de ieuwen. Den ben na fosi deypaart fu di bredere Saamaka groepering, ma ben spliti — vermoedelijk rondoro 1750s — en ben muvi go na Boven-Saramacca Liba. Matawai ben seti wan frede-traktati nanga koloniale otoreteti samen nanga Saamaka na 1762. Makajapingo na wan fu di traditionele Matawai nederzettingen di ben seti baka.',
      },
      history: {
        nl: 'De Matawai hebben gedurende de koloniale en postkoloniale periode een zekere mate van isolatie en zelfbestuur weten te handhaven. De Binnenlandse Oorlog (1986–1992) raakte het Matawai-gebied in mindere mate dan andere Marron-regio\'s, maar de economische gevolgen waren alsnog voelbaar. Het Matawai-grondgebied omvat delen van de Boven-Saramaccarivier en grenst aan dat van de Saamaka en de Kwinti. Makajapingo maakt deel uit van dit traditionele grondgebied.',
        en: 'The Matawai maintained a degree of isolation and self-governance through the colonial and post-colonial period. The Interior War (1986–1992) affected the Matawai area less directly than other Maroon regions, though the economic consequences were still felt. Matawai territory covers stretches of the Upper Saramacca River and borders that of the Saamaka and the Kwinti. Makajapingo forms part of this traditional territory.',
        sr: 'Matawai ben hori wan mate fu isolasi en selfbestuur door di koloniale en postkoloniale periode. Di Binnenlandse Oorlog (1986–1992) ben naki di Matawai gebiedo minder direkt dan andere Marron regio\'s, alhoewel di ekonomikale gevolgen ben eke firi. Matawai territorio de na stukken fu Boven-Saramacca Liba en de grenst nanga teritorio fu Saamaka en Kwinti. Makajapingo de deypaart fu dis traditionele territorio.',
      },
      leadership: {
        nl: 'Makajapingo valt onder de bevoegdheid van een kabiten die verantwoording aflegt aan de granman van de Matawai, zetelend in Poesoegroenoe. De granman behartigt Matawai-belangen in betrekkingen met de Surinaamse overheid. Besluitvorming binnen de gemeenschap vindt plaats via overleg tussen de kabiten en de matrilineaire clanleiders.',
        en: 'Makajapingo falls under the authority of a kabiten who is accountable to the Matawai granman, based in Poesoegroenoe. The granman advocates Matawai interests in dealings with the Surinamese government. Community decision-making takes place through consultation between the kabiten and matrilineal clan leaders.',
        sr: 'Makajapingo fali ondro di otoreteti fu wan kabiten di de verantwoordelijk na di Matawai granman, di de na Poesoegroenoe. Di granman behart Matawai belangen na handelen nanga Sranan regering. Gemeenschap-beslissingen de neem doro raadplegeng tussen di kabiten en matrilineaire clan-leidersma.',
      },
      challenges: {
        nl: 'De Matawai-gemeenschap kampt met demografische druk door de kleine omvang van de groep, beperkte staatsvoorzieningen in het afgelegen binnenland, en de onzekere juridische status van hun grondgebied. Jongeren trekken weg naar Paramaribo, wat de traditionele kennisoverdracht bemoeilijkt. Goudmijnbouw in aangrenzende gebieden vormt een toenemende dreiging voor de rivierkwaliteit en het leefgebied van Makajapingo.',
        en: 'The Matawai community faces demographic pressure from the small size of the group, limited state services in the remote interior, and the uncertain legal status of their territory. Young people move to Paramaribo, making the transmission of traditional knowledge difficult. Gold mining in adjacent areas represents a growing threat to water quality and the living environment around Makajapingo.',
        sr: 'Matawai kommetii fesi demografisch druk fu di kleini grootte fu di groep, beperkte staat-services na di ver binnenlant, en di onzeikere juridische status fu dem territorio. Jongomama muvi go Paramaribo, die meki di doorgave fu traditionele kennis moeilik. Gowtu-olo werki na aangrenzende gebieden de wan groeiende bedreiging fu di waterkwaliteit en di leefomgeving rondoro Makajapingo.',
      },
    },
  },
  { id: 'maripaston', society: 'matawai', granman: false, lat: 4.01, lng: -56.15,
    names: { nl: 'Maripaston', en: 'Maripaston', sr: 'Maripaston' },
    subtitles: { nl: 'Matawai-dorp · Saramaccarivier', en: 'Matawai village · Saramaccarivier', sr: 'Matawai fowru · Saramaccarivier' },
    river: 'Saramaccarivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Maripaston is een Matawai-dorp aan de bovenloop van de Saramaccarivier in Sipaliwini. De Matawai vormen een relatief kleine Marron-samenleving — naar schatting 3.000 tot 5.000 mensen — die zich in de 18de eeuw afsplitste van de Saamaka en sindsdien een eigen identiteit en territoir heeft gehandhaafd langs de Boven-Saramacca.',
        en: 'Maripaston is a Matawai village on the upper Saramacca River in Sipaliwini. The Matawai form a relatively small Maroon society — estimated at 3,000 to 5,000 people — who split from the Saamaka in the 18th century and have since maintained their own identity and territory along the Upper Saramacca.',
        sr: 'Maripaston na wan Matawai fowru na boven-loop fu Saramacca Liba na Sipaliwini. Matawai de wan relatief kleini Marron-samenleving — geschat na 3.000 te 5.000 sma — die ben spliti fu Saamaka na 18de ieuwen en seti dem eigi identiteit en territorio nanga Boven-Saramacca.',
      },
      founding: {
        nl: 'De Matawai zijn nakomelingen van Afrikanen die ontsnapten van Nederlandse plantages langs de Surinaamse kust in de vroege 18de eeuw. Zij maakten aanvankelijk deel uit van de bredere Saamaka-groepering, maar splisten zich af — vermoedelijk rond de 1750s — en trokken richting de Boven-Saramaccarivier. De Matawai sloten in 1762 samen met de Saamaka een vredesverdrag met de koloniale overheid. Maripaston is een van de traditionele Matawai-nederzettingen die daarna werden gevestigd.',
        en: 'The Matawai are descendants of Africans who escaped Dutch plantations on the Surinamese coast in the early 18th century. They were initially part of the broader Saamaka grouping but split off — probably around the 1750s — and moved toward the Upper Saramacca River. The Matawai concluded a peace treaty with colonial authorities jointly with the Saamaka in 1762. Maripaston is one of the traditional Matawai settlements established thereafter.',
        sr: 'Matawai de naksama fu Afrikanen di ben ron wey fu Olondesi plantasi na Sranan kosta na vroeg 18de ieuwen. Den ben na fosi deypaart fu di bredere Saamaka groepering, ma ben spliti — vermoedelijk rondoro 1750s — en ben muvi go na Boven-Saramacca Liba. Matawai ben seti wan frede-traktati nanga koloniale otoreteti samen nanga Saamaka na 1762. Maripaston na wan fu di traditionele Matawai nederzettingen di ben seti baka.',
      },
      history: {
        nl: 'De Matawai hebben gedurende de koloniale en postkoloniale periode een zekere mate van isolatie en zelfbestuur weten te handhaven. De Binnenlandse Oorlog (1986–1992) raakte het Matawai-gebied in mindere mate dan andere Marron-regio\'s, maar de economische gevolgen waren alsnog voelbaar. Het Matawai-grondgebied omvat delen van de Boven-Saramaccarivier en grenst aan dat van de Saamaka en de Kwinti. Maripaston maakt deel uit van dit traditionele grondgebied.',
        en: 'The Matawai maintained a degree of isolation and self-governance through the colonial and post-colonial period. The Interior War (1986–1992) affected the Matawai area less directly than other Maroon regions, though the economic consequences were still felt. Matawai territory covers stretches of the Upper Saramacca River and borders that of the Saamaka and the Kwinti. Maripaston forms part of this traditional territory.',
        sr: 'Matawai ben hori wan mate fu isolasi en selfbestuur door di koloniale en postkoloniale periode. Di Binnenlandse Oorlog (1986–1992) ben naki di Matawai gebiedo minder direkt dan andere Marron regio\'s, alhoewel di ekonomikale gevolgen ben eke firi. Matawai territorio de na stukken fu Boven-Saramacca Liba en de grenst nanga teritorio fu Saamaka en Kwinti. Maripaston de deypaart fu dis traditionele territorio.',
      },
      leadership: {
        nl: 'Maripaston valt onder de bevoegdheid van een kabiten die verantwoording aflegt aan de granman van de Matawai, zetelend in Poesoegroenoe. De granman behartigt Matawai-belangen in betrekkingen met de Surinaamse overheid. Besluitvorming binnen de gemeenschap vindt plaats via overleg tussen de kabiten en de matrilineaire clanleiders.',
        en: 'Maripaston falls under the authority of a kabiten who is accountable to the Matawai granman, based in Poesoegroenoe. The granman advocates Matawai interests in dealings with the Surinamese government. Community decision-making takes place through consultation between the kabiten and matrilineal clan leaders.',
        sr: 'Maripaston fali ondro di otoreteti fu wan kabiten di de verantwoordelijk na di Matawai granman, di de na Poesoegroenoe. Di granman behart Matawai belangen na handelen nanga Sranan regering. Gemeenschap-beslissingen de neem doro raadplegeng tussen di kabiten en matrilineaire clan-leidersma.',
      },
      challenges: {
        nl: 'De Matawai-gemeenschap kampt met demografische druk door de kleine omvang van de groep, beperkte staatsvoorzieningen in het afgelegen binnenland, en de onzekere juridische status van hun grondgebied. Jongeren trekken weg naar Paramaribo, wat de traditionele kennisoverdracht bemoeilijkt. Goudmijnbouw in aangrenzende gebieden vormt een toenemende dreiging voor de rivierkwaliteit en het leefgebied van Maripaston.',
        en: 'The Matawai community faces demographic pressure from the small size of the group, limited state services in the remote interior, and the uncertain legal status of their territory. Young people move to Paramaribo, making the transmission of traditional knowledge difficult. Gold mining in adjacent areas represents a growing threat to water quality and the living environment around Maripaston.',
        sr: 'Matawai kommetii fesi demografisch druk fu di kleini grootte fu di groep, beperkte staat-services na di ver binnenlant, en di onzeikere juridische status fu dem territorio. Jongomama muvi go Paramaribo, die meki di doorgave fu traditionele kennis moeilik. Gowtu-olo werki na aangrenzende gebieden de wan groeiende bedreiging fu di waterkwaliteit en di leefomgeving rondoro Maripaston.',
      },
    },
  },
  { id: 'moetoetoetabriki', society: 'matawai', granman: false, lat: 4.06, lng: -56.09,
    names: { nl: 'Moetoetoetabriki', en: 'Moetoetoetabriki', sr: 'Moetoetoetabriki' },
    subtitles: { nl: 'Matawai-dorp · Saramaccarivier', en: 'Matawai village · Saramaccarivier', sr: 'Matawai fowru · Saramaccarivier' },
    river: 'Saramaccarivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Moetoetoetabriki is een Matawai-dorp aan de bovenloop van de Saramaccarivier in Sipaliwini. De Matawai vormen een relatief kleine Marron-samenleving — naar schatting 3.000 tot 5.000 mensen — die zich in de 18de eeuw afsplitste van de Saamaka en sindsdien een eigen identiteit en territoir heeft gehandhaafd langs de Boven-Saramacca.',
        en: 'Moetoetoetabriki is a Matawai village on the upper Saramacca River in Sipaliwini. The Matawai form a relatively small Maroon society — estimated at 3,000 to 5,000 people — who split from the Saamaka in the 18th century and have since maintained their own identity and territory along the Upper Saramacca.',
        sr: 'Moetoetoetabriki na wan Matawai fowru na boven-loop fu Saramacca Liba na Sipaliwini. Matawai de wan relatief kleini Marron-samenleving — geschat na 3.000 te 5.000 sma — die ben spliti fu Saamaka na 18de ieuwen en seti dem eigi identiteit en territorio nanga Boven-Saramacca.',
      },
      founding: {
        nl: 'De Matawai zijn nakomelingen van Afrikanen die ontsnapten van Nederlandse plantages langs de Surinaamse kust in de vroege 18de eeuw. Zij maakten aanvankelijk deel uit van de bredere Saamaka-groepering, maar splisten zich af — vermoedelijk rond de 1750s — en trokken richting de Boven-Saramaccarivier. De Matawai sloten in 1762 samen met de Saamaka een vredesverdrag met de koloniale overheid. Moetoetoetabriki is een van de traditionele Matawai-nederzettingen die daarna werden gevestigd.',
        en: 'The Matawai are descendants of Africans who escaped Dutch plantations on the Surinamese coast in the early 18th century. They were initially part of the broader Saamaka grouping but split off — probably around the 1750s — and moved toward the Upper Saramacca River. The Matawai concluded a peace treaty with colonial authorities jointly with the Saamaka in 1762. Moetoetoetabriki is one of the traditional Matawai settlements established thereafter.',
        sr: 'Matawai de naksama fu Afrikanen di ben ron wey fu Olondesi plantasi na Sranan kosta na vroeg 18de ieuwen. Den ben na fosi deypaart fu di bredere Saamaka groepering, ma ben spliti — vermoedelijk rondoro 1750s — en ben muvi go na Boven-Saramacca Liba. Matawai ben seti wan frede-traktati nanga koloniale otoreteti samen nanga Saamaka na 1762. Moetoetoetabriki na wan fu di traditionele Matawai nederzettingen di ben seti baka.',
      },
      history: {
        nl: 'De Matawai hebben gedurende de koloniale en postkoloniale periode een zekere mate van isolatie en zelfbestuur weten te handhaven. De Binnenlandse Oorlog (1986–1992) raakte het Matawai-gebied in mindere mate dan andere Marron-regio\'s, maar de economische gevolgen waren alsnog voelbaar. Het Matawai-grondgebied omvat delen van de Boven-Saramaccarivier en grenst aan dat van de Saamaka en de Kwinti. Moetoetoetabriki maakt deel uit van dit traditionele grondgebied.',
        en: 'The Matawai maintained a degree of isolation and self-governance through the colonial and post-colonial period. The Interior War (1986–1992) affected the Matawai area less directly than other Maroon regions, though the economic consequences were still felt. Matawai territory covers stretches of the Upper Saramacca River and borders that of the Saamaka and the Kwinti. Moetoetoetabriki forms part of this traditional territory.',
        sr: 'Matawai ben hori wan mate fu isolasi en selfbestuur door di koloniale en postkoloniale periode. Di Binnenlandse Oorlog (1986–1992) ben naki di Matawai gebiedo minder direkt dan andere Marron regio\'s, alhoewel di ekonomikale gevolgen ben eke firi. Matawai territorio de na stukken fu Boven-Saramacca Liba en de grenst nanga teritorio fu Saamaka en Kwinti. Moetoetoetabriki de deypaart fu dis traditionele territorio.',
      },
      leadership: {
        nl: 'Moetoetoetabriki valt onder de bevoegdheid van een kabiten die verantwoording aflegt aan de granman van de Matawai, zetelend in Poesoegroenoe. De granman behartigt Matawai-belangen in betrekkingen met de Surinaamse overheid. Besluitvorming binnen de gemeenschap vindt plaats via overleg tussen de kabiten en de matrilineaire clanleiders.',
        en: 'Moetoetoetabriki falls under the authority of a kabiten who is accountable to the Matawai granman, based in Poesoegroenoe. The granman advocates Matawai interests in dealings with the Surinamese government. Community decision-making takes place through consultation between the kabiten and matrilineal clan leaders.',
        sr: 'Moetoetoetabriki fali ondro di otoreteti fu wan kabiten di de verantwoordelijk na di Matawai granman, di de na Poesoegroenoe. Di granman behart Matawai belangen na handelen nanga Sranan regering. Gemeenschap-beslissingen de neem doro raadplegeng tussen di kabiten en matrilineaire clan-leidersma.',
      },
      challenges: {
        nl: 'De Matawai-gemeenschap kampt met demografische druk door de kleine omvang van de groep, beperkte staatsvoorzieningen in het afgelegen binnenland, en de onzekere juridische status van hun grondgebied. Jongeren trekken weg naar Paramaribo, wat de traditionele kennisoverdracht bemoeilijkt. Goudmijnbouw in aangrenzende gebieden vormt een toenemende dreiging voor de rivierkwaliteit en het leefgebied van Moetoetoetabriki.',
        en: 'The Matawai community faces demographic pressure from the small size of the group, limited state services in the remote interior, and the uncertain legal status of their territory. Young people move to Paramaribo, making the transmission of traditional knowledge difficult. Gold mining in adjacent areas represents a growing threat to water quality and the living environment around Moetoetoetabriki.',
        sr: 'Matawai kommetii fesi demografisch druk fu di kleini grootte fu di groep, beperkte staat-services na di ver binnenlant, en di onzeikere juridische status fu dem territorio. Jongomama muvi go Paramaribo, die meki di doorgave fu traditionele kennis moeilik. Gowtu-olo werki na aangrenzende gebieden de wan groeiende bedreiging fu di waterkwaliteit en di leefomgeving rondoro Moetoetoetabriki.',
      },
    },
  },
  { id: 'nieuw_jacobkondre', society: 'matawai', granman: false, lat: 4.1, lng: -56.05,
    names: { nl: 'Nieuw Jacobkondre', en: 'Nieuw Jacobkondre', sr: 'Nieuw Jacobkondre' },
    subtitles: { nl: 'Matawai-dorp · Saramaccarivier', en: 'Matawai village · Saramaccarivier', sr: 'Matawai fowru · Saramaccarivier' },
    river: 'Saramaccarivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Nieuw Jacobkondre is een Matawai-dorp aan de bovenloop van de Saramaccarivier in Sipaliwini. De Matawai vormen een relatief kleine Marron-samenleving — naar schatting 3.000 tot 5.000 mensen — die zich in de 18de eeuw afsplitste van de Saamaka en sindsdien een eigen identiteit en territoir heeft gehandhaafd langs de Boven-Saramacca.',
        en: 'Nieuw Jacobkondre is a Matawai village on the upper Saramacca River in Sipaliwini. The Matawai form a relatively small Maroon society — estimated at 3,000 to 5,000 people — who split from the Saamaka in the 18th century and have since maintained their own identity and territory along the Upper Saramacca.',
        sr: 'Nieuw Jacobkondre na wan Matawai fowru na boven-loop fu Saramacca Liba na Sipaliwini. Matawai de wan relatief kleini Marron-samenleving — geschat na 3.000 te 5.000 sma — die ben spliti fu Saamaka na 18de ieuwen en seti dem eigi identiteit en territorio nanga Boven-Saramacca.',
      },
      founding: {
        nl: 'De Matawai zijn nakomelingen van Afrikanen die ontsnapten van Nederlandse plantages langs de Surinaamse kust in de vroege 18de eeuw. Zij maakten aanvankelijk deel uit van de bredere Saamaka-groepering, maar splisten zich af — vermoedelijk rond de 1750s — en trokken richting de Boven-Saramaccarivier. De Matawai sloten in 1762 samen met de Saamaka een vredesverdrag met de koloniale overheid. Nieuw Jacobkondre is een van de traditionele Matawai-nederzettingen die daarna werden gevestigd.',
        en: 'The Matawai are descendants of Africans who escaped Dutch plantations on the Surinamese coast in the early 18th century. They were initially part of the broader Saamaka grouping but split off — probably around the 1750s — and moved toward the Upper Saramacca River. The Matawai concluded a peace treaty with colonial authorities jointly with the Saamaka in 1762. Nieuw Jacobkondre is one of the traditional Matawai settlements established thereafter.',
        sr: 'Matawai de naksama fu Afrikanen di ben ron wey fu Olondesi plantasi na Sranan kosta na vroeg 18de ieuwen. Den ben na fosi deypaart fu di bredere Saamaka groepering, ma ben spliti — vermoedelijk rondoro 1750s — en ben muvi go na Boven-Saramacca Liba. Matawai ben seti wan frede-traktati nanga koloniale otoreteti samen nanga Saamaka na 1762. Nieuw Jacobkondre na wan fu di traditionele Matawai nederzettingen di ben seti baka.',
      },
      history: {
        nl: 'De Matawai hebben gedurende de koloniale en postkoloniale periode een zekere mate van isolatie en zelfbestuur weten te handhaven. De Binnenlandse Oorlog (1986–1992) raakte het Matawai-gebied in mindere mate dan andere Marron-regio\'s, maar de economische gevolgen waren alsnog voelbaar. Het Matawai-grondgebied omvat delen van de Boven-Saramaccarivier en grenst aan dat van de Saamaka en de Kwinti. Nieuw Jacobkondre maakt deel uit van dit traditionele grondgebied.',
        en: 'The Matawai maintained a degree of isolation and self-governance through the colonial and post-colonial period. The Interior War (1986–1992) affected the Matawai area less directly than other Maroon regions, though the economic consequences were still felt. Matawai territory covers stretches of the Upper Saramacca River and borders that of the Saamaka and the Kwinti. Nieuw Jacobkondre forms part of this traditional territory.',
        sr: 'Matawai ben hori wan mate fu isolasi en selfbestuur door di koloniale en postkoloniale periode. Di Binnenlandse Oorlog (1986–1992) ben naki di Matawai gebiedo minder direkt dan andere Marron regio\'s, alhoewel di ekonomikale gevolgen ben eke firi. Matawai territorio de na stukken fu Boven-Saramacca Liba en de grenst nanga teritorio fu Saamaka en Kwinti. Nieuw Jacobkondre de deypaart fu dis traditionele territorio.',
      },
      leadership: {
        nl: 'Nieuw Jacobkondre valt onder de bevoegdheid van een kabiten die verantwoording aflegt aan de granman van de Matawai, zetelend in Poesoegroenoe. De granman behartigt Matawai-belangen in betrekkingen met de Surinaamse overheid. Besluitvorming binnen de gemeenschap vindt plaats via overleg tussen de kabiten en de matrilineaire clanleiders.',
        en: 'Nieuw Jacobkondre falls under the authority of a kabiten who is accountable to the Matawai granman, based in Poesoegroenoe. The granman advocates Matawai interests in dealings with the Surinamese government. Community decision-making takes place through consultation between the kabiten and matrilineal clan leaders.',
        sr: 'Nieuw Jacobkondre fali ondro di otoreteti fu wan kabiten di de verantwoordelijk na di Matawai granman, di de na Poesoegroenoe. Di granman behart Matawai belangen na handelen nanga Sranan regering. Gemeenschap-beslissingen de neem doro raadplegeng tussen di kabiten en matrilineaire clan-leidersma.',
      },
      challenges: {
        nl: 'De Matawai-gemeenschap kampt met demografische druk door de kleine omvang van de groep, beperkte staatsvoorzieningen in het afgelegen binnenland, en de onzekere juridische status van hun grondgebied. Jongeren trekken weg naar Paramaribo, wat de traditionele kennisoverdracht bemoeilijkt. Goudmijnbouw in aangrenzende gebieden vormt een toenemende dreiging voor de rivierkwaliteit en het leefgebied van Nieuw Jacobkondre.',
        en: 'The Matawai community faces demographic pressure from the small size of the group, limited state services in the remote interior, and the uncertain legal status of their territory. Young people move to Paramaribo, making the transmission of traditional knowledge difficult. Gold mining in adjacent areas represents a growing threat to water quality and the living environment around Nieuw Jacobkondre.',
        sr: 'Matawai kommetii fesi demografisch druk fu di kleini grootte fu di groep, beperkte staat-services na di ver binnenlant, en di onzeikere juridische status fu dem territorio. Jongomama muvi go Paramaribo, die meki di doorgave fu traditionele kennis moeilik. Gowtu-olo werki na aangrenzende gebieden de wan groeiende bedreiging fu di waterkwaliteit en di leefomgeving rondoro Nieuw Jacobkondre.',
      },
    },
  },
  { id: 'poesoegroenoe', society: 'matawai', granman: true, lat: 4.09, lng: -56.06,
    names: { nl: 'Poesoegroenoe', en: 'Poesoegroenoe', sr: 'Poesoegroenoe' },
    subtitles: { nl: 'Zetel van de Granman · Saramaccarivier', en: 'Seat of the Granman · Saramaccarivier', sr: 'Oso fu Granman · Saramaccarivier' },
    river: 'Saramaccarivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Poesoegroenoe is een Matawai-dorp aan de bovenloop van de Saramaccarivier in Sipaliwini. De Matawai vormen een relatief kleine Marron-samenleving — naar schatting 3.000 tot 5.000 mensen — die zich in de 18de eeuw afsplitste van de Saamaka en sindsdien een eigen identiteit en territoir heeft gehandhaafd langs de Boven-Saramacca.',
        en: 'Poesoegroenoe is a Matawai village on the upper Saramacca River in Sipaliwini. The Matawai form a relatively small Maroon society — estimated at 3,000 to 5,000 people — who split from the Saamaka in the 18th century and have since maintained their own identity and territory along the Upper Saramacca.',
        sr: 'Poesoegroenoe na wan Matawai fowru na boven-loop fu Saramacca Liba na Sipaliwini. Matawai de wan relatief kleini Marron-samenleving — geschat na 3.000 te 5.000 sma — die ben spliti fu Saamaka na 18de ieuwen en seti dem eigi identiteit en territorio nanga Boven-Saramacca.',
      },
      founding: {
        nl: 'De Matawai zijn nakomelingen van Afrikanen die ontsnapten van Nederlandse plantages langs de Surinaamse kust in de vroege 18de eeuw. Zij maakten aanvankelijk deel uit van de bredere Saamaka-groepering, maar splisten zich af — vermoedelijk rond de 1750s — en trokken richting de Boven-Saramaccarivier. De Matawai sloten in 1762 samen met de Saamaka een vredesverdrag met de koloniale overheid. Poesoegroenoe is een van de traditionele Matawai-nederzettingen die daarna werden gevestigd.',
        en: 'The Matawai are descendants of Africans who escaped Dutch plantations on the Surinamese coast in the early 18th century. They were initially part of the broader Saamaka grouping but split off — probably around the 1750s — and moved toward the Upper Saramacca River. The Matawai concluded a peace treaty with colonial authorities jointly with the Saamaka in 1762. Poesoegroenoe is one of the traditional Matawai settlements established thereafter.',
        sr: 'Matawai de naksama fu Afrikanen di ben ron wey fu Olondesi plantasi na Sranan kosta na vroeg 18de ieuwen. Den ben na fosi deypaart fu di bredere Saamaka groepering, ma ben spliti — vermoedelijk rondoro 1750s — en ben muvi go na Boven-Saramacca Liba. Matawai ben seti wan frede-traktati nanga koloniale otoreteti samen nanga Saamaka na 1762. Poesoegroenoe na wan fu di traditionele Matawai nederzettingen di ben seti baka.',
      },
      history: {
        nl: 'De Matawai hebben gedurende de koloniale en postkoloniale periode een zekere mate van isolatie en zelfbestuur weten te handhaven. De Binnenlandse Oorlog (1986–1992) raakte het Matawai-gebied in mindere mate dan andere Marron-regio\'s, maar de economische gevolgen waren alsnog voelbaar. Het Matawai-grondgebied omvat delen van de Boven-Saramaccarivier en grenst aan dat van de Saamaka en de Kwinti. Poesoegroenoe maakt deel uit van dit traditionele grondgebied.',
        en: 'The Matawai maintained a degree of isolation and self-governance through the colonial and post-colonial period. The Interior War (1986–1992) affected the Matawai area less directly than other Maroon regions, though the economic consequences were still felt. Matawai territory covers stretches of the Upper Saramacca River and borders that of the Saamaka and the Kwinti. Poesoegroenoe forms part of this traditional territory.',
        sr: 'Matawai ben hori wan mate fu isolasi en selfbestuur door di koloniale en postkoloniale periode. Di Binnenlandse Oorlog (1986–1992) ben naki di Matawai gebiedo minder direkt dan andere Marron regio\'s, alhoewel di ekonomikale gevolgen ben eke firi. Matawai territorio de na stukken fu Boven-Saramacca Liba en de grenst nanga teritorio fu Saamaka en Kwinti. Poesoegroenoe de deypaart fu dis traditionele territorio.',
      },
      leadership: {
        nl: 'Poesoegroenoe valt onder de bevoegdheid van een kabiten die verantwoording aflegt aan de granman van de Matawai, zetelend in Poesoegroenoe. De granman behartigt Matawai-belangen in betrekkingen met de Surinaamse overheid. Besluitvorming binnen de gemeenschap vindt plaats via overleg tussen de kabiten en de matrilineaire clanleiders.',
        en: 'Poesoegroenoe falls under the authority of a kabiten who is accountable to the Matawai granman, based in Poesoegroenoe. The granman advocates Matawai interests in dealings with the Surinamese government. Community decision-making takes place through consultation between the kabiten and matrilineal clan leaders.',
        sr: 'Poesoegroenoe fali ondro di otoreteti fu wan kabiten di de verantwoordelijk na di Matawai granman, di de na Poesoegroenoe. Di granman behart Matawai belangen na handelen nanga Sranan regering. Gemeenschap-beslissingen de neem doro raadplegeng tussen di kabiten en matrilineaire clan-leidersma.',
      },
      challenges: {
        nl: 'De Matawai-gemeenschap kampt met demografische druk door de kleine omvang van de groep, beperkte staatsvoorzieningen in het afgelegen binnenland, en de onzekere juridische status van hun grondgebied. Jongeren trekken weg naar Paramaribo, wat de traditionele kennisoverdracht bemoeilijkt. Goudmijnbouw in aangrenzende gebieden vormt een toenemende dreiging voor de rivierkwaliteit en het leefgebied van Poesoegroenoe.',
        en: 'The Matawai community faces demographic pressure from the small size of the group, limited state services in the remote interior, and the uncertain legal status of their territory. Young people move to Paramaribo, making the transmission of traditional knowledge difficult. Gold mining in adjacent areas represents a growing threat to water quality and the living environment around Poesoegroenoe.',
        sr: 'Matawai kommetii fesi demografisch druk fu di kleini grootte fu di groep, beperkte staat-services na di ver binnenlant, en di onzeikere juridische status fu dem territorio. Jongomama muvi go Paramaribo, die meki di doorgave fu traditionele kennis moeilik. Gowtu-olo werki na aangrenzende gebieden de wan groeiende bedreiging fu di waterkwaliteit en di leefomgeving rondoro Poesoegroenoe.',
      },
    },
  },
  { id: 'pakka_pakka', society: 'matawai', granman: false, lat: 4.04, lng: -56.11,
    names: { nl: 'Pakka-Pakka', en: 'Pakka-Pakka', sr: 'Pakka-Pakka' },
    subtitles: { nl: 'Matawai-dorp · Saramaccarivier', en: 'Matawai village · Saramaccarivier', sr: 'Matawai fowru · Saramaccarivier' },
    river: 'Saramaccarivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Pakka-Pakka is een Matawai-dorp aan de bovenloop van de Saramaccarivier in Sipaliwini. De Matawai vormen een relatief kleine Marron-samenleving — naar schatting 3.000 tot 5.000 mensen — die zich in de 18de eeuw afsplitste van de Saamaka en sindsdien een eigen identiteit en territoir heeft gehandhaafd langs de Boven-Saramacca.',
        en: 'Pakka-Pakka is a Matawai village on the upper Saramacca River in Sipaliwini. The Matawai form a relatively small Maroon society — estimated at 3,000 to 5,000 people — who split from the Saamaka in the 18th century and have since maintained their own identity and territory along the Upper Saramacca.',
        sr: 'Pakka-Pakka na wan Matawai fowru na boven-loop fu Saramacca Liba na Sipaliwini. Matawai de wan relatief kleini Marron-samenleving — geschat na 3.000 te 5.000 sma — die ben spliti fu Saamaka na 18de ieuwen en seti dem eigi identiteit en territorio nanga Boven-Saramacca.',
      },
      founding: {
        nl: 'De Matawai zijn nakomelingen van Afrikanen die ontsnapten van Nederlandse plantages langs de Surinaamse kust in de vroege 18de eeuw. Zij maakten aanvankelijk deel uit van de bredere Saamaka-groepering, maar splisten zich af — vermoedelijk rond de 1750s — en trokken richting de Boven-Saramaccarivier. De Matawai sloten in 1762 samen met de Saamaka een vredesverdrag met de koloniale overheid. Pakka-Pakka is een van de traditionele Matawai-nederzettingen die daarna werden gevestigd.',
        en: 'The Matawai are descendants of Africans who escaped Dutch plantations on the Surinamese coast in the early 18th century. They were initially part of the broader Saamaka grouping but split off — probably around the 1750s — and moved toward the Upper Saramacca River. The Matawai concluded a peace treaty with colonial authorities jointly with the Saamaka in 1762. Pakka-Pakka is one of the traditional Matawai settlements established thereafter.',
        sr: 'Matawai de naksama fu Afrikanen di ben ron wey fu Olondesi plantasi na Sranan kosta na vroeg 18de ieuwen. Den ben na fosi deypaart fu di bredere Saamaka groepering, ma ben spliti — vermoedelijk rondoro 1750s — en ben muvi go na Boven-Saramacca Liba. Matawai ben seti wan frede-traktati nanga koloniale otoreteti samen nanga Saamaka na 1762. Pakka-Pakka na wan fu di traditionele Matawai nederzettingen di ben seti baka.',
      },
      history: {
        nl: 'De Matawai hebben gedurende de koloniale en postkoloniale periode een zekere mate van isolatie en zelfbestuur weten te handhaven. De Binnenlandse Oorlog (1986–1992) raakte het Matawai-gebied in mindere mate dan andere Marron-regio\'s, maar de economische gevolgen waren alsnog voelbaar. Het Matawai-grondgebied omvat delen van de Boven-Saramaccarivier en grenst aan dat van de Saamaka en de Kwinti. Pakka-Pakka maakt deel uit van dit traditionele grondgebied.',
        en: 'The Matawai maintained a degree of isolation and self-governance through the colonial and post-colonial period. The Interior War (1986–1992) affected the Matawai area less directly than other Maroon regions, though the economic consequences were still felt. Matawai territory covers stretches of the Upper Saramacca River and borders that of the Saamaka and the Kwinti. Pakka-Pakka forms part of this traditional territory.',
        sr: 'Matawai ben hori wan mate fu isolasi en selfbestuur door di koloniale en postkoloniale periode. Di Binnenlandse Oorlog (1986–1992) ben naki di Matawai gebiedo minder direkt dan andere Marron regio\'s, alhoewel di ekonomikale gevolgen ben eke firi. Matawai territorio de na stukken fu Boven-Saramacca Liba en de grenst nanga teritorio fu Saamaka en Kwinti. Pakka-Pakka de deypaart fu dis traditionele territorio.',
      },
      leadership: {
        nl: 'Pakka-Pakka valt onder de bevoegdheid van een kabiten die verantwoording aflegt aan de granman van de Matawai, zetelend in Poesoegroenoe. De granman behartigt Matawai-belangen in betrekkingen met de Surinaamse overheid. Besluitvorming binnen de gemeenschap vindt plaats via overleg tussen de kabiten en de matrilineaire clanleiders.',
        en: 'Pakka-Pakka falls under the authority of a kabiten who is accountable to the Matawai granman, based in Poesoegroenoe. The granman advocates Matawai interests in dealings with the Surinamese government. Community decision-making takes place through consultation between the kabiten and matrilineal clan leaders.',
        sr: 'Pakka-Pakka fali ondro di otoreteti fu wan kabiten di de verantwoordelijk na di Matawai granman, di de na Poesoegroenoe. Di granman behart Matawai belangen na handelen nanga Sranan regering. Gemeenschap-beslissingen de neem doro raadplegeng tussen di kabiten en matrilineaire clan-leidersma.',
      },
      challenges: {
        nl: 'De Matawai-gemeenschap kampt met demografische druk door de kleine omvang van de groep, beperkte staatsvoorzieningen in het afgelegen binnenland, en de onzekere juridische status van hun grondgebied. Jongeren trekken weg naar Paramaribo, wat de traditionele kennisoverdracht bemoeilijkt. Goudmijnbouw in aangrenzende gebieden vormt een toenemende dreiging voor de rivierkwaliteit en het leefgebied van Pakka-Pakka.',
        en: 'The Matawai community faces demographic pressure from the small size of the group, limited state services in the remote interior, and the uncertain legal status of their territory. Young people move to Paramaribo, making the transmission of traditional knowledge difficult. Gold mining in adjacent areas represents a growing threat to water quality and the living environment around Pakka-Pakka.',
        sr: 'Matawai kommetii fesi demografisch druk fu di kleini grootte fu di groep, beperkte staat-services na di ver binnenlant, en di onzeikere juridische status fu dem territorio. Jongomama muvi go Paramaribo, die meki di doorgave fu traditionele kennis moeilik. Gowtu-olo werki na aangrenzende gebieden de wan groeiende bedreiging fu di waterkwaliteit en di leefomgeving rondoro Pakka-Pakka.',
      },
    },
  },

  // ══ KWINTI ════════════════════════════════════════════════════════════
  { id: 'bitagron', society: 'kwinti', granman: false, lat: 4.52, lng: -56.38,
    names: { nl: 'Bitagron', en: 'Bitagron', sr: 'Bitagron' },
    subtitles: { nl: 'Kwinti-dorp · Coppenamerivier', en: 'Kwinti village · Coppenamerivier', sr: 'Kwinti fowru · Coppenamerivier' },
    river: 'Coppenamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Bitagron is een Kwinti-dorp aan de Coppenamerivier in Sipaliwini. De Kwinti vormen de kleinste van Suriname\'s erkende Marron-samenlevingen, met slechts enkele honderden inwoners. Zij wonen hoofdzakelijk langs de middenloop van de Coppenamerivier en hebben een eigen culturele identiteit behouden ondanks hun geringe omvang.',
        en: 'Bitagron is a Kwinti village on the Coppename River in Sipaliwini. The Kwinti form the smallest of Suriname\'s recognized Maroon societies, with only a few hundred members. They live mainly along the middle Coppename River and have maintained a distinct cultural identity despite their small size.',
        sr: 'Bitagron na wan Kwinti fowru na Coppename Liba na Sipaliwini. Kwinti de di kleinste fu Sranan erkende Marron-samenlevingen, namo wan paar honderd sma. Den libi hoofdzakelijk nanga middenloop fu Coppename Liba en ben hori dem eigi kulturele identiteit ondanks dem kleini grootte.',
      },
      founding: {
        nl: 'De Kwinti zijn nakomelingen van tot slaaf gemaakten die ontsnapten van Nederlandse plantages in de 17de en vroege 18de eeuw. Zij vestigden zich langs de Coppenamerivier, ver van de kust en van de grotere Marron-groepen. De Kwinti sloten nooit een formeel vredesverdrag met de koloniale autoriteiten en leefden daarmee buiten het systeem van erkende Marron-autonomie. Pas in de late 20ste eeuw kregen zij officiële erkenning van de Surinaamse staat.',
        en: 'The Kwinti are descendants of enslaved people who escaped Dutch plantations in the 17th and early 18th centuries. They settled along the Coppename River, far from the coast and from the larger Maroon groups. The Kwinti never concluded a formal peace treaty with the colonial authorities, existing outside the recognized framework of Maroon autonomy. Only in the late 20th century did they receive official recognition from the Surinamese state.',
        sr: 'Kwinti de naksama fu enslefs sma di ben ron wey fu Olondesi plantasi na 17de en vroeg 18de ieuwen. Den ben seti libi nanga Coppename Liba, fara fu di kosta en fu di groto Marron groepen. Kwinti no ben seti wan formeel frede-traktati nanga di koloniale otoreteti en den ben libi buiten di erkende kader fu Marron awtonemsi. Namo na di laat 20ste ieuwen den ben kisi officieel erkenning fu Sranan strati.',
      },
      history: {
        nl: 'De Kwinti leefden eeuwenlang in relatieve afzondering langs de Coppename. Door hun kleine aantallen en afgelegen ligging bleven zij grotendeels buiten de grote politieke conflicten die andere Marron-groepen troffen. De Binnenlandse Oorlog (1986–1992) bereikte het Kwinti-gebied nauwelijks. Hedendaagse druk komt voornamelijk van illegale goudwinning en houtkap in hun traditionele territoir, waartegen zij weinig juridische bescherming genieten.',
        en: 'The Kwinti lived for centuries in relative seclusion along the Coppename. Their small numbers and remote location kept them largely outside the major political conflicts that affected other Maroon groups. The Interior War (1986–1992) barely reached Kwinti territory. Contemporary pressure comes mainly from illegal gold mining and logging in their traditional territory, against which they have little legal protection.',
        sr: 'Kwinti ben libi desio ieuwen nanga relatieve afzondering nanga Coppename. Dem kleini getallen en ver lokatie ben hori dem grotendeels buiten di groto politikale konflikten di ben naki andere Marron groepen. Di Binnenlandse Oorlog (1986–1992) bijna no ben reiki Kwinti territorio. Huidig druk kom voornaamste fu illegale gowtu-olo werki en houtkap na dem traditionele territorio, waartegen dem abi weinig juridische bescherming.',
      },
      leadership: {
        nl: 'Bitagron heeft een kabiten als lokale leider. De Kwinti als geheel worden vertegenwoordigd door hun granman in betrekkingen met de Surinaamse overheid. Beslissingen worden genomen via de traditionele raadstructuren van de clan. De Kwinti-gemeenschap is actief in het verdedigen van hun grondrechten via regionale en internationale fora.',
        en: 'Bitagron has a kabiten as local leader. The Kwinti as a whole are represented by their granman in dealings with the Surinamese government. Decisions are made through the traditional council structures of the clan. The Kwinti community is active in defending their land rights through regional and international forums.',
        sr: 'Bitagron abi wan kabiten als lokale leider. Di Kwinti as geheel de representeerd doro dem granman na handelen nanga Sranan regering. Beslissingen de neem door di traditionele raadstructuren fu di clan. Kwinti kommetii de aktif na verdedigen fu dem gronrechten door regionale en internationale forums.',
      },
      challenges: {
        nl: 'De Kwinti zijn onevenredig kwetsbaar door hun kleine omvang. Goudmijnbouw en houtkap in hun traditionele teritoria bedreigen zowel het milieu als de culturele continuïteit. De bevolking is ernstig uitgedund door emigratie naar Paramaribo. Formele grondeigendomsrechten zijn niet vastgelegd, wat de gemeenschap juridisch weerloos maakt tegenover buitenstaanders die hun land gebruiken.',
        en: 'The Kwinti are disproportionately vulnerable due to their small size. Gold mining and logging in their traditional territories threaten both the environment and cultural continuity. The population has been severely depleted by emigration to Paramaribo. Formal land ownership rights are not codified, leaving the community legally defenseless against outsiders using their land.',
        sr: 'Kwinti de onevenredig kwetsbaar doro dem kleini grootte. Gowtu-olo werki en houtkap na dem traditionele territoria de bedreigen zowel di omgeving als kulturele kontinuïteit. Di bevolking de serieus uitgedund doro emigrasi go Paramaribo. Formele grondeigendomsrechten no de vastgelegd, die lef di kommetii juridisch weerloos nanga buitenlanders di gebruik dem grondoe.',
      },
    },
  },
  { id: 'heidoti', society: 'kwinti', granman: false, lat: 4.54, lng: -56.36,
    names: { nl: 'Heidoti', en: 'Heidoti', sr: 'Heidoti' },
    subtitles: { nl: 'Kwinti-dorp · Coppenamerivier', en: 'Kwinti village · Coppenamerivier', sr: 'Kwinti fowru · Coppenamerivier' },
    river: 'Coppenamerivier', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Heidoti is een Kwinti-dorp aan de Coppenamerivier in Sipaliwini. De Kwinti vormen de kleinste van Suriname\'s erkende Marron-samenlevingen, met slechts enkele honderden inwoners. Zij wonen hoofdzakelijk langs de middenloop van de Coppenamerivier en hebben een eigen culturele identiteit behouden ondanks hun geringe omvang.',
        en: 'Heidoti is a Kwinti village on the Coppename River in Sipaliwini. The Kwinti form the smallest of Suriname\'s recognized Maroon societies, with only a few hundred members. They live mainly along the middle Coppename River and have maintained a distinct cultural identity despite their small size.',
        sr: 'Heidoti na wan Kwinti fowru na Coppename Liba na Sipaliwini. Kwinti de di kleinste fu Sranan erkende Marron-samenlevingen, namo wan paar honderd sma. Den libi hoofdzakelijk nanga middenloop fu Coppename Liba en ben hori dem eigi kulturele identiteit ondanks dem kleini grootte.',
      },
      founding: {
        nl: 'De Kwinti zijn nakomelingen van tot slaaf gemaakten die ontsnapten van Nederlandse plantages in de 17de en vroege 18de eeuw. Zij vestigden zich langs de Coppenamerivier, ver van de kust en van de grotere Marron-groepen. De Kwinti sloten nooit een formeel vredesverdrag met de koloniale autoriteiten en leefden daarmee buiten het systeem van erkende Marron-autonomie. Pas in de late 20ste eeuw kregen zij officiële erkenning van de Surinaamse staat.',
        en: 'The Kwinti are descendants of enslaved people who escaped Dutch plantations in the 17th and early 18th centuries. They settled along the Coppename River, far from the coast and from the larger Maroon groups. The Kwinti never concluded a formal peace treaty with the colonial authorities, existing outside the recognized framework of Maroon autonomy. Only in the late 20th century did they receive official recognition from the Surinamese state.',
        sr: 'Kwinti de naksama fu enslefs sma di ben ron wey fu Olondesi plantasi na 17de en vroeg 18de ieuwen. Den ben seti libi nanga Coppename Liba, fara fu di kosta en fu di groto Marron groepen. Kwinti no ben seti wan formeel frede-traktati nanga di koloniale otoreteti en den ben libi buiten di erkende kader fu Marron awtonemsi. Namo na di laat 20ste ieuwen den ben kisi officieel erkenning fu Sranan strati.',
      },
      history: {
        nl: 'De Kwinti leefden eeuwenlang in relatieve afzondering langs de Coppename. Door hun kleine aantallen en afgelegen ligging bleven zij grotendeels buiten de grote politieke conflicten die andere Marron-groepen troffen. De Binnenlandse Oorlog (1986–1992) bereikte het Kwinti-gebied nauwelijks. Hedendaagse druk komt voornamelijk van illegale goudwinning en houtkap in hun traditionele territoir, waartegen zij weinig juridische bescherming genieten.',
        en: 'The Kwinti lived for centuries in relative seclusion along the Coppename. Their small numbers and remote location kept them largely outside the major political conflicts that affected other Maroon groups. The Interior War (1986–1992) barely reached Kwinti territory. Contemporary pressure comes mainly from illegal gold mining and logging in their traditional territory, against which they have little legal protection.',
        sr: 'Kwinti ben libi desio ieuwen nanga relatieve afzondering nanga Coppename. Dem kleini getallen en ver lokatie ben hori dem grotendeels buiten di groto politikale konflikten di ben naki andere Marron groepen. Di Binnenlandse Oorlog (1986–1992) bijna no ben reiki Kwinti territorio. Huidig druk kom voornaamste fu illegale gowtu-olo werki en houtkap na dem traditionele territorio, waartegen dem abi weinig juridische bescherming.',
      },
      leadership: {
        nl: 'Heidoti heeft een kabiten als lokale leider. De Kwinti als geheel worden vertegenwoordigd door hun granman in betrekkingen met de Surinaamse overheid. Beslissingen worden genomen via de traditionele raadstructuren van de clan. De Kwinti-gemeenschap is actief in het verdedigen van hun grondrechten via regionale en internationale fora.',
        en: 'Heidoti has a kabiten as local leader. The Kwinti as a whole are represented by their granman in dealings with the Surinamese government. Decisions are made through the traditional council structures of the clan. The Kwinti community is active in defending their land rights through regional and international forums.',
        sr: 'Heidoti abi wan kabiten als lokale leider. Di Kwinti as geheel de representeerd doro dem granman na handelen nanga Sranan regering. Beslissingen de neem door di traditionele raadstructuren fu di clan. Kwinti kommetii de aktif na verdedigen fu dem gronrechten door regionale en internationale forums.',
      },
      challenges: {
        nl: 'De Kwinti zijn onevenredig kwetsbaar door hun kleine omvang. Goudmijnbouw en houtkap in hun traditionele teritoria bedreigen zowel het milieu als de culturele continuïteit. De bevolking is ernstig uitgedund door emigratie naar Paramaribo. Formele grondeigendomsrechten zijn niet vastgelegd, wat de gemeenschap juridisch weerloos maakt tegenover buitenstaanders die hun land gebruiken.',
        en: 'The Kwinti are disproportionately vulnerable due to their small size. Gold mining and logging in their traditional territories threaten both the environment and cultural continuity. The population has been severely depleted by emigration to Paramaribo. Formal land ownership rights are not codified, leaving the community legally defenseless against outsiders using their land.',
        sr: 'Kwinti de onevenredig kwetsbaar doro dem kleini grootte. Gowtu-olo werki en houtkap na dem traditionele territoria de bedreigen zowel di omgeving als kulturele kontinuïteit. Di bevolking de serieus uitgedund doro emigrasi go Paramaribo. Formele grondeigendomsrechten no de vastgelegd, die lef di kommetii juridisch weerloos nanga buitenlanders di gebruik dem grondoe.',
      },
    },
  },

  // ══ PAAMAKA (additional) ═════════════════════════════════════════════
  { id: 'atemsa', society: 'paamaka', granman: false, lat: 3.67, lng: -54.14,
    names: { nl: 'Atemsa', en: 'Atemsa', sr: 'Atemsa' },
    subtitles: { nl: 'Paamaka-dorp · Marowijne', en: 'Paamaka village · Marowijne', sr: 'Paamaka fowru · Marowijne' },
    river: 'Marowijne', district: 'Marowijne',
    sections: {
      intro: {
        nl: 'Atemsa is een Paamaka-nederzetting in Suriname, in het Pamaka area / Marowijne-gebied langs de Marowijne en haar zijrivieren. De Paamaka zijn een Marron-samenleving nauw verwant aan de Ndyuka, met wie zij de oostelijke riviergebieden van Suriname delen.',
        en: 'Atemsa is a Paamaka settlement in Suriname, in the Pamaka area / Marowijne area along the Marowijne and its tributaries. The Paamaka are a Maroon society closely related to the Ndyuka, with whom they share the eastern river territories of Suriname.',
        sr: 'Atemsa na wan Paamaka nederzetting na Sranan, na Pamaka area / Marowijne-gebiedo nanga Marowijne en dem zijtakken. Paamaka na wan Marron samenleving di nar nauw verwant nanga Ndyuka, nanga wie den shari di oostelijke libarivier-gebieden fu Sranan.',
      },
      founding: {
        nl: 'De Paamaka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van kustplantages in de 17de en 18de eeuw. In tegenstelling tot de Ndyuka sloten de Paamaka geen afzonderlijk vredesverdrag met de koloniale overheid, maar vielen zij aanvankelijk onder het Ndyuka-verdrag van 1760. In de loop der tijd ontwikkelden zij een eigen identiteit en nederzettingsgebied langs de Marowijne-regio. Atemsa is een van de Paamaka-gemeenschappen in dit uitgestrekte gebied.',
        en: 'The Paamaka are descendants of enslaved people who escaped coastal plantations in the 17th and 18th centuries. Unlike the Ndyuka, the Paamaka did not conclude a separate peace treaty with colonial authorities but initially fell under the Ndyuka treaty of 1760. Over time they developed their own identity and settlement area along the Marowijne region. Atemsa is one of the Paamaka communities in this extensive area.',
        sr: 'Paamaka de naksama fu enslefs sma di ben ron wey fu kosta-plantasi na 17de en 18de ieuwen. Andersom nanga Ndyuka, Paamaka no ben seti wan apart frede-traktati nanga koloniale otoreteti ma fosi ben fali ondro di Ndyuka traktati fu 1760. Nanga langa-tempi den ben ontwikkel dem eigi identiteit en nederzettingsgebiedo nanga Marowijne-regio. Atemsa na wan fu di Paamaka kommetiis na dis uitgestrekt gebiedo.',
      },
      history: {
        nl: 'De Paamaka leefden traditioneel langs de oevers van de Marowijne en haar zijrivieren, in een gebied dat zowel Surinaamse als Frans-Guyanees grondgebied beslaat. De grensligging heeft de Paamaka gevormd: zij onderhielden handels- en familierelaties aan beide zijden van de internationale grens. In de 20ste en 21ste eeuw werden Paamaka-gemeenschappen getroffen door goudmijnbouw, met name door het Merian-goudmijnproject, dat aanzienlijke impact had op hun leefgebied en levensonderhoud.',
        en: 'The Paamaka traditionally lived along the banks of the Marowijne and its tributaries, in an area spanning both Surinamese and French Guianese territory. The border location shaped the Paamaka: they maintained trade and family relations on both sides of the international boundary. In the 20th and 21st centuries Paamaka communities were affected by gold mining, particularly the Merian gold mine project, which had significant impact on their territory and livelihoods.',
        sr: 'Paamaka ben libi traditioneel nanga bengsis fu Marowijne en dem zijtakken, na wan gebiedo di streki nanga zowel Sranan als Frans-Guyanees grondoe. Di grenspositie ben formi Paamaka: den ben hori handels- en famirie-relasi na bede kanten fu di internationale grens. Na 20ste en 21ste ieuwen, Paamaka kommetiis ben naki doro gowtu-olo werki, nadehand doro di Merian gowtu-olo projekt, die ben abi sware invloed na dem territorio en leefonderhoud.',
      },
      leadership: {
        nl: 'Atemsa heeft een kabiten als dorpsleider. De Paamaka als geheel staan onder leiding van een granman, die hun belangen behartigt bij de Surinaamse staat en in internationale grondrechtenprocessen. De nabijheid van de grens met Frans-Guyana maakt bestuurlijke vraagstukken voor de Paamaka extra complex.',
        en: 'Atemsa has a kabiten as village leader. The Paamaka as a whole are led by a granman, who advocates their interests with the Surinamese state and in international land rights proceedings. The proximity of the border with French Guiana makes governance issues particularly complex for the Paamaka.',
        sr: 'Atemsa abi wan kabiten als fowru-leider. Paamaka als geheel de lei doro wan granman, die behart dem belangen nanga Sranan strati en na internationale gronrecht-processie. Di nabijheid fu di grens nanga Frans-Guyane meki bestuurskvraagstukken extra complex fu Paamaka.',
      },
      challenges: {
        nl: 'De Paamaka staan voor aanzienlijke uitdagingen: de goudmijnbouw in en rond hun territoir — zowel kleinschalige als industriële activiteit — heeft de rivieren vervuild en de leefomgeving aangetast. De impact van het Merian-project werd gedocumenteerd in meerdere rapporten. Grondrechtenerkenning blijft onvolledig. Emigratie naar Paramaribo en Frans-Guyana dunnen de dorpsbevolking uit.',
        en: 'The Paamaka face significant challenges: gold mining in and around their territory — both small-scale and industrial — has polluted rivers and damaged the living environment. The impact of the Merian project was documented in multiple reports. Land rights recognition remains incomplete. Emigration to Paramaribo and French Guiana is thinning village populations.',
        sr: 'Paamaka fesi sware uitdagingen: gowtu-olo werki na en rondoro dem territorio — zowel pikin-skala als industrieel — ben poisi libas en ben kasi di leefomgeving. Di impact fu di Merian projekt ben gedocumenteerd na furu rapporten. Gronrechten-erkenning de ete onvolledig. Emigrasi go Paramaribo en Frans-Guyane de verdunne di fowru-bevolking.',
      },
    },
  },
  { id: 'badaa_tabiki', society: 'paamaka', granman: false, lat: 3.69, lng: -54.12,
    names: { nl: 'Badaa Tabiki', en: 'Badaa Tabiki', sr: 'Badaa Tabiki' },
    subtitles: { nl: 'Paamaka-dorp · Marowijne', en: 'Paamaka village · Marowijne', sr: 'Paamaka fowru · Marowijne' },
    river: 'Marowijne', district: 'Marowijne',
    sections: {
      intro: {
        nl: 'Badaa Tabiki is een Paamaka-nederzetting in Suriname, in het Pamaka area / Marowijne-gebied langs de Marowijne en haar zijrivieren. De Paamaka zijn een Marron-samenleving nauw verwant aan de Ndyuka, met wie zij de oostelijke riviergebieden van Suriname delen.',
        en: 'Badaa Tabiki is a Paamaka settlement in Suriname, in the Pamaka area / Marowijne area along the Marowijne and its tributaries. The Paamaka are a Maroon society closely related to the Ndyuka, with whom they share the eastern river territories of Suriname.',
        sr: 'Badaa Tabiki na wan Paamaka nederzetting na Sranan, na Pamaka area / Marowijne-gebiedo nanga Marowijne en dem zijtakken. Paamaka na wan Marron samenleving di nar nauw verwant nanga Ndyuka, nanga wie den shari di oostelijke libarivier-gebieden fu Sranan.',
      },
      founding: {
        nl: 'De Paamaka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van kustplantages in de 17de en 18de eeuw. In tegenstelling tot de Ndyuka sloten de Paamaka geen afzonderlijk vredesverdrag met de koloniale overheid, maar vielen zij aanvankelijk onder het Ndyuka-verdrag van 1760. In de loop der tijd ontwikkelden zij een eigen identiteit en nederzettingsgebied langs de Marowijne-regio. Badaa Tabiki is een van de Paamaka-gemeenschappen in dit uitgestrekte gebied.',
        en: 'The Paamaka are descendants of enslaved people who escaped coastal plantations in the 17th and 18th centuries. Unlike the Ndyuka, the Paamaka did not conclude a separate peace treaty with colonial authorities but initially fell under the Ndyuka treaty of 1760. Over time they developed their own identity and settlement area along the Marowijne region. Badaa Tabiki is one of the Paamaka communities in this extensive area.',
        sr: 'Paamaka de naksama fu enslefs sma di ben ron wey fu kosta-plantasi na 17de en 18de ieuwen. Andersom nanga Ndyuka, Paamaka no ben seti wan apart frede-traktati nanga koloniale otoreteti ma fosi ben fali ondro di Ndyuka traktati fu 1760. Nanga langa-tempi den ben ontwikkel dem eigi identiteit en nederzettingsgebiedo nanga Marowijne-regio. Badaa Tabiki na wan fu di Paamaka kommetiis na dis uitgestrekt gebiedo.',
      },
      history: {
        nl: 'De Paamaka leefden traditioneel langs de oevers van de Marowijne en haar zijrivieren, in een gebied dat zowel Surinaamse als Frans-Guyanees grondgebied beslaat. De grensligging heeft de Paamaka gevormd: zij onderhielden handels- en familierelaties aan beide zijden van de internationale grens. In de 20ste en 21ste eeuw werden Paamaka-gemeenschappen getroffen door goudmijnbouw, met name door het Merian-goudmijnproject, dat aanzienlijke impact had op hun leefgebied en levensonderhoud.',
        en: 'The Paamaka traditionally lived along the banks of the Marowijne and its tributaries, in an area spanning both Surinamese and French Guianese territory. The border location shaped the Paamaka: they maintained trade and family relations on both sides of the international boundary. In the 20th and 21st centuries Paamaka communities were affected by gold mining, particularly the Merian gold mine project, which had significant impact on their territory and livelihoods.',
        sr: 'Paamaka ben libi traditioneel nanga bengsis fu Marowijne en dem zijtakken, na wan gebiedo di streki nanga zowel Sranan als Frans-Guyanees grondoe. Di grenspositie ben formi Paamaka: den ben hori handels- en famirie-relasi na bede kanten fu di internationale grens. Na 20ste en 21ste ieuwen, Paamaka kommetiis ben naki doro gowtu-olo werki, nadehand doro di Merian gowtu-olo projekt, die ben abi sware invloed na dem territorio en leefonderhoud.',
      },
      leadership: {
        nl: 'Badaa Tabiki heeft een kabiten als dorpsleider. De Paamaka als geheel staan onder leiding van een granman, die hun belangen behartigt bij de Surinaamse staat en in internationale grondrechtenprocessen. De nabijheid van de grens met Frans-Guyana maakt bestuurlijke vraagstukken voor de Paamaka extra complex.',
        en: 'Badaa Tabiki has a kabiten as village leader. The Paamaka as a whole are led by a granman, who advocates their interests with the Surinamese state and in international land rights proceedings. The proximity of the border with French Guiana makes governance issues particularly complex for the Paamaka.',
        sr: 'Badaa Tabiki abi wan kabiten als fowru-leider. Paamaka als geheel de lei doro wan granman, die behart dem belangen nanga Sranan strati en na internationale gronrecht-processie. Di nabijheid fu di grens nanga Frans-Guyane meki bestuurskvraagstukken extra complex fu Paamaka.',
      },
      challenges: {
        nl: 'De Paamaka staan voor aanzienlijke uitdagingen: de goudmijnbouw in en rond hun territoir — zowel kleinschalige als industriële activiteit — heeft de rivieren vervuild en de leefomgeving aangetast. De impact van het Merian-project werd gedocumenteerd in meerdere rapporten. Grondrechtenerkenning blijft onvolledig. Emigratie naar Paramaribo en Frans-Guyana dunnen de dorpsbevolking uit.',
        en: 'The Paamaka face significant challenges: gold mining in and around their territory — both small-scale and industrial — has polluted rivers and damaged the living environment. The impact of the Merian project was documented in multiple reports. Land rights recognition remains incomplete. Emigration to Paramaribo and French Guiana is thinning village populations.',
        sr: 'Paamaka fesi sware uitdagingen: gowtu-olo werki na en rondoro dem territorio — zowel pikin-skala als industrieel — ben poisi libas en ben kasi di leefomgeving. Di impact fu di Merian projekt ben gedocumenteerd na furu rapporten. Gronrechten-erkenning de ete onvolledig. Emigrasi go Paramaribo en Frans-Guyane de verdunne di fowru-bevolking.',
      },
    },
  },
  { id: 'kiki_mofo', society: 'paamaka', granman: false, lat: 3.65, lng: -54.16,
    names: { nl: 'Kiki Mofo', en: 'Kiki Mofo', sr: 'Kiki Mofo' },
    subtitles: { nl: 'Paamaka-dorp · Marowijne', en: 'Paamaka village · Marowijne', sr: 'Paamaka fowru · Marowijne' },
    river: 'Marowijne', district: 'Marowijne',
    sections: {
      intro: {
        nl: 'Kiki Mofo is een Paamaka-nederzetting in Suriname, in het Pamaka area / Marowijne-gebied langs de Marowijne en haar zijrivieren. De Paamaka zijn een Marron-samenleving nauw verwant aan de Ndyuka, met wie zij de oostelijke riviergebieden van Suriname delen.',
        en: 'Kiki Mofo is a Paamaka settlement in Suriname, in the Pamaka area / Marowijne area along the Marowijne and its tributaries. The Paamaka are a Maroon society closely related to the Ndyuka, with whom they share the eastern river territories of Suriname.',
        sr: 'Kiki Mofo na wan Paamaka nederzetting na Sranan, na Pamaka area / Marowijne-gebiedo nanga Marowijne en dem zijtakken. Paamaka na wan Marron samenleving di nar nauw verwant nanga Ndyuka, nanga wie den shari di oostelijke libarivier-gebieden fu Sranan.',
      },
      founding: {
        nl: 'De Paamaka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van kustplantages in de 17de en 18de eeuw. In tegenstelling tot de Ndyuka sloten de Paamaka geen afzonderlijk vredesverdrag met de koloniale overheid, maar vielen zij aanvankelijk onder het Ndyuka-verdrag van 1760. In de loop der tijd ontwikkelden zij een eigen identiteit en nederzettingsgebied langs de Marowijne-regio. Kiki Mofo is een van de Paamaka-gemeenschappen in dit uitgestrekte gebied.',
        en: 'The Paamaka are descendants of enslaved people who escaped coastal plantations in the 17th and 18th centuries. Unlike the Ndyuka, the Paamaka did not conclude a separate peace treaty with colonial authorities but initially fell under the Ndyuka treaty of 1760. Over time they developed their own identity and settlement area along the Marowijne region. Kiki Mofo is one of the Paamaka communities in this extensive area.',
        sr: 'Paamaka de naksama fu enslefs sma di ben ron wey fu kosta-plantasi na 17de en 18de ieuwen. Andersom nanga Ndyuka, Paamaka no ben seti wan apart frede-traktati nanga koloniale otoreteti ma fosi ben fali ondro di Ndyuka traktati fu 1760. Nanga langa-tempi den ben ontwikkel dem eigi identiteit en nederzettingsgebiedo nanga Marowijne-regio. Kiki Mofo na wan fu di Paamaka kommetiis na dis uitgestrekt gebiedo.',
      },
      history: {
        nl: 'De Paamaka leefden traditioneel langs de oevers van de Marowijne en haar zijrivieren, in een gebied dat zowel Surinaamse als Frans-Guyanees grondgebied beslaat. De grensligging heeft de Paamaka gevormd: zij onderhielden handels- en familierelaties aan beide zijden van de internationale grens. In de 20ste en 21ste eeuw werden Paamaka-gemeenschappen getroffen door goudmijnbouw, met name door het Merian-goudmijnproject, dat aanzienlijke impact had op hun leefgebied en levensonderhoud.',
        en: 'The Paamaka traditionally lived along the banks of the Marowijne and its tributaries, in an area spanning both Surinamese and French Guianese territory. The border location shaped the Paamaka: they maintained trade and family relations on both sides of the international boundary. In the 20th and 21st centuries Paamaka communities were affected by gold mining, particularly the Merian gold mine project, which had significant impact on their territory and livelihoods.',
        sr: 'Paamaka ben libi traditioneel nanga bengsis fu Marowijne en dem zijtakken, na wan gebiedo di streki nanga zowel Sranan als Frans-Guyanees grondoe. Di grenspositie ben formi Paamaka: den ben hori handels- en famirie-relasi na bede kanten fu di internationale grens. Na 20ste en 21ste ieuwen, Paamaka kommetiis ben naki doro gowtu-olo werki, nadehand doro di Merian gowtu-olo projekt, die ben abi sware invloed na dem territorio en leefonderhoud.',
      },
      leadership: {
        nl: 'Kiki Mofo heeft een kabiten als dorpsleider. De Paamaka als geheel staan onder leiding van een granman, die hun belangen behartigt bij de Surinaamse staat en in internationale grondrechtenprocessen. De nabijheid van de grens met Frans-Guyana maakt bestuurlijke vraagstukken voor de Paamaka extra complex.',
        en: 'Kiki Mofo has a kabiten as village leader. The Paamaka as a whole are led by a granman, who advocates their interests with the Surinamese state and in international land rights proceedings. The proximity of the border with French Guiana makes governance issues particularly complex for the Paamaka.',
        sr: 'Kiki Mofo abi wan kabiten als fowru-leider. Paamaka als geheel de lei doro wan granman, die behart dem belangen nanga Sranan strati en na internationale gronrecht-processie. Di nabijheid fu di grens nanga Frans-Guyane meki bestuurskvraagstukken extra complex fu Paamaka.',
      },
      challenges: {
        nl: 'De Paamaka staan voor aanzienlijke uitdagingen: de goudmijnbouw in en rond hun territoir — zowel kleinschalige als industriële activiteit — heeft de rivieren vervuild en de leefomgeving aangetast. De impact van het Merian-project werd gedocumenteerd in meerdere rapporten. Grondrechtenerkenning blijft onvolledig. Emigratie naar Paramaribo en Frans-Guyana dunnen de dorpsbevolking uit.',
        en: 'The Paamaka face significant challenges: gold mining in and around their territory — both small-scale and industrial — has polluted rivers and damaged the living environment. The impact of the Merian project was documented in multiple reports. Land rights recognition remains incomplete. Emigration to Paramaribo and French Guiana is thinning village populations.',
        sr: 'Paamaka fesi sware uitdagingen: gowtu-olo werki na en rondoro dem territorio — zowel pikin-skala als industrieel — ben poisi libas en ben kasi di leefomgeving. Di impact fu di Merian projekt ben gedocumenteerd na furu rapporten. Gronrechten-erkenning de ete onvolledig. Emigrasi go Paramaribo en Frans-Guyane de verdunne di fowru-bevolking.',
      },
    },
  },
  { id: 'loka_loka', society: 'paamaka', granman: false, lat: 3.63, lng: -54.18,
    names: { nl: 'Loka Loka', en: 'Loka Loka', sr: 'Loka Loka' },
    subtitles: { nl: 'Paamaka-dorp · Marowijne', en: 'Paamaka village · Marowijne', sr: 'Paamaka fowru · Marowijne' },
    river: 'Marowijne', district: 'Marowijne',
    sections: {
      intro: {
        nl: 'Loka Loka is een Paamaka-nederzetting in Suriname, in het Pamaka area / Marowijne-gebied langs de Marowijne en haar zijrivieren. De Paamaka zijn een Marron-samenleving nauw verwant aan de Ndyuka, met wie zij de oostelijke riviergebieden van Suriname delen.',
        en: 'Loka Loka is a Paamaka settlement in Suriname, in the Pamaka area / Marowijne area along the Marowijne and its tributaries. The Paamaka are a Maroon society closely related to the Ndyuka, with whom they share the eastern river territories of Suriname.',
        sr: 'Loka Loka na wan Paamaka nederzetting na Sranan, na Pamaka area / Marowijne-gebiedo nanga Marowijne en dem zijtakken. Paamaka na wan Marron samenleving di nar nauw verwant nanga Ndyuka, nanga wie den shari di oostelijke libarivier-gebieden fu Sranan.',
      },
      founding: {
        nl: 'De Paamaka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van kustplantages in de 17de en 18de eeuw. In tegenstelling tot de Ndyuka sloten de Paamaka geen afzonderlijk vredesverdrag met de koloniale overheid, maar vielen zij aanvankelijk onder het Ndyuka-verdrag van 1760. In de loop der tijd ontwikkelden zij een eigen identiteit en nederzettingsgebied langs de Marowijne-regio. Loka Loka is een van de Paamaka-gemeenschappen in dit uitgestrekte gebied.',
        en: 'The Paamaka are descendants of enslaved people who escaped coastal plantations in the 17th and 18th centuries. Unlike the Ndyuka, the Paamaka did not conclude a separate peace treaty with colonial authorities but initially fell under the Ndyuka treaty of 1760. Over time they developed their own identity and settlement area along the Marowijne region. Loka Loka is one of the Paamaka communities in this extensive area.',
        sr: 'Paamaka de naksama fu enslefs sma di ben ron wey fu kosta-plantasi na 17de en 18de ieuwen. Andersom nanga Ndyuka, Paamaka no ben seti wan apart frede-traktati nanga koloniale otoreteti ma fosi ben fali ondro di Ndyuka traktati fu 1760. Nanga langa-tempi den ben ontwikkel dem eigi identiteit en nederzettingsgebiedo nanga Marowijne-regio. Loka Loka na wan fu di Paamaka kommetiis na dis uitgestrekt gebiedo.',
      },
      history: {
        nl: 'De Paamaka leefden traditioneel langs de oevers van de Marowijne en haar zijrivieren, in een gebied dat zowel Surinaamse als Frans-Guyanees grondgebied beslaat. De grensligging heeft de Paamaka gevormd: zij onderhielden handels- en familierelaties aan beide zijden van de internationale grens. In de 20ste en 21ste eeuw werden Paamaka-gemeenschappen getroffen door goudmijnbouw, met name door het Merian-goudmijnproject, dat aanzienlijke impact had op hun leefgebied en levensonderhoud.',
        en: 'The Paamaka traditionally lived along the banks of the Marowijne and its tributaries, in an area spanning both Surinamese and French Guianese territory. The border location shaped the Paamaka: they maintained trade and family relations on both sides of the international boundary. In the 20th and 21st centuries Paamaka communities were affected by gold mining, particularly the Merian gold mine project, which had significant impact on their territory and livelihoods.',
        sr: 'Paamaka ben libi traditioneel nanga bengsis fu Marowijne en dem zijtakken, na wan gebiedo di streki nanga zowel Sranan als Frans-Guyanees grondoe. Di grenspositie ben formi Paamaka: den ben hori handels- en famirie-relasi na bede kanten fu di internationale grens. Na 20ste en 21ste ieuwen, Paamaka kommetiis ben naki doro gowtu-olo werki, nadehand doro di Merian gowtu-olo projekt, die ben abi sware invloed na dem territorio en leefonderhoud.',
      },
      leadership: {
        nl: 'Loka Loka heeft een kabiten als dorpsleider. De Paamaka als geheel staan onder leiding van een granman, die hun belangen behartigt bij de Surinaamse staat en in internationale grondrechtenprocessen. De nabijheid van de grens met Frans-Guyana maakt bestuurlijke vraagstukken voor de Paamaka extra complex.',
        en: 'Loka Loka has a kabiten as village leader. The Paamaka as a whole are led by a granman, who advocates their interests with the Surinamese state and in international land rights proceedings. The proximity of the border with French Guiana makes governance issues particularly complex for the Paamaka.',
        sr: 'Loka Loka abi wan kabiten als fowru-leider. Paamaka als geheel de lei doro wan granman, die behart dem belangen nanga Sranan strati en na internationale gronrecht-processie. Di nabijheid fu di grens nanga Frans-Guyane meki bestuurskvraagstukken extra complex fu Paamaka.',
      },
      challenges: {
        nl: 'De Paamaka staan voor aanzienlijke uitdagingen: de goudmijnbouw in en rond hun territoir — zowel kleinschalige als industriële activiteit — heeft de rivieren vervuild en de leefomgeving aangetast. De impact van het Merian-project werd gedocumenteerd in meerdere rapporten. Grondrechtenerkenning blijft onvolledig. Emigratie naar Paramaribo en Frans-Guyana dunnen de dorpsbevolking uit.',
        en: 'The Paamaka face significant challenges: gold mining in and around their territory — both small-scale and industrial — has polluted rivers and damaged the living environment. The impact of the Merian project was documented in multiple reports. Land rights recognition remains incomplete. Emigration to Paramaribo and French Guiana is thinning village populations.',
        sr: 'Paamaka fesi sware uitdagingen: gowtu-olo werki na en rondoro dem territorio — zowel pikin-skala als industrieel — ben poisi libas en ben kasi di leefomgeving. Di impact fu di Merian projekt ben gedocumenteerd na furu rapporten. Gronrechten-erkenning de ete onvolledig. Emigrasi go Paramaribo en Frans-Guyane de verdunne di fowru-bevolking.',
      },
    },
  },
  { id: 'nason', society: 'paamaka', granman: false, lat: 3.66, lng: -54.15,
    names: { nl: 'Nason', en: 'Nason', sr: 'Nason' },
    subtitles: { nl: 'Paamaka-dorp · Marowijne', en: 'Paamaka village · Marowijne', sr: 'Paamaka fowru · Marowijne' },
    river: 'Marowijne', district: 'Marowijne',
    sections: {
      intro: {
        nl: 'Nason is een Paamaka-nederzetting in Suriname, in het Pamaka area / Marowijne-gebied langs de Marowijne en haar zijrivieren. De Paamaka zijn een Marron-samenleving nauw verwant aan de Ndyuka, met wie zij de oostelijke riviergebieden van Suriname delen.',
        en: 'Nason is a Paamaka settlement in Suriname, in the Pamaka area / Marowijne area along the Marowijne and its tributaries. The Paamaka are a Maroon society closely related to the Ndyuka, with whom they share the eastern river territories of Suriname.',
        sr: 'Nason na wan Paamaka nederzetting na Sranan, na Pamaka area / Marowijne-gebiedo nanga Marowijne en dem zijtakken. Paamaka na wan Marron samenleving di nar nauw verwant nanga Ndyuka, nanga wie den shari di oostelijke libarivier-gebieden fu Sranan.',
      },
      founding: {
        nl: 'De Paamaka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van kustplantages in de 17de en 18de eeuw. In tegenstelling tot de Ndyuka sloten de Paamaka geen afzonderlijk vredesverdrag met de koloniale overheid, maar vielen zij aanvankelijk onder het Ndyuka-verdrag van 1760. In de loop der tijd ontwikkelden zij een eigen identiteit en nederzettingsgebied langs de Marowijne-regio. Nason is een van de Paamaka-gemeenschappen in dit uitgestrekte gebied.',
        en: 'The Paamaka are descendants of enslaved people who escaped coastal plantations in the 17th and 18th centuries. Unlike the Ndyuka, the Paamaka did not conclude a separate peace treaty with colonial authorities but initially fell under the Ndyuka treaty of 1760. Over time they developed their own identity and settlement area along the Marowijne region. Nason is one of the Paamaka communities in this extensive area.',
        sr: 'Paamaka de naksama fu enslefs sma di ben ron wey fu kosta-plantasi na 17de en 18de ieuwen. Andersom nanga Ndyuka, Paamaka no ben seti wan apart frede-traktati nanga koloniale otoreteti ma fosi ben fali ondro di Ndyuka traktati fu 1760. Nanga langa-tempi den ben ontwikkel dem eigi identiteit en nederzettingsgebiedo nanga Marowijne-regio. Nason na wan fu di Paamaka kommetiis na dis uitgestrekt gebiedo.',
      },
      history: {
        nl: 'De Paamaka leefden traditioneel langs de oevers van de Marowijne en haar zijrivieren, in een gebied dat zowel Surinaamse als Frans-Guyanees grondgebied beslaat. De grensligging heeft de Paamaka gevormd: zij onderhielden handels- en familierelaties aan beide zijden van de internationale grens. In de 20ste en 21ste eeuw werden Paamaka-gemeenschappen getroffen door goudmijnbouw, met name door het Merian-goudmijnproject, dat aanzienlijke impact had op hun leefgebied en levensonderhoud.',
        en: 'The Paamaka traditionally lived along the banks of the Marowijne and its tributaries, in an area spanning both Surinamese and French Guianese territory. The border location shaped the Paamaka: they maintained trade and family relations on both sides of the international boundary. In the 20th and 21st centuries Paamaka communities were affected by gold mining, particularly the Merian gold mine project, which had significant impact on their territory and livelihoods.',
        sr: 'Paamaka ben libi traditioneel nanga bengsis fu Marowijne en dem zijtakken, na wan gebiedo di streki nanga zowel Sranan als Frans-Guyanees grondoe. Di grenspositie ben formi Paamaka: den ben hori handels- en famirie-relasi na bede kanten fu di internationale grens. Na 20ste en 21ste ieuwen, Paamaka kommetiis ben naki doro gowtu-olo werki, nadehand doro di Merian gowtu-olo projekt, die ben abi sware invloed na dem territorio en leefonderhoud.',
      },
      leadership: {
        nl: 'Nason heeft een kabiten als dorpsleider. De Paamaka als geheel staan onder leiding van een granman, die hun belangen behartigt bij de Surinaamse staat en in internationale grondrechtenprocessen. De nabijheid van de grens met Frans-Guyana maakt bestuurlijke vraagstukken voor de Paamaka extra complex.',
        en: 'Nason has a kabiten as village leader. The Paamaka as a whole are led by a granman, who advocates their interests with the Surinamese state and in international land rights proceedings. The proximity of the border with French Guiana makes governance issues particularly complex for the Paamaka.',
        sr: 'Nason abi wan kabiten als fowru-leider. Paamaka als geheel de lei doro wan granman, die behart dem belangen nanga Sranan strati en na internationale gronrecht-processie. Di nabijheid fu di grens nanga Frans-Guyane meki bestuurskvraagstukken extra complex fu Paamaka.',
      },
      challenges: {
        nl: 'De Paamaka staan voor aanzienlijke uitdagingen: de goudmijnbouw in en rond hun territoir — zowel kleinschalige als industriële activiteit — heeft de rivieren vervuild en de leefomgeving aangetast. De impact van het Merian-project werd gedocumenteerd in meerdere rapporten. Grondrechtenerkenning blijft onvolledig. Emigratie naar Paramaribo en Frans-Guyana dunnen de dorpsbevolking uit.',
        en: 'The Paamaka face significant challenges: gold mining in and around their territory — both small-scale and industrial — has polluted rivers and damaged the living environment. The impact of the Merian project was documented in multiple reports. Land rights recognition remains incomplete. Emigration to Paramaribo and French Guiana is thinning village populations.',
        sr: 'Paamaka fesi sware uitdagingen: gowtu-olo werki na en rondoro dem territorio — zowel pikin-skala als industrieel — ben poisi libas en ben kasi di leefomgeving. Di impact fu di Merian projekt ben gedocumenteerd na furu rapporten. Gronrechten-erkenning de ete onvolledig. Emigrasi go Paramaribo en Frans-Guyane de verdunne di fowru-bevolking.',
      },
    },
  },
  { id: 'pakira_tabiki', society: 'paamaka', granman: false, lat: 3.64, lng: -54.17,
    names: { nl: 'Pakira Tabiki', en: 'Pakira Tabiki', sr: 'Pakira Tabiki' },
    subtitles: { nl: 'Paamaka-dorp · Marowijne', en: 'Paamaka village · Marowijne', sr: 'Paamaka fowru · Marowijne' },
    river: 'Marowijne', district: 'Marowijne',
    sections: {
      intro: {
        nl: 'Pakira Tabiki is een Paamaka-nederzetting in Suriname, in het Pamaka area / Marowijne-gebied langs de Marowijne en haar zijrivieren. De Paamaka zijn een Marron-samenleving nauw verwant aan de Ndyuka, met wie zij de oostelijke riviergebieden van Suriname delen.',
        en: 'Pakira Tabiki is a Paamaka settlement in Suriname, in the Pamaka area / Marowijne area along the Marowijne and its tributaries. The Paamaka are a Maroon society closely related to the Ndyuka, with whom they share the eastern river territories of Suriname.',
        sr: 'Pakira Tabiki na wan Paamaka nederzetting na Sranan, na Pamaka area / Marowijne-gebiedo nanga Marowijne en dem zijtakken. Paamaka na wan Marron samenleving di nar nauw verwant nanga Ndyuka, nanga wie den shari di oostelijke libarivier-gebieden fu Sranan.',
      },
      founding: {
        nl: 'De Paamaka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van kustplantages in de 17de en 18de eeuw. In tegenstelling tot de Ndyuka sloten de Paamaka geen afzonderlijk vredesverdrag met de koloniale overheid, maar vielen zij aanvankelijk onder het Ndyuka-verdrag van 1760. In de loop der tijd ontwikkelden zij een eigen identiteit en nederzettingsgebied langs de Marowijne-regio. Pakira Tabiki is een van de Paamaka-gemeenschappen in dit uitgestrekte gebied.',
        en: 'The Paamaka are descendants of enslaved people who escaped coastal plantations in the 17th and 18th centuries. Unlike the Ndyuka, the Paamaka did not conclude a separate peace treaty with colonial authorities but initially fell under the Ndyuka treaty of 1760. Over time they developed their own identity and settlement area along the Marowijne region. Pakira Tabiki is one of the Paamaka communities in this extensive area.',
        sr: 'Paamaka de naksama fu enslefs sma di ben ron wey fu kosta-plantasi na 17de en 18de ieuwen. Andersom nanga Ndyuka, Paamaka no ben seti wan apart frede-traktati nanga koloniale otoreteti ma fosi ben fali ondro di Ndyuka traktati fu 1760. Nanga langa-tempi den ben ontwikkel dem eigi identiteit en nederzettingsgebiedo nanga Marowijne-regio. Pakira Tabiki na wan fu di Paamaka kommetiis na dis uitgestrekt gebiedo.',
      },
      history: {
        nl: 'De Paamaka leefden traditioneel langs de oevers van de Marowijne en haar zijrivieren, in een gebied dat zowel Surinaamse als Frans-Guyanees grondgebied beslaat. De grensligging heeft de Paamaka gevormd: zij onderhielden handels- en familierelaties aan beide zijden van de internationale grens. In de 20ste en 21ste eeuw werden Paamaka-gemeenschappen getroffen door goudmijnbouw, met name door het Merian-goudmijnproject, dat aanzienlijke impact had op hun leefgebied en levensonderhoud.',
        en: 'The Paamaka traditionally lived along the banks of the Marowijne and its tributaries, in an area spanning both Surinamese and French Guianese territory. The border location shaped the Paamaka: they maintained trade and family relations on both sides of the international boundary. In the 20th and 21st centuries Paamaka communities were affected by gold mining, particularly the Merian gold mine project, which had significant impact on their territory and livelihoods.',
        sr: 'Paamaka ben libi traditioneel nanga bengsis fu Marowijne en dem zijtakken, na wan gebiedo di streki nanga zowel Sranan als Frans-Guyanees grondoe. Di grenspositie ben formi Paamaka: den ben hori handels- en famirie-relasi na bede kanten fu di internationale grens. Na 20ste en 21ste ieuwen, Paamaka kommetiis ben naki doro gowtu-olo werki, nadehand doro di Merian gowtu-olo projekt, die ben abi sware invloed na dem territorio en leefonderhoud.',
      },
      leadership: {
        nl: 'Pakira Tabiki heeft een kabiten als dorpsleider. De Paamaka als geheel staan onder leiding van een granman, die hun belangen behartigt bij de Surinaamse staat en in internationale grondrechtenprocessen. De nabijheid van de grens met Frans-Guyana maakt bestuurlijke vraagstukken voor de Paamaka extra complex.',
        en: 'Pakira Tabiki has a kabiten as village leader. The Paamaka as a whole are led by a granman, who advocates their interests with the Surinamese state and in international land rights proceedings. The proximity of the border with French Guiana makes governance issues particularly complex for the Paamaka.',
        sr: 'Pakira Tabiki abi wan kabiten als fowru-leider. Paamaka als geheel de lei doro wan granman, die behart dem belangen nanga Sranan strati en na internationale gronrecht-processie. Di nabijheid fu di grens nanga Frans-Guyane meki bestuurskvraagstukken extra complex fu Paamaka.',
      },
      challenges: {
        nl: 'De Paamaka staan voor aanzienlijke uitdagingen: de goudmijnbouw in en rond hun territoir — zowel kleinschalige als industriële activiteit — heeft de rivieren vervuild en de leefomgeving aangetast. De impact van het Merian-project werd gedocumenteerd in meerdere rapporten. Grondrechtenerkenning blijft onvolledig. Emigratie naar Paramaribo en Frans-Guyana dunnen de dorpsbevolking uit.',
        en: 'The Paamaka face significant challenges: gold mining in and around their territory — both small-scale and industrial — has polluted rivers and damaged the living environment. The impact of the Merian project was documented in multiple reports. Land rights recognition remains incomplete. Emigration to Paramaribo and French Guiana is thinning village populations.',
        sr: 'Paamaka fesi sware uitdagingen: gowtu-olo werki na en rondoro dem territorio — zowel pikin-skala als industrieel — ben poisi libas en ben kasi di leefomgeving. Di impact fu di Merian projekt ben gedocumenteerd na furu rapporten. Gronrechten-erkenning de ete onvolledig. Emigrasi go Paramaribo en Frans-Guyane de verdunne di fowru-bevolking.',
      },
    },
  },
  { id: 'skin_tabiki', society: 'paamaka', granman: false, lat: 3.62, lng: -54.19,
    names: { nl: 'Skin Tabiki', en: 'Skin Tabiki', sr: 'Skin Tabiki' },
    subtitles: { nl: 'Paamaka-dorp · Marowijne', en: 'Paamaka village · Marowijne', sr: 'Paamaka fowru · Marowijne' },
    river: 'Marowijne', district: 'Marowijne',
    sections: {
      intro: {
        nl: 'Skin Tabiki is een Paamaka-nederzetting in Suriname, in het Pamaka area / Marowijne-gebied langs de Marowijne en haar zijrivieren. De Paamaka zijn een Marron-samenleving nauw verwant aan de Ndyuka, met wie zij de oostelijke riviergebieden van Suriname delen.',
        en: 'Skin Tabiki is a Paamaka settlement in Suriname, in the Pamaka area / Marowijne area along the Marowijne and its tributaries. The Paamaka are a Maroon society closely related to the Ndyuka, with whom they share the eastern river territories of Suriname.',
        sr: 'Skin Tabiki na wan Paamaka nederzetting na Sranan, na Pamaka area / Marowijne-gebiedo nanga Marowijne en dem zijtakken. Paamaka na wan Marron samenleving di nar nauw verwant nanga Ndyuka, nanga wie den shari di oostelijke libarivier-gebieden fu Sranan.',
      },
      founding: {
        nl: 'De Paamaka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van kustplantages in de 17de en 18de eeuw. In tegenstelling tot de Ndyuka sloten de Paamaka geen afzonderlijk vredesverdrag met de koloniale overheid, maar vielen zij aanvankelijk onder het Ndyuka-verdrag van 1760. In de loop der tijd ontwikkelden zij een eigen identiteit en nederzettingsgebied langs de Marowijne-regio. Skin Tabiki is een van de Paamaka-gemeenschappen in dit uitgestrekte gebied.',
        en: 'The Paamaka are descendants of enslaved people who escaped coastal plantations in the 17th and 18th centuries. Unlike the Ndyuka, the Paamaka did not conclude a separate peace treaty with colonial authorities but initially fell under the Ndyuka treaty of 1760. Over time they developed their own identity and settlement area along the Marowijne region. Skin Tabiki is one of the Paamaka communities in this extensive area.',
        sr: 'Paamaka de naksama fu enslefs sma di ben ron wey fu kosta-plantasi na 17de en 18de ieuwen. Andersom nanga Ndyuka, Paamaka no ben seti wan apart frede-traktati nanga koloniale otoreteti ma fosi ben fali ondro di Ndyuka traktati fu 1760. Nanga langa-tempi den ben ontwikkel dem eigi identiteit en nederzettingsgebiedo nanga Marowijne-regio. Skin Tabiki na wan fu di Paamaka kommetiis na dis uitgestrekt gebiedo.',
      },
      history: {
        nl: 'De Paamaka leefden traditioneel langs de oevers van de Marowijne en haar zijrivieren, in een gebied dat zowel Surinaamse als Frans-Guyanees grondgebied beslaat. De grensligging heeft de Paamaka gevormd: zij onderhielden handels- en familierelaties aan beide zijden van de internationale grens. In de 20ste en 21ste eeuw werden Paamaka-gemeenschappen getroffen door goudmijnbouw, met name door het Merian-goudmijnproject, dat aanzienlijke impact had op hun leefgebied en levensonderhoud.',
        en: 'The Paamaka traditionally lived along the banks of the Marowijne and its tributaries, in an area spanning both Surinamese and French Guianese territory. The border location shaped the Paamaka: they maintained trade and family relations on both sides of the international boundary. In the 20th and 21st centuries Paamaka communities were affected by gold mining, particularly the Merian gold mine project, which had significant impact on their territory and livelihoods.',
        sr: 'Paamaka ben libi traditioneel nanga bengsis fu Marowijne en dem zijtakken, na wan gebiedo di streki nanga zowel Sranan als Frans-Guyanees grondoe. Di grenspositie ben formi Paamaka: den ben hori handels- en famirie-relasi na bede kanten fu di internationale grens. Na 20ste en 21ste ieuwen, Paamaka kommetiis ben naki doro gowtu-olo werki, nadehand doro di Merian gowtu-olo projekt, die ben abi sware invloed na dem territorio en leefonderhoud.',
      },
      leadership: {
        nl: 'Skin Tabiki heeft een kabiten als dorpsleider. De Paamaka als geheel staan onder leiding van een granman, die hun belangen behartigt bij de Surinaamse staat en in internationale grondrechtenprocessen. De nabijheid van de grens met Frans-Guyana maakt bestuurlijke vraagstukken voor de Paamaka extra complex.',
        en: 'Skin Tabiki has a kabiten as village leader. The Paamaka as a whole are led by a granman, who advocates their interests with the Surinamese state and in international land rights proceedings. The proximity of the border with French Guiana makes governance issues particularly complex for the Paamaka.',
        sr: 'Skin Tabiki abi wan kabiten als fowru-leider. Paamaka als geheel de lei doro wan granman, die behart dem belangen nanga Sranan strati en na internationale gronrecht-processie. Di nabijheid fu di grens nanga Frans-Guyane meki bestuurskvraagstukken extra complex fu Paamaka.',
      },
      challenges: {
        nl: 'De Paamaka staan voor aanzienlijke uitdagingen: de goudmijnbouw in en rond hun territoir — zowel kleinschalige als industriële activiteit — heeft de rivieren vervuild en de leefomgeving aangetast. De impact van het Merian-project werd gedocumenteerd in meerdere rapporten. Grondrechtenerkenning blijft onvolledig. Emigratie naar Paramaribo en Frans-Guyana dunnen de dorpsbevolking uit.',
        en: 'The Paamaka face significant challenges: gold mining in and around their territory — both small-scale and industrial — has polluted rivers and damaged the living environment. The impact of the Merian project was documented in multiple reports. Land rights recognition remains incomplete. Emigration to Paramaribo and French Guiana is thinning village populations.',
        sr: 'Paamaka fesi sware uitdagingen: gowtu-olo werki na en rondoro dem territorio — zowel pikin-skala als industrieel — ben poisi libas en ben kasi di leefomgeving. Di impact fu di Merian projekt ben gedocumenteerd na furu rapporten. Gronrechten-erkenning de ete onvolledig. Emigrasi go Paramaribo en Frans-Guyane de verdunne di fowru-bevolking.',
      },
    },
  },
  { id: 'tabiki_ede', society: 'paamaka', granman: false, lat: 3.61, lng: -54.2,
    names: { nl: 'Tabiki Ede', en: 'Tabiki Ede', sr: 'Tabiki Ede' },
    subtitles: { nl: 'Paamaka-dorp · Marowijne', en: 'Paamaka village · Marowijne', sr: 'Paamaka fowru · Marowijne' },
    river: 'Marowijne', district: 'Marowijne',
    sections: {
      intro: {
        nl: 'Tabiki Ede is een Paamaka-nederzetting in Suriname, in het Pamaka area / Marowijne-gebied langs de Marowijne en haar zijrivieren. De Paamaka zijn een Marron-samenleving nauw verwant aan de Ndyuka, met wie zij de oostelijke riviergebieden van Suriname delen.',
        en: 'Tabiki Ede is a Paamaka settlement in Suriname, in the Pamaka area / Marowijne area along the Marowijne and its tributaries. The Paamaka are a Maroon society closely related to the Ndyuka, with whom they share the eastern river territories of Suriname.',
        sr: 'Tabiki Ede na wan Paamaka nederzetting na Sranan, na Pamaka area / Marowijne-gebiedo nanga Marowijne en dem zijtakken. Paamaka na wan Marron samenleving di nar nauw verwant nanga Ndyuka, nanga wie den shari di oostelijke libarivier-gebieden fu Sranan.',
      },
      founding: {
        nl: 'De Paamaka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van kustplantages in de 17de en 18de eeuw. In tegenstelling tot de Ndyuka sloten de Paamaka geen afzonderlijk vredesverdrag met de koloniale overheid, maar vielen zij aanvankelijk onder het Ndyuka-verdrag van 1760. In de loop der tijd ontwikkelden zij een eigen identiteit en nederzettingsgebied langs de Marowijne-regio. Tabiki Ede is een van de Paamaka-gemeenschappen in dit uitgestrekte gebied.',
        en: 'The Paamaka are descendants of enslaved people who escaped coastal plantations in the 17th and 18th centuries. Unlike the Ndyuka, the Paamaka did not conclude a separate peace treaty with colonial authorities but initially fell under the Ndyuka treaty of 1760. Over time they developed their own identity and settlement area along the Marowijne region. Tabiki Ede is one of the Paamaka communities in this extensive area.',
        sr: 'Paamaka de naksama fu enslefs sma di ben ron wey fu kosta-plantasi na 17de en 18de ieuwen. Andersom nanga Ndyuka, Paamaka no ben seti wan apart frede-traktati nanga koloniale otoreteti ma fosi ben fali ondro di Ndyuka traktati fu 1760. Nanga langa-tempi den ben ontwikkel dem eigi identiteit en nederzettingsgebiedo nanga Marowijne-regio. Tabiki Ede na wan fu di Paamaka kommetiis na dis uitgestrekt gebiedo.',
      },
      history: {
        nl: 'De Paamaka leefden traditioneel langs de oevers van de Marowijne en haar zijrivieren, in een gebied dat zowel Surinaamse als Frans-Guyanees grondgebied beslaat. De grensligging heeft de Paamaka gevormd: zij onderhielden handels- en familierelaties aan beide zijden van de internationale grens. In de 20ste en 21ste eeuw werden Paamaka-gemeenschappen getroffen door goudmijnbouw, met name door het Merian-goudmijnproject, dat aanzienlijke impact had op hun leefgebied en levensonderhoud.',
        en: 'The Paamaka traditionally lived along the banks of the Marowijne and its tributaries, in an area spanning both Surinamese and French Guianese territory. The border location shaped the Paamaka: they maintained trade and family relations on both sides of the international boundary. In the 20th and 21st centuries Paamaka communities were affected by gold mining, particularly the Merian gold mine project, which had significant impact on their territory and livelihoods.',
        sr: 'Paamaka ben libi traditioneel nanga bengsis fu Marowijne en dem zijtakken, na wan gebiedo di streki nanga zowel Sranan als Frans-Guyanees grondoe. Di grenspositie ben formi Paamaka: den ben hori handels- en famirie-relasi na bede kanten fu di internationale grens. Na 20ste en 21ste ieuwen, Paamaka kommetiis ben naki doro gowtu-olo werki, nadehand doro di Merian gowtu-olo projekt, die ben abi sware invloed na dem territorio en leefonderhoud.',
      },
      leadership: {
        nl: 'Tabiki Ede heeft een kabiten als dorpsleider. De Paamaka als geheel staan onder leiding van een granman, die hun belangen behartigt bij de Surinaamse staat en in internationale grondrechtenprocessen. De nabijheid van de grens met Frans-Guyana maakt bestuurlijke vraagstukken voor de Paamaka extra complex.',
        en: 'Tabiki Ede has a kabiten as village leader. The Paamaka as a whole are led by a granman, who advocates their interests with the Surinamese state and in international land rights proceedings. The proximity of the border with French Guiana makes governance issues particularly complex for the Paamaka.',
        sr: 'Tabiki Ede abi wan kabiten als fowru-leider. Paamaka als geheel de lei doro wan granman, die behart dem belangen nanga Sranan strati en na internationale gronrecht-processie. Di nabijheid fu di grens nanga Frans-Guyane meki bestuurskvraagstukken extra complex fu Paamaka.',
      },
      challenges: {
        nl: 'De Paamaka staan voor aanzienlijke uitdagingen: de goudmijnbouw in en rond hun territoir — zowel kleinschalige als industriële activiteit — heeft de rivieren vervuild en de leefomgeving aangetast. De impact van het Merian-project werd gedocumenteerd in meerdere rapporten. Grondrechtenerkenning blijft onvolledig. Emigratie naar Paramaribo en Frans-Guyana dunnen de dorpsbevolking uit.',
        en: 'The Paamaka face significant challenges: gold mining in and around their territory — both small-scale and industrial — has polluted rivers and damaged the living environment. The impact of the Merian project was documented in multiple reports. Land rights recognition remains incomplete. Emigration to Paramaribo and French Guiana is thinning village populations.',
        sr: 'Paamaka fesi sware uitdagingen: gowtu-olo werki na en rondoro dem territorio — zowel pikin-skala als industrieel — ben poisi libas en ben kasi di leefomgeving. Di impact fu di Merian projekt ben gedocumenteerd na furu rapporten. Gronrechten-erkenning de ete onvolledig. Emigrasi go Paramaribo en Frans-Guyane de verdunne di fowru-bevolking.',
      },
    },
  },
  { id: 'akodo_konde', society: 'paamaka', granman: false, lat: 3.68, lng: -54.13,
    names: { nl: 'Akodo Konde', en: 'Akodo Konde', sr: 'Akodo Konde' },
    subtitles: { nl: 'Paamaka-dorp · Marowijne', en: 'Paamaka village · Marowijne', sr: 'Paamaka fowru · Marowijne' },
    river: 'Marowijne', district: 'Marowijne',
    sections: {
      intro: {
        nl: 'Akodo Konde is een Paamaka-nederzetting in Suriname, in het Pamaka area / Marowijne-gebied langs de Marowijne en haar zijrivieren. De Paamaka zijn een Marron-samenleving nauw verwant aan de Ndyuka, met wie zij de oostelijke riviergebieden van Suriname delen.',
        en: 'Akodo Konde is a Paamaka settlement in Suriname, in the Pamaka area / Marowijne area along the Marowijne and its tributaries. The Paamaka are a Maroon society closely related to the Ndyuka, with whom they share the eastern river territories of Suriname.',
        sr: 'Akodo Konde na wan Paamaka nederzetting na Sranan, na Pamaka area / Marowijne-gebiedo nanga Marowijne en dem zijtakken. Paamaka na wan Marron samenleving di nar nauw verwant nanga Ndyuka, nanga wie den shari di oostelijke libarivier-gebieden fu Sranan.',
      },
      founding: {
        nl: 'De Paamaka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van kustplantages in de 17de en 18de eeuw. In tegenstelling tot de Ndyuka sloten de Paamaka geen afzonderlijk vredesverdrag met de koloniale overheid, maar vielen zij aanvankelijk onder het Ndyuka-verdrag van 1760. In de loop der tijd ontwikkelden zij een eigen identiteit en nederzettingsgebied langs de Marowijne-regio. Akodo Konde is een van de Paamaka-gemeenschappen in dit uitgestrekte gebied.',
        en: 'The Paamaka are descendants of enslaved people who escaped coastal plantations in the 17th and 18th centuries. Unlike the Ndyuka, the Paamaka did not conclude a separate peace treaty with colonial authorities but initially fell under the Ndyuka treaty of 1760. Over time they developed their own identity and settlement area along the Marowijne region. Akodo Konde is one of the Paamaka communities in this extensive area.',
        sr: 'Paamaka de naksama fu enslefs sma di ben ron wey fu kosta-plantasi na 17de en 18de ieuwen. Andersom nanga Ndyuka, Paamaka no ben seti wan apart frede-traktati nanga koloniale otoreteti ma fosi ben fali ondro di Ndyuka traktati fu 1760. Nanga langa-tempi den ben ontwikkel dem eigi identiteit en nederzettingsgebiedo nanga Marowijne-regio. Akodo Konde na wan fu di Paamaka kommetiis na dis uitgestrekt gebiedo.',
      },
      history: {
        nl: 'De Paamaka leefden traditioneel langs de oevers van de Marowijne en haar zijrivieren, in een gebied dat zowel Surinaamse als Frans-Guyanees grondgebied beslaat. De grensligging heeft de Paamaka gevormd: zij onderhielden handels- en familierelaties aan beide zijden van de internationale grens. In de 20ste en 21ste eeuw werden Paamaka-gemeenschappen getroffen door goudmijnbouw, met name door het Merian-goudmijnproject, dat aanzienlijke impact had op hun leefgebied en levensonderhoud.',
        en: 'The Paamaka traditionally lived along the banks of the Marowijne and its tributaries, in an area spanning both Surinamese and French Guianese territory. The border location shaped the Paamaka: they maintained trade and family relations on both sides of the international boundary. In the 20th and 21st centuries Paamaka communities were affected by gold mining, particularly the Merian gold mine project, which had significant impact on their territory and livelihoods.',
        sr: 'Paamaka ben libi traditioneel nanga bengsis fu Marowijne en dem zijtakken, na wan gebiedo di streki nanga zowel Sranan als Frans-Guyanees grondoe. Di grenspositie ben formi Paamaka: den ben hori handels- en famirie-relasi na bede kanten fu di internationale grens. Na 20ste en 21ste ieuwen, Paamaka kommetiis ben naki doro gowtu-olo werki, nadehand doro di Merian gowtu-olo projekt, die ben abi sware invloed na dem territorio en leefonderhoud.',
      },
      leadership: {
        nl: 'Akodo Konde heeft een kabiten als dorpsleider. De Paamaka als geheel staan onder leiding van een granman, die hun belangen behartigt bij de Surinaamse staat en in internationale grondrechtenprocessen. De nabijheid van de grens met Frans-Guyana maakt bestuurlijke vraagstukken voor de Paamaka extra complex.',
        en: 'Akodo Konde has a kabiten as village leader. The Paamaka as a whole are led by a granman, who advocates their interests with the Surinamese state and in international land rights proceedings. The proximity of the border with French Guiana makes governance issues particularly complex for the Paamaka.',
        sr: 'Akodo Konde abi wan kabiten als fowru-leider. Paamaka als geheel de lei doro wan granman, die behart dem belangen nanga Sranan strati en na internationale gronrecht-processie. Di nabijheid fu di grens nanga Frans-Guyane meki bestuurskvraagstukken extra complex fu Paamaka.',
      },
      challenges: {
        nl: 'De Paamaka staan voor aanzienlijke uitdagingen: de goudmijnbouw in en rond hun territoir — zowel kleinschalige als industriële activiteit — heeft de rivieren vervuild en de leefomgeving aangetast. De impact van het Merian-project werd gedocumenteerd in meerdere rapporten. Grondrechtenerkenning blijft onvolledig. Emigratie naar Paramaribo en Frans-Guyana dunnen de dorpsbevolking uit.',
        en: 'The Paamaka face significant challenges: gold mining in and around their territory — both small-scale and industrial — has polluted rivers and damaged the living environment. The impact of the Merian project was documented in multiple reports. Land rights recognition remains incomplete. Emigration to Paramaribo and French Guiana is thinning village populations.',
        sr: 'Paamaka fesi sware uitdagingen: gowtu-olo werki na en rondoro dem territorio — zowel pikin-skala als industrieel — ben poisi libas en ben kasi di leefomgeving. Di impact fu di Merian projekt ben gedocumenteerd na furu rapporten. Gronrechten-erkenning de ete onvolledig. Emigrasi go Paramaribo en Frans-Guyane de verdunne di fowru-bevolking.',
      },
    },
  },
  { id: 'providence', society: 'paamaka', granman: false, lat: 5.49, lng: -54.05,
    names: { nl: 'Providence', en: 'Providence', sr: 'Providence' },
    subtitles: { nl: 'Paamaka-dorp · Marowijne / Maroni', en: 'Paamaka village · Marowijne / Maroni', sr: 'Paamaka fowru · Marowijne / Maroni' },
    river: 'Marowijne / Maroni', district: 'Guyane',
    sections: {
      intro: {
        nl: 'Providence is een Paamaka-nederzetting in Frans-Guyana, in het Apatou commune-gebied langs de Marowijne en haar zijrivieren. De Paamaka zijn een Marron-samenleving nauw verwant aan de Ndyuka, met wie zij de oostelijke riviergebieden van Suriname delen.',
        en: 'Providence is a Paamaka settlement in French Guiana, in the Apatou commune area along the Marowijne and its tributaries. The Paamaka are a Maroon society closely related to the Ndyuka, with whom they share the eastern river territories of Suriname.',
        sr: 'Providence na wan Paamaka nederzetting na Frans-Guyane, na Apatou commune-gebiedo nanga Marowijne en dem zijtakken. Paamaka na wan Marron samenleving di nar nauw verwant nanga Ndyuka, nanga wie den shari di oostelijke libarivier-gebieden fu Sranan.',
      },
      founding: {
        nl: 'De Paamaka zijn nakomelingen van tot slaaf gemaakten die ontsnapten van kustplantages in de 17de en 18de eeuw. In tegenstelling tot de Ndyuka sloten de Paamaka geen afzonderlijk vredesverdrag met de koloniale overheid, maar vielen zij aanvankelijk onder het Ndyuka-verdrag van 1760. In de loop der tijd ontwikkelden zij een eigen identiteit en nederzettingsgebied langs de Marowijne-regio. Providence is een van de Paamaka-gemeenschappen in dit uitgestrekte gebied.',
        en: 'The Paamaka are descendants of enslaved people who escaped coastal plantations in the 17th and 18th centuries. Unlike the Ndyuka, the Paamaka did not conclude a separate peace treaty with colonial authorities but initially fell under the Ndyuka treaty of 1760. Over time they developed their own identity and settlement area along the Marowijne region. Providence is one of the Paamaka communities in this extensive area.',
        sr: 'Paamaka de naksama fu enslefs sma di ben ron wey fu kosta-plantasi na 17de en 18de ieuwen. Andersom nanga Ndyuka, Paamaka no ben seti wan apart frede-traktati nanga koloniale otoreteti ma fosi ben fali ondro di Ndyuka traktati fu 1760. Nanga langa-tempi den ben ontwikkel dem eigi identiteit en nederzettingsgebiedo nanga Marowijne-regio. Providence na wan fu di Paamaka kommetiis na dis uitgestrekt gebiedo.',
      },
      history: {
        nl: 'De Paamaka leefden traditioneel langs de oevers van de Marowijne en haar zijrivieren, in een gebied dat zowel Surinaamse als Frans-Guyanees grondgebied beslaat. De grensligging heeft de Paamaka gevormd: zij onderhielden handels- en familierelaties aan beide zijden van de internationale grens. In de 20ste en 21ste eeuw werden Paamaka-gemeenschappen getroffen door goudmijnbouw, met name door het Merian-goudmijnproject, dat aanzienlijke impact had op hun leefgebied en levensonderhoud.',
        en: 'The Paamaka traditionally lived along the banks of the Marowijne and its tributaries, in an area spanning both Surinamese and French Guianese territory. The border location shaped the Paamaka: they maintained trade and family relations on both sides of the international boundary. In the 20th and 21st centuries Paamaka communities were affected by gold mining, particularly the Merian gold mine project, which had significant impact on their territory and livelihoods.',
        sr: 'Paamaka ben libi traditioneel nanga bengsis fu Marowijne en dem zijtakken, na wan gebiedo di streki nanga zowel Sranan als Frans-Guyanees grondoe. Di grenspositie ben formi Paamaka: den ben hori handels- en famirie-relasi na bede kanten fu di internationale grens. Na 20ste en 21ste ieuwen, Paamaka kommetiis ben naki doro gowtu-olo werki, nadehand doro di Merian gowtu-olo projekt, die ben abi sware invloed na dem territorio en leefonderhoud.',
      },
      leadership: {
        nl: 'Providence heeft een kabiten als dorpsleider. De Paamaka als geheel staan onder leiding van een granman, die hun belangen behartigt bij de Surinaamse staat en in internationale grondrechtenprocessen. De nabijheid van de grens met Frans-Guyana maakt bestuurlijke vraagstukken voor de Paamaka extra complex.',
        en: 'Providence has a kabiten as village leader. The Paamaka as a whole are led by a granman, who advocates their interests with the Surinamese state and in international land rights proceedings. The proximity of the border with French Guiana makes governance issues particularly complex for the Paamaka.',
        sr: 'Providence abi wan kabiten als fowru-leider. Paamaka als geheel de lei doro wan granman, die behart dem belangen nanga Sranan strati en na internationale gronrecht-processie. Di nabijheid fu di grens nanga Frans-Guyane meki bestuurskvraagstukken extra complex fu Paamaka.',
      },
      challenges: {
        nl: 'De Paamaka staan voor aanzienlijke uitdagingen: de goudmijnbouw in en rond hun territoir — zowel kleinschalige als industriële activiteit — heeft de rivieren vervuild en de leefomgeving aangetast. De impact van het Merian-project werd gedocumenteerd in meerdere rapporten. Grondrechtenerkenning blijft onvolledig. Emigratie naar Paramaribo en Frans-Guyana dunnen de dorpsbevolking uit.',
        en: 'The Paamaka face significant challenges: gold mining in and around their territory — both small-scale and industrial — has polluted rivers and damaged the living environment. The impact of the Merian project was documented in multiple reports. Land rights recognition remains incomplete. Emigration to Paramaribo and French Guiana is thinning village populations.',
        sr: 'Paamaka fesi sware uitdagingen: gowtu-olo werki na en rondoro dem territorio — zowel pikin-skala als industrieel — ben poisi libas en ben kasi di leefomgeving. Di impact fu di Merian projekt ben gedocumenteerd na furu rapporten. Gronrechten-erkenning de ete onvolledig. Emigrasi go Paramaribo en Frans-Guyane de verdunne di fowru-bevolking.',
      },
    },
  },

  // ══ ALUKU (additional) ═══════════════════════════════════════════════
  { id: 'kormontibo', society: 'aluku', granman: false, lat: 3.44, lng: -54.02,
    names: { nl: 'Kormontibo', en: 'Kormontibo', sr: 'Kormontibo' },
    subtitles: { nl: 'Aluku-dorp · Lawa (Marowijne)', en: 'Aluku village · Lawa (Marowijne)', sr: 'Aluku fowru · Lawa (Marowijne)' },
    river: 'Lawa (Marowijne)', district: 'Guyane',
    sections: {
      intro: {
        nl: 'Kormontibo is een Aluku (Boni)-dorp langs de Lawa- of Marowijne-rivier, in French Guiana. De Aluku vormen de kleinste van de Surinaamse Marron-samenlevingen, met een bevolking van circa 3.000 mensen, voornamelijk gevestigd op Frans-Guyanees grondgebied in de gemeente Papaïchton.',
        en: 'Kormontibo is an Aluku (Boni) village along the Lawa or Marowijne river, in French Guiana. The Aluku form one of the smallest Maroon societies associated with Suriname, with a population of around 3,000, based predominantly on French Guianese territory in the commune of Papaïchton.',
        sr: 'Kormontibo na wan Aluku (Boni) fowru nanga Lawa oso Marowijne liba, na Frans-Guyane. Aluku de wan fu di kleinste Marron-samenlevingen verbonden nanga Sranan, nanga wan bevolking fu rondoro 3.000, grotendeels na Frans-Guyanees grondoe na di gemeente Papaïchton.',
      },
      founding: {
        nl: 'De Aluku zijn nakomelingen van de volgelingen van Boni (ook gespeld als Bonni), een Marron-leider die in de late 18de eeuw streed tegen de koloniale autoriteiten. Na de dood van Boni in 1793 vluchtten zijn volgelingen over de Marowijne-rivier naar het grondgebied van wat nu Frans-Guyana is. Aldaar vestigden zij dorpen langs de Lawa-rivier, waaronder Kormontibo.',
        en: 'The Aluku are descendants of the followers of Boni (also spelled Bonni), a Maroon leader who fought against colonial authorities in the late 18th century. After Boni\'s death in 1793 his followers fled across the Marowijne River into the territory of what is now French Guiana. There they established villages along the Lawa River, including Kormontibo.',
        sr: 'Aluku de naksama fu di volgelingen fu Boni (eke gespeld als Bonni), wan Marron leider die ben feti kopi koloniale otoreteti na laat 18de ieuwen. Baka Boni dede na 1793, hem volgelingen ben ron wey dressi Marowijne Liba go na di territorio fu wani tide Frans-Guyane. Na dey den ben seti fowru nanga Lawa Liba, incluso Kormontibo.',
      },
      history: {
        nl: 'Na hun vestiging in Frans-Guyana leefden de Aluku onder Franse jurisdictie, wat hen een bijzondere positie gaf ten opzichte van de overige Marron-groepen in Suriname. In 1969 kregen de Aluku officiële erkenning als inheemse bevolkingsgroep in Frans-Guyana, wat hen bepaalde rechten en Franse sociale voorzieningen gaf. De oprichting van de gemeente Papaïchton in 1969 versterkte hun bestuurlijke positie. Kormontibo maakt deel uit van dit relatief beschermde Aluku-territorium.',
        en: 'After settling in French Guiana the Aluku lived under French jurisdiction, giving them a special position relative to the other Maroon groups in Suriname. In 1969 the Aluku received official recognition as an indigenous group in French Guiana, granting them certain rights and access to French social services. The establishment of the commune of Papaïchton in 1969 strengthened their administrative position. Kormontibo forms part of this relatively protected Aluku territory.',
        sr: 'Baka den seti libi na Frans-Guyane, Aluku ben libi ondro Franse jurisdictie, die ben gi dem wan spesiale positie ten opzichte van andere Marron groepen na Sranan. Na 1969 Aluku ben kisi officieel erkenning als inheemse bevolkingsgroep na Frans-Guyane, die ben gi dem bepaalde rechten en toegang na Franse sociale diensten. Di oprichting fu di gemeente Papaïchton na 1969 ben versterken dem bestuurlijke positie. Kormontibo de deypaart fu dis relatief beschermd Aluku territorio.',
      },
      leadership: {
        nl: 'Kormontibo staat onder gezag van een lokale kabiten. De Aluku-samenleving als geheel wordt bestuurd door een granman, die optreedt als vertegenwoordiger tegenover zowel de Franse als de Surinaamse autoriteiten. Het bestuur werkt in samenwerking met de gemeente Papaïchton in Frans-Guyana. De dubbele jurisdictie — Frans en traditioneel-Marron — maakt het Aluku-bestuur tot een complex maar goed gefunctioneerd systeem.',
        en: 'Kormontibo is under the authority of a local kabiten. The Aluku society as a whole is governed by a granman, who acts as representative to both French and Surinamese authorities. Governance works in cooperation with the commune of Papaïchton in French Guiana. The dual jurisdiction — French and traditional Maroon — makes Aluku governance a complex but functioning system.',
        sr: 'Kormontibo de ondro otoreteti fu wan lokale kabiten. Di Aluku samenleving als geheel de bestuurd doro wan granman, die optree als representant na zowel Franse als Sranan otoreteti. Bestuur werki nanga samenwerking fu di gemeente Papaïchton na Frans-Guyane. Di dubbele jurisdictie — Frans en traditioneel-Marron — meki Aluku bestuur wan complex ma goed-werkende systeem.',
      },
      challenges: {
        nl: 'De Aluku van Kormontibo kampen met de gevolgen van goudmijnbouw langs de Lawa, kwikverontreiniging en ontbossing. Als Frans-Guyanees grondgebied genieten zij toegang tot Franse sociale diensten, maar de afgelegen ligging beperkt de praktische toegankelijkheid daarvan. De kleine omvang van de Aluku-gemeenschap maakt culturele continuïteit kwetsbaar. De grensligging brengt ook handel en circulaire migratie met zich mee die traditionele leefpatronen beïnvloeden.',
        en: 'The Aluku of Kormontibo face the consequences of gold mining along the Lawa, mercury contamination, and deforestation. As French Guianese territory they have access to French social services, but the remote location limits their practical accessibility. The small size of the Aluku community makes cultural continuity vulnerable. The border location also brings trade and circular migration that affect traditional ways of life.',
        sr: 'Aluku fu Kormontibo fesi di gevolgen fu gowtu-olo werki nanga Lawa, kwik-pisi, en ontbossing. Als Frans-Guyanees grondoe den abi toegang na Franse sociale diensten, ma di ver lokatie beperkt di praktische toegankelijkheid. Di kleini grootte fu Aluku kommetii meki kulturele kontinuïteit kwetsbaar. Di grenspositie brengi eke handel en circulaire migrasi die invloede neem op traditionele leefpatronen.',
      },
    },
  },
  { id: 'loka', society: 'aluku', granman: false, lat: 3.42, lng: -54.04,
    names: { nl: 'Loka', en: 'Loka', sr: 'Loka' },
    subtitles: { nl: 'Aluku-dorp · Lawa (Marowijne)', en: 'Aluku village · Lawa (Marowijne)', sr: 'Aluku fowru · Lawa (Marowijne)' },
    river: 'Lawa (Marowijne)', district: 'Guyane',
    sections: {
      intro: {
        nl: 'Loka is een Aluku (Boni)-dorp langs de Lawa- of Marowijne-rivier, in French Guiana. De Aluku vormen de kleinste van de Surinaamse Marron-samenlevingen, met een bevolking van circa 3.000 mensen, voornamelijk gevestigd op Frans-Guyanees grondgebied in de gemeente Papaïchton.',
        en: 'Loka is an Aluku (Boni) village along the Lawa or Marowijne river, in French Guiana. The Aluku form one of the smallest Maroon societies associated with Suriname, with a population of around 3,000, based predominantly on French Guianese territory in the commune of Papaïchton.',
        sr: 'Loka na wan Aluku (Boni) fowru nanga Lawa oso Marowijne liba, na Frans-Guyane. Aluku de wan fu di kleinste Marron-samenlevingen verbonden nanga Sranan, nanga wan bevolking fu rondoro 3.000, grotendeels na Frans-Guyanees grondoe na di gemeente Papaïchton.',
      },
      founding: {
        nl: 'De Aluku zijn nakomelingen van de volgelingen van Boni (ook gespeld als Bonni), een Marron-leider die in de late 18de eeuw streed tegen de koloniale autoriteiten. Na de dood van Boni in 1793 vluchtten zijn volgelingen over de Marowijne-rivier naar het grondgebied van wat nu Frans-Guyana is. Aldaar vestigden zij dorpen langs de Lawa-rivier, waaronder Loka.',
        en: 'The Aluku are descendants of the followers of Boni (also spelled Bonni), a Maroon leader who fought against colonial authorities in the late 18th century. After Boni\'s death in 1793 his followers fled across the Marowijne River into the territory of what is now French Guiana. There they established villages along the Lawa River, including Loka.',
        sr: 'Aluku de naksama fu di volgelingen fu Boni (eke gespeld als Bonni), wan Marron leider die ben feti kopi koloniale otoreteti na laat 18de ieuwen. Baka Boni dede na 1793, hem volgelingen ben ron wey dressi Marowijne Liba go na di territorio fu wani tide Frans-Guyane. Na dey den ben seti fowru nanga Lawa Liba, incluso Loka.',
      },
      history: {
        nl: 'Na hun vestiging in Frans-Guyana leefden de Aluku onder Franse jurisdictie, wat hen een bijzondere positie gaf ten opzichte van de overige Marron-groepen in Suriname. In 1969 kregen de Aluku officiële erkenning als inheemse bevolkingsgroep in Frans-Guyana, wat hen bepaalde rechten en Franse sociale voorzieningen gaf. De oprichting van de gemeente Papaïchton in 1969 versterkte hun bestuurlijke positie. Loka maakt deel uit van dit relatief beschermde Aluku-territorium.',
        en: 'After settling in French Guiana the Aluku lived under French jurisdiction, giving them a special position relative to the other Maroon groups in Suriname. In 1969 the Aluku received official recognition as an indigenous group in French Guiana, granting them certain rights and access to French social services. The establishment of the commune of Papaïchton in 1969 strengthened their administrative position. Loka forms part of this relatively protected Aluku territory.',
        sr: 'Baka den seti libi na Frans-Guyane, Aluku ben libi ondro Franse jurisdictie, die ben gi dem wan spesiale positie ten opzichte van andere Marron groepen na Sranan. Na 1969 Aluku ben kisi officieel erkenning als inheemse bevolkingsgroep na Frans-Guyane, die ben gi dem bepaalde rechten en toegang na Franse sociale diensten. Di oprichting fu di gemeente Papaïchton na 1969 ben versterken dem bestuurlijke positie. Loka de deypaart fu dis relatief beschermd Aluku territorio.',
      },
      leadership: {
        nl: 'Loka staat onder gezag van een lokale kabiten. De Aluku-samenleving als geheel wordt bestuurd door een granman, die optreedt als vertegenwoordiger tegenover zowel de Franse als de Surinaamse autoriteiten. Het bestuur werkt in samenwerking met de gemeente Papaïchton in Frans-Guyana. De dubbele jurisdictie — Frans en traditioneel-Marron — maakt het Aluku-bestuur tot een complex maar goed gefunctioneerd systeem.',
        en: 'Loka is under the authority of a local kabiten. The Aluku society as a whole is governed by a granman, who acts as representative to both French and Surinamese authorities. Governance works in cooperation with the commune of Papaïchton in French Guiana. The dual jurisdiction — French and traditional Maroon — makes Aluku governance a complex but functioning system.',
        sr: 'Loka de ondro otoreteti fu wan lokale kabiten. Di Aluku samenleving als geheel de bestuurd doro wan granman, die optree als representant na zowel Franse als Sranan otoreteti. Bestuur werki nanga samenwerking fu di gemeente Papaïchton na Frans-Guyane. Di dubbele jurisdictie — Frans en traditioneel-Marron — meki Aluku bestuur wan complex ma goed-werkende systeem.',
      },
      challenges: {
        nl: 'De Aluku van Loka kampen met de gevolgen van goudmijnbouw langs de Lawa, kwikverontreiniging en ontbossing. Als Frans-Guyanees grondgebied genieten zij toegang tot Franse sociale diensten, maar de afgelegen ligging beperkt de praktische toegankelijkheid daarvan. De kleine omvang van de Aluku-gemeenschap maakt culturele continuïteit kwetsbaar. De grensligging brengt ook handel en circulaire migratie met zich mee die traditionele leefpatronen beïnvloeden.',
        en: 'The Aluku of Loka face the consequences of gold mining along the Lawa, mercury contamination, and deforestation. As French Guianese territory they have access to French social services, but the remote location limits their practical accessibility. The small size of the Aluku community makes cultural continuity vulnerable. The border location also brings trade and circular migration that affect traditional ways of life.',
        sr: 'Aluku fu Loka fesi di gevolgen fu gowtu-olo werki nanga Lawa, kwik-pisi, en ontbossing. Als Frans-Guyanees grondoe den abi toegang na Franse sociale diensten, ma di ver lokatie beperkt di praktische toegankelijkheid. Di kleini grootte fu Aluku kommetii meki kulturele kontinuïteit kwetsbaar. Di grenspositie brengi eke handel en circulaire migrasi die invloede neem op traditionele leefpatronen.',
      },
    },
  },
  { id: 'agode', society: 'aluku', granman: false, lat: 3.46, lng: -54.01,
    names: { nl: 'Agodé', en: 'Agodé', sr: 'Agodé' },
    subtitles: { nl: 'Aluku-dorp · Lawa (Marowijne)', en: 'Aluku village · Lawa (Marowijne)', sr: 'Aluku fowru · Lawa (Marowijne)' },
    river: 'Lawa (Marowijne)', district: 'Guyane',
    sections: {
      intro: {
        nl: 'Agodé is een Aluku (Boni)-dorp langs de Lawa- of Marowijne-rivier, in French Guiana. De Aluku vormen de kleinste van de Surinaamse Marron-samenlevingen, met een bevolking van circa 3.000 mensen, voornamelijk gevestigd op Frans-Guyanees grondgebied in de gemeente Papaïchton.',
        en: 'Agodé is an Aluku (Boni) village along the Lawa or Marowijne river, in French Guiana. The Aluku form one of the smallest Maroon societies associated with Suriname, with a population of around 3,000, based predominantly on French Guianese territory in the commune of Papaïchton.',
        sr: 'Agodé na wan Aluku (Boni) fowru nanga Lawa oso Marowijne liba, na Frans-Guyane. Aluku de wan fu di kleinste Marron-samenlevingen verbonden nanga Sranan, nanga wan bevolking fu rondoro 3.000, grotendeels na Frans-Guyanees grondoe na di gemeente Papaïchton.',
      },
      founding: {
        nl: 'De Aluku zijn nakomelingen van de volgelingen van Boni (ook gespeld als Bonni), een Marron-leider die in de late 18de eeuw streed tegen de koloniale autoriteiten. Na de dood van Boni in 1793 vluchtten zijn volgelingen over de Marowijne-rivier naar het grondgebied van wat nu Frans-Guyana is. Aldaar vestigden zij dorpen langs de Lawa-rivier, waaronder Agodé.',
        en: 'The Aluku are descendants of the followers of Boni (also spelled Bonni), a Maroon leader who fought against colonial authorities in the late 18th century. After Boni\'s death in 1793 his followers fled across the Marowijne River into the territory of what is now French Guiana. There they established villages along the Lawa River, including Agodé.',
        sr: 'Aluku de naksama fu di volgelingen fu Boni (eke gespeld als Bonni), wan Marron leider die ben feti kopi koloniale otoreteti na laat 18de ieuwen. Baka Boni dede na 1793, hem volgelingen ben ron wey dressi Marowijne Liba go na di territorio fu wani tide Frans-Guyane. Na dey den ben seti fowru nanga Lawa Liba, incluso Agodé.',
      },
      history: {
        nl: 'Na hun vestiging in Frans-Guyana leefden de Aluku onder Franse jurisdictie, wat hen een bijzondere positie gaf ten opzichte van de overige Marron-groepen in Suriname. In 1969 kregen de Aluku officiële erkenning als inheemse bevolkingsgroep in Frans-Guyana, wat hen bepaalde rechten en Franse sociale voorzieningen gaf. De oprichting van de gemeente Papaïchton in 1969 versterkte hun bestuurlijke positie. Agodé maakt deel uit van dit relatief beschermde Aluku-territorium.',
        en: 'After settling in French Guiana the Aluku lived under French jurisdiction, giving them a special position relative to the other Maroon groups in Suriname. In 1969 the Aluku received official recognition as an indigenous group in French Guiana, granting them certain rights and access to French social services. The establishment of the commune of Papaïchton in 1969 strengthened their administrative position. Agodé forms part of this relatively protected Aluku territory.',
        sr: 'Baka den seti libi na Frans-Guyane, Aluku ben libi ondro Franse jurisdictie, die ben gi dem wan spesiale positie ten opzichte van andere Marron groepen na Sranan. Na 1969 Aluku ben kisi officieel erkenning als inheemse bevolkingsgroep na Frans-Guyane, die ben gi dem bepaalde rechten en toegang na Franse sociale diensten. Di oprichting fu di gemeente Papaïchton na 1969 ben versterken dem bestuurlijke positie. Agodé de deypaart fu dis relatief beschermd Aluku territorio.',
      },
      leadership: {
        nl: 'Agodé staat onder gezag van een lokale kabiten. De Aluku-samenleving als geheel wordt bestuurd door een granman, die optreedt als vertegenwoordiger tegenover zowel de Franse als de Surinaamse autoriteiten. Het bestuur werkt in samenwerking met de gemeente Papaïchton in Frans-Guyana. De dubbele jurisdictie — Frans en traditioneel-Marron — maakt het Aluku-bestuur tot een complex maar goed gefunctioneerd systeem.',
        en: 'Agodé is under the authority of a local kabiten. The Aluku society as a whole is governed by a granman, who acts as representative to both French and Surinamese authorities. Governance works in cooperation with the commune of Papaïchton in French Guiana. The dual jurisdiction — French and traditional Maroon — makes Aluku governance a complex but functioning system.',
        sr: 'Agodé de ondro otoreteti fu wan lokale kabiten. Di Aluku samenleving als geheel de bestuurd doro wan granman, die optree als representant na zowel Franse als Sranan otoreteti. Bestuur werki nanga samenwerking fu di gemeente Papaïchton na Frans-Guyane. Di dubbele jurisdictie — Frans en traditioneel-Marron — meki Aluku bestuur wan complex ma goed-werkende systeem.',
      },
      challenges: {
        nl: 'De Aluku van Agodé kampen met de gevolgen van goudmijnbouw langs de Lawa, kwikverontreiniging en ontbossing. Als Frans-Guyanees grondgebied genieten zij toegang tot Franse sociale diensten, maar de afgelegen ligging beperkt de praktische toegankelijkheid daarvan. De kleine omvang van de Aluku-gemeenschap maakt culturele continuïteit kwetsbaar. De grensligging brengt ook handel en circulaire migratie met zich mee die traditionele leefpatronen beïnvloeden.',
        en: 'The Aluku of Agodé face the consequences of gold mining along the Lawa, mercury contamination, and deforestation. As French Guianese territory they have access to French social services, but the remote location limits their practical accessibility. The small size of the Aluku community makes cultural continuity vulnerable. The border location also brings trade and circular migration that affect traditional ways of life.',
        sr: 'Aluku fu Agodé fesi di gevolgen fu gowtu-olo werki nanga Lawa, kwik-pisi, en ontbossing. Als Frans-Guyanees grondoe den abi toegang na Franse sociale diensten, ma di ver lokatie beperkt di praktische toegankelijkheid. Di kleini grootte fu Aluku kommetii meki kulturele kontinuïteit kwetsbaar. Di grenspositie brengi eke handel en circulaire migrasi die invloede neem op traditionele leefpatronen.',
      },
    },
  },
  { id: 'assissi', society: 'aluku', granman: false, lat: 3.45, lng: -54.03,
    names: { nl: 'Assissi', en: 'Assissi', sr: 'Assissi' },
    subtitles: { nl: 'Aluku-dorp · Lawa (Marowijne)', en: 'Aluku village · Lawa (Marowijne)', sr: 'Aluku fowru · Lawa (Marowijne)' },
    river: 'Lawa (Marowijne)', district: 'Guyane',
    sections: {
      intro: {
        nl: 'Assissi is een Aluku (Boni)-dorp langs de Lawa- of Marowijne-rivier, in French Guiana. De Aluku vormen de kleinste van de Surinaamse Marron-samenlevingen, met een bevolking van circa 3.000 mensen, voornamelijk gevestigd op Frans-Guyanees grondgebied in de gemeente Papaïchton.',
        en: 'Assissi is an Aluku (Boni) village along the Lawa or Marowijne river, in French Guiana. The Aluku form one of the smallest Maroon societies associated with Suriname, with a population of around 3,000, based predominantly on French Guianese territory in the commune of Papaïchton.',
        sr: 'Assissi na wan Aluku (Boni) fowru nanga Lawa oso Marowijne liba, na Frans-Guyane. Aluku de wan fu di kleinste Marron-samenlevingen verbonden nanga Sranan, nanga wan bevolking fu rondoro 3.000, grotendeels na Frans-Guyanees grondoe na di gemeente Papaïchton.',
      },
      founding: {
        nl: 'De Aluku zijn nakomelingen van de volgelingen van Boni (ook gespeld als Bonni), een Marron-leider die in de late 18de eeuw streed tegen de koloniale autoriteiten. Na de dood van Boni in 1793 vluchtten zijn volgelingen over de Marowijne-rivier naar het grondgebied van wat nu Frans-Guyana is. Aldaar vestigden zij dorpen langs de Lawa-rivier, waaronder Assissi.',
        en: 'The Aluku are descendants of the followers of Boni (also spelled Bonni), a Maroon leader who fought against colonial authorities in the late 18th century. After Boni\'s death in 1793 his followers fled across the Marowijne River into the territory of what is now French Guiana. There they established villages along the Lawa River, including Assissi.',
        sr: 'Aluku de naksama fu di volgelingen fu Boni (eke gespeld als Bonni), wan Marron leider die ben feti kopi koloniale otoreteti na laat 18de ieuwen. Baka Boni dede na 1793, hem volgelingen ben ron wey dressi Marowijne Liba go na di territorio fu wani tide Frans-Guyane. Na dey den ben seti fowru nanga Lawa Liba, incluso Assissi.',
      },
      history: {
        nl: 'Na hun vestiging in Frans-Guyana leefden de Aluku onder Franse jurisdictie, wat hen een bijzondere positie gaf ten opzichte van de overige Marron-groepen in Suriname. In 1969 kregen de Aluku officiële erkenning als inheemse bevolkingsgroep in Frans-Guyana, wat hen bepaalde rechten en Franse sociale voorzieningen gaf. De oprichting van de gemeente Papaïchton in 1969 versterkte hun bestuurlijke positie. Assissi maakt deel uit van dit relatief beschermde Aluku-territorium.',
        en: 'After settling in French Guiana the Aluku lived under French jurisdiction, giving them a special position relative to the other Maroon groups in Suriname. In 1969 the Aluku received official recognition as an indigenous group in French Guiana, granting them certain rights and access to French social services. The establishment of the commune of Papaïchton in 1969 strengthened their administrative position. Assissi forms part of this relatively protected Aluku territory.',
        sr: 'Baka den seti libi na Frans-Guyane, Aluku ben libi ondro Franse jurisdictie, die ben gi dem wan spesiale positie ten opzichte van andere Marron groepen na Sranan. Na 1969 Aluku ben kisi officieel erkenning als inheemse bevolkingsgroep na Frans-Guyane, die ben gi dem bepaalde rechten en toegang na Franse sociale diensten. Di oprichting fu di gemeente Papaïchton na 1969 ben versterken dem bestuurlijke positie. Assissi de deypaart fu dis relatief beschermd Aluku territorio.',
      },
      leadership: {
        nl: 'Assissi staat onder gezag van een lokale kabiten. De Aluku-samenleving als geheel wordt bestuurd door een granman, die optreedt als vertegenwoordiger tegenover zowel de Franse als de Surinaamse autoriteiten. Het bestuur werkt in samenwerking met de gemeente Papaïchton in Frans-Guyana. De dubbele jurisdictie — Frans en traditioneel-Marron — maakt het Aluku-bestuur tot een complex maar goed gefunctioneerd systeem.',
        en: 'Assissi is under the authority of a local kabiten. The Aluku society as a whole is governed by a granman, who acts as representative to both French and Surinamese authorities. Governance works in cooperation with the commune of Papaïchton in French Guiana. The dual jurisdiction — French and traditional Maroon — makes Aluku governance a complex but functioning system.',
        sr: 'Assissi de ondro otoreteti fu wan lokale kabiten. Di Aluku samenleving als geheel de bestuurd doro wan granman, die optree als representant na zowel Franse als Sranan otoreteti. Bestuur werki nanga samenwerking fu di gemeente Papaïchton na Frans-Guyane. Di dubbele jurisdictie — Frans en traditioneel-Marron — meki Aluku bestuur wan complex ma goed-werkende systeem.',
      },
      challenges: {
        nl: 'De Aluku van Assissi kampen met de gevolgen van goudmijnbouw langs de Lawa, kwikverontreiniging en ontbossing. Als Frans-Guyanees grondgebied genieten zij toegang tot Franse sociale diensten, maar de afgelegen ligging beperkt de praktische toegankelijkheid daarvan. De kleine omvang van de Aluku-gemeenschap maakt culturele continuïteit kwetsbaar. De grensligging brengt ook handel en circulaire migratie met zich mee die traditionele leefpatronen beïnvloeden.',
        en: 'The Aluku of Assissi face the consequences of gold mining along the Lawa, mercury contamination, and deforestation. As French Guianese territory they have access to French social services, but the remote location limits their practical accessibility. The small size of the Aluku community makes cultural continuity vulnerable. The border location also brings trade and circular migration that affect traditional ways of life.',
        sr: 'Aluku fu Assissi fesi di gevolgen fu gowtu-olo werki nanga Lawa, kwik-pisi, en ontbossing. Als Frans-Guyanees grondoe den abi toegang na Franse sociale diensten, ma di ver lokatie beperkt di praktische toegankelijkheid. Di kleini grootte fu Aluku kommetii meki kulturele kontinuïteit kwetsbaar. Di grenspositie brengi eke handel en circulaire migrasi die invloede neem op traditionele leefpatronen.',
      },
    },
  },
  { id: 'lenfant_perdu', society: 'aluku', granman: false, lat: 3.43, lng: -54.05,
    names: { nl: 'L\'Enfant Perdu', en: 'L\'Enfant Perdu', sr: 'L\'Enfant Perdu' },
    subtitles: { nl: 'Aluku-dorp · Lawa (Marowijne)', en: 'Aluku village · Lawa (Marowijne)', sr: 'Aluku fowru · Lawa (Marowijne)' },
    river: 'Lawa (Marowijne)', district: 'Guyane',
    sections: {
      intro: {
        nl: 'L\'Enfant Perdu is een Aluku (Boni)-dorp langs de Lawa- of Marowijne-rivier, in French Guiana. De Aluku vormen de kleinste van de Surinaamse Marron-samenlevingen, met een bevolking van circa 3.000 mensen, voornamelijk gevestigd op Frans-Guyanees grondgebied in de gemeente Papaïchton.',
        en: 'L\'Enfant Perdu is an Aluku (Boni) village along the Lawa or Marowijne river, in French Guiana. The Aluku form one of the smallest Maroon societies associated with Suriname, with a population of around 3,000, based predominantly on French Guianese territory in the commune of Papaïchton.',
        sr: 'L\'Enfant Perdu na wan Aluku (Boni) fowru nanga Lawa oso Marowijne liba, na Frans-Guyane. Aluku de wan fu di kleinste Marron-samenlevingen verbonden nanga Sranan, nanga wan bevolking fu rondoro 3.000, grotendeels na Frans-Guyanees grondoe na di gemeente Papaïchton.',
      },
      founding: {
        nl: 'De Aluku zijn nakomelingen van de volgelingen van Boni (ook gespeld als Bonni), een Marron-leider die in de late 18de eeuw streed tegen de koloniale autoriteiten. Na de dood van Boni in 1793 vluchtten zijn volgelingen over de Marowijne-rivier naar het grondgebied van wat nu Frans-Guyana is. Aldaar vestigden zij dorpen langs de Lawa-rivier, waaronder L\'Enfant Perdu.',
        en: 'The Aluku are descendants of the followers of Boni (also spelled Bonni), a Maroon leader who fought against colonial authorities in the late 18th century. After Boni\'s death in 1793 his followers fled across the Marowijne River into the territory of what is now French Guiana. There they established villages along the Lawa River, including L\'Enfant Perdu.',
        sr: 'Aluku de naksama fu di volgelingen fu Boni (eke gespeld als Bonni), wan Marron leider die ben feti kopi koloniale otoreteti na laat 18de ieuwen. Baka Boni dede na 1793, hem volgelingen ben ron wey dressi Marowijne Liba go na di territorio fu wani tide Frans-Guyane. Na dey den ben seti fowru nanga Lawa Liba, incluso L\'Enfant Perdu.',
      },
      history: {
        nl: 'Na hun vestiging in Frans-Guyana leefden de Aluku onder Franse jurisdictie, wat hen een bijzondere positie gaf ten opzichte van de overige Marron-groepen in Suriname. In 1969 kregen de Aluku officiële erkenning als inheemse bevolkingsgroep in Frans-Guyana, wat hen bepaalde rechten en Franse sociale voorzieningen gaf. De oprichting van de gemeente Papaïchton in 1969 versterkte hun bestuurlijke positie. L\'Enfant Perdu maakt deel uit van dit relatief beschermde Aluku-territorium.',
        en: 'After settling in French Guiana the Aluku lived under French jurisdiction, giving them a special position relative to the other Maroon groups in Suriname. In 1969 the Aluku received official recognition as an indigenous group in French Guiana, granting them certain rights and access to French social services. The establishment of the commune of Papaïchton in 1969 strengthened their administrative position. L\'Enfant Perdu forms part of this relatively protected Aluku territory.',
        sr: 'Baka den seti libi na Frans-Guyane, Aluku ben libi ondro Franse jurisdictie, die ben gi dem wan spesiale positie ten opzichte van andere Marron groepen na Sranan. Na 1969 Aluku ben kisi officieel erkenning als inheemse bevolkingsgroep na Frans-Guyane, die ben gi dem bepaalde rechten en toegang na Franse sociale diensten. Di oprichting fu di gemeente Papaïchton na 1969 ben versterken dem bestuurlijke positie. L\'Enfant Perdu de deypaart fu dis relatief beschermd Aluku territorio.',
      },
      leadership: {
        nl: 'L\'Enfant Perdu staat onder gezag van een lokale kabiten. De Aluku-samenleving als geheel wordt bestuurd door een granman, die optreedt als vertegenwoordiger tegenover zowel de Franse als de Surinaamse autoriteiten. Het bestuur werkt in samenwerking met de gemeente Papaïchton in Frans-Guyana. De dubbele jurisdictie — Frans en traditioneel-Marron — maakt het Aluku-bestuur tot een complex maar goed gefunctioneerd systeem.',
        en: 'L\'Enfant Perdu is under the authority of a local kabiten. The Aluku society as a whole is governed by a granman, who acts as representative to both French and Surinamese authorities. Governance works in cooperation with the commune of Papaïchton in French Guiana. The dual jurisdiction — French and traditional Maroon — makes Aluku governance a complex but functioning system.',
        sr: 'L\'Enfant Perdu de ondro otoreteti fu wan lokale kabiten. Di Aluku samenleving als geheel de bestuurd doro wan granman, die optree als representant na zowel Franse als Sranan otoreteti. Bestuur werki nanga samenwerking fu di gemeente Papaïchton na Frans-Guyane. Di dubbele jurisdictie — Frans en traditioneel-Marron — meki Aluku bestuur wan complex ma goed-werkende systeem.',
      },
      challenges: {
        nl: 'De Aluku van L\'Enfant Perdu kampen met de gevolgen van goudmijnbouw langs de Lawa, kwikverontreiniging en ontbossing. Als Frans-Guyanees grondgebied genieten zij toegang tot Franse sociale diensten, maar de afgelegen ligging beperkt de praktische toegankelijkheid daarvan. De kleine omvang van de Aluku-gemeenschap maakt culturele continuïteit kwetsbaar. De grensligging brengt ook handel en circulaire migratie met zich mee die traditionele leefpatronen beïnvloeden.',
        en: 'The Aluku of L\'Enfant Perdu face the consequences of gold mining along the Lawa, mercury contamination, and deforestation. As French Guianese territory they have access to French social services, but the remote location limits their practical accessibility. The small size of the Aluku community makes cultural continuity vulnerable. The border location also brings trade and circular migration that affect traditional ways of life.',
        sr: 'Aluku fu L\'Enfant Perdu fesi di gevolgen fu gowtu-olo werki nanga Lawa, kwik-pisi, en ontbossing. Als Frans-Guyanees grondoe den abi toegang na Franse sociale diensten, ma di ver lokatie beperkt di praktische toegankelijkheid. Di kleini grootte fu Aluku kommetii meki kulturele kontinuïteit kwetsbaar. Di grenspositie brengi eke handel en circulaire migrasi die invloede neem op traditionele leefpatronen.',
      },
    },
  },
  { id: 'kotika', society: 'aluku', granman: false, lat: 3.44, lng: -54.025,
    names: { nl: 'Kotika', en: 'Kotika', sr: 'Kotika' },
    subtitles: { nl: 'Aluku-dorp · Lawa (Marowijne)', en: 'Aluku village · Lawa (Marowijne)', sr: 'Aluku fowru · Lawa (Marowijne)' },
    river: 'Lawa (Marowijne)', district: 'Sipaliwini',
    sections: {
      intro: {
        nl: 'Kotika is een Aluku (Boni)-dorp langs de Lawa- of Marowijne-rivier, in Suriname. De Aluku vormen de kleinste van de Surinaamse Marron-samenlevingen, met een bevolking van circa 3.000 mensen, voornamelijk gevestigd op Frans-Guyanees grondgebied in de gemeente Papaïchton.',
        en: 'Kotika is an Aluku (Boni) village along the Lawa or Marowijne river, in Suriname. The Aluku form one of the smallest Maroon societies associated with Suriname, with a population of around 3,000, based predominantly on French Guianese territory in the commune of Papaïchton.',
        sr: 'Kotika na wan Aluku (Boni) fowru nanga Lawa oso Marowijne liba, na Sranan. Aluku de wan fu di kleinste Marron-samenlevingen verbonden nanga Sranan, nanga wan bevolking fu rondoro 3.000, grotendeels na Frans-Guyanees grondoe na di gemeente Papaïchton.',
      },
      founding: {
        nl: 'De Aluku zijn nakomelingen van de volgelingen van Boni (ook gespeld als Bonni), een Marron-leider die in de late 18de eeuw streed tegen de koloniale autoriteiten. Na de dood van Boni in 1793 vluchtten zijn volgelingen over de Marowijne-rivier naar het grondgebied van wat nu Frans-Guyana is. Aldaar vestigden zij dorpen langs de Lawa-rivier, waaronder Kotika.',
        en: 'The Aluku are descendants of the followers of Boni (also spelled Bonni), a Maroon leader who fought against colonial authorities in the late 18th century. After Boni\'s death in 1793 his followers fled across the Marowijne River into the territory of what is now French Guiana. There they established villages along the Lawa River, including Kotika.',
        sr: 'Aluku de naksama fu di volgelingen fu Boni (eke gespeld als Bonni), wan Marron leider die ben feti kopi koloniale otoreteti na laat 18de ieuwen. Baka Boni dede na 1793, hem volgelingen ben ron wey dressi Marowijne Liba go na di territorio fu wani tide Frans-Guyane. Na dey den ben seti fowru nanga Lawa Liba, incluso Kotika.',
      },
      history: {
        nl: 'Na hun vestiging in Frans-Guyana leefden de Aluku onder Franse jurisdictie, wat hen een bijzondere positie gaf ten opzichte van de overige Marron-groepen in Suriname. In 1969 kregen de Aluku officiële erkenning als inheemse bevolkingsgroep in Frans-Guyana, wat hen bepaalde rechten en Franse sociale voorzieningen gaf. De oprichting van de gemeente Papaïchton in 1969 versterkte hun bestuurlijke positie. Kotika maakt deel uit van dit relatief beschermde Aluku-territorium.',
        en: 'After settling in French Guiana the Aluku lived under French jurisdiction, giving them a special position relative to the other Maroon groups in Suriname. In 1969 the Aluku received official recognition as an indigenous group in French Guiana, granting them certain rights and access to French social services. The establishment of the commune of Papaïchton in 1969 strengthened their administrative position. Kotika forms part of this relatively protected Aluku territory.',
        sr: 'Baka den seti libi na Frans-Guyane, Aluku ben libi ondro Franse jurisdictie, die ben gi dem wan spesiale positie ten opzichte van andere Marron groepen na Sranan. Na 1969 Aluku ben kisi officieel erkenning als inheemse bevolkingsgroep na Frans-Guyane, die ben gi dem bepaalde rechten en toegang na Franse sociale diensten. Di oprichting fu di gemeente Papaïchton na 1969 ben versterken dem bestuurlijke positie. Kotika de deypaart fu dis relatief beschermd Aluku territorio.',
      },
      leadership: {
        nl: 'Kotika staat onder gezag van een lokale kabiten. De Aluku-samenleving als geheel wordt bestuurd door een granman, die optreedt als vertegenwoordiger tegenover zowel de Franse als de Surinaamse autoriteiten. Het bestuur werkt in samenwerking met de gemeente Papaïchton in Frans-Guyana. De dubbele jurisdictie — Frans en traditioneel-Marron — maakt het Aluku-bestuur tot een complex maar goed gefunctioneerd systeem.',
        en: 'Kotika is under the authority of a local kabiten. The Aluku society as a whole is governed by a granman, who acts as representative to both French and Surinamese authorities. Governance works in cooperation with the commune of Papaïchton in French Guiana. The dual jurisdiction — French and traditional Maroon — makes Aluku governance a complex but functioning system.',
        sr: 'Kotika de ondro otoreteti fu wan lokale kabiten. Di Aluku samenleving als geheel de bestuurd doro wan granman, die optree als representant na zowel Franse als Sranan otoreteti. Bestuur werki nanga samenwerking fu di gemeente Papaïchton na Frans-Guyane. Di dubbele jurisdictie — Frans en traditioneel-Marron — meki Aluku bestuur wan complex ma goed-werkende systeem.',
      },
      challenges: {
        nl: 'De Aluku van Kotika kampen met de gevolgen van goudmijnbouw langs de Lawa, kwikverontreiniging en ontbossing. Als Frans-Guyanees grondgebied genieten zij toegang tot Franse sociale diensten, maar de afgelegen ligging beperkt de praktische toegankelijkheid daarvan. De kleine omvang van de Aluku-gemeenschap maakt culturele continuïteit kwetsbaar. De grensligging brengt ook handel en circulaire migratie met zich mee die traditionele leefpatronen beïnvloeden.',
        en: 'The Aluku of Kotika face the consequences of gold mining along the Lawa, mercury contamination, and deforestation. As French Guianese territory they have access to French social services, but the remote location limits their practical accessibility. The small size of the Aluku community makes cultural continuity vulnerable. The border location also brings trade and circular migration that affect traditional ways of life.',
        sr: 'Aluku fu Kotika fesi di gevolgen fu gowtu-olo werki nanga Lawa, kwik-pisi, en ontbossing. Als Frans-Guyanees grondoe den abi toegang na Franse sociale diensten, ma di ver lokatie beperkt di praktische toegankelijkheid. Di kleini grootte fu Aluku kommetii meki kulturele kontinuïteit kwetsbaar. Di grenspositie brengi eke handel en circulaire migrasi die invloede neem op traditionele leefpatronen.',
      },
    },
  },

  // ══ MIXED / MULTI-SOCIETY ════════════════════════════════════════════
  { id: 'apatou', society: 'mixed', granman: false, lat: 5.51, lng: -54.34,
    names: { nl: 'Apatou', en: 'Apatou', sr: 'Apatou' },
    subtitles: { nl: 'Gemengd Marron-dorp · Marowijne / Maroni', en: 'Gemengd Marron village · Marowijne / Maroni', sr: 'Gemengd Marron fowru · Marowijne / Maroni' },
    river: 'Marowijne / Maroni', district: 'Guyane',
    sections: {
      intro: {
        nl: 'Apatou is een nederzettingscentrum in French Guiana waar meerdere Marron-samenlevingen samenleven, waaronder Aluku, Paamaka, Ndyuka en Saamaka. Het vormt een knooppunt voor handel, transport en bestuur in de regio langs de Marowijne.',
        en: 'Apatou is a settlement center in French Guiana where multiple Maroon societies coexist, including Aluku, Paamaka, Ndyuka, and Saamaka. It serves as a hub for trade, transport, and administration in the Marowijne region.',
        sr: 'Apatou na wan nederzettings-sentro na Frans-Guyane pe furu Marron samenlevingen libi samen, incluso Aluku, Paamaka, Ndyuka en Saamaka. A de wan knooppunt fu handel, transport, en bestuur na di Marowijne regio.',
      },
      founding: {
        nl: 'Apatou ontstond als nederzettingspunt langs de Marowijne, mede door de aanwezigheid van veerverbindingen en later weginfrastructuur die het toegankelijker maakten voor handel met de kustgebieden. De multi-etnische samenstelling weerspiegelt de overlappende migratiepatronen van verschillende Marron-groepen in de regio gedurende de 19de en 20ste eeuw.',
        en: 'Apatou emerged as a settlement point along the Marowijne, aided by the presence of river crossings and later road infrastructure that made it more accessible for coastal trade. The multi-ethnic composition reflects the overlapping migration patterns of different Maroon groups in the region during the 19th and 20th centuries.',
        sr: 'Apatou ben seti als wan nederzettingspunt nanga Marowijne, helpt doro di aanwezigheid fu liba-oversteken en later weg-infrastructuur die ben meki a meer toegankelijk fu kosta-handel. Di multi-etnische samenstelling sori di overlappende migrasie-patronen fu verschilende Marron groepen na di regio tijdense 19de en 20ste ieuwen.',
      },
      history: {
        nl: 'Als knooppuntgemeenschap heeft Apatou door de decennia heen de aanwezigheid gekend van handelaars, mijnwerkers en ambtenaren naast de permanente Marron-bewoners. De Binnenlandse Oorlog (1986–1992) veroorzaakte ook in dit gebied vluchtelingenstromen richting Frans-Guyana. De goudkoorts van de late 20ste en vroege 21ste eeuw bracht opnieuw buitenstaanders naar de regio, met gevolgen voor de sociale samenhang.',
        en: 'As a hub community, Apatou has seen traders, miners, and officials alongside permanent Maroon residents throughout the decades. The Interior War (1986–1992) also caused refugee flows toward French Guiana in this area. The gold rush of the late 20th and early 21st centuries again brought outsiders to the region, with consequences for social cohesion.',
        sr: 'Als wan knooppunt-kommetii, Apatou ben si handelaars, gowtu-gravers, en ambtenaren samen nanga di permanente Marron bewoners door di desio ieuwen. Di Binnenlandse Oorlog (1986–1992) ben eke meki fisi sma muvi go na Frans-Guyane na dis gebiedo. Di gowtu-koorts fu laat 20ste en vroeg 21ste ieuwen ben brengi baka buitenlanders na di regio, nanga gevolgen fu sociale samenhang.',
      },
      leadership: {
        nl: 'De bestuurlijke structuur van Apatou is complex door de aanwezigheid van meerdere Marron-samenlevingen. Elke gemeenschap heeft eigen kabitens die rapporteren aan hun respectieve granmans. De Franse gemeente-autoriteiten spelen ook een rol in de dagelijkse administratie. Coördinatie tussen de verschillende gemeenschappen vindt plaats via informele overlegstructuren.',
        en: 'The governance structure of Apatou is complex due to the presence of multiple Maroon societies. Each community has its own kabitens reporting to their respective granmans. French municipal authorities also play a role in daily administration. Coordination between the different communities takes place through informal consultation structures.',
        sr: 'Di bestuursstructuur fu Apatou de complex doro di aanwezigheid fu furu Marron samenlevingen. Elke kommetii abi dem eigi kabitens di rapporteer na dem respectieve granmans. Franse gemeente-otoreteti eke speli wan rolo na dagelijkse administratie. Coördinatie tussen di verschilende kommetiis de neem doro informele overlegstructuren.',
      },
      challenges: {
        nl: 'Apatou staat voor uitdagingen die typisch zijn voor gemengde grensplaatsen: sociale spanningen tussen verschillende bevolkingsgroepen, toegang tot overheidsvoorzieningen over twee jurisdicties, en de effecten van goudmijnbouw en bijbehorende criminaliteit. De kwikverontreiniging van de Marowijne treft alle gemeenschappen in het gebied. Grondrechten zijn voor geen van de aanwezige Marron-groepen formeel gewaarborgd.',
        en: 'Apatou faces challenges typical of mixed border settlements: social tensions between different population groups, access to government services across two jurisdictions, and the effects of gold mining and associated crime. Mercury contamination of the Marowijne affects all communities in the area. Land rights are not formally guaranteed for any of the Maroon groups present.',
        sr: 'Apatou fesi uitdagingen die typisch de fu mixed grensnederzettingen: sociale spanningen tussen verschilende bevolkingsgroepen, toegang na otoreteti-diensten over twie jurisdicties, en di effecten fu gowtu-olo werki en verbonden criminaliteit. Kwik-pisi fu Marowijne naki ala kommetiis na di gebiedo. Gronrechten no de formeel gewaarborgd fu nomo wan fu di Marron groepen dey.',
      },
    },
  },
]; // end VILLAGES
