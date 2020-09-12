<template>
  <div class="container">
    <h3>Add Student</h3>
    <div>
      <p class="alert-success" id="add-alert"></p>
    </div>

    <form action @submit="addStudent">
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              required
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
              required
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
              required
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
            <date-picker
              v-model="Student.birthdate"
              :config="Student.options"
            ></date-picker>
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
import datePicker from "vue-bootstrap-datetimepicker";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";

export default {
  name: "AddStudent",
  components: { datePicker },
  data() {
    return {
      Student: {
        name: "",
        email: "",
        phone: "",
        birthdate: new Date(),
        options: {
          format: "DD/MM/YYYY",
          useCurrent: false,
        },
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
      document.querySelector("#add-alert").textContent = "Student data added";

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
