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
					用户余额统计<small></small>
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
						<label class="control-label">用户姓名：</label>
							<input name="realName" id="realName" type="text" style="width: 150px" />
						
					</div>
				 	<div class="control-group">
				 		<label class="control-label">统计时间：</label> <input id="startTime" name="startTime"
							class="input-medium J_calendar" type="text" />~<input id="endTime"
							name="endTime" class="input-medium J_calendar" type="text" />
						
				 	</div>
				 	<div class="control-group">
				 		<label class="control-label">货币类型：</label>
				 		<select id="balanceType " name="balanceType" style="width:100px">
								<option value="">请选择</option>
								<option value="1">人民币</option>
								<option value="2">基金</option>
						</select>
				 	</div>
				 	<div class="control-group">
				 		<label class="control-label">金额类型：</label>
				 		<select id="amountType " name="amountType" style="width:100px">
								<option value="">请选择</option>
								<option value="1">可用</option>
								<option value="2">冻结</option>
								<option value="3">待收</option>
								<option value="4">待还</option>
						</select>
				 	</div>
				 	<!-- END 查询条件 -->
				 	<div class="form-actions">
                            <a id="J_saveForm" class="btn green btn-primary"style="left: 500px" onclick="searchData()">查询</a>
                    </div>
				</form>
			</div>
			</div>
			<div class="portlet box default">
				<div class="portlet-title">
					<div class="caption">
						<i class="icon-reorder"></i> 列表查询
					</div>
				</div>
				<div class="portlet-body">
					<table class="table table-bordered table-striped table-hover">
						<thead>
						<tr>
							<th>序号</th>
							<th>用户姓名</th>
							<th>期初余额</th>
							<th>期末余额</th>
							<th>当日充入金额</th>
							<th>当日提现金额</th>
							<th>当日发放金额</th>
							<th>当日消费金额</th>
							<th>货币类型</th>
							<th>金额类型</th>
							<th>统计日期</th>
						</tr>
					</thead>
					<tbody id="tbody" ms-controller="userBalanceStat">
						<tr ms-repeat-item="list">
							<td>{{${symbol_dollar}index+1}}</td>
							<td>{{item.realName}}</td>
							<td>{{item.beginBalance}}&nbsp元</td>
							<td>{{item.endBalance}}&nbsp元</td>
							<td>{{item.chargeAmount}}&nbsp元</td>
							<td>{{item.withdrawAmount}}&nbsp元</td>
							<td>{{item.issueAmount}}&nbsp元</td>
							<td>{{item.consumeAmount}}&nbsp元</td>
							<td>{{item.balanceTypeDesc}}</td>
							<td>{{item.moneyTypeDesc}}</td>
							<td>{{item.statDate | date('yyyy-MM-dd')}}</td>
						</tr>
					</tbody>
					</table>
					<div id="common_page"></div>
				</div>
			</div>
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
<script src="/js/userBalanceStat/userBalanceStat.js"></script>
<!-- END 页面基本js -->
</body>
</html>