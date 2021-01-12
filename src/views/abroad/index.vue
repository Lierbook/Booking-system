<template>
  <div>
    商品列表
  </div>
</template>
<script>
import { getAbroadList } from "@/api/abroad"
export default {
  data() {
    return {
      list:[]
    };
  },
  created() {
    this.getAbList();
  },
  methods: {
    async getAbList(){
      let result=await getAbroadList();
      console.log(result);
    }
  },
}
</script>