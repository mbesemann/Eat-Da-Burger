$(document).ready(() => {
  const burgerName = $("#burger_name");

  $("#add").on("click", (event) => {
    event.preventDefault();
    if ($(burgerName).val() !== "") {
      $.post("/api/burgers", { burger_name: burgerName.val() }, (success) => {
        location.reload();
      });
    }
  });

  $(".devour").on("click", (event) => {
    event.preventDefault();
    const id = $(event.target).data("id");
    $.ajax({
      url: `/api/burgers/${id}`,
      type: "PUT",
      success: function () {
        location.reload();
      },
      data: { devoured: true },
    });
  });

  $(".undevour").on("click", (event) => {
    event.preventDefault();
    const id = $(event.target).data("id");
    $.ajax({
      url: `/api/burgers/${id}`,
      type: "PUT",
      success: function () {
        location.reload();
      },
      data: { devoured: false },
    });
  });
});
