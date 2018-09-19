// if we want to run automigate from Dockerfile 
  dataSource.automigrate('user', function (err) {
     users.forEach(function(act) {
       Users.create(act, function(err, result) {
         if(!err) {
           console.log('Record created:', result);
         }
       });
     });
   });

//original example
/*
  dataSource.automigrate('account', function (err) {
     accounts.forEach(function(act) {
       Account.create(act, function(err, result) {
         if(!err) {
           console.log('Record created:', result);
         }
       });
     });
   });
*/

