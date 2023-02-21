<template>
    <div  class="relative">
      <div class="w-full  relative background-cust py-16   " >
        <p class="h-40"></p>
        <buttton class=" bg-red-500 " @click="onSubmit()">Hoola</buttton>
      </div>
    </div>
</template>

<style scoped>
  .background-cust{
    background-image: url("~/assets/images/descarga2.png");
    background-position: center 86%;
  }
</style>


<script>
export default {
  data() {
    return {
    
    }
  },
  methods: {
    onSubmit() {
      this.$mail.send({
        from: 'John Doe',
        subject: 'Incredible',
        text: 'This is an incredible test message',
      })
    },
  },
}
</script>