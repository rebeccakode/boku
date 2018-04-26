<template>
  <div class="">
    <div class="dropDown" @click.stop="dropDown = !dropDown">
        <div class="row">
          <div class="col-9">
            Statutory Deduction
          </div>
          <div class="col-2">
            <span :class="[{'fa fa-plus': !dropDown, 'fa fa-minus': dropDown}]"></span>
          </div>
        </div>
    </div>
    <ul v-show="dropDown" v-for="link in statutoryLinks">
      <li class="nav"><router-link :to="{ path: link.link }">{{ link.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['statutoryLinks'],

    data() {
      return {
        dropDown: false
      }
    }
  }
</script>
