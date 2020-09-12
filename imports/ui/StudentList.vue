<template>
  <div class="container">
    <h3>Student List</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Birthday</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="s._id" v-for="s in students">
          <td>{{ s.name }}</td>
          <td>{{ s.email }}</td>
          <td>{{ s.phone }}</td>
          <td>{{ s.birthday }}</td>
          <td>
            <button
              v-b-modal.modal-1
              class="btn btn-warning"
              @click.prevent="editStudent(s._id)"
            >
              Edit
            </button>
          </td>
          <td>
            <button class="btn btn-danger" @click="delStudent(s._id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
        <div class="container">
          <form action @submit="editStudent">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input
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
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter birthdate"
                    v-model="birthdate"
                  />
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { Students } from "../api/student";
export default {
  name: "StudentList",
  props: ["students"],
  data() {
    return {
      id: "",
      name: "",
      email: "",
      phone: "",
      birthdate: "",
    };
  },

  methods: {
    created() {},
    delStudent(id) {
      Students.remove(id);
    },

    editStudent(id) {
      console.log(id);
      let newMongoObjectId = new Mongo.Collection.ObjectID();
      newMongoObjectId._str = id;
      this.id = id;

      // const result = Students.findOne({ _id: newMongoObjectId._str });
      // console.log(result.name + " " + result.email);

      // Students.update(
      //   { _id: this.id },
      //   {
      //     $set: {
      //       name: this.name,
      //       email: this.email,
      //       phone: this.phone,
      //       birthday: this.birthdate,
      //     },
      //   }
      // );
    },
  },
};
</script>

<style scoped>
.container {
  padding: 30px;
}
</style>
