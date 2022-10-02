import { region } from '../stores/region';
import Realm from './models/Realm';
const base = 'https://raider.io/api/connected-realms';
// https://raider.io/api/connected-realms?region=eu

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

	return fetch(`${base}?region=${regionValue}`, opts)
		.then((r) => r.json())
		.then((json) => {
            return json.realmListing.realms.map(() => {
                Realm.fromApi(json)
            });
        })
}
