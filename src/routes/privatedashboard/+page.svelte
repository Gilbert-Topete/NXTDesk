<script>
	import { authStore } from "../../store/authStore";

    let email;
    authStore.subscribe((curr) => {
        email = curr?.currentUser?.email;
    })
</script>

{#if $authStore.currentUser}
    <h1>Welcome back, {email}</h1>
{:else}
    <div>Loading...</div>
{/if}
