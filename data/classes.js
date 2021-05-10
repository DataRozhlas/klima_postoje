// pokud se přegeneruje model, nutno přeházet!
// v modelu třída č. 1 zde na pozici 0 apod.

// order: pro boxík, v určeném pořadí
// poradi: zajištěná stř, nastuující, trad prac, místní, ohro, strad
export const classes = [
    {
      name: "Třída místních vazeb",
      flexName: "třídy místních vazeb",
      id: "mistni",
      share: 12,
      img: "https://data.irozhlas.cz/rozdeleni-klimatem-front/ilustrace/vazeb.jpg",
      shortDesc: [
        "Její zástupci se znají s lidmi v prestižních profesích a vždy se mají na koho obrátit, pokud potřebují pomoc.",
        "Mají podprůměrné příjmy, nižší životní náklady mimo centra měst jim ale relativně zvyšují životní úroveň.",
        "Nezasahují je socioekonomické problémy, nejsou bezprostředně ohrožení nezaměstnaností ani exekucemi.",
        ""
      ],
      longDesc: [
        "<b>12 % obyvatel ČR</b>",
        "často starší lidé, žijící klidnější život na venkově",
        "mají <b>podprůměrné příjmy</b>, ale nižší životní náklady mimo centra měst jim relativně zvyšují životní úroveň",
        "zajištěni jsou díky majetku v podobě bydlení (89 % žije ve vlastním)",
        "venkovská třída, patrně <b>unikátní pro Českou republiku</b>, pro kterou je typický velký počet malých obcí",
        "průměrně se zajímají o životní prostředí",
        "mají <b>uhlíkovou stopu</b> složenou hlavně z nákladů na energie, jídlo a cestování autem",
      ],
      order: 3,
    },
    {
      name: "Strádající třída",
      flexName: "strádající třídy",
      id: "strada",
      share: 18,
      img: "https://data.irozhlas.cz/rozdeleni-klimatem-front/ilustrace/stradajici.jpg",
      shortDesc: [
        "Je to třída, která jako jediná nedisponuje žádným typem společenského kapitálu, o který by se mohla opřít.",
        "Často jsou to důchodci, patří do ní ale lidé ze všech generací a věkových skupin.",
        "Kvůli malému majetku a chybějícímu sociálnímu kapitálu je výrazně ohrožují rizika jako nezaměstnanost a exekuce.",
      ],
      longDesc: [
        "<b>18 % obyvatel ČR</b>",
        "o něco častěji jsou to důchodci, ale patří sem <b>všechny generace a věkové skupiny</b>",
        "mají podprůměrné vzdělání (22 % jen základní)",
        "žijí obvykle ve středních a větších městech s výjimkou Prahy, často v Ústeckém, Karlovarském a Moravskoslezském kraji",
        "jejich <b>uhlíková stopa je nejmenší</b> ze sledovaných tříd a souvisí hlavně s energiemi a jídlem",
      ],
      order: 5,
    },
    {
      name: "Nastupující kosmopolitní třída",
      flexName: "nastupující kosmopolitní třídy",
      id: "kosmo",
      share: 12,
      img: "https://data.irozhlas.cz/rozdeleni-klimatem-front/ilustrace/nastupujici.jpg",
      shortDesc: [
        "Její zástupci nejčastěji žijí v Praze a v centrech velkých měst.",
        "Mají velmi vysoké všechny typy zkoumaných kapitálů kromě majetku – ten většinou ještě nenahromadili, alespoň ne v takové míře jako zajištěná střední třída, a je tudíž jen mírně nadprůměrný.",
        "Největším rizikem jsou pro ně vysoké ceny bydlení a nesplacené hypotéky.",
      ],
      longDesc: [
        "<b>12 % obyvatel ČR</b>",
        "žijí nejčastěji v Praze a v centrech velkých měst",
        "často <b>pracovníci v IT, ve finančnictví a specialisté v technických oborech</b>",
        "41 % z nich zastává v zaměstnání řídící pozice",
        "ze sledovaných tříd se <b>nejvíce zajímají o životní prostředí</b> a nejsilněji pociťují klimatickou změnu jako problém",
        "jejich <b>vysoká uhlíková stopa je ovlivněná létáním</b>, automobilovou dopravou a jídlem"
      ],
      order: 1,
    },
    {
      name: "Ohrožená třída",
      flexName: "ohrožené třídy",
      id: "ohroz",
      share: 22,
      img: "https://data.irozhlas.cz/rozdeleni-klimatem-front/ilustrace/ohrozena.jpg",
      shortDesc: [
        "Je to zapomenutá třída, která netěží z globalizace ani nástupu digitalizace – a nejspíš nezvládne zachytit trendy v budoucnu.",
        "Patří do ní lidé ze všech věkových skupin. Ze 62 % to jsou ženy – ty ohrožuje ztráta zaměstnání nebo rozvod.",
        "Pracují ve špatně ohodnocených zaměstnáních, i když mají formální vzdělání, díky kterému by mohli získat kvalifikovanější a lépe placené pozice.",
      ],
      longDesc: [
        "<b>22 % obyvatel ČR</b>",
        "nižší střední třída, pro kterou jsou typické <b>podprůměrné příjmy a majetky</b>",
        "jsou to lidé ze všech věkových skupin, častěji jsou zastoupeny ženy (62 %)",
        "ohrožují je ztráty zaměstnání a rozvody",
        "často rodiny s dětmi, s matkou na rodičovské",
        "mají <b>nízkou uhlíkovou stopu</b>, na které se kromě energií a jídla podílí cestování automobilem"
      ],
      order: 4,
    },
    {
      name: "Zajištěná střední třída",
      flexName: "zajištěné střední třídy",
      id: "zajist",
      share: 22,
      img: "https://data.irozhlas.cz/rozdeleni-klimatem-front/ilustrace/zajistena.jpg",
      shortDesc: [
        "Její zástupci mají vysoké příjmy a v porovnání s ostatními největší nahromaděný majetek.",
        "Cizí jazyky a počítače ovládají lépe než většina lidí, ale hůř než nastupující kosmopolitní třída.",
        "To snižuje jejich šance dál bohatnout a stát se společenskou elitou.",
      ],
      longDesc: [
        "<b>22 % obyvatel ČR</b>",
        "vyznačují se <b>vysokými příjmy i největším nahromaděným majetkem</b>",
        "žijí ve velkých městech, ale ještě častěji v příměstských satelitech",
        "například <b>lékaři, právníci, ale i mnozí další specialisté</b> a odborníci, manažeři, řídicí pracovníci a ředitelé firem a podniků",
        "díky vysokým příjmům mají většinou splacené vlastní bydlení a usedlejší životní styl",
        "mají <b>vysokou uhlíkovou stopu</b>, na které se kromě enerigí a jídla podílí i <b>cestování automobilem</b>, méně pak létání"
      ],
      order: 0,
    },
    {
      name: "Tradiční pracující třída",
      flexName: "tradiční pracující třídy",
      id: "trad",
      share: 14,
      img: "https://data.irozhlas.cz/rozdeleni-klimatem-front/ilustrace/pracujici.jpg",
      shortDesc: [
        "Její zástupci obvykle pracují manuálně a v posledních letech profitovali z ekonomického růstu.",
        "Mají solidní majetek a nadprůměrné příjmy, žijí ve vlastním bytě nebo domě.",
        "V budoucnu je může ohrozit ekonomická krize, postupující globalizace a automatizace.",
      ],
      longDesc: [
        "<b>14 % obyvatel ČR</b>",
        "pracují manuálně, mohou to být například zavedení <b>řemeslníci, kvalifikovaní dělníci</b> v automobilce nebo řidiči nákladních aut či provozovatelé maloobchodních prodejen",
        "profitovali z ekonomického růstu posledních let, mají <b>solidní majetek a mírně nadprůměrné příjmy</b>",
        "téměř všichni (87 %) žijí ve vlastním bytě nebo domě",
        "žijí spíše v malých městech a na venkově, přibližně polovina z nich pak v obcích s méně než 5 tisíci obyvatel",
        "mají <b>střední uhlíkovou stopu</b>, na které se podílí <b>zejména energie</b>, následně pak jídlo a o něco méně pak automobilismus, létají málo"
      ],
      order: 2,
    },
  ];
  
  export default classes;
  