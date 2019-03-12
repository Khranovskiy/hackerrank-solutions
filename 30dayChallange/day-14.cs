using System;
using System.Linq;

class Difference {
    private int[] elements;
    public int maximumDifference;

	// Add your code here
  public Difference(int[] elements){
    this.elements = elements;
  }
  public void computeDifference(){
    Func<int, int, int> diff = (a, b) => { return Math.Abs(a - b); };
    int length = elements.Length;
    int maxDifference = Int32.MinValue;
    for(int i = 0; i < length; i++){
      var firstElement = elements[i];
      for(int j = 0; j < length; j++){
        var secondElement = elements[j];
        var difference = diff(firstElement, secondElement);
        maxDifference = Math.Max(maxDifference, difference);
      }
    }
    this.maximumDifference = maxDifference;
  }

} // End of Difference Class

class Solution {
    static void Main(string[] args) {
        Convert.ToInt32(Console.ReadLine());
        
        int[] a = Console.ReadLine().Split(' ').Select(x=>Convert.ToInt32(x)).ToArray();
        
        Difference d = new Difference(a);
        
        d.computeDifference();
        
        Console.Write(d.maximumDifference);
    }
}