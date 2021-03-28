import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__replay">
        <ReplayIcon fontSize="large"></ReplayIcon>
      </IconButton>
      <IconButton className="swipeButtons__close">
        <CloseIcon fontSize="large"></CloseIcon>
      </IconButton>
      <IconButton className="swipeButtons__starRate">
        <StarRateIcon fontSize="large"></StarRateIcon>
      </IconButton>
      <IconButton className="swipeButtons__favorite">
        <FavoriteIcon fontSize="large"></FavoriteIcon>
      </IconButton>

      <IconButton className="swipeButtons__flash">
        <FlashOnIcon fontSize="large"></FlashOnIcon>
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
