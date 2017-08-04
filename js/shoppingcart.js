function ShoppingCart(name, pcode, pqty, price) {

    this.name = name;
    this.pcode = pcode;
    this.pqty = parseInt(pqty);
    this.price = parseInt(price);

}


var shop = new ShoppingCart();


var storeFront = [];


var myObj = [{
        "p_code": "ult_small",
        "p_name": "Unlimited 1GB",
        "p_qty": "1",
        "p_price": "24.90"
    },
    {
        "p_code": "ult_medium",
        "p_name": "Unlimited 2GB",
        "p_qty": "1",
        "p_price": "29.00"
    },
    {
        "p_code": "ult_large",
        "p_name": "Unlimited 5GB",
        "p_qty": "1",
        "p_price": "44.90"
    },
    {
        "p_code": "1gb",
        "p_name": "1 GB Data-pack",
        "p_qty": "1",
        "p_price": "9.90"
    },
];




var cartTable = document.getElementById('cartTable');
var checkOutTable = document.getElementById('cart_items')
var productTable = document.getElementById('display')
var tr = cartTable.children[1].rows;
var tr2 = productTable.children[0];
var currency = '$';
var checkInputs = document.getElementsByClassName('check');

var checkAllInputs = document.getElementsByClassName('check-all check');
var selectedTotal = document.getElementById('selectedTotal');
var priceTotal = document.getElementById('priceTotal');
var selected = document.getElementById('selected');
var codePromo = document.getElementById('promoCode');
var foot = document.getElementById('foot');
var selectedViewList = document.getElementById('selectedViewList');
var deleteThis = document.getElementById('deleteThis');
var deleteAll = document.getElementById('deleteAll');
var checkOut = document.getElementById('checkoutBtn');
var discount = document.getElementById('promoCode');
var chkCode = document.getElementById('checkCode');
var hasCode = "I<3AMAYSIM"; // hard coded for this demo.
var hasDiscount = 10; // hard coded for this demo.

/*function subTotal(name,code,qty,price){
			
}*/


function getTotal(name, code, price, image, promo, pdiscount) {
    var selected = 0;
    var unitprice = 0;
    var price = 0;
    var HTMLstr = '';
    var count = 0;
    var pname = '';
    var promo = '';
    for (var i = 0, len = tr.length; i < len; i++) {
        if (tr[i].getElementsByTagName('input')[0].checked) {
            tr[i].className = 'on';
            selected += parseInt(tr[i].getElementsByTagName('input')[1].value);


            unitprice += parseFloat(tr[i].cells[2].innerHTML);
            price += parseFloat(tr[i].cells[3].innerHTML);
            count += parseFloat(tr[i].getElementsByTagName('input')[1].value);
            pname += tr[i].cells[1].innerHTML[0];
            // HTMLstr += '<div><img src="' + tr[i].getElementsByTagName('img')[0].src + '"><span class="del" index="' + i + '">Delete</span></div>'
            HTMLstr += '<tr index="' + i + '"><td>' + tr[i].getElementsByTagName('input')[0].getAttribute('pcode') + '</td><td>' + count + '</td><td><span class="del" index="' + i + '">Delete</span></td></tr>';
            // HTMLstr += '<tr><td>' + pname + '</td><td><span class="del" index="' + i + '">Delete</span></td></tr>'
        } else {
            tr[i].className = '';
        }
        console.log(price);
        console.log(count);
        //console.log(selected);
    }


    // Discount script 'start'
    if (sessionStorage["discountValue"]) {
        var decimalValue = sessionStorage.getItem("discountValue"); // whole number = (10)
        var discountPercent = price.toFixed(2) / 100; // decimal of orig price 24.90 = (0.249)
        sessionStorage.setItem('discountInPercent', discountPercent.toFixed(2));
        selectedTotal.innerHTML = selected;
        priceTotal.innerHTML = price.toFixed(2) - discountPercent.toFixed(2);
        selectedViewList.innerHTML = HTMLstr;
        // Discount script 'end'
    } else {
        selectedTotal.innerHTML = selected;
        priceTotal.innerHTML = price.toFixed(2);
        selectedViewList.innerHTML = HTMLstr;
    }
    if (selected == 0) {
        foot.className = 'foot';
    }

    // 	console.log(JSON.stringify(shop));


}



