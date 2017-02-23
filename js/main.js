$(function(){

  User.initUserForms();
  User.onAuthStateChanged();

  Messages.initMsg();
  Rooms.initRoom();

});