<!-- script - can contain JS code -->
<script>
	import { authHandlers } from "../store/authStore";

    let registerStatus = true;
    let email = '';
    let password = '';
    let confirmPassword = '';

    async function handleSubmit() {
        if (!email || !password || (registerStatus && !confirmPassword)) {
            return
        }

        if (registerStatus && password === confirmPassword) {
            try {
                await authHandlers.signup(email, password)
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                await authHandlers.login(email, password)
            } catch (error) {
                console.log(error)
            }
        }
    }
</script>
<!-- div - container for other HTML elements -->
<div class="container">
    <!-- h1 - Heading 1 font size -->
    <h1>{registerStatus ? "Login to NXTDesk" : "Register for NXTDesk"}</h1>
    <!-- form - holds elements for user input form -->
    <form>
        <!-- label - container that stores input -->
        <label>
            <!-- input - defines input type 
             (and any placeholder text)-->
            <input 
                type="email" 
                placeholder="Email"/>
        </label>
        <label>
            <input 
                type="password" 
                placeholder="Password"/>
        </label>
        {#if !(registerStatus)}
            <label>
                <input 
                    type="password"
                    placeholder="Confirm Password">
            </label>
        {/if}
        <!-- button - a button 
         (what else did you expect?)-->
        <!-- Button click will run the handleSubmit function -->
        <button on:click={handleSubmit}>{registerStatus ? "Login" : "Register"}</button>
    </form>
    {#if registerStatus}
        <div> 
            <p>
                Don't have an account?
            </p>
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <p on:click={() => {
                registerStatus = false;
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
                    registerStatus = true;
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