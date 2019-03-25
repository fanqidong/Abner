<template>
  <footer class="footer">
    <div class="footer-container">
        <p class="copyright" v-show="!$isMobile">
            <span>Copyright © 2017-2019</span>
            <a href="https://github.com/fanqidong" target="_blank" class="author">旅途与画</a>
            All Rights Reserved.
        </p>
        <div class="copyright" v-show="$isMobile">
            <p>
                <span>Copyright © 2017-2019</span>
                <a href="https://github.com/fanqidong" target="_blank" class="author">旅途与画</a>
            </p>
            <p>All Rights Reserved.</p>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: .5rem;
  padding: .1rem 0 .2rem 0;
  z-index: 100;
  color: #fff;
  &-container {
    max-width: 1200px;
    margin: auto;
  }
  a{
      color: #fff;
  }
  .author{
      margin: 0 .1rem;
  }
}
@media screen and (max-width:768px){
    .footer{
          background: #0c0e10;
    }
}
</style>

