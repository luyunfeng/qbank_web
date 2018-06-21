$(document).ready(function () {
  var code = GetQueryString("code");
  $.get("http://111.231.85.149:10000/zzb/get3ClassBySecondClass/" + code, function (data) {
    console.log(data);
    tmpData(data);
  });
});

function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

function tmpData(data) {
  var str = "";
    data.forEach(function (item, index) {
			str = str + "<div onclick = 'jumpToSchool(this)' data-code=" + item.code + " class='content'>";
			str = str + "<div class='major-code-tips'>专业代码:</div><div class='major-code'>" + item.code + "</div>"
			str = str + "<div class='major-name-tips'>专业名称:</div><div class='major-name'>" + item.name + "</div></div>"
		})

  $(".container").html(str);
}

function jumpToSchool(item) {
  var code = $(item).attr("data-code");
  window.location.href = "school.html?code=" + code;

}