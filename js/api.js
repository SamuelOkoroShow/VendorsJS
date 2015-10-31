var myDataRef = new Firebase('https://resplendent-inferno-1454.firebaseio.com/Companies/Zappos/Campaigns/Cloths/Data');

var myBudgetRef = new Firebase('https://resplendent-inferno-1454.firebaseio.com/Companies/Zappos/Campaigns/Cloths/');

function saveAPI(data){

myBudgetRef.update({
  "Budget": data
});
    
    myBudgetRef.on("child_changed", function(snapshot) {
  var changedPost = snapshot.val();
  alert("Success!");
});
    
}