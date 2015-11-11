/**���������� ������������ ����������
 *  ���� ������� sum, ������� ��������� ��� �������� �������:
 function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}
 alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
 �������� ����������� ������� sumArgs(), ������� ����� ����������� ��� ���� ���������:
 ��� ������� ��������� ����� reduce � arguments, ��������� call, apply ��� ����������� ������.
 P.S. ������� sum ��� �� �����������, ��� ��������� � �������� �������
 ������������� reduce ��� ������� ������.
 */

function sumArgs() {
    return [].reduce.call(arguments, function(a, b){
        return a + b;
    });
}
alert( sumArgs(1, 2, 3) ); // 6
