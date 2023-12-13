<template>
  <div class="change-password-page">
    <div class="change-form">
        <h1 style="font-size: 28px;">修改密码</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="管理员ID" prop="id">
        <el-input
          v-model="id"
          autocomplete="off"
          :disabled="true"
          style="width: 500px"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          placeholder="请输入密码"
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
          style="width: 500px"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input
          placeholder="请再次输入密码"
          type="password"
          v-model="ruleForm.checkPassword"
          autocomplete="off"
          style="width: 500px"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >保存</el-button
        >
      </el-form-item>
    </el-form>
</div>
  </div>
</template>

<script>
import axios from '@/api/axios';
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      id: "",
      ruleForm: {
        password: "",
        checkPassword: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPassword: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods:{
    getId(){
        axios.get("/admin/getid").then(
            (res)=>{
                if(res.data.code==1){
                    this.id=res.data.data
                }else{
                    console.log('error')
                }
            }
        ).catch((err)=>{
            console.log(err)
        }
        )
    }
  },
  mounted(){
    this.getId()
  }
};
</script>

<style>
.change-form{
  width: 800px;
  height: 500px;
  margin:auto
}
</style>