//
// ������� 1 (������ � ������)
// ���� ������ �� �����, ����� � ������ ������.
// ���������� ��� ���������� � ������ ��������� ������ �� ����� ��� �����.
// �������� ����� extractNumber ��� extractString, ������� ����� ���������� ������.
//
var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};
var ages = [];
var name = [];
var a = {
    extractNumber: function () {
        for (var i in obj) {
            if (typeof(obj[i]) == 'number') {
                ages.push(obj[i]);
            }
        }
    },
    extractString: function () {
        for (var i in obj) {
            if (typeof(obj[i]) != 'number') {
                name.push(obj[i]);
            }
        }
    }
};

a.extractNumber();
a.extractString();
console.log(ages);
console.log(name);