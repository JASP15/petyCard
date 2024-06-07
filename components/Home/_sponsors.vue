<template>
    <div id="aliados" v-show="listCompanies.length > 0">
        <div class="container mx-auto py-20 px-8">
            <p class="text-secondary-600 text-4xl font-bold text-center mb-4">Úsala <span class="text-primary-700 ">donde </span> y <span class="text-primary-700 ">cuando</span> quieras </p>
            <p class=" text-lg text-center">Conoce todas las tiendas donde podrás obtener multiples beneficios</p>
            <div class="flex flex-wrap justify-center items-center py-12 mt-4 px-4">
                <div v-for="item in listCompanies" :key="item.id" class="w-full lg:w-1/4 px-6 flex justify-center items-center mb-32 lg:mb-0" >
                    <div class="flip">
                    <p class="text-center !text-black text-2xl font-medium h-24 flex items-center justify-center">{{ item.name }}</p>
                    <div class="flip-content">
                        <div class="flip-front" :class="{'p-4':item.picture}">
                            <img v-show="item.picture" :src="item.picture" class="object-contain w-full h-full" />
                            <img v-show="!item.picture" src="~//assets/images/logo_petycard_img.png" class="object-contain w-full h-full" />
                        </div>
                        <div class="flip-back p-4">
                            <a :href="item.maps_url" target="_blank"  class="relative h-full w-full">
                                <p class="text-center text-primary-700 text-xl font-medium">Beneficios</p>
                                <div class="text-white text-left max-h-40 overflow-auto ">
                                    <div class="mt-4 relative h-[170px]">
                                        <p v-for="benefit in item.benefits" :key="benefit.index" class=" text-base" >
                                            {{ benefit.benefit }}
                                        </p>
                                        
                                        </div>
                                      <P class="text-[9px] mt-6 absolute -bottom-4">*No es acumulable con otras promociones</P>
                                </div>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-16">
            <a href="/aliados">
                    <ButtonComponent>  Conoce a todos nuestros aliados </ButtonComponent>
                </a>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        listCompanies:[

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
          console.log(error)
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