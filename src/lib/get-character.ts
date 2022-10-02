import { region } from '../stores/region';
import Character from './models/Character';
const base = 'https://raider.io/api/characters/';
// https://raider.io/api/characters/mythic-plus-runs?season=season-sl-2&characterId=26600379&role=all&mode=timed&affixes=all&date=all
// https://raider.io/api/characters/eu/alonsus/Eivor?season=season-sl-2

export async function getCharacter(character) {
	const opts = {
		method: 'get',
		headers: {
			'Content-Type': 'application/json',
		}
	};

	let regionValue;
	region.subscribe(value => {
		regionValue = value;
	});

	return fetch(`${base}/${regionValue}/${character.realm}/${character.name}?season=season-sl-2`, opts)
		.then((r) => r.json())
		.then((json) => Character.fromApi(json));
}
