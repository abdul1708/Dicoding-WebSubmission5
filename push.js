let webPush = require('web-push');

const vapidKeys = {
  "publicKey": "BAXsAB0l3WAu68wXv8QA-TBSLnd-N_-NmdVu3XZMrxuEfmsBL2g9HIVccU0P0R7KCThq3l31hcXYzkudgcvxKpw",
  "privateKey": "4JdeP32D9aGA40dAhynBBKxK7UybuqLYyfr35MJ0IkI"
};


webPush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)
const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/cWXR7TzkP6g:APA91bGfWiA3PPrb-Qn7nZ17i4Vh3ibv6DVzgWs5hShhLeB8LS7biIp67-hzqh-LQTEidxcf5e1aJl2kGUVzwe6ywVrUi7lfEyL10zn5vwrwjBhV9OwvctiSY1FlJlj7Exn2BSiP6z5P",
  "keys": {
    "p256dh": "BL166aFLyKxwPyswjHC9UpS83z4v17S6GWFgc9Bn3NIhRdgJdrrwk+plKP0xyGGM/peSVKbMi58+NXN+kNov90o=",
    "auth": "lPvXixTFLtyAqiAjEfHVpA=="
  }
};
const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

const options = {
  gcmAPIKey: '360637671937',
  TTL: 60
};
webPush.sendNotification(
  pushSubscription,
  payload,
  options
);