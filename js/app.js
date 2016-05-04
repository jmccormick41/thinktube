$(function(){
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
		$('#query').val("");
		$('#query').focus();
	});

	
});

// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAFGMKk-Mh0Vh_aqwIVfmHOxA-KKNsdP8=

function getRequest(searchTerm) {
	var params = {
		part: "snippet",
		key: "AIzaSyAFGMKk-Mh0Vh_aqwIVfmHOxA-KKNsdP8E",
		q: searchTerm,
		maxResults: 10
	};
	var url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data){
		showResults(data.items);
	});
};

function showResults(results){
	var html = "";
	$.each(results,function(index,value){
			html += '<div class="resultBox">';
			html += '<a href="https://www.youtube.com/watch?v=' + value.id.videoId + '" target="newtab"><img src="' + value.snippet.thumbnails.default.url + '"></a>';
			html += '<p><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '" target="newtab">' + value.snippet.title + '</a></p>';
			html += '<p>' + value.snippet.description + '</p>';
			html += '<p>Channel: ' + value.snippet.channelTitle + '</p>';
			html += '</div>';
			console.log(value);
	});
	$('#search-results').html(html);
	$('#search-results').fadeIn(1500);
};












