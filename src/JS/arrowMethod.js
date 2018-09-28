let arrowM1 = () => ({v: 10});
let arrowM2 = () => {
    return {
        v: 10
    }
}

export function ButtonClicked() {

    let a = arrowM1();
    let b = arrowM2();

    console.log(a.v + b.v);

}

