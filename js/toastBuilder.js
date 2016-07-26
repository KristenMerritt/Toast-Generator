$(document).ready(function(){
	$(".col1, .col2, .col3, .col4, .col5, .col6, .col7, .col8, .col9, .col10, .col11, .col12").on("click", function(){
			setColAmount($(this).attr('class'), $(this).parent().attr("id"));
	});

	$(".col1, .col2, .col3, .col4, .col5, .col6, .col7, .col8, .col9, .col10, .col11, .col12").hover(function(){
		if( ($.inArray($(this).parent().attr("id"), setRows)) == -1){
			hoverEffect($(this).attr('class'), $(this).parent().attr("id"), "#808080");
		}
	}
	,function(){
		if( ($.inArray($(this).parent().attr("id"), setRows)) == -1){
			hoverEffect($(this).attr('class'), $(this).parent().attr("id"), "#e6e6e6");
		}
	});
});

function getBreakPoints(){
	var blocks = [];
	for(var row=1; row < 7; row++){
		for(var col=1; col < 13; col++){
			var color = $("#row"+row+" .col"+col).css("background-color");
			if(color != "rgb(128, 128, 128)"){
				blocks.push(col-1);
				break;
			}
		}
	}
	generateToast(blocks);
}

function generateToast(blocks){
	$("#code").empty();
	var row_1_block_1 = blocks[0];
	var row_1_block_2 = 12 - row_1_block_1;

	var row_2_block_1 = blocks[1];
	var row_2_block_2 = 12 - row_2_block_1;

	var row_3_block_1 = blocks[2];
	var row_3_block_2 = 12 - row_3_block_1;

	var row_4_block_1 = blocks[3];
	var row_4_block_2 = 12 - row_4_block_1;

	var row_5_block_1 = blocks[4];
	var row_5_block_2 = 12 - row_5_block_1;

	var row_6_block_1 = blocks[5];
	var row_6_block_2 = 12 - row_6_block_1;


	var toast = '<<i>div</i> id="<b>row1</b>">'+ "\n  &#9;" +
			'<<i>div</i> class="<b>grid__col grid__col--'+row_1_block_1+'-of-12 block col1</b>"> '+ "\n  &#9;  &#9;" +
				'<<i>p</i>> Left <<i>/p</i>>'+ "\n  &#9;" +
			'<<i>/div</i>> '+ "\n  &#9;" +

			'<<i>div</i> class="<b>grid__col grid__col--'+row_1_block_2+'-of-12 block col2</b>">'+ "\n  &#9;  &#9;" +
				'<<i>p</i>> Right <<i>/p</i>>'+ "\n &#9; " +
			'<<i>/div</i>>'+ "\n " + 
		'<<i>/div</i>>'+ "\n \n" +

		'<<i>div</i> id="<b>row2</b>>">'+ "\n  &#9;" +
			'<<i>div</i> class="<b>grid__col grid__col--'+row_2_block_1+'-of-12 block col1</b>">'+ "\n  &#9; &#9;" +
				'<<i>p</i>> Left <<i>/p</i>>'+ "\n &#9;" +
			'<<i>/div</i>>'+ "\n &#9;" +

			'<<i>div</i> class="<b>grid__col grid__col--'+row_2_block_2+'-of-12 block col2</b>">'+ "\n  &#9; &#9;" +
				'<<i>p</i>> Right <<i>/p</i>>'+ "\n &#9;" +
			'<<i>/div</i>>'+ "\n" +
		'<<i>/div</i>>'+ "\n \n" +

		'<<i>div</i> id="<b>row3</b>">'+ "\n  &#9;" +
			'<<i>div</i> class="<b>grid__col grid__col--'+row_3_block_1+'-of-12 block col1</b>">'+ "\n  &#9; &#9;" +
				'<<i>p</i>> Left <<i>/p</i>>'+ "\n &#9;" +
			'<<i>/div</i>>'+ "\n &#9;" +

			'<<i>div</i> class="<b>grid__col grid__col--'+row_3_block_2+'-of-12 block col2</b>">'+ "\n  &#9; &#9;" +
				'<<i>p</i>> Right <<i>/p</i>>'+ "\n &#9;" +
			'<<i>/div</i>>'+ "\n" +
		'<<i>/div</i>>'+ "\n \n" +
 
		'<<i>div</i> id="<b>row4</b>">'+ "\n  &#9;" +
			'<<i>div</i> class="<b>grid__col grid__col--'+row_4_block_1+'-of-12 block col1</b>">'+ "\n  &#9; &#9;" +
				'<<i>p</i>> Left <<i>/p</i>>'+ "\n &#9;" +
			'<<i>/div</i>>'+ "\n &#9;" +

			'<<i>div</i> class="<b>grid__col grid__col--'+row_4_block_2+'-of-12 block col2</b>">'+ "\n  &#9; &#9;" +
				'<<i>p</i>> Right <<i>/p</i>>'+ "\n &#9;" +
			'<<i>/div</i>>'+ "\n" +
		'<<i>/div</i>>'+ "\n \n" +

		'<<i>div</i> id="<b>row5</b>">'+ "\n  &#9;" +
			'<<i>div</i> class="<b>grid__col grid__col--'+row_5_block_1+'-of-12 block col1</b>">'+ "\n  &#9; &#9;" +
				'<<i>p</i>> Left <<i>/p</i>>'+ "\n &#9;" +
			'<<i>/div</i>>'+ "\n &#9;" +

			'<<i>div</i> class="<b>grid__col grid__col--'+row_5_block_2+'-of-12 block col2</b>">'+ "\n  &#9; &#9;" +
				'<<i>p</i>> Right <<i>/p</i>>'+ "\n &#9;" +
			'<<i>/div</i>>'+ "\n" +
		'<<i>/div</i>>'+ "\n \n" +

		'<<i>div</i> id="<b>row6</b>">'+ "\n  &#9;" +
			'<<i>div</i> class="<b>grid__col grid__col--'+row_6_block_1+'-of-12 block col1</b>">'+ "\n  &#9; &#9;" +
				'<<i>p</i>> Left <<i>/p</i>>'+ "\n &#9;" +
			'<<i>/div</i>>'+ "\n &#9;" + 

			'<<i>div</i> class="<b>grid__col grid__col--'+row_6_block_2+'-of-12 block col2</b>">'+ "\n  &#9; &#9;" +
				'<<i>p</i>> Right <<i>/p</i>>'+ "\n &#9;" +
			'<<i>/div</i>>'+ "\n" +
		'<<i>/div</i>>';

		$("#code").append(toast);
}

var setRows = [];
function clearSelection(){
	$("#code").empty();
	for(var x=0; x <= 6; x++){
		$("#row"+x).css("background-color", "#e6e6e6");
	}
	for(var x=0; x <= 12; x++){
		$(".col"+x).css("background-color", "#e6e6e6");
	}
	setRows = [];
}

function hoverEffect(element, rowId, color){
	var classes = element.split(' ');
	var colNum = classes[(classes.length)-1].substring(3);
	for(var x=0; x <= colNum; x++){
		$("#"+rowId+" .col"+x).css("background-color", color);
	}
}

function setColAmount(element, rowId){
	var classes = element.split(' ');
	var colNum = classes[(classes.length)-1].substring(3);
	setRows.push(rowId);
}