var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        console.log(this);
        this.status.count--;
        return this.status.count;
    },
    getCandy2: () => {
        console.log(this);
        this.status.count--;
        return this.status.count;
    }
};

// var getCandy = candyMachine.getCandy.bind(candyMachine);
try {
    var getCandy = candyMachine.getCandy;
    getCandy();
    var count = candyMachine.status.count;
    console.log('count? ', count);
} catch (error) {
    // Cannot read property 'count' of undefined
}

try {
    var getCandy2 = candyMachine.getCandy2;
    getCandy2();
    var count = candyMachine.status.count;
    console.log('count? ', count);
} catch (error) {
    // Cannot read property 'count' of undefined
}

try {
    var getCandy = candyMachine.getCandy.bind(candyMachine);
    getCandy();
    var count = candyMachine.status.count;
    console.log('count? ', count);
} catch (error) {
    // no error
}


try {
    var getCandy2 = candyMachine.getCandy2.bind(candyMachine);
    getCandy2();
    var count = candyMachine.status.count;
    console.log('count? ', count);
} catch (error) {
    // Cannot read property 'count' of undefined
}



console.log('Done');
