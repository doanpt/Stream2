const $ = require('jquery');

function getIceObject(cb) {
    $( document ).ready( function () {
         $.ajax ({
             url: "https://global.xirsys.net/_turn/Stream/",
             type: "PUT",
             async: false,
             headers: {
               "Authorization": "Basic " + btoa("doanpt93cntt:19753fc0-5f1f-11e7-ab36-6abea84ebd82")
             },
             success: function (res){
                cb(res.v.iceServers);
             }
         });
     })
}

module.exports = getIceObject;