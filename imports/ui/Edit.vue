<template>
  <div class="container">
    <h3>Edit Data</h3>

    <div class="container">
      <form action @submit="editStudent">
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                required
                type="text"
                class="form-control"
                placeholder="Enter Name"
                v-model="name"
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
                v-model="email"
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
                v-model="phone"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Date of Birth</label>
              <date-picker v-model="birthdate" :config="options"></date-picker>
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <p class="update-alert alert-success"></p>
  </div>
</template>

<script>
import { Students } from "../api/student";
import datePicker from "vue-bootstrap-datetimepicker";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";
export default {
  name: "edit",
  components: { datePicker },

  data() {
    return {
      id: this.$route.params.id,

      name: "",
      email: "",
      phone: "",
      birthdate: new Date(),
      options: {
        format: "DD/MM/YYYY",
        useCurrent: false,
      },
    };
  },

  methods: {
    editStudent() {
      let newMongoObjectId = new Mongo.Collection.ObjectID();
      newMongoObjectId._str = this.id;
      //   const result = Students.findOne({ _id: newMongoObjectId._str });
      // console.log(result.name + " " + result.email);
      Students.update(
        { _id: this.id },
        {
          $set: {
            name: this.name,
            email: this.email,
            phone: this.phone,
            birthday: this.birthdate,
          },
        }
      );
      document.querySelector(".update-alert").textContent =
        "Student Details Edited";
      this.name = "";
      this.email = "";
      this.phone = "";
      this.birthdate = "";
    },
  },

  //     studentDetails() {
  //       let newMongoObjectId = new Mongo.Collection.ObjectID();
  //       newMongoObjectId._str = this.id;
  //       return Students.findOne({ _id: newMongoObjectId._str });
  //
  //     },
  //   },
};
</script>

<style scoped>
.container {
  padding: 50px;
}
</style>
