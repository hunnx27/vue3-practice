<template>
  <div class="ground-item">
    <HeaderItem/>
    <MemoItem/>
    <FooterItem/>
  </div>
</template>
<script>
import HeaderItem from "./HeaderItem.vue"
import FooterItem from "./FooterItem.vue"
import MemoItem from "./MemoItem.vue"

export default {
  components:{
    HeaderItem, FooterItem, MemoItem
  }
}
</script>

