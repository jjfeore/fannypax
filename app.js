'use strict';

function drawPage() {
  setInterval(checkBanzai, 10000);
  setInterval(checkWavy, 10000);
  setInterval(checkRyann, 10000);
  setInterval(checkMira, 10000);
}

function checkBanzai() {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_login=banzaibaby',
    headers: {
      'Client-ID': '6mrlp3nz5f0bitqfio2p4u8r28mtmf'
    },
    type: 'GET',
    success: function(result) {
      if (result.data.length > 0) {
        $('#banzai-img').css('box-shadow', '0 0 6px 6px #f00');
      }
      else {
        $('#banzai-img').css('box-shadow', '0 0 0 0 #0f0');
      }
    }
  });
}

function checkMira() {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_login=xmiramira',
    headers: {
      'Client-ID': '6mrlp3nz5f0bitqfio2p4u8r28mtmf'
    },
    type: 'GET',
    success: function(result) {
      if (result.data.length > 0) {
        $('#mira-img').css('box-shadow', '0 0 6px 6px #f00');
      }
      else {
        $('#mira-img').css('box-shadow', '0 0 0 0 #0f0');
      }
    }
  });
}

function checkRyann() {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_login=theonlyryann',
    headers: {
      'Client-ID': '6mrlp3nz5f0bitqfio2p4u8r28mtmf'
    },
    type: 'GET',
    success: function(result) {
      if (result.data.length > 0) {
        $('#ryann-img').css('box-shadow', '0 0 6px 6px #f00');
      }
      else {
        $('#ryann-img').css('box-shadow', '0 0 0 0 #0f0');
      }
    }
  });
}

function checkWavy() {
  $.ajax({
    url: 'https://api.twitch.tv/helix/streams?user_login=wavy',
    headers: {
      'Client-ID': '6mrlp3nz5f0bitqfio2p4u8r28mtmf'
    },
    type: 'GET',
    success: function(result) {
      if (result.data.length > 0) {
        $('#wavy-img').css('box-shadow', '0 0 6px 6px #f00');
      }
      else {
        $('#wavy-img').css('box-shadow', '0 0 0 0 #0f0');
      }
    }
  });
}
