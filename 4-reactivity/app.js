const app = Vue.createApp({
    
    data(){
        return {
            itemList:["elma","armut","kiraz","çilek"],
            search:"",
            //filteredList:[]
        }
    },
    methods:{
        // searchList(){
        //     this.filteredList = this.itemList.filter(i => i.includes(this.search));
            
        // },
    },
    // Bunu burda yazarsak anlık olarak herşeyi gösteririr
    computed:{
        searchList(){
            return this.itemList.filter((i) => i.includes(this.search));
            
        },
    }


}).mount("#app");