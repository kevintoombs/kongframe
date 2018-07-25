var tickInterval = 1000;
setTimeout(function () { Tick(); }, tickInterval);
addEventListener('message', function (message) {
    console.log('in webworker', message);
});
function Tick() {
    setTimeout(function () { Tick(); }, tickInterval);
    //console.log('worker tick');
    var post = postMessage;
    //let diff = time.now();
    var time = Date.now();
    post(time);
}
