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
            <router-link
              :to="{
                name: 'edit',
                params: { id: s._id },
              }"
              class="btn btn-warning"
              @click.prevent="editStudent(s._id)"
            >
              Edit
            </router-link>
          </td>
          <td>
            <button class="btn btn-danger" @click="delStudent(s._id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
  },
};
</script>

<style scoped>
.container {
  padding: 30px;
}
</style>
