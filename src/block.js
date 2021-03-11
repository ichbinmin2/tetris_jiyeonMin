export const BLOCKS = {
  0: { shape: [[0]], color: "0, 0, 0" },
  block: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: {
      0: "80, 227, 230",
      1: "36, 95, 223",
      2: "223, 173, 36",
      3: "223, 217, 36",
      4: "48, 211, 56",
      5: "132, 61, 198",
    },
  },
};

export const randomColorfulBlock = () => {
  const colorfulBlock = "012345";
  const randomColorful =
    colorfulBlock[Math.floor(Math.random() * colorfulBlock.length)];
  return BLOCKS.block.color[randomColorful];
};
