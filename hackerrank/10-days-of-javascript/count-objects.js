function getCount(objects) {
    let count = 0; 
    objects.forEach((o) => {
        //console.log('o:', o);
        //console.log(o.x == o.y);
        if (o.x == o.y) {
            count++;
        }
        //console.log("x:", o.x, "y:", o.y);
    });
    return count;
}
