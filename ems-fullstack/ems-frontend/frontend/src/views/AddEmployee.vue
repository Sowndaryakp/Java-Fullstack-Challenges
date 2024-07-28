<template>
    <main>
        <Navbar />
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
              <h2 class="text-center mb-3">Add Employee</h2>
              <form @submit.prevent="addEmployee">
                <!--name-->
                <div class="row">
                  <div class="col-md-12 form-group mb-3">
                    <label for="firstName" class="form-label">First Name</label>
                    <input id="firstName"  type="text" name="lastName" class="form-control" placeholder="First Name" required v-model="employee.firstName">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group mb-3">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input id="lastName"  type="text" name="lastName" class="form-control" placeholder="Last Name" required v-model="employee.lastName">
                  </div>
                </div>

                
                <!--Email-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input id="email" type="email"  name="email" class="form-control" placeholder="email" required v-model="employee.email" >
                    </div>
                  </div>
               
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input class="btn btn-primary w-100" type="submit" value="Submit">
                  </div>
                </div>
      
                <div>
                  
                </div>
              </form>
        
            </div>
          </div>
    </main>
</template>


<script>
import Navbar from '../components/Navbar.vue';

    export default {
        name: 'AddEmployee',
        components: {
            Navbar
        },

        data() {
            return {
                employee : {
                    firstName: '',
                    lastName: '',
                    email: '',
                }
            }
        },

        methods: {
            addEmployee(){
                fetch('http://localhost:8080/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.employee)
                })
                .then(data => {
                    console.log(data)
                    this.$router.push("/");
                })

            }
        },
            
    }


</script>