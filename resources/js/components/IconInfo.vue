<template>
    <div class="relative inline-block group">
      <!-- Icon -->
      <span>

        <i class="fa-solid fa-inbox text-lg group-hover:scale-150 cursor-pointer" :class="iconColor"></i>
      </span>
      
      <!-- Tooltip -->
      <div class="bg-white hidden border bg-transparent absolute w-[300px] group-hover:block top-[-175px] left-[50%] translate-x-[-22%] z-50 px-6 py-5 shadow-lg p-2 rounded-3xl">
        <div class="relative tooltip flex py-1 flex-col items-start w-full">
            <div class="rounded-2xl px-4 z-40 py-1 text-white" :class="bgColor">
              <i class="fa-solid text-lg fa-inbox"></i>
              <span class="text-sm ml-2">{{ Name || "Vivatech" }}</span>
            </div>
            <div class="mt-4 z-40">
              <p class="text-[16px] text-[#25213E]">
                Hello <span class=" font-semibold">{FirstName} </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it's was <br/> pleasure to meet you at Vivatech.</p>
            </div>
            <div class="w-full h-full absolute top-[20px] left-0 z-30 bg-white"></div>
            <div class="arrow-tooltip z-10 border shadow-lg"></div>
        </div>
      </div>

      <!-- <img src="img/tooltip.png" class="absolute hidden group-hover:block bottom-0 left-0 w-[700px] h-[100px]" alt=""> -->
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

<style>
.bg-tooltip{
  background-image: url('img/image.png');
  background-position: center;
}

/* .tooltip::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 24.5%;
  transform: translateX(-82%) translateY(50%) rotate(-37deg);
  width: 50px;
  height: 50%;
  background-color: white;
  border-radius: 6px;
} */

.arrow-tooltip{
  position: absolute;
  bottom: 0;
  left: 24.5%;
  transform: translateX(-85%) translateY(60%) rotate(-40deg);
  width: 47px;
  height: 47%;
  background-color: white;
  border-radius: 8px;
}
</style>
  
  