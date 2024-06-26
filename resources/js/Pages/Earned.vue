<template>
<div v-if="iscompleted && isDone" @click="handleDone" class="w-full z-50 h-screen overflow-hidden fixed bg-black/60"></div>

<div v-if="iscompleted && isDone" class="fixed top-0 z-50 left-0 flex items-center justify-center w-full h-screen">

    <div class="bg-bg_gray top-[50%] z-50 flex flex-col justify-center rounded-3xl p-6 w-[470px]">

        <div class="relative h-[150px] w-full flex items-center justify-center">
           
            <img src="img/diamond4.png" class="w-[147px]" alt="">

            <img src="img/completed.png" class="w-[250px] -translate-y-4 left-[50%] translate-x-[-50%] absolute top-0" alt="">
        </div>

        <h2 class="font-semibold mb-4 text-[24px] text-center">
            Congratulations You’ve Earned
        </h2>

        <h2 class="text-[30px] mb-3 font-semibold text-center bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">
            500 <span class="text-[24px]">XP</span>
        </h2>

        <button 
        @click="handleDone"
        class="font-medium shadow-md text-sm bg-gradient-to-r from-light_blue to-dark_blue py-4 rounded-xl text-center text-white">
        Yeahhhhhhhhhhhhh!
        </button>

    </div>

</div>


</template>

<script>
export default {
    props: {
        iscompleted: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            // iscompleted: true,
            isDone: true
        }
    },
    methods: {
        handleDone() {
            this.isDone = false;
        }
  }
}
</script>