
/**
 * Created by jg on 2018/4/2.
 */



A = {n: 1};
B = A;
A.x = A = {n: 2};
console.log(A.x );
console.log(B.x );
console.log(B.n );