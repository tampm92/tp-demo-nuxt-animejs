<template>
  <div class="site-tp-logo">
    <a class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
      href="/"
    >
      <img id="tp-logo" src="~/assets/images/tp.svg" alt="tp-logo" class="w-24 mr-2" />

      <div class="site-title">
        <div id="tp-logo-text" class="site-title-text">
          TP
          <span>Demo</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    const tpLogoAnimation = this.$anime.timeline({
      autoplay: true,
      delay: 200
    });

    tpLogoAnimation
      .add({
        targets: "#tp-logo",
        translateY: [-100, 0],
        opacity: [0, 1],
        elasticity: 600,
        duration: 1600
      })
      .add({
        targets: "#tp-logo",
        rotate: [-360, 0],
        duration: 3000,
        elasticity: 600,
        offset: 100
      })
      .add({
        targets: "#tp-logo-text",
        translateX: ["-100%", 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutExpo",
        offset: 1000
      });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
$slate: #3f3c3c;
$blue: #00b4ff;

@function rem($px, $base: 16) {
  @return #{$px/$base}rem;
}

.site-tp-logo {
  display: flex;
  align-items: center;
  transform: translateZ(0);
}

[id="tp-logo"] {
  position: relative;
  flex: 0 0 rem(60);
  width: rem(60);
  z-index: 2;

  polygon {
    transform-origin: 50%;
  }
  circle {
    transform-origin: 80% 80%;
  }
}

.site-title {
  position: relative;
  overflow: hidden;
  margin-left: rem(-24);
  z-index: 1;
  transform: translateZ(0);
}

.site-title-text {
  padding: rem(4) rem(6) rem(4) rem(28);
  color: $slate;
  font-size: rem(32);
  font-weight: 800;

  span {
    margin-left: rem(0.25);
    color: $blue;
  }
}
</style>