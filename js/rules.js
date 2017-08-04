


$("#showcart, .modalContainer").click(function(){
    $("#cartTable, .modalContainer").toggleClass("hidebox");
});




function priceRules(get)
          
			{
 			

                    var ult_small = $('input#ult_small').val();
                    var ult_medium = $('input#ult_medium').val();
                    var ult_large = $('input#ult_large').val();
                    var one_gb = $('input#1gb').val();
                    var price_holder =  $('table.product-item span.unit_price').text();
                    var counter =  $('tbody#display tr td.count input').val(); 
                    var price = this.price_holder * this.counter;
               $('html').click(function(){
                   
                    if (ult_small == 3 && ult_large == 1){
                        $('#specialBtn').toggleClass('hidden');
                        $('tbody#display tr td#ult_small.price_total').css('text-decoration', 'line-through');
                        
                        $('#specialBtn').click(function(){
                            $('tbody#display tr td#ult_small.price_total').text('49.80');
                            getTotal();
                            $('#specialBtn').toggleClass('hidden');
                        });
                     //   alert('3 + 1');
                    } else if (ult_small == 2 && ult_large == 4){
                        $('#specialBtn').show();
                        $('tbody#display tr td#ult_large.price_total').css('text-decoration', 'line-through');
                        
                        $('#specialBtn').click(function(){
                            $('tbody#display tr td#ult_large.price_total').text('159.60');
                            getTotal();
                          $('#specialBtn').hide();
                        });
                       //  alert('2 + 4');
                    } else if (ult_medium >= 1){
                        $('#specialBtn').show();
                        $('#specialBtn').html('Claim Special Offer');
                            var ult_mediumQty = $('tbody#display tr td input#ult_medium').val();
                            console.log(ult_mediumQty);
                             getTotal();
                        $('#specialBtn').click(function(){
                          
       $('<tr class="on"><td><input class="check-one check" checked="" type="checkbox" pname="1 GB Data-pack" price="0" pqty="1" pcode="1gb" onblur="addToCart(this)"></td><td>1 GB Data-pack</td><td class="count"><i class="reduce">-</i><input id="1gb" name="1gb" class="1gb count-input" type="text" value="'+ult_mediumQty+'"><i class="add">+</i><input type="hidden" class="unit_price" value=""><input type="hidden" class="selected_code" value="1gb"></td><td id="1gb" class="price_total">0</td><td class="pqtyc hidden"></td><td class="pcodec hidden"></td></tr>').insertAfter('tbody#display tr:last');
                          //  $(this).parent().parent().after(newRow);
                             $('html').click(function(){
                                 $('input#1gb').val(ult_mediumQty);
                                  getTotal();
                             })
                       //  getSubTotal(this);
                            getTotal();
                            $('#specialBtn').attr('disabled', 'true');
                            
                        });

                        
                        // alert('1 + 2');
                    } else if (ult_small == 1 && one_gb == 1){
                         alert('1 + 1');
                    } else {
                        console.log('normal price');
                        //  $('tbody#display tr td.price_total').text(price);
                    }

           
            }); 
            
        
        }
     