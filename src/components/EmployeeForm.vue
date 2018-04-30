<template>
  <div class="align-content-lg-between">
    <form class="" @submit.prevent="submitForm">
      <div class="form-group row">
        <div class="col-5">
          <input class="form-control ml-lg-5" type="text" placeholder="Graduate Trainee">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-5">
          <select class="custom-select ml-lg-5">
            <option selected>ICT</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-5">
          <input class="form-control ml-lg-5" type="text" placeholder="Graduate Trainee">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-5">
          <input class="form-control ml-lg-5" type="text" placeholder="Intern">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-5">
          <textarea class="form-control ml-lg-5" placeholder="A week's notice, no renumeration"></textarea>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-5">
          <input class="form-control btn btn-warning p-sm-2 ml-lg-5 mt-4" type="submit" value="SAVE CHANGES" placeholder="Termination Requirement">
        </div>
      </div>

    </form>
  </div>
</template>

<script>
//  import EmployeeForm from '../components/EmployeeForm'
  export default {
    components: {},
    methods: {
      submitForm() {
        
      }
    }
  }
</script>