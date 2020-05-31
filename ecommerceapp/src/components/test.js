obj=[{
    name:'visa',
    age:30
},
{
    name:"rubi",
    age:20
}

]
var retobj=obj.map((dt)=>{
    var a,b;
    return(
a=dt.name,
b=dt.age  
)
})
console.log(retobj[0])