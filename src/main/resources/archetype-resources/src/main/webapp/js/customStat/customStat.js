var customStat = avalon.define({
	$id : 'customStat',
	list : []
})
var customService = avalon.define({
	$id : 'customService',
	list : {}
})

function searchData(page, disR) {
	var fn = arguments.callee;
	var req = 'page=' + (page || 1) + '&size=' + (disR = disR || 20);
	$('#fm').find('input,select,textarea').each(function() { // 遍历搜索框输入的内容作为参数
		if(this.value && this.value != '') req += '&' + this.name + '=' + this.value.replace(/\n/g, ',');
	});
	var url = '/customStat/customStatList.do?'+req;
	$.post(url,function(json) {
		if(!json.success) {
			customStat.lists = []
			$.tools.commonPage('#common_page', fn, 0, 0, 0, 0);
			return;
		}
		var count = json.object.count, list = json.object.list, p = json.object.page, pCount = json.object.pageCount;
		customStat.list =  json.object.list;
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
	initDate();
	searchData();
	customService.list = custom_service_list 
})

avalon.scan()