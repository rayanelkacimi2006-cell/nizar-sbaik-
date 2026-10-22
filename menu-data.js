/**
 * NIZAR SBAIK — COMPLETE DIGITAL MENU DATA
 * 
 * All prices are sample estimates in Moroccan Dirhams (MAD) for Agadir
 * and are clearly marked for owner review prior to publication.
 */

const MENU_CATEGORIES = [
  { id: "all", key: "cat_all" },
  { id: "syrian-mezzes", key: "cat_mezzes" },
  { id: "hummus-mutabbal", key: "cat_hummus_mutabbal" },
  { id: "fattoush-tabbouleh", key: "cat_fattoush_tabbouleh" },
  { id: "kibbeh-sambousek", key: "cat_kibbeh_sambousek" },
  { id: "shawarma", key: "cat_shawarma" },
  { id: "syrian-grills", key: "cat_grills" },
  { id: "traditional-mains", key: "cat_mains" },
  { id: "syrian-desserts", key: "cat_desserts" },
  { id: "traditional-drinks", key: "cat_drinks" }
];

const MENU_ITEMS = [
  {
    id: "hummus-bil-tahina",
    categoryId: "hummus-mutabbal",
    tags: ["vegetarian", "signature"],
    price: 40,
    isSamplePrice: true,
    image: "images/food/hummus-bil-tahina.jpg",
    translations: {
      ar: {
        name: "حمص بالطحينة السوري",
        nameSub: "حمص دمشقي ناعم بزيت الزيتون البكر",
        description: "حمص حب مطحون بعناية مع طحينة سمسم فاخرة، عصير ليمون طازج، ثوم ناعم، مزين بزيت زيتون بكر ممتاز، كمون، وبابريكا حلوة. يُقدم مع خبز عربي ساخن."
      },
      fr: {
        name: "Houmous Traditionnel à la Tahina",
        nameSub: "Crémeux et authentique de Damas",
        description: "Purée fine de pois chiches soigneusement sélectionnés, crème de sésame (tahina), jus de citron frais et huile d'olive vierge extra. Servi avec pain pita artisanal chaud."
      },
      en: {
        name: "Traditional Syrian Hummus Bil Tahina",
        nameSub: "Silky Damascene chickpea dip",
        description: "Velvety puréed chickpeas blended with premium sesame tahini, fresh lemon juice, and a gentle touch of garlic, finished with extra virgin olive oil and sweet paprika. Served with warm pita."
      },
      de: {
        name: "Traditioneller Syrischer Hummus Bil Tahina",
        nameSub: "Seidiger Kichererbsen-Dip aus Damaskus",
        description: "Fein pürierte Kichererbsen mit erlesener Sesam-Tahina, frischem Zitronensaft, Knoblauch und erstklassigem Olivenöl nativ extra. Serviert mit warmem Fladenbrot."
      },
      it: {
        name: "Hummus Tradizionale Siriano Bil Tahina",
        nameSub: "Cremosa specialità di ceci di Damasco",
        description: "Vellutata crema di ceci selezionati lavorata con tahina di sesamo pura, succo di limone fresco, aglio delicato e olio extravergine d'oliva. Servito con pane pita caldo."
      }
    }
  },
  {
    id: "mutabbal-baba-ghanoush",
    categoryId: "hummus-mutabbal",
    tags: ["vegetarian", "signature"],
    price: 45,
    isSamplePrice: true,
    image: "images/food/mutabbal-baba-ghanoush.jpg",
    translations: {
      ar: {
        name: "متبل باذنجان مشوي (بابا غنوج)",
        nameSub: "باذنجان مدخن على الفحم بطعم أصيل",
        description: "باذنجان طازج مشوي على الفحم ومهروس مع الطحينة، الثوم، زيت الزيتون البكر، ودبس الرمان الحلبي، مزين بحبات الرمان الطازجة والجوز."
      },
      fr: {
        name: "Moutabal d'Aubergines Grillées (Baba Ghanoush)",
        nameSub: "Aubergine fumée au charbon de bois",
        description: "Aubergines rôties sur braises, concassées et mariées à la tahina, ail, huile d'olive extra vierge, mélasse de grenade d'Alep et graines de grenade croquantes."
      },
      en: {
        name: "Charcoal Mutabbal & Baba Ghanoush",
        nameSub: "Smoked eggplant dip with pomegranate",
        description: "Fresh eggplants roasted over natural charcoal, blended with sesame tahini, garlic, Aleppo pomegranate molasses, extra virgin olive oil, and fresh pomegranate jewels."
      },
      de: {
        name: "Mutabbal & Baba Ghanoush vom Holzkohlengrill",
        nameSub: "Geräucherter Auberginen-Dip mit Granatapfel",
        description: "Über Holzkohle geröstete Auberginen, verfeinert mit Sesam-Tahina, Knoblauch, feiner Aleppiner Granatapfelmelasse und frischen rubinroten Granatapfelkernen."
      },
      it: {
        name: "Mutabbal e Baba Ghanoush alla Brace",
        nameSub: "Melanzane affumicate con melassa di melograno",
        description: "Melanzane fresche affumicate sulla brace, unite a tahina di sesamo, aglio, finissima melassa di melograno di Aleppo e chicchi di melograno freschi."
      }
    }
  },
  {
    id: "fattoush-salad",
    categoryId: "fattoush-tabbouleh",
    tags: ["vegetarian", "signature"],
    price: 45,
    isSamplePrice: true,
    image: "images/food/fattoush-salad.jpg",
    translations: {
      ar: {
        name: "فتوش شامي مقرمش بالسمّاق",
        nameSub: "سلطة الحديقة الشامية مع خبز محمص",
        description: "مزيج منعش من الخس البلدي، الطماطم، الخيار، الفجل، النعناع البري، البقلة، ورقائق الخبز المحمص المقرمش مع تتبيلة زيت الزيتون، السماق البلدي، ودبس الرمان."
      },
      fr: {
        name: "Salade Fattouche Shamiyyeh au Soumak",
        nameSub: "Fraîcheur croquante et mélasse de grenade",
        description: "Croquante salade damascène de tomates mûres, concombres, radis, menthe fraîche, pourpier et éclats de pita dorée croustillante, assaisonnée de soumak pur et mélasse de grenade."
      },
      en: {
        name: "Crispy Damascene Fattoush Salad",
        nameSub: "Garden greens with toasted pita & sumac",
        description: "Vibrant Syrian country salad of crisp lettuce, cucumbers, ripe tomatoes, radishes, fresh mint, and golden fried pita crisps, tossed in wild sumac, pomegranate molasses, and extra virgin olive oil."
      },
      de: {
        name: "Knuspriger Damaszener Fattusch-Salat",
        nameSub: "Gartenfrischer Levantiner Salat mit Sumach",
        description: "Knackiger Salat mit reifen Tomaten, Gurken, Radieschen, frischer Minze und gerösteten Fladenbrotchips, verfeinert mit fruchtigem Sumach und edler Granatapfelmelasse."
      },
      it: {
        name: "Insalata Fattoush di Damasco al Sumac",
        nameSub: "Verdure croccanti, pita dorata e melograno",
        description: "Freschissima insalata levantina con lattuga croccante, cetrioli, pomodori maturi, ravanelli, menta fresca e croccanti cialde di pita, con vinaigrette al sumac e melassa di melograno."
      }
    }
  },
  {
    id: "tabbouleh-salad",
    categoryId: "fattoush-tabbouleh",
    tags: ["vegetarian", "signature"],
    price: 45,
    isSamplePrice: true,
    image: "images/food/tabbouleh-salad.jpg",
    translations: {
      ar: {
        name: "تبولة شامية أصلية",
        nameSub: "بقدونس طازج مفروم ناعماً مع البرغل والليمون",
        description: "بقدونس أخضر بلدي طازج مفروم بالسكين على الطريقة الشامية، نعناع طازج، طماطم مفرومة ناعمة، برغل أسمر ناعم، عصير ليمون طبيعي، وزيت زيتون بكر صافٍ."
      },
      fr: {
        name: "Taboulé Syrien Artisanal",
        nameSub: "Persil plat finement ciselé et menthe",
        description: "Authentique taboulé syrien composé d'une abondance de persil plat fraîchement ciselé à la main, menthe vive, dés de tomates, une touche de boulghour fin, citron pressé et huile d'olive vierge."
      },
      en: {
        name: "Authentic Syrian Tabbouleh",
        nameSub: "Hand-chopped flat parsley & bulgur",
        description: "Traditional Levant tabbouleh dominated by finely hand-chopped flat-leaf parsley, fresh spearmint, ripe diced tomatoes, a delicate sprinkle of fine bulgur, freshly squeezed lemon juice, and virgin olive oil."
      },
      de: {
        name: "Authentisches Syrisches Tabouleh",
        nameSub: "Fein gehackte Petersilie, Minze & Bulgur",
        description: "Klassisches Tabouleh mit reichlich frischer glatter Petersilie von Hand geschnitten, aromatischer Minze, Tomatenwürfeln, feinstem Bulgur, frischem Zitronensaft und Olivenöl."
      },
      it: {
        name: "Tabbouleh Siriano Artigianale",
        nameSub: "Prezzemolo fresco tritato a mano e bulgur",
        description: "L'autentico tabbouleh della tradizione levantina: tripudio di prezzemolo fresco tagliato a mano, menta profumata, pomodori a cubetti, un velo di bulgur fine, succo di limone e olio extravergine."
      }
    }
  },
  {
    id: "kibbeh-halabiyyeh",
    categoryId: "kibbeh-sambousek",
    tags: ["meat", "signature", "chef-special"],
    price: 65,
    isSamplePrice: true,
    image: "images/food/kibbeh-halabiyyeh.jpg",
    translations: {
      ar: {
        name: "كبة حلبية مقلية (4 حبات)",
        nameSub: "محشوة باللحم المفروم والبهارات الحلبية والصنوبر",
        description: "أقراص الكبة الحلبية الذهبية المقرمشة المصنوعة من البرغل ولحم العجل الناعم، محشوة بلحم ضأن مفروم متبل بسبع بهارات حلبية، بصل مكرمل وصنوبر محمص."
      },
      fr: {
        name: "Kébbé Halabiyyeh d'Alep (4 pièces)",
        nameSub: "Coque croustillante de boulghour et agneau parfumé",
        description: "Fameuses croquettes syriennes dorées en ogive, coque fine de boulghour farcie d'agneau émincé savoureux, oignons fondants, 7 épices traditionnelles d'Alep et pignons de pin torréfiés."
      },
      en: {
        name: "Aleppo Crispy Fried Kibbeh (4 pcs)",
        nameSub: "Stuffed with spiced minced meat & pine nuts",
        description: "Golden torpedo-shaped cracked wheat croquettes handcrafted with a crisp shell, generously filled with seasoned minced lamb, sweet caramelized onions, traditional Aleppo 7-spices, and roasted pine nuts."
      },
      de: {
        name: "Aleppiner Knusprige Kibbeh (4 Stück)",
        nameSub: "Gefüllt mit gewürztem Hackfleisch & Pinienkernen",
        description: "Goldbraun frittierte Bulgur-Taschen, gefüllt mit saftigem Hackfleisch, karamellisierten Zwiebeln, authentischen Aleppiner 7-Gewürzen und gerösteten Pinienkernen."
      },
      it: {
        name: "Kibbeh Halabiyyeh di Aleppo (4 pz)",
        nameSub: "Guscio croccante di bulgur ripieno di carne e pinoli",
        description: "Pregiate crocchette siriane a fuso dorate alla perfezione, guscio sottile di grano spezzato con ripieno di carne tritata aromatizzata alle 7 spezie siriane, cipolle dolci e pinoli tostati."
      }
    }
  },
  {
    id: "sambousek-duo",
    categoryId: "kibbeh-sambousek",
    tags: ["vegetarian-option", "chef-special"],
    price: 55,
    isSamplePrice: true,
    image: "images/food/sambousek-duo.jpg",
    translations: {
      ar: {
        name: "سمبوسك مشكل (جبنة ولحم - 4 حبات)",
        nameSub: "عجينة هشة ذهبية محشوة بخلطاتنا الخاصة",
        description: "فطائر سمبوسك مقرمشة مصنوعة يدوياً: حبتان بحشوة لحم العجل والبهارات الشامية والصنوبر، وحبتان بحشوة جبن العكاوي والنعناع وحبة البركة."
      },
      fr: {
        name: "Duo de Samboussek Artisanal (4 pièces)",
        nameSub: "Feuilletage croustillant viande hachée & fromage akawi",
        description: "Délicieux chaussons dorés croustillants: deux farcis à la viande émincée parfumée aux épices de Damas, et deux au fromage akawi fondant, menthe fraîche et nigelle."
      },
      en: {
        name: "Artisanal Sambousek Assortment (4 pcs)",
        nameSub: "Crisp golden pastries with meat & Akawi cheese",
        description: "Crispy handcrafted Levant half-moon pastries: two filled with spiced minced meat, onions and pine nuts, and two stuffed with melted Akawi cheese, spearmint, and black seed."
      },
      de: {
        name: "Artisanale Sambousek-Variation (4 Stück)",
        nameSub: "Knusprige Teigtaschen mit Fleisch & Akawi-Käse",
        description: "Handgemachte goldene Teigtaschen: zwei gefüllt mit würzigem Rinderhack, levantinischen Kräutern und Pinienkernen, zwei mit cremigem Akawi-Käse, Minze und Schwarzkümmel."
      },
      it: {
        name: "Assortimento di Sambousek (4 pz)",
        nameSub: "Sfoglia dorata con carne speziata e formaggio Akawi",
        description: "Fragrati fagottini a mezzaluna: due ripieni di carne tritata con spezie siriane e pinoli, e due farciti con formaggio Akawi filante, menta e semi di nigella."
      }
    }
  },
  {
    id: "yalanji-grape-leaves",
    categoryId: "syrian-mezzes",
    tags: ["vegetarian", "signature"],
    price: 50,
    isSamplePrice: true,
    image: "images/food/yalanji-grape-leaves.jpg",
    translations: {
      ar: {
        name: "يلنجي ورق عنب دمشقي",
        nameSub: "ورق عنب محشو بالأرز والخضار وزيت الزيتون ودبس الرمان",
        description: "أوراق عنب غضة ملفوفة بإتقان ومطهوة على نار هادئة بزيت الزيتون البكر وعصير الليمون، محشوة بأرز الحبة القصيرة، طماطم، نعناع، بقدونس، ودبس الرمان الطبيعي."
      },
      fr: {
        name: "Yalanji — Feuilles de Vigne Farcies de Damas",
        nameSub: "Riz parfumé, fines herbes et mélasse de grenade",
        description: "Feuilles de vigne délicatement roulées à la main, mijotées dans l'huile d'olive et le jus de citron, farcies de riz court, tomates concassées, menthe, persil et mélasse de grenade acidulée."
      },
      en: {
        name: "Damascene Yalanji Stuffed Grape Leaves",
        nameSub: "Vegetarian vine leaves braised in olive oil & lemon",
        description: "Tender vine leaves rolled by hand and slow-braised in extra virgin olive oil and lemon juice, filled with short-grain rice, fresh parsley, tomatoes, mint, and tart pomegranate molasses."
      },
      de: {
        name: "Damaszener Yalanji Weinblätter",
        nameSub: "Gefüllte Weinblätter in Olivenöl & Zitrone",
        description: "Zarte Weinblätter von Hand gerollt und in feinstem Olivenöl langsam geschmort, gefüllt mit Duftreis, frischer Minze, Petersilie, Tomaten und feinherber Granatapfelmelasse."
      },
      it: {
        name: "Yalanji — Foglie di Vite Ripiene di Damasco",
        nameSub: "Riso aromatico, erbe fresche e melassa di melograno",
        description: "Tenerissime foglie di vite arrotolate a mano e cotte dolcemente con olio extravergine e limone, con ripieno di riso speziato, menta, pomodori e melassa di melograno."
      }
    }
  },
  {
    id: "muhammara-dip",
    categoryId: "syrian-mezzes",
    tags: ["vegetarian", "signature"],
    price: 45,
    isSamplePrice: true,
    image: "images/food/muhammara-dip.jpg",
    translations: {
      ar: {
        name: "محمرة حلبية بالجوز ودبس الرمان",
        nameSub: "فلفل أحمر مشوي مع الجوز وزيت الزيتون البكر",
        description: "مقبلة حلبية شهيرة من الفليفلة الحمراء الحلوة والمشوية، مطحونة مع الجوز المحمص، فتات الخبز، الطحينة، الكمون، ودبس الرمان وزيت الزيتون."
      },
      fr: {
        name: "Mouhammara d'Alep aux Noix et Poivrons",
        nameSub: "Poivrons rouges rôtis et mélasse de grenade",
        description: "Emblématique mezze aleppin préparé à base de poivrons rouges rôtis broyés avec des cerneaux de noix croquants, chapelure fine, tahina, cumin et filet généreux d'huile d'olive."
      },
      en: {
        name: "Aleppo Muhammara Walnut & Red Pepper Dip",
        nameSub: "Roasted red peppers with walnuts & pomegranate",
        description: "Renowned Aleppo specialty featuring sweet roasted red peppers blended with crushed walnuts, breadcrumbs, cumin, extra virgin olive oil, and pomegranate molasses."
      },
      de: {
        name: "Aleppiner Muhammara Walnuss-Paprika-Dip",
        nameSub: "Geröstete rote Paprika mit Walnüssen & Granatapfel",
        description: "Berühmte Spezialität aus Aleppo: geröstete süße Paprika, püriert mit knackigen Walnüssen, feinen Gewürzen, edlem Olivenöl und säuerlicher Granatapfelmelasse."
      },
      it: {
        name: "Muhammara di Aleppo alle Noci e Peperoni",
        nameSub: "Peperoni rossi arrostiti, noci e melassa di melograno",
        description: "Grande classico di Aleppo: crema ricca di peperoni dolci arrostiti, noci tostate, cumino, olio extravergine e melassa di melograno, dal perfetto equilibrio agro-dolce."
      }
    }
  },
  {
    id: "batata-harra",
    categoryId: "syrian-mezzes",
    tags: ["vegetarian", "spicy"],
    price: 40,
    isSamplePrice: true,
    image: "images/food/batata-harra.jpg",
    translations: {
      ar: {
        name: "بطاطا حرة بالثوم والكزبرة",
        nameSub: "مكعبات بطاطا مقرمشة بنكهة الكزبرة والشطة الشامية",
        description: "مكعبات بطاطا ذهبية مقرمشة مقلبة في مقلاة مع ثوم محمر، كزبرة خضراء طازجة، رقائق فلفل أحمر حلبي، رشة كمون وعصير ليمون طازج."
      },
      fr: {
        name: "Batata Harra Épicée à la Coriandre",
        nameSub: "Pommes de terre dorées, ail et piment d'Alep",
        description: "Dés de pommes de terre dorés et croustillants sautés à l'ail frais, coriandre parfumée, flocons de piment doux d'Alep et filet de jus de citron."
      },
      en: {
        name: "Crispy Syrian Batata Harra",
        nameSub: "Spiced golden potatoes with garlic & fresh cilantro",
        description: "Crispy golden potato cubes tossed in sizzling garlic, vibrant fresh cilantro, crushed Aleppo chili flakes, cumin, and a squeeze of fresh lemon juice."
      },
      de: {
        name: "Würzige Syrische Batata Harra",
        nameSub: "Goldene Bratkartoffelwürfel mit Knoblauch & Koriander",
        description: "Knusprig geröstete Kartoffelwürfel geschwenkt mit gebratenem Knoblauch, frischem Koriander, milden Aleppiner Chiliflocken und Zitrone."
      },
      it: {
        name: "Batata Harra Siriana Croccante",
        nameSub: "Patate dorate saltate con aglio, coriandolo e peperoncino",
        description: "Croccanti cubetti di patata dorati in padella con aglio sfrigolante, coriandolo fresco, fiocchi di peperoncino dolce siriano e spruzzata di limone."
      }
    }
  },
  {
    id: "chicken-shawarma",
    categoryId: "shawarma",
    tags: ["meat", "signature", "popular"],
    price: 75,
    isSamplePrice: true,
    image: "images/food/chicken-shawarma.jpg",
    translations: {
      ar: {
        name: "صحن شاورما دجاج سورية أصيلة",
        nameSub: "شرائح دجاج متبلة بالبهارات السورية وثومية ومخلل",
        description: "شرائح صدور دجاج رفيعة متبلة ببهارات الشاورما الشامية ومحمصة على السيخ العمودي، تُقدم مع كريم الثوم (التومية)، مخلل الخيار السوري، بطاطا مقلية، وخبز الصاج."
      },
      fr: {
        name: "Assiette Shawarma de Poulet à la Syrienne",
        nameSub: "Émincé mariné aux épices de Damas, crème d'ail et pickles",
        description: "Fines lamelles de volaille marinées aux épices traditionnelles, rôties à la broche verticale. Servies avec la fameuse crème d'ail toum, concombres marinés, frites dorées et pain saj."
      },
      en: {
        name: "Authentic Syrian Chicken Shawarma Platter",
        nameSub: "Spiced carved chicken, garlic toum & saj bread",
        description: "Tender thinly-sliced chicken breast marinated overnight in Damascene spices, carved from the spit. Served with signature whipped garlic toum, Syrian pickles, golden fries, and toasted saj bread."
      },
      de: {
        name: "Syrischer Hähnchen-Shawarma-Teller",
        nameSub: "Zart mariniertes Fleisch mit Knoblauch-Toum & Saj-Brot",
        description: "Hauchdünne Streifen zart marinierten Hähnchens vom traditionellen Drehspieß. Serviert mit hausgemachter Knoblauchcreme (Toum), syrischen Pickles, Pommes und warmem Saj-Fladenbrot."
      },
      it: {
        name: "Piatto Shawarma di Pollo alla Siriana",
        nameSub: "Sottili striscioline marinate, crema d'aglio e pane saj",
        description: "Tenerissimo pollo marinato con le spezie segrete di Damasco, cotto allo spiedo verticale. Servito con crema d'aglio toum artigianale, cetriolini sottaceto siriani, patatine e pane saj."
      }
    }
  },
  {
    id: "beef-shawarma",
    categoryId: "shawarma",
    tags: ["meat", "popular"],
    price: 85,
    isSamplePrice: true,
    image: "images/food/beef-shawarma.jpg",
    translations: {
      ar: {
        name: "صحن شاورما لحم عجل سورية",
        nameSub: "شرائح لحم عجل متبلة مع صوص الطحينة وبصل السماق",
        description: "شرائح لحم عجل طري متبلة بالخل والبهارات الشامية المشكلة، تُقدم مع صوص الطحينة الغني، سلطة البصل بالسماق والبقدونس، طماطم مشوية، وخبز صاج طازج."
      },
      fr: {
        name: "Assiette Shawarma de Bœuf Syrien",
        nameSub: "Émincé de bœuf tendre, sauce tahina et oignons au soumak",
        description: "Fines lamelles de bœuf tendre infusées de marinade levantine aux sept épices. Servies avec onctueuse sauce tahina, salade d'oignons rouges au soumak, tomates grillées et pain saj."
      },
      en: {
        name: "Syrian Spiced Beef Shawarma Platter",
        nameSub: "Tender beef slices with tahini sauce & sumac onions",
        description: "Prime beef strips marinated in Levant aromatic spices, roasted to succulent perfection. Accompanied by creamy tahini sauce, biwaz sumac-onion salad, grilled tomatoes, and freshly pressed saj bread."
      },
      de: {
        name: "Syrischer Rindfleisch-Shawarma-Teller",
        nameSub: "Zartes Rindfleisch mit Tahina-Sauce & Sumach-Zwiebeln",
        description: "Feine Rindfleischstreifen in traditioneller levantinischer Gewürzmarinade gebraten. Serviert mit nussiger Tahina-Sauce, Sumach-Zwiebel-Salat, gegrillten Tomaten und frischem Saj-Brot."
      },
      it: {
        name: "Piatto Shawarma di Manzo alla Siriana",
        nameSub: "Strisce di manzo speziato con salsa tahina e cipolle al sumac",
        description: "Pregiato manzo tagliato sottile e marinato con spezie damascene, servito con ricca salsa tahina, insalata biwaz di cipolle rosse e prezzemolo al sumac e pane saj artigianale."
      }
    }
  },
  {
    id: "shish-taouk",
    categoryId: "syrian-grills",
    tags: ["meat", "grill", "signature"],
    price: 90,
    isSamplePrice: true,
    image: "images/food/shish-taouk.jpg",
    translations: {
      ar: {
        name: "شيش طاووق سوري على الفحم",
        nameSub: "أسياخ دجاج متبلة بالزبادي والثوم والليمون والمشاوي",
        description: "قطع صدور دجاج طرية منقوعة في خلطة الزبادي، معجون الفليفلة الحلبية، الثوم، والزعتر البري، مشوية على الفحم الطبيعي. تُقدم مع الخضار المشوية وصوص الثوم."
      },
      fr: {
        name: "Chich Taouk Syrien Grillé au Charbon",
        nameSub: "Brochettes de poulet marinées au yaourt, ail et origan",
        description: "Morceaux de poulet tendres et juteux marinés au yaourt crémeux, pâte de poivrons doux d'Alep, ail et herbes sauvages, rôtis à la braise. Servis avec légumes braisés et crème toum."
      },
      en: {
        name: "Charcoal-Grilled Syrian Shish Taouk",
        nameSub: "Tender marinated chicken skewers with garlic whip",
        description: "Juicy chicken breast cubes marinated in Greek yogurt, mild Aleppo pepper paste, garlic, and wild mountain oregano, grilled over wood charcoal. Served with charred vegetables and garlic whip."
      },
      de: {
        name: "Holzkohle-Gegrillter Shish Taouk",
        nameSub: "Zarte Hähnchenspieße mit Knoblauch-Dip",
        description: "Saftige Hähnchenbrustwürfel in milder Aleppiner Paprikapaste, Joghurt, Knoblauch und Wildoregano mariniert und über Holzkohle gegrillt. Mit Grillgemüse und Knoblauchcreme serviert."
      },
      it: {
        name: "Shish Taouk Siriano alla Brace",
        nameSub: "Spiedini di pollo marinati allo yogurt e aglio",
        description: "Bocconcini di pollo morbidissimi marinati nello yogurt, crema di peperoni dolci di Aleppo, aglio e origano selvatico, cotti sulla carbonella. Serviti con verdure arrostite e crema toum."
      }
    }
  },
  {
    id: "kebab-halabi",
    categoryId: "syrian-grills",
    tags: ["meat", "grill", "signature", "chef-special"],
    price: 95,
    isSamplePrice: true,
    image: "images/food/kebab-halabi.jpg",
    translations: {
      ar: {
        name: "كباب حلبي أصيل على الفحم",
        nameSub: "لحم ضأن وعجل مفروم بالبهارات الحلبية والبقدونس",
        description: "أسياخ كباب مصنوعة من لحم الضأن والعجل المفروم مع بهارات حلب العطرية، البقدونس والصنوبر، مشوية على لهب الفحم. تُقدم مع صلصة الطماطم المشوية وخبر البيواز."
      },
      fr: {
        name: "Kebab Halabi Authentique d'Alep",
        nameSub: "Agneau et bœuf hachés aux épices traditionnelles",
        description: "Brochettes d'agneau et bœuf émincés parfumés au piment doux d'Alep, persil plat et pignons de pin, grillées au charbon de bois. Servies avec sauce tomate grillée et pain biwaz."
      },
      en: {
        name: "Authentic Aleppo Lamb Kebab (Kebab Halabi)",
        nameSub: "Minced lamb & beef with Aleppo spices over charcoal",
        description: "Succulent skewers of prime minced lamb and beef hand-mixed with Aleppo aromatic spices, fresh parsley, and pine nuts, grilled over open coals. Served with charred tomato sauce and biwaz bread."
      },
      de: {
        name: "Authentischer Aleppo Kebab (Kebab Halabi)",
        nameSub: "Lamm- & Rinderhack mit Aleppiner Gewürzen",
        description: "Feinste Spieße aus Lamm- und Rinderhackfleisch mit Aleppiner Gewürzen, frischer Petersilie und Pinienkernen, auf Holzkohle gegrillt. Mit geschmorter Tomatensauce serviert."
      },
      it: {
        name: "Kebab Halabi Tradizionale di Aleppo",
        nameSub: "Spiedini di agnello e manzo con spezie siriane alla brace",
        description: "Spiedini preparati a mano con pregiata carne di agnello e manzo, spezie profumate di Aleppo, prezzemolo e pinoli, cotti alla brace viva. Serviti con salsa di pomodoro arrosto e pane biwaz."
      }
    }
  },
  {
    id: "mixed-syrian-grill",
    categoryId: "syrian-grills",
    tags: ["meat", "grill", "signature", "chef-special"],
    price: 165,
    isSamplePrice: true,
    image: "images/food/mixed-syrian-grill.jpg",
    translations: {
      ar: {
        name: "مشاوي مشكلة سورية فاخرة",
        nameSub: "تشكيلة كباب حلبي، شيش طاووق، ولحم تكة مشوي على الفحم",
        description: "طبق المشاوي الشامي الملكي: سيخ كباب حلبي، سيخ شيش طاووق متبل، وسيخ لحم عجل تكة، تُقدم مع الخضار المشوية، خبز محمر بالصلصة الشامية، التومية وصوص الطحينة."
      },
      fr: {
        name: "Grand Plateau de Grillades Mixtes Syriennes",
        nameSub: "Chich Taouk, Kebab d'Alep et brochette d'agneau tikka",
        description: "Le festin royal des braises levantines: brochette de Chich Taouk tendre, Kebab d'Alep savoureux et pièce d'agneau tikka, accompagnés de légumes grillés, pain épicé, crème toum et tahina."
      },
      en: {
        name: "Royal Syrian Mixed Grill Platter",
        nameSub: "Shish Taouk, Aleppo Kebab & Lamb Tikka over charcoal",
        description: "The ultimate Levant barbecue experience: skewers of tender Shish Taouk, spiced Aleppo Kebab, and succulent Lamb Tikka, served with ember-roasted vegetables, spiced biwaz bread, garlic toum, and tahini dip."
      },
      de: {
        name: "Königliche Syrische Grillplatte (Mashawi Mushakkal)",
        nameSub: "Shish Taouk, Aleppo Kebab & Lamm Tikka vom Holzkohlefeuer",
        description: "Das ultimative Grillerlebnis: Spieße von saftigem Shish Taouk, gewürztem Aleppo Kebab und zartem Lamm Tikka, serviert mit gegrilltem Gemüse, gewürztem Fladenbrot und hausgemachten Saucen."
      },
      it: {
        name: "Gran Grigliata Mista Reale alla Siriana",
        nameSub: "Shish Taouk, Kebab di Aleppo e Tikka di agnello alla brace",
        description: "Il sontuoso piatto imperiale della tradizione siriana: spiedino di Shish Taouk, spiedino di Kebab Halabi e tenero Tikka d'agnello, con verdure alla brace, pane speziato, salsa toum e tahina."
      }
    }
  },
  {
    id: "fattet-hummus",
    categoryId: "traditional-mains",
    tags: ["vegetarian-option", "signature", "chef-special"],
    price: 70,
    isSamplePrice: true,
    image: "images/food/fattet-hummus.jpg",
    translations: {
      ar: {
        name: "فتة حمص دمشقية بالسمن العربي والمكسرات",
        nameSub: "طبقات من الخبز المحمص والحمص الدافئ والزبادي بالثوم",
        description: "طبق دمشقي أصيل وعريق: طبقة من الخبز المحمص المقرمش، حمص مسلوق دافئ، مغطاة بصوص الزبادي الغني بالطحينة والثوم، مسقاة بالسمن البلدي الساخن والصنوبر واللوز المحمص."
      },
      fr: {
        name: "Fatteh de Houmous Traditionnelle de Damas",
        nameSub: "Pain doré, pois chiches tièdes, yaourt à l'ail et fruits secs",
        description: "Plat damascène emblématique: étages de pain croustillant, pois chiches tièdes fondants, nappés d'une sauce veloutée de yaourt, tahina et ail, arrosés de beurre clarifié fumant et d'amandes dorées."
      },
      en: {
        name: "Damascene Fattet Hummus with Brown Butter Nuts",
        nameSub: "Layered crispy bread, warm chickpeas & garlic yogurt",
        description: "Timeless Syrian comfort delicacy: layers of golden toasted pita and tender warm chickpeas drenched in garlic-tahini yogurt, crowned with sizzling clarified butter and toasted almonds and pine nuts."
      },
      de: {
        name: "Damaszener Fattet Hummus mit Nussbutter",
        nameSub: "Geröstetes Brot, Kichererbsen & Knoblauch-Joghurt",
        description: "Traditioneller syrischer Klassiker: knuspriges Fladenbrot und warme Kichererbsen, überzogen mit cremiger Tahina-Knoblauch-Joghurtsauce, veredelt mit zischender Nussbutter und gerösteten Mandeln."
      },
      it: {
        name: "Fatteh di Ceci Tradizionale di Damasco",
        nameSub: "Pane croccante, ceci caldi, salsa yogurt e mandorle tostate",
        description: "Autentica specialità damascena a strati: crostini di pane dorato, ceci tiepidi, vellutata crema di yogurt alla tahina e aglio, rifinita con burro chiarificato spumeggiante e frutta secca tostata."
      }
    }
  },
  {
    id: "ouzi-suriyyeh",
    categoryId: "traditional-mains",
    tags: ["meat", "signature", "chef-special"],
    price: 110,
    isSamplePrice: true,
    image: "images/food/ouzi-suriyyeh.jpg",
    translations: {
      ar: {
        name: "أوزي سوري بلحم الغنم والمكسرات",
        nameSub: "أرز مبهر بالبهارات الشامية مع لحم ضأن طري ومكسرات محمصة",
        description: "طبق الأعياد والمناسبات الشامي الفاخر: أرز طويل الحبة مطبوخ بمرق اللحم والبهارات الشامية العطرية، مغطى بقطع لحم ضأن طرية بطيئة الطهي، بازلاء خضراء، صنوبر ولوز محمص."
      },
      fr: {
        name: "Ouzi Syrien à l'Agneau Fondant et Fruits Secs",
        nameSub: "Riz parfumé aux épices levantines et agneau mijoté",
        description: "Plat de fête prestigieux: riz basmati infusé aux épices orientales, garni de tendres morceaux d'agneau confit à basse température, petits pois doux, amandes et pignons torréfiés."
      },
      en: {
        name: "Syrian Royal Lamb Ouzi with Fragrant Rice",
        nameSub: "Slow-cooked tender lamb with spiced rice & roasted nuts",
        description: "Prestigious celebratory dish of Syria: fragrant long-grain rice infused with Damascus warm spices, topped with slow-braised melt-in-your-mouth lamb, sweet green peas, and golden roasted nuts."
      },
      de: {
        name: "Königliches Syrisches Lamm-Ouzi",
        nameSub: "Langsam geschmortes Lamm mit Duftreis & Nüssen",
        description: "Festliches syrisches Prachtgericht: aromatischer Langkornreis mit edlen Gewürzen, gekrönt von butterzart geschmortem Lammfleisch, Erbsen und reichlich gerösteten Nüssen."
      },
      it: {
        name: "Ouzi Reale Siriano con Agnello e Riso Speziato",
        nameSub: "Agnello stufato a fuoco lento, riso aromatico e frutta secca",
        description: "Il sontuoso piatto festivo siriano: riso basmati profumato alle spezie di Damasco, coperto con tenerissimo agnello cotto a bassa temperatura, piselli dolci e frutta secca tostata."
      }
    }
  },
  {
    id: "kunafa-nabulsiyyeh",
    categoryId: "syrian-desserts",
    tags: ["dessert", "vegetarian", "signature"],
    price: 50,
    isSamplePrice: true,
    image: "images/food/kunafa-nabulsiyyeh.jpg",
    translations: {
      ar: {
        name: "كنافة شامية ساخنة بالجبنة والفستق الحلبي",
        nameSub: "عجينة كنافة مقرمشة بالجبنة الذائبة والقطر المعطر بماء الورد",
        description: "كنافة طازجة محضرة على أصولها: شعيرية الكنافة الذهبية المقرمشة محشوة بطبقة غنية من الجبنة السورية الحلوة الذائبة، مسقية بالقطر المعطر بماء الزهر وماء الورد، ومزينة بالفستق الحلبي."
      },
      fr: {
        name: "Kounafa Chaude au Fromage Fondant & Pistaches d'Alep",
        nameSub: "Cheveux d'ange croustillants et sirop à la fleur d'oranger",
        description: "Célèbre dessert doré servi fumant: cheveux d'ange croustillants au beurre fin, garniture généreuse de fromage doux fondant, arrosé d'un sirop parfumé à la rose et pistaches d'Alep broyées."
      },
      en: {
        name: "Warm Syrian Kunafa with Sweet Melted Cheese",
        nameSub: "Crisp shredded phyllo, melted cheese & Aleppo pistachios",
        description: "Served warm and bubbling: golden crisp kataifi shredded pastry layered with sweet melted Levant cheese, soaked in orange blossom and rose water syrup, and crowned with vibrant green Aleppo pistachios."
      },
      de: {
        name: "Warme Syrische Kunafa mit Zartem Käse",
        nameSub: "Knuspriges Engelshaar mit süßem Käse & Aleppiner Pistazien",
        description: "Warm servierte Spezialität: goldbraun gebackene Kataifi-Fäden mit einer zart schmelzenden süßen Käsefüllung, aromatisiert mit Rosen- und Orangenblütensirup und reichlich Pistazien."
      },
      it: {
        name: "Kunafa Calda al Formaggio Dolce e Pistacchi di Aleppo",
        nameSub: "Pasta kataifi croccante, formaggio filante e acqua di rose",
        description: "Servita calda dal forno: finissima pasta kataifi dorata e croccante con un cuore di formaggio dolce filante, irrorata con sciroppo all'aroma di fiori d'arancio e pistacchi tritati."
      }
    }
  },
  {
    id: "baklava-pistachio",
    categoryId: "syrian-desserts",
    tags: ["dessert", "vegetarian", "signature"],
    price: 45,
    isSamplePrice: true,
    image: "images/food/baklava-pistachio.jpg",
    translations: {
      ar: {
        name: "بقلاوة حلبية بالفستق الحلبي الفاخر",
        nameSub: "رقائق الجلاش المقرمشة المحشوة بالفستق الأخضر والقطر",
        description: "طبقات رقيقة وهشة من رقائق الفيلو المحشوة بسخاء بالفستق الحلبي الأخضر الطازج والمحمصة بالسمن البلدي الطبيعي، مشربة بقطر خفيف معطر بماء الورد."
      },
      fr: {
        name: "Baklava Halabi aux Pistaches Vertes d'Alep",
        nameSub: "Fines feuilles de pâte filo croustillantes et miel parfumé",
        description: "Délicats losanges de pâte filo dorée feuilletée au beurre clarifié, généreusement garnis de pistaches fraîches d'Alep concassées et délicatement imbibés d'un sirop à l'eau de rose."
      },
      en: {
        name: "Aleppo Green Pistachio Baklava Selection",
        nameSub: "Flaky golden phyllo layered with Syrian green pistachios",
        description: "Artisanal diamonds of paper-thin crispy phyllo pastry, generously packed with crushed emerald Aleppo pistachios and clarified butter, kissed with a light rose blossom syrup."
      },
      de: {
        name: "Aleppiner Baklava mit Grünen Pistazien",
        nameSub: "Blättriger Filoteig gefüllt mit besten Pistazien & Sirup",
        description: "Hauchdünne Schichten goldgelben Filoteigs, reichhaltig gefüllt mit grünen Aleppiner Pistazien, gebacken mit feiner Butter und verfeinert mit dezentem Rosenwassersirup."
      },
      it: {
        name: "Selezione di Baklava di Aleppo ai Pistacchi",
        nameSub: "Sfoglia croccante ripiena di pregiati pistacchi siriani",
        description: "Sottilissimi strati di pasta fillo croccante dorata al burro chiarificato, generosamente farciti con pistacchi verdi di Aleppo e velati da uno sciroppo profumato ai boccioli di rosa."
      }
    }
  },
  {
    id: "muhallabieh",
    categoryId: "syrian-desserts",
    tags: ["dessert", "vegetarian"],
    price: 35,
    isSamplePrice: true,
    image: "images/food/muhallabieh.jpg",
    translations: {
      ar: {
        name: "مهلبية شامية بالمستكة وماء الزهر",
        nameSub: "حلوى الحليب المخملية مع الفستق والورد الجوري",
        description: "حلوى حليب باردة مخملية معطرة بالمستكة الأصلية وماء زهر الليمون، مزينة بالفستق الحلبي المطحون وبتلات الورد الجوري الدمشقي المجفف."
      },
      fr: {
        name: "Mouhallabieh à la Fleur d'Oranger et Mastic",
        nameSub: "Crème de lait veloutée et pistaches concassées",
        description: "Douce crème lactée parfumée au mastic naturel et à l'eau de fleur d'oranger de Damas, servie fraîche et parsemée de pistaches vertes d'Alep et de pétales de rose."
      },
      en: {
        name: "Damascene Muhallabieh Milk Pudding",
        nameSub: "Velvety mastic & orange blossom pudding with pistachios",
        description: "Silky chilled milk pudding infused with authentic natural mastic tears and Damascus orange blossom water, garnished with crushed Aleppo pistachios and fragrant dried rose petals."
      },
      de: {
        name: "Damaszener Muhallabieh Milchpudding",
        nameSub: "Samtiger Pudding mit Mastix, Orangenblüte & Pistazien",
        description: "Seidiger traditioneller Milchpudding, aromatisiert mit natürlichem Mastix und Orangenblütenwasser, serviert mit feinen Aleppiner Pistazien und getrockneten Rosenblättern."
      },
      it: {
        name: "Muhallabieh di Damasco ai Fiori d'Arancio e Mastice",
        nameSub: "Vellutato budino di latte con granella di pistacchi",
        description: "Soffice crema di latte aromatizzata con prezioso mastice naturale e acqua di fiori d'arancio, servita fredda con granella di pistacchio di Aleppo e petali di rosa essiccati."
      }
    }
  },
  {
    id: "syrian-mint-tea",
    categoryId: "traditional-drinks",
    tags: ["drink", "vegetarian"],
    price: 25,
    isSamplePrice: true,
    image: "images/food/syrian-mint-tea.jpg",
    translations: {
      ar: {
        name: "شاي شامي مخمر بالنعناع الطازج",
        nameSub: "إبريق شاي أسود فاخر بأوراق النعناع البلدي",
        description: "شاي أسود سوري أصيل مخمر على الجمر بنكهة غنية، مضاف إليه أوراق النعناع البلدي الأخضر الطازج ورائحة الهيل الخفيفة، يُقدم في إبريق دمشقي أنيق."
      },
      fr: {
        name: "Thé Syrien Infusé à la Menthe Fraîche",
        nameSub: "Thé noir parfumé aux feuilles de menthe verte et cardamome",
        description: "Thé noir de première qualité mijoté selon la tradition levantine, enrichi de bouquets de menthe fraîche et d'une pointe de cardamome. Servi dans une théière artisanale."
      },
      en: {
        name: "Traditional Syrian Mint Tea Pot",
        nameSub: "Brewed black tea with fresh spearmint & cardamom",
        description: "Authentic Levant loose-leaf black tea slow-steeped with fragrant fresh garden spearmint and a subtle touch of green cardamom. Served in an elegant traditional teapot."
      },
      de: {
        name: "Syrischer Schwarztee mit Frischer Minze",
        nameSub: "Feinster Tee mit Pfefferminze & Kardamom",
        description: "Klassischer levantinischer Schwarztee traditionell aufgebrüht mit frischer Minze und einer feinen Nuance Kardamom. Serviert in einer stilechten Kanne."
      },
      it: {
        name: "Tè Siriano alla Menta Fresca",
        nameSub: "Pregiato tè nero infuso con menta fresca e cardamomo",
        description: "Tè nero orientale d'eccellenza preparato lentamente con generosi rametti di menta verde fresca e un tocco di cardamomo. Servito in una teiera tradizionale."
      }
    }
  },
  {
    id: "jallab-drink",
    categoryId: "traditional-drinks",
    tags: ["drink", "vegetarian", "signature"],
    price: 30,
    isSamplePrice: true,
    image: "images/food/jallab-drink.jpg",
    translations: {
      ar: {
        name: "شراب الجلاب الشامي بالصنوبر",
        nameSub: "دبس التمر والعنب مع ماء الورد والثلج المجروش والصنوبر",
        description: "مشروب صيفي منعش من دبس التمر والعنب المدخن، مضافاً إليه ماء الورد وماء الزهر، يُقدم بارداً مع الثلج المجروش ومزيناً بحبات الصنوبر الفاخرة."
      },
      fr: {
        name: "Jallab Traditionnel aux Pignons de Pin",
        nameSub: "Mélasse de dattes et raisins, eau de rose et glace pilée",
        description: "Boisson levantine rafraîchissante par excellence à base de mélasse de dattes et de raisins, eau de rose délicate, glace pilée et pignons de pin torréfiés flottants."
      },
      en: {
        name: "Traditional Syrian Jallab with Pine Nuts",
        nameSub: "Date & grape molasses cooler with rose water & crushed ice",
        description: "Iconic Middle Eastern summer cooler crafted from date and grape molasses with rose water and incense smoke notes, poured over crushed ice and topped with roasted pine nuts."
      },
      de: {
        name: "Traditioneller Jallab mit Pinienkernen",
        nameSub: "Dattel- & Traubenmelasse-Erfrischung mit Rosenwasser",
        description: "Kultiges Sommergetränk aus Dattel- und Traubenmelasse mit feinem Rosenwasser, serviert auf Crushed Ice und garniert mit aromatischen Pinienkernen."
      },
      it: {
        name: "Jallab Tradizionale Siriano con Pinoli",
        nameSub: "Melassa di datteri, acqua di rose, ghiaccio tritato e pinoli",
        description: "Dissetante bevanda estiva levantina a base di melassa di datteri e uva, sfumata con acqua di rose, servita con ghiaccio tritato e sormontata da pinoli tostati."
      }
    }
  },
  {
    id: "ayran-drink",
    categoryId: "traditional-drinks",
    tags: ["drink", "vegetarian"],
    price: 20,
    isSamplePrice: true,
    image: "images/food/ayran-drink.jpg",
    translations: {
      ar: {
        name: "عيران شامي مثلج بالنعناع",
        nameSub: "لبن زبادي بلدي مخفوق مع الملح والنعناع اليابس",
        description: "مشروب زبادي منعش مخفوق حتى الرغوة مع رشة ملح خفيفة والنعناع البري المجفف، يُقدم مثلجاً ويعتبر الرفيق المثالي للمشاوي والشاورما."
      },
      fr: {
        name: "Ayran Mousseux Frais à la Menthe Séchée",
        nameSub: "Boisson rafraîchissante au yaourt brassé et sel",
        description: "Traditionnelle boisson au yaourt battu frais, légèrement salée et saupoudrée de menthe sauvage séchée, servie glacée pour accompagner idéalement les grillades."
      },
      en: {
        name: "Frothy Chilled Syrian Ayran",
        nameSub: "Refreshing salted yogurt drink with dried spearmint",
        description: "Whisked fresh artisanal yogurt drink with a hint of sea salt, served ice-cold with a frothy head and a dusting of dried wild mint. The quintessential companion to grills and shawarma."
      },
      de: {
        name: "Schaumiger Eiskalter Ayran mit Minze",
        nameSub: "Erfrischendes Salz-Joghurtgetränk mit getrockneter Minze",
        description: "Cremig aufgeschlagenes Joghurtgetränk mit einer Prise Meersalz und feiner getrockneter Minze, eiskalt serviert — die perfekte Begleitung zu allen Fleischgerichten."
      },
      it: {
        name: "Ayran Spumoso Fresco alla Menta Siriana",
        nameSub: "Bevanda allo yogurt salato con menta essiccata",
        description: "Fresco yogurt artigianale montato con una punta di sale marino e una spolverata di menta selvatica essiccata, servito ghiacciato per esaltare il sapore delle carni alla brace."
      }
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MENU_CATEGORIES, MENU_ITEMS };
}
