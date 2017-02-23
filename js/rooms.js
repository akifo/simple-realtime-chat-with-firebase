var $roomList;
var _roomsRef;
var _roomList;

Rooms = {


  /* グループ 初期化
  -------------------------------------------------------------------- */
  initRoom() {

    // DOM を取得しておく
    $roomList = document.getElementById('roomList');

    // Firebase の リファレンスを設定
    _roomsRef = firebase.database().ref('rooms');

    // フォームのイベント登録
    $('#newRoom').submit(function() {

      var roomName = $('#newRoomName').val();

      _roomsRef.child(roomName).setWithPriority({
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        createdByUID: User.uid,
      }, 2).then(function() {
        Messages.onWatchMsg(roomName);
      }).catch(function(err) {
        console.error("ルーム作成に失敗:", err);
      });

      return false;
    });

  },

  /* グループ一覧を Firebaseから取得・表示（監視はしていない）
  -------------------------------------------------------------------- */
  fetchRooms: function () {
    _roomsRef.off('value');
    _roomsRef.on("value", function(snapshot) {
      _roomList = snapshot.val();
      Rooms.displayRooms();
    });
  },

  /* グループ 表示
  -------------------------------------------------------------------- */
  displayRooms: function () {
    Object.keys(_roomList).forEach(key => {
      var $div = document.createElement('div');
      $div.innerHTML = key;
      Rooms.setClickRoomEvent($div, key);
      $roomList.append($div);
    });
  },

  /* グループ をクリックしたら そのグループのメッセージを表示させる
  -------------------------------------------------------------------- */
  setClickRoomEvent: function ($target, roomName) {
    $($target).on('click', function() {
      Messages.onWatchMsg(roomName);
    });
  }

}
