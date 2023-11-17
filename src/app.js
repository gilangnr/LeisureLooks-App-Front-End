document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Corduroy Down Jacket", img: "Corduroy Down Jacket 2.jpg", price: 999000 },
      { id: 2, name: "Long Sleeves Plaid Shirt", img: "Long Sleeves Plaid Shirt 2.jpg", price: 999000 },
      { id: 3, name: "Loose Fit T-Shirt", img: "Loose Fit T-Shirt 2.jpg", price: 249000 },
      { id: 4, name: "Relaxed Fit Pullover", img: "Relaxed Fit Pullover 2.jpg", price: 699000 },
      { id: 5, name: "Ribbed Button Down Polo", img: "Ribbed Button Down Polo 2.jpg", price: 449000 },
      { id: 6, name: "Striped T-Shirt", img: "Striped T-Shirt 2.jpeg.png", price: 249000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek barang yg sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      // cart kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
        swal("Success!", "Successfully added to cart", "success");
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// konversi rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
// testing
document.addEventListener("DOMContentLoaded", function () {
  const detailCoffeBeans = document.querySelector("#modal-item-detail");
  const btnCoffeBenas = document.querySelector(".detail-coffe-beans");

  btnCoffeBenas.addEventListener("click", (e) => {
    e.preventDefault();
    if (detailCoffeBeans) {
      detailCoffeBeans.style.display = "flex";
    } else {
      console.log("#modal-item-detail not found!");
    }
  });
});
// close button modal box
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector("#modal-item-detail");

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Close modal when clicking the close icon
  document.querySelectorAll(".close-icon").forEach((element) => {
    element.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
});

// TODO: keseluruhan modal box, button add to cart di modal box
