<template>
<div>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <router-link class="navbar-brand" to="home">Bokuhr</router-link>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav sidenav-toggler">
        <li class="nav-item">
          <a class="nav-link text-center" id="sidenavToggler">
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>

      <div class="header-info" v-for="item in items">
        <router-link v-bind:to="item.link" >{{ item.title }}</router-link></div>


        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="logoutModal = true">
              <i class="fa fa-fw fa-sign-out"></i>Logout</a>
          </li>

          <div v-show="logoutModal" class="modal-mask">
            <div v-show="logoutModal" class="modal-wrapper">
              <div class="modal-container">
                <div class="container">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                  <div class="row">
                    <div class="col-4">
                      <a href="#" class="btn btn-primary" @click.prevent="logout">Logout</a>
                    </div>
                    <div class="col-4 offset-sm-2">
                      <a href="#" class="btn btn-danger" @click.prevent="logoutModal = false">Cancel</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </ul>
    </div>

  </nav>
</div>
</template>

<script>

  export default {
    data() {
      return {
        logoutModal: false,
        active: 'employee_info',
        items: {
          employee_info: { title: 'Employee Info   management', link: '#' },
          enterprise_info: { title: 'Enterprise info management', link: '#'},
          recruitments_info: { title: 'Recruitments', link: '#'},
          trainings: { title: 'Trainings', link: '#'},
          performance: { title: 'Performance reviews', link:'#'},
          payroll: { title: 'Payroll management', link: '#'}
        }
      }
    },
    methods:{
      logout() {
        if(confirm('Are you sure')) {
          alert('You are logged out') // log him out stuff
          this.logoutModal = false
        }
      }
    }
  }

</script>

<style>
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .modal-container {
    width: 30%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }
</style>