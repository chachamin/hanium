// $(document).ready(function(){
// 	$.ajax({
//         url:'/main/familySite.do?mod=webMain',
//         type:'post',
//         datatype: 'json',
//         error:function(error,status,e){
//                alert('통신에 실패 하였습니다.');
//         },
//         success: function(data){        	
//         	var obj = eval("("+data+")");  
// 	        	$.each(obj, function (index, value) {   
// 	        		if(value.PRO_CG == "TNT1"){
// 	        			$("#tnt1").append("<li><a href="+value.PRO_LINK+"><span>"+value.PRO_NAME+"</span></a></li>");
// 	        		}else{
// 	        			$("#tnt2").append("<li><a href="+value.PRO_LINK+"><span>"+value.PRO_NAME+"</span></a></li>");
// 	        		}
// 	        		//console.log(value.PRO_NAME);    		        	
// 	            });	  
        	
//         }
// 	});	
// });