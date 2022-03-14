<template>
  <div id="app">
    <TableList
      :formModel="formModel"
      :formItem="formItem"
      :tableData="tableData"
      :tableColumn="tableColumn"
      :page="page"
      @onSearch="search"
      @currentChange="currentChange"
    >
      <div slot="searchForm">
        <el-row>
          <el-col>
            <input placeholder="请输入" v-model="formModel.city" />
          </el-col>
        </el-row>
      </div>
      <div slot="searchBtn">123</div>
      <div slot="tableColumn">
        <el-table-column
          prop="status"
          label="状态" />
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </div>
    </TableList>
  </div>
</template>

<script>
// import TableList from './packages/tableList/tableList.vue'
export default {
  name: 'App',
  data () {
    return {
      formModel: {
        city: '',
        county: '',
        grid: '',
        taskName: ''
      },
      formItem: [
        {
          label: '地市',
          col: 6,
          model: 'city',
          type: 'select',
          width: '280px',
          size: 'small',
          optionList: [
            {
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            },
          ]
        },
        {
          label: '区县',
          col: 6,
          model: 'county',
          type: 'select',
          width: '280px',
          size: 'small',
          optionList: [
            {
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }
          ]
        },
        {
          label: '网格',
          col: 6,
          model: 'grid',
          type: 'select',
          width: '280px',
          size: 'small',
          optionList: [
            {
              value: 'ningbo',
              label: '宁波'
            }, {
              value: 'hanghou',
              label: '杭州'
            }
          ]
        },
        {
          label: '任务名',
          col: 6,
          model: 'taskName',
          type: 'input',
          width: '280px',
          size: 'small',
        },
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: '优化'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: '优化'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: '优化'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: '优化'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: '优化'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: '优化'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: '优化'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: '优化'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: '优化'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: '优化'
        },
      ],
      tableColumn: [
        {
          prop: 'date',
          label: '日期',
          width: '',
          isFixed: false,
          fixedPos: '',
          showTooltip: false
        },
        {
          prop: 'name',
          label: '姓名',
          width: '',
          isFixed: false,
          fixedPos: '',
          showTooltip: false
        },
        {
          prop: 'address',
          label: '地址',
          width: '',
          isFixed: false,
          fixedPos: '',
          showTooltip: false
        }
      ],
      page: {
        background: true,
        hideOnSinglePage: false,
        total: 50,
        pageIndex: 2,
        pageSize: 20,
        layout: 'prev, pager, next'
      }
    }
  },
  // components: {
  //   TableList
  // },
  methods: {
    search () {
      console.log(this.formModel)
    },
    currentChange () {
      this.search()
    },
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>

<style>

</style>
