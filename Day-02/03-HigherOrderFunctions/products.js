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
        function sort(){

        }
        print("Products by cost", function(){
            sort();
            console.table(products);
        })
        print("Products by units", function(){
            sort();
            console.table(products);
        })
    })
});
