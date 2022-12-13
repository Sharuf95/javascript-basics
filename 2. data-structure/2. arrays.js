// Arrays starts with []
// Array is used to define multiple values (string,numbers,array,object)

[1,2,3,4,5];
[1
 2,
 3,
 4,
 5
];

    //        ['Syed', 'Zakeer','Shaik', 'Sharuf', 'Ash']
   //        ['Syed', 'Zakeer','Shaik', 'Sharuf','Ash']
  //        [   0  ,     1    ,  2    ,   3    ,  4]


  ['Syed', 'Zakeer','Shaik', 'Sharuf','Ash']
  ['Syed', 'Zakeer','Shaik', 'Sharuf', 'Ash' ]

 ['Syed', 'Zakeer','Shaik', 'Sharuf','Ash'][0]
// 'Syed'
 ['Syed', 'Zakeer','Shaik', 'Sharuf','Ash'][1]
// 'Zakeer'
 ['Syed', 'Zakeer','Shaik', 'Sharuf','Ash'][2]
 // 'Shaik'
 ['Syed', 'Zakeer','Shaik', 'Sharuf','Ash'][3]
// 'Sharuf'
 ['Syed', 'Zakeer','Shaik', 'Sharuf','Ash'][4]
// 'Ash'
 ['Syed', 'Zakeer','Shaik', 'Sharuf','Ash'][5]
// undefined                                        // Because there is no value so it is undefined
['Syed', 'Zakeer','Shaik', 'Sharuf','Ash'][3-1]
// 'Shaik'

['String' , 100 , parseInt('23a') , 56 > 100, ['a' ,' b' ,' c']][0]
// 'String'
['String' , 100 , parseInt('23a') , 56 > 100, ['a' ,' b' ,' c']][1]
// 100
['String' , 100 , parseInt('23a') , 56 > 100, ['a' ,' b' ,' c']][2]
// 23
['String' , 100 , parseInt('23a') , 56 > 100, ['a' ,' b' ,' c']][3]
// false
['String' , 100 , parseInt('23a') , 56 > 100, ['a' ,' b' ,' c']][4]
// [ 'a', ' b', ' c' ]
['String' , 100 , parseInt('23a') , 56 > 100, ['a' ,' b' ,' c']][4][0]
// 'a'
['String' , 100 , parseInt('23a') , 56 > 100, ['a' ,' b' ,' c']][4][1]
// ' b'
['String' , 100 , parseInt('23a') , 56 > 100, ['a' ,' b' ,' c']][4][2]
// ' c'