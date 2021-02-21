<template>
  <!-- <div id="player">
    <div class="mini-player" v-show="miniPlayerShow">
      <div class="icon" @click="playerClick">
        <div class="imgWrapper">
					<img :src="songInfoUrl" alt="">
				</div>
      </div>
      <div class="text" @click="playerClick">
        <h2>{{songInfoName}}</h2>
				<p>{{songInfoAlia}}</p>
      </div>
      <div class="control" @click="miniPauseClick">
        <img v-if="isActive" src="~assets/img/player/pause.svg" alt="" />
        <img v-else src="~assets/img/player/play-circle-f.svg" alt="" />
      </div>
      <div class="control" @click="isShow">
        <img src="~assets/img/player/task-list.svg" alt="" />
      </div>
      <mini-pupop></mini-pupop>
    </div>
    <div class="normal-player" v-show="!isPlayerShow">
      <div class="background">
        <img src="~assets/img/player/09.jpg" alt="" />
      </div>
      <div class="top">
        <div class="back" @click="backClick">
          <span class="icon-circle-down"></span>
        </div>
        <h1 class="title">{{songInfoName}}</h1>
      </div>
      <div class="middle">
        <div class="middle-l">
          <div class="cd-wrapper">
            <div class="cd" ref="cd">
              <img
                :src="songInfoUrl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="progress-wrapper">
          <span class="time time-l">{{current | changetime}}</span>
					<van-slider 
						v-model="value" 
						@change="onChange"
						@drag-end="end"
          	@drag-start="start"
					><template #button>
    					<div class="custom-button"></div>
  					</template>
					</van-slider>
          <span class="time time-r">{{time | changetime}}</span>
        </div>
				<div class="operators">
					<div class="icon i-left">
						<i class="icon-prev"></i>
					</div>
					<div class="icon i-center" @click="pauseClick">
						<img v-if="isActive" src="~assets/img/player/pause.svg" alt="" />
        		<img v-else src="~assets/img/player/play-circle-f.svg" alt="" />
					</div>
					<div class="icon i-right">
						<i class="icon-next"></i>
					</div>
				</div>
      </div>
    </div>
    <audio 
			ref="audio"
			@canplay="canplay"
			@timeupdate="updateTime"
			preload="preload"
      :src="songsUrl"
			autoplay
    ></audio>
  </div> -->
	  <div id="player" v-if="songsList[songIndex]">
    <div class="mini-player" v-show="miniPlayerShow">
      <div class="icon" @click="playerClick">
        <div class="imgWrapper">
					<img :src="songsList[songIndex].picUrl" alt="">
				</div>
      </div>
      <div class="text" @click="playerClick">
        <h2>{{songsList[songIndex].title}}</h2>
				<p>{{songsList[songIndex].artist}}</p>
      </div>
      <div class="control" @click="miniPauseClick">
        <img v-if="isActive" src="~assets/img/player/pause.svg" alt="" />
        <img v-else src="~assets/img/player/play-circle-f.svg" alt="" />
      </div>
      <div class="control" @click="isShow">
        <img src="~assets/img/player/task-list.svg" alt="" />
      </div>
      <mini-pupop></mini-pupop>
    </div>
    <div class="normal-player" v-show="!isPlayerShow">
      <div class="background">
        <img src="~assets/img/player/09.jpg" alt="" />
      </div>
      <div class="top">
        <div class="back" @click="backClick">
          <span class="icon-circle-down"></span>
        </div>
        <h1 class="title">{{songsList[songIndex].title}}</h1>
      </div>
      <div class="middle">
        <div class="middle-l">
          <div class="cd-wrapper">
            <div class="cd" ref="cd">
              <img
                :src="songsList[songIndex].picUrl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="progress-wrapper">
          <span class="time time-l">{{current | changetime}}</span>
					<van-slider 
						v-model="value" 
						@change="onChange"
						@drag-end="end"
          	@drag-start="start"
					><template #button>
    					<div class="custom-button"></div>
  					</template>
					</van-slider>
          <span class="time time-r">{{time | changetime}}</span>
        </div>
				<div class="operators">
					<div class="icon i-left">
						<i class="icon-prev"></i>
					</div>
					<div class="icon i-center" @click="pauseClick">
						<img v-if="isActive" src="~assets/img/player/pause.svg" alt="" />
        		<img v-else src="~assets/img/player/play-circle-f.svg" alt="" />
					</div>
					<div class="icon i-right">
						<i class="icon-next"></i>
					</div>
				</div>
      </div>
    </div>
    <audio 
			ref="audio"
			@canplay="canplay"
			@timeupdate="updateTime"
			preload="preload"
      :src="songsList[songIndex].songUrl"
			autoplay
    ></audio>
  </div>
