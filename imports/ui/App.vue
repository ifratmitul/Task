<template>
  <div class="container">
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link active" to="/"
              >Home</router-link
            >
            <router-link class="nav-item nav-link active" to="/Add"
              >Add Student</router-link
            >
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>
