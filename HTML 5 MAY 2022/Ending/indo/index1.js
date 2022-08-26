let index = document.querySelector(".grandparent");
let index1 = document.querySelector(".parent");
let index2 = document.querySelector(".child");

index.addEventListener("click", () => {
  console.log("grand parent bubbling");
});

setTimeout(() => {
  index.removeEventListener("click", (event) => {});
},2000);

// index1.addEventListener("click", () => {
//   console.log("parent bubbling");
// });

index1.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("parent bubbling");
});

index2.addEventListener("click", () => {
  console.log("childs bubbling");
});

// index.addEventListener("click", () => {
//   console.log("grandparent capturing");
// },{capture :true}
// );

// index1.addEventListener("click", () => {
//   console.log("parent capturing");
// },{capture :true}
// );

// index2.addEventListener("click", () => {
//   console.log("childs capturing");
// },{capture :true}
// );

// index2.addEventListener("click", () => {
//     console.log("childs bubbling");
//   },{once:true}
//   );
