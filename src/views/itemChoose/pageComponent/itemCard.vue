<template>
  <div class="card-box">
    <div class="item-name-box">
      <span
        style="
          width: 100%;
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
  font-size: 24px;
  margin-left: 24px;
  cursor: pointer;
  transition: all 0.3s;
}
i:hover {
  color: #158bb8;
}
.card-box {
  width: 97%;
  height: auto;
  background-color: white;
  padding-top: 15px;
  padding-bottom: 15px;
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d0d0d5;
  .item-name-box {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    user-select: none;
    transition: all 0.3s;
  }
  .item-name-box:hover {
    color: #158bb8;
  }
  .item-button-box {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    margin-right: 24px;
    align-items: center;
  }
}
</style>
