// alert('hello world');
// console.log('edit node')

// document.body.style.background = 'red';


// let name = 'Pol';
// var age = 22;
// const PI = 3.14;
// console.log(typeof(name));  
// console.log(typeof(age)); 
// console.log(typeof(PI));
// console.log(typeof(PI + name)) 


// alert('hello world');

// let age = confirm("are you 18?")
// console.log(age)

// let a = +prompt('перше число');
// let b = +prompt('друге число');

// console.log((a + b)/2);

// let age = +prompt('Input age');

// if(age >= 18){
//     console.log('open')
// }else{
//     console.log('close')
// };

// let number_day = +prompt('введіть номер дня');
// if(number_day == 1){
//     console.log('Пн')
// }
// else if(number_day == 2){
//     console.log('вт')
// }
// else if(number_day == 3){
//     console.log('ср')
// }
// else if(number_day == 4){
//     console.log('чт')
// }
// else if(number_day == 5){
//     console.log('пт')
// }
// else if(number_day == 6){
//     console.log('суб')
// }
// else if(number_day ==7){
//     console.log('нд')
// }
// else{
//     console.log('eroor 1-7')
// }

// let number = +prompt('input numbers')

// if(number > 0 && number <= 20){
//     console.log('ok')
// }else if(number <= 0 || number > 20){
//     console.log('no 1-20')
// }else{
//     console.log('error')
// }


// let login = prompt('хто прийшов?')
// if(login == 'admin'){
// console.log('admin')
//     let password = prompt('password')
//     if(password == 'ШАГ'){
//             console.log('ласкаво просимо')
//     }else if(password == null){
//         console.log('вхід скасована')
//     }else{
//         console.log('пароль не вірний')
//     }
// }else if(login == null){
//     console.log('вхід скасована')
// }else{
//     console.log('я вас не знаю')
// }


////////////3333


// let number = +prompt('темперратура')

// if(number <= 20  || number >= 46){
//     console.log('ви труп')
// }else if(number >= 20 && number <= 27){
//     console.log('ви у комі')
// }else if(number >= 27 && number < 36 || number > 37 && number <= 42){
//     console.log('ви хворі')
// }else if(number >= 36 && number <= 37){
//     console.log('ви здорові')
// }else if(number >= 42 && number <= 46){
//     console.log('ви втратили свідомісьть')
// }else{
//     console.log('помилка')
// }





//////444444
// let abc = +prompt('якщо 1 - то переводимо гривні в долари ' + '\n' + 'якщо 2 - то переводимо долари в гривні.')

// if(abc == 1){
//     let abc1 = +prompt('к-ть')
//     console.log(abc1 * 0.036)
// }else if (abc == 2){
//     let abc2 = +prompt('к-ть')
//     console.log(abc2 * 27.53)
// }else{
//     console.log('не коректні дані')
// }


//////////5555

// let abc = +prompt('якщо 1 - то ви чоловік' + '\n' + 'якщо 2 - то ви жінка.')

// if(abc == 1){
//     let abc1 = +prompt('вік')
//     if(abc1 >= 65){
//         console.log('Ви пінціонер')  
//     }else if(abc1 < 65){
//         console.log('ви не пенсіонер')
//     }
// }else if (abc == 2){
//     let abc2 = +prompt('вік')
//     if(abc2 >= 60){
//         console.log('Ви пінціонер')  
//     }else if(abc2 < 60){
//         console.log('ви не пенсіонер')
//     }
// }else{
//     console.log('не коректні дані')
// }


/////////////666666


// let abc = +prompt('якщо 1 - децеметри ' + '\n' + 'якщо 2 - метри' + '\n' + 'якщо 3 - сантиментри' + '\n' + 'якщо 4 - міліметри')

// if(abc == 1){
//     let abc1 = +prompt('дицеметрів')
//     let asdf = abc1 * 0.1
//     console.log(asdf + 'м')
// }else if (abc == 2){
//     let abc1 = +prompt('метрів')
//     console.log(abc1 + 'м') 
// }else if (abc == 3){
//     let abc1 = +prompt('сантиметрів')
//     let asdf = abc1 * 0.01
//     console.log(asdf + 'м')
// }else if (abc == 4){
//     let abc1 = +prompt('сантиметрів')
//     let asdf = abc1 * 0.001
//     console.log(asdf + 'м')
// }else{
//     console.log('не короктні дані')
// }


