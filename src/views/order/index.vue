<template>
  <div class="dashboard-container">
    <!-- <el-button type="primary" @click="getProductList">点我获取数据</el-button> -->
    <div class="table">
      <el-table :data="productlist" border style="width: 100%">
        <el-table-column fixed prop="Departure_time" label="日期" width="150" />11111111111111
        <el-table-column prop="arrival_time" label="到达时间" width="120" />
        <el-table-column prop="starting_point" label="出发地" width="120" />
        <el-table-column prop="destination" label="目的地" width="120" />
        <el-table-column prop="Punctuality_rate" label="准点率" width="120" />
        <el-table-column prop="title" label="飞机类型" width="300" />
        <el-table-column prop="sell_price" label="价格" width="120" />
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="handleClick(scope.row)"
            >查看详情</el-button>
            <el-button type="danger" size="small" style="color:#ffff">立刻下单</el-button>
          </template>
        </el-table-column>
        
      </el-table>
       <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getProductList"
    />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination' 
import { mapGetters } from 'vuex'
import { getProductList } from '@/api/product'

export default {
  name: 'Dashboard',
    components: { Pagination },
  data() {
   return{
     productlist:[],
      list: null,
      listLoading: true,
      // 分页总数据个数
      total: 0,
     listQuery: {
        page: 1,
        limit: 5
      }
  }
  },

  // computed: {
  //   ...mapGetters(['name'])
  // },
  created() {
    this.getProductList()
  },
  methods: {
    // getProductList() {
    //   getProductList().then((response) => {
        
    //     this.productlist = response.data.items
    //     this.total = response.data.total;
    //     console.log( this.productlist)
    //   })
    // }
      async getProductList() {
      this.listLoading = true;
      const result = await getProductList(this.listQuery);
      this.productlist = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
    },
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
