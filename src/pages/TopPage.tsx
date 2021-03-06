import React, { FC } from "react";

import Canvas from "@/components/Canvas/container";
import { ColorPalette } from "@/components/ColorPalette";
import { PenType } from "@/components/PenType";
import { Controller } from "@/components/Controller";
const TopPage: FC = () => {
  return (
    <div>
      <p>This is Top Page</p>
      <Controller />
      <ColorPalette />
      <PenType />
      <Canvas />
    </div>
  );
};

export default TopPage;
