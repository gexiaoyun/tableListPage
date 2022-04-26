<!--
formModel  searchForm Model
formList   searchForm Item
-->
<template>
  <div class="tableList">
    <el-divider content-position="left">内容搜索</el-divider>
    <div class="tableList_searchForm">
      <slot name="searchForm" v-if="$slots.searchForm"></slot>
      <el-form :model="searchModel" v-else>
        <el-row>
          <el-col v-for="(item, index) in searchFormList" :key="`form_${index}`" :span="item.col">
            <el-form-item :label="item.label">
              <template v-if="item.type === 'select'">
                <el-select
                  :size="item.size"
                  :style="{width: item.width}"
                  v-model="searchModel[item.model]"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="list in item.optionList"
                    :key="list.value"
                    :label="list.label"
                    :value="list.value">
                  </el-option>
                </el-select>
              </template>
              <template v-if="item.type === 'input'">
                <el-input
                  :size="item.size"
                  :style="{width: item.width}"
                  v-model="searchModel[item.model]"
                  placeholder="请输入">
                </el-input>
              </template>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div style="text-align: right; padding-right: 20px;">
        <slot name="searchBtn" v-if="$slots.searchBtn"></slot>
        <el-button type="primary" size="small" @click.stop="search" v-else>搜索</el-button>
      </div>
    </div>
    <el-divider content-position="left">数据展示</el-divider>
    <el-table
      :border="isBorder"
      :data="tableDataList">
      <el-table-column
        v-for="(item, index) in tableColumnList"
        :key="`column_${index}`"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :fixed="item.isFixed || item.fixedPos"
        :show-overflow-tooltip="item.showTooltip || false"
        >
      </el-table-column>
      <slot name="tableColumn"></slot>
    </el-table>
    <div class="page" style="padding-right: 20px; text-align: right; margin-top: 20px">
      <el-pagination
        :hide-on-single-page="pageConfig.hideOnSinglePage"
        :background="pageConfig.background"
        :layout="pageConfig.layout"
        :page-size="pageConfig.pageSize"
        :current-page="pageConfig.pageIndex"
        :total="pageConfig.total"
        @current-change="handleCurrentChange"
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name:'TableList',
  props: {
    formModel: {
      type: Object
    },
    formItem: {
      type: Array
    },
    tableData: {
      type: Array
    },
    tableColumn: {
      type: Array
    },
    isBorder: {
      type: Boolean
    },
    page: {
      type: Object
    }
  },
  computed: {
    searchModel () {
      return this.formModel
    },
    searchFormList () {
      return this.formItem
    },
    tableDataList () {
      return this.tableData
    },
    tableColumnList () {
      return this.tableColumn
    },
    pageConfig () {
      return this.page
    }
  },
  mounted () {
  },
  methods: {
    search () {
      this.$emit('onSearch')
    },
    handleCurrentChange () {
      this.$emit('currentChange')
    }
  }
}
</script>

<style scoped>
</style>