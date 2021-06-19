const app = new Vue({
    el: '#app',
    data: {
        totale: 0,
        persone: 1
    },
    methods: {
        addPersona() {
            this.persone = this.persone + 1
        },
        subtractPersona() {
            if (this.persone > 0) {
                this.persone = this.persone - 1
            }
        }

    },
    computed: {
        diviso() {
            return this.totale / this.persone
        }
    }

});