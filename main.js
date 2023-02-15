tinymce.init({
  selector: "#chart-result",
  plugins: [
    "advlist autolink lists link image charmap print preview anchor",
    "searchreplace visualblocks code fullscreen",
    "insertdatetime media table contextmenu paste",
    "highcharts highchartssvg noneditable"
  ],
  toolbar:
    "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  menubar: "file edit insert view format table tools help highcharts",
  menu: {
    highcharts: {
      title: "Highcharts",
      items: "highcharts"
    }
  }
});
