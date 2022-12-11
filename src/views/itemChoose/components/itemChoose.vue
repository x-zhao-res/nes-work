<template>
  <div class="com-choose-box">
    <div class="button-box">
      <div class="button">创建工程</div>
      <div class="button">导入工程</div>
      <div class="button">实验偏好</div>
    </div>
    <div class="item-box">
      <itemCard></itemCard>
      <itemCard></itemCard>
      <itemCard></itemCard>
      <itemCard></itemCard>
    </div>
  </div>
</template>

<script>
import itemCard from "@/views/itemChoose/pageComponent/itemCard";
export default {
  name: "itemChoose",
  components: {
    itemCard,
  },
};
</script>

<style scoped lang="scss">
.com-choose-box {
  width: 97%;
  height: 100%;
  .button-box {
    width: 100%;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .button {
      width: 150px;
      height: 46px;
      background-color: white;
      border-radius: 10px;
      margin-right: 15px;
      display: flex;
      justify-content: center;
      font-size: 16px;
      align-items: center;
      font-family: 微软雅黑, serif;
      cursor: pointer;
      transition-duration: 0.4s;
      user-select: none;
      font-weight: bold;
      color: #285569;
    }
    .button:hover {
      color: white;
      background-color: #285569;
    }
  }
  .item-box {
    width: 100%;
    height: auto;
    overflow: auto;
    overflow-y: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 5px;
  }
}
</style>
