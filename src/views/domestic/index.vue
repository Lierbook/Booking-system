<template>
  <div>
    国内航班
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