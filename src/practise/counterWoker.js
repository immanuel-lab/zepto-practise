// countWorker.js

function count() {
    let count = 0;

        for (let i = 0; i < 100; i++) {
        count += i;
    }
    return count;
}

onmessage = function(e) {
    const result = count();
    postMessage(result);
}


export default count;
