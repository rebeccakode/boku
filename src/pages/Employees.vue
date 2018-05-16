<template>
  <div>
    <div class="row" v-show="!loading">
        <div class="col-sm-7 offset-sm-12">
          <div class="">
            <table class="table table-sm">
              <thead style="font-weight: bold">
              <td scope="col" class="text-left" width="10%">#</td>
              <td scope="col" class="text-left" width="10%">Full Name</td>
              <td scope="col" class="text-left" width="10%">Action</td>
              </thead>

              <tbody class="list table-hover" v-for="(item, key) in employeesInfo">
              <tr>
                <!--<td>{{ key + 1 }}</td>-->
                <th scope="row"><input type="checkbox"></th>
                <td class="empTable"> {{ item.attributes.full_name }} </td>
                <td>
                  <a class="btn" @click="activeItem(key)"><i class="fa fa-bars" aria-hidden="true"></i></a>
                  <div class="show-group" :key="item.id" :data-show-btns="key" style="display: none;">
                      <button @click="viewEmployee(item.attributes)" class="btn btn-sm btn-info"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Edit</button>
                      <button class="btn btn-sm btn-danger" @click="deleteUser(item)">Delete</button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              <h1>Hello world</h1>
            </div>
            <div class="card-body">
              <p> Management Information System</p>
              <div v-if="!show">
              <button class="btn btn-lg btn-success" @click="save">Save</button>
            </div>
               <div v-else>
              <button class="btn btn-lg btn-primary">send</button>
              <button class="btn btn-lg btn-warning">edit</button>
              <button class="btn btn-lg btn-danger">delete</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    <div v-show="loading">
      <img src="../assets/images/loading.gif" alt="Boku Image">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show:false,
        currentlyShowing: false,
        employeesInfo: {},
        loading: true,
        errors: '',
        test: null
      }
    },
    methods: {
      activeItem(key) {
        var groups = document.getElementsByClassName('show-group');
        for (var i=0; i<groups.length; i++) {
          if (groups[i].getAttribute("data-show-btns") == key) {
            if (groups[i].style.display == "block") {
              groups[i].style.display = "none";
            } else {
              groups[i].style.display = "block";
            }
            break;
          }
        }
//        if(item) {
//          this.currentlyShowing = true
//        }
      },
      getUser() {
        let self = this;
        this.$http.get('http://137.74.157.202/bokuhr/web/api/information_mgmt/basic_information')
          .then(r => {
            this.loading = false;
            // r.data contains json-encoded information in the data key.
            this.employeesInfo = r.data.data
          })
          .catch(r => {
            this.errors = r.message
          })
      },
      viewEmployee(details) {
        this.$router.push({ path: 'user', query: { userInfo: details }});
//        this.$router.push('user')
      },

      deleteUser (item){
        console.log(item);
        this.$http.delete('http://137.74.157.202/bokuhr/web/api/information_mgmt/basic_information');
//        this.employeesInfo.data.splice(item,1);
      },
      save(){
        this.show = true
      }

    },
    mounted() {
      this.getUser()
    }
  }

</script>

<style>
  .list{
    text-align: left;
    text-transform: capitalize;
  }
  .show-group {
    float: left;
  }

  i.fa.fa-bars {
    color: #502567;
  }

  table.table {
     white-space: nowrap;
     margin-left: 30px;
   }
  .table th, .table td {
    vertical-align: top;
  }


</style>