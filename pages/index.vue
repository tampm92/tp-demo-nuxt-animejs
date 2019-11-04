<template>
  <div
    class="leading-normal tracking-normal text-gray-900"
    style="font-family: 'Source Sans Pro', sans-serif;"
  >
    <div class="h-screen pb-14 bg-right bg-cover" style="background-image:url('/bg.svg');">
      <!--Nav-->
      <div class="w-full container mx-auto p-6">
        <div class="w-full flex items-center justify-between">
          <TpLogo />

          <div class="flex w-1/2 justify-end content-center">
            <a
              class="social-btn inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4"
              data-tippy-content="@twitter_handle"
              href="https://twitter.com/tamphan1992"
              target="black"
            >
              <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
                />
              </svg>
            </a>
            <a
              class="social-btn inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4"
              data-tippy-content="#facebook_id"
              href="https://www.facebook.com/tam.phanminh1992"
              target="black"
            >
              <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!--Main-->
      <div
        class="container pt-24 md:pt-48 px-10 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <!--Left Col-->
        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1
            id="title"
            class="mb-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left"
          >Feature</h1>
          <div id="feature-items" class="ml-4 opacity-0">
            <p class="leading-normal text-base md:text-2xl text-center md:text-left">Vue</p>
            <p class="leading-normal text-base md:text-2xl text-center md:text-left">Nuxt</p>
            <p class="leading-normal text-base md:text-2xl text-center md:text-left">AnimeJs</p>
            <p class="leading-normal text-base md:text-2xl text-center md:text-left">Tailwind CSS</p>
          </div>

          <div
            id="lauch-demo"
            class="flex w-full mt-8 justify-center md:justify-start pb-24 lg:pb-0 opacity-0"
          >
            <a
              href="/demo"
              class="px-4 md:px-8 py-2 md:py-3 rounded-full bg-blue-400 text-white font-bold uppercase border-blue-500 border hover:bg-blue-600"
            >Lauch More Demo</a>
          </div>
        </div>

        <!--Right Col-->
        <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
          <img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="/devices.svg" />
        </div>

        <!--Footer-->
        <div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a class="text-gray-500 no-underline hover:no-underline" href="#">tp-demo&copy;2019</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TpLogo from '../components/TpLogo'

export default {
  components: {
    TpLogo,
  },
  mounted() {
    this.$anime({
      targets: "#logo",
      scale: [
        { value: 0.5, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 }
      ]
    });

    this.$anime({
      targets: ".social-btn",
      scale: [
        { value: 0.8, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1500 }
      ],
      loop: true
    });

    this.$anime
      .timeline()
      .add({
        targets: "#title",
        translateX: 150,
        easing: "easeInOutSine"
      })
      .add({
        targets: "#title",
        translateX: 0,
        easing: "easeInOutSine"
      })
      .add({
        targets: "#feature-items",
        opacity: 1,
        easing: "easeInOutSine"
      })
      .add({
        targets: "#feature-items",
        translateX: {
          value: 150,
          duration: 1500,
        },
        rotate: {
          value: 360,
          duration: 1500,
          easing: "easeInOutSine"
        },
      })
      .add({
        targets: "#feature-items",
        translateX: {
          value: 0,
          duration: 1500,
        },
      })
      .add({
        targets: "#lauch-demo",
        opacity: 1,
        easing: "easeInOutSine"
      });
  }
};
</script>

<style lang="scss" scoped>
</style>