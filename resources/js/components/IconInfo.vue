<template>
    <div class="relative inline-block group">
      <!-- Icon -->
      <i class="fa-solid fa-inbox text-lg group-hover:scale-150 cursor-pointer" :class="iconColor"></i>
      
      <!-- Popup -->
      <div class="absolute flex-col items-start w-[370px] hidden group-hover:flex -top-40 left-[50%] translate-x-[-50%] z-50 px-6 py-3 bg-white shadow-md p-2 rounded-3xl">
        <div class="rounded-2xl px-4 py-1 text-white" :class="bgColor">
          <i class="fa-solid text-lg fa-inbox"></i>
          <span class="text-sm ml-2">Vivateck</span>
        </div>
        <div class="mt-4">
          <p class="text-lg text-[#25213E]">Hello <span class=" font-semibold">{{ Name }}</span> it's was pleasure to meet you at Vivatech.</p>
        </div>
      </div>
    </div>
</template>
  
<script>
import { computePosition } from '@floating-ui/vue';
import { onMounted, ref } from 'vue';


export default {
  props: {
    iconColor: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      required: true
    },
    iconText: {
      type: String,
      required: true
    },
    Name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isHovered: true
    };
  }
};


</script>
  
  