<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://team.tershi.com/img/icon.58a172ac.png" width="30" height="30" class="d-inline-block align-text-top">
        {{ title }}
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="(item, key) in link" :key="key">
          <router-link class="nav-link active" :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>

<script>
export default {
  data () {
    return {
      title: 'Hayron',
      link: [
        {
          name: '主頁',
          path: '/'
        },
        {
          name: '關於',
          path: '/about'
        },
        {
          name: '登入',
          path: '/login'
        },
        {
          name: '註冊',
          path: '/register'
        },
        {
          name: '登出',
          path: '/logout'
        }
      ]
    }
  }
}
</script>
