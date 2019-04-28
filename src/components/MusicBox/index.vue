<template>
  <div class="aplayer-wrapper tl">
    <APlayer :audio="$config.musicList" mini fixed @onListShow="handleShow" @onListHide="handleHide"/>
  </div>
</template>

<script>
export default {
  name: "MusicBox",
  data() {
    return {}
  },
  methods:{
     handleShow(){
       console.log("展开")
     },
     handleHide(){
       console.log(1)
     }
  },
  mounted() {}
}
</script>


