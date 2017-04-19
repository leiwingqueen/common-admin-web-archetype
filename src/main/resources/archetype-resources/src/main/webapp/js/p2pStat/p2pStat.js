var p2pStat = avalon.define({
	$id : 'p2pStat',
	list : []
})

function searchData(page, disR) {
	var fn = arguments.callee;
	var req = 'page=' + (page || 1) + '&size=' + (disR = disR || 20);
	$('#fm').find('input,select,textarea').each(function() { // 遍历搜索框输入的内容作为参数
		if(this.value && this.value != '') req += '&' + this.name + '=' + this.value.replace(/\n/g, ',');
	});
	var url = '/p2pStat/p2pStat.do?'+req;
	$.post(url,function(json) {
		if(!json.success) {
			p2pStat.lists = []
			$.tools.commonPage('#common_page', fn, 0, 0, 0, 0);
			return;
		}
		var count = json.object.count, list = json.object.list, p = json.object.page, pCount = json.object.pageCount;
		p2pStat.list =  json.object.list;
		$.tools.commonPage('#common_page', fn, disR, count, p, pCount);
	});
}

//初始化时间
function initDate() {
	document.getElementById("j_end_time").value = $.sysop.kit.date
			.getDateStr(1)
			+ " 23:59:59";
	
	var date = new Date();
	var year = date.getFullYear();
    var month = date.getMonth()+1;
    if (month<10){
        month = "0"+month;
    }
    var firstDay = year + '-' + month + '-01'+ " 00:00:00"  ;
	document.getElementById("j_start_time").value = firstDay;
	
}

$(function() {
	App.init();
	initDate()
	searchData();
})

avalon.scan()