const STATUS = {HOME: 'Home', INVENTORY: 'Inventory', CART: 'Cart'};





Vue.use(Vuetify);

new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: { dark: true },
    }),
    data: () => ({

        cartItems: [],


                 //drawer
        drawer: false,
        menuItems: [
            {icon: '', text: 'Home', status:'',location:"index.html", },
            {icon: '', text: 'Inventory',status:'',location:"inventory.html",},
            {icon: '', text: 'Cart', status:''},

        ],
//opening page
    cards:[
        { title: 'Gaming ', src: 'images/zeldaShield.jpg', flex: 15 },
        { title: 'Emojis', src: 'images/heartface.jpg', flex: 6 },
        { title: 'novelty', src: 'images/dadTruck.jpg', flex: 6 },
    ],
 //the inventory
            forSale: [
                { invId: 1, name: 'Hyrulian Shield', image: 'images/zeldaShield.jpg', price: 60,quantity:0,
                    info:"This item is the peak of protection in Hyrule, perfect for hanging on walls!Grown from natural cherry or maple hardwood, " +
                        "there willl always be some inconsistencies to the wood's color, grain pattern, and warp. " +
                        "I do my best to filter out undesirable inconsistencies from each workpiece before carving.This finished hardwood piece measures approximately" +
                        " 9-1/4\" (H) x 8\" (W) x 3/4\" (D)" },
                { invId: 2, name: 'HeartFace Emoji', image: 'images/heartface.jpg', price: 30,quantity:0,
                    info:"An emoji to express you love of something special, be it significant other, parents, or even yourself!As this carving is made from natural hardwood," +
                        " there are some inconsistencies to the wood's color, grain pattern, and warp." +
                        " I do my best to filter out undesirable inconsistencies from each workpiece before carving." +
                        "This finished piece measures approximately 5\" wide by 5.0\" tall by 3/4\" thick and is crafted for placement on a table, desk, or" +
                        " countertop." +
                        " Wall-hanging is preferred using the rear-face sawtooth hanger."},
                { invId: 3, name: 'dads Truck', image: 'images/dadTruck.jpg', price: 35,quantity:0,
                    info:"Modeled around a Chevrolet 1500 crew cab, this father's tribute sign is " +
                        "intended for display in a man cave, garage scene, or your basement workshop.Made from a single piece of 100% " +
                        "american hardwood, this finished plaque measures approximately 4-1/2\" (H) x 10.9\" (W) x 3/4\" (D).  "},
                { invId: 4, name: 'Pikmin', image: 'images/pikmin.jpg', price: 35, quantity: 0,
                    info:"From Everyone's favorite Minion game, comes the pikmin! Remember all the fun you had with this little guy and" +
                        "all the sacrifices made. As this carving is made from natural hardwood, " +
                        "there are some inconsistencies to the wood's color, grain pattern, and warp.This finished piece measures approximately 5\" (W) x 7\" (H) x 3/4\" " +
                        "thick and is crafted for wall-mounting using the rear sawtooth hanger or up-right on display in an easel/stand (not included). "},
                { invId: 5, name: 'Batman', image: 'images/Batman.jpg', price: 45, quantity:0,
                info:"A favorite hero of many, this Emblem of Batman will be sure to remind you of the Dark Knight. This Carving is made with" +
                    "hardwood Maple. This finished piece measures approximately 9.75\" (H) x 3.75\" (W) x 0.8\" (D).\n" +
                    "The rear face has a sawtooth hanger which allows for wall mounting."},
                { invId: 6, name: 'Oddish', image: 'images/Oddish.jpg', price: 30, quantity:0,
                    info:" The pokemon oddish, the favorite turnip of many. This cute pokemon will be a excellent edition" +
                        "to any desk. The carving is made from Hardwood.This finished piece measures approximately 3-1/3\" or 4\" tall by 3/4\" " +
                        "thick and is crafted for placement on a table, desk, or countertop. "},
                { invId: 7, name: 'Snorlax', image: 'images/Snorlax.jpg', price: 45, quantity:0,
                    info:"The big boy Teddy Bear pokemon. It's iconic jolliness and laziness will be a fun to hang out with! This carving" +
                        "is made with Maple wood. This finished piece measures approximately 5\" wide by 5\" tall and approximately 0.75\" thick and is crafted for " +
                        "wall-mounting using the rear sawtooth hanger or up-right on display in an easel/stand (not included)."},
                { invId: 8, name: 'majoraMask', image: 'images/majoraMask.jpg', price: 45, quantity:0,
                    info:"The most dangerous mask of the ages. Based on one of the most critically acclaimed games of all times," +
                        "this mask will remind you of such a wondrous adventure. The carving is made from hardwood. This finished piece measures approximately 6\" " +
                        "in length and is approximately 3/4\" thick.\n" +
                        "The rear surface has a sawtooth hanger which allows for wall mounting or display on a shelf with an easel/stand (not included)."},

            ],

        showStatus: STATUS.HOME,
        dialog: false,


    }),
    computed:{
        totalPrice () {


            let total = 0;


            total += this.cartItems.reduce((left, cur) => left + cur.price, 0);

            return total;

        }


    },

    methods: {
        navigate: function (item) {
            switch (item.text) {
                case "Home":
                    this.showStatus = STATUS.HOME;

                    break;
                case "Inventory":
                    this.showStatus = STATUS.INVENTORY;
                    break;
                case "Cart":
                    this.showStatus = STATUS.CART;
                    break;
                default:
                    this.showStatus=STATUS.HOME;
                    break;
            }

        },
        addToCart (items) {



                this.cartItems.push(items);

        },

        deleteCart (cart) {

            this.cartItems.splice(
                this.cartItems.indexOf(cart),  1
            );

        }



    }



});




