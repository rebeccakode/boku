<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <router-link class="navbar-brand" to="index.html">Bokuhr</router-link>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li class="header-dropdown">
          <router-link class="sidebarText" to="home">View info Employee</router-link>
        </li>

        <li class="header-dropdown">
          <profile-drop-down :class="sidebarText" :profileLinks="profileLinks"></profile-drop-down>
        </li>

        <li class="header-dropdown">
          <router-link class="sidebarText" to="home">Update Employee Info</router-link>
        </li>

        <li class="header-dropdown">
          <loan-drop-down :class="sidebarText" :loanLinks="loanLinks"></loan-drop-down>
        </li>

        <li class="header-dropdown">
          <statutory-drop-down :class="sidebarText" :statutoryLinks="statutoryLinks"></statutory-drop-down>
        </li>

        <li class="header-dropdown">
          <allowance-drop-down :class="sidebarText" :allowanceLinks="allowanceLinks"></allowance-drop-down>
        </li>

        <li class="header-dropdown">
          <redeploy-drop-down :class="sidebarText" :redeployLinks="redeployLinks"></redeploy-drop-down>
        </li>

        <li class="header-dropdown">
          <router-link class="sidebarText" to="#">Score Care </router-link>
        </li>

        <li class="header-dropdown">
        <pay-drop-down :class="sidebarText" :payLinks="payLinks"></pay-drop-down>
      </li>

        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">


        </li>
      </ul>

      <!--<ul class="navbar-nav sidenav-toggler">-->
        <!--<li class="nav-item">-->
          <!--<a class="nav-link text-center" id="sidenavToggler">-->
            <!--<i class="fa fa-fw fa-angle-left"></i>-->
          <!--</a>-->
        <!--</li>-->
      <!--</ul>-->

      <div class="header-info active"> <a href="#">Employee Info <br> management </a></div>
      <div class="header-info" > <a href="#">Enterprise info <br> management </a></div>
      <div class="header-info"> <a href="#">Recruitments</a></div>
      <div class="header-info"> <a href="#">Trainings</a></div>
      <div class="header-info"> <a href="#">Performance <br> reviews</a></div>
      <div class="header-info"> <a href="#">Payroll <br>management</a></div>
      <ul class="navbar-nav ml-auto">

        <li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
            <i class="fa fa-fw fa-sign-out"></i>Logout</a>
        </li>
      </ul>
    </div>

  </nav>

</div>
</template>


<script>
  import ProfileDropDown from './ProfileDropDown'
  import LoanDropDown from './LoanDropDown'
  import StatutoryDropDown from  './StatutoryDropDown'
  import AllowanceDropDown from  './AllowanceDropDown'
  import RedeployDropDown from  './RedeployDropDown'
  import PayDropDown from  './PayDropDown'
  export default {
    components: {
      ProfileDropDown,
      LoanDropDown,
      StatutoryDropDown,
      AllowanceDropDown,
      RedeployDropDown,
      PayDropDown
    },

    data() {
      return {
        dropDownFaClass: {
          faClass: true
        },
        dropDown: false,
        profileLinks: [
          {name: 'View Profile', link: 'viewProfile'},
          {name: 'Edit Profile', link: 'editProfile'}
        ],
        loanLinks: [
          {name: 'View History', link: 'viewHistory'},
          {name: 'Generate Report', link: 'generateReport'}
        ],
        statutoryLinks: [
          {name: 'View History', link: 'statutory/history'},
          {name: 'Generate Report', link: 'generate/report'},
          {name: 'Add New', link: 'new/statutory'},
          {name: 'Remove', link: 'remove/statutory'}
        ],

        allowanceLinks: [
          {name: 'List of Employee', link: 'list/employee'},
          {name: 'Generate Report', link: 'generate/report'},

        ],

        redeployLinks: [
          {name: 'Create New Transfer', link: 'create/newTransfer'},
          {name: ' View Existing Transfer', link: 'view/existingTransfer'},
          {name: 'Close Transfer', link: 'close'}
        ],
        payLinks: [
          {name: 'Add Employee PayGroup' , link: 'add/paygroup'},
          {name: 'View PlayGroup' , link: 'view/paygroup'}
        ]

      }
    },

  }
</script>

<style scoped>
  .header-dropdown{
    text-align: left;
    border-bottom: 1px solid antiquewhite;
    padding: 5px 2px;
    text-decoration: none;
  }

  .sidebarText {
    color: antiquewhite;
    margin-left: 1em;
  }

  .sidebarText:hover {
    color: #d39e00;

  }
  a.sidebarText {
    text-decoration: none;
  }

</style>


