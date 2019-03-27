<template>
    <div class="friend row">
        <section class="friend-container">
            <ul class="friend-list">
                <li  v-for="(friend, index) in friendList" :key="index">
                    <div class="friend-content" :class="[`random-bg${index}`]">
                        <img v-lazy="friend.avatar" alt="" class="friend-avatar">
                    </div>
                </li>
            </ul>
        </section>
        <!-- <Loading v-else/> -->
    </div>
</template>

<script>
import store from '@/store'
import Loading from '@/components/Loading'
export default {
    name:'Friend',
    data(){
        return {
            friendList: []
        }
    },
    components:{
        Loading
    },
   async created(){
        this.friendList = await store.dispatch("queryType", {type: 'Friend'})
        console.log(this.friendList)
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
.friend{
    &-list{
        display: flex;
        flex-wrap: wrap;
        li{
            display: flex;
            align-items: center;
            flex: .33;
            padding: 10px 20px;
        }
    }
    &-avatar{
        border-radius: 50%;
    }
}
</style>

