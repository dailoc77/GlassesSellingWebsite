function getLocalStorage(key) {
    if (localStorage.getItem(key)) {
        var str = localStorage.getItem(key);
        var ob = JSON.parse(str)
        return ob;
    }
    return undefined;
}
var nameLocal = getLocalStorage('NameProduct');
function renderDetail() {
    var html = ``;
    var name_pro;
    for (var item of glassesmen_products) {
        if (item.name == nameLocal) {
            // html +=`
            // <img src=${item.img} alt="">
            // <h3>${item.name}</h3>
            // <p>${item.brand}</p>
            // <p>${item.price}</p>
            // `
            name_pro = item.name;
            html += `
        <section class="row">
            <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 chitiet1">
                <div id="demo" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        
                    </ul>
                    <!-- The slideshow -->
                    <div class="carousel-inner section1">
                        <div class="carousel-item active">
                            <img src=${item.img} alt="" style="width: 100%;">
                        </div>
                        <div class="carousel-item">
                            <img src=${item.img_ct} alt="" style="width: 100%;">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 chitiet2">
                <div class="mt-3 ml-2">
                    <p style="font-weight: bold; font-size:30px;">${item.name}</p>
                    <p>${item.brand}</p>
                </div>
                <hr>
                <div>
                    <p style="font-weight: bold; font-size:20px;">Medium</p>
                </div>
                <div class="row">
                    <div class="col-6 display-4 text-center" style="line-height:200px;">
                        <p style="">$ ${item.price}</p>
                    </div>
                    <div class="col-6">
                        <p style="" style="font-size:35px;">ZENNI <b>WOW PRICE</b> INCLUDES:</p>
                        <p style="font-size:18px;"><i class="bi bi-check"></i> High-quality frame</p>
                        <p style="font-size:18px;"><i class="bi bi-check"></i> Basic prescription lenses*</p>
                        <p style="font-size:18px;"><i class="bi bi-check"></i> Anti-scratch coating</p>
                        <p style="font-size:18px;"><i class="bi bi-check"></i> UV protection</p>
                        <p>*does not include multifocal or readers options</p>
                    </div>
                </div>
                <div class="row ml-3 mt-4">
                    <input type="checkbox" value="" class="" style="width:20px;">
                    <label for="" class="col-11 ">
                        <p style="font-size:20px;">Add $19 for rush delivery in 3-5 business days</p>
                        <p style="font-size:18px;">*Only available for Single Vision, Progressive & Non-Prescription.</p>
                    </label>
                </div>
                <div class="row mb-3" style="height:50px;">
                    <button class="col-12 btn btn-info" style="font-size:20px;"><i class="bi bi-cart"></i> ADD TO
                        CART</button>
                </div>
    
            </div>
            <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
        </section>
            `
        }
    }
    document.querySelector(".pro_detail").innerHTML = html;
    document.querySelector("title").innerHTML = name_pro;
}
renderDetail();

var btn = document.getElementsByTagName("button");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        var cart = JSON.parse(localStorage.getItem("cart"));
        if (cart != null) {
            giohang = cart;
        }
        else
            var giohang = [];
        var name = btn[i].parentElement.parentElement.childNodes[1].childNodes[1].textContent;
        var brand = btn[i].parentElement.parentElement.childNodes[1].childNodes[3].textContent;
        var price = btn[i].parentElement.parentElement.childNodes[7].childNodes[1].childNodes[1].textContent;
        var hinh = btn[i].parentElement.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].src;
        var sl = 1;
        var ktratrung = 0;
        for (let i = 0; i < giohang.length; i++) {
            if (giohang[i]["name"] == name) {
                giohang[i]["sl"] += sl;
                ktratrung = 1;
                break;
            }

        }
        if (ktratrung == 0) {
            var pro = { "hinh": hinh, "name": name, "brand": brand, "price": price, "sl": 1 };
            giohang.push(pro);
        }
        localStorage.setItem("cart", JSON.stringify(giohang));
        var cart = JSON.parse(localStorage.getItem("cart"));
        showMessage();
        soluongCart();
    })
}
function showMessage() {
    Swal.fire(
        'Thêm vào giỏ hàng thành công',
        'Nhấn OK để tắt thông báo',
        'success'
    )
}