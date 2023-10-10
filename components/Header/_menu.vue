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
                    <div class="dropdown">
                    <ButtonComponent>  Iniciar sesión </ButtonComponent>
                    <div class="dropdown-content bg-secondary-800 rounded-xl">
                        <a class="hover:bg-primary-700" href="https://customer.petycard.com/" target="_blank">Aliados</a>
                        <a class="hover:bg-primary-700" href="https://user.petycard.com/" target="_blank">Petlovers</a>
                    </div>
                    </div>
                    
                </div>
                     
            </div>
        </div>
    </div>
</template>

<style>
/* Dropdown Button */


/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}



.dropdown:hover .dropdown-content {display: block;}


</style>