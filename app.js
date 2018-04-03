'use strict';

function drawPage() {
  setInterval(checkOnline, 10000);
}

function checkOnline() {
  let streamerDict = {};
  streamerDict[102090784] = '#banzai-img';
  streamerDict[62334719] = '#ryann-img';
  streamerDict[81578595] = '#wavy-img';
  streamerDict[85919636] = '#mira-img';

  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_login=banzaibaby&user_login=wavy&user_login=theonlyryann&user_login=xmiramira',
    headers: {
      'Client-ID': '6mrlp3nz5f0bitqfio2p4u8r28mtmf'
    },
    type: 'GET',
    success: function(result) {
      $('.avatars').css('box-shadow', '0 0 0 0 #0f0');
      for (let streamer of result.data) {
        $(streamerDict[streamer.user_id]).css('box-shadow', '0 0 6px 6px #f00');
      }
    }
  });
}
