/**
 * 统一封装函数
 * @author yunfeng.lu
 * @date 2018年06月22日01:28:22
 *
 */
window.common = {
    // 统一请求url
    SERVER_URL: "http://weixin.zzbtk.com",
    //方法定义
    _mt: {
        getSubjectScore: "/zzb/getSubjectScore",
        getSchoolScore: "zzb/getSchoolScore",
        searchBySchoolNameAndSubjectName:"/zzb/searchBySchoolNameAndSubjectName"
    },
    getUrlByParamName(paramName) {
        var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)");
        var URL = decodeURI(window.location.search);
        var r = URL.substr(1).match(reg);
        if (r != null) {
            //decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码
            return decodeURI(r[2]);
        }
        return null;
    },

    // post 请求
    post: function (url, param, callback) {
        $.ajax({
            type: "POST",
            url: url,
            data: param,
            dataType: "json",
            contentType: 'application/json;charset=UTF-8',
            async: false,
            success: function (data) {
                if (callback != null) {
                    callback(data);
                } else {
                    return data;
                }
            }
        });
    },

    // get 请求
    get: function (url, param, callback) {
        $.ajax({
            type: "GET",
            url: url,
            data: param,
            dataType: "json",
            async: false,
            success: function (data) {
                if (callback != null) {
                    callback(data);
                } else {
                    return data;
                }
            }
        });

    }
};