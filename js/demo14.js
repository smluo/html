const vm = new Vue({
  el: "#app",
  data: function () {
    return {
      msg: "你好",
    };
  },
  methods: {
    handleClick: function () {
      alert("123");
    },
    drawLine() {
      let circle1 = document.querySelector(".circle1");
      let circle2 = document.querySelector(".circle2");
      console.log(
        circle1.getBoundingClientRect(),
        circle2.getBoundingClientRect()
      );
      let elLine1 = document.createElement("i");
      elLine1.setAttribute("line", "");
      let elLine2 = document.createElement("i");
      elLine2.setAttribute("line", "");
      circle1.append(elLine1);
      circle2.append(elLine2);
      let boundThis = circle1.getBoundingClientRect();
      let boundNext = circle2.getBoun;
    },
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("echart"));
    var option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "搜索引擎" },
            { value: 735, name: "直接访问" },
            { value: 580, name: "邮件营销" },
            { value: 484, name: "联盟广告" },
            { value: 300, name: "视频广告" },
          ],
        },
      ],
    };
  },
});
