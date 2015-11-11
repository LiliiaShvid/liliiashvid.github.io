/**
 * ������� 2 (��������� ��������� �������)
 * �������� ������� multiplyNumeric ������� ��������� �� ���� ������ � ���������� ������ � ������� ���
 * �������� �������� � ������� �������� �� 2.
 */

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};
    function multiplyNumeric(obj) {
        for (var value in obj) {
            if (! isNaN(obj[value])) {
                obj[value] *= 2;
            }
        }
        return obj;
    }

console.log(multiplyNumeric(image));