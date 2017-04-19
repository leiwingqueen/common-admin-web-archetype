#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<jsp:include page="/include/hd.jsp"></jsp:include>
<!-- BEGIN PAGE -->
<div class="page-content">
	<!-- BEGIN 右边容器-->
	<div class="container-fluid">
		<!-- BEGIN 右容器头部-->
		<div class="row-fluid">
			<div class="span12">
				<!-- BEGIN 页面标题和面包屑导航 -->
				<h3 class="page-title">
					用户统计<small></small>
				</h3>
				<ul class="breadcrumb">
					<li><i class="icon-home"></i> <a href="/">Home</a>
					</li>
				</ul>
				<!-- END 页面标题和面包屑导航 -->
			</div>
		</div>
		<!-- END 右容器头部-->
		<!-- BEGIN 右容器 main-->
		<div class="row-fluid">
			<div class="portlet box default">
				<div class="portlet-title">
					<div class="caption">
						<i class="icon-reorder"></i> 查询
					</div>
					<div class="tools">
						<a href="javascript:;" class="collapse"></a>
					</div>
				</div>
				<div class="portlet-body">
				<form id="fm" class="form form-horizontal">
					<!-- BEGIN 查询条件 -->
				 	<div class="control-group">
				 		<label>统计时间： <input id="selStartTimeStr" name="selStartTimeStr"
							class="input-medium calendar" type="text" />~<input id="selendTimeStr"
							name="selendTimeStr" class="input-medium calendar" type="text" />
						</label>
				 	</div>
				 
				 	<!-- END 查询条件 -->
				 	<div class="form-actions">
                            <a id="J_saveForm" class="btn green btn-primary"style="left: 500px" onclick="searchData()">查询</a>
                    </div>
				</form>
			</div>
			</div>
			
			
			<div id="userRcountChart"></div>
			<div align="center">注册用户数(总数：<span id="userRcount"></span>  个)</div>
			
			<div id="chargeChart"></div>
			<div align="center">充值金额 (总数：<span id="chargeTotalCount"></span> 元) </div>
			
			<div id="withdrawChart"></div>
			<div align="center">提现金额 (总数：<span id="withdrawTotalCount"></span> 元)</div>
			
			<div id="investChart"></div>
			<div align="center">投资金额 (总数：<span id="investTotalCount"></span> 元)</div>
				
			<div id="tradeChart"></div>
			<div align="center">交易金额 (总数：<span id="tradeTotalCount"></span> 元)</div>
			
		</div>
		<!-- END 右容器 main-->
	</div>
	<!-- END 右边容器-->
</div>
<!-- END PAGE -->
</div>
<!-- END 页面主容器 -->

<jsp:include page="/include/ft.jsp"></jsp:include>

<!-- BEGIN 页面基本js -->
<script  src="/js/plugin/highcharts.js"></script>
<script src="/js/stat/userStat.js"></script>
<!-- END 页面基本js -->
</body>
</html>