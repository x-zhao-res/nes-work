<template>
  <div class="card-box">
    <div class="item-name-box">
      <span
        style="
          width: 90%;
          overflow: hidden;
          margin-left: 24px;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: start;
        "
        >MPLS-VPN-FOR-THAT-IN-VRF1111
      </span>
    </div>
    <div class="item-button-box">
      <i class="el-icon-video-play"></i>
      <i class="el-icon-document-copy"></i>
      <i class="el-icon-delete"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemCard",
};
</script>

<style scoped lang="scss">
i {
  font-size: 32px;
  margin-left: 24px;
  cursor: pointer;
  transition: all 0.3s;
}
i:hover {
  color: #158bb8;
}
.card-box {
  margin-bottom: 20px;
  width: 49%;
  height: auto;
  background-color: white;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 15px;
  transition: all 0.2s;
  cursor: pointer;
  .item-name-box {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 22px;
    user-select: none;
  }
  .item-button-box {
    margin-top: 12px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
.card-box:hover {
  transform: translateY(-2px);
}
</style>
