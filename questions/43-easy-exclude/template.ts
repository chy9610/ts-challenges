type MyExclude<T, U> = T extends U ? never : T;

type r4 = 'a' | 'b' | 'c'
type r5 = 'a'

type r3 = MyExclude<r4, r5>


//js
function MyExclude(T: string | any[], U: any[]) {
    const res = []

    for (let i = 0; i < T.length; i++) {
        const t = T[i];

        // let todo = true;

        // for (let j = 0; j < U.length; j++) {
        //     const u = U[j];

        //     if(t !== u) {
        //         todo = false
        //     }
        // }

        // if(!todo) {
        //     res.push(t)
        // }

        if (!U.includes(t)) {
            res.push(t)
        }

    }


    return []
}