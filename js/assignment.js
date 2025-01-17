"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

function findSmallestNumber(arr) {
  let min = arr[0];
  for (let value of arr) {
    if (value < min) {
      min = value;
    }
  }
  return min;
}

function findLargestNumber(arr) {
  let max = arr[0];
  for (let value of arr) {
    if (value > max) {
      max = value;
    }
  }
  return max;
}

function findAverage(arr) {
  let total = 0;
  for (let value of arr) {
    total += value;
  }
  return total / arr.length;
}

function render() {
  smallestNumberElement.innerText = findSmallestNumber(myNumbers);
  largestNumberElement.innerText = findLargestNumber(myNumbers);
  averageNumberElement.innerText = findAverage(myNumbers);
}

submissionBtn.addEventListener("click", function() {
  render();
})