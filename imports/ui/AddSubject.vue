<template>
  <div class="container">
    <h3>Add Subject</h3>
    <form action @submit="addSubject">
      <div class="form-group">
        <div class="row">
          <div class="col-6">
            <label for="exampleFormControlInput1">Write Subject Name</label>
            <input
              required
              v-model="subjectName"
              type="text"
              class="form-control"
              placeholder="Add Subject"
            />
          </div>

          <div class="col-6">
            <div class="form-group">
              <label for="exampleFormControlSelect1">Select Student</label>
              <select required class="form-control" v-model="studentName">
                <option v-bind:key="s._id" v-for="s in students">
                  {{ s.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Add Subject</button>
    </form>
  </div>
</template>

<script>
import { Subjects } from "../api/subjects";
export default {
  name: "AddSubject",
  props: ["students"],

  data() {
    return {
      subjectName: "",
      studentName: "",
    };
  },

  methods: {
    addSubject(e) {
      e.preventDefault();
      Subjects.insert({
        name: this.subjectName,
        student: this.studentName,
      });

      this.subjectName = "";
      this.studentName = "";
    },
  },
};
</script>

<style scoped>
.container {
  padding: 30px;
}
</style>
