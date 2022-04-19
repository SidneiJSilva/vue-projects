<template>
  <div class="slideshow_row">
    <div class="item">
      <textarea
        class="urls" rows="20" v-model="urls"
        @input="debug"/>
        <!-- FILES {{ files }} -->
    </div>
    <div id="slideshow"
      class="item">
    </div>
  </div>
</template>

<script>
import 'animate.css'
export default {
  computed: {
  },
  data () {
    return {
      urls: '',
      interval: undefined,
      index: 0,
      index_to_hide: 0,
      slideshow_timeout: 5,
      area_key: 'area1',
      config_key: 'config_1',
      device_id: '4e0c44b4-aedf-4f4f-8083-5b0c40f54d48',
      url: 'http://apisv2.net-bo.com:3041/queues_backoffice',
      // files: ['O00008_lambo.jpg', 'O00009_Clouds-27197.mp4', 'O00011_nissan_gt.jpg'],
      files: [],
      image_types: ['jpg', 'jpeg', 'png'],
      video_types: ['mp4'],
      media: []
    }
  },
  methods: {
    debug () {
      const self = this
      self.files = self.urls.split('\n')
      self.media = self.processMediaFiles()
      self.creteElements()
    },
    processMediaFiles () {
      const self = this
      let media = []
      self.files.forEach(file => {
        let payload = file.split('.')
        let ext = payload[payload.length - 1]
        if (self.image_types.indexOf(ext) !== -1) {
          media.push({
            id: `${self.area_key}_${file}`,
            type: 'image',
            // url: `${self.url}/device_images/${self.device_id}/${self.config_key}/${self.area_key}/slideshow/${file}`
            url: file
          })
        } else if (self.video_types.indexOf(ext) !== -1) {
          media.push({
            id: `${self.area_key}_${file}`,
            type: 'video',
            url: file
          })
        }
      })
      return media
    },
    creteElements () {
      const self = this
      for (let key in self.media) {
        let file = self.media[key]
        let elem
        if (file.type === 'image') {
          elem = document.createElement('img')
        } else {
          elem = document.createElement('video')
        }
        elem.id = file.id
        elem.style.cssText = `
          width: 100%;
          height: auto;
          visibility: hidden;
          border-radius: 20px;
          position: absolute;
        `
        elem.src = file.url

        elem.onpause = function () {
          console.log('video onpause')
          self.hideElement(self.index_to_hide)
          setTimeout(() => {
            if (self.index === self.media.length - 1) {
              self.index = 0
            } else {
              self.index++
            }
            self.startSlideshow(self.index)
          }, 500);
        }

        let parent = document.getElementById('slideshow')
        parent.appendChild(elem)

      }
      self.startSlideshow(self.index)
    },
    startSlideshow (index) {
      const self = this
      self.showElement(index)
      self.index_to_hide = index
      self.interval = setInterval(() => {
        self.hideElement(self.index_to_hide)
        setTimeout(() => {
          if (self.index === self.media.length - 1) {
            self.index = 0
            self.index_to_hide = self.index
          } else {
            self.index++
            self.index_to_hide = self.index
          }
          self.showElement(self.index)
        }, 500)
      }, self.slideshow_timeout * 1000);
    },
    showElement (index) {
      const self = this
      let elem = document.getElementById(self.media[index].id)
      elem.classList.remove('animate__fadeOut')
      elem.classList.add('animate__animated', 'animate__fadeIn')
      setTimeout(() => {
        elem.style.visibility = 'visible'
        if (self.media[index].type === 'video') {
          clearInterval(self.interval)
          elem.play()
        }
      }, 500);
    },
    hideElement (index) {
      const self = this
      let elem = document.getElementById(self.media[index].id)
      elem.classList.remove('animate__fadeIn')
      elem.classList.add('animate__animated', 'animate__fadeOut')
      setTimeout(() => {
        elem.style.visibility = 'hidden'
      }, 500)
    }
  },
  mounted () {
    // const self = this
    // self.media = self.processMediaFiles()
    // self.creteElements()
  }
}
</script>

<style>
@import './../styles/Slideshow.css';
</style>