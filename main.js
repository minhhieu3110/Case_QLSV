let myClass = new Class("C03")
let listStu = myClass.listStudents;

function showList() {
    document.getElementById('display').innerHTML = `
    <h3>Danh Sách Sinh Viên</h3><br>
    <table border="1px">
        <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Toán</th>
            <th>Vật Lý</th>
            <th>Anh Văn</th>
            <th>Điểm Trung Bình</th>
            <th>Học Lực</th>
            <th colspan="2">Action</th>
        </tr>
        <tbody id="stu" style="text-align: center">
            
        </tbody>
    </table>`
    let str = ``;
    listStu = JSON.parse(localStorage.getItem("data"));
    console.log(listStu);
    for (let i = 0; i < listStu.length; i++) {
        str += `
        <tr>
        <td>${listStu[i].id}</td>
        <td>${listStu[i].name}</td>
        <td>${listStu[i].mathScore}</td>
        <td>${listStu[i].physicalScore}</td>
        <td>${listStu[i].englishScore}</td>
        <td>${listStu[i].averageScore}</td>
        <td>${listStu[i].ranked}</td>
        <td><button onclick="editStu(${i})">Sửa</button></td>
        <td><button onclick="deleteStu(${i})">Xóa</button></td>
        </tr>`
    }
    document.getElementById('stu').innerHTML = str
}

function addStudent() {
    document.getElementById('display').innerHTML = `
    <input type="number" id="addId" placeholder="Nhập số thứ tự">
    <input type="text" id="addName" placeholder="Nhập tên sinh viên">
    <input type="number" id="addMath" placeholder="Nhâp điểm toán">
    <input type="number" id="addPhysical" placeholder="Nhập điểm vật lý">
    <input type="number" id="addEnglish" placeholder="Nhập điểm anh văn">
    <button onclick="add()">Thêm</button>`
}

function add() {
    let id = document.getElementById('addId').value;
    let nameStu = document.getElementById('addName').value;
    let mathStu = parseFloat(document.getElementById('addMath').value)
    let physicalStu = parseFloat(document.getElementById('addPhysical').value)
    let englishStu = parseFloat(document.getElementById('addEnglish').value)
    let averageStu = ((mathStu + physicalStu + englishStu) / 3).toFixed(1);
    console.log(averageStu);
    let rank = ''
    if (averageStu < 5) {
        rank = "Yếu"
    } else if (averageStu >= 5 && averageStu < 6.5) {
        rank = "Trung Bình"
    } else if ( averageStu >= 6.5 && averageStu < 8) {
        rank = "Khá"
    } else if (averageStu >= 8) {
        rank = "Giỏi"
    }
    let newStu = new Student(id, nameStu, mathStu, physicalStu, englishStu, averageStu, rank)
    myClass.add(newStu)
    console.table(newStu)
    saveLocalStorage()
    showList();
}

function editStu(index) {
    document.getElementById('display').innerHTML = `
    <input type="number" id="editId" placeholder="Nhập số thứ tự" value="${listStu[index].id}" readonly>
    <input type="text" id="editName" placeholder="Nhập tên sinh viên" value="${listStu[index].name}">
    <input type="number" id="editMath" placeholder="Nhâp điểm toán" value="${listStu[index].mathScore}">
    <input type="number" id="editPhysical" placeholder="Nhập điểm vật lý" value="${listStu[index].physicalScore}">
    <input type="number" id="editEnglish" placeholder="Nhập điểm anh văn" value="${listStu[index].englishScore}">
    <button onclick="update(${index})">Cập Nhập</button>`
}

function update(index) {
    let id = document.getElementById('editId').value;
    let updateName = document.getElementById('editName').value;
    let updateMath = parseFloat(document.getElementById('editMath').value)
    let updatePhysical = parseFloat(document.getElementById('editPhysical').value);
    let updateEnglish = parseFloat(document.getElementById('editEnglish').value);
    let updateAverage = ((updateMath + updatePhysical + updateEnglish) / 3).toFixed(1)
    let updateRank = ""
    if (updateAverage < 5) {
        updateRank = "Yếu"
    } else if (updateAverage >= 5 && updateAverage < 6.5) {
        updateRank = "Trung Bình"
    } else if ( updateAverage >= 6.5 && updateAverage < 8) {
        updateRank = "Khá"
    } else if (updateAverage >= 8) {
        updateRank = "Giỏi"
    }
    let updateStu = new Student(id, updateName, updateMath, updatePhysical, updateEnglish, updateAverage, updateRank)
    myClass.update(index, updateStu)
    saveLocalStorage()
    showList()
}

function deleteStu(index) {
    let ok = confirm("Bạn có muốn xóa sinh viên này không ???")
    if (ok) {
        myClass.delete(index)
        saveLocalStorage()
        showList()
    } else {
        alert("Thao tác xóa đã hủy")
    }
}

function findStu() {
    let nameSearch = document.getElementById('searchName').value
    let foundName = myClass.searchByName(nameSearch)
    if (foundName.length > 0) {
        let str = ``
        document.getElementById('display').innerHTML = `
        <h3>Kết Quả Tìn Kiếm</h3><br>
    <table border="1px">
        <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Toán</th>
            <th>Vật Lý</th>
            <th>Anh Văn</th>
            <th>Điểm Trung Bình</th>
            <th>Học Lực</th>
        </tr>
        <tbody id="findStu" style="text-align: center">
            
        </tbody>
    </table>`
        for (let i = 0; i < foundName.length; i++) {
            str += `
            <tr>
                <td>${foundName[i].id}</td>
                <td>${foundName[i].name}</td>
                <td>${foundName[i].mathScore}</td>
                <td>${foundName[i].physicalScore}</td>
                <td>${foundName[i].englishScore}</td>
                <td>${foundName[i].averageScore}</td>
                <td>${foundName[i].ranked}</td>
            </tr>`
        }
        document.getElementById('findStu').innerHTML = str;
    } else {
        alert("Không tìm thấy sinh viên có tên " + nameSearch)
    }
}

//Local Storage
function saveLocalStorage() {
    listStu = myClass.listStudents;
    localStorage.setItem('data', JSON.stringify(listStu));
}

function restoreLocalStorage() {
    if (localStorage.getItem('data')) {
        listStu = JSON.parse(localStorage.getItem('data'));
        showList()
    }
}

// function removeLocalStorage(){
//     localStorage.removeItem('data')
// }
window.onload = function () {
    restoreLocalStorage()
}
showList()