/////////////777777777

// let abc = +prompt('1 бажаю узнати свою ідеальну вагу')

// if(abc == 1){
//     let abc1 = +prompt('який твій зріст?')
//     let abc2 = +prompt('який рік народження?')
//     abc3 =  2021 - abc2
//     if(abc3 < 40){
//         let ggg = abc1 - 100
//         console.log('твоя ідеальна вага ' + ggg)
//     }else if(abc3 > 40){
//         let ggg = abc1 - 90
//         console.log('твоя ідеальна вага ' + ggg)
//     }
// }else{
//     console.log('не короктні дані')
// }

////////////8888888

// let number = +prompt('input number')

// if(number % 3 ==0){console.log('multiple 3')}
// if(number % 4 ==0){console.log('multiple 5')}
// if(number % 7 ==0){console.log('multiple 7')}
// if(number % 9 ==0){console.log('multiple 9')}
// if(number % 3 !=0 && number % 5 !=0){console.log('no multiple 3 5 7')}

//////////999999999
// let number = +prompt('numbers')

// if((number % 2)==0){
//     console.log('even')
// }else if((number % 2) == 1){console.log('odd')}

/////////////10

// let number = +prompt('катет')
// let num = +prompt('катет')
// let n = +prompt('гіпотенузу')

// let fgh = number **2 + num **2
// if(fgh == n**2){
//     console.log('трикутник прямокутний')
// }else if(fgh != n**2){
//     console.log('трикутник не прямокутний')
// }

// const age = +prompt("Рік народження");
// console.log(age % 12)
// switch(age % 12){
//     case 4:console.log('Щур ');break;
//     case 5:console.log('Бик ');break;
//     case 6:console.log('Тигр');break;
//     case 7:console.log('Заяць ');break;
//     case 8:console.log('Дракон');break;
//     case 9:console.log('Змія');break;
//     case 10:console.log('Кінь');break;
//     case 11:console.log('Вівця ');break;
//     case 0:console.log('Мавпа');break;
//     case 1:console.log('Півень');break;
//     case 2:console.log('Собака');break;
//     case 3:console.log('Кабан ');break;
//     default: console.log('Error');
// }

const a = +prompt("Рік");
// const b = +prompt("місяць");
// const c = +prompt("дата");

switch(a % 4){
    case 0:console.log('Високосний'){
        switch(b){
            case 1: if(c++ == 32){
                c = 1    
            }if(c == 1){
                b=b++
            }if else(b == 13){
                a=a++
                b=1
            }
            case 2: if(c++ == 30){
                c = 1
            }if(c == 1){
                b=b++
            }if else(b == 13){
                a=a++
                b=1
            }
            case 3: if(c++ == 31){
                c = 1
            }if(c == 1){
                b=b++
            }if else(b == 13){
                a=a++
                b=1
            }
            case 4: if(c++ == 31){
                c = 1
            }if(c == 1){
                b=b++
            }if else(b == 13){
                a=a++
                b=1
            }
            case 5: if(c++ == 32){
                c = 1
            }if(c == 1){
                b=b++
            }if else(b == 13){
                a=a++
                b=1
            }
            case 6: if(c++ == 31){
                c = 1
            }if(c == 1){
                b=b++
            }if else(b == 13){
                a=a++
                b=1
            }
            case 7: if(c++ == 32){
                c = 1
            }if(c == 1){
                b=b++
            }if else(b == 13){
                a=a++
                b=1
            }
            case 8: if(c++ == 32){
                c = 1
            }if(c == 1){
                b=b++
            }if else(b == 13){
                a=a++
                b=1
            }
            case 9: if(c++ == 31){
                c = 1
            }if(c == 1){
                b=b++
            }if else(b == 13){
                a=a++
                b=1
            }
            case 10: if(c++ == 32){
                c = 1
            }if(c == 1){
                b=b++
            }if else(b == 13){
                a=a++
                b=1
            }
            case 11: if(c++ == 31){
                c = 1
            }if(c == 1){
                b=b++
            }if else(b == 13){
                a=a++
                b=1
            }
            case 12: if(c++ == 32){
                c = 1
            }if(c == 1){
                b=b++
            }if else(b == 13){
                a=a++
                b=1
            }
        }
    }
    break;
    case 1:console.log('не високосний ');break;
    case 2:console.log('не високосний');break;
    case 3:console.log('не високосний ');break;
    default: console.log('Error');
}