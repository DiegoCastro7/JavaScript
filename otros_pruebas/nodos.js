class Node{
    constructor( value){
        this.value=value;
        this.next=null;
    }
}

class stack{
    constructor(){
        this.top=null;
        this.size=0;
    }  
    push(value){
        const newNode=new Node(value);
        newNode.next=this.top;
        this.top=newNode;
        this.size++;
    }
}