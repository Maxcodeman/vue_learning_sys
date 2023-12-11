<template>
  <div class="personal-center-page">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="管理员ID" prop="id">
    <el-input v-model="ruleForm.id"></el-input>
  </el-form-item>
  <el-form-item label="管理员名字" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="状态" prop="state">
    <el-input v-model="ruleForm.state"></el-input>
  </el-form-item>
  <el-form-item label="创建时间" prop="create">
    <el-input v-model="ruleForm.create"></el-input>
  </el-form-item>
  <el-form-item label="更新时间" prop="update">
    <el-input v-model="ruleForm.update"></el-input>
  </el-form-item>
  <el-form-item label="手机号码" prop="telephone">
    <el-input v-model="ruleForm.telephone"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
   data() {
      return {
        ruleForm: {
          id: '',
          name: '',
          state: '',
          create: '',
          update: '',
          telephone:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入名字', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          telephone: [
            { required: true, message: '请填写手机号码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style>
.personal-center-page {
}
</style>