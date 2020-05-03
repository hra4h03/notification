const push = require("web-push");

const vap_id_keys = {
  publicKey:
    "BDdUtMq-1knzt83-VhVb2ekZw3HFRmmKDB81lwR6oyZxSaKdtd4uKtmAnOl6sPMYH989aDrTvgfwawIerH9S20I",
  privateKey: "M23Gkp9DByKJ5-d0ra7vd66E3fBhLSTXMJgu1sZPmRw",
};
console.log(vap_id_keys);

push.setVapidDetails(
  "mailto:hr.ovakimyan.03@gmail.com",
  vap_id_keys.publicKey,
  vap_id_keys.privateKey
);
let sub;
push.sendNotification(sub, "test message");
