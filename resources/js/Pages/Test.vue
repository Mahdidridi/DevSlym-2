<template>
    <div class="flex min-h-full flex-col bg-img">

        <aside v-if="isSidebarVisible" class="w-full md:hidden block min-h-screen fixed top-0 z-50 left-0">
          <!-- <div class="border h-screen w-full bg-white px-6">
                <div class="flex items-center justify-between py-4">
                    <h3 class=" font-medium">DM Setting</h3>
                    <div class="border w-[50px] h-[50px] cursor-pointer flex items-center justify-center rounded-xl">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>

                <div class="bg-white">
                    <ul role="list" class="-mx-2 space-y-1 mt-4">
                        <li v-for="guide in guides" :key="guide.name">
                            <a :href="guide.href" @click="hideSidebar" :class="[guide.current ? 'bg-light_blue_color' : 'bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6']">
                                <component :is="guide.icon" :class="[guide.current ? 'text-gradient' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                                <span class="text-gradient">{{ guide.name }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div class="mt-4">
                    <div class="text-[10px] font-semibold uppercase leading-6 text-gray-400">Manage inbox</div>
                    <ul role="list" class="-mx-2 space-y-1 mt-4">
                        <li v-for="item in navigation" :key="item.name">
                            <a :href="item.href" class='hover:bg-light_blue_color list group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'>
                                <component 
                                    :is="item.icon" 
                                    :class="[item.current ? 'bg-gradient-to-r from-light_blue to-dark_blue' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']" 
                                    aria-hidden="true" 
                                    />
                                <span class="background-color-hover">{{ item.name }}</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="mt-4 pb-4">
                    <div class="text-[10px] font-semibold leading-6 text-gray-400">ADVANCED MESSAGES</div>
                    <ul role="list" class="-mx-2 space-y-1 mt-4 opacity-50">
                        <li v-for="message in messages" :key="message.name">
                            <a :href="message.href" class='text-gray-700 flex list justify-between items-center gap-x-3 rounded-md p-2 text-sm font-medium leading-6'>
                                <span class="flex items-center gap-x-2">
                                    <component :is="message.icon" class="text-gray-400 h-6 w-6 shrink-0" aria-hidden="true" />
                                    <span >{{ message.name }}</span>
                                </span>
                                <span class="text-xs">
                                    {{ message.description }}
                                </span>
                                
                            </a>
                        </li>
                    </ul>
                </div>

          </div> -->

                <div class="border h-screen w-full bg-white px-6">

                    <div class="flex w-full items-center justify-between py-4">
                        <h3 class="text-[14px] font-bold text-[#514F5F] ml-4">DM Setting</h3>
                        <div @click="hideSidebar" class="border w-[48px] cursor-pointer h-[48px] flex items-center justify-center rounded-xl">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>

                    <div class="bg-white">
                        <ul role="list" class="space-y-1 mt-4">
                            <li v-for="guide in guides" :key="guide.name">
                                <a :href="guide.href" @click="hideSidebar" :class="[guide.current ? 'bg-light_blue_color' : 'bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent', 'group flex items-center justify-between gap-x-3 cursor-pointer rounded-xl px-4 py-3 text-sm font-semibold leading-6']">
                                    <!-- <component :is="guide.icon" :class="[guide.current ? 'text-gradient text-dark_blue' : 'text-[#7E7D84] group-hover:text-dark_blue', 'h-6 w-6 shrink-0']" aria-hidden="true" /> -->
                                    <span class="flex items-center gap-x-2">
                                        <img class="w-[23.8px]" src="img/stars.png" alt="">
                                        <span class="text-gradient">{{ guide.name }}</span>
                                    </span>
                                    <span>
                                        <div class="bg-white relative shadow-sm rounded-full flex items-center justify-center w-[24px] h-[24px]">
                                            <div class="bg-white rounded-full w-[20px] h-[20px] border-[3px] border-[#F3F6F7] flex items-center justify-center" style="--progress: 0.5;">
                                                <span class="text-[6px] text-[#B6BABF]"><span class="text-[10px] text-[#2C7CDB]">4</span>/8</span>
                                            </div>
                                            <img class="h-[20px] top-[1px] left-[2px] absolute" src="img/progress.png" alt="">
                                        </div>
                                        <!-- <div class="w-[10px] h-[20px] border-l-[3px] rounded-l-full border-[]"></div> -->
                                        
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-4 px-2">
                        <div class="text-[10px] font-[600] uppercase leading-6 text-gray-400 tracking-wider">Manage inbox</div>
                        <ul role="list" class="-mx-2 space-y-1 mt-4">
                            <li>
                                <a class='hover:bg-light_blue_color cursor-pointer list group flex gap-x-3 rounded-xl items-center p-2 text-sm font-semibold leading-6'>
                                    <i class="fa-solid fa-inbox text-xl icon-background-color-hover text-bg_dark_gray"></i>
                                    <span class="background-color-hover text-[14px]">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a class='hover:bg-light_blue_color cursor-pointer list group flex gap-x-3 rounded-xl items-center p-2 text-sm font-semibold leading-6'>
                                    <i class="fa-solid fa-comment-dots icon-background-color-hover text-xl text-bg_dark_gray"></i>
                                    <span class="background-color-hover text-[14px]">Discussion Rules</span>
                                </a>
                            </li>
                            <li>
                                <a class='hover:bg-light_blue_color cursor-pointer list group flex gap-x-3 rounded-xl items-center p-2 text-sm font-semibold leading-6'>
                                    <i class="fa-solid fa-address-book icon-background-color-hover text-xl text-bg_dark_gray"></i>
                                    <span class="background-color-hover text-[14px]">Adress Book</span>
                                </a>
                            </li>
                            <li>
                                <a class='hover:bg-light_blue_color cursor-pointer list group flex gap-x-3 rounded-xl items-center p-2 text-sm font-semibold leading-6'>
                                    <i class="fa-solid fa-bahai icon-background-color-hover text-xl text-bg_dark_gray"></i>
                                    <span class="background-color-hover text-[14px]">Zapier</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-4 pb-4 px-2">
                        <div class="text-[10px] font-semibold leading-6 text-gray-400 tracking-wider">ADVANCED MESSAGES</div>
                        <ul role="list" class="-mx-2 space-y-1 mt-4 opacity-50">
                            <li v-for="message in messages" :key="message.name">
                                <a :href="message.href" class='text-[#25213E] flex list justify-between items-center gap-x-3 rounded-md p-2 text-sm font-bold leading-6'>
                                    <span class="flex items-center gap-x-3">
                                        <!-- <component :is="message.icon" class="text-gray-400 h-6 w-6 shrink-0" aria-hidden="true" /> -->
                                        <img class="w-[25px]" :src="message.iconSrc" alt="">
                                        <span >{{message.name}}</span><sup>{{ message.sym }}</sup>
                                    </span>
                                    <span class="text-[10px] font-semibold">
                                        {{ message.description }}
                                    </span>
                                    
                                </a>
                            </li>
                        </ul>
                    </div>

            </div>
        </aside>

      <header class="shrink-0 border-gray-200">
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-4 lg:px-4">
            <div class="flex items-center ml-4 gap-x-4 ">
                <div @click="showSidebar" class="bg-[#175265] cursor-pointer bg-opacity-5 w-[40px] h-[40px] flex items-center justify-center rounded-xl">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <h3 class="text-[15px] text-[#1C192B] font-[600]">Messages</h3>
            </div>
          <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> -->
          <div class="flex items-center gap-x-8">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your profile</span>
              <img class="h-8 w-8 rounded-full bg-gray-800 object-cover" src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </a>
          </div>
        </div>
      </header>
  
      <div class="mx-auto flex w-full max-w-7xl items-start gap-x-4 px-4 py-2 sm:px-6 lg:px-4">
        <aside class="sticky top-8 hidden w-80 shrink-0 lg:block">
          <div class="border w-full bg-white rounded-r-lg rounded-l-2xl px-4">

                <div class="flex w-full items-center justify-between py-4">
                    <h3 class="text-[14px] font-bold text-[#514F5F] ml-4">DM Setting</h3>
                    <div class="border w-[48px] cursor-pointer h-[48px] flex items-center justify-center rounded-xl">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>

                <div class="bg-white">
                    <ul role="list" class="space-y-1 mt-4">
                        <li v-for="guide in guides" :key="guide.name">
                            <a :href="guide.href" :class="[guide.current ? 'bg-light_blue_color' : 'bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent', 'group flex items-center justify-between gap-x-3 cursor-pointer rounded-xl px-4 py-3 text-sm font-semibold leading-6']">
                                <!-- <component :is="guide.icon" :class="[guide.current ? 'text-gradient text-dark_blue' : 'text-[#7E7D84] group-hover:text-dark_blue', 'h-6 w-6 shrink-0']" aria-hidden="true" /> -->
                                <span class="flex items-center gap-x-2">
                                    <img class="w-[23.8px]" src="img/stars.png" alt="">
                                    <span class="text-gradient">{{ guide.name }}</span>
                                </span>
                                <span>
                                    <div class="bg-white relative shadow-sm rounded-full flex items-center justify-center w-[24px] h-[24px]">
                                        <div class="bg-white rounded-full w-[20px] h-[20px] border-[3px] border-[#F3F6F7] flex items-center justify-center" style="--progress: 0.5;">
                                            <span class="text-[6px] text-[#B6BABF]"><span class="text-[10px] text-[#2C7CDB]">4</span>/8</span>
                                        </div>
                                        <img class="h-[20px] top-[1px] left-[2px] absolute" src="img/progress.png" alt="">
                                    </div>
                                    <!-- <div class="w-[10px] h-[20px] border-l-[3px] rounded-l-full border-[]"></div> -->
                                    
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div class="mt-4 px-2">
                    <div class="text-[10px] font-[600] uppercase leading-6 text-gray-400 tracking-wider">Manage inbox</div>
                    <ul role="list" class="-mx-2 space-y-1 mt-4">
                        <li>
                            <a class='hover:bg-light_blue_color cursor-pointer list group flex gap-x-3 rounded-xl items-center p-2 text-sm font-semibold leading-6'>
                                <i class="fa-solid fa-inbox text-xl icon-background-color-hover text-bg_dark_gray"></i>
                                <span class="background-color-hover text-[14px]">Inbox</span>
                            </a>
                        </li>
                        <li>
                            <a class='hover:bg-light_blue_color cursor-pointer list group flex gap-x-3 rounded-xl items-center p-2 text-sm font-semibold leading-6'>
                                <i class="fa-solid fa-comment-dots icon-background-color-hover text-xl text-bg_dark_gray"></i>
                                <span class="background-color-hover text-[14px]">Discussion Rules</span>
                            </a>
                        </li>
                        <li>
                            <a class='hover:bg-light_blue_color cursor-pointer list group flex gap-x-3 rounded-xl items-center p-2 text-sm font-semibold leading-6'>
                                <i class="fa-solid fa-address-book icon-background-color-hover text-xl text-bg_dark_gray"></i>
                                <span class="background-color-hover text-[14px]">Adress Book</span>
                            </a>
                        </li>
                        <li>
                            <a class='hover:bg-light_blue_color cursor-pointer list group flex gap-x-3 rounded-xl items-center p-2 text-sm font-semibold leading-6'>
                                <i class="fa-solid fa-bahai icon-background-color-hover text-xl text-bg_dark_gray"></i>
                                <span class="background-color-hover text-[14px]">Zapier</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="mt-4 pb-4 px-2">
                    <div class="text-[10px] font-semibold leading-6 text-gray-400 tracking-wider">ADVANCED MESSAGES</div>
                    <ul role="list" class="-mx-2 space-y-1 mt-4 opacity-50">
                        <li v-for="message in messages" :key="message.name">
                            <a :href="message.href" class='text-[#25213E] flex list justify-between items-center gap-x-3 rounded-md p-2 text-sm font-bold leading-6'>
                                <span class="flex items-center gap-x-3">
                                    <!-- <component :is="message.icon" class="text-gray-400 h-6 w-6 shrink-0" aria-hidden="true" /> -->
                                    <img class="w-[25px]" :src="message.iconSrc" alt="">
                                    <span >{{message.name}}<sup>{{ message.sym }}</sup></span>
                                </span>
                                <span class="text-[10px] font-semibold">
                                    {{ message.description }}
                                </span>
                                
                            </a>
                        </li>
                    </ul>
                </div>

          </div>
        </aside>

        
  
        <!-- Content -->
        <main class="flex-1 py-10 w-full background-color rounded-l-lg rounded-r-2xl flex flex-col items-center justify-center">
            <div class="px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                <div class="w-full sm:w-[480px] max-w-[480px]">
                    <div class="grid mb-2 grid-cols-2 items-center gap-x-6">


                        <div @click="movetoLeft" class="h-full flex items-center cursor-pointer">
                            <img src="img/stars.png" class="w-[25px]" alt="">
                            <h1 class="bg-gradient-to-r font-bold ml-2 text-xl from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">Get Started</h1>
                        </div>


                        <div @click="movetoRight" class="h-full flex items-center justify-end gap-x-5 cursor-pointer">

                            <div class="w-[50px] h-full relative sm:block hidden ">
                                <img class="absolute z-40 top-0 right-0" src="img/diamond.png" alt="">
                                <img src="img/loading.png" class="w-[14px] left-1 absolute bottom-0" alt="">
                            </div>

                            <div class="relative">
                                <img class="absolute right-0 top-0 translate-x-3 -translate-y-2 w-[15px]" src="img/loading.png" alt="">
                                <h1 class="bg-gradient-to-r font-bold text-md from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">You earned 20 500</h1>
                                <h3 class="text-xs mt-1 font-semibold text-[#514F5F]">Total XP to earn : 12 000</h3>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white h-[15px] w-full rounded-full transition relative">
                        <div 
                        class='bg-gradient-to-r left-0 from-light_blue to-dark_blue mx-[10px] h-[7px] w-[45%] absolute top-[50%] translate-y-[-50%] rounded-full'></div>
                    </div>
                </div>

                <div class="p-6 rounded-2xl mt-4 bg-white w-full sm:w-[480px] max-w-[480px]">
                    <form action="">
                        <div class="bg-gradient-to-br from-[#F0F0FB] to-[#B1C5F900] ml-9 mt-5 px-6 py-4 rounded-3xl w-[280px] max-w-[280px]">
                            <div>
                                <label for="" class="text-xs font-semibold">Inbox Name</label>
                                <div class="mt-2">
                                    <input type="text" v-model="inboxName" class="block w-full outline-none rounded-md border-0 py-3 shadow-sm placeholder:text-gray-400 px-3 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="mt-1">
                                <label for="" class="text-xs font-semibold">Inbox Color</label>
                                <div class="flex mt-2 mb-4 items-center justify-between">
                                    <IconInfo :Name="inboxName" bgColor="bg-pink_color" iconColor="text-pink_color" iconText="Pink Icon Info" />
                                    <IconInfo :Name="inboxName" bgColor="bg-purple_color" iconColor="text-purple_color" iconText="Purple Icon Info" />
                                    <IconInfo :Name="inboxName" bgColor="bg-blue_color" iconColor="text-blue_color" iconText="Blue Icon Info" />
                                    <IconInfo :Name="inboxName" bgColor="bg-light_blue_icon" iconColor="text-light_blue_icon" iconText="Light Blue Icon Info" />
                                    <IconInfo :Name="inboxName" bgColor="bg-red_color" iconColor="text-red_color" iconText="Red Icon Info" />
                                    <IconInfo :Name="inboxName" bgColor="bg-yyelow_color" iconColor="text-yyelow_color" iconText="Yellow Icon Info" />
                                    <IconInfo :Name="inboxName" bgColor="bg-grey_color" iconColor="text-grey_color" iconText="Grey Icon Info" />
                                </div>
                            </div>
                            
                            
                        </div>   
                    </form>

                    <div class="mt-4">
                            <div class="flex items-center justify-between">
                                <label for="inbox" class="flex items-center gap-x-4">
                                    <input 
                                        type="checkbox" 
                                        class="checkbox"
                                        v-model="task1.completed"
                                        id="inbox"
                                    />
                                    <span :class="[task1.completed ? 'text-[#514F5F] line-through' : 'text-[#1C192B]','font-bold']">Create more inbox</span>
                                </label>
                                <h2 class="text-md font-semibold text-center bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">
                                    <component is="CheckIcon" class="" aria-hidden="true" /><i class="fa-solid fa-check"></i> <span class="text-[16px]">500</span> <span class="text-xs">XP</span>
                                </h2>
                            </div>
                            
                            <p class="text-[#8C8D90] text-[12px] pl-9 pt-2">Create more inbox, welcome your new contact by a message.</p>
                    </div>
                </div>

                <div class="p-6 bg-white mt-4 rounded-2xl w-full sm:w-[480px] max-w-[480px]">

                    <div class="bg-gray-100 flex items-center justify-center px-5 py-3 h-[230px] rounded-2xl bg-cover bg-center bg-video">
                        <div class="backdrop-blur-sm cursor-pointer bg-white/30 shadow-md flex items-center justify-center rounded-full w-[90px] h-[90px]">
                            <i class="fa-solid fa-play text-white text-4xl"></i>
                        </div>
                    </div>   

                    <div class="mt-4">
                            <div class="flex items-center justify-between">
                                <label for="message" class="flex items-center gap-x-4">
                                    <input 
                                        type="checkbox" 
                                        class="checkbox"
                                        v-model="task2.completed"
                                        id="message"
                                    />
                                    <span class="font-bold flex items-start text-opacity-80">
                                        <span :class="[task2.completed ? 'text-[#514F5F] line-through' : 'text-[#1C192B]']">Manage your messaging rules</span> 
                                        <i :class="[task2.completed ? 'text-[#514F5F]' : 'text-[#1C192B]','fa-solid mt-1 fa-up-right-from-square text-xs ml-2']" ></i>
                                        <!-- <ExternalLinkIcon class="text-dark_blue"/> -->
                                    </span>
                                </label>
                                <h2 class="text-md font-semibold text-center bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">
                                    <component is="CheckIcon" class="" aria-hidden="true" />+ 100 <span class="text-xs">XP</span>
                                </h2>
                            </div>
                            
                            <p class="text-[#8C8D90] text-[12px] pl-9 pt-2">Create more inbox, welcome your new contact by a message.</p>
                    </div>
                </div>
            </div>
        </main>
  
       
      </div>

      <Earned @handleYess="handleYess" :iscompleted="task1.completed" :done="CardDone" :Yes="CardYess"/>
      <Completed @handleDone="handleDone" :done="CardDone"/>
    </div>


  </template>
  
