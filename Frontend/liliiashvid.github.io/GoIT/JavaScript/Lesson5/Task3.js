/**
 * ������� 3 (�����������)
 * �������� ���, �������:
 *
 *����������� �� ������� �������� ��� ������ prompt � ��������� �� � �������.
 *����������� ����, ��� ������ ���������� ����� ������ ������, �� ����� ��� ����� �������.
 *��� ���� ���� 0 �� ������ ����������� ����, ��� ����������� �����.
 *������� ����� ���� �������� ������� ����� ���� ���������.
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
var values = [],
    result = 0,
    value;

do {
    value = parseInt(prompt('Please enter number'));
    values.push(value);

} while (isNumeric(value));

for (var i = 0; i < values.length - 1; i++) {
    result += values[i];
}

console.log(result);