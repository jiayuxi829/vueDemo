<template>
 <el-table
    :data="tableData"
    style="width: 50%;">
    <el-table-column
      label="入职日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>部门: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2017-05-02',
        name: '张三',
        address: '市场部'
      },
      {
        date: '2016-05-04',
        name: '李四',
        address: '财务部'
      },
      {
        date: '2019-05-01',
        name: '王五',
        address: '研发部'
      },
      {
        date: '2014-05-03',
        name: '赵六',
        address: '行政办公'
      }]
    }
  },

  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style>
.el-table{
    margin-top: 20px,
    /* size: small */
}
</style>
