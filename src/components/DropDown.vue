<template>
  <div class="">
    <div class="dropDown" @click.stop="dropDown = !dropDown">Contact Info</div>
    <ul v-show="dropDown" v-for="link in profileLinks">
      <li class="nav-item"><router-link :to="{ path: link }">{{ link }}</router-link></li>
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
    color: #d3d0ca;
    padding-left: 9px;
    border-bottom: 1px solid;
  }
   ul, li{
    border-top: 1px solid;
    list-style: none;
  }
</style>
