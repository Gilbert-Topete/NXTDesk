<!-- script - can contain JS code -->
<script>
	import { authHandlers, authStore } from "../store/authStore";

    let action = 'login';
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
    {#if action === 'signup'}
         <!-- register form -->
          <h1>Register for NXTDesk</h1>
          <form>
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
            <label>
                <input 
                    bind:value={confirmPassword}
                    type="password"
                    placeholder="Confirm Password"/>
            </label>
            <button on:click={handleSubmit}>
                Sign Up
            </button>
          </form>
          <div> 
            <p>
                Already have an account?
            </p>
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <!-- When this string is clicked, registerStatus becomes true -->
            <p on:click={() => {
                action = 'login';
            }} on:keydown={() => {}}> 
                Log in here!
            </p>
            <button
                on:click={() => {
                    action = 'resetPass'
                }}
                on:keydown={() => {}}>
                Reset Password
            </button>
        </div>
    {:else if  action === 'login'}
         <!-- Login form -->
          <h1>Login to NXTDesk</h1>
          <form>
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
            <button on:click={handleSubmit}>
                Log in
            </button>
          </form>
          <div> 
            <p>
                Don't have an account?
            </p>
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <p on:click={() => {
                action = 'signup';
            }} on:keydown={() => {}}>
                Sign up here!
            </p>
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <p
                on:click={() => {
                    action = 'resetPass'
                }}
                on:keydown={() => {}}>
                Reset Password
            </p>
        </div>
    {:else}
         <!-- Reset password form -->
          <h1>Reset password</h1>
          <form>
            <label>
                <!--input - defines input type 
                 (and any placeholder text)-->
                <input 
                    bind:value={email}
                    type="email" 
                    placeholder="Email"/>
            </label>
            <button
                on:click={() => {
                    authHandlers.reset_password(email)
                }}
                on:keydown={() => {}}
            >
                Reset password
            </button>
          </form>
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
          <p on:click={() => {
            action = 'login';
        }} on:keydown={() => {}}>
            Back to login
        </p>
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