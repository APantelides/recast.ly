class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: []
    }; 
  }

  componentDidMount () {
    this.searchYouTube('rick astley');

  }

  setVideoList (data) {
    this.setState({
      videoList: data,
      currentVideo: data[0]
    });
  }

  searchYouTube (query, max = 5) {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY,
      query: query,
      max: max
    }, this.setVideoList.bind(this));
  }

  titleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render () {
    return (
      <div>
        <Nav searchYouTube={this.searchYouTube.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList titleClick={this.titleClick.bind(this)} videos={this.state.videoList}/>
        </div>
      </div>
    );
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
