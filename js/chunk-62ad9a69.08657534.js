(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62ad9a69"],{"8aff":function(c,a,e){"use strict";e.r(a);var i=e("7a23");const t={class:"pricing-container"},r={key:0,class:"pricing-list"},n=["src"],s={class:"card-name"},d={class:"card-price"},o={key:1,class:"loading"};function l(c,a,e,l,b,g){return Object(i["x"])(),Object(i["h"])("div",t,[a[0]||(a[0]=Object(i["i"])("h1",{class:"pricing-title"},"Pokémon Card Pricing",-1)),b.cards.length?(Object(i["x"])(),Object(i["h"])("div",r,[(Object(i["x"])(!0),Object(i["h"])(i["a"],null,Object(i["B"])(b.cards,c=>(Object(i["x"])(),Object(i["h"])("div",{class:"pricing-card",key:c.id},[Object(i["i"])("img",{src:c.imageUrl,alt:"Card Image",class:"card-image"},null,8,n),Object(i["i"])("h2",s,Object(i["H"])(c.name),1),Object(i["i"])("p",d,"Price: "+Object(i["H"])(c.price)+" USD",1)]))),128))])):(Object(i["x"])(),Object(i["h"])("div",o,"Loading pricing information..."))])}var b={data(){return{cards:[]}},created(){this.fetchPricingData()},methods:{async fetchPricingData(){try{const c=await fetch("https://api.pokemontcg.io/v2/cards"),a=await c.json();this.cards=a.data.map(c=>({id:c.id,name:c.name,price:c.cardmarket.prices.averageSellPrice||"N/A",imageUrl:c.images.small}))}catch(c){console.error("Error fetching pricing data:",c)}}}},g=(e("ace7"),e("6b0d")),p=e.n(g);const h=p()(b,[["render",l],["__scopeId","data-v-c3d9b086"]]);a["default"]=h},ace7:function(c,a,e){"use strict";e("b1e3")},b1e3:function(c,a,e){}}]);
//# sourceMappingURL=chunk-62ad9a69.08657534.js.map