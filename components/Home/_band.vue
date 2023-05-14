<template>
    <div id="contacto" class="background-cust">
        <div class=" pt-40 pb-10">
            <div class="container mx-auto">
                <div class="w-2/3 lg:w-1/2 block mx-auto">
                    <p class="text-white text-4xl font-bold text-center">Comienza  desde <span class="text-primary">hoy</span>.</p>
                    <div class=" w-full  pt-10">
                        <div  class="relative">
                            <div class="w-full">
                                <form ref="formContact" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-opacity-20" >
                                    <div class="mb-4">
                                        <label class="block text-white text-sm font-bold mb-2" for="username">
                                        Nombre 
                                        </label>
                                        <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" >
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-white text-sm font-bold mb-2" for="username2">
                                        Correo
                                        </label>
                                        <input v-model="mail"  class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username2" type="text" >
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-white text-sm font-bold mb-2" for="username3">
                                        Teléfono
                                        </label>
                                        <input v-model="phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username3" type="text" >
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-white text-sm font-bold mb-2" for="username4">
                                        Nombre de la compañía
                                        </label>
                                        <input v-model="company" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username4" type="text" >
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-white text-sm font-bold mb-2" for="username5">
                                        Giro de la empresa
                                        </label>
                                        <input v-model="rol" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username5" type="text" >
                                    </div>  
                                    <button type="submit" @click.prevent="onSubmit" class="bg-primary-900 rounded-2xl px-8 py-3 text-white font-semibold text-lg hover:bg-primary-700 transition-all duration-300">Enviar</button>                       
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
        name:'',
        mail:'',
        phone:'',
        company:'',
        rol:''
    }
  },
  methods: {
    async onSubmit() {
        try {
            const res = await this.$axios.$post('http://backserver.petycard.com/api/company', {
                company_name:this.company, 
                company_rol:  this.rol, 
                register_name:  this.name, 
                register_phone:  this.phone, 
                register_email:  this.name,  
                })
                this.$refs.formContact.reset()
                alert(res.detail?res.detail : 'Se ha registrado correctamente tu información')
            
        } catch (error) {
            this.$refs.formContact.reset()
            alert('Ha ocurrido un error, por favor inténtalo más tarde')
        }
            
    },
  },
}
</script>
<style scoped>
  .background-cust{
    background-image: url("~/assets/images/descarga2.png");
    background-position: 0 86%;
  }
</style>