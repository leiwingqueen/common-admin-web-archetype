var userBalanceStat = avalon.define({
	$id : 'userBalanceStat',
	list : []
})

function searchData(page, disR) {
	var fn = arguments.callee;
	var req = 'page=' + (page || 1) + '&size=' + (disR = disR || 20);
	$('#fm').find('input,select,textarea').each(function() { // 遍历搜索框输入的内容作为参数
		if(this.value && this.value != '') req += '&' + this.name + '=' + this.value.replace(/\n/g, ',');
	});
	var url = '/userBalanceStat/list.do?'+req;
	$.post(url,function(json) {
		if(!json.success) {
			userBalanceStat.lists = []
			$.tools.commonPage('#common_page', fn, 0, 0, 0, 0);
			return;
		}
		var count = json.object.count, list = json.object.list, p = json.object.page, pCount = json.object.pageCount;
		userBalanceStat.list =  json.object.list;
		$.tools.commonPage('#common_page', fn, disR, count, p, pCount);
	});
}

//初始化时间
function initDate() {
	document.getElementById("startTime").value = $.sysop.kit.date
			.getDateStr(1)
			+ " 00:00:00";
	
	document.getElementById("endTime").value = $.sysop.kit.date
	.getDateStr(1)
	+ " 23:59:59";
	
}

$(function() {
	App.init();
	initDate();
	searchData();
})

avalon.scan()