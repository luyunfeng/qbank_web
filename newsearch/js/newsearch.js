	$(function () {
		var allSecondClass = [];
		$(document).ready(function () {
			$.get("http://111.231.85.149:10000/zzb/getAllSecondClass", function (data) {
				tempData(data);
				allSecondClass = data || [];
			});
		});

		$("#search_btn").click(function () {
			if (allSecondClass.length === 0) {
				return;
			}
			var key = $("[name='marjor']").val(); //获取搜索的关键字
			var result = []; //声明返回的数组
			allSecondClass.forEach(function (value, index) { //遍历全部分类
				if (value.name.indexOf(key) !== -1) { //判断分类中是否含有关键字
					result.push(value) //含有关键字，添加到返回数组里
				}
			});
			tempData(result);
		});
	})

	// 专业列表
	function tempData(data) {
		$(".container").html("");
		var str = "";
		data.forEach(function (item, index) {
			str = str + "<div onclick = 'jumpToMajor(this)' data-code=" + item.code + " class='content'>";
			str = str + "<div class='major-code-tips'>专业代码:</div><div class='major-code'>" + item.code + "</div>"
			str = str + "<div class='major-name-tips'>专业名称:</div><div class='major-name'>" + item.name + "</div></div>"
		})
		$(".container").html(str);
	}

	function jumpToMajor(item) {
		var code = $(item).attr("data-code");
		window.location.href = "marjor.html?code=" + code;
	}