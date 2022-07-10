const app = Vue.createApp({

    data(){
        return {
            fullName:"Pogaca Larissa"
        }
    },


    methods: {
        updateValue(event){
            // event.target.value dersek anlık olarak input içindeki değeleri alabiliyoruz.
            console.log(event.target.value);
            this.fullName = event.target.value;
        }
    }
}).mount("#app");