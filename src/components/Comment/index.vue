<template>
  <div id="comment">
    <div id="valine"></div>
  </div>
</template>

<script>
import Valine from "valine"
export default {
  name: "Comment",
  data() {
    return {}
  },
  methods: {
    //   渲染Valine 评论
    renderValine() {
      new Valine({
        el: "#valine",
        appId: this.$config.leancloud.appId,
        appKey: this.$config.leancloud.appKey,
        path: window.location.href,
        avatar: "identicon",
        notify: false,
        placeholder: "轻轻的你来了，不带走一片云彩。"
      })
    }
  },
  mounted() {
    this.renderValine()
  }
}
</script>

<style lang="scss">
/* Valine */
#valine {
  max-width: 900px;
  margin: auto;
  .vwrap,
  .vlist > .vcard {
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.66);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.24);
    border: none;
  }

  * {
    font-size: 0.15rem;
    color: #986db2;
  }

  a {
    color: #b854d4;
    &:before {
      background: #b854d4;
    }
  }

  pre {
    background: rgba(0, 0, 0, 0.08);
  }

  .power {
    display: none;
  }

  .vempty {
    padding: 0.14rem;
  }

  .vinfo {
    text-align: left;
    .vnum {
      color: #b854d4;
    }
  }

  .vwrap {
    .vinput {
      border-bottom-color: #ccc;
      &:focus {
        border-bottom-color: #b854d4;
      }
    }

    .veditor {
      min-height: 1.5rem;
      background-image: url(https://i.loli.net/2018/12/09/5c0cc2b905841.png);
      background-image: url(https://view.moezx.cc/images/2019/04/12/TIM20190412133157.png);
      background-size: 1.2rem;
      background-repeat: no-repeat;
      background-position: 100% -95%;
    }

    .vbtn {
      padding: 0;
      width: 0.8rem;
      height: 0.36rem;
      line-height: 0.36rem;
      text-align: center;
      color: #fff;
      border-radius: 3px;
      border: none;
      background-color: #986db2;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.24);
    }

    .vcontrol {
      display: flex;
      justify-content: space-between;
      padding-top: 0;
      div:first-child {
        width: 0.2rem;
      }
    }

    .vpreview {
      text-align: left;
    }
  }

  .vlist {
    padding: 0;
    .vcard {
      padding-top: 0.12rem;
      .vimg {
        margin-right: 0.12rem;
        padding: 0;
        width: 0.54rem;
        height: 0.54rem;
        border: none;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.24);
        transition: transform 1s ease-out;
        &:hover {
          animation-play-state: paused;
          transform: rotateZ(360deg);
        }
      }

      .vhead,
      .vmeta {
        text-align: left;
      }
      .vh {
        margin: 0;
        padding: 0;
        border-bottom: none;
      }
      .vnick {
        margin-right: 0.12rem;
        color: #b854d4;
      }
      .vmeta {
        display: flex;
        justify-content: space-between;
        .vtime {
          margin-right: 0.14rem;
          font-size: 0.14rem;
        }
        .vat {
          color: #b854d4;
        }
      }
      .vsys {
        margin-right: 0.12rem;
        padding: 0.02rem 0.1rem;
        font-size: 0.12rem;
        color: #fff;
        background-image: linear-gradient(to right, rgba(135, 206, 250, 0.4), rgba(255, 192, 203, 0.8));
      }
      .vcontent {
        margin-bottom: 0;
        padding-top: 0;
      }
      .vquote {
        margin: 0;
        padding-left: 0.1rem;
      }

      .expand {
        border-radius: 5px;
        &::before {
          background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.8));
        }
        &::after {
          background: rgba(255, 255, 255, 0.8);
        }
      }
    }
    > .vcard {
      margin-bottom: 0.15rem;
      padding: 0.15rem 0.12rem;
    }
  }

  .vmark {
    .valert {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      height: 100%;

      .vtext {
        padding: 0;
        letter-spacing: 2px;
        color: #fff;
        .vinput {
          padding: 0.06rem 0.08rem;
          text-align: center;
          width: 1rem;
          color: #555;
        }
      }
      .vbtns {
        margin-top: 0.12rem;
        .vsure {
          margin-left: 0.2rem;
        }
      }
    }
  }
  .vempty {
    color: #999;
  }
}
@media screen and (max-width: 768px) {
  #valine {
    width: 90%;
    margin: auto;
    * {
      font-size: 14px !important;
    }
  }
}
</style>

