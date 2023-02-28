import React from "react";
import { Fontisto } from "@expo/vector-icons";
import color from "../misc/color";

const PlayerButton = (props) => {
  const { iconType, size = 30, iconColor = color.FONT, onPress } = props;
  const getIconName = (type) => {
    switch (type) {
      case "PLAY":
        return "stop";
      case "PAUSE":
        return "play";
      case "NEXT":
        return "forward";
      case "PREV":
        return "backward";
    }
  };
  return (
    <Fontisto
      {...props}
      onPress={onPress}
      name={getIconName(iconType)}
      size={size}
      color={iconColor}
    />
  );
};

export default PlayerButton;
