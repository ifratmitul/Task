<template>
  <div class="container">
    <h3>Add Student</h3>
    <form action @submit="addStudent">
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Name"
              v-model="Student.name"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="Student.email"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label for="exampleInputEmail1">Phone</label>
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
              v-model="Student.phone"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleInputEmail1">Date of Birth</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter birthdate"
              v-model="Student.birthdate"
            />
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { Students } from "../api/student";
import StudentList from "./StudentList";
export default {
  name: "AddStudent",
  data() {
    return {
      Student: {
        name: "",
        email: "",
        phone: "",
        birthdate: "",
      },
    };
  },

  methods: {
    addStudent(e) {
      e.preventDefault();

      Students.insert({
        name: this.Student.name,
        email: this.Student.email,
        phone: this.Student.phone,
        birthday: this.Student.birthdate,
      });

      this.Student.name = "";
      this.Student.email = "";
      this.Student.phone = "";
      this.Student.birthdate = "";
    },
  },

  // meteor: {
  //   students() {
  //     return Students.find({}).fetch();
  //   },
  // },
};
</script>

<style scoped>
.container {
  padding: 30px;
}
</style>
