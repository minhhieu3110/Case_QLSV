let myClass = new Class("C03")
let listStu = myClass.listStudents

function showList(){
    document.getElementById('display').innerHTML = `
    <h3>Danh Sách Học Sinh</h3><br>
    <table border="1px">
        <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Toán</th>
            <th>Vật Lý</th>
            <th>Anh Văn</th>
            <th>Điểm Trung Bình</th>
            <th>Hạnh Kiểm</th>
            <th>Học Lực</th>
            <th colspan="2">Action</th>
        </tr>
        <tbody id="stu" style="text-align: center">
            
        </tbody>
    </table>`
    let str = ``
    for (let i = 0; i < listStu.length; i++) {
        str +=`
        <tr>
        <td>${listStu[i].id}</td>
        <td>${listStu[i].name}</td>
        <td>${listStu[i].mathScore}</td>
        <td>${listStu[i].physicalScore}</td>
        <td>${listStu[i].englishScore}</td>
        <td>${listStu[i].averageScore}</td>
        <td>${listStu[i].conductClassification}</td>
        <td>${listStu[i].ranked}</td>
        <td><button onclick="editStu(${i})">Sửa</button></td>
        <td><button onclick="deleteStu(${i})">Xóa</button></td>
        </tr>`
    }
    document.getElementById('stu').innerHTML = str
}
function addStudent(){
    document.getElementById('display').innerHTML = `
    <input type="number" id="addId" placeholder="Nhập số thứ tự">
    <input type="text" id="addName" placeholder="Nhập tên sinh viên">
    <input type="number" id="addMath" placeholder="Nhâp điểm toán">
    <input type="number" id="addPhysical" placeholder="Nhập điểm vật lý">
    <input type="number" id="addEnglish" placeholder="Nhập điểm anh văn">
    <input type="text" id="addConduct" placeholder="Nhập hạnh kiểm">
    <button onclick="add()">Thêm</button>`
}
function add() {
    let id = document.getElementById('addId').value;
    let nameStu = document.getElementById('addName').value;
    let mathStu = parseFloat(document.getElementById('addMath').value)
    let physicalStu = parseFloat(document.getElementById('addPhysical').value)
    let englishStu = parseFloat(document.getElementById('addEnglish').value)
    let averageStu = ((mathStu+physicalStu+englishStu)/3).toFixed(1)
    let conductStu = document.getElementById('addConduct').value;
    let rank = ''
    if(averageStu < 4.5 ){
        rank = "Yếu"
    }else if ( 5 <= averageStu < 6.5 && conductStu == "Trung Bình"){
        rank = "Trung Bình"
    } else if( 6.5 < averageStu < 8 && conductStu == "Khá"){
        rank = "Khá"
    }else if(averageStu > 8 && conductStu == "Giỏi"){
        rank = "Giỏi"
    }
    let newStu = new Student(id, nameStu, mathStu, physicalStu, englishStu, averageStu, conductStu, rank)
    myClass.listStudents.push(newStu)
    showList()
}
function editStu(index){
    document.getElementById('display').innerHTML = `
    <input type="number" id="editId" placeholder="Nhập số thứ tự" value="${listStu[index].id}">
    <input type="text" id="editName" placeholder="Nhập tên sinh viên" value="${listStu[index].name}">
    <input type="number" id="editMath" placeholder="Nhâp điểm toán" value="${listStu[index].id}">
    <input type="number" id="editPhysical" placeholder="Nhập điểm vật lý" value="${listStu[index].physicalScore}">
    <input type="number" id="editEnglish" placeholder="Nhập điểm anh văn" value="${listStu[index].englishScore}">
    <input type="text" id="editConduct" placeholder="Nhập hạnh kiểm" value="${listStu[index].conductClassification}">
    <button onclick="update(${index})">Cập Nhập</button>`
}
function update(index) {
    let id = document.getElementById('editId').value;
    let updateName = document.getElementById('editName').value;
    let updateMath = parseFloat(document.getElementById('editMath').value)
    let updatePhysical = parseFloat(document.getElementById('editPhysical').value);
    let updateEnglish = parseFloat(document.getElementById('editEnglish').value);
    let updateAverage = ((updateMath+updatePhysical+updateEnglish)/3).toFixed(1)
    let updateConduct = document.getElementById('editConduct').value;
    let updateRank = ""
    if(updateAverage < 4.5 ){
        updateRank = "Yếu"
    }else if ( 5 <= updateAverage < 6.5 && updateConduct == "Trung Bình"){
        updateRank = "Trung Bình"
    } else if( 6.5 < updateAverage < 8 && updateConduct == "Khá"){
        updateRank = "Khá"
    }else if(updateAverage > 8 && updateConduct == "Giỏi"){
        updateRank = "Giỏi"
    }
    let updateStu = new Student(id, updateName, updateMath, updatePhysical, updateEnglish, updateAverage, updateConduct, updateRank)
    myClass.update(index, updateStu)
    showList()
}
function deleteStu(index){
    let ok = confirm("Bạn có muốn xóa sinh viên này không ???")
    if(ok){
        myClass.delete(index)
        showList()
    }else {
        alert("Thao tác xóa đã hủy")
    }
}
showList()