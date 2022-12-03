<template>
  <div>
    <div class="choose-border">
      <div class="left-border-box">
        <div
          @mouseover="menuCollacp = false"
          id="menuBox"
          class="nav-box-border"
        >
          <el-menu
            class="el-menu-vertical-demo"
            :collapse="menuCollacp"
            active-text-color="#158bb8"
            default-active="1"
            :collapse-transition="true"
          >
            <el-menu-item index="1">
              <i style="font-size: 22px" class="el-icon-files"></i>
              <span class="nav-item-text" slot="title">项目管理</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i style="font-size: 22px" class="el-icon-share"></i>
              <span class="nav-item-text" slot="title">网络技术树</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i style="font-size: 22px" class="el-icon-present"></i>
              <span class="nav-item-text" slot="title">镜像管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i style="font-size: 22px" class="el-icon-setting"></i>
              <span class="nav-item-text" slot="title">模拟器设置</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      <div
        class="show-box-border"
        @mouseout="menuCollacp = true"
        @mouseenter="menuCollacp = true"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index.vue",
  mounted() {
    let menuBox = document.getElementById("menuBox");
    menuBox.onmouseover = function () {
      this.data().menuCollacp = true;
    };
    menuBox.onmouseout = function () {
      this.data().menuCollacp = false;
    };
  },
  data() {
    return {
      menuCollacp: true,
    };
  },
  methods: {
    test() {
      console.log(123);
      this.menuCollacp = !this.menuCollacp;
    },
  },
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu {
  border-right: 0 !important;
}
.nav-item-text {
  font-family: 微软雅黑, serif;
  font-size: 16px;
  font-weight: bold;
}

.choose-border {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  .left-border-box {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-content: flex-start;
    .nav-box-border {
      width: auto;
      height: 50%;
      border-radius: 15px;
      padding-top: 15px;
      padding-left: 6px;
      padding-right: 6px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
      margin-right: 10px;
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-content: center;
      transition: width 0.25s;

      .nav-menu {
        transition: width 0.25s;
      }
    }
  }
  .show-box-border {
    width: 60%;
    height: 100%;
    border: 1px solid black;
  }
}
</style>
