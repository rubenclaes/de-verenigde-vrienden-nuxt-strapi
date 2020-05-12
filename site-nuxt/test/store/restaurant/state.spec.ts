import { Article, ArticleState } from '~/store/article/types';

export const DUMMY_RESTAURANTS: Article[] = [
  {
    id: 68,
    name: 'Jaarconcert IN VUUR EN VLAM',
    description:
      '**Koninklijke Harmonie** **De Verenigde Vrienden** uit Heusden-centrum nodigt iedereen uit voor haar jaarlijks concert op zaterdag 9 november 2019. Het thema van dit jaar is “In vuur en vlam”. Door de noodlottige gebeurtenissen op 11 augustus 2019, waarbij twee brandweermannen van de Heusdense brandweer om het leven kwamen, kreeg dit thema een extra dimensie.\n\n# “In vuur en vlam” \n\nfocust echter niet alleen op het echte en vernietigende vuur, maar wordt door presentator Marcel Kumpen in een bredere context geplaatst. Hij schreef de bindteksten en geeft het concert hiermee een poëtische inslag. Onder leiding van Kevin Absillis zorgen vooral de muzikanten van de harmonie voor een sfeervolle avond. Ook het jeugdorkest van de Verenigde Vrienden en drumband “Just for fun” leveren hiertoe een belangrijke bijdrage.\n\nHet concert vangt aan om 19.30 uur (deuren open om 18.45 uur) en vindt plaats in ’t Kuipershof – Heusden. Tickets kosten 8 euro (VVK) en 10 euro (kassa). Ze zijn verkrijgbaar bij de leden. Reserveren kan ook via e-mail: godelieve.swinnen27@telenet.be',
    icon: 'note',
    image: {
      id: 72,
      name: 'Jaarconcert_2019_Affiche.jpg',
      hash: '58d983ff3d3d43df95a2d15b867a1c67',
      sha256: 'ltciX09yDl1TxPu2lHgrwrVO_VvBlq9w0U2p26tiY+g',
      ext: '.jpg',
      mime: 'image/jpeg',
      size: '2150.40',
      url:
        'https://res.cloudinary.com/deverenigdevrienden/image/upload/v1570206573/yo4fp2xatsowgrttk95f.jpg',
      provider: 'cloudinary',
      public_id: 'yo4fp2xatsowgrttk95f',
      created_at: new Date('2019-10-04T16:29:34.526Z'),
      updated_at: new Date('2019-10-04T16:29:34.526Z'),
      provider_metadata: {
        public_id: 'nie1zjp7k2vn2wwyex86',
        resource_type: 'image'
      }
    },
    slug: 'een-mooie-titel',
    Categories: { Tag1: 'jaarconcert', Tag2: 'vuur', Tag3: 'muziek' },
    created_at: new Date('2019-10-04T16:29:32.958Z'),
    updated_at: new Date('2019-09-27T11:17:25.432Z')
  },
  {
    id: 64,
    name: 'Spaghettidag - ZONDAG 6 OKTOBER 2019',
    description:
      'Bij ons – **Kon. Harmonie DE VERENIGDE VRIENDEN** - geen ‘Italiaanse mama’ achter het fornuis, maar wel ‘Miracoli muzikanten’ die met de pollepel zwaaien.\n\nOp het menu vinden we spaghetti (of wat had je gedacht), zowel in volwassen – als in kinderporties.\nEr is ook macaroni (groot of klein) of haan (1/4 of ½) met appelmoes en brood.\nEn heb je nog een gaatje vrij, dan hebben we nog een heerlijk toetje – dame blanche.\nEten kan zowel ’s middags als ’s avonds. Afhalen is ook mogelijk.\n\nPlace to be: __muziekzaal Kerkenblook te Heusden.__\n\nBestellen kan via de leden of via mail : godelieve.swinnen27@telenet.be – voor 30 september 2019!\n\nAlle info vind je ook op de eetkaart.',
    icon: 'calendar',
    image: {
      id: 73,
      name: 'Eetkaart spaghettidag 6 okt. 2019.png',
      hash: 'ee3caa157a7049169e73e3def309ba83',
      sha256: 'xvUvP_DVq4YByVvXJkl0Jije9g+GXWwcxsHHSn1wUS4',
      ext: '.png',
      mime: 'image/png',
      size: '130.09',
      url:
        'https://res.cloudinary.com/deverenigdevrienden/image/upload/v1570277072/rtgs8ds9zzbc9djnpksj.png',
      provider: 'cloudinary',
      public_id: 'rtgs8ds9zzbc9djnpksj',
      created_at: new Date('2019-10-05T12:04:32.802Z'),
      updated_at: new Date('2019-10-05T12:04:32.802Z'),
      provider_metadata: {
        public_id: 'nie1zjp7k2vn2wwyex86',
        resource_type: 'image'
      }
    },
    slug: 'een-mooie-titel',
    Categories: { Tag1: 'Spaghetti', Tag2: 'Eetdag', Tag3: 'Harmonie' },
    created_at: new Date('2019-09-27T11:17:25.432Z'),
    updated_at: new Date('2019-09-27T11:17:25.432Z')
  }
];

export const initState = jest.fn().mockImplementation(
  (): Promise<Article[]> => {
    return new Promise<Article[]>(resolve => resolve(DUMMY_RESTAURANTS));
  }
);
