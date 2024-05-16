class Student{
    id;
    name;
    mathScore;
    physicalScore;
    englishScore;
    averageScore;
    conductClassification;
    ranked;

    constructor(idStu, nameStu, mathStu, physicalStu, englishStu, averageStu, conductStu, rankStu) {
        this.id = idStu;
        this.name = nameStu;
        this.mathScore = mathStu;
        this.physicalScore = physicalStu;
        this.englishScore = englishStu;
        this.averageScore = averageStu;
        this.conductClassification = conductStu;
        this.ranked = rankStu;
    }
}