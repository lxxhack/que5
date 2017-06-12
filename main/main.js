module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log("o) 最小值 = "+sequence.minimum()+"\no) 最大值 = "+sequence.maximum()+"\no) 元素数量 = "+sequence.count()+"\no) 平均值 = "+sequence.avg());
};

class Sequence {
  constructor(input) {
      this.input=input;
    // Write your code here
  }

  minimum() {
      var min=this.input[0];
      for (var i=1;i<this.input.length;i++)
      {
          if (min>this.input[i])
          {
              min=this.input[i];
          }
      }
      return min;
    // Write your code here
  }
     maximum() {
      var max=this.input[0];
      for (var i=1;i<this.input.length;i++)
      {
          if (max<this.input[i])
          {
              max=this.input[i];
          }
      }
      return max;
    // Write your code here
  }
     count() {
      return this.input.length;
    // Write your code here
  }
     avg() {
         var sum=0.0;
      for (var i=0;i<this.input.length;i++)
      {
          sum+=this.input[i];
      }
      sum/=this.input.length;
      return sum.toFixed(2);
    // Write your code here
  }

  // Write your code here
}
