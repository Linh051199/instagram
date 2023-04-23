import React from "react";
import classNames from "classnames/bind";

import styles from "./MenuMoreBtn.module.scss";

import {
  HeartIcon,
  HelpIcon,
  ModeIcon,
  MorePostIcon,
  SaveMoreIcon,
  SavePostIcon,
  SettingIcon,
  TimerIcon,
} from "../../../../components/Icon";
import Menu from "../Menu";
import MenuItem from "../Menu/MenuItem";
import config from "../../../../config";

const cx = classNames.bind(styles);

function MenuMoreBtn() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("buttons")}>
        <div className={cx("button")}>
          <SettingIcon />
          <div className={cx("button__title")}>Cài đặt</div>
        </div>

        <div className={cx("button")}>
          <TimerIcon />
          <div className={cx("button__title")}>Hoạt động của bạn</div>
        </div>

        <div className={cx("button")}>
          <SaveMoreIcon />
          <div className={cx("button__title")}>Đã lưu</div>
        </div>

        <div className={cx("button")}>
          <ModeIcon />
          <div className={cx("button__title")}>Chuyển chế dộ</div>
        </div>

        <div className={cx("button")}>
          <HelpIcon />
          <div className={cx("button__title")}>Báo cáo sự cố</div>
        </div>

        <div className={cx("button__separate")}></div>
        <div className={cx("button")}>
          <div className={cx("button__title")}>Chuyển tài khoản</div>
        </div>

        <div className={cx("button")}>
          <div className={cx("button__title")}>Đăng xuất</div>
        </div>
      </div>
    </div>
  );
}

export default MenuMoreBtn;
