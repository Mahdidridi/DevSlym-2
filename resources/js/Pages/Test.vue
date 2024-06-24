<template>
    <div class="flex min-h-full flex-col bg-img">

        <aside v-if="isSidebarVisible" class="w-full md:hidden block min-h-screen fixed top-0 z-50 left-0">
          <div class="border h-screen w-full bg-white px-6">
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

          </div>
        </aside>

      <header class="shrink-0 border-gray-200">
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-4 lg:px-8">
            <div class="flex items-center gap-x-4">
                <div class="bg-[#175265] bg-opacity-5 w-[40px] h-[40px] flex items-center justify-center rounded-xl">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <h3 class="text-sm font-semibold">Messages</h3>
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
          <div class="border w-full bg-white rounded-lg px-6">
                <div class="flex items-center justify-between py-4">
                    <h3 class=" font-semibold">DM Setting</h3>
                    <div class="border w-[50px] cursor-pointer h-[50px] flex items-center justify-center rounded-xl">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>

                <div class="bg-white">
                    <ul role="list" class="-mx-2 space-y-1 mt-4">
                        <li v-for="guide in guides" :key="guide.name">
                            <a :href="guide.href" :class="[guide.current ? 'bg-light_blue_color' : 'bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6']">
                                <component :is="guide.icon" :class="[guide.current ? 'text-gradient text-dark_blue' : 'text-[#7E7D84] group-hover:text-dark_blue', 'h-6 w-6 shrink-0']" aria-hidden="true" />
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
                                    :class="[item.current ? 'bg-gradient-to-r from-light_blue to-dark_blue' : 'text-[#7E7D84] group-hover:text-dark_blue', 'h-6 w-6 shrink-0']" 
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

          </div>
        </aside>

        
  
        <!-- Content -->
        <main class="flex-1 py-10 w-full background-color rounded-md flex flex-col items-center justify-center">
            <div class="px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                <div class="w-full sm:w-[480px] max-w-[480px]">
                    <div class="grid mb-2 grid-cols-2 items-center gap-x-6">
                        <div class="h-full flex items-center cursor-pointer">
                            <!-- <span><i class="fa-solid fa-star text-xl mr-4 text-dark_blue"></i></span> -->
                            <!-- <component is="SparklesIcon" class="text-dark_blue h-6 w-6 shrink-0" aria-hidden="true" /> -->
                            <SparklesIcon class="text-dark_blue mr-2 h-6 w-6 shrink-0" />
                            <h1 class="bg-gradient-to-r font-bold text-xl from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">Get Started</h1>
                        </div>
                        <div class="h-full cursor-pointer">
                            <div>

                            </div>
                            <div>
                                <h1 class="bg-gradient-to-r font-bold text-md from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">You earned 20 500</h1>
                                <h3 class="text-xs mt-1 font-semibold text-[#514F5F]">Total XP to earn : 12 000</h3>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white h-[18px] w-full rounded-full relative">
                        <div class="bg-gradient-to-r from-light_blue to-dark_blue h-[10px] w-[50%] absolute left-0 top-[50%] translate-y-[-50%] rounded-full"></div>
                    </div>
                </div>

                <div class="p-6 rounded-2xl mt-4 bg-white w-full sm:w-[480px] max-w-[480px]">
                    <form action="">
                        <div class="bg-gray-100 m-4 px-5 py-3 rounded-2xl w-[280px] max-w-[280px]">
                            <div>
                                <label for="" class="text-xs font-semibold">Inbox Name</label>
                                <div class="mt-3">
                                    <input type="text" v-model="inboxName" class="block w-full outline-none rounded-md border-0 py-3 shadow-sm placeholder:text-gray-400 px-3 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="mt-2">
                                <label for="" class="text-xs font-semibold">Inbox Color</label>
                                <div class="flex mt-4 items-center justify-between">
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
                                <label for="inbox" :class="[task1.completed ? 'line-through' : '' , 'flex items-center gap-x-4']">
                                    <input 
                                        type="checkbox" 
                                        class="checkbox"
                                        v-model="task1.completed"
                                        id="inbox"
                                    />
                                    <span class="font-semibold text-gray-900 text-opacity-80">Create more inbox</span>
                                </label>
                                <h2 class="text-md font-semibold text-center bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">
                                    <component is="CheckIcon" class="" aria-hidden="true" /><i class="fa-solid fa-check"></i> 500 <span class="text-xs">XP</span>
                                </h2>
                            </div>
                            
                            <p class="text-gray-500 text-sm pl-9 pt-2">Create more inbox, welcome your new contact by a message.</p>
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
                                <label for="message" :class="[task2.completed ? 'line-through' : '' , 'flex items-center gap-x-4']">
                                    <input 
                                        type="checkbox" 
                                        class="checkbox"
                                        v-model="task2.completed"
                                        id="message"
                                    />
                                    <span class="font-semibold text-gray-900 text-opacity-80">
                                        Manage your messaging rules
                                        <!-- <ExternalLinkIcon class="text-dark_blue"/> -->
                                    </span>
                                </label>
                                <h2 class="text-md font-semibold text-center bg-gradient-to-r from-light_blue to-dark_blue text-transparent bg-clip-text text-fill-transparent">
                                    <component is="CheckIcon" class="" aria-hidden="true" />+ 100 <span class="text-xs">XP</span>
                                </h2>
                            </div>
                            
                            <p class="text-gray-500 text-sm pl-9 pt-2">Create more inbox, welcome your new contact by a message.</p>
                    </div>
                </div>
            </div>
        </main>
  
       
      </div>

      <!-- <Earned :iscompleted="task2.completed"/> -->
      <Completed :iscompleted="task1.completed"/>
    </div>


  </template>
  
<script setup>
  import { ref } from 'vue'
  import Earned from './Earned.vue'
  import Completed from './Completed.vue'

  import IconInfo from '../components/IconInfo.vue';

const isSidebarVisible = ref(true);

const hideSidebar = () => {
  isSidebarVisible.value = false;
};

const inboxName = ref('');

  
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
    { name: 'Boost DM', description: 'Coming soon..', href: '#', icon: SparklesIcon, current: false },
    { name: 'Blurred DM', description: 'Coming soon..', href: '#', icon: SparklesIcon, current: false },
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

</style>