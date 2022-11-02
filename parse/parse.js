const fs = require('fs')
const studentsObj = JSON.parse(fs.readFileSync('raw_data.json', 'utf8'));
let studentsList = Object.keys(studentsObj).map((key) => [key, ...Object.values(studentsObj[key])]).sort((a, b) => {
    if (a[1] < b[1]) {
        return -1;
    } else if (a[1] > b[1]) {
        return 1;
    }
    return 0;
});

let csv = `"id", "name", "chinese", "english", "math", "social", "science"\n`;



for (let student of studentsList) {
    csv += `"${student[1]}","${student[0]}",`;
    for (let transcript of student[2]) {
        csv += `${transcript.score.replace(/[^0-9]/ig, "")},`;
    }
    csv = csv.slice(0, -1);
    csv += '\n';
}

fs.writeFile('clean_data.csv', "\uFEFF" + csv, { encoding: "utf8" }, function (err) {
    if (err) throw err;
});
