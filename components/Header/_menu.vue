<template>
    <div class="fixed inset-0 w-full py-6 px-4 h-24 bg-secondary-800 z-10">
        <div class="container mx-auto">
            <div class="flex flex-wrap">
                <div class="w-1/4 flex items-center justify-center">
                    <a href="/" class="w-full h-full"> <img src="~/assets/images/logo.png" alt="Logo PetyCard" class=" w-40 "></a>
                </div>
                <div class="w-2/4">
                    <ul class="flex justify-center items-center">
                        <li class="px-4">
                            <a class="text-primary hover:text-white text-2xl font-semibold" href="#">Inicio</a>
                        </li>
                        <li class="px-4">
                            <a class="text-primary hover:text-white text-2xl font-semibold" href="#">Beneficios</a>
                        </li>
                        <li class="px-4">
                            <a class="text-primary hover:text-white text-2xl font-semibold" href="#">Aliados</a>
                        </li>
                        <li class="px-4">
                            <a class="text-primary hover:text-white text-2xl font-semibold" href="#">Solicitar</a>
                        </li>
                        
                    </ul>
                </div>
                <div class="w-1/4 flex justify-end">
                    <ButtonComponent>  Iniciar Sesión </ButtonComponent>
                </div>
                
            </div>
        </div>
    </div>
</template>