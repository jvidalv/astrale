import PlatformUtils from "../utils/Platform";

const Ads = {
  intersticial: PlatformUtils.isAndroid
    ? "ca-app-pub-7787825969453437/4788977112"
    : "ca-app-pub-7787825969453437/6993642089",
  banner: PlatformUtils.isAndroid
    ? "ca-app-pub-7787825969453437/4813027844"
    : "ca-app-pub-7787825969453437/6321550637",
};

export default Ads;