<script setup>
  import { ref } from 'vue'
  import Earned from './Earned.vue'
  import Completed from './Completed.vue'

  import IconInfo from '../components/IconInfo.vue';

const isSidebarVisible = ref(true);

const CardDone = ref(false);

const CardYess = ref(false);

const hideSidebar = () => {
  isSidebarVisible.value = false;
};

const showSidebar = () =>{
    isSidebarVisible.value = true;
}

const handleYess = (val)=> {
    CardYess.value = val;
    CardDone.value = true;
}

const handleDone = (val) =>{
    CardDone.value = val;
}

const inboxName = ref('Vivateck');

  
import {
    FolderIcon,
    HomeIcon,
    UsersIcon,
  } from '@heroicons/vue/24/outline'
  
import { ChevronDownIcon , InboxIcon,CalendarIcon, SunIcon ,SparklesIcon,ChatBubbleLeftIcon , MagnifyingGlassIcon,CheckIcon } from '@heroicons/vue/20/solid'
  
// import { ChatIcon } from "@vue-hero-icons/solid"
  // import { InboxIcon } from "@vue-hero-icons/outline"

//   import { LightningBoltIcon } from "@vue-hero-icons/solid"
  
  const navigation = ref([
    { name: 'inbox', href: '#', icon: InboxIcon, current: false },
    { name: 'Discussion Rules', href: '#', icon: ChatBubbleLeftIcon , current: false },
    { name: 'Address Book', href: '#', icon: CalendarIcon, current: false },
    { name: 'Zapier', href: '#', icon: SunIcon, current: false },
  ])
  
  const guides = ref([
    { name: 'DM Your Guide', href: '#', icon: SparklesIcon, current: true },
  ])
  
  const messages = ref([
    { name: "Boost DM", sym : "®", description: 'Coming soon..', href: '#', icon: SparklesIcon,iconSrc : 'img/boost.png', current: false },
    { name: "Blurred DM", sym : "®", description: 'Coming soon..', href: '#', icon: SparklesIcon,iconSrc : 'img/blurred.png' ,current: false },
  ])


