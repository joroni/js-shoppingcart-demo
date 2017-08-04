function priceRules(get)
			{
 				
			  //  console.log(JSON.stringify(shop));
				 
			//	selected += parseInt(tr2[i].getElementsByTagName('input')[1].value);
			//	console.log(selected);
				

					/*var myCartStatus = InTheCart;

					sessionStorage.setItem('inmyCart', myCartStatus);


					for (var i = 0; i < myCartStatus.length; i++) {
					console.log(myCartStatus[i]);
					}*/
				/*	var cselected = 0;
			        var cprice = 0;
					var ccode  = '';
					var ccount  = 0;
			        var cHTMLstr = '';

						

							var tableArr = [];
                            var inmycart = document.getElementById( "display" );
                            var tr2 = inmycart.children[0];
							var table =inmycart;
                            var length = 0;
                        for (var i = 0, len = tr.length; i < len; i++) {
                          //  if (tr2[i].getElementsByTagName('input')[0].checked) {
                           // tr2[i].className = 'on';
                           // cselected += parseInt(tr2[i].getElementsByTagName('input')[1].value);*/

                            var n = document.getElementsByName("ult_medium").value;
                            var p = document.getElementsByName("ult_small").value;
                            var inmycart = document.getElementById( "display" );
                            var tr = inmycart.children[0];
							var table =inmycart;
                            var length = 0;
                             for (var i = 0, n = tr.length; i < n; i++) {
                           // for(var i = 0; i < n.length; i++) {
                                alert("row 1: " + n[i].value + p[i].value);
                            }
                          
                         //   cprice += parseFloat(tr2[i].cells[3].innerHTML);
            	           // ccount += parseFloat(tr2[i].getElementsByTagName('input')[1].value);
                            //cname += tr2[i].cells[1].innerHTML[0];
                // HTMLstr += '<div><img src="' + tr2[i].getElementsByTagName('img')[0].src + '"><span class="del" index="' + i + '">Delete</span></div>'
                          //  cHTMLstr += '<tr><td>'+tr2[i].getElementsByTagName('input')[0].getAttribute('pcode') + '</td><td>'+count+ '</td><td><span class="del" index="' + i + '">Delete</span></td></tr>';
               // HTMLstr += '<tr><td>' + pname + '</td><td><span class="del" index="' + i + '">Delete</span></td></tr>'
                          
					console.log(i);
					//console.log(myCartStatus);
					/*if ($('input#ult_large'.value == 1) && $('input#ult_small'.value == 3)){
						alert('hello');
					}*/
 		
                        }
                            
            //}
