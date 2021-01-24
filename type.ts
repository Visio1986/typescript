// 可以直接使用字面量进行类型声明
 let a: 10;
 a = 10;

//  可以使用 | 来连接多个类型（联合类型）
 let b: "male" | "famale";
 b = "famale";
 b = "male";

 let c: boolean | string;
 c = true;
 c = "hello";


// any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// let d: any;
// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let d;
d = 10;
d = 'hello';
d = true; 

// nuknow 表示未知类型的值
let e:unknown;
e = 10;
e = 'hello';
e = true; 


let s: string;

// d 的类型是any，它可以赋值给任意变量
// s = d;

// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接复制给其他变量

// s = e;
if(typeof e === "string"){
    s = e;
}

// 类型断言，可以用来告诉解析器变量的实际类型
/* 语法：
    变量 as 类型
    <类型>变量
 */
s = e as string;
s = <string>e;


// {}用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// 在属性名后面加上？表示属性是可选的

let f: {name:string,age?:number};
f = {name:'tom',age:18}

// [propName:string]:any表示任意类型的属性
let g:{name:string,[propName:string]:any}
g={name:'tom',age:18,sex:'man'}


/* 
    设置函数结构的类型声明：
        语法：（形参：类型，形参：类型，...）=> 返回值
*/
let h: (a:number,b:number)=>number;
// h = function(n1:number,n2:number):number{
//     return 10
// }

// string[]表示字符串数组 number[]表示数值数组等价于Array<number>
let i: string[];
i = ['a','b','c'];

/* 元组，元组就是固定长度的数组
    语法：[类型,类型,...]
 */
let j: [string,string];
j = ['a','b']


enum Gender{
    Male = 0,
    Female = 1
}

let k: {name:string,gender:Gender};
k = {
    name:'tom',
    gender:Gender.Male
}

console.log(k.gender === Gender.Male)

// &表示同时
let l: {name:string} & {age:number}
l = {
    name:'tom',
    age:18
}