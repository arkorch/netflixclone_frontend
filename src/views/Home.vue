<template>
<div>
    <h1>Hello {{ first_name }} !</h1>
</div>
</template>

<script>
export default {
  name: "UserHome",

  props: {
      first_name: String,
      role: String,
      permissions: String,
      avatar: String
  }
}
</script>
