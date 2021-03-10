export const BLOCKS = {
  0: { shape: [[0]], color: "0, 0, 0" },
  block: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: {
      0: "80, 227, 230",
      1: "223, 173, 36",
      2: "223, 217, 36",
      3: "48, 211, 56",
      4: "132, 61, 198",
      5: "227, 78, 78",
    },
  },
};

export const randomColorfulBlock = () => {
  const colorfulBlock = "012345";
  const randomColorfulBlock =
    colorfulBlock[Math.floor(Math.random() * colorfulBlock.length)];
  return BLOCKS.block.color[randomColorfulBlock];
};
