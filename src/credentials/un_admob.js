import PlatformUtils from "../utils/Platform";

const Ads = {
  intersticial: PlatformUtils.isAndroid
    ? "ca-app-pub-7787825969453437/4788977113"
    : "ca-app-pub-7787825969453437/6993642088",
  banner: PlatformUtils.isAndroid
    ? "ca-app-pub-7787825969453437/4813027845"
    : "ca-app-pub-7787825969453437/6321550635",
};

export default Ads;
