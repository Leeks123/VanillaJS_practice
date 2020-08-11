// import { peoples } from "./data.js";

const peoples = {
  0: {
    image:
      "https://www.topstarnews.net/news/photo/202003/737732_460197_5610.jpg",
    name: "소주연",
    job: "actor",
    description:
      "0000Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, pariatur modi. Tenetur expedita quod iste et. Eligendi quis quam sequi.",
  },
  1: {
    image:
      "https://i.pinimg.com/originals/34/5b/7a/345b7a2a3e3ea696bfccf4a33acd8f36.jpg",
    name: "장규리",
    job: "idol",
    description:
      "1111Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, pariatur modi. Tenetur expedita quod iste et. Eligendi quis quam sequi.",
  },
  2: {
    image:
      "https://image.chosun.com/sitedata/image/201912/11/2019121101152_0.png",
    name: "백예린",
    job: "singer",
    description:
      "2222Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, pariatur modi. Tenetur expedita quod iste et. Eligendi quis quam sequi.",
  },
  3: {
    image:
      "https://i.pinimg.com/474x/b1/36/47/b13647507aa4dad47cc9b945e00d5f90.jpg",
    name: "김다미",
    job: "actor",
    description:
      "3333Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, pariatur modi. Tenetur expedita quod iste et. Eligendi quis quam sequi.",
  },
  4: {
    image:
      "https://newsimg.hankookilbo.com/cms/articlerelease/2018/01/29/201801291535309457_1.jpg",
    name: "정수정",
    job: "actor",
    description:
      "4444Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, pariatur modi. Tenetur expedita quod iste et. Eligendi quis quam sequi.",
  },
};

let currentIdx = 1;
const img = document.querySelector(".profile img");
const name = document.querySelector(".profile #name");
const job = document.querySelector(".profile #job");
const desc = document.querySelector(".description");

function init() {
  console.log("init");
  img.src = peoples[currentIdx].image;
  name.innerText = peoples[currentIdx].name;
  job.innerText = peoples[currentIdx].job;
  desc.innerText = peoples[currentIdx].description;
}

function clickLt() {
  let idx =
    (currentIdx + Object.keys(peoples).length - 1) %
    Object.keys(peoples).length;
  console.log(idx);
  img.src = peoples[idx].image;
  name.innerText = peoples[idx].name;
  job.innerText = peoples[idx].job;
  desc.innerText = peoples[idx].description;
  currentIdx = idx;
}
function clickGt() {
  let idx =
    (currentIdx + Object.keys(peoples).length + 1) %
    Object.keys(peoples).length;
  console.log(idx);
  img.src = peoples[idx].image;
  name.innerText = peoples[idx].name;
  job.innerText = peoples[idx].job;
  desc.innerText = peoples[idx].description;
  currentIdx = idx;
}

const click_random = () => {
  let rand = Math.floor(Math.random() * 4);
  console.log(rand);
  currentIdx = rand;
  init();
};
