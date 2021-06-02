// // // //`name`

// // // * `id`

// // // * `email`

// // // * `getName()`

// // // * `getId()`

// // // * `getEmail()`

// // // * `getRole()`&mdash;returns `'Employee'`

// describe("Employee", () => {
//     describe("Create employee object", () => {
//         it("should have a first and last name", () => {
//             const employee = new Employee("Tony Stark", 123456, "tstark@gmail.com");

//             const isFullName = () => {
//                 if (employee.name.indexOf(' ')=== -1) {
//                     return false
//                 }
//                     else return true
//             }
//         expect(isFullName()).toEqual(true);  
//         })
        
//         it("should have an email address", () => {
//             const employee = new Employee("Tony Stark", 123456, "tstark@gmail.com");

//             const hasEmail = () => {
//                 if (employee.name.indexOf(' ')=== -1) {
//                     return false
//                 }
//                     else return true
//             }
//         expect(hasEmail()).toEqual(true);  
//         })
//     })
    
// })