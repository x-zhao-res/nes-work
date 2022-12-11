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
            @select="componentChange"
          >
            <el-menu-item index="1">
              <i style="font-size: 22px" class="el-icon-files"></i>
              <span class="nav-item-text" slot="title">工程管理</span>
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
      >
        <transition name="current-fade" mode="out-in">
          <component :is="currentComponents"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import itemChoose from "@/views/itemChoose/components/itemChoose";
import mirrorManage from "@/views/itemChoose/components/mirrorManage";
import networkTechTree from "@/views/itemChoose/components/networkTechTree";
import simualSetting from "@/views/itemChoose/components/simualSetting";
export default {
  name: "index.vue",
  components: {
    itemChoose,
    mirrorManage,
    networkTechTree,
    simualSetting,
  },
  mounted() {},
  data() {
    return {
      menuCollacp: true,
      currentComponents: "itemChoose",
    };
  },
  methods: {
    test() {
      console.log(123);
      this.menuCollacp = !this.menuCollacp;
    },
    componentChange(item) {
      this.currentComponents =
        item === "1"
          ? "itemChoose"
          : item === "2"
          ? "networkTechTree"
          : item === "3"
          ? "mirrorManage"
          : "simualSetting";
    },
  },
};
</script>

<style scoped lang="scss">
.current-fade-enter,
.current-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.current-fade-enter-active,
.current-fade-leave-active {
  transition: all 0.65s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.42s;
}
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
  overflow-y: hidden;
  //background-color: #548192;
  background-color: #158bb8;
  // TODO 从新选择所用背景
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
      padding: 15px 6px 20px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-content: center;
      transition: width 0.25s;
      background-color: white;
      .nav-menu {
        transition: width 0.25s;
      }
    }
  }
  .show-box-border {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
