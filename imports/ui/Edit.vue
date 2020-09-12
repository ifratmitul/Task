<template>
  <div class="container">
    <p>{{ this.$route.params.id }}</p>

    <h3>Edit Data</h3>

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
  </div>
</template>

<script>
import { Students } from "../api/student";
export default {
  name: "edit",

  data() {
    return {
      id: this.$route.params.id,

      name: "",
      email: "",
      phone: "",
      birthdate: "",
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
