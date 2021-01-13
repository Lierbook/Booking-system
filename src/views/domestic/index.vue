<template>
  <div class="search">
    <el-input
      v-model="input1"
      clearable
      placeholder="请输入出发地"
      prefix-icon="el-icon-location-outline"
      class="departure"
    ></el-input>
    <el-input
      v-model="input2"
      clearable
      placeholder="请输入目的地"
      prefix-icon="el-icon-location-outline"
      class="destination"
    ></el-input>
    <el-date-picker v-model="value1" type="date" placeholder="请选择出发时间">
    </el-date-picker>
    <el-button type="primary">立即查询</el-button>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="title" label="航班信息" width="160">
      </el-table-column>
      <el-table-column prop="Departure_time" label="起飞时间/出发地" width="140">
      </el-table-column>
      <el-table-column prop="arrival_time" label="到达时间/目的地" width="140">
      </el-table-column>
      <el-table-column prop="Punctuality_rate" label="到达准点率" width="140">
      </el-table-column>
      <el-table-column prop="sell_price" label="价格" width="100">
      </el-table-column>
      <el-table-column label="" width="80">
        <template slot-scope="scope">
          <el-button
            type="danger"
            round
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            >订票</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getAbroadList } from "@/api/abroad";
export default {
  data() {
    return {
      input1: "",
      input2: "",
      value1: "",
      list: [],
    };
  },
  created() {
    this.getAbList();
  },
  methods: {
    async getAbList() {
      let result = await getAbroadList();
      console.log(result);
        this.list = result.data.items;
      // console.log(this.list,00000000000000);
    },

    handleEdit(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style scoped>
.search {
  width: 800px;
  height: 700px;
  margin: 100px auto;
}
.departure,
.destination {
  width: 220px;
  height: 40px;
  border-radius: 6px;
  font-size: 14px;
}
.cell {
  color: red;
}
</style>
