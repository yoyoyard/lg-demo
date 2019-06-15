<template>
  <div>
    <div v-for="item in list" :key="item.path" v-if="!item.hidden" style="margin:5px;">
      <router-link :to="item.path" >{{item.meta.title}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: this.$router.options.routes
    };
  },
  created() {
    console.log(this.list);
  }
};
</script>

