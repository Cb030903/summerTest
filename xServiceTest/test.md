##summer.UMScanner���ṩ��ά��ɨ��ķ������
### summer.UMScanner.open ()
   �򿪶�ά��ɨ��
##### ������ʾ
    summer.UMScanner.open({
        callback : function (arges){
            var qq =args  // ����ֵ object����   keyֵΪresult
        }
    })

### summer.UMScanner.generateQRCode()
   ���ַ������ɶ�ά��
##### ������ʾ
    var twocodepath=summer.UMScanner.generateQRCode({
        size : 30,//��ά�������εĿ��
        content : "text"//���ɶ�ά�������Դ����
    });
    //��������string,��ͼƬ·��
    $('.pic').attr('src',twocodepath)

## [����github���ص�ַ](https://github.com/iuapmobile/summerTest/tree/master/xServiceTest/qScanner)