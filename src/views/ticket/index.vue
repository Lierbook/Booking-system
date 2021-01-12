<template>
  <div>
    <el-table :data="list" border style="width: 100%" align="center">
      <el-table-column prop="id" fixed label="id"> </el-table-column>
      <el-table-column prop="img_url" label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.img_url" width="40" height="40" />
        </template>
      </el-table-column>
      <el-table-column prop="Departure_time" label="起飞时间">
      </el-table-column>
      <el-table-column prop="Punctuality_rate" label="正点率"></el-table-column>
      <el-table-column prop="arrival_time" label="到达时间"> </el-table-column>
      <el-table-column prop="destination" label="目的地"></el-table-column>
      <el-table-column prop="sell_price" label="出售价"></el-table-column>
      <el-table-column prop="starting_point" label="起始点"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <Pagination></Pagination>
  </div>
</template>
<script>
import { getAbroadList, getAbroadDelete } from "@/api/abroad";
import Pagination from "@/components/Pagination";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getAbList();
  },
  methods: {
    async getAbList() {
      let result = await getAbroadList();

      this.list = result.data.items;
      console.log(this.list);
    },
    // handleEdit(index, row) {
    //   console.log(index, row);
    // },
    handleDelete(index, row) {
      const result = getAbroadDelete({ id: row.id });
      // console.log(result);
      this.getAbList();
    }
  },
  components: {
    Pagination
  }
};
</script>
