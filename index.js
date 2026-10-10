(function () {
  const { findByProps } = vendetta.metro;
  const { instead } = vendetta.patcher;
  let unpatch;

  return {
    onLoad() {
      const Keyboard = findByProps("dismiss", "addListener");
      if (!Keyboard) {
        console.log("Keyboard module not found");
        return;
      }
      unpatch = instead("dismiss", Keyboard, () => {});
    },
    onUnload() {
      unpatch?.();
    },
  };
})();
