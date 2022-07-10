const app = Vue.createApp({

    // Propertylerimizi değişkenlerimizi data içinde tanımlıyoruz.
    data(){
        return {
            title:"Vue.js Bootcamp 1.gün",
            content:"Lorem ipsum dolor sit amet",
            eduflow:{
                title:"Müfredat ve açıklamaları için tıklayınız",
                target:"_blank",
                alt:"mufredat-kablosuz-vue-bootcamp",
                url:"www.apple.com"
            },
            url:"https://www.google.com",
            coords: {
                x :0,
                y: 0
            }
        }
    },

    // Methodlarımızı aşşağıda tanımlayacağız.
    methods: {
        changeTitle(pTitle){
            // this demessek görmez
            this.title = pTitle;
        },
        // mouse'un kordinatlarını almak için event'e ihtiyacımız var.
        updateCoords(message,event){
            //console.log(message,event.x, event.y);
            this.changeTitle(`${event.x},${event.y}`);
            this.coords = {
                x : event.x,
                y : event.y
            }
        }
        
    }



}).mount("#app"); // id 'si app olan bloğu dinle diyoruz.

;