class Class {
    name;
    listStudents;

    constructor(nameClass) {
        this.name = nameClass;
        this.listStudents = JSON.parse(localStorage.getItem('data'));
    }

    add(newStu) {
        this.listStudents.push(newStu)
    }

    update(index, editStudent) {
        this.listStudents[index] = editStudent;
    }

    delete(index) {
        this.listStudents.splice(index, 1);
    }

    searchByName(name) {
        return this.listStudents.filter(value => value.name.toUpperCase().includes(name.toUpperCase()))
    }
}