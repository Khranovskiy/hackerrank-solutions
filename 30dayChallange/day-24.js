process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){
    const getNodeWithUniqueData = (data, current) => {
        let counter = 0;
        while(current !== null){
          if(!containsData(current.data, current.next)){
            //todo: bad part
            if (current.data === data)
                return null;
            }
            return current;
          }
          current = current.next;
        }
        return null;
      };
      const containsData = f = (data, node) => {
        if(!node) return false
        if(node.data === data) return true;
        return f(data, node.next);
      }

    this.removeDuplicates = function(head){
      let current = head;
      while(current !== null){
        current.next = getNodeWithUniqueData(current.data, current.next)
        current = current.next;
      }
      return head;
    }

	this.insert=function(head,data){
        var p=new Node(data);
        if(head==null){
            head=p;
        }
        else if(head.next==null){
            head.next=p;
        }
        else{
            var start=head;
            while(start.next!=null){
                start=start.next;
            }
            start.next=p;
        }
        return head;
        
    };

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}

function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    head=mylist.removeDuplicates(head);
    mylist.display(head);
}		