</template>

<script>
import MiniPupop from "components/content/miniSongList/MiniPupop.vue";
// import { getSongUrl } from 'network/singerpage'
import { mapGetters } from 'vuex';

export default {
  components: { MiniPupop },
  name: "Player",
  data() {
    return {
      isActive: true,
			value: 0,
			time: null,
			current: 0,
			count: 0,
			songIndex: 0,
			songId: null,
			songsUrl: null,
			songInfoName: null,
			songInfoUrl: null,
			songInfoAlia: null,
    };
  },
	computed: {
		isPlayerShow: {
			get() {
				return this.$store.state.isPlayerShow
			},
			set(val) {
				
			}
		},
		miniPlayerShow: {
			get() {
				return this.$store.state.miniPlayerShow
			},
			set(val) {

			}
		},
		...mapGetters(['songsList'])
	},
	mounted() {
		// this.audioAutoPlay()
	},
	created() {
		// this.$bus.$on('successSong', (res) => {
		// 	this.songId = res.id
		// 	console.log(this.songId);
		// 	getSongUrl(this.songId).then((res) => {
		// 		console.log(res);
		// 		this.songsUrl = res.data[0].url
		// 	})
		// })
		// this.$bus.$on('songInfo',(res) => {
		// 	this.songInfoName = res.songs[0].name
		// 	this.songInfoUrl = res.songs[0].al.picUrl
		// 	this.songInfoAlia = res.songs[0].alia[0]
		// })
		this.$bus.$on('updateSong', () => {
			return this.songIndex = this.songsList.length - 1;
		})
	},
	destroyed() {
		// this.$bus.$off('successSong')
		// this.$bus.$off('songInfo')
	},
	filters: {
			changetime: function(value) {
				if(Math.floor(value % 60) < 10) {
					return Math.floor(value / 60) + ":0" + Math.floor(value % 60)
				} else {
					return Math.floor(value / 60) + ":" + Math.floor(value % 60)
				}
			}
	},
  methods: {
		// audioAutoPlay() {
		// 	let music = this.$refs.audio
		// 	if(music.paused) {//判断一下paused（pused为真是禁用的）
		// 		music.play()
		// 	}
		// },
		canplay() {
			// 总时间获取
			this.time = this.$refs.audio.duration
			console.log(this.time);
		},
		onChange(value) {
			this.$refs.audio.play()
			// this.show = true
			let tt = Math.floor((value * this.time) / 100)
			this.$refs.audio.currentTime = tt
			console.log(value);
    },
		start() {
			this.count = (this.count + 1) % 2
		},
		end() {
			this.count = (this.count + 1) % 2
		},
		updateTime(e) {
			this.current = e.target.currentTime;
			if (this.count % 2 == 0) { 
        this.value = (e.target.currentTime * 100) / this.time;
        if(isNaN(this.value)){
          this.value = 0
        }
       } 
      // if (this.value == 100) {
      //   this.show = true;
      //   this.value = 0;
      //   if(this.index!=this.music_list.length-1){
      //     this.index=this.index+1;
      //     this.music='http://localhost:3000/'+this.music_list[this.index]
      //    new Promise((resolve,reject)=>{
      //        this.$refs.audio.load()
      //        setTimeout(()=>{
      //          resolve()
      //        },1000)
      //    }).then(()=>{
      //       this.$refs.audio.play()
      //    })
         
      //   }else{
      //     return
      //   }
    },
    playerClick() {
      this.$store.commit("changeIsPlayerShow")
    },
		backClick() {
			this.$store.commit("changeIsPlayerShow")
		},
		miniPauseClick() {
			let status = this.$refs.cd.style.animationPlayState
			if(status==''|| status==='paused') {
				this.$refs.cd.style.animationPlayState = 'running'
				this.$refs.audio.play()
			} else {
				this.$refs.cd.style.animationPlayState = 'paused'
				this.$refs.audio.pause()
			}
			this.isActive = !this.isActive;
		},
    pauseClick() {
			let status = this.$refs.cd.style.animationPlayState
			console.log(status);
			if(status==''|| status==='paused') {
				this.$refs.cd.style.animationPlayState = 'running'
				this.$refs.audio.play()
			} else {
				this.$refs.cd.style.animationPlayState = 'paused'
				this.$refs.audio.pause()
			}
			this.isActive = !this.isActive;
    },
    isShow() {
      this.$store.commit("changeMiniShow");
    },
  },
};
</script>

