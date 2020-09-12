<template>
  <div class="container">
    <header>
      <h1>Todo List</h1>
      <form className="new-task" @submit.prevent="handleSubmit">
        <input
          type="text"
          placeholder="Type to add new tasks"
          v-model="newTask"
        />
      </form>
    </header>
    <ul>
      <!-- <Task v-for="task in getTasks()" v-bind:key="task._id" v-bind:task="task" /> -->
      <Task v-for="task in tasks" v-bind:key="task._id" v-bind:task="task" />
      <AddStudent />
      <StudentList v-bind:students="students" />
      <AddSubject v-bind:students="students" />
      <SubjectList v-bind:subjects="subjects" />
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import Task from "./Task.vue";
import AddStudent from "./AddStudent.vue";
import StudentList from "./StudentList";
import { Tasks } from "../api/tasks.js";
import { Students } from "../api/student";
import AddSubject from "./AddSubject";
import { Subjects } from "../api/subjects";
import SubjectList from "./SubjectList";

export default {
  components: {
    Task,
    AddStudent,
    StudentList,
    AddSubject,
    SubjectList,
  },

  data() {
    return {
      newTask: "",
      Student: [],
    };
  },
  methods: {
    handleSubmit(event) {
      Tasks.insert({
        text: this.newTask,
        createdAt: new Date(), // current time
      });

      // Clear form
      this.newTask = "";
    },

    // addStudent(newStudent) {
    //   this.Student = [...this.Student, newStudent];
    //   console.log(Student.map((name) => Student.name));
    //   Students.insert({
    //     sList: { ...this.Student },
    //   });
    // },

    // delStuden() {
    //   Tasks.remove(this.task._id);
    // },
  },
  meteor: {
    tasks() {
      return Tasks.find({}, { sort: { createdAt: -1 } }).fetch();
    },
    students() {
      return Students.find({}).fetch();
    },
    subjects() {
      return Subjects.find({}).fetch();
    },
  },
};
</script>
