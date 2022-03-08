let stocks = {     //Stoklar
    lettuce : 0,
    pickle : 5,
    sauce : 5,
    onion : 5,
    meatball : 5,
    chicken : 5,
    tomato : 5,
    bread : 5,
    potato : 5,
    coke : 5,
}

let order1 = { // 1. örnek sipariş
    marul : 1,
    tursu : 1,
    paketSos : 1,
    soğan : 1,
    domates : 1,
    patates : 1,
    kola : 1,
    meat : "meatball",
    degreeofcooking : "rare",
}

let order2 = { //2. örnek sipariş
    marul : 1,
    tursu : 1,
    paketSos : 1,
    sogan : 1,
    domates : 1,
    patates : 1,
    kola : 1,
    meat : "chicken",
}

let takeOrder = () => {  // Sipariş almak için kullanılan fonksiyon
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sipariş alındı...")
            resolve();
        },1000)
    })
};

function stock(stocks) {  // Stokkontrol işlemini yapan fonksiyon
    return Object.values(stocks).every((element) => element > 0);
} 

let checkStocks = () => { //Stok kontrol adımının bilgisini veren fonksiyon
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            console.log("Stok kontrol ediliyor...")
            resolve();
        },1000)
    })
};
 
let meatballorchicken = (order) => { //Köfte mi tavuk mu sorgusunu yapan fonksiyon
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           if (order.meat == "meatball"){
               console.log("Köfte hazırlanıyor...")
               meatball(order);
               resolve();
           }else if(order.meat == "chicken"){
               console.log("Tavuk hazırlanıyor..")
               chicken();
               resolve();
           }
        },1000)
    })
}

let meatball = (order) => { // Sipariş köfte ise yapılacak işlemleri yapan fonksiyon
    if(order.degreeofcooking == "rare"){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Köfteniz az pişiriliyor..")
                resolve();
            },2000)
        }).then(hamburger)
    }else if(order.degreeofcooking == "medium"){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Köfteniz orta pişiriliyor..")
                resolve();
            },3000)
        }).then(hamburger)
    }else if(order.degreeofcooking == "overcooked"){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Köfteniz çok pişiriliyor..")
                resolve();
            },4000)
        }).then(hamburger)
    }
}

let chicken = () => { // Sipariş tavuk ise yapılacak işlemleri yapan fonksiyon
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tavuk pişiriliyor")
            resolve();
        },3000)
    }).then(hamburger);
}

let hamburger = () => { // Hamburgerin birleştirildiği fonksiyon
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hamburger hazırlanıyor...")
            resolve();
        },1000)
    });
}

let frenchfries = () => { // Patatesleri kızarma işlemini yapan fonksiyon
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Patates hazır...")
            resolve();
        },5000)
    })
}

let drink = () => { // İçecekleri hzaırlama işlemi için olan fonksiyon
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("İçecek hazır...")
            resolve();
        },2000)
    })
}

let sauce  = () => { // Sosları ve hazırlanan malzemeleri servis tepsisine koyma adımını yapan fonksiyon
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Soslar ve ürünler servis tepsisine kondu..")
            resolve();
        },1000)
    })
}

let serve = () => { // Servis etme fonksiyonus
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Servis edildi...")
            resolve();
        },1000)
    })
}

async function order(order , stocks) { // Yukarıdaki tüm adımların doğru sırada çalışmasını sağlayan fonksiyon
    await takeOrder();
    await checkStocks();
    if (stock(stocks)){
        console.log("Stok var..")
        await Promise.all([meatballorchicken(order),frenchfries(),drink()])
        await sauce();
        await serve();
    }else {
        console.log("Stok bitti sipariş oluşturamıyoruz!");
    }
}

order(order1,stocks); // Programı çalıştırma adımı

