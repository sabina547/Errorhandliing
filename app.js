const user = {email:'karkisabina869@gmail.com'};

try{
    //Produce a ReferenceError
   // myFunction();

   //Produce a TypeError
   //null.myFunction();

   //Will produce SyntaxError
   //console.log(eval('2+2'));
   //eval('Hello World');

   //Will produce a URIError
  // decodeURIComponent('%');

  if(!user.name) {
      throw 'User has no name';
  }

} catch(e) { // here (e) refers to error
    console.log(e);
    //console.log(e.message);
    //console.log(e.name);
    //console.log(e instanceof TypeError);
} finally {
    console.log('Finally runs reguardless of results...');

}

console.log('Program continues...');