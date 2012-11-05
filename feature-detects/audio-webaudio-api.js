define(['Modernizr'], function( Modernizr ) {
  // Web Audio API
  // https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html
  // By Addy Osmani
  Modernizr.addTest('webaudio', !!(window.webkitAudioContext || window.AudioContext), {
    aliases : ['audio-webaudio-api']
  });
});
