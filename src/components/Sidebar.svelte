<script>
  import { authHandlers } from "../store/authStore";
</script>

<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
  <a href="/home" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    <span class="fs-4">Home</span>
  </a>
  <hr>
  <ul class="nav nav-pills flex-column mb-auto">
    <li>
      <a href="/supporttickets" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
        Support Tickets
      </a>
    </li>
    <li>
      <a href="/kbarticles" class="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
        Knowledgebase Articles
      </a>
    </li>
  </ul>
  <hr>
  <div class="dropdown">
    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
      <strong>mdo</strong>
    </a>
    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
      <li><a class="dropdown-item" href="#">New project...</a></li>
      <li><a class="dropdown-item" href="#">Settings</a></li>
      <li><a class="dropdown-item" href="/profile">Profile</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#"
             on:click={authHandlers.logout}
             on:keydown={() => {}}>Sign out</a></li>
    </ul>
  </div>
</div>