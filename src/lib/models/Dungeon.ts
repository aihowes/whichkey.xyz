export default class Dungeon {
    id: number;
    challenge_mode_id: number;
    slug: number;
    name: number;
    short_name: string;

    static fromApiRun(json) {
        const dungeon = new Dungeon();
        dungeon.id = json.id;
        dungeon.challenge_mode_id = json.challenge_mode_id;
        dungeon.slug = json.slug;
        dungeon.name = json.name;
        dungeon.short_name = json.short_name;
        return dungeon;
    }
}
