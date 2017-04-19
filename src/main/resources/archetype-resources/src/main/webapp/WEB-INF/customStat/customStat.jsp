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
					客服统计<small></small>
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
				 		<label>统计时间： <input id="j_start_time" name="startTime"
							class="input-medium J_calendar" type="text" />~<input id="j_end_time"
							name="endTime" class="input-medium J_calendar" type="text" />
						</label>
				 	</div>
				 	<div class="control-group">
						客服名称：
							<select name="customServiceId" id="customServiceId" style="width:100px" ms-controller="customService">
									<option value="">请选择</option>
									<option ms-repeat-item="list"
											ms-attr-value="{{item.id}}">{{item.nickName}}</option>
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
							<th>客服名称</th>
							<th>客户存量</th>
							<th>客户投资总额</th>
							<th>客户可用总额</th>
							<th>客户生利宝总额</th>
							<th>客户资产总额</th>
						</tr>
					</thead>
					<tbody id="tbody" ms-controller="customStat">
						<tr ms-repeat-item="list">
							<td>{{${symbol_dollar}index+1}}</td>
							<td>{{item.nickName}}</td>
							<td>{{item.userCount}}</td>
							<td>{{item.investAmount}}&nbsp元</td>
							<td>{{item.usableBalance}}&nbsp元</td>
							<td>{{item.funderBalance}}&nbsp元</td>
							<td>{{item.totalBalance}}&nbsp元</td>
						</tr>
					</tbody>
					</table>
					<!-- 放置分页 
					<div id="common_page"></div>-->
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
<script type="text/javascript">
<%@ include file="../customServiceList_data.jsp"  %>
</script>
<!-- BEGIN 页面基本js -->

<script src="/js/customStat/customStat.js"></script>
<!-- END 页面基本js -->
</body>
</html>