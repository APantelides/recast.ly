var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    dataType: 'json',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video'
    },
    success: function(data) {
      callback(data.items);
    },
    error: function(error) {
      console.log('error occurred on get', error);
    }
  });
};

window.searchYouTube = searchYouTube;
