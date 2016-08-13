class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0]
    };
  }

  titleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList titleClick={this.titleClick.bind(this)} videos={window.exampleVideoData}/>
        </div>
      </div>
    );
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
