
// 汎用format関数。.NET風
String.prototype.format = function() {
  var args = arguments[0];
  return this.replace(/{(\d+)}/g, function(match, number) { 
    return typeof args[number-1] != 'undefined'
      ? args[number-1]
      : match
    ;
  });
};


// ここがモーダルになる。想定。
function showMsg(id, parameters) {
	if (parameters.length > 0) {
		alert(systemErrorMessage[id].format(parameters));
	} else {
		alert(systemErrorMessage[id]);
	}
}
var systemErrorMessage = {
        "EC-E-0001":"ログインに失敗しました。メールアドレス（ユーザーID）又はパスワードが誤っています。",
        "EC-E-0003":"現在のパスワードが誤っています。",
        "EC-E-0004":"すでにお気に入り登録されています。",
        "EC-E-TEST1":"{1}お気に入り{2}登録されています。{2}",
        "EC-E-TEST2":"{1}お気に入り{2}登録されています。{3}",
        "EC-E-TEST3":"すでにお気に入り登録されています。"
};

// test
showMsg.call(undefined, "EC-E-TEST3", []);
showMsg.call(undefined, "EC-E-TEST1", ["引数1","引数2","引数3"]);
showMsg.call(undefined, "EC-E-TEST2", ["引数1","引数2","引数3"]);

