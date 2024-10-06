const HomeState: any = {};
const HomeAction = {
  init: () => {
    const [contentSrc, setContentSrc] = React.useState("");
    HomeState.contentSrc = contentSrc;
    HomeState.setContentSrc = setContentSrc;
  },
};
export { HomeAction, HomeState };
