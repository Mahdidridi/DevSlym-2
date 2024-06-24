<template>
    <div v-if="iscompleted && isDone" class="w-full z-40 h-screen overflow-hidden fixed bg-black/60"></div>
    
    <div v-if="iscompleted && isDone" class="fixed top-0 z-50 left-0 flex items-center justify-center w-full h-screen">
    

        <div class="bg-bg_gray mt-10 tems-center flex flex-col gap-y-4 justify-center items-center rounded-3xl p-6 w-[470px]">

            <div class="bg-gradient-to-r from-light_blue to-dark_blue text-transparent flex items-center justify-center w-[70px] h-[70px] rounded-full">
                <i class="fa-solid fa-check text-white text-4xl"></i>
            </div>
            <div>
                <h2 class="font-semibold text-xl text-center">Congratulations You’ve completed</h2>
                <h2 class="text-lg font-semibold text-center bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">DM Tour guide</h2>
            </div>
            <div class="flex gap-x-10 items-center justify-between">
                <h3 class="text-semibold font-semibold text-bg_dark_gray">Total XP earned</h3>
                <div>
                    <h2 class="text-xs font-semibold text-center bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">
                        <component is="CheckIcon" class="" aria-hidden="true" /><i class="fa-solid fa-check"></i> 600 <span class="text-xs">XP</span>
                    </h2>
                </div>
            </div>
            <button @click="handleDone" class="z-50 font-medium w-full text-sm bg-gradient-to-r from-light_blue to-dark_blue py-4 rounded-xl text-center text-white">Done</button>

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