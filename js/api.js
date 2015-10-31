var myDataRef = new Firebase('https://resplendent-inferno-1454.firebaseio.com/Companies/Zappos/Campaigns/Cloths/Data');

myDataRef.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
console.log(newPost);
});