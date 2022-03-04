class ClassRoom{
    static count=0;

    constructor(username,userage,usernumber,mark){
    this.name=username,
    this.age=userage,
    this.phnumber=usernumber,
    this.boardmark=mark
    ClassRoom.countStudent();
}

 checkmark(){
    if(this.boardmark>40){
        console.log(`${this.name} is eligible with ${this.boardmark}% of mark`);
    }else{
        console.log(`${this.name} is not eligible with ${this.boardmark}% of mark. Minimum mark is 40%`);
    }
}

static countStudent(){
    return ( ClassRoom.count++);  
}
}

const user1= new ClassRoom('Tom','21','998547568541','82');
const user2= new ClassRoom('kyle','22','9947521436','79');
const user3= new ClassRoom('john','24','9952146589','39');
const user4= new ClassRoom('jessy','23','8589745523','41');
const user5= new ClassRoom('rick','21','9952152256','35');

console.log(`Total Number of students = ${ClassRoom.countStudent()}`);

user1.checkmark();
user2.checkmark();
user3.checkmark();
user4.checkmark();
user5.checkmark();