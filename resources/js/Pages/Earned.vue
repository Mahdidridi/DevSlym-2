<template>
<div v-if="iscompleted" class="w-full z-40 h-screen overflow-hidden fixed bg-black/60"></div>

<div v-if="iscompleted" class="fixed top-0 z-50 left-0 flex items-center justify-center w-full h-screen">

    <div class="bg-bg_gray top-[50%] z-50 flex flex-col gap-y-4 justify-center rounded-3xl p-6 w-[470px]">

        <h2 class="font-semibold text-2xl text-center">
            Congratulations You’ve Earned
        </h2>

        <h2 class="text-2xl font-semibold text-center bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">
            500 <span class="text-xl">XP</span>
        </h2>

        <button 
        class="font-medium text-sm bg-gradient-to-r from-light_blue to-dark_blue py-4 rounded-xl text-center text-white">
        Yeahhhhhhhhhhhhh!
        </button>

    </div>

</div>


</template>

<script></script>