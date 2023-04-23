import React from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import styles from "./Post.module.scss";
import {
  CommentPostIcon,
  HeartIcon,
  MorePostIcon,
  SavePostIcon,
  SharePostIcon,
} from "../../../../components/Icon";

const cx = classNames.bind(styles);

function Post({ data }) {
  console.log(data);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("post__header")}>
        <div className={cx("post__headerAuthor")}>
          <img
            className={cx("post__headerAuthorAvatar")}
            src={data.avtar}
            alt="avatar"
          />
          <div className={cx("post__headerAuthorName")}>{data.username}</div>
          <div className={cx("post__headerAuthorTime")}>
            {" "}
            • {data.hours_Posts} minutes ago
          </div>
        </div>
        <div className={cx("post__headerBtn")}>{<MorePostIcon />}</div>
      </div>
      <div className={cx("post__body")}>
        <img
          className={cx("post__image")}
          src={data.post_image}
          alt="postImage"
        />
      </div>
      <div className={cx("post__footer")}>
        <div className={cx("post__footerIcon")}>
          <div className={cx("post__footerIcon__left")}>
            <Tippy content="Yêu thích" placement="bottom">
              <div className={cx("post__footerIcon__heart")}>
                <HeartIcon />
              </div>
            </Tippy>

            <Tippy content="Bình luận" placement="bottom">
              <div className={cx("post__footerIcon__comment")}>
                <CommentPostIcon />
              </div>
            </Tippy>

            <Tippy content="Chia sẻ bài viết" placement="bottom">
              <div className={cx("post__footerIcon__share")}>
                <SharePostIcon />
              </div>
            </Tippy>
          </div>
          <div className={cx("post__footerIcon__right")}>
            <Tippy content="Lưu bài viết" placement="bottom">
              <div className={cx("post__footerIcon__save")}>
                <SavePostIcon />
              </div>
            </Tippy>
          </div>
        </div>

        <div className={cx("post__footer__liked")}></div>
      </div>
    </div>
  );
}

export default Post;
