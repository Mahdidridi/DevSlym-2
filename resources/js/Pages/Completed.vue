<template>
    <div v-if="done"  @click="handleDone" class="w-full z-50 h-screen overflow-hidden fixed bg-black/60"></div>
    
    <div v-if="done" class="fixed top-0 z-50 left-0 flex bg-transparent items-center justify-center w-full h-screen">
    

        <div class="bg-bg_gray mt-10 tems-center flex flex-col gap-y-4 justify-center items-center rounded-3xl p-6 w-[470px]">

            <div class="relative h-[150px] w-full flex items-center justify-center">
                <div class="bg-gradient-to-r from-light_blue to-dark_blue text-transparent h-[78px] flex items-center justify-center w-[78px] rounded-full">
                    <i class="fa-solid fa-check text-white text-5xl absolute"></i>
                </div>

                <img src="img/completed.png" class="w-[280px] left-[50%] translate-x-[-50%] absolute top-0" alt="">
            </div>
            <div>
                <h2 class="font-semibold text-[24px] text-[#1C192B] text-center">Congratulations You’ve completed</h2>
                <h2 class="text-[24px] font-semibold text-center bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">DM Tour guide</h2>
            </div>
            <div class="flex gap-x-10 items-center justify-between">

                <h3 class="text-bold text-[16px] text-bg_dark_gray">Total XP earned</h3>

                <div class="flex items-center gap-x-1 w-[100px]">
                    <h2 class="text-[11px] gap-x-1 font-semibold text-center bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">
                        <component is="CheckIcon" class="" aria-hidden="true" /><i class="fa-solid fa-check text-[8px]"></i> 600 <span class="text-[6px]">XP</span>
                    </h2>
                    <img src="img/diamond3.png" class="w-[30px]" alt="">
                </div>
                
            </div>
            <button @click="DoneCard" class="z-50 font-[700] shadow-md w-full text-sm bg-gradient-to-r from-light_blue to-dark_blue py-4 rounded-xl text-center text-white">Done</button>

        </div>
    
    </div>
    
    
    </template>
    
<script>

export default {
    emits: ['handleDone'], 
    props: {
        done: {
            type: Boolean,
            // required: true
        },
    },
    methods: {
        DoneCard(){
            this.$emit('handleDone',false);
        }
  }
}

</script>