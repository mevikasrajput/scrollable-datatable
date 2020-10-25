$(document).ready(function () {
  var table = $("#example").DataTable({
    scrollY: "300px",
    scrollX: true,
    scrollCollapse: true,
    paging: false,
    fixedColumns: {
      leftColumns: 1,
      rightColumns: 1,
    },
  });
});
