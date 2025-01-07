<!-- script - can contain JS code -->
<script>
	import { authHandlers, authStore } from "../store/authStore";

    let action = '';
    let email = '';
    let password = '';
    let confirmPassword = '';

    async function handleSubmit() {
        if (email && (password === confirmPassword)) {
            return await authHandlers.updatePassword(password)
        }
    }
</script>
<!-- div - container for other HTML elements -->
<div class="container">
    <div>
        <button>Update Password</button>
    </div>
    <!-- h1 - Heading 1 font size -->
    <h1>Update Password</h1>
    <!-- form - holds elements for user input form -->
    <form>
        <!-- label - container that stores input -->
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
                placeholder="Confirm password"/>
        </label>
        <!-- button - a button 
         (what else did you expect?)-->
        <!-- Button click will run the handleSubmit function -->
        <button on:click={handleSubmit}>Submit</button>
    </form>
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

    .container div {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
</style>