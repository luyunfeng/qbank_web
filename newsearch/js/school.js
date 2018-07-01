	$(document).ready(function () {
		var code = GetQueryString("code");
		var allSchoolData = [];
		$.get("http://111.231.85.149:10000/zzb/getAvailableSchoolBy3Class/" + code, function (data) {
			tmpData(data);
            console.log(data);
			allSchoolData = data||[];
		});

		$("#typeSelect").change(function(){

			if (allSchoolData.length === 0) {
				return;
			}
			var key = $(this).val();
			if(key == -1){
				return;
			}
			var result = [];
			allSchoolData.forEach(function (value, index) {
				if (value.subject === key) {
					result.push(value)
				}
			});
			tmpData(result);
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
		data.forEach(function (item) {
			var marjorArr = item.requireString.split("、");
			var marjorStr = "";
			marjorArr.forEach(function (value, index) {
				if ((index + 1) != marjorArr.length) {
					value += "、";
				}
				if ((index + 1) % 2 === 0) {
					value += "<br>";
				}
				marjorStr += value;
			});

			str = str + "<div class='content'>"
			str = str + "<div class='title'>"
			str = str + "<div style= 'width:30%;'>" + item.shcoolname + "</div>"
			str = str + "<div style= 'width:20%;'>" + item.subject + "</div>"
			str = str + "<div style= 'width:20%;'>" + item.batch + "</div>"
			str = str + "<div style= 'width:27%; display:flex;flex-direction: row;'>"
			str = str + "<div>学校代码：</div>"
			str = str + "<div>" + item.code + "</div>"
			str = str + "</div>"
			str = str + "</div>"

			str = str + "<div class='school-item'>"
			str = str + "<div class='item-left'>专业名称：</div>"
			str = str + "<div class='item-right'><a href='../score/index.html?schoolName="+item.shcoolname+"&subjectName="+item.subjectName+"'>"+item.subjectName + "(点击查看分数线)</a></span></div>"
			str = str + '</div>'

			str = str + "<div class='school-item'>"
			str = str + "<div class='item-left'>专业代号：</div>"
			str = str + "<div class='item-right'>" + item.subjectCode + "</div>"
			str = str + '</div>'

			str = str + "<div class='school-item'>"
			str = str + "<div class='item-left'>年级：</div>"
			str = str + "<div class='item-right'>" + item.grade + "</div>"
			str = str + '</div>'

			str = str + "<div class='school-item'>"
			str = str + "<div class='item-left'>计划招生：</div>"
			str = str + "<div class='item-right'>" + item.planNum + "</div>"
			str = str + '</div>'

			str = str + "<div class='school-item'>"
			str = str + "<div class='item-left'>学费：</div>"
			str = str + "<div class='item-right'>" + item.shcoolFee + "</div>"
			str = str + "</div>"

			str = str + '<div style="height: auto; word-wrap:break-word;text-align:center;display:flex;flex-direction: row;">'
			str = str + "<div class='item-left'>专业限制：</div>"
			str = str + "<div class='item-right'>" + marjorStr + "</div>"
			str = str + '</div>'
			str = str + '</div>'
		})
    console.log(str);
		$(".container").html(str);
	}
