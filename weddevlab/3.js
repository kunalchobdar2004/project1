<script>
  const modal = document.getElementById("loginPopup");
  const loginBtn = document.getElementById("button");
  const closeBtn = document.querySelector(".close");

  // Show modal when login button is clicked
  loginBtn.onclick = function () {
    modal.style.display = "block";
  }

  // Close modal when close (×) is clicked
  closeBtn.onclick = function () {
    modal.style.display = "none";
  }

  // Close modal when clicking outside the modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
</script>