 $('#specialBtn').hide();
$("#showcart, .modalContainer").click(function(){
    $("#cartTable, .modalContainer").toggleClass("hidebox");
});




function priceRules(get)
          
			{
 			/*	var myTableArray = [];
                $("tbody#display tr").each(function() { 
                    var theName = $('.check-one').attr('pname');
                     $('td:first').html(theName);
                    var theQty = $('.count-input').val();
                     $('.pqtyc').html(theQty);
                      var thePcode = $('.count-input').attr('name');
                     $('.pcodec').html(thePcode);

                    var ult_small = $('input#ult_small').val();
                    var ult_medium = $('input#ult_medium').val();
                    var ult_large = $('input#ult_large').val();
                    var one_gb = $('input#1gb').val();
                    var arrayOfThisRow = [];
                    var tableData = $(this).find('input')[0].id;
                    if (tableData.length > 0) {
                        tableData.each(function() { arrayOfThisRow.push($(this).text()); });
                        myTableArray.push(arrayOfThisRow);
                    }
                });*/

              //  console.log(JSON.stringify(myTableArray[0])); // alerts the entire array
                //console.log(JSON.stringify(myTableArray[0][0]));
              // alert(myTableArray[0][0]); // Alerts the first tabledata of the first tablerow

                    var ult_small = $('input#ult_small').val();
                    var ult_medium = $('input#ult_medium').val();
                    var ult_large = $('input#ult_large').val();
                    var one_gb = $('input#1gb').val();
                    var price_holder =  $('table.product-item span.unit_price').text();
                    var counter =  $('tbody#display tr td.count input').val(); 
                    var price = this.price_holder * this.counter;
               $('html').click(function(){
                   
                    if (ult_small == 3 && ult_large == 1){
                        $('#specialBtn').show();
                        $('tbody#display tr td#ult_small.price_total').css('text-decoration', 'line-through');
                        
                        $('#specialBtn').click(function(){
                            $('tbody#display tr td#ult_small.price_total').text('49.80');
                            getTotal();
                        });
                     //   alert('3 + 1');
                    } else if (ult_small == 2 && ult_large == 4){
                         $('#specialBtn').show();
                        $('tbody#display tr td#ult_large.price_total').css('text-decoration', 'line-through');
                        
                        $('#specialBtn').click(function(){
                            $('tbody#display tr td#ult_large.price_total').text('159.60');
                            getTotal();
                        });
                       //  alert('2 + 4');
                    } else if (ult_small == 1 && ult_medium == 2){
                         alert('1 + 2');
                    } else if (ult_small == 1 && one_gb == 1){
                         alert('1 + 1');
                    } else {
                        console.log('normal price');
                        //  $('tbody#display tr td.price_total').text(price);
                    }

           
            }); 
            
        
        }