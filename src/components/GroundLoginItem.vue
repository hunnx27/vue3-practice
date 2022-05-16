<template>
  <div class="ground-item">
    <HeaderItem/>
    <LoginItem/>
    <FooterItem/>
  </div>
</template>
<script>
import HeaderItem from "./HeaderItem.vue"
import FooterItem from "./FooterItem.vue"
import LoginItem from "./LoginItem.vue"

export default {
  components:{
    HeaderItem, FooterItem, LoginItem
  }
}
</script>

