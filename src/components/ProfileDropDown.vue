<template>
  <div class="nav-items">
    <div class="dropDown" @click.stop="dropDown = !dropDown">
      <div class="row">
        <div class="col-9">
          Contact Info
        </div>
        <div class="col-2">
          <span :class="[{'fa fa-plus': !dropDown, 'fa fa-minus': dropDown}]"></span>
        </div>
      </div>
    </div>
    <ul v-show="dropDown" v-for="link in profileLinks">
      <li class="nav"><router-link :to="{ path: link.link }">{{ link.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['profileLinks'],

    data() {
      return {
        dropDown: false
      }
    }
  }
</script>

<style>
  .dropDown{
    cursor: pointer;
    color: antiquewhite;
    padding: 5px 5px;
    margin-left: 0.8em;
  }
  .dropDown:hover{
    color: #d39e00;
  }

  li.nav a {
    color: lightgoldenrodyellow;
    text-decoration: none;
    margin-left: -1em;
  }

  li.nav a:hover{
    color: #d39e00;
  }
</style>
