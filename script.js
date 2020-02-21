const data = {
      labels: ["1 Feb","2 Feb","3 Feb","4 Feb", "5 Feb", "6 Feb", "7 Feb", "8 Feb", "9 Feb", "10 Feb", "11 Feb*", "12 Feb", "13 Feb", "14 Feb", "15 Feb", "16 Feb", "17 Feb", "18 Feb", "19 Feb", "20 Feb", "21 Feb", "22 Feb", "23 Feb", "24 Feb", "25 Feb", "26 Feb", "27 Feb", "28 Feb", "29 Feb"],
      datasets: [
        {
          name: "UPV", chartType: 'line',
          values: [12,17,16,15,20,22,21,20,19,12,17,17,18,19,20,21,21,21,23,25,19,27,21,23,26,28,29,33,32]
        }, {
          name: "Centro", chartType: 'line',
          values: [15,14,16,13,19,20,23,25,26,14,18,19,20,21,25,23,24,25,26,26,21,23,25,22,28,30,30,35,31]
        }, {
          name: "Viveros", chartType: 'line',
          values: [25,24,26,23,29,30,32,35,30,24,21,14,13,13,12,10,10,8,7,6,10,11,12,13,14,16,17,18,19]
        }
      ],
      yRegions: [
        { label: "",
          start: 0, end: 40,
          options: { labelPos: 'right' }
        }
      ]
}

const chart = new frappe.Chart( "#chart", {
    data: data,
    title: "Calidad del aire a lo largo del tiempo （Media)",
    type: 'line',
    height: 400,
    colors: ['purple', '#323444']
});

// jQuery to CSV



// Other

$(".map .point").mouseenter(function(event) {
	$(".map .pointDescription").addClass("active");
	var target = $(event.target), targetX = target.data("xAxis"), pdX = 0, pdY = 0;
		pdX = Math.floor( target.offset().left - 135), pdY = Math.floor( target.offset().top - 160);
	$(".map .pointDescription").css({left: pdX, top: pdY});
	$(this).addClass("selected");
	$(".map .pointDescription").html("Información: <br/><div class='l'>PM2.5: 2.1<br/>PM10: 5.3</div>");
});
$(".map .point").mouseleave(function(event) {
	$(".map .point").removeClass("selected");
	$(".map .pointDescription").removeClass("active");
});