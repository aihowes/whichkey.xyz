export default class Region {
    short_name: string;
    name: string;
    slug: string;

    static fromApi(json) {
        const region = new Region();
        region.name = json.name;
        region.short_name = json.short_name;
        region.slug = json.slug;
        return region;
    }
}
