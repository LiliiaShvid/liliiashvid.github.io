//������� 6 (���������� �������� �������)
//�������� ������� unique(arr), ������� ���������� ������, ���������� ������ ���������� �������� arr (arr � ������ �����).
function unique(arr) {
    var result = {};

    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        result[word] = true;
    }
    return Object.keys(result);
}

var strings = ['������', '������', '����', '����', '����', '����', '������', '������', '8-()'];
console.log(unique(strings));