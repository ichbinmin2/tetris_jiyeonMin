export const BLOCKS = {
  0: { shape: [[0]], color: "0, 0, 0" },
  block: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: {
      0: "233,142,163",
      1: "60,166,85",
      2: "241,207,40",
      3: "71,142,213",
      4: "237,77,65",
      5: "221,140,50",
    },
  },
};

export const randomColorfulBlock = () => {
  const colorfulBlock = "012345";
  const randomColorful =
    colorfulBlock[Math.floor(Math.random() * colorfulBlock.length)];
  return BLOCKS.block.color[randomColorful];
};
