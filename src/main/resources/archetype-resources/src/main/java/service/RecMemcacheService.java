#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.service;

public interface RecMemcacheService {

	public void firstRequest(String userName);
	/**
	 * 用户退出系统后清理数据
	 */
	public void logOut(String userName);
	
	public void welcome(String userName);
}
