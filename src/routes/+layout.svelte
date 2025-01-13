<script>
	import { onMount } from "svelte";
	import { auth } from "$lib/firebase/firebase.client";
	import { authStore } from "../store/authStore";
	import { browser } from "$app/environment";

	onMount(() => { //When the component mounts...
		const unsubscribe = auth.onAuthStateChanged((user) => { //Subscribe to user auth state
			console.log(user) //Displays user object
			authStore.update((curr) => { //Function stores current user into user store
				return {...curr, isLoading: false, currentUser: user}
			});

			if (browser &&
				!$authStore?.currentUser && //If there's no active user
				!$authStore.isLoading && //There's nothing to load
				window.location.pathname !== '/') { //And we're not at the login page
				window.location.href = '/'; //Bring us back to the login page
			}
		});
		return unsubscribe;
	});

	// () => {} - Anonymous Function (function w/o name)
</script>
<main class="mainContainer">
	<slot/>
</main>

<style>
	.mainContainer {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>