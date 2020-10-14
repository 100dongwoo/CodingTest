process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
//     console.log(a);
//     console.log(b);
    let r;
    for (let i = 0; i < b; i++) {
        r = ''
        for (let j = 0; j < a; j++) {
            r += '*'
        }
        console.log(r)
    }
    // console.log(a)

});