export function getDogs(req,res) {
    res.send([
        {name: 'Ryder', age: 4, breed: 'dumbass', gender: 'MN'},
        {name: 'Duke', age: 2, breed: 'Rotweiler', gender: 'M'}
    ]);
}

export function testApi(req,res){
    res.send({success: true, message: 'Were back!!'});
}