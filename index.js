// First way of accessing an element
document.querySelector("#title").innerHTML += "Frontend Simplified"

//Change CSS


function changeTitleToRed() {
  document.querySelector(".title").style.color = 'red'
  console.log('clicked');
} 

// second was of accessing an element


// let users = [
// {
//   usermane: 'Jeffrey',
//   password: 'test257',
//   email: 'jrobinson11504@gmail.com',
//   subscriptionStatus: 'VIP',
//   discordID: 'Jeffis',
//   lessonsCompleted: [0, 1, 2, 3]
// } ]

// function login(email, password) {
//   for (let i = 0; i < users.length; ++i){
//     if (users[i].email === email) {
//     console.log(users[i]);
//     if (users[i].password === password) {
//       console.log('log the user in -- the details are correct')
//     }
//     else {
//       console.log ('password is incorrect - try again')
//      }
//     }
//   }
// }

// login('jrobinson11504@gmail.com', 'test257')


// function register(
//   username, 
//   email, 
//   password, 
//   subscriptionStatus, 
//   discordId, 
//   lessonsCompleted) {
//    let user = {
//     username: name,
//     email: email,
//     password: password,
//     subscriptionStatus: subscriptionStatus,
//     discordId: discordId,
//     lessonsCompleted: lessonsCompleted

//    }
//    users.push(user);
//   }

//   register(
//     "zen",
//     "zen@frontendsimplified",
//     "zen234",
//     "VIP",
//     "Zen#1111",
//     [0, 1]
//   );

//   console.log(users);

//let grades = ['A+', 'A', 'FAIL']
//let goodGrades = []

//for (let i = 0; i < grades.length; ++i)
  //if (grades[i] !== 'FAIL') {
    //goodGrades.push(grades[i])
  //}
  //console.log(goodGrades);



//let goodGrades = grades.filter(element => element !== 'FAIL')

//console.log(goodGrades)
