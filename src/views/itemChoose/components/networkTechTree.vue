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
      this.graphInstance = new G6.TreeGraph({
        container: "tree",
        height: treeRef.offsetHeight,
        width: treeRef.offsetWidth,
        // fitView: true,
        fitCenter: true,
        animate: true,
        modes: {
          default: [
            {
              type: "collapse-expand",
              //在G6中只针对子树，用于判断子树是否正常
              onChange: function onChange(item, collapsed) {
                const data = item.get("model");
                data.collapsed = collapsed;
                return true;
              },
            },
            "drag-canvas",
            "zoom-canvas",
          ],
        },
        defaultNode: {
          size: 26,
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
        },
        defaultEdge: {
          type: "cubic-horizontal",
        },
        layout: {
          type: "mindmap",
          direction: "H",
          //这里设置的是节点的宽度
          getHeight: () => {
            return 16;
          },
          getWidth: () => {
            return 16;
          },
          getVGap: () => {
            return 10;
          },
          getHGap: () => {
            return 50;
          },
        },
      });
      let centerX = 0;
      this.graphInstance.node(function (node) {
        if (node.id === "网络工程") {
          centerX = node.x;
        }
        return {
          label: node.id,
          labelCfg: {
            position:
              node.children && node.children.length > 0
                ? "top"
                : node.x > centerX
                ? "right"
                : "left",
            style: {
              fontFamily: "方正楷体",
              fontWeight: "bold",
            },
          },
        };
      });
      this.graphInstance.data(this.data);
      this.graphInstance.render();
      this.graphInstance.fitView(130);
    },
    graphListeningEvent() {
      // this.graphInstance.on("node:mouseenter", (evt) => {
      //   const { item } = evt;
      //   this.graphInstance.setItemState(item, "active", true);
      // });
      // this.graphInstance.on("canvas:click", () => {
      //   console.log(123);
      //   this.graphInstance.getNodes().forEach((node) => {
      //     this.graphInstance.clearItemStates(node);
      //   });
      // });
      // this.graphInstance.on("node:mouseleave", (evt) => {
      //   const { item } = evt;
      //   this.graphInstance.setItemState(item, "active", false);
      // });
    },
  },
  data() {
    return {
      graphInstance: null,
      data: {
        id: "网络工程",
        children: [
          {
            id: "Rs",
            children: [
              {
                id: "ospf",
              },
              {
                id: "rip",
              },
              {
                id: "bgp",
              },
              {
                id: "mp-bgp",
              },
              {
                id: "nat",
              },
              {
                id: "pat",
              },
              {
                id: "qos",
              },
            ],
          },
          {
            id: "seaf",
            children: [
              {
                id: "ipsec",
              },
              {
                id: "usg6000",
              },
              {
                id: "inter",
              },
              {
                id: "ipsec-over-gre",
              },
            ],
          },
          {
            id: "seaf1",
            children: [
              {
                id: "ipsec1",
              },
              {
                id: "usg60001",
              },
              {
                id: "inter1",
              },
              {
                id: "ipsec-over-gre1",
              },
            ],
          },
          {
            id: "seaf2",
            children: [
              {
                id: "ipsec2",
              },
              {
                id: "usg60002",
              },
              {
                id: "inter2",
              },
              {
                id: "ipsec-over-gre2",
              },
            ],
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
    background-color: #fdfdfd;
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
