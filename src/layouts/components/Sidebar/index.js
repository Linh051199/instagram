import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Sidebar.module.scss";
import images from "../../../assets/images";
import Menu from "./Menu";
import MenuItem from "./Menu/MenuItem";
import config from "../../../config";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import {
  CompassActiveIcon,
  CompassIcon,
  CrossIcon,
  HeartActiveIcon,
  HeartIcon,
  HomeActiveIcon,
  HomeIcon,
  MessageActiveIcon,
  MessageIcon,
  MoreActiveIcon,
  MoreIcon,
  ReelsActiveIcon,
  ReelsIcon,
  SearchActiveIcon,
  SearchIcon,
} from "../../../components/Icon";
import { Wrapper as PopperWrapper } from "../../../components/Popper";
import MenuMoreBtn from "./MenuMoreBtn";

const cx = classNames.bind(styles);
function Sidebar() {
  const [isActiveBtnMore, setIsActiveBtnMore] = useState("false");

  const handleClickButtonMore = () => {
    setIsActiveBtnMore(!isActiveBtnMore);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <img src={images.logo} alt="instagram" />
      </div>
      <div className={cx("buttons")}>
        <Menu>
          <MenuItem
            title="Trang Chủ"
            to={config.routes.home}
            icon={<HomeIcon />}
            activeIcon={<HomeActiveIcon />}
          />
          <MenuItem
            title="Tìm kiếm"
            icon={<SearchIcon />}
            activeIcon={<SearchActiveIcon />}
            to={config.routes.search}
          />
          <MenuItem
            title="Khám phá"
            to={config.routes.discover}
            icon={<CompassIcon />}
            activeIcon={<CompassActiveIcon />}
          />
          <MenuItem
            title="Reels"
            to={config.routes.reels}
            icon={<ReelsIcon />}
            activeIcon={<ReelsActiveIcon />}
          />
          <MenuItem
            title="Message"
            to={config.routes.message}
            icon={<MessageIcon />}
            activeIcon={<MessageActiveIcon />}
          />
          <MenuItem
            title="Thông báo"
            icon={<HeartIcon />}
            activeIcon={<HeartActiveIcon />}
            to={config.routes.notification}
          />
        </Menu>
      </div>
      <Tippy
        interactive
        visible={!isActiveBtnMore}
        render={(attrs) => (
          <div className={cx("buttonMore__info")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <MenuMoreBtn />
            </PopperWrapper>
          </div>
        )}
      >
        <button className={cx("button-more")} onClick={handleClickButtonMore}>
          <div>{isActiveBtnMore ? <MoreIcon /> : <MoreActiveIcon />}</div>
          <span className={cx("title")}>Xem thêm</span>
        </button>
      </Tippy>
    </div>
  );
}

export default Sidebar;
