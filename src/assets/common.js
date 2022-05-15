let test=[{
    type:'晴天',
    high:'17',
},
{
    type:'阴天',
    high:'6',
}]
let obj={
    type:'',high:'',
};
let objarry=[];
test.forEach(element => {
    obj.type=element.type;
    obj.high=element.high
    console.log("obj遍历后",obj);
    objarry.push({tyoe:element.type,high:element.high});
});
console.log(objarry);
