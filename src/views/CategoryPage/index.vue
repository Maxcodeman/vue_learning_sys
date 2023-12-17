<template>
  <div class="category-page">
    <div>
      <el-popover placement="top" width="160" v-model="visible">
        <p>新增分类</p>
        <div style="text-align: right; margin: 0">
            <el-input v-model="inputCategory" placeholder="请输入分类名字" size="small"></el-input>
          <el-button size="mini" type="text" @click="visible = false"
            >取消</el-button
          >
          <el-button type="primary" size="mini" @click="()=>{visible = false;addCategory(inputCategory)}"
            >保存</el-button
          >
        </div>
        <el-button slot="reference" type="primary">新增
            <i class="el-icon-plus el-icon--right"></i></el-button>
      </el-popover>
    </div>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      :default-sort="{ prop: 'categoryId', order: 'ascending' }"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="categoryId" label="分类编号" sortable width="200">
        <template slot-scope="scope">{{ scope.row.categoryId }}</template>
      </el-table-column>
      <el-table-column prop="categoryName" label="分类名称" width="200">
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button size="small" @click="selectById(scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px; float: left">
      <el-popconfirm
        confirm-button-text="好的"
        cancel-button-text="不用了"
        icon="el-icon-info"
        icon-color="red"
        title="你确定删除选中的题型吗？(危险操作)"
      >
        <el-button
          type="danger"
          slot="reference"
          @click="deleteDialogVisible = true"
          >删除</el-button
        >
      </el-popconfirm>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
import axios from "@/api/axios";
export default {
  data() {
    return {
      tableData: [],
      visible:false,
      inputCategory:"",
    };
  },
  methods: {
    getAllCategories() {
      axios
        .get("/category")
        .then((res) => {
          if (res.data.code == 1) {
            this.tableData = res.data.data;
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addCategory(inputCategory){
        axios
        .post("/category?categoryName="+inputCategory)
        .then((res) => {
          if (res.data.code == 1) {
            this.$message.success("添加分类成功")
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getAllCategories();
  },
};
</script>

<style>
.category-page {
  padding: 100px;
}
</style>