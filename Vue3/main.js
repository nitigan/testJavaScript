const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            url: 'http://www.vuemastery.com',
            //inStock:true,
            inventory:100,
            onSale:true,
            details:['50% cotton','30% wool','20% polyester'],
            variants:[
                {id:2234,color:'green',size:'S'},
                {id:2235,color:'blue' ,size:'M'},
                //{id:1,size:'S'},
                //{id:2,size:'M'},
            ],
            /*
            sizes:[
                {id:1,size:'S'},
                {id:2,size:'M'},
            ]
            */
        }
    }
})