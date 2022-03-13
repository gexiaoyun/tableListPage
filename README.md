## table-list-page

基于vue + element 封装的表格页面,内容包括:搜索, 表格显示, 分页, 减少重复写页面才封装的

## install

```
npm install table-list-page -s
```

## Quick Start
```
import Vue from 'vue'
import TableList from '../packages/index'
Vue.use(TableList)


<TableList
 :formModel="formModel"
 :formItem="formItem"
 :tableData="tableData"
 :tableColumn="tableColumn"
 :page="page"
 @onSearch="search"
 @currentChange="currentChange"
>

<!-- search slot -->
<div slot="searchForm">
        <el-row>
          <el-col>
            <input placeholder="请输入" v-model="formModel.city" />
          </el-col>
        </el-row>
      </div>
	  
<!-- table column slot  -->	  
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

```

## parameter

| 参数 | 说明 |类型 |
| --- -----------| -----------|----|
|    formModel     |    搜索绑定的model值     |  Object |
|    formItem     |    搜索表单组件内容, 默认支持input,select两种表单组件,可通过参数配置     |  Array |
|    tableData     |    表格显示内容     |  Array |
|    tableColumn     |    表格头部绑定数据     |  Array |
|    page     |    分页配置     |  Object |
|    onSearch     |    搜索方法函数     |  Function |
|    currentChange     |    分页切换函数     |  Function |


### formModel
```
formModel: {
	city: '',
	county: '',
	grid: '',
	taskName: ''
},
```

### formItem 
```
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
```

### tableData
```
tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: '优化'
        },
      ],
```
### tableColumn
```
tableColumn: [
        {
          prop: 'date',
          label: '日期',
          width: '',
          isFixed: false,
          fixedPos: '',
          showTooltip: false
        },
	]
```
### page
```
page: {
        background: true,
        hideOnSinglePage: false,
        total: 50,
        pageIndex: 2,
        pageSize: 20,
        layout: 'prev, pager, next'
      }
	  ```



