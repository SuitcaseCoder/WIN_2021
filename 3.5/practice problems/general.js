// ***** ONE *****
//Given a string, find the longest subsequence consisting of a single character.  Example: longest("ABAACDDDBBA") should return  D

// ***** TWO *****

// // Make a program that filters a list of strings and returns a list with only your friends name in it.

// // If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// // Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]


// ---------- SOLUTIONS -------------

// *** ONE ***
// function consecutive(str)
// {
//   var arr = str.split('');
//   var object = {};
//   var pChar = '';
//   var baseCount = 0;
//   var maxCount = 0;

//   for(var i=0; i<=arr.length; i++)
//   {
//     if(baseCount > maxCount)
//     {
//       maxCount = baseCount;
//       object = {};
//       object[pChar] = maxCount;
//     }

//     var char = arr[i];
//     if(pChar !== '' && char != pChar)
//     {
//       baseCount = 0;
//     }
//     baseCount++;
//     pChar = char;
//   }
//   return object;
// }


// console.log(consecutive("AABCDDBBBEEEEA"))

// *** TWO ***
// function friend(friends) {
//     //   create new empty array for friends
//     let actualFriends = [];
  
//     //   loop through array of friends
//     friends.map((friend) => {
//       console.log(friend);
//       //   get the length of the string being passed in
//       let length = friend.length;
//       console.log(length);
  
//       //  if length == 4 push to empty arr
//       if (length === 4) {
//         actualFriends.push(friend);
//       }
//       console.log(actualFriends);
//     });
//     return actualFriends;
//   }
  
//   console.log(friend(["Ryan", "Kieran", "Mark"]));
  
//   // alternative solution:
//   function friendTwo(friends) {
//     return friends.filter((n) => n.length === 4);
//   }
  
//   console.log(friendTwo(["Ryan", "Kieran", "Mark"]));

//  *** THREE ***
