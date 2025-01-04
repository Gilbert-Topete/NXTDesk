<!-- script - can contain JS code -->
<script>
	import { authHandlers, authStore } from "../store/authStore";

    let signup = true;
    let email = '';
    let password = '';
    let confirmPassword = '';

    async function handleSubmit() {
        if (!email || !password || (signup && !confirmPassword)) {
            return;
        }

        if (signup && password === confirmPassword) {
            try {
                await authHandlers.signup(email, password);
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                await authHandlers.login(email, password);
            } catch (error) {
                console.log(error);
            }
        }
        //If the current user exists, redirect from login page to
        //dashboard
        if ($authStore.currentUser) {
            window.location.href = '/privatedashboard';
        }
    }
</script>
<!-- div - container for other HTML elements -->
<div class="container">
    <!-- h1 - Heading 1 font size -->
    <h1>{signup ? "Register for NXTDesk" : "Login to NXTDesk"}</h1>
    <!-- form - holds elements for user input form -->
    <form>
        <!-- label - container that stores input -->
        <label>
            <!-- input - defines input type 
             (and any placeholder text)-->
            <input 
                bind:value={email}
                type="email" 
                placeholder="Email"/>
        </label>
        <label>
            <input 
                bind:value={password}
                type="password" 
                placeholder="Password"/>
        </label>
        {#if signup}
            <label>
                <input 
                    bind:value={confirmPassword}
                    type="password"
                    placeholder="Confirm Password"/>
            </label>
        {/if}
        <!-- button - a button 
         (what else did you expect?)-->
        <!-- Button click will run the handleSubmit function -->
        <button on:click={handleSubmit}>{signup ? "Register" : "Log in"}</button>
    </form>
    {#if signup}
        <div> 
            <p>
                Don't have an account?
            </p>
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <p on:click={() => {
                signup = false;
            }} on:keydown={() => {}}>
                Sign up here!
            </p>
        </div>
        {:else}
            <div> 
                <p>
                    Already have an account?
                </p>
                <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                <!-- When this string is clicked, registerStatus becomes true -->
                <p on:click={() => {
                    signup = true;
                }} on:keydown={() => {}}> 
                    Log in here!
                </p>
            </div>
    {/if}
</div>

<!-- style - styles different page elements -->
<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
    }

    .container form {
        display: flex;
        flex-direction: column;
    }

    .container p {
        text-align: center;
    }
</style>