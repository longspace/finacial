<template>
  <div class="logincontainer">
    <div class="boxwidth">
      <div class="login_box">
          <!-- <a-col :span="5" :offset="9"> -->
        <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" :form="form" @submit="handleSubmit">
          <div class="form_title"><img src="/static/images/logoShort.png" class="login_logo" />财务管理系统</div>
          <!-- 便捷管理 高效工作 -->
          <a-form-item label="账号" :validate-status="accountError() ? 'error' : ''" :help="accountError() || ''">
            <a-input
              v-decorator="[
                'account',
                { rules: [{ required: true, message: '请输入您的账号!' }] },
              ]"
              placeholder="账号"
            >
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item label="密码" :validate-status="passwdError() ? 'error' : ''" :help="passwdError() || ''">
            <a-input
              v-decorator="[
                'passwd',
                { rules: [{ required: true, message: '请输入您的密码!' }] },
              ]"
              type="password"
              placeholder="密码"
            >
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item  label="">
            <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())" style="margin-left: 57px; width: 220px;">
              立即登录 <a-icon type="arrow-right" />
            </a-button>
          </a-form-item>
          <div class="login_tips">©2020 版权所有，侵权必究</div>
        </a-form>
        </a-col>
        <!-- </a-row> -->
      </div>
    </div>
  </div>
</template>

<script>
  import {doLogin} from "@/utils/http/index"
  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  export default {
    data() {
      return {
        hasErrors,
        form: this.$form.createForm(this, { name: 'horizontal_login' }),
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.form.validateFields();
      });

      $('.logincontainer').particleground({
          dotColor: '#E8DFE8',
          lineColor: '#133b88'
      });
    },
    methods: {
      accountError() {
        const { getFieldError, isFieldTouched } = this.form;
        return isFieldTouched('account') && getFieldError('account');
      },
      passwdError() {
        const { getFieldError, isFieldTouched } = this.form;
        return isFieldTouched('passwd') && getFieldError('passwd');
      },
      handleSubmit(e) {
        e.preventDefault();
        // this.form.validateFields((err, values) => {
        //   if (!err) {
        //     console.log('Received values of form: ', values);
        //     doLogin(values)
        //     .then(resp=>{
        //         console.log(resp.data)
        //         if(resp.data.code == 200){
        //             localStorage.setItem('AuthToken',resp.data.token)
        //             console.log(resp.data.token);
        //             this.$router.push('/admin/customer/all')
        //         }else{
        //             // this.$message({
        //             //     message: '账号和密码不正确，请检查！',
        //             //     type: 'warning',
        //             //     showClose:true
        //             // });
        //             this.$message.error("账号和密码不正确，请检查！");
        //             return false;
        //         }
        //     })
        //     .catch(err=>{
        //         console.log("error:",err)
        //     });
        //   }
        // });

        localStorage.setItem('AuthToken','YTZiY2VkY2E1YWVmZTg3ODQ4MGYxODE0ZTkyYWUwMmE=')
        this.$router.push('/admin/customer/all')

      },
    },
  };
</script>

<style>
  .logincontainer{
      background: url(/static/images/bg.jpg) no-repeat center center fixed;
      background-size: cover;
      overflow-y: hidden;
      height: 100vh;
      width: 100%;
  }
  .boxwidth{  width: 900px; margin: 10% auto;}
  .login_box{
    /* margin: 200px auto; width: 350px; background-color: #fff; padding: 20px;box-shadow: 0 0 10px #dcdddf;border-radius: 5px;margin-right: 0; */
       width: 360px;
       height: 350px;
       position: absolute;
       background-color: #fff;
       left: 0;
       right: 0;
       margin: auto;
       top: 0;
       bottom: 0;
       padding: 30px 40px 40px;
       border-radius: 7px;
   }
  .form_title{ height: 80px; line-height: 80rpx; font-size: 26px; text-align: center; color: #1890ff;}
  .login_logo{ width: 67px; height: 25px; margin-right: 10px;}
  .login_tips{ text-align: center; color: #999999;}
</style>
