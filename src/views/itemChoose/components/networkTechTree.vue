<template>
  <div class="com-tree-box">
    <div ref="tree" id="tree" class="tree-box"></div>
    <div class="number-test"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  name: "networkTechTree",
  mounted() {
    this.toSetGraphMounted();
    this.graphListeningEvent();
  },
  methods: {
    toSetGraphMounted() {
      //图的基础用法
      console.log(G6.Global.version);
      const treeRef = this.$refs.tree;
      this.graphInstance = new G6.Graph({
        container: "tree",
        height: treeRef.offsetHeight,
        width: treeRef.offsetWidth,
        // fitView: true,
        fitCenter: true,
        animate: true,
        modes: {
          default: ["drag-canvas", "zoom-canvas", "drag-node"],
          edit: ["click-select"],
        },
      });
      this.graphInstance.data(this.data);
      this.graphInstance.render();
    },
    graphListeningEvent() {
      this.graphInstance.on("node:mouseenter", (evt) => {
        const { item } = evt;
        this.graphInstance.setItemState(item, "active", true);
      });
      this.graphInstance.on("canvas:click", () => {
        console.log(123);
        this.graphInstance.getNodes().forEach((node) => {
          this.graphInstance.clearItemStates(node);
        });
      });
      this.graphInstance.on("node:mouseleave", (evt) => {
        const { item } = evt;
        this.graphInstance.setItemState(item, "active", false);
      });
    },
  },
  data() {
    return {
      graphInstance: null,
      data: {
        nodes: [
          {
            id: "node1",
            x: 100,
            y: 200,
          },
          {
            id: "node2",
            x: 200,
            y: 300,
          },
          {
            id: "node3",
            x: 500,
            y: 100,
          },
        ],
        edges: [
          {
            source: "node1",
            target: "node2",
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
.g6-tooltip {
  background-color: red;
}
.com-tree-box {
  width: 97%;
  height: 100%;
  .tree-box {
    width: 100%;
    height: 100%;
    //background-color: #fdfdfd;
  }
  .number-test {
    width: auto;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