<style scoped>
.mini-player {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  width: 100%;
  height: 60px;
  background: rgb(255, 255, 255);
}

.mini-player .icon {
  flex: 0 0 40px;
  width: 70px;
  height: 40px;
  padding: 0 10px 0 20px;
}

.mini-player .icon .imgWrapper {
  width: 40px;
  height: 40px;
}

.mini-player .icon .imgWrapper img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.mini-player .text {
  display: flex;
  flex: 1;
  flex-direction: column;
  line-height: 20px;
  overflow: hidden;
}

.mini-player .text h2 {
  margin: 0 0 2px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  color: #000;
}

.mini-player .text p {
  margin: 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #e1e1e1;
}

.mini-player .control {
  -webkit-box-flex: 0;
  flex: 0 0 30px;
  padding: 0 10px;
}

.normal-player {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 150;
  background: #222;
}

.normal-player .background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;
  filter: blur(20px);
}

.normal-player .background img {
  width: 100%;
  height: 100%;
}

.normal-player .top {
  position: relative;
  margin-bottom: 25px;
}

.normal-player .top .back {
  position: absolute;
  top: 0px;
  left: 6px;
  z-index: 50;
}

.normal-player .top .back span {
  display: block;
  color: #ffcd32;
  font-size: 22px;
  padding: 9px;
}

.icon-circle-down:before {
  content: "\ea43";
}

.normal-player .top .title {
  width: 70%;
  margin: 0 auto;
  line-height: 40px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  font-size: 18px;
  color: #fff;
}

.normal-player .middle {
  position: fixed;
  width: 100%;
  top: 80px;
  bottom: 170px;
  white-space: nowrap;
  font-size: 0;
}

.normal-player .middle .middle-l {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 100%;
  padding-top: 80%;
}

.normal-player .middle .middle-l .cd-wrapper {
  position: absolute;
  left: 10%;
  top: 0;
  width: 80%;
  box-sizing: border-box;
  height: 100%;
}

.normal-player .middle .middle-l .cd {
  width: 100%;
  height: 100%;
  border-radius: 50%;
	overflow: hidden;
	animation: frame 12s  linear infinite;
}

/* .normal-player .middle .middle-l .cd img {
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  border-radius: 50%;
  border: 10px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 100%;
  animation: frame 12s linear infinite;
  overflow: hidden;
} */

.normal-player .middle .middle-l .cd img {
	position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  border-radius: 50%;
  border: 10px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 100%;
  /* animation: frame 12s linear infinite; */
  overflow: hidden;
}

@keyframes frame {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.normal-player .bottom {
  position: absolute;
  bottom: 50px;
  width: 100%;
}

.normal-player .bottom .progress-wrapper {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;
}

.normal-player .bottom .progress-wrapper .time {
	color: #fff;
	font-size: 12px;
	-webkit-box-flex: 0;
	flex: 0 0 30px;
	line-height: 30px;
	width: 30px;
}

.time-l {
	text-align: left;
	/* padding-right: 35px; */
}

.time-r {
	text-align: right;
	/* padding-left: 35px; */
}

.custom-button {
  width: 14px;
	height: 14px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 100px;
}

/* .normal-player .bottom .progress-wrapper .progress-bar-wrapper {
	flex: 1;
	-webkit-box-flex: 1;
}

.slide {
	position: absolute;
	top: -6px;
	left: 0;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background-color: #ffcd32;
}

.fill {
	position: relative;
	height: 4px;
	background: rgba(0, 0, 0, .3);
} */

.operators {
	margin-top: 10px;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
}

.icon-prev:before {
	content: "\ea1a";
}

.icon-next:before {
	content: "\ea1b";
}

.operators .i-left {
	text-align: right;
}

.operators .icon {
	-webkit-box-flex: 1;
	flex: 1;
	color: #ffcd32;
}

.operators .i-center {
	padding: 0 20px;
	text-align: center;
}

.operators .i-right {
	text-align: left;
}

.operators .icon i {
	font-size: 36px;
}
</style>