import { reactive } from 'vue'

const task1 = reactive({
  completed: false,
})

const task2 = reactive({
  completed: false,
})


</script>

<style scoped>




.bg-img{
    background-image: url('img/bg-img.png');
    background-position: center;
    background-size: cover;
}

.bg-video{
    background-image: url('img/phone.png');
    background-position: center;
    background-size: cover;
}

.text-gradient{
      background: linear-gradient(to right, #40BEBE, #2361E6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
}

.background-color{
    box-shadow: 0px 0px 16px 0px #00000008;
    background: #FFFFFF80;
}

.list:hover .background-color-hover{
    background: linear-gradient(to right, #40BEBE, #2361E6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
}

.list:hover .icon-background-color-hover{
    background: linear-gradient(to right, #40BEBE,#2361E6, #2361E6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
}

.checkbox{
   -webkit-appearance: none;
   position: relative;
   width: 20px;
   height: 20px;
   border-radius: 100%;
   border: 1px solid #2361E6;
   cursor: pointer;
}

.checkbox:checked{
    background: linear-gradient(45deg, #40BEBE, #2361E6);
}

.checkbox::before{
    content: '✔';
    position:  absolute;
    top: 50%;
    left: 70%;
    color: white;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    font-size: 14px;
    pointer-events: none;
    background-size: contain;
    background-repeat: no-repeat;
    /* background: url('/img/check.png'); */
}

.animation-bar{
    transition: all 0.9s ease-in-out;
}

</style>