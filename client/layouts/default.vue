<template>
  <div class="p-0 w-full">
    <Navbar @signInDialogTrigger="dialogVisible = true" />
    <nuxt keep-alive />
    <Login />
  </div>
</template>

<script>
import { Login } from '~/components/common/Auth'
import { Navbar } from '~/components/common/Layout'
export default {
  name: 'Default',
  components: {
    Login,
    Navbar,
  },
  methods: {
    triggerLoginForm() {
      this.$root.$emit('my-dialog-show', 'login-form')
    },
  },
}
</script>
