<template>
  <div>
    <h1>Hi user!</h1>
    <p>You're logged in with Vue 3</p>
    <p>
      <router-link to="/users">Manage Users</router-link>
    </p>
  </div>
</template>

<script lang="js">
export default {
  name: 'HomePage'
}
</script>