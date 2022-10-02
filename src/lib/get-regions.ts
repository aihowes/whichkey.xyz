// https://raider.io/api/connected-realms?region=world

export async function getDungeons() {
    return [
        {
			name: "United States & Oceania",
			short_name: "US",
			slug: "us",
        },
        {
			name: "Europe",
			short_name: "EU",
			slug: "eu",
        },
        {
			name: "Korea",
			short_name: "KR",
			slug: "kr",
        },
        {
			name: "Taiwan",
			short_name: "TW",
			slug: "tw",
        },
		{
			name: "China",
			short_name: "CN",
			slug: "cn",
		}
    ];
}
