const app = Vue.createApp({

    data()
    {
        return {
            counter: 0,
            counter2: 0

        };
    },
    methods:
    {
        // getCounterResult(){
        //     console.log("counter1");
        //     return this.counter > 5 ?'Büyük':'Küçük';
        // },
        // getCounterResult2(){
        //     console.log("counter2");
        //     return this.counter2 > 5 ?'Büyük':'Küçük';
        // }
    },
    // Reactive yapıları computed yapısı içine yazacağız.
    // Değişken gibi olan method gibi tanımlanan yapılardır.
    // index.html de çağırırken fonksiyon gibi çağırmamalıyız.
    // Geriye bir değer döndürmek zorundadır.
    computed:{
        getCounterResult(){
            console.log("counter1");
            return this.counter > 5 ?'Büyük':'Küçük';
        },
        getCounterResult2(){
            console.log("counter2");
            return this.counter2 > 5 ?'Büyük':'Küçük';
        }
    },
    // Bir property'i spesifik olarak izlememizi sağlıyor.
    // Bu izleme herşeyini kapsar bu propun
    // Geriye bir değer döndürmek zorunda değildir.
    watch: {
        counter(newValue,oldValue){
            console.log(oldValue,"->",newValue);
        },
        getCounterResult(newValue,oldValue){
            console.log(oldValue,"->",newValue);
        }
    }


}).mount("#app");