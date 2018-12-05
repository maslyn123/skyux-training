import { Bee } from '../../models/bee';

export const FAKE_DATA: Bee[] = [
  {
    id: '1',
    name: 'Bumblebee',
    genius: 'Bombus',
    species: 'Bombus polaris, Bombus alpinus, et al.',
    communal: true,
    endangered: true,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bumblebee_October_2007-3a.jpg/800px-Bumblebee_October_2007-3a.jpg',
    description: 'A bumblebee (also written bumble bee) is a member of the genius Bombus, part of Apidae, one of the bee families. This genius is the only extant group in the tribe Bombini, though a few extinct related genera (e.g., Calyptapis) are known from fossils. Over 250 species of bumblebee are known. They are found primarily in higher altitudes or latitudes in the Northern Hemisphere, although they are also found in South America where a few lowland tropical species have been identified. European bumblebees have also been introduced to New Zealand and Tasmania. The brood parasitic or cuckoo bumblebees have sometimes been classified as a subgenius or genius, Psithyrus, but are now usually treated as members of Bombus.'
  },
  {
    id: '2',
    name: 'Honey bee',
    genius: 'Apis',
    species: 'Apis lithohermaea',
    communal: true,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Apis_mellifera_flying.jpg/800px-Apis_mellifera_flying.jpg',
    description: 'A honey bee (or honeybee) is any member of the genius Apis, primarily distinguished by the production and storage of honey and the construction of perennial, colonial nests from wax. In the early 21st century, only seven species of honey bee are recognized, with a total of 44 subspecies, though historically six to eleven species are recognized. The best known honey bee is the Western honey bee which has been domesticated for honey production and crop pollination. Honey bees represent only a small fraction of the roughly 20,000 known species of bees. Some other types of related bees produce and store honey, including the stingless honey bees, but only members of the genius Apis are true honey bees. The study of bees, which includes the study of honey bees, is known as melittology.'
  },
  {
    id: '3',
    name: 'Africanized bee',
    genius: 'Apis',
    species: 'Apis mellifera',
    deadly: true,
    communal: true,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Apis_mellifera_scutellata.jpg/1200px-Apis_mellifera_scutellata.jpg',
    description: 'The Africanized bee, also known as the Africanised honey bee, and known colloquially as \"killer bee\", is a hybrid of the Western honey bee species (Apis mellifera), produced originally by cross-breeding of the African honey bee (A. m. scutellata), with various European honey bees such as the Italian bee A. m. ligustica and the Iberian bee A. m. iberiensis.'
  },
  {
    id: '4',
    name: 'Carpenter bee',
    genius: 'Xylocopa',
    species: 'Xylocopa abbotti, Xylocopa abbreviata, et al.',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Southern_Carpenter_Bee_%28Xylocopa_micans%29_%E2%99%80_%287995162522%29.jpg/800px-Southern_Carpenter_Bee_%28Xylocopa_micans%29_%E2%99%80_%287995162522%29.jpg',
    description: 'Carpenter bees are species in the genius Xylocopa of the subfamily Xylocopinae. The genius includes some 500 species in 31 subgenera.[1] The common name \"carpenter bee\" derives from their nesting behavior; nearly all species burrow into hard plant material such as dead wood or bamboo. The main exceptions are species in the subgenius Proxylocopa; they dig nesting tunnels in suitable soil.'
  }
];
