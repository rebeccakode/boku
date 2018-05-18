<template>
  <div>
    <div class="card-body">
      <div class="form-group row">
        <label for="example-text-input" class="col-2 col-form-label">Full Name</label>
        <div class="col-6">
          <div id="app">
            <input class="form-control" type="text" placeholder="Your full Name"  id="example-text-input" v-on:input="changeTitle">
            <p>{{title}}</p>
          </div>
        </div>

      </div>
      <div class="form-group row">
        <label for="example-text-input1" class="col-2 col-form-label">Organization</label>
        <div class="col-6">
          <input class="form-control" type="text" placeholder="" id="example-text-input1">
          <input class="form-control mt-2 mb-2" type="text">
          <input class="form-control mt-2 mb-2" type="text">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-text-input" class="col-2 col-form-label">Grade</label>
        <div class="col-6">
          <input class="form-control  mb-2" type="text">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-text-input" class="col-2 col-form-label">Bio</label>
        <div class="col-6">
          <textarea class="form-control"> </textarea>
        </div>
        <div class="col-1">
          <a href=""><i class="fa fa-pencil"></i></a>
        </div>
      </div>
      <div class="form-group row">
        <label for="example-text-input" class="col-2 col-form-label">Kin's Info</label>
        <div class="col-6">
          <input class="form-control" type="text" placeholder="FullName">
        </div>
        <div class="col-4">
          <input class="form-control" type="tel" placeholder="Phone Number" id="example-tel-input">
        </div>
      </div>

      <div class="form-group row">
        <label for="example-password-input" class="col-2 col-form-label">Education/Certificate</label>
        <div class="col-6">
          <textarea class="form-control" id="example-password-input"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="example-email-input" class="col-2 col-form-label">Email</label>
        <div class="col-6">
          <input class="form-control" type="email"  id="example-email-input">
        </div>
        <div class="col-4">
          <input class="form-control" type="email"  placeholder="Phone Number">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-text-input" class="col-2 col-form-label">Employee History</label>
        <div class="col-6">
          <textarea class="form-control" type="text"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="example-text-input" class="col-2 col-form-label">Mentorship</label>
        <div class="col-6">
          <input class="form-control" type="text">
        </div>
        <div class="col-1">
          <a href=""><i class="fa fa-pencil"></i></a>
        </div>
      </div>
      <div class="form-group row">
        <label for="example-month-input" class="col-2 col-form-label">AccountNumber</label>
        <div class="col-6">
          <input class="form-control" type="text">
        </div>
        <div class="col-4">
          <input class="form-control" type="text" placeholder="SortCode">
        </div>
      </div>
    </div>

  </div>
</template>