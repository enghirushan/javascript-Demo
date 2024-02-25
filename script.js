function CalculateTotal() {
  let txtprice = document.getElementById("txtprice").value;
  let txtqty = document.getElementById("txtqty").value; // Corrected ID here

  let total = txtprice * txtqty;

  document.getElementById("txtTot").value = total;
}

let btncal = document.getElementById("btncal");

btncal.addEventListener("click", CalculateTotal);
