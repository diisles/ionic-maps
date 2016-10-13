// var currentUserInfo = null;
// var users = {};
//
// function userLocationUpdate(userInfo){
//
// if(!users[userInfo.id]) users[userInfo.id] = { id: userInfo.id};
//
// users[userInfo.id].name = userInfo.name;
// users[userInfo.id].latitude = userInfo.latitude;
// users[userInfo.id].longitude = userInfo.longitude;
// users[userInfo.id].timestamp = new Date().getTIme()
// refreshMarkers();
//
// }
//
// function refreshMarker(){
//
//
//
//   for (var id in users) {
//     var userInfo = users[id];
//
//     if (userInfo.marker){
//
//         //If we ahven't recieved any update from the user
//         // We remove the marker of mising user
//         if(userInfo.id != curentUserInfo.id &&
//         userInfo.timestamp + 1000*5 < new Date().getTime()){
//         userInfo.marker.setMap(null);
//         delete users[id];
//         continue;
//         }
//
//     }else{
//
//       // Create a marker for the new user
//       var marker = new google.maps.Marker({ map:map});
//       infowindow.setContent(marker.getTitle())
//       infowindow.open(map, marker);
//     };
//     userInfo.marker = marker;
//   }
//
//   //Move the markers
//   userInfo.marker.setTitle(userInfo.name);
//   userInfo.marker.setPosition(
//     new google.maps.LatLng(userInfo.latitude, userInfo.longitude));
//
// }
//
// //Refresh the markers every 5 seconds
// clearTimeout(refreshTimeout)
// refreshTimeout = setTimeout(refreshMarkers, 1000*5);
//
//
//
//
// currentUserInfo = initLocationSharing(userLocationUpdate);
