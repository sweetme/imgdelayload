$(function () {
    $("img").delayLoading({
        //defaultImg: "__PUBLIC__/images/img/loading.gif",           // Ԥ����ǰ��ʾ��ͼƬ
        errorImg: "",                        // ��ȡͼƬ����ʱ�滻ͼƬ(Ĭ�ϣ���defaultImgһ��)
        imgSrcAttr: "originalSrc",           // ��¼ͼƬ·��������(Ĭ�ϣ�originalSrc��ҳ��img��src����ҲҪ�滻ΪoriginalSrc)
        beforehand: 0,                       // Ԥ����ǰ�������ؼ���ͼƬ(Ĭ�ϣ�0)
        event: "scroll",                     // ��������ͼƬ�¼�(Ĭ�ϣ�scroll)
        duration: "normal",                  // ����Ԥ������(��)�ٶ�֮һ���ַ���("slow", "normal", or "fast")���ʾ����ʱ���ĺ�����ֵ(�磺1000),Ĭ��:"normal"
        container: window,                   // ������ص�λ������(Ĭ�ϣ�window)
        success: function (imgObj) { },      // ����ͼƬ�ɹ���Ļص�����(Ĭ�ϣ���ִ���κβ���)
        error: function (imgObj) { }         // ����ͼƬʧ�ܺ�Ļص�����(Ĭ�ϣ���ִ���κβ���)
    });
});