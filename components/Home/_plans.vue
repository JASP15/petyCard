<template>
    <section class="bg-secondary-900 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
            <h2 class="text-4xl font-extrabold text-white sm:text-5xl">
               Nuestras <span class=" text-primary-600">membresías</span>
            </h2>
            <p class="mt-4 text-xl text-gray-400">
            
            </p>
            </div>

            <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-1/3 px-4 py-4" v-for="item in listMemberships" :key="item.id">
                    <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 "  >
                        <div class="mb-8">
                        <h3 class="text-2xl font-semibold text-white">{{item.name}}</h3>
                        <p class="mt-4 text-gray-400">{{item.description}}</p>
                        </div>
                        <div class="mb-8">
                        <span class="text-5xl font-extrabold text-white">${{ item.price }}</span>
                     
                        </div>
                        <ul class="mb-8 space-y-4 text-gray-400">
                            <li class="flex items-center" >
                            <svg class="h-6 w-6 text-primary-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p class="flex-1"> Mascotas cubiertas: {{ item.covered_pets }}</p>
                        </li>
                        <li class="flex items-center" v-for="(benefit, index) in item.arrBEnefits" :key="index">
                            <svg class="h-6 w-6 text-primary-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p class="flex-1">{{ benefit.index }} : {{ benefit.value }}</p>
                        </li>
                        
                        </ul>
                        <a v-show="benefit?.url" v-bind="benefit?.url" target="_blank" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                        Adquirir
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
        listMemberships:[

        ],
    }
  },
  mounted(){    
    this.getMemberships()
  },
  methods: {
    async getMemberships() {
        try {
            const res = await this.$axios.$get('https://beta.api.petycard.com/app/memberships', {})
                res.forEach(data => {
                    const arrnew = []
                    for (const key in data.benefits) {
                        if (Object.hasOwnProperty.call(data.benefits, key)) {
                            const element = data.benefits[key];
                            arrnew.push({index:key, value:element})
                        }
                    }
                    data.arrBEnefits = arrnew;
                });
                console.log(res);
              this.listMemberships = res.reverse();

        } catch (error) {
          console.log(error)
        }
            
    },
  },

}
</script>