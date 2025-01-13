<!-- Private Dashboard page -->
<script>
	import AuthReset from "../../components/AuthReset.svelte";
	import Sidebar from "../../components/Sidebar.svelte";
    import { authHandlers, authStore } from "../../store/authStore";

    let email;
    authStore.subscribe((curr) => {
        email = curr?.currentUser?.email;
    })
</script>

{#if $authStore.currentUser}
    <h1>Welcome back, {email}</h1>
    <Sidebar />
    <AuthReset />
    <button on:click={authHandlers.logout}>Logout</button>
{:else}
    <div>Loading...</div>
{/if}
