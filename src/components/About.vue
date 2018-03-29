<template>
  <div class="about" id="asd">
    <h1>What is a Butt?</h1>
    <p>
      SHIIIIIIT
      {{name}}
    </p>
    <br>
    <router-link to="/coins/ethereum">Ethereum</router-link>

    <router-link to="/coins/bitcoin">Bitcoin</router-link>
    <ul>
      <li v-for="d in dat">
        <router-link v-bind:to="d">Bitcoin</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        name: 'About'
      }
    }
  }
</script>
