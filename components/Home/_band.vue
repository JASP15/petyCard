<template>
    <div class="bg-secondary-600">
        <div id="contacto" class="background-cust">
            <div class="py-16">
                <div class="container mx-auto">
                    <div class="w-full md:w-fit block mx-auto">
                        <p class="text-white text-4xl font-bold text-center">Forma parte de nuestros <span class="text-primary"> aliados </span> y obtén  <span class="text-primary">beneficios</span> exclusivos</p>
                       
                        <div class=" w-full  pt-10">
                            <div  class="relative">
                                <div class="w-full flex flex-wrap justify-center">
           
                                    <form ref="formContact" class="items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-opacity-20 flex flex-wrap w-2/3" >
                                        <div class="w-full px-4 flex flex-wrap">
                                            <p class="text-primary-500 mb-6 font-bold text-xl">Datos personales</p>
                                            <div class="mb-4  w-full ">
                                                <label class="block text-white text-sm font-bold mb-2" for="username">
                                                *Nombre completo 
                                                </label>
                                                <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" >
                                                <p class="text-red-500" v-for="(error, index) in  errors?.register_name" :key="index"> {{ error}}</p>
                                            </div>
                                            <div class="mb-4 w-1/2  pr-2">
                                                <label class="block text-white text-sm font-bold mb-2" for="username2">
                                                * Correo
                                                </label>
                                                <input v-model="mail"  class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username2" type="text" >
                                                <p class="text-red-500" v-for="(error, index) in  errors?.register_email" :key="index"> {{ error}}</p>
                                            </div>
                                            <div class="mb-4  w-1/2 pl-2">
                                                <label class="block text-white text-sm font-bold mb-2" for="username3">
                                                * Teléfono
                                                </label>
                                                <input v-model="phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username3" type="text" >
                                                <p class="text-red-500" v-for="(error, index) in  errors?.register_phone" :key="index"> {{ error}}</p>
                                            </div>
                                            <div  class="mb-4 w-full ">
                                                <label class="block text-white text-sm font-bold mb-2" for="username4">
                                                * Nombre del negocio
                                                </label>
                                                <input v-model="company" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username4" type="text" >
                                                
                                                <p class="text-red-500" v-for="(error, index) in  errors?.company_name" :key="index"> {{ error}}</p>
                                            </div>
                                            <!-- <div class="mt-4  w-full">
                                                <label class="block text-white text-sm font-bold mb-2" for="reference">
                                                ¿Tienes un codigo?
                                                </label>
                                                <input v-model="reference" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="reference" type="text" >
                                               
                                            </div> -->

                                        </div>
                                        <!-- <div class="w-full lg:w-1/2 px-4">
                                            <p class="text-primary-500 mb-6 font-bold text-xl">Datos del negocio</p>

                                            <div  class="mb-4 w-full ">
                                                <label class="block text-white text-sm font-bold mb-2" for="username4">
                                                * Nombre del negocio
                                                </label>
                                                <input v-model="company" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username4" type="text" >
                                                
                                                <p class="text-red-500" v-for="(error, index) in  errors?.company_name" :key="index"> {{ error}}</p>
                                            </div>
                                            <div  class="mb-4 w-full ">
                                                <label class="block text-white text-sm font-bold mb-2" for="rol">
                                                * Giro del negocio
                                                </label>
                                                <input v-model="rol" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="rol" type="text" >
                                                
                                                <p class="text-red-500" v-for="(error, index) in  errors?.company_name" :key="index"> {{ error}}</p>
                                            </div>
                                            <div class="mb-4 w-full ">
                                                <label class="block text-white text-sm font-bold mb-2" for="company_reference">
                                                Contacto de referencia 
                                                </label>
                                                <input v-model="company_reference" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="company_reference" type="text" >
                                            </div> 
                                            <div class="mb-4 w-full">
                                                <label class="block text-white text-sm font-bold mb-2" for="company_reference_charge">
                                                Puesto del contacto de referencia
                                                </label>
                                                <input v-model="company_reference_charge" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="company_reference_charge" type="text" >
                                               
                                            </div>  
                                            <div class="mb-4 w-full">
                                                <label class="block text-white text-sm font-bold mb-2" for="company_phone">
                                                Teléfono del contacto de referencia
                                                </label>
                                                <input v-model="company_phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="company_phone" type="text" >
                                               
                                            </div>  
                                             
                                        </div> -->
                                        <div class="flex justify-center w-full">
                                            <button type="submit" @click.prevent="onSubmit" class="bg-primary-900 rounded-2xl px-8 py-3 text-white font-semibold text-lg hover:bg-primary-700 transition-all duration-300">Enviar</button>                       

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <p  class="text-white text-4xl font-bold text-center">O únete a nuestra comunidad de  petlovers <span class="text-primary"> <a href="https://user.petycard.com/login" target="_blank" rel="noopener noreferrer">¡AQUI!</a> </span></p>
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
        showPetlover:false,
        name:'',
        mail:'',
        phone:'',
        company:'',
        rol:'',
        company_reference:'',
        company_reference_charge:'',
        company_phone:'',
        reference:'',
        errors: {
            company_name:[],
            company_rol:[],
            register_name:[],
            register_phone:[],
            register_email:[]
        }
    }
  },
  methods: {
    async onSubmit() {
      
            const res = await this.$axios.$post('https://api.petycard.com/api/company', {
                register_name:  this.name, 
                register_phone:  this.phone, 
                register_email:  this.mail,  
                company_name: this.company_name, 
                company_rol:  this.rol, 
                company_reference:this.company_reference,
                company_reference_charge:this.company_reference_charge,
                company_phone:this.company_phone,
                reference: this.reference
                
                }).catch((error)=> {
                    alert( 'No se ha registrado correctamente tu información')
                    if (error.response) {
                        this.errors = error.response?.data?.errors
                    }
                });
                if(res){
                    this.$refs.formContact.reset()
                    alert('Se ha registrado correctamente tu información')
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