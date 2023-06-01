<template>
    <div id="aliados">
        <div class="container mx-auto py-36 px-8">
            <p class="text-secondary-600 text-4xl font-bold text-center mb-4">Úsala <span class="text-primary ">donde </span> y <span class="text-primary ">cuando</span> quieras </p>
            <p class=" text-lg text-center">Conoce todas las tiendas donde podrás obtener multiples beneficios</p>
            <div class="flex flex-wrap justify-center items-center py-12 mt-4 px-4">
                <div v-for="item in listSponsors" :key="item.id" class="w-1/4 px-6 flex justify-center items-center" >
                    <a href="https://www.petco.com.mx/" target="_blank"  class="relative h-full w-full">
                        <div class="flip">
                            <p class="text-center !text-black text-2xl font-medium h-24 flex items-center justify-center">{{ item.name }}</p>
                            <div class="flip-content">
                                <div class="flip-front" :class="{'p-4':item.img}">
                                    <img v-if="item.img" :src="item.img" class="object-contain w-full h-full" />
                                    <img v-else src="~//assets/images/logo_petycard_img.png" class="object-contain w-full h-full" />
                                </div>
                                <div class="flip-back p-4">
                                    <p class="text-center text-primary-700 text-xl font-medium">Beneficios</p>
                                    <div class="text-white text-left">
                                        <ul class="mt-4">
                                            <li>10% en efectivo</li>
                                            <li>15% tarjeta en tienda</li>
    
                                        </ul>
    
                                    </div>
                                </div>
                            </div>
                        </div>

                    </a>
                </div>
   
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        listSponsors:[
            {
                name:'PETCO',
                img: 'https://www.seekpng.com/png/full/336-3362719_petco-logo-petco-cat-and-dog.png',

            },
            {
                name:'+KOTA',
                img: 'https://maskotashop.com/wp-content/uploads/2021/04/logo-maskotashop-full.png',

            },
            {
                name:'GMVT',
                img: 'https://www.mimaskotbolivia.com/images/logo.png',

            },
            {
                name:'Estética de perros Valle Don Camilo',
                img:false
            }
        ],
    }
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