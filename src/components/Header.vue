<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <router-link class="navbar-brand" to="index.html">Bokuhr</router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
          <li class="header-dropdown">
            <router-link class="header-dropdown" to="home">View info Employee</router-link>
          </li>

        <li class="header-dropdown">
            <drop-down :class="dropdownLink" :profileLinks="profileLinks"></drop-down>
        </li>

          <li class="header-dropdown">
            <router-link class="nav-link" to="updateEmployeeInfo.html">Update Employee Info</router-link>
          </li>

          <li class="header-dropdown">
            <drop-down :class="dropdownLink" :loanLinks="loanLinks"></drop-down>
          </li>

          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Menu Levels">
            <router-link class="nav-link nav-link-collapse collapsed" data-toggle="collapse" to="#collapseMulti" data-parent="#exampleAccordion">
              <!--<i class="fa fa-fw fa-sitemap"></i>-->
              <span class="nav-link-text">Statutory Deduction</span>
            </router-link>
            <ul class="sidenav-third-level collapse" id="collapseMulti">
              <li>
                <router-link to="#">View history</router-link>
              </li>
              <li>
                <router-link to="#">Generate Report</router-link>
              </li>
              <li>
                <router to="#">Add new</router>
              </li>
              <li>
                <router to="#">Remove</router>
              </li>
            </ul>
          </li>


          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">
            <routr-link class="nav-link nav-link-collapse collapsed" data-toggle="collapse" to="#collapseMulti2" data-parent="#exampleAccordion">
              <!--<i class="fa fa-fw fa-file"></i>-->
              <span class="nav-link-text">Allowance</span>
            </routr-link>
            <ul class="sidenav-third-level collapse" id="collapseMulti2">
              <li>
                <router-link to="#">List of Employee</router-link>
              </li>
              <li>
                <router-link href="#">Generate Report</router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">
            <router-link class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseExamplePages2" data-parent="#exampleAccordion">
              <!--<i class="fa fa-fw fa-file"></i>-->
              <span class="nav-link-text">Redeployment</span>
            </router-link>
            <ul class="sidenav-second-level collapse" id="collapseExamplePages2">
              <li>
                <router-link to="#">Create new transfer</router-link>
              </li>
              <li>
                <router-link to="#">View existing transfer</router-link>
              </li>

              <li>
                <router-link to="#">Close transfer</router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
            <router-link class="nav-link" href="score%20card.html">
              <!--<i class="fa fa-fw fa-dashboard"></i>-->
              <span class="nav-link-text">ScoreCard </span>
            </router-link>
          </li>

          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">
            <router-link class="nav-link nav-link-collapse collapsed" data-toggle="collapse" to="#collapseExamplePages3" data-parent="#exampleAccordion">
              <!--<i class="fa fa-fw fa-file"></i>-->
              <span class="nav-link-text">Pay Group</span>
            </router-link>
            <ul class="sidenav-second-level collapse" id="collapseExamplePages3">
              <li>
                <router-link to=sub-menu/addpayGroup.html> Add Employee PayGroup</router-link>
              </li>
              <li>
                <router-link to="sub-menu/viewPayGroup.html">View PlayGroup</router-link>
              </li>

              <li>
                <router-link href="sub-menu/changePayGroup.html"> Change PlayGroup</router-link>
              </li>
            </ul>
          </li>

        </ul>



        <div class="header-info active"> <a href="#">Employee Info <br> management </a></div>
        <div class="header-info" > <router-link to="#">Enterprise info <br> management </router-link></div>
        <div class="header-info"> <router-link to="#">Recruitments</router-link></div>
        <div class="header-info"> <router-link to="#">Trainings</router-link></div>
        <div class="header-info"> <router-link to="#">Performance <br> reviews</router-link></div>
        <div class="header-info"> <router-link to="#">Payroll <br>management</router-link></div>


        <!-- Logout Modal-->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
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
  import DropDown from './DropDown'
  export default {
    components: {DropDown},
    data() {
      return {
        profileLinks: ['viewProfile', 'editProfile'],
        loanLinks: ['viewHistory', 'generateReport'],
        linkLoan: ['History']
      }
    }
  }
</script>

<style scoped>
  .header-dropdown{
    text-align: left;
    text-decoration: none;
    color: #d3d0ca;
  }


</style>


