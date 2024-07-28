<template>
    <main>
        <Navbar />

        <!-- Table-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">View Employee</h1>
                    <!--Add button -->
                    <a href="/add" class="btn btn-primary">Add Employee</a>
                    <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <!--<th scope="col">Phone Number</th>
                            <th scope="col">Gender</th>-->
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="employee in employees" :key="employee.id">
                            <th scope="row">{{employee.id}}</th>
                            <td>{{employee.firstName}}</td>
                            <td>{{employee.lastName}}</td>
                            <td>{{employee.email}}</td>
                            <!--<td>{{employee.pNo}}</td>
                            <td>{{employee.gender}}</td>-->
                            <td>
                              <a class="btn btn-primary" :href="`/edit/${employee.id}`">Edit</a>
                              <button class="btn btn-danger mx-2" @click="deleteEmployee(employee.id)">Delete</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
        
    </main>
</template>


<script>
import Navbar from '../components/Navbar.vue'

    export default {
        name: 'ViewEmployees',
        components: {
            Navbar
        },
        data() {
            return {
                employees: []
            }
        },

        beforeMount(){
            this.getEmployees()
        },

        methods: {
            getEmployees(){
                fetch('http://localhost:8080/employees')
                .then(res => res.json())
                .then(data => {
                    this.employees = data
                    console.log(data)
                })
            },
            deleteEmployee(id){
                fetch(`http://localhost:8080/${id}`, {
                    method: 'DELETE'
                })
                .then(data => {
                    console.log(data)
                    this.getEmployees()
                })
            }
        }

    }

</script>