socket= new WebSocket('ws://'+window.location.host+':5000');
socket.onopen= function() {
    socket.send('hello');
    console.log('sent hello');
};
socket.onmessage= function(s) {
    alert('got reply '+s);
};