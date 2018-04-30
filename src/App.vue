<template>
  <div id="app">
    <app-header></app-header>
      <nav-bar></nav-bar>
    <div class="content-wrapper">
      <div class="container-fluid">
        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">View info Employee</li>
        </ol>

        <form-search></form-search>
        <br>
        <!-- Icon Cards-->
        <div class="container">
          <router-view/>
        </div>

        <app-footer></app-footer>

        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
          <i class="fa fa-angle-up"></i>
        </a>
        <!-- Logout Modal-->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
              <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <router-link class="btn btn-primary" to="login.html">Logout</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/Header'
  import AppFooter from './components/Footer'
  import FormSearch from './components/FormSearch'
  import NavBar from  './components/NavBar'
  export default {
    components: {
      AppHeader,
      NavBar,
      AppFooter,
      FormSearch
    },
    methods: {
      addscript: () => {
        return new Promise((resolve, reject) => {
          let script = document.createElement('script');
//          script.src = "../assets/js/jquery.js";
          script.src = "../assets/js/bootstrap.bundle.js";
          script.src = "../assets/js/sb.admin.js";
          document.head.appendChild(script);

        })
      }
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style>
  @import "assets/css/bootstrap.css";
  @import "assets/css/dashboard.css";
  @import "assets/css/sb-admin.css";
  @import "assets/font-awesome/css/font-awesome.min.css";
</style>
