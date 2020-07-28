// phone increase
const phoneIncrease = document.getElementById('phoneIncrease');
phoneIncrease.addEventListener('click', function() {
    handleProductChange('phone', true);
});
// phone decrease
const phoneDecrease = document.getElementById('phoneDecrease');
phoneDecrease.addEventListener('click', function() {
    handleProductChange('phone', false);
});

// case increase
const caseIncrease = document.getElementById('caseIncrease');
caseIncrease.addEventListener('click', function() {
    handleProductChange('case', true);
});
// case decrease
const caseDecrease = document.getElementById('caseDecrease');
caseDecrease.addEventListener('click', function() {
    handleProductChange('case', false);
});


function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + 'Count');
    const productCount = parseInt(productInput.value);
    // const phoneNewCount = phoneCount - 1;
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    // const productPrice = productNewCount * 1500;
    let productPrice = productNewCount;
    if (product == 'phone') {
        productPrice = productNewCount * 1500;
    }
    if (product == 'case') {
        productPrice = productNewCount * 100;
    }
    document.getElementById(product + 'Price').innerText = productPrice;
    calculateSubTotal();
}


function calculateSubTotal() {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const subTotalPrice = phoneCount * 1500 + caseCount * 100;
    document.getElementById('subTotal').innerText = subTotalPrice;

    const taxTotal = subTotalPrice * 0.1;
    document.getElementById('taxTotal').innerText = taxTotal;

    const totalAmount = subTotalPrice + taxTotal;
    document.getElementById('totalAmount').innerText = totalAmount;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + 'Count');
    const productCount = parseInt(productInput.value);
    return productCount;
}




// function handleProductChange(product, isIncrease) {
//     const productInput = document.getElementById(product + 'Count');
//     const productCount = parseInt(productInput.value);
//     // const phoneNewCount = phoneCount - 1;
//     let productNewCount = productCount;
//     if (isIncrease == true) {
//         productNewCount = productCount + 1;
//     }
//     if (isIncrease == false && productCount > 0) {
//         productNewCount = productCount - 1;
//     }
//     productInput.value = productNewCount;
//     // const productPrice = productNewCount * 1500;
//     let productPrice = productNewCount;
//     if (product == 'phone') {
//         productPrice = productNewCount * 1500;
//     }
//     if (product == 'case') {
//         productPrice = productNewCount * 100;
//     }
//     document.getElementById(product + 'Price').innerText = productPrice;
//     calculateSubTotal();
// }


// function calculateSubTotal() {
//     const phoneInput = document.getElementById('phoneCount');
//     const phoneCount = parseInt(phoneInput.value);

//     const caseInput = document.getElementById('caseCount');
//     const caseCount = parseInt(caseInput.value);

//     const subTotalPrice = phoneCount * 1500 + caseCount * 100;
//     document.getElementById('subTotal').innerText = subTotalPrice;
// }

// // phone increase
// const phoneIncrease = document.getElementById('phoneIncrease');
// phoneIncrease.addEventListener('click', function() {
//     handlePhoneChange(true);
// });
// // phone decrease
// const phoneDecrease = document.getElementById('phoneDecrease');
// phoneDecrease.addEventListener('click', function() {
//     handlePhoneChange(false);
// });

// // phone function
// function handlePhoneChange(isIncrease) {
//     const phoneInput = document.getElementById('phoneCount');
//     const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount - 1;
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phonePrice = phoneNewCount * 1500;
//     document.getElementById('phonePrice').innerText = phonePrice;
// }



// // phone increase
// const phoneIncrease = document.getElementById('phoneIncrease');
// phoneIncrease.addEventListener('click', function() {
//     const phoneInput = document.getElementById('phoneCount');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;
//     const phonePrice = phoneNewCount * 1500;
//     document.getElementById('phonePrice').innerText = phonePrice;
// });
// // phone decrease
// const phoneDecrease = document.getElementById('phoneDecrease');
// phoneDecrease.addEventListener('click', function() {
//     const phoneInput = document.getElementById('phoneCount');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     const phonePrice = phoneNewCount * 1500;
//     document.getElementById('phonePrice').innerText = phonePrice;
// });


// // case increase
// const caseIncrease = document.getElementById('caseIncrease');
// caseIncrease.addEventListener('click', function() {
//     handleCaseChange(true);
// });
// // case decrease
// const caseDecrease = document.getElementById('caseDecrease');
// caseDecrease.addEventListener('click', function() {
//     handleCaseChange(false);
// });
// // case function
// function handleCaseChange(isIncrease) {
//     const caseInput = document.getElementById('caseCount');
//     const caseCount = parseInt(caseInput.value);
//     // const caseNewCount = caseCount - 1;
//     let caseNewCount = caseCount;
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const casePrice = caseNewCount * 100;
//     document.getElementById('casePrice').innerText = casePrice;
// }



// // case increase
// const caseIncrease = document.getElementById('caseIncrease');
// caseIncrease.addEventListener('click', function() {
//     const caseInput = document.getElementById('caseCount');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const casePrice = caseNewCount * 100;
//     document.getElementById('casePrice').innerText = casePrice;
// });


// // case decrease
// const caseDecrease = document.getElementById('caseDecrease');
// caseDecrease.addEventListener('click', function() {
//     const caseInput = document.getElementById('caseCount');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const casePrice = caseNewCount * 100;
//     document.getElementById('casePrice').innerText = casePrice;
// });






// Remove item
removeCartItems("phoneRemove", "cartItem");
removeCartItems("caseRemove", "cartItems");

function removeCartItems(cart1, cart2) {
    const removeItems = document.getElementById(cart1);
    removeItems.addEventListener("click", function() {
        const cartItems = document.getElementById(cart2);
        cartItems.style.display = "none";
    })
}

// checkOutBtn
const checkOutBtn = document.getElementById("checkOutBtn");
checkOutBtn.addEventListener("click", function() {
    const productCategoryArea = document.getElementById("productCategoryArea");
    productCategoryArea.style.display = "none";

    const customerFriendly = document.getElementById("customerFriendly");
    customerFriendly.style.display = "block";
})