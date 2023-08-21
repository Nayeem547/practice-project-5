
let total = 0;

function handleClickBtn(target){
    const selectedItemContainer = document.getElementById("card-entry")
    const itemName = target.childNodes[5].childNodes[3].innerText;
    const li = document.createElement("li");
    
    li.innerText = itemName ;
     
    selectedItemContainer.appendChild(li);
       const Price = target.childNodes[5].childNodes[5].innerText.split(" ")[0];
        total = parseInt(total) +parseInt(Price);
        
        document.getElementById("total").innerText = total;
        


       

}

document.addEventListener("DOMContentLoaded", function() {
    const totalSpan = document.getElementById("total");
    const discountSpan = document.getElementById("discount-card");
    const totalAmountSpan = document.getElementById("total-amount");
    const applyBtn = document.getElementById("apply-btn");
  
    applyBtn.addEventListener("click", function() {
      const couponCodeInput = document.querySelector(".card-actions input");
      const couponCode = couponCodeInput.value.trim();
  
      if (couponCode === "SELL200") {
        const totalValue = parseInt(totalSpan.innerText);
        const discount = Math.round(totalValue * 0.2); // 20% discount
        const discountedTotal = totalValue - discount;
  
        totalAmountSpan.innerText = discountedTotal;
        discountSpan.innerText = discount;
        applyBtn.disabled = true;
      }
      else{
        alert('Cupon Code not VAlid')
      }
    });
  });

 



document.addEventListener("DOMContentLoaded", function() {
    const totalSpan = document.getElementById("total");
    const makePurchaseBtn = document.getElementById("btn-now");
  
    // Initial check and button state
    if (parseInt(totalSpan.innerText) === 0) {
      makePurchaseBtn.disabled = true;
    } else {
      makePurchaseBtn.disabled = false;
    }
  
    // Listen for changes in the total and update the button state accordingly
    totalSpan.addEventListener("DOMSubtreeModified", function() {
        if (parseInt(totalSpan.innerText) === 0) {
          makePurchaseBtn.disabled = true;
        } else {
          makePurchaseBtn.disabled = false;
        }
      });
  });

  


  document.addEventListener("DOMContentLoaded", function() {
    const totalSpan = document.getElementById("total");
    const applyBtn = document.getElementById("apply-btn");
  
    // Initial check and button state
    if (parseInt(totalSpan.innerText) >= 200) {
      applyBtn.disabled = false;
    } else {
      applyBtn.disabled = true;
    }
  
    // Listen for changes in the total and update the button state accordingly
    totalSpan.addEventListener("DOMSubtreeModified", function() {
      if (parseInt(totalSpan.innerText) >= 200) {
        applyBtn.disabled = false;
      } else {
        applyBtn.disabled = true;
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const reloadBtn = document.getElementById("reload-btn");
  
    reloadBtn.addEventListener("click", function() {
      window.location.reload();
    });
  });
  
  