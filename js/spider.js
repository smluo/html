const vm = new Vue({
  el: "#app",
  data: function () {
    return {
      msg: "你好",
      books: [],
      data:[1,2,3,4,5,6,7,8,9]
    };
  },
  methods: {
    searchFn: function() {
      let value = document.querySelector('#value').value;
      axios
        .get(`http://localhost:8080/api/highlight/${value}/1/10`)
        .then(function (response) {
          let res = response.data;
          this.books = res;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted() {
  },
});
