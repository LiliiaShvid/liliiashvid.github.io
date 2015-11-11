//������� 7 (���������)
//��������� � �����, ��������� �� ����������� ���������� ���������� ����, �� � ������ �������.
// ��������:��� - ��� ������ - ������ ������ - ������ - ������ �������� ������� anClean(arr), ������� ���������� ������ ����, ��������� �� ��������.
function anClean(arr) {
    var result = [],
        obj = {},
        prop;

    for (var i = 0; i < arr.length; i++) {
        prop = arr[i].toLowerCase().split('').sort().join('');
        obj[prop] = arr[i];
    }
    for (var key in obj) result.push(obj[key]);
    return result;
}

var arr = ['���', '������', '������', '���', '������', '������', '������'];

console.log(anClean(arr));