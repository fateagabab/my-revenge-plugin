const { findByProps } = vendetta.metro;
const { instead } = vendetta.patcher;

let unpatch;

module.exports = {
  onLoad: () => {
    const Keyboard = findByProps("dismiss", "addListener");

    unpatch = instead("dismiss", Keyboard, () => {
      // Swallow every dismiss call - keyboard stays up no matter what.
    });
  },
  onUnload: () => {
    unpatch?.();
  },
};
