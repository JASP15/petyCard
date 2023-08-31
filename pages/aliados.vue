<template>
    <div >
        <div class="container mx-auto pt-32 px-8">
            <p class="text-secondary-600 text-4xl font-bold text-center mb-4">Úsala <span class="text-primary-700 ">donde </span> y <span class="text-primary-700 ">cuando</span> quieras </p>
            <p class=" text-lg text-center">Conoce todas las tiendas donde podrás obtener multiples beneficios</p>
            <div class="flex flex-wrap justify-center items-center py-12 my- px-4">
                <div v-for="item in listCompanies" :key="item.id" class="w-full lg:w-1/4 px-6 flex justify-center items-center lg:mb-0" >
                    <div class="max-w-sm rounded overflow-hidden shadow-lg mb-8">
                        <img v-if="item.img" :src="item.picture" class="object-contain w-full" />
                            <img v-else src="~//assets/images/logo_petycard_img.png" class="object-contain w-full h-full" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{{ item.name }}</div>
                        <p v-for="benefit in item.benefits" :key="benefit.index" class="text-gray-700 text-base" >
                        {{ benefit }}
                        </p>
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
        listCompanies:[
            {
                name:'PetyCard',
                img: false,

            },
            {
                name:'PetyCard + ',
                img: false,

            },
            {
                name:'PetyCard  +2',
                img: false,

            },
            {
                name:'Estética de perros Valle Don Camilo',
                img:false
            }
        ],
    }
  },
  mounted(){    
    this.getCompanies()
  },
  methods: {
    async getCompanies() {
        try {
            const res = await this.$axios.$get('https://api.petycard.com/api/company', {})
            console.log(res)
              this.listCompanies = res.data;
        } catch (error) {
            this.$refs.formContact.reset()
            alert('Se ha registrado correctamente tu información')
        }
            
    },
  },

}
</script>
<style scoped>
.flip {
  @apply w-full;
  height: 250px;   
  text-align: center;
  perspective: 600px;  
}
.flip-content {
  width: 100%;
  height: 100%;
  transition: transform 0.4s;
  transform-style: preserve-3d;
}
.flip:hover .flip-content {
  transform: rotateY(180deg);
  transition: transform 0.3s;
}

.flip-front, .flip-back {

  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;  
  color: #fff;  
  @apply bg-white shadow-primary-500 border-8 border-black inset-0 rounded-3xl;
  box-shadow: 6px 6px #33F3FF;
}
.flip-back {
@apply bg-black;
  transform: rotateY(180deg);
  border: 6px solid #33F3FF;
  box-shadow: 6px 6px #33F3FF;
}
</style>