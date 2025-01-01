<!-- script - can contain JS code -->
<script>
    let register = true;
    let email = '';
    let password = '';
    let confirmPassword = '';
</script>
<!-- div - container for other HTML elements -->
<div class="container">
    <!-- h1 - Heading 1 font size-->
    <h1>Welcome to NXTDesk</h1>
    <!-- form - holds elements for user input form -->
    <form>
        <!-- label - container that stores input -->
        <label>
            <!-- input - defines input type 
             (and any placeholder text)-->
            <input 
                type="text" 
                placeholder="Email"/>
        </label>
        <label>
            <input 
                type="password" 
                placeholder="Password"/>
        </label>
        {#if register}
            <label>
                <input 
                    type="password"
                    placeholder="Confirm Password">
            </label>
        {/if}
        <!-- button - a button 
         (what else did you expect?)-->
        <button>Submit</button>
    </form>
    {#if register}
        <div>
            <p>
                Don't have an account? Sign up here!
            </p>
        </div>
        {:else}
            <div>
                <p>
                    Already have an account? Log in here!
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
</style>