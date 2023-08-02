<template>
    <div class="container mx-auto py-20 px-8">
        <p class="text-secondary-600 text-4xl font-bold text-center mb-4">¿Quienes nos <span class="text-primary-700 ">respaldan</span>?</p>
        <p class=" text-lg text-center">Conoce todas las tiendas donde podrás obtener multiples beneficios</p>
        <div class="flex flex-wrap justify-center items-center py-12 mt-4 px-4">
            <div v-for="item in aliesList" :key="item.id" class="w-full lg:w-1/4 px-6 flex justify-center items-center mb-32 lg:mb-0" >
                <a href="/" target="_blank"  class="relative h-full w-full">
                    <div class="flip">
                        <div class="flip-content">
                            <div class="flip-front" :class="{'p-4':item.img}">
                                <img v-if="item.img" :src="item.img" class="object-contain w-full h-full" />
                                <img v-else src="~//assets/images/logo_petycard_img.png" class="object-contain w-full h-full" />
                            </div>
                           
                        </div>
                    </div>

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
                name:'American Express',
                img: 'https://placehold.co/600x400/png',

            },
            {
                name:'BBVA ',
                img: 'https://placehold.co/600x400/png',

            },
            {
                name:'BBVA ',
                img: 'https://placehold.co/600x400/png',

            },
            {
                name:'BBVA ',
                img: 'https://placehold.co/600x400/png',

            },
           
        ],
    }
  },

}
</script>
