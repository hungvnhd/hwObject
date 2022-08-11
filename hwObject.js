// let arr = [
//     {
//         Name: "Sony Xperia XZ Premium",
//         Brand: "Sony",
//         Price: 4428,
//         Color: "White",
//         Category: "Changer",
//     },
//     {
//         Name: "Oppo F3 Plus",
//         Brand: "OPPO",
//         Price: 5487,
//         Color: "Black",
//         Category: "Phone",
//     },
//     {
//         Name: "Iphone 13 Pro Max",
//         Brand: "Apple",
//         Price: 21490,
//         Color: "Gray",
//         Category: "Phone",
//     },
//     {
//         Name: "Samsung Galaxy S8",
//         Brand: "Samsung",
//         Price: 8490,
//         Color: "Blue",
//         Category: "Phone",
//     },
// ]
// console.table(arr);
// // 1.1
// for (i = 0; i <= arr.length - 1; i++) {
//     console.log("1.1------------------------");
//     console.log(`Name : ${arr[i].Name}`);
//     console.log(`Price : ${arr[i].Price}`);
// };
// // 1.2:
// let cars = Number(prompt(" Hãy nhập số để kiểm tra xe"));
// console.log('1.2----------------------------------');
// console.log(`Name : ${arr[cars].Name}`);
// console.log(`Brand : ${arr[cars].Brand}`);
// console.log(`Price : ${arr[cars].Price}`);
// console.log(`Color : ${arr[cars].Color}`);
// console.log(`Category : ${arr[cars].Category}`);
// //1.3
// let muc = String(prompt(" Nhập danh mục "));
// for (i = 0 ; i <= arr.length - 1; i++) {
//     if (muc == arr[i].Category) {
//         console.log("1.3------------------------");
//         console.log(`Name : ${arr[i].Name}`);
//         console.log(`Price : ${arr[i].Price}`);
//     }
// }

// //1.4 ;
// arr[0].Providers = "Phukienso";
// arr[1].Providers = "tgdd";
// arr[2].Providers = "tgdd";
// arr[3].Providers = "tgdd";
// console.table(arr);
// for (let i = 0; i <= arr.length - 1; i++) {
//     console.log("1.4--------------------------");
//     console.log(`# ${i} Name : ${arr[i].Name}`);
//     console.log(`Price : ${arr[i].Price}`);
//     console.log(`Providers : ${arr[i].Providers}`);
// }
// //1.5 :
// let nhacungcap = String(prompt(" Chọn nhà cung cấp"));
// for (let i = 0 ; i <= arr.length - 1; i++) {
//     if (nhacungcap == arr[i].Providers) {
//         console.log("1.5----------------------------");
//         console.log(`Name : ${arr[i].Name}`);
//         console.log(`Brand : ${arr[i].Brand}`);
//         console.log(`Price : ${arr[i].Price}`);
//         console.log(`Color : ${arr[i].Color}`);
//         console.log(`Category : ${arr[i].Category}`);
//         console.log(`Providers : ${arr[i].Providers}`);
//     }
// }

// 2
//2 + 2.6
let learning = [
  {
    id: 1,
    name: "HTML",
    complete: "false",
    check: "[ ]",
  },
  {
    id: 2,
    name: "CSS",
    complete: "false",
    check: "[ ]",
  },
  {
    id: 3,
    name: "Basic of javascript",
    complete: "false",
    check: "[ ]",
  },
  {
    id: 4,
    name: "Node package Manager (npm)",
    complete: "false",
    check: "[ ]",
  },
  {
    id: 5,
    name: "Git",
    complete: "false",
    check: "[ ]",
  },
];

//2.2 add new
while (true) {
  let command = prompt("Enter your command(New, Delete, Update, Complete)");
  if (command == "new") {
    let taskInput = prompt("Enter new task:");
    learning.push({
      id: learning.length + 1,
      name: taskInput,
      complete: false,
      check: "[ ]",
    });
    console.clear();

    for (let key in learning) {
      console.log(
        learning[key].id +
          ". " +
          learning[key].name +
          "\n" +
          "Complete: " +
          learning[key].complete
      );
    }
    console.log("----------------------------");

    for (let key in learning) {
      console.log(
        learning[key].id + ". " + learning[key].check + " " + learning[key].name
      );
    } //2.3 update
  }
  if (command == "update") {
    let position = Number(prompt("Enter position "));
    let title = prompt("Enter new title");
    for (let key in learning) {
      if (position == learning[key].id) {
        learning[key].name = title;
        console.log(learning[key].name);
      }
    }
    console.clear();
    for (let key in learning) {
      console.log(
        learning[key].id +
          ". " +
          learning[key].name +
          "\n" +
          "Complete: " +
          learning[key].complete
      );
    }
    console.log("-------------------------------");
    for (let key in learning) {
      console.log(
        learning[key].id + ". " + learning[key].check + " " + learning[key].name
      );
    }
  }
  //2.4 complete
  if (command == "complete") {
    let position = Number(prompt("Nhập vị trí để hoàn thành"));
    for (let key in learning) {
      if (position == learning[key].id) {
        learning[key].complete = true;
        learning[key].check = "[x]";
      }
    }
    console.clear();
    for (let key in learning) {
      console.log(
        learning[key].id +
          ". " +
          learning[key].name +
          "\n" +
          "Complete: " +
          learning[key].complete
      );
    }
    console.log("----------------------------------------------------------");
    for (let key in learning) {
      console.log(
        learning[key].id + ". " + learning[key].check + " " + learning[key].name
      );
    }
  }
  if (command == "d") {
    let position = Number(prompt("Nhập vị trí muốn xóa"));
    for (let key in learning) {
      if (position == learning[key].id) {
        delete learning[key];
      }
    }
    console.clear();
    for (let key in learning) {
      console.log(
        learning[key].id +
          ". " +
          learning[key].name +
          "\n" +
          "Complete: " +
          learning[key].complete
      );
    }
    console.log("----------------------------------------------------------");
    for (let key in learning) {
      console.log(
        learning[key].id + ". " + learning[key].check + " " + learning[key].name
      );
    }
  } else if (command == "e") {
    break;
  }
}