function addToCart(get) {
    shop.name = get.getAttribute('pname');
    shop.pcode = get.getAttribute('pcode');
    shop.pqty = get.getAttribute('pqty');
    shop.price = get.getAttribute('price');
    // console.log(JSON.stringify(shop));
    storeFront.push({
        "name": get.getAttribute('pname'),
        "code": get.getAttribute('pcode'),
        "pqty": get.getAttribute('pqty'),
        "price": get.getAttribute('price')
    })

    document.getElementById('display').innerHTML += "<tr class='on'><td><input class='check-one check' checked type='checkbox' pname='" + get.getAttribute('pname') + "' price='" + get.getAttribute('price') + "' pqty='" + get.getAttribute('pqty') + "' pcode='" + get.getAttribute('pcode') + "'  onblur='addToCart(this)'/>" +
        "</td>" +
        "<td>" + get.getAttribute("pname") + "</td>" +
        "<td class='count'><i class='reduce'>-</i><input id='" + get.getAttribute('pcode') + "' name='" + get.getAttribute('pcode') + "'  class='" + get.getAttribute('pcode') + " count-input' type='text'  value='" + get.getAttribute('pqty') + "' /><i class='add'>+</i>" +
        "<input type='hidden' class='unit_price' value='" + get.getAttribute('price') + "'/>" +
        "<input type='hidden' class='selected_code' value='" + get.getAttribute('pcode') + "'/></td>" +
        "<td id='" + get.getAttribute('pcode') + "' class='price_total'>" + get.getAttribute('price') + "</td><td class='pqtyc hidden'></td><td class='pcodec hidden'></td></tr>";
    // no loop
    document.getElementById('selectedTotal').innerHTML = storeFront.length - parseInt(1);

    //get.parentNode.removeChild(get);



    var totalAmount = JSON.stringify(storeFront);
    //	console.log(totalAmount);
    //priceRules();
    getTotal();



    for (var i = 0; i < tr.length; i++) {
        tr[i].onclick = function(e) {
            e = e || window.event;
            var el = e.srcElement;
            var cls = el.className;
            var input = this.getElementsByTagName('input')[1];
            var val = parseInt(input.value);
            var reduce = this.getElementsByTagName('i')[1];
            switch (cls) {
                case 'add':
                    input.value = val + 1;
                    reduce.innerHTML = '+';
                    getSubTotal(this);
                    console.log(storeFront);
                   
                    break;
                case 'reduce':
                    if (val > 1) {
                        input.value = val - 1;
                    }
                    if (input.value <= 1) {
                        reduce.innerHTML = '-';
                    }
                    getSubTotal(this);
                   

                    break;
                case 'delete':
                    var conf = confirm('Delete?');
                    if (conf) {
                        this.parentNode.removeChild(this);
                    }
                    break
                default:
                    break;
            }

            getTotal();

        }
        tr[i].getElementsByTagName('input')[1].onkeyup = function() {
            var val = parseInt(this.value);
            var tr = this.parentNode.parentNode
            var reduce = tr.getElementsByTagName('i')[1];
            if (isNaN(val) || val < 1) {
                val = 1;
            }
            this.value = val;
            if (val <= 1) {
                reduce.innerHTML = '_';
            } else {
                reduce.innerHTML = '-';
            }
            getSubTotal(tr);
            console.log(storeFront);


            getTotal();
            console.log(JSON.stringify(shop));

        }
    }
}




function getSubTotal(tr) {
    var tds = tr.cells;
    //var price = parseFloat(tds[3].innerHTML);
    //var unitprice = parseFloat(tds[3].innerHTML);
    var scode = (tr.getElementsByTagName('input')[3].value);
    var unitprice = parseFloat(tr.getElementsByTagName('input')[2].value).toFixed(2);
    var count = parseInt(tr.getElementsByTagName('input')[1].value);
    var SubTotal = parseFloat(unitprice * count);
    // document.getElementById('sub_Total').innerHTML = SubTotal.toFixed(2);
    tds[3].innerHTML = SubTotal.toFixed(2);
    //	console.log(count);
    console.log(scode + ' ' + count);
    priceRules(this);
    /*if(scode == 'ult_small' && count == 3 && scode == 'ult_large' && count == 1) {
    	alert('hello');
    }*/



}




selected.onclick = function() {
    if (foot.className == 'foot') {
        if (selectedTotal.innerHTML != 0) {
            foot.className = 'foot show';
            //selectedViewList.className = 'hidden';
        }
    } else {
        foot.className = 'foot hidden';
    }
}

selectedViewList.onclick = function(e) {
    e = e || window.event;
    var el = e.srcElement;
    if (el.className == 'del') {
        var index = el.getAttribute('index');
        var input = tr[index].getElementsByTagName('input')[0];
        input.checked = false;
        //input.onclick(this);


    }
}



for (a = 0; a <= myObj.length - parseInt(1); a++) {

    document.getElementById("storeFront").innerHTML += "<div index='" + a + "'  class='product-item-container'><table class='product-item'><tr class='on'> " +
        "<Td><h3>" + myObj[a].p_name + "</h3><h5>" + currency + "<span class='unit_price'>" + myObj[a].p_price + "</span></h5>" +

        "<br><label class='btn'>Add to Cart &nbsp;<input class='check-one check' type='checkbox' pname='" + myObj[a].p_name + "' price='" + myObj[a].p_price + "' pqty='" + myObj[a].p_qty + "' pcode='" + myObj[a].p_code + "' id='row" + a + "'  onclick='addToCart(this)'/></label></td>" +
        "</tr></table></div>";
    document.getElementById('currency').innerHTML = '$';

}

function addQty(add) {
    var cur = document.getElementById('cur' + add + '').value;
    var row = document.getElementById('row' + add + '');
    row.setAttribute('pqty', cur);
}




chkCode.onclick = function() {

    var codeValue = document.getElementById('promoCode').value;
    if (codeValue === hasCode) {
        // alert(codeValue);
        sessionStorage.setItem('discountCode', hasCode);
        sessionStorage.setItem('discountValue', hasDiscount);
        //priceTotal = priceTotal - 10;
        alert('Code Verified! You got ' + hasDiscount + '% Discount.');
        getTotal();

    } else if (codeValue == '') {
        alert('Please key-in Promo Code');
        clearSession();

    } else {
        alert('Unverified Code');
        clearSession();
    }
    console.log(JSON.stringify(storeFront));


}

function clearSession() {
    sessionStorage.removeItem('discountCode');
    sessionStorage.removeItem('discountValue');
    sessionStorage.removeItem('discountInPercent');

}

checkOut.onclick = function() {
    clearSession();
    window.location.reload();
}




clearSession();