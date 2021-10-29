new Vue({
  el: "#app1",
  data: {
    nyukin: "入金",
    syutu: "出金",
    sum: 0,
    zandaka: 0,
    logs: [],
  },

  methods: {
    nyu: function() {
      this.sum = Number(this.number)
      this.zandaka += Number(this.number)
      this.logs.push({
        date: new Date(),
        type: "入金",
        money: this.sum,
      })
    },
    syu: function() {
      if (this.zandaka > 0) {
        this.sum = Number(this.number)
        this.zandaka -= Number(this.number)
        this.logs.push({
          date: new Date(),
          type: "出金",
          money: this.sum,
        })
      }
    },
  },
  computed: {},
})
