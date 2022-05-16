<template>
  <div class="ground-item">
    <HeaderItem/>
    <StoreSampleItem/>
    <FooterItem/>
  </div>
</template>
<script>
import HeaderItem from "./HeaderItem.vue"
import FooterItem from "./FooterItem.vue"
import StoreSampleItem from "./StoreSampleItem.vue"

export default {
  components:{
    HeaderItem, FooterItem, StoreSampleItem
  }
}
</script>

