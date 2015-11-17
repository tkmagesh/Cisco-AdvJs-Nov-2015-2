var products = [
    {id :5, name : "Pen", cost : 50, units : 30, category : 1},
    {id :8, name : "Hen", cost : 20, units : 90, category : 1},
    {id :3, name : "Ten", cost : 40, units : 70, category : 2},
    {id :6, name : "Den", cost : 60, units : 50, category : 2},
    {id :7, name : "Zen", cost : 10, units : 80, category : 1},
];

/*
sort
filter
all
any
min
max
sum
reduce
map
each
groupBy
*/

function print(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}

print("Default list", function(){
    console.table(products);
});

print("Sorting", function(){
    print("Default - products by id", function(){
        function sort(){
            for(var i=0; i<products.length-1; i++)
                for(var j= i+1; j<products.length; j++)
                    if (products[i].id > products[j].id){
                        var temp = products[i];
                        products[i] = products[j];
                        products[j] = temp;
                    }

        }
        sort();
        console.table(products);
    });

    print("Any collection by any attribute", function(){
        function sort(list, attrName){
            for(var i=0; i<list.length-1; i++)
                for(var j= i+1; j<list.length; j++)
                    if (list[i][attrName] > list[j][attrName]){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }

        }
        print("Products by cost", function(){
            sort(products, "cost");
            console.table(products);
        })
        print("Products by units", function(){
            sort(products, "units");
            console.table(products);
        })
    })
    print("Any collection by any comparer", function(){
        function sort(list, comparerFn){
            for(var i=0; i<list.length-1; i++)
                for(var j= i+1; j<list.length; j++){
                    var comparerResult = comparerFn(list[i], list[j])
                    if (comparerResult > 0){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                }

        }
        print("Products by value [units * cost]", function(){
            function productComparerByValue(p1, p2){
                var p1Value = p1.cost * p1.units,
                    p2Value = p2.cost * p2.units;
                if (p1Value < p2Value) return -1;
                if (p1Value === p2Value) return 0;
                return 1;
            }
            sort(products, productComparerByValue);
            console.table(products);
        });
    })
});

print("Filter", function(){
   print("costly products [cost > 50]", function(){
       function filterCostlyProducts(){
           var result = [];
           for(var i=0; i<products.length; i++)
               if (products[i].cost > 50)
                   result.push(products[i]);
           return result;
       }
       var costlyProducts = filterCostlyProducts();
       console.table(costlyProducts);
   });
   print("Category 1 products [category === 1]", function(){
       function filterCategory1Product(){
           var result = [];
           for(var i=0; i<products.length; i++)
               if (products[i].category === 1)
                   result.push(products[i]);
           return result;
       }
       var category1Products = filterCategory1Product();
       console.table(category1Products);
   });
   print("Any list by any criteria", function(){
       function filter(list, predicateFn){
           var result = [];
           for(var i=0; i<list.length; i++)
               if (predicateFn(list[i]))
                   result.push(list[i]);
           return result;
       }
       function negate(predicate){
           return function(){
               return !predicate.apply(this, arguments);
           };
       }
       var costlyProductPredicate = function(product){
           return product.cost > 50;
       };

       /*var affordableProductPredicate = function(product){
           return !costlyProductPredicate(product);
       };*/
       var affordableProductPredicate = negate(costlyProductPredicate);

       var category1ProductPredicate = function(product){
           return product.category === 1;
       };

       /*var nonCategory1ProductPredicate = function (product){
           return !category1ProductPredicate(product);
       };*/
       var nonCategory1ProductPredicate = negate(category1ProductPredicate);


       print("costly products [cost > 50]", function(){
           var costlyProducts = filter(products, costlyProductPredicate);
           console.table(costlyProducts);
       });

       print("affordable products [cost <= 50]", function(){

           var affordableProducts = filter(products, affordableProductPredicate);
           console.table(affordableProducts);
       })

       print("category 1 products", function(){
           var category1Products = filter(products, category1ProductPredicate);
           console.table(category1Products);
       })
       print("non category 1 products", function(){

           var nonCategory1Products = filter(products, nonCategory1ProductPredicate);
           console.table(nonCategory1Products);
       })

   })
});
