var $messageList;
var _messagesRef;

Messages = {

  /* メッセージ投稿フォーム 初期化
  -------------------------------------------------------------------- */
  initMsg() {

    // DOM を登録しておく
    $messageList = document.getElementById('messageList');

    // メッセージ投稿フォーム イベント登録
    $('#newMessageForm').submit(function() {

      var comment = $('#newMessage').val();

      _messagesRef.push({
        uid: User.uid,
        text: comment,
        time: firebase.database.ServerValue.TIMESTAMP,
      });

      return false;
    });

  },

  /* メッセージを Firebaseから取得・監視し、画面上に表示させる
  -------------------------------------------------------------------- */
  onWatchMsg: function (currentRoom) {

    $messageList.innerHTML = '';
    _messagesRef = firebase.database().ref('messages/' + currentRoom);
    _messagesRef.off('child_added');
    _messagesRef.off('child_removed');
    _messagesRef.on("child_added", function(snapshot) {
      var msg = Object.assign(snapshot.val(), {
        key: snapshot.key
      })
      Messages.displayMessage(msg);
    });
    _messagesRef.on("child_removed", function(snapshot) {
      Messages.removeMessage(snapshot.key);
    });
  },

  displayMessage: function (msg) {
    var $div = document.createElement('div');
    $div.innerHTML = msg.text;
    $div.id = msg.key;

    var $x = document.createElement('span');
    $x.innerHTML = '[x]';
    $($x).on('click', function() {
      _messagesRef.child(msg.key).remove();
    })

    $div.append($x);
    $messageList.append($div);
  },

  removeMessage: function (msgId) {
    $($messageList).find('#' + msgId).remove();
  }

}
