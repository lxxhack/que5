module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
// Write your code here
`);
    console.log(`o) 最大值 = ${sequence.maximum()}
// Write your code here
`);
    console.log(`o) 元素数量 = ${sequence.count()}
// Write your code here
`);
    console.log(`o) 平均值 = ${sequence.avg()}
// Write your code here
`);
};

class Sequence {
  constructor(input) {
      this.input=input;
    // Write your code here
  }

  minimum() {
      var min=input[0];
      for (var i=1;i<input.length;i++)
      {
          if (min>input[i])
          {
              min=input[i];
          }
      }
      return min;
    // Write your code here
  }
     maximum() {
      var max=input[0];
      for (var i=1;i<input.length;i++)
      {
          if (max<input[i])
          {
              max=input[i];
          }
      }
      return min;
    // Write your code here
  }
     count() {
      return input.length;
    // Write your code here
  }
     avg() {
         var sum=0.0;
      for (var i=0;i<input.length;i++)
      {
          sum+=input[i];
      }
      sum/=input.length;
      return sum.toFixed(2);
    // Write your code here
  }

  // Write your code here
}
