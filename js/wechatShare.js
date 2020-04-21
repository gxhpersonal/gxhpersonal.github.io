
(function (e) {
   
    var weixinConfigData = {};
    $(function () {
        $.ajax({
            type: "GET",
            url: "/Api/Activity/GetWeixinAPIConfig",
            contentType: "application/json",
            data: { "url": window.location.href },
            success: function (data) {
                weixinConfigData = data;
                wx.config({
                    debug: false,
                    appId: weixinConfigData.AppId,
                    timestamp: weixinConfigData.Timestamp,
                    nonceStr: weixinConfigData.NonceStr,
                    signature: weixinConfigData.signature,
                    jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'translateVoice',
                        'startRecord',
                        'stopRecord',
                        'onRecordEnd',
                        'playVoice',
                        'pauseVoice',
                        'stopVoice',
                        'uploadVoice',
                        'downloadVoice',
                        'chooseImage',
                        'previewImage',
                        'uploadImage',
                        'downloadImage',
                        'getNetworkType',
                        'openLocation',
                        'getLocation',
                        'hideOptionMenu',
                        'showOptionMenu',
                        'closeWindow',
                        'scanQRCode',
                        'chooseWXPay',
                        'openProductSpecificView',
                        'addCard',
                        'chooseCard',
                        'openCard'
                    ]
                });
            },
            error: function () {
                //alert("weixin api error.");
            }

        });
    });

    window.WeixinShareMobile = {
        weixinShare: function (param) {
            wx.error(function (res) {
            });
            wx.ready(function () {
                wx.onMenuShareAppMessage({
                    desc: param.descContent,
                    title: param.shareTitle,
                    link: param.lineLink,
                    imgUrl: param.imgUrl,
                    trigger: function (res) {
                        //alert('用户点击发送给朋友');
                    },
                    success: function (res) {
                        // alert('已分享');

                    },
                    cancel: function (res) {
                        //alert('已取消');
                    },
                    fail: function (res) {
                        //alert(JSON.stringify(res));
                    }
                });


                wx.onMenuShareTimeline({
                    desc: param.descContent,
                    title: param.friendTitle == undefined ? param.shareTitle : param.friendTitle,
                    link: param.lineLink,
                    imgUrl: param.imgUrl,
                    trigger: function (res) {
                        //alert('用户点击发送给朋友');
                    },
                    success: function (res) {
                        //alert('已分享');

                    },
                    cancel: function (res) {
                        //alert('已取消');
                    },
                    fail: function (res) {
                        // alert(JSON.stringify(res));
                    }
                });

            });

      
        }
    };

})();