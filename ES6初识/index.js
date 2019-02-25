// let jspang='技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
// document.write(blog.includes(jspang));
// document.write(blog.indexOf(jspang));
// document.write('jspang|'.repeat(3));

//二进制声明 Binary
//let binary = 0B010101;
//console.log(binary);

//八进制声明 Octal
// let Octal = 0O777;
// console.log(Octal);
//
// let a ="";
// console.log(Number.isFinite(a)); //判断是否是数字
// console.log(Number.isNaN(NaN)); //判断是否是Not a number
// console.log(Number.isInteger(1.0)); //判断是否是整数
// console.log(Number.MAX_SAFE_INTEGER); //最大安全整数
// console.log(Number.MIN_SAFE_INTEGER); //最小安全整数
// let b = Math.pow(2,53)-1;
// console.log(Number.isSafeInteger(b));

//数组的Json格式
// let json = {
//     '0' : 'z',
//     '1' : 'c',
//     '2' : '8',
//     length:3
// }
// let arr = Array.from(json);
// console.log(arr);


//find()实例方法
// let arr = [1,2,3,4,5,6,7,,8,9,10];
// let arr1 = ['z','c','a','b','k'];
// console.log(arr.find(function (value,index,arr) {
//     return value > 5;
//
// }))
// console.log(arr1.find(function (value,index,arr1) {
//     return value == 'w';
// }))

//fill (填充)
// let arr =['zc','郑诚','哈哈'];
// arr.fill('嘿嘿',0,3)
// console.log(arr);

//数组循环
// let arr =['zc','郑诚','哈哈'];
// for(let item of arr){  //arr.keys()-输出下标，arr.entries()-输出下标和值
//     console.log(item);
// }
// for (let [index,value] of arr.entries()){
//     console.log(index+':'+value);
// }
// let list = arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);



//函数
// function  add(a,b=1) {
    //主动抛出错误的方法。
    // if (a == 0){
    //     throw new Error('A is Error');
    // }

    //严谨模式-
    // 'use strict'
//     return a+b;
// }
// console.log(add.length);


// 函数 - 箭头函数
//  1.如果只有一个参数，（）可以省；
//  2.如果只有一个return {}可以省；
//
// var add=(a,b)=>{
//     return a+b;
// }
// console.log(add(1,2));
//
// var add1=(a,b)=>a+b;
//
// console.log(add1(1,2));
//
// var add2=a=>a+2;
// console.log(add2(2));

 // 对象的函数解构json
// let json ={
//     a:'zc',
//     b:'郑诚'
// }
// function fun({a,b}) {
//     console.log(a,b);
// }
// fun(json);

 //数组解构
// let arr = ['zc','郑诚','haha'];
// function fun(a,b,c) {
//     console.log(a,b,c);
// }
// fun(...arr);

//in的用法
// 1.判断数组的中的空位置。
// 2.判断对象中的对象是否为空。
// (1) let obj={
//     a:'zc',
//     b:'郑诚'
// }
// console.log('a' in obj);

//(2)
// let arr = [0,,,];
// console.log(0 in arr);
// console.log(1 in arr);
// console.log(2 in arr);

//数组的遍历

// forEach
//let arr = ['zc','郑诚','haha'];
//arr.forEach((index,val)=>console.log(val,index));

//filter
// let arr = ['zc','郑诚','haha'];
// arr.filter((index,val)=>console.log(val,index));

//some
// let arr = ['zc','郑诚','haha'];
// arr.some((index,val)=>console.log(val,index));

//map--替换效果
// let arr = ['zc','郑诚','haha'];
// console.log(arr.map(x=>'web'));

//数组转换字符串--两种方法
// let arr = ['zc','郑诚','haha'];
// console.log(arr.toString());
// console.log(arr.join('--'));

//ES6的对象
//1.对象的定义不需要K值，直接使用变量。

//Key值的构建
// let key = 'skill';
// var obj={
//     [key]:'web'
// }
// console.log(obj);

//自定义对象的方法
// let obj={
//     add:function (a,b) {
//         return a+b;
//     }
// };
// console.log(obj.add(1,2));

//is()方法的使用
// let obj1={name:'zc'};
// let obj2={name:'zc'};

// ES5的比较方法--console.log(obj1.name === obj2.name);
// ES6的比较方法--console.log(Object.is(obj1.name,obj2.name));

//assign --合并对象
// let a={a:'zc'};
// let b={b:'zcc'};
// let c={c:'zccc'};
// let d=Object.assign(a,b,c);
// console.log(d);

//声明数据类型

// let a = new String;
// let b = new Number;
// let c = new Boolean;
// let d = new Array;
// let e = new Object;

//Symbol类型
// let f = Symbol();
// console.log(typeof(f));

// let zc = Symbol('郑诚');
// console.log(zc);    //--Symbol类型
// console.log(zc.toString()); //--字符串类型

