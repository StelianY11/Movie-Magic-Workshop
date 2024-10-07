import jsonwebtoken from "jsonwebtoken";
import util from "util";

// Convert callback based async function to promise based async function
// Custom lib
// export const verify = (token, secret, option) => {
//     const promise = new Promise((resolve, reject) =>{
//         jsonwebtoken.verify(token, secret, option, (err, decoded) => {
//             if(err) {
//                 return reject(err);
//             }

//             resolve(decoded);
//         });
//     });

//     return promise;
// }

const verify = util.promisify(jsonwebtoken.verify);
const sign = util.promisify(jsonwebtoken.sign);

export default {
    verify,
    sign
}