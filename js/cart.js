// const ammount_input =  document.querySelector('.ammount-input');
// const ammount_add =  document.querySelectorAll('.ammount-add');
// const ammount_sub =  document.querySelectorAll('.ammount-sub');

// const item = document.querySelectorAll('.cart__item');
// const ammount = document.querySelector('.ammount');

// a = 0;

// item.forEach(() => {
//     a++;
//     console.log(a);
// })

// ammount.textContent = a;

// i = 1;
// ammount_input.value = i;

// ammount_add.forEach(e => {
//     e.addEventListener('click', () => {
//         i++;
//         ammount_input.value = i;
//     });
// })
function tang(x, i) {
    var sl = parseInt(x.parentElement.childNodes[3].value);
    var slmoi = sl + 1;
    x.parentElement.childNodes[3].value = slmoi;
    var cart = JSON.parse(localStorage.getItem('cart'));
    cart[i]["sl"] = slmoi;
    localStorage.setItem("cart", JSON.stringify(cart));
    x.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[3].innerHTML
     = parseFloat(layDongia(cart[i]["name"]) * cart[i]["sl"]);
    tinhTongtien();
}
function giam(x, i) {
    var sl = parseInt(x.parentElement.childNodes[3].value);
    var slmoi = sl - 1;
    x.parentElement.childNodes[3].value = slmoi;
    var cart = JSON.parse(localStorage.getItem('cart'));
    cart[i]["sl"] = slmoi;
    localStorage.setItem("cart", JSON.stringify(cart));
    x.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[3].innerHTML
    = parseFloat(layDongia(cart[i]["name"]) * cart[i]["sl"]);
    tinhTongtien();
}

// ammount_sub.addEventListener('click', () => {
//     if (i==1) {
//     } else {
//         i--;
//     }
//     ammount_input.value = i;
// });
function showCart() {
    var cart = JSON.parse(localStorage.getItem('cart'));
    // var tt = 0;
    if (cart != null) {
        var html = ``;
        for (let i = 0; i < cart.length; i++) {
            // var thanhtien = parseInt(cart[i]["price"]*cart[i]["sl"]);
            // var thanhtien_str = thanhtien+"";
            html += `
            <div class="cart__product">
            <div class="cart__item">
                <div class="item__top">
                    <div class="item__info">
                        <img src="`+ cart[i]["hinh"] + `" alt="">
                        <div class="details">
                            <b>`+ cart[i]["name"] + `</b>
                            <div class="buy__ammount li-text">
                                <button class="ammount-sub" onclick = "giam(this,`+ i + `)">-</button>
                                <input class="ammount-input" type="tel" value="`+ cart[i]["sl"] + `">
                                <button class="ammount-add" onclick = "tang(this,`+ i + `)">+</button>
                            </div>
                            <b class="price">`+ cart[i]["price"] + `</b>
                        </div>
                    </div>
                    <button class = "bin border 0" onclick = "xoa(this,`+ i + `)">
                        <i class="fa-regular fa-trash-can li-text"></i>
                    </button>
                    
                </div>
                <div class="item__bot">
                    <b>Thành tiền :</b>
                    <span class="total">`+parseFloat(layDongia(cart[i]["name"]) * cart[i]["sl"])+`</span>
                </div>
            </div>
        </div> 
                    
            `
            // tt += parseFloat(layDongia(cart[i]["name"])*cart[i]["sl"]);
        }
        document.querySelector(".cartlist").innerHTML = html;
        tinhTongtien();
        demSp();
    }
    else {
        var html = ``;
        document.querySelector(".cartlist").innerHTML = html;
        document.querySelector(".ammount").innerHTML = 0;
        document.querySelector(".order__total").innerHTML = '$ 0';
    }

}
function demSp() {
    let sl = 0;
    var cart = JSON.parse(localStorage.getItem('cart'));
    if (cart != null) {
        sl = cart.length;
    }
    document.querySelector(".ammount").innerHTML = sl;
}
function layDongia(name) {
    for (var item of glassesmen_products) {
        if (name == item.name)
            return parseFloat(item.price);
    }
    return 0;
}
function soluongCart() {
    let sl = 0;
    var cart = JSON.parse(localStorage.getItem('cart'));
    if (cart != null) {
        sl = cart.length;
    }
    document.querySelector(".soluong_cart").innerHTML = sl;
}
function tinhTongtien() {
    var cart = JSON.parse(localStorage.getItem('cart'));
    if (cart != null) {
        var tt = 0;
        for (let i = 0; i < cart.length; i++) {
            tt += parseFloat(layDongia(cart[i]["name"]) * cart[i]["sl"]);
        }
        document.querySelector(".order__total").innerHTML = '$ ' + tt;
    }
}
function xoa(x, i) {
    var tensp = x.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[3].childNodes[1].innerHTML;
    var cart = JSON.parse(localStorage.getItem("cart"));
    var giohang = cart;
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i]["name"] == tensp) {
            giohang.splice(i, 1);
        }
    }
    localStorage.setItem("cart", JSON.stringify(giohang));
    showCart();
}
function thanhtoan() {
    var cart = JSON.parse(localStorage.getItem('cart'));
    if (cart != null) {
        if (cart.length != 0) {
            localStorage.removeItem("cart");
            showCart();
            soluongCart();
            showMessageSuccess();
        }
        else 
            showMessageError();
    }
    else {
        showMessageError();
    }
}
function showMessageError() {
    Swal.fire(
        'vui lòng chọn sản phẩm để thanh toán',
        'Nhấn OK để tắt thông báo',
        'error'
    )
}
function showMessageSuccess() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Thanh toán thành công',
        showConfirmButton: true,
        timer: 3500
    })
}
