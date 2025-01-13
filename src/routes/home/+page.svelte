<!-- Home page -->
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
    <div class="container">
        <h1>Home page under construction. Come back later!</h1>
    </div>
{:else}
    <div>Loading...</div>
{/if}

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
    }
</style>