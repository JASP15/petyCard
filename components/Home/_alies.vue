<template>
    <div class="container mx-auto py-20 px-8">
        <p class="text-secondary-600 text-4xl font-bold text-center mb-4">¿Quienes nos <span class="text-primary-700 ">respaldan</span>?</p>
        <p class=" text-lg text-center">Conoce todas las tiendas donde podrás obtener multiples beneficios</p>
        <div class="flex flex-wrap justify-center items-center py-12 mt-4 px-4">
            <div v-for="item in aliesList" :key="item.id" class="w-full lg:w-1/5 px-6 flex justify-center items-center mb-32 lg:mb-0 h-32   relative" >
                <a :href="item.url" target="_blank"  class=" h-full w-full group relative ">
                    <img v-if="item.img" :src="item.img" class="absolute object-contain w-full h-full group-hover:scale-110 transition-all duration-200" />
                    <img v-else src="~//assets/images/logo_petycard_img.png" class="object-contain w-full h-full absolute" />
                    
                </a>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
        aliesList:[
            {
                url:'https://www.thestiqrfactory.com/index.aspx',
                img: 'dtiqr.png',

            },
        
            {
                img: 'desclub.png',
                url: 'https://desclub.com.mx/'

            },
            {
                img:'parquetec_mexico_logo.jpeg',
                url: 'https://www.parquetec.org'
            },
            {
                img:'logosaluddirecta.png',
                url:'https://saludirecta.com/'
            }
           
           
        ],
    }
  },

}
</script>

