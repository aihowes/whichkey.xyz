import Dungeon from "./Dungeon";

export default class Run {
    main_affix: MainAffix;
    dungeon: Dungeon;
    level: number;
    score: number;
    link: string;

    static fromApi(json) {
        const run = new Run();
        run.level = json.mythic_level;
        run.score = json.score;
        run.link = json.url;
        run.dungeon = Dungeon.fromApiRun(json);
        return run;
    }
}
