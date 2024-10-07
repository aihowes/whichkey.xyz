<script lang="ts">
	import debounce from 'lodash/debounce';
	import { getCharacter } from '$lib/get-character';

	export let character = {
		'name': '',
		'realm': '',
	}

	const onKeyUp = debounce(async () => {
		if (!character.name || !character.realm) return;
		let characterDetails = await getCharacter(character);
		console.log(characterDetails);
	}, 300);
</script>

<div>
	<div>
		<label for="realm">Realm</label>
		<input id="realm" type="text" bind:value={character.realm} on:keyup={onKeyUp}>
	</div>
	<div>
		<label for="realm">Character</label>
		<input type="text" bind:value={character.name} on:keyup={onKeyUp}>
	</div>
	{character}
</div>

<style>
</style>
