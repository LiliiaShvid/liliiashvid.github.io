//������� 8 (���������� css ������)
//������� ������ css ������� �� ��������.
//var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
//���������� �� ����� ������� �������� ������ � ����������� ������� ������� (��� ����������) ���������������
// �� ������� ������������� (�������� ����� ������������ - �������).
//���� ������ ������������ ���������� ���������� ��� - ����� ���� �� ����� ����� ����� ������.
//result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];
//
var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];
newarr = [];
for(var i=0; i<arr.length; i++){
    if(newarr.indexOf(arr[i]) === -1){
        newarr.push(arr[i]);
    }
}
console.log(newarr.toString());