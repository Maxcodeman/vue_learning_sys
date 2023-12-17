<template>
  <div class="type-page">
    <div>
      <el-popover placement="top" width="160" v-model="visible">
        <p>新增题型</p>
        <div style="text-align: right; margin: 0">
          <el-input
            v-model="inputType"
            placeholder="请输入题型名字"
            size="small"
          ></el-input>
          <el-button size="mini" type="text" @click="visible = false"
            >取消</el-button
          >
          <el-button
            type="primary"
            size="mini"
            @click="
              () => {
                visible = false;
                addType(inputType);
              }
            "
            >保存</el-button
          >
        </div>
        <el-button
          slot="reference"
          type="primary"
          >新增 <i class="el-icon-plus el-icon--right"></i
        ></el-button>
      </el-popover>
    </div>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      :default-sort="{ prop: 'typeId', order: 'ascending' }"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="typeId" label="题型编号" sortable width="200">
        <template slot-scope="scope">{{ scope.row.typeId }}</template>
      </el-table-column>
      <el-table-column prop="typeName" label="题型名称" width="200">
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
      <el-button type="danger" @click="deleteDialogVisible = true"
        >删除</el-button
      >
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
      inputType:"",
      visible:false,
    };
  },
  methods: {
    getAllTypes() {
      axios
        .get("/type")
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
    addType(inputType){
        axios
        .post("/type?typeName="+inputType)
        .then((res) => {
          if (res.data.code == 1) {
            this.$message.success("添加题型成功")
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
    this.getAllTypes();
  },
};
</script>

<style>
.type-page {
  padding: 100px;
}
</style>