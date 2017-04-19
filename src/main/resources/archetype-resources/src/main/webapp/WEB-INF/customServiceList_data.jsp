#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
<%@page import="com.elend.p2p.sysconf.facade.data.CustomServiceData"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="utf-8"%>
    
var custom_service_list = <%=CustomServiceData.toCustomServiceJson()%>;