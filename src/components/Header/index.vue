<template>
   <header>
       {{height}}
   </header>
</template>

<script>
import {getWindowHeight} from '@/utils/dom'
export default {
    data(){
        return{

        }
    },
    computed:{
        height(){
             getWindowHeight() 
        }
    },
    methods:{
       
    },
    mounted(){
        console.log(getWindowHeight)
    }
}
</script>

<style>

</style>
