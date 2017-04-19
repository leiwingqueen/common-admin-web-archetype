
 var userRcountChart = new Highcharts.Chart({
        chart: {
            renderTo: 'userRcountChart',
            type: 'line',
            // marginRight: 30,
            // marginBottom: 25
        },
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: [],
        },
        yAxis: {
            title: {
                text: '单位（个）'
            },
       //     plotLines: [{
      //          value: 0,
       //         width: 1,
        //        color: '#808080'
         //   }]
        },
        
        
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: '注册用户新增数',
            data: []
        }]
    });


 
 
 
 var chargeAmountChart = new Highcharts.Chart({
     chart: {
         renderTo: 'chargeChart',
         type: 'line',
         // marginRight: 30,
         // marginBottom: 25
     },
     title: {
         text: '',
         x: -20 //center
     },
     subtitle: {
         text: '',
         x: -20
     },
     xAxis: {
         categories: [],
     },
     yAxis: {
         title: {
             text: '单位（元）'
         },
         plotLines: [{
             value: 0,
             width: 1,
             color: '#808080'
         }]
     },
     tooltip: {
         valueSuffix: ''
     },
     legend: {
         layout: 'vertical',
         align: 'right',
         verticalAlign: 'middle',
         borderWidth: 0
     },
     
     plotOptions: {
         line: {
             dataLabels: {
                 enabled: true
             },
             enableMouseTracking: false
         }
     },
     
     series: [{
         name: '充值金额',
         data: []
     },]
 });
   
 
 
 var withdrawAmountChart = new Highcharts.Chart({
     chart: {
         renderTo: 'withdrawChart',
         type: 'line',
         // marginRight: 30,
         // marginBottom: 25
     },
     title: {
         text: '',
         x: -20 //center
     },
     subtitle: {
         text: '',
         x: -20
     },
     xAxis: {
         categories: [],
     },
     yAxis: {
         title: {
             text: '单位（元）'
         },
         plotLines: [{
             value: 0,
             width: 1,
             color: '#808080'
         }]
     },
     tooltip: {
         valueSuffix: ''
     },
     legend: {
         layout: 'vertical',
         align: 'right',
         verticalAlign: 'middle',
         borderWidth: 0
     },
     plotOptions: {
         line: {
             dataLabels: {
                 enabled: true
             },
             enableMouseTracking: false
         }
     },
     series: [{
         name: '提现金额',
         data: []
     },]
 });
   
 
 var investAmountChart = new Highcharts.Chart({
     chart: {
         renderTo: 'investChart',
         type: 'line',
         // marginRight: 30,
         // marginBottom: 25
     },
     title: {
         text: '',
         x: -20 //center
     },
     subtitle: {
         text: '',
         x: -20
     },
     xAxis: {
         categories: [],
     },
     yAxis: {
         title: {
             text: '单位（元）'
         },
         plotLines: [{
             value: 0,
             width: 1,
             color: '#808080'
         }]
     },
     tooltip: {
         valueSuffix: ''
     },
     legend: {
         layout: 'vertical',
         align: 'right',
         verticalAlign: 'middle',
         borderWidth: 0
     },
     plotOptions: {
         line: {
             dataLabels: {
                 enabled: true
             },
             enableMouseTracking: false
         }
     },
     series: [{
         name: '投资金额',
         data: []
     },]
 });
   
 
 
 var tradeAmountChart = new Highcharts.Chart({
     chart: {
         renderTo: 'tradeChart',
         type: 'line',
         // marginRight: 30,
         // marginBottom: 25
     },
     title: {
         text: '',
         x: -20 //center
     },
     subtitle: {
         text: '',
         x: -20
     },
     xAxis: {
         categories: [],
     },
     yAxis: {
         title: {
             text: '单位（元）'
         },
         plotLines: [{
             value: 0,
             width: 1,
             color: '#808080'
         }]
     },
     tooltip: {
         valueSuffix: ''
     },
     legend: {
         layout: 'vertical',
         align: 'right',
         verticalAlign: 'middle',
         borderWidth: 0
     },
     plotOptions: {
         line: {
             dataLabels: {
                 enabled: true
             },
             enableMouseTracking: false
         }
     },
     series: [{
         name: '交易金额',
         data: []
     },]
 });
 
 
 
 
 $("#fm").submit(function(event) { 
	    event.preventDefault();
	    $.post('/stat/queryRegUserStat.do', $("#fm").serialize(), function(data) {
	        // 返回一个 JSON
	    //	alert(data[0].statDate);
	    	if(!data.success) {
				alert(data.message);
				return ;
			}	    	
	    	userRcountChart.xAxis[0].setCategories(data.object[0]);
	    	userRcountChart.series[0].setData(data.object[1]);	    	
	    	chargeAmountChart.xAxis[0].setCategories(data.object[0]);
	    	chargeAmountChart.series[0].setData(data.object[2]);	    	
	    	withdrawAmountChart.xAxis[0].setCategories(data.object[0]);
	    	withdrawAmountChart.series[0].setData(data.object[3]);	    	
	    	investAmountChart.xAxis[0].setCategories(data.object[0]);
	    	investAmountChart.series[0].setData(data.object[4]);
	    	tradeAmountChart.xAxis[0].setCategories(data.object[0]);
	    	tradeAmountChart.series[0].setData(data.object[5]);
	    
	    
	    	
	    	
	    },'json');
	    return false;
	});
	// 默认自动提交
//	$("#select-users").submit();



function searchData(){
	$.post('/stat/queryRegUserStat.do', $("#fm").serialize(), function(data) {
        // 返回一个 JSON
    //	alert(data[0].statDate);
		
		if(!data.success) {
			alert(data.message);
			return ;
		}
    	
		userRcountChart.xAxis[0].setCategories(data.object[0]);
		userRcountChart.series[0].setData(data.object[1]);
		
		chargeAmountChart.xAxis[0].setCategories(data.object[0]);
		chargeAmountChart.series[0].setData(data.object[2]);
		
		withdrawAmountChart.xAxis[0].setCategories(data.object[0]);
    	withdrawAmountChart.series[0].setData(data.object[3]);
    	
    	investAmountChart.xAxis[0].setCategories(data.object[0]);
    	investAmountChart.series[0].setData(data.object[4]);
    	
    	tradeAmountChart.xAxis[0].setCategories(data.object[0]);
    	tradeAmountChart.series[0].setData(data.object[5]);
    	
    	searchTotal();
    },'json');
}

function searchTotal(){
	
	$.post('/stat/totalRegCountByTime.do', $("#fm").serialize(), function(data) {
		if(!data.success) {
			alert(data.message);
			return ;
		}
		
		$("#userRcount").html(data.object.userRegCount);
		$("#chargeTotalCount").html(data.object.chargeTotalCount);
		$("#withdrawTotalCount").html(data.object.withdrawTotalCount);
		$("#investTotalCount").html(data.object.investTotalCount);
		
		
		$("#tradeTotalCount").html(data.object.tradeTotalCount);
		
	})
	
	}



$(function() {	
	App.init();
	$("#selStartTimeStr").val($.sysop.kit.date.getDateStr(7));
	$("#selendTimeStr").val($.sysop.kit.date.getDateStr(0));
	showCalendarByOption('.calendar');
	$("#fm").submit();	
	searchTotal();
	

});