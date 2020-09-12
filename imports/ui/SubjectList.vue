<template>
  <div class="container">
    <h3>Subject List List</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Subject Name</th>
          <th scope="col">Student Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="s._id" v-for="s in subjects">
          <td>{{ s.name }}</td>
          <td>{{ s.student }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "SubjectList",
  props: ["subjects"],
};
</script>

<style scoped>
.container {
  padding: 30px;
}
</style>
