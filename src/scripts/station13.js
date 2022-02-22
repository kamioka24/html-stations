function getData() {
    // アロー関数
    var show = () => "Arrow";
    return show();
}



// ↓↓ 問題文修正後
// data = "global data";

// // このreturnDataに代入される関数の形をアロー関数に変えて"global data"が表示されるようにしてください
// // ↓関数の中の処理は変更しないでください
// const returnThisData = (data) => {
//     return this.data;
// };
// // ↑関数の中の処理は変更しないでください

// const object = {
//     data: "object data",
//     func: returnThisData,
// };

// function getData() {
//     return object.func();
// }
