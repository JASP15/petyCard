<template>
    <div class="fixed inset-0 w-full py-6 px-4 h-24 bg-secondary-800 z-10">
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
                
            </div>
        </div>
    </div>
</template>