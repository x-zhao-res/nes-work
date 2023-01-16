<template>
  <div>
    <div class="login-border">
      <div class="animate__animated animate__fadeIn login-background">
        <div
          id="loginBox"
          ref="loginBox"
          class="animate__animated animate__fadeIn login-box"
        >
          <!--          // TODO 修改动画时间，让它看着舒服点 -->
          <div class="login-text">Nes-Work</div>
          <div class="input-ip-box">
            <div class="custom-input">
              <el-input
                placeholder="模拟器地址"
                v-model="inF.customIp"
              ></el-input>
              <el-link
                style="user-select: none; color: #158bb8"
                :underline="false"
                type="primary"
              >
                这是什么?
              </el-link>
            </div>
          </div>
          <div v-if="!register" class="custom-auth-box">
            <div class="custom-auth-box-radio">
              <el-radio-group v-model="radio">
                <el-radio :label="0">GNS3</el-radio>
                <el-radio :label="1">EvE-Ng</el-radio>
              </el-radio-group>
            </div>
            <div class="custom-auth-box-text">选择模拟器并验证</div>
          </div>
          <div class="button-input">
            <div @click="login" class="button-login">登陆</div>
            <div @click="customLogin" class="button-login">游客登陆</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
// import { gsap } from "gsap";
export default {
  name: "Home",
  data() {
    return {
      inF: {
        username: "",
        password: "",
        customIp: "",
        repassword: "",
        phoneNum: "",
      },
      radio: "",
      ceshi: false,
    };
  },
  methods: {
    login() {
      this.$router.push("/item");
    },
    customLogin() {},
  },
};
</script>
<style scoped lang="scss">
.elInput-enter-avtive .elInput-leave-active {
  transition: opacity 1s ease;
}
.elInput-enter-from .elInput-leave-to {
  opacity: 0;
}
.login-border {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #158bb8;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-background {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    .login-box {
      width: 100%;
      height: 600px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding-top: 20px;
      padding-bottom: 30px;
      align-content: center;
      .login-text {
        user-select: none;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-family: 微软雅黑, serif;
        font-weight: bolder;
        color: #158bb8;
      }

      .input-username-box {
        margin-top: 20px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        .user-input {
          width: 85%;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
        }
      }

      .input-password-box {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        .pass-input {
          width: 85%;
        }
      }

      .input-phonecode-box {
        margin-top: 20px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        .code-input {
          width: 85%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;
        }
      }

      .input-repassword-box {
        margin-top: 20px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        .pass-input {
          width: 85%;
        }
      }

      .input-ip-box {
        margin-top: 20px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .custom-input {
          width: 85%;
          height: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
      }

      .custom-auth-box {
        margin-top: 10px;
        width: 85%;
        height: auto;
        border: 2px dashed #158bb8;
        border-radius: 10px;
        padding-top: 5px;
        padding-bottom: 5px;

        .custom-auth-box-radio {
          width: 100%;
        }

        .custom-auth-box-text {
          margin-top: 5px;
          width: 100%;
          height: auto;
          font-size: 15px;
          font-family: 微软雅黑, serif;
        }
      }

      .button-input {
        width: 85%;
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        .button-login {
          width: 42%;
          height: 42px;
          border: 2px solid #158bb8;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          color: #158bb8;
          font-family: 微软雅黑, serif;
          cursor: pointer;
          transition-duration: 0.4s;
          user-select: none;
        }

        .button-login:hover {
          color: white;
          background-color: #158bb8;
          border: 2px solid white;
        }
      }
    }
  }
}
</style>