// let zc = Symbol();
// let obj = {
//     [zc]:'郑诚'
// }
// console.log(obj[zc]);
// obj[zc] = 'web';
// console.log(obj[zc]);

// let obj = {name:'zc',skill:'web'}
// let age = Symbol();
// obj[age] = 18;
// console.log(obj);
// for (let item in obj){
//     console.log(obj[item]);
// }
// console.log(obj[age]);

//Set --不是数据类型，而是数据结构,是以数组的形式构建的
//Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，
// 相当于去重。虽然Set很像数组，但是他不是数组。

// let setArr = new Set(['zc','郑诚','web','zc']);
//追加add：
// setArr.add('哈哈哈');
// console.log(setArr);
//删除delete：
//setArr.delete('zc');
//console.log(setArr);
//查找has:
// console.log(setArr.has('web'));
//删除所有的数据:
//setArr.clear();
//console.log(setArr);

//循环输出 --for...of
// for (let item of setArr){
//     console.log(item);
// }
//forEach循环
//setArr.forEach(value => console.log(value)); //箭头函数：一个参数省略（），一个return省略{}.

//size属性
// console.log(setArr.size);

//WeakSet
// let WeakSetObj = new WeakSet(); //--WeakSet不能直接在声明时声明对象，只能通过后期添加对象。
// let obj = {name:'zc',skill:'web',age:18};
// let obj1 = {name:'zc',skill:'web',age:18};
// WeakSetObj.add(obj);
// WeakSetObj.add(obj1);
// console.log(WeakSetObj);

//map
// let json={
//     name:'zc',
//     skill:'web',
//     age:'18'
// }
// console.log(json.name);
// //=>
// var map = new Map();
// map.set(json,'I');
// console.log(map);
// map.set('I',json);
// console.log(map);

//map增加，删除，查找
//取值用get
// console.log(map.get(json));
// console.log(map.get('I'));
//delete
// map.delete(json);
// console.log(map);
//删除全部-clear
// map.clear();
// console.log(map);
//长度size
// console.log(map.size);
//查找 -has
// console.log(map.has('zc'));
// console.log(map.has(json));

//proxy 代理 ES6  增强 对象和函数（方法） 生命周期 预处理机制

// let obj={
//     add:function (val) {
//         return val+100;
//     },
//     name:'zc'
// }
// // console.log(obj.add(100));
// // console.log(obj.name);
// let pro = new Proxy({
//     add:function (val) {
//         return val+100;
//     },
//     name:'zc'
// },{
//     get:function (target,key,property) {
//         console.log('come in Get');
//         return target[key];
//     },
//     set:function (target, key, value, receiver) { //--预处理机制必须有返回值，要不然操作无效
//         console.log(`setting ${key} => ${value}`);
//         return target[key] = value;
//     }
// });
// console.log(pro.name);
// pro.name = '郑诚';
// console.log(pro.name);

//apply
// let target = function () {
//     return 'I am zc';
// }
// let handle={
//     apply(target,ctx,args){
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// let pro = new Proxy(target,handle);
// console.log(pro());

//promise
// let state = 1;
// function step1(resolve,reject) {
//         console.log('1.开始-洗菜做饭');
//         if (state == 1){
//             resolve('洗菜做饭--完成');
//         } else {
//             reject('洗菜做饭--出错');
//         }
// }
// function step2(resolve,reject) {
//     console.log('2.开始-坐下吃饭');
//     if (state == 1){
//         resolve('坐下吃饭--完成');
//     } else {
//         reject('坐下吃饭--出错');
//     }
// }
// function step3(resolve,reject) {
//     console.log('3.开始-收拾桌子洗碗');
//     if (state == 1){
//         resolve('收拾桌子洗碗--完成');
//     } else {
//         reject('收拾桌子洗碗--出错');
//     }
// }
// new Promise(step1).then(function (value) {
//     console.log(value);
//     return new Promise(step2);
// }).then(function (value) {
//     console.log(value);
//     return new Promise(step3);
// }).then(function (value) {
//     console.log(value);
//     return value;
// })

//class
// class coder {
//     name(val){
//         console.log(val);
//         return val;
//     }
//     skill(val){
//         console.log(this.name('郑诚')+':'+'Skill'+val);
//     }
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }
//     add(){
//         return this.a+this.b;
//     }
// }
// let zc = new coder(1,2);
// zc.skill('web');
// console.log(zc.add())
// class htmler extends coder{
//
// }
// let haha = new htmler;
// haha.name('web');

//对Promis的深度解析
// function timeout(ms) {
//     return new Promise((resolve,reject) => {
//         setTimeout(resolve,ms,'done');
//     });
// }
// timeout(2000).then((value) => {
//     console.log(value);
// })
// function loadImage(url) {
//     return new Promise(function (resolve, reject) {
//         const  image = new Image();
//         image.onload = function () {
//             resolve(image);
//         };
//         image.onerror = function () {
//             reject(new Error('could not load image at' + url));
//         };
//         image.src = url;
//     });
// }