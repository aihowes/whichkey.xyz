import Run from './Run';
import Realm from './Realm';
import Region from './Region';

export default class Character {
    region: Region;
    name: string;
    realm: Realm;
    runs: Run[];
    link: string;
    thumbnail: string;

    static fromApi(json) {
        const character = new Character();
        character.region = Region.fromApi(json.characterDetails.character.region);
        character.name = json.name;
        character.realm = Realm.fromApi(json.characterDetails.character.realm);
        character.runs = json.mythic_plus_best_runs.map((run) => Run.fromApi(run));
        character.link = json.link;
        character.thumbnail = json.thumbnail;
        return character;
    }
}
