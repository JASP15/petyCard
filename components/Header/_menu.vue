<template>
    <div class="fixed inset-0 w-full py-6 px-4 h-24 bg-secondary-800 z-20">
        <div class="container mx-auto">
            <div class="flex flex-wrap">
                <div class="w-1/4 flex items-center justify-center">
                    <a href="/" class="w-full h-full"> <img src="~/assets/images/logo.png" alt="Logo PetyCard" class=" w-40 "></a>
                </div>
                <div class="w-2/4 hidden md:block">
                    <ul class="flex justify-center items-center">
                        <li class="px-4">
                            <a class="text-primary hover:text-white text-2xl font-semibold" href="/#home">Inicio</a>
                        </li>
                        <li class="px-4">
                            <a class="text-primary hover:text-white text-2xl font-semibold" href="/#beneficios">Beneficios</a>
                        </li>
                        <li class="px-4">
                            <a class="text-primary hover:text-white text-2xl font-semibold" href="/aliados">Aliados</a>
                        </li>
                        <li class="px-4">
                            <a class="text-primary hover:text-white text-2xl font-semibold" href="/#contacto">Solicitar</a>
                        </li>
                        
                    </ul>
                </div>
                <div class="w-3/4 lg:w-1/4 flex justify-end">
                    <a href="#contacto">
                        <ButtonComponent>  Comienza ahora </ButtonComponent>

                    </a>
                </div>
                
<button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

                
            </div>
        </div>
    </div>
</template>