<template>
  <header class="header">
    <div class="jumbotron jumbotron-fluid-text-center">
      <h1>Calculator</h1>
      <hr class="rule">
      <h6 class="lead">A simple calculator that performs Arithmetic,</h6>
      <h6 class="lead">Trigonometric, and Exponential operations</h6>
    </div>
  </header>
  <div id="app">
    <form class="col-lg-5 offset-lg-4">
        <label for="num1" class="lead">First Number</label><br>
        <input type="text" v-model="num1" class="form-control w-75" id="num1" placeholder="Number 1" required autocomplete="off">
        <br>
      
        <label for="num2" class="lead">Second Number</label><br>
        <input type="text" v-model="num2" class="form-control w-75" id="num2" placeholder="Number 2" required autocomplete="off">
        <br>
    
        <label for="operation" class="lead">Operation (Arithmetic/Trig)</label><br>
        <input type="text" v-model="operation" class="form-control w-75" id="num2" placeholder="Operation" required autocomplete="off">
        <br>

        <button type="button" class="btn btn-primary btn-circle" v-on:click="calculateResult()">Calculate Result</button>
        <br><br>

        <label>Result: {{ result }}</label>

    </form>
  </div>
</template>

<script>

import axios from 'axios';

const endpoint = "https://webcalcapi.herokuapp.com/api"

export default {
  name: 'App',
  components: null, // Just kept this line to show I have no components

  data() {
    return {
      num1: "",
      num2: "",
      operation: "",
      result: "",
    }
  },

  methods: {
    calculateResult() {

      axios({ method: 'POST',  url: endpoint, data: 
          JSON.stringify({
            "num1": parseFloat(this.num1),
            "num2": parseFloat(this.num2),
            "operation": this.operation
          })
        }).then((res) => {
        console.log(res.data)
        this.result = res.data["res"]
      })
    }
  }
}

</script>
