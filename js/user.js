User = {

  uid: '',

  /* ユーザーのフォーム初期化
  -------------------------------------------------------------------- */
  initUserForms: function () {

    $('#signIn').submit(function() {
      User.signIn();
      return false;
    });

    $('#login').submit(function() {
      User.login();
      return false;
    });

    $('#logout').on('click', function() {
      User.logout();
      return false;
    });

  },

  /* Firebaseを使ってログイン状態の監視開始
  -------------------------------------------------------------------- */
  onAuthStateChanged: function () {

    var $div = document.createElement('div');

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) { // ログイン中

        User.uid = user.uid;

        $div.innerHTML = `UID: ${user.uid}  <br> email: ${user.email}`;
        $('#userInfo').append($div);

        Rooms.fetchRooms();
        Messages.onWatchMsg('default');

      } else { // 未ログイン
        $div.innerHTML = 'ログインしていません。';
        $('#userInfo').append($div);
      }
    });

  },

  /* 新規登録・ログイン・ログアウトの処理 with Firebase
  -------------------------------------------------------------------- */
  signIn: function () {

    var email = $('#signInEmail').val();
    var password = $('#signInPass').val();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(err) {
        console.error('新規登録失敗', err);
      });

  },

  login: function () {

    var email = $('#loginEmail').val();
    var password = $('#loginPass').val();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(err) {
        console.error('ログイン失敗', err);
      });

  },

  logout: function () {

    firebase
      .auth()
      .signOut()
      .catch(function(err) {
        console.error("ログアウト失敗:", err);
      });

  }

}