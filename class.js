class Class{
    name;
    listStudents;
    constructor(nameClass){
        this.name = nameClass;
        this.listStudents = []
        let stu1 = new Student(1, "Nguyễn Văn A", 9, 10, 8);
        this.listStudents.push(stu1)
    }
    add(newStu){
        this.listStudents.push(newStu)
    }
    update(index, editStudent){
        this.listStudents[index] = editStudent;
    }
    delete(index){
        this.listStudents.splice(index, 1);
    }
    searchByName(name){
        return this.listStudents.filter(value => value.name.toUpperCase().includes(name.toUpperCase()))
    }